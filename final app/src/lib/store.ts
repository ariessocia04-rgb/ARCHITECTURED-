/**
 * ============================================================================
 * DATA STORE — dual mode
 * ============================================================================
 * 1. LIVE MODE (DATABASE_URL set → Render PostgreSQL):
 *    Every device shares one live database. Realtime across laptop/tablet/
 *    phone comes from the UI polling /api/state every few seconds.
 *
 * 2. LOCAL MODE (no DATABASE_URL):
 *    JSON file at data/db.json — zero-config offline development.
 *
 * All business logic is mode-agnostic: it mutates a Database object through
 * getDb()/updateDb() and never knows where the bytes live.
 * ============================================================================
 */

import fs from 'fs';
import path from 'path';
import type { AuditEntry, Database, Role, TimelineEntry } from './types';
import { buildSeedDatabase } from './seed';
import { loadDbFromPg, saveDbToPg } from './pg-store';

// ---------------------------------------------------------------------------
// Local JSON fallback (development without DATABASE_URL)
// ---------------------------------------------------------------------------

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'db.json');
const globalStore = globalThis as unknown as { __finalAppDb?: Database };

function getJsonDb(): Database {
  if (globalStore.__finalAppDb) return globalStore.__finalAppDb;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(DB_PATH)) {
    try {
      const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8')) as Database;
      globalStore.__finalAppDb = db;
      return db;
    } catch {
      // corrupt file: re-seed rather than crash
    }
  }
  const seeded = buildSeedDatabase();
  saveJsonDb(seeded);
  return seeded;
}

function saveJsonDb(db: Database): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
  globalStore.__finalAppDb = db;
}

// ---------------------------------------------------------------------------
// Public API (async — Postgres I/O; awaited identically in local mode)
// ---------------------------------------------------------------------------

export function isLiveMode(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export async function getDb(): Promise<Database> {
  if (isLiveMode()) return loadDbFromPg();
  return getJsonDb();
}

/** Apply mutations atomically: load -> mutate -> persist -> return result. */
export async function updateDb<T>(mutator: (db: Database) => T): Promise<T> {
  const db = await getDb();
  const result = mutator(db);
  if (isLiveMode()) {
    await saveDbToPg(db);
  } else {
    saveJsonDb(db);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Shared helpers used by the action handlers
// ---------------------------------------------------------------------------

export function nowIso(): string {
  return new Date().toISOString();
}

export function nextJobCode(db: Database): string {
  db.counters.job += 1;
  return `JOB-2026-${String(db.counters.job).padStart(4, '0')}`;
}

export function makeTimelineEntry(
  actorName: string,
  actorRole: Role,
  event: string,
  detail: string,
): TimelineEntry {
  return { at: nowIso(), actorName, actorRole, event, detail };
}

export function makeAuditEntry(
  actorName: string,
  actorRole: Role,
  action: string,
  targetType: string,
  targetId: string,
  summary: string,
): AuditEntry {
  return { at: nowIso(), actorName, actorRole, action, targetType, targetId, summary };
}

/** Standard error shape returned to the UI. */
export class ActionError extends Error {}
