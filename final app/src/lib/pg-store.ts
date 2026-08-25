/**
 * ============================================================================
 * POSTGRESQL PERSISTENCE — live backend hosted on Render
 * ============================================================================
 * When DATABASE_URL is set (Render → Postgres → connection string), the whole
 * database lives in PostgreSQL and every device sees the same live data.
 *
 * Design notes:
 *  - Schema is created automatically on first use (ensureSchema).
 *  - The seed dataset loads automatically into an empty database.
 *  - Structured columns for searchable fields + JSONB for nested documents
 *    (quotation, timeline, warranty…). The Database shape in types.ts is
 *    unchanged, so ALL business logic (actions.ts) works identically.
 * ============================================================================
 */

import { Pool } from 'pg';
import type {
  AuditEntry,
  Customer,
  Database,
  Device,
  ITTicket,
  InventoryPart,
  JobOrder,
  User,
} from './types';
import { buildSeedDatabase } from './seed';
import { hashPassword } from './hash';

const globalPg = globalThis as unknown as { __pool?: Pool; __schemaReady?: boolean };

export function getPool(): Pool {
  if (!globalPg.__pool) {
    const url = process.env.DATABASE_URL ?? '';
    globalPg.__pool = new Pool({
      connectionString: url,
      ssl: url.includes('localhost')
        ? false
        : { rejectUnauthorized: false }, // Render-managed Postgres
      max: 5,
    });
  }
  return globalPg.__pool;
}

/** Create tables when missing. Safe to call on every cold start. */
export async function ensureSchema(): Promise<void> {
  if (globalPg.__schemaReady) return;
  const q = getPool();
  await q.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, role TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE, job_title TEXT NOT NULL, password_hash TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS customers (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, phone TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '', address TEXT NOT NULL DEFAULT '', created_at TIMESTAMPTZ NOT NULL
    );
    CREATE TABLE IF NOT EXISTS devices (
      id TEXT PRIMARY KEY, customer_id TEXT NOT NULL REFERENCES customers(id),
      type TEXT NOT NULL, brand TEXT NOT NULL, model TEXT NOT NULL,
      serial TEXT NOT NULL DEFAULT '', notes TEXT NOT NULL DEFAULT '', created_at TIMESTAMPTZ NOT NULL
    );
    CREATE TABLE IF NOT EXISTS parts (
      id TEXT PRIMARY KEY, sku TEXT NOT NULL, name TEXT NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0, reorder_level INTEGER NOT NULL DEFAULT 0,
      unit_price NUMERIC(12,2) NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS it_tickets (
      id TEXT PRIMARY KEY, title TEXT NOT NULL, detail TEXT NOT NULL,
      job_code TEXT, status TEXT NOT NULL DEFAULT 'open',
      created_at TIMESTAMPTZ NOT NULL, resolved_at TIMESTAMPTZ
    );
    CREATE TABLE IF NOT EXISTS audit_log (
      seq BIGSERIAL PRIMARY KEY, at TIMESTAMPTZ NOT NULL, actor_name TEXT NOT NULL,
      actor_role TEXT NOT NULL, action TEXT NOT NULL, target_type TEXT NOT NULL,
      target_id TEXT NOT NULL, summary TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS counters (
      name TEXT PRIMARY KEY, value INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY, code TEXT NOT NULL UNIQUE,
      customer_id TEXT NOT NULL REFERENCES customers(id),
      device_id TEXT NOT NULL REFERENCES devices(id),
      status TEXT NOT NULL, priority TEXT NOT NULL DEFAULT 'normal',
      reported_problem TEXT NOT NULL DEFAULT '', intake_notes TEXT NOT NULL DEFAULT '',
      assigned_technician_id TEXT REFERENCES users(id), diagnosis TEXT,
      quotation JSONB, parts_requested JSONB NOT NULL DEFAULT '[]'::jsonb,
      payment JSONB, warranty JSONB, timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
      created_at TIMESTAMPTZ NOT NULL
    );
  `);
  await seedIfEmpty(q);
  globalPg.__schemaReady = true;
}

async function seedIfEmpty(q: Pool): Promise<void> {
  const { rows } = await q.query<{ n: string }>('SELECT COUNT(*)::text AS n FROM users');
  if (rows[0]?.n !== '0') return;

  const s = buildSeedDatabase();

  for (const u of s.users) {
    await q.query(
      `INSERT INTO users (id,name,role,email,job_title,password_hash) VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (id) DO NOTHING`,
      [u.id, u.name, u.role, u.email, u.jobTitle, u.passwordHash ?? hashPassword('staff123')],
    );
  }
  for (const c of s.customers) {
    await q.query(
      `INSERT INTO customers (id,name,phone,email,address,created_at) VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (id) DO NOTHING`,
      [c.id, c.name, c.phone, c.email, c.address, c.createdAt],
    );
  }
  for (const d of s.devices) {
    await q.query(
      `INSERT INTO devices (id,customer_id,type,brand,model,serial,notes,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       ON CONFLICT (id) DO NOTHING`,
      [d.id, d.customerId, d.type, d.brand, d.model, d.serial, d.notes, d.createdAt],
    );
  }
  for (const p of s.parts) {
    await q.query(
      `INSERT INTO parts (id,sku,name,stock,reorder_level,unit_price) VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (id) DO NOTHING`,
      [p.id, p.sku, p.name, p.stock, p.reorderLevel, p.unitPrice],
    );
  }
  for (const t of s.itTickets) {
    await q.query(
      `INSERT INTO it_tickets (id,title,detail,job_code,status,created_at,resolved_at) VALUES ($1,$2,$3,$4,$5,$6,$7)
       ON CONFLICT (id) DO NOTHING`,
      [t.id, t.title, t.detail, t.jobCode ?? null, t.status, t.createdAt, t.resolvedAt ?? null],
    );
  }
  for (const a of s.auditLog) {
    await q.query(
      `INSERT INTO audit_log (at,actor_name,actor_role,action,target_type,target_id,summary) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [a.at, a.actorName, a.actorRole, a.action, a.targetType, a.targetId, a.summary],
    );
  }
  await q.query(
    `INSERT INTO counters (name,value) VALUES ('job',$1)
     ON CONFLICT (name) DO UPDATE SET value = EXCLUDED.value`,
    [s.counters.job],
  );
  for (const j of s.jobs) {
    await insertJob(q, j);
  }
}

async function insertJob(q: Pool, j: JobOrder): Promise<void> {
  await q.query(
    `INSERT INTO jobs (id,code,customer_id,device_id,status,priority,reported_problem,
       intake_notes,assigned_technician_id,diagnosis,quotation,parts_requested,payment,warranty,timeline,created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
     ON CONFLICT (id) DO UPDATE SET
       code=EXCLUDED.code, customer_id=EXCLUDED.customer_id, device_id=EXCLUDED.device_id,
       status=EXCLUDED.status, priority=EXCLUDED.priority, reported_problem=EXCLUDED.reported_problem,
       intake_notes=EXCLUDED.intake_notes, assigned_technician_id=EXCLUDED.assigned_technician_id,
       diagnosis=EXCLUDED.diagnosis, quotation=EXCLUDED.quotation,
       parts_requested=EXCLUDED.parts_requested, payment=EXCLUDED.payment,
       warranty=EXCLUDED.warranty, timeline=EXCLUDED.timeline`,
    [j.id, j.code, j.customerId, j.deviceId, j.status, j.priority, j.reportedProblem,
     j.intakeNotes, j.assignedTechnicianId ?? null, j.diagnosis ?? null,
     j.quotation ? JSON.stringify(j.quotation) : null, JSON.stringify(j.partsRequested ?? []),
     j.payment ? JSON.stringify(j.payment) : null, j.warranty ? JSON.stringify(j.warranty) : null,
     JSON.stringify(j.timeline ?? []), j.createdAt],
  );
}

/** Load the complete Database object from PostgreSQL. */
export async function loadDbFromPg(): Promise<Database> {
  await ensureSchema();
  const q = getPool();

  const [usersR, customersR, devicesR, partsR, ticketsR, auditR, countersR, jobsR] =
    await Promise.all([
      q.query('SELECT * FROM users ORDER BY id'),
      q.query('SELECT * FROM customers ORDER BY created_at'),
      q.query('SELECT * FROM devices ORDER BY created_at'),
      q.query('SELECT * FROM parts ORDER BY sku'),
      q.query('SELECT * FROM it_tickets ORDER BY created_at'),
      q.query('SELECT * FROM audit_log ORDER BY seq'),
      q.query(`SELECT value FROM counters WHERE name = 'job'`),
      q.query('SELECT * FROM jobs ORDER BY created_at'),
    ]);

  const users: User[] = usersR.rows.map((r) => ({
    id: r.id, name: r.name, role: r.role, email: r.email,
    jobTitle: r.job_title, passwordHash: r.password_hash,
  }));
  const customers: Customer[] = customersR.rows.map((r) => ({
    id: r.id, name: r.name, phone: r.phone, email: r.email,
    address: r.address, createdAt: r.created_at.toISOString(),
  }));
  const devices: Device[] = devicesR.rows.map((r) => ({
    id: r.id, customerId: r.customer_id, type: r.type, brand: r.brand,
    model: r.model, serial: r.serial, notes: r.notes, createdAt: r.created_at.toISOString(),
  }));
  const parts: InventoryPart[] = partsR.rows.map((r) => ({
    id: r.id, sku: r.sku, name: r.name, stock: Number(r.stock),
    reorderLevel: Number(r.reorder_level), unitPrice: Number(r.unit_price),
  }));
  const itTickets: ITTicket[] = ticketsR.rows.map((r) => ({
    id: r.id, title: r.title, detail: r.detail, jobCode: r.job_code ?? undefined,
    status: r.status, createdAt: r.created_at.toISOString(),
    resolvedAt: r.resolved_at ? r.resolved_at.toISOString() : undefined,
  }));
  const auditLog: AuditEntry[] = auditR.rows.slice(-300).map((r) => ({
    at: r.at.toISOString(), actorName: r.actor_name, actorRole: r.actor_role,
    action: r.action, targetType: r.target_type, targetId: r.target_id, summary: r.summary,
  }));

  const jobs: JobOrder[] = jobsR.rows.map((r) => ({
    id: r.id, code: r.code, customerId: r.customer_id, deviceId: r.device_id,
    status: r.status, priority: r.priority,
    reportedProblem: r.reported_problem, intakeNotes: r.intake_notes,
    assignedTechnicianId: r.assigned_technician_id ?? undefined,
    diagnosis: r.diagnosis ?? undefined,
    quotation: r.quotation ?? undefined,
    partsRequested: r.parts_requested ?? [],
    payment: r.payment ?? undefined,
    warranty: r.warranty ?? undefined,
    timeline: r.timeline ?? [],
    createdAt: r.created_at.toISOString(),
  }));

  return {
    tenant: { id: 'ten-01', name: 'GadgetCare Repair Solutions', branch: 'Manila Main Branch', currency: 'PHP' },
    users, customers, devices, parts, jobs, itTickets, auditLog,
    counters: { job: countersR.rows[0] ? Number(countersR.rows[0].value) : 0 },
  };
}

/** Persist the full Database snapshot (small pilot volumes — single transaction). */
export async function saveDbToPg(db: Database): Promise<void> {
  const q = getPool();
  const client = await q.connect();
  try {
    await client.query('BEGIN');
    for (const u of db.users) {
      if (!u.passwordHash) continue; // never wipe stored hashes
      await client.query(
        `INSERT INTO users (id,name,role,email,job_title,password_hash) VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, role=EXCLUDED.role,
           email=EXCLUDED.email, job_title=EXCLUDED.job_title`,
        [u.id, u.name, u.role, u.email, u.jobTitle, u.passwordHash],
      );
    }
    for (const c of db.customers) {
      await client.query(
        `INSERT INTO customers (id,name,phone,email,address,created_at) VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, phone=EXCLUDED.phone,
           email=EXCLUDED.email, address=EXCLUDED.address`,
        [c.id, c.name, c.phone, c.email, c.address, c.createdAt],
      );
    }
    for (const d of db.devices) {
      await client.query(
        `INSERT INTO devices (id,customer_id,type,brand,model,serial,notes,created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
         ON CONFLICT (id) DO UPDATE SET customer_id=EXCLUDED.customer_id, type=EXCLUDED.type,
           brand=EXCLUDED.brand, model=EXCLUDED.model, serial=EXCLUDED.serial, notes=EXCLUDED.notes`,
        [d.id, d.customerId, d.type, d.brand, d.model, d.serial, d.notes, d.createdAt],
      );
    }
    for (const p of db.parts) {
      await client.query(
        `INSERT INTO parts (id,sku,name,stock,reorder_level,unit_price) VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT (id) DO UPDATE SET sku=EXCLUDED.sku, name=EXCLUDED.name,
           stock=EXCLUDED.stock, reorder_level=EXCLUDED.reorder_level, unit_price=EXCLUDED.unit_price`,
        [p.id, p.sku, p.name, p.stock, p.reorderLevel, p.unitPrice],
      );
    }
    for (const t of db.itTickets) {
      await client.query(
        `INSERT INTO it_tickets (id,title,detail,job_code,status,created_at,resolved_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7)
         ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title, detail=EXCLUDED.detail,
           status=EXCLUDED.status, resolved_at=EXCLUDED.resolved_at`,
        [t.id, t.title, t.detail, t.jobCode ?? null, t.status, t.createdAt, t.resolvedAt ?? null],
      );
    }
    // Audit log is append-only in PG; prune beyond the newest 300 entries.
    await client.query(`
      DELETE FROM audit_log WHERE seq <= (
        SELECT COALESCE(MAX(seq),0) - 300 FROM audit_log)`);
    for (const a of db.auditLog.slice(-50)) {
      await client.query(
        `INSERT INTO audit_log (at,actor_name,actor_role,action,target_type,target_id,summary)
         SELECT $1,$2,$3,$4,$5,$6,$7
         WHERE NOT EXISTS (
           SELECT 1 FROM audit_log WHERE at=$1 AND action=$4 AND target_id=$6 AND summary=$7)`,
        [a.at, a.actorName, a.actorRole, a.action, a.targetType, a.targetId, a.summary],
      );
    }
    await client.query(
      `INSERT INTO counters (name,value) VALUES ('job',$1)
       ON CONFLICT (name) DO UPDATE SET value = EXCLUDED.value`,
      [db.counters.job],
    );
    for (const j of db.jobs) {
      await insertJob(client as unknown as Pool, j); // same SQL runs on the client
    }
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}
