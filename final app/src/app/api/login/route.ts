/**
 * POST /api/login — real multi-user authentication (works from any device).
 *
 * Security layers (OWASP Authentication Cheat Sheet):
 *   1. Per-IP login throttling — blocks password spraying from one address.
 *   2. Per-account soft lockout — 5 failures locks the account for 15 min,
 *      even for correct passwords afterwards.
 *   3. Generic error message — never reveals whether the email exists
 *      (prevents user enumeration).
 *   4. scrypt-hashed passwords compared with timing-safe comparison.
 */

import { NextResponse } from 'next/server';
import { getDb } from '@/lib/store';
import { verifyPassword } from '@/lib/hash';
import {
  checkAccountLock,
  clearLoginFailures,
  clientIp,
  limitLoginIp,
  recordLoginFailure,
  tooMany,
} from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Layer 1: per-IP throttle.
  const ipVerdict = limitLoginIp(clientIp(request));
  if (!ipVerdict.ok) return tooMany(ipVerdict);

  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const password = body.password ?? '';

  // Layer 2: per-account lockout window after repeated failures.
  const lockVerdict = checkAccountLock(email);
  if (!lockVerdict.ok) return tooMany(lockVerdict);

  if (!email || !password) {
    return NextResponse.json({ ok: false, error: 'Email and password are required.' }, { status: 400 });
  }

  const db = await getDb();
  const user = db.users.find((u) => u.email.toLowerCase() === email);
  const valid = Boolean(user) && verifyPassword(password, user!.passwordHash);

  // Layer 3: one generic message for every failure shape.
  if (!user || !valid) {
    recordLoginFailure(email);
    return NextResponse.json(
      { ok: false, error: 'Incorrect email or password.' },
      { status: 401 },
    );
  }

  clearLoginFailures(email);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _ph, ...publicUser } = user;
  return NextResponse.json({ ok: true, user: publicUser });
}
