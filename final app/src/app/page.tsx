'use client';

/**
 * LOGIN — real multi-user authentication.
 * Each person logs in with email + password from any device; the session is
 * stored per device. Passwords are verified server-side against scrypt hashes
 * (POST /api/login). Quick-fill buttons are provided for the seeded pilot
 * accounts so you never have to memorize demo credentials.
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Database, User } from '@/lib/types';

/** /api/state response = Database plus the liveMode flag. */
type StateResponse = Database & { liveMode?: boolean };

const DEMO_ACCOUNTS = [
  { email: 'maria@gadgetcare.ph', label: 'Maria — Owner', password: 'staff123' },
  { email: 'alex@gadgetcare.ph', label: 'Alex — Front Desk', password: 'staff123' },
  { email: 'jordan@gadgetcare.ph', label: 'Jordan — Technician', password: 'staff123' },
  { email: 'sam@gadgetcare.ph', label: 'Sam — QC', password: 'staff123' },
  { email: 'ana@example.com', label: 'Ana — Customer', password: 'customer123' },
];

const HOME_BY_ROLE: Record<string, string> = {
  owner: '/owner',
  front_desk: '/front-desk',
  technician: '/technician',
  qc: '/qc',
  customer: '/customer',
};

export default function LoginPage() {
  const router = useRouter();
  const [db, setDb] = useState<StateResponse | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch('/api/state')
      .then((r) => r.json())
      .then(setDb)
      .catch(() => setError('Could not reach the server. Check your connection.'));
  }, []);

  async function login(e: string, p: string) {
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e, password: p }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? 'Login failed.');
        return;
      }
      const user = data.user as User;
      window.localStorage.setItem('final_app_user_id', user.id);
      window.localStorage.setItem('final_app_user_name', user.name);
      router.push(HOME_BY_ROLE[user.role] ?? '/');
    } catch {
      setError('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="page">
      <div className="card">
        <h1 style={{ marginTop: 0 }}>🔧 Final App — Repair Shop Operations</h1>
        <p className="sub">
          {db?.tenant.name ?? 'Loading…'} · {db?.tenant.branch ?? ''} · Currency: PHP{' '}
          {db?.liveMode && <span className="badge success">● LIVE — all devices synced</span>}
          {db && !db.liveMode && <span className="badge muted">local mode</span>}
        </p>

        {error && <div className="notice bad">{error}</div>}

        <form onSubmit={(e) => { e.preventDefault(); login(email, password); }}>
          <label className="field"><span>Email</span>
            <input type="email" value={email} onChange={(e2) => setEmail(e2.target.value)} required autoComplete="username" />
          </label>
          <label className="field"><span>Password</span>
            <input type="password" value={password} onChange={(e2) => setPassword(e2.target.value)} required autoComplete="current-password" />
          </label>
          <button type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>

        <h3>Quick sign-in (pilot accounts)</h3>
        <div className="personas">
          {DEMO_ACCOUNTS.map((a) => (
            <button key={a.email} className="persona" disabled={busy}
              onClick={() => { setEmail(a.email); setPassword(a.password); login(a.email, a.password); }}>
              <div className="p-name">{a.label}</div>
              <div className="p-desc mono">{a.password}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Live &amp; multi-device</h2>
        <p className="muted">
          Every screen refreshes itself automatically — when anyone acts (front desk dispatches,
          customer approves, QC passes), all other devices see it within seconds. Works on laptop,
          tablet, and phone.
        </p>
        <p className="muted">
          🗺️ New here? Explore the{' '}
          <a href="/wireframes" style={{ color: 'var(--brand)' }}>clickable wireframe &amp; wireflow map</a>{' '}
          of the whole repair journey.
        </p>
        <p className="muted mono">Walkthrough: docs/DEMO_SCRIPT.md</p>
      </div>
    </main>
  );
}
