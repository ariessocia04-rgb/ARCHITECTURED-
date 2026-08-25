/**
 * Shared low-level helpers for actions.ts (kept small so each file stays
 * readable). Also re-exports store utilities under one import path.
 */

export { getDb, updateDb, isLiveMode } from './store';
export {
  ActionError,
  makeAuditEntry,
  makeTimelineEntry,
  nextJobCode,
  nowIso,
} from './store';

import type { Database } from './types';
export type DbLike = Database;
