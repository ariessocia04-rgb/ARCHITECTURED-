/**
 * GET /api/state
 * Returns the full database snapshot. Workspaces are client-rendered pages
 * that fetch this once on load and after each action.
 *
 * Security note (documented): this is a local pilot build; the canonical RLS
 * tenant-isolation model from the architecture docs applies when the Supabase
 * persistence layer is connected. See docs/ARCHITECTURE.md.
 */

import { NextResponse } from 'next/server';
import { getDb, isLiveMode } from '@/lib/store';
import { clientIp, limitApi, tooMany } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const verdict = limitApi(clientIp(request));
  if (!verdict.ok) return tooMany(verdict);

  const db = await getDb();
  // Strip password hashes before sending anything to a client.
  const safe = {
    ...db,
    users: db.users.map(({ passwordHash: _ph, ...u }) => u),
    liveMode: isLiveMode(),
  };
  return NextResponse.json(safe);
}
