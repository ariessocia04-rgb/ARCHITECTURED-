/**
 * ============================================================================
 * RATE LIMITING & BRUTE-FORCE PROTECTION
 * ============================================================================
 * Applied OWASP Authentication Cheat Sheet guidance:
 *   - Throttle login attempts per IP AND track failures per account.
 *   - Soft lockout with a time window (no permanent lockout -> no DoS on users).
 *   - Generic error messages so attackers cannot enumerate valid emails.
 *   - Separate, looser budgets for normal API traffic to keep the server
 *     responsive under load while still rejecting floods.
 *
 * Implementation: fixed-window counters in process memory. This is the right
 * size for a single-instance pilot; when scaling to many serverless instances,
 * move the same interface onto Redis/Postgres without touching call sites.
 * ============================================================================
 */

type Bucket = { count: number; resetAt: number };

const globalLimiter = globalThis as unknown as {
  __rateBuckets?: Map<string, Bucket>;
};

function buckets(): Map<string, Bucket> {
  if (!globalLimiter.__rateBuckets) globalLimiter.__rateBuckets = new Map();
  return globalLimiter.__rateBuckets;
}

export interface RateVerdict {
  ok: boolean;
  retryAfterSec: number;
}

/** Consume one unit from `key`'s window. Returns ok=false when exhausted. */
export function rateLimit(key: string, limit: number, windowMs: number): RateVerdict {
  const now = Date.now();
  const store = buckets();

  // Opportunistic cleanup so the map cannot grow unbounded.
  if (store.size > 5000) {
    for (const [k, b] of store) if (b.resetAt < now) store.delete(k);
  }

  const bucket = store.get(key);
  if (!bucket || bucket.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSec: 0 };
  }
  bucket.count += 1;
  if (bucket.count > limit) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)) };
  }
  return { ok: true, retryAfterSec: 0 };
}

// --- Policy presets ---------------------------------------------------------

const MIN = 60_000;

/** Any API route: generous ceiling against floods/abuse (per IP). */
export function limitApi(ip: string): RateVerdict {
  return rateLimit(`api:${ip}`, 120, MIN);
}

/** Login attempts per IP — tight window against password spraying. */
export function limitLoginIp(ip: string): RateVerdict {
  return rateLimit(`login-ip:${ip}`, 8, 10 * MIN);
}

/**
 * Failed logins per account — OWASP-style soft lockout: after 5 failures the
 * account ignores further tries for 15 minutes EVEN IF the password is right.
 * Call recordLoginFailure()/clearLoginFailures() around verification.
 */
export function checkAccountLock(email: string): RateVerdict {
  return rateLimit(`login-fail:${email.toLowerCase()}`, 5, 15 * MIN);
}
export function recordLoginFailure(email: string): void {
  rateLimit(`login-fail:${email.toLowerCase()}`, Number.MAX_SAFE_INTEGER, 15 * MIN);
}
export function clearLoginFailures(email: string): void {
  buckets().delete(`login-fail:${email.toLowerCase()}`);
}

/** Best-effort client IP behind proxies (Vercel/Render set x-forwarded-for). */
export function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'local';
}

/** Standard 429 JSON response with Retry-After (clients can back off politely). */
export function tooMany(verdict: RateVerdict): Response {
  return new Response(
    JSON.stringify({
      ok: false,
      error: `Too many requests. Please wait ${verdict.retryAfterSec}s and try again.`,
    }),
    {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': String(verdict.retryAfterSec) },
    },
  );
}
