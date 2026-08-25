/**
 * POST /api/action
 * Single controlled entry point for every mutation in the app.
 *
 * Body: { action: string, userId?: string, ...payload }
 *
 * The business rules live in src/lib/actions.ts; this route only:
 *   1. Parses and validates the request body.
 *   2. Runs the action inside the JSON store transaction.
 *   3. Returns either { ok: true, message } or { ok: false, error } with a
 *      human-readable explanation so every workspace can show clear feedback.
 */

import { NextResponse } from 'next/server';
import { updateDb } from '@/lib/store';
import { performAction } from '@/lib/actions';
import { ActionError } from '@/lib/action-helpers';
import { clientIp, limitApi, tooMany } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const verdict = limitApi(clientIp(request));
  if (!verdict.ok) return tooMany(verdict);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const action = typeof body.action === 'string' ? body.action : '';
  if (!action) {
    return NextResponse.json({ ok: false, error: 'Missing "action" field.' }, { status: 400 });
  }

  try {
    const result = await updateDb((db) => performAction(db, action, body));
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message =
      err instanceof ActionError ? err.message : 'Unexpected server error while performing the action.';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
