'use client';

/**
 * ============================================================================
 * SHARED UI COMPONENTS
 * Small, reused building blocks so every workspace looks and behaves the same.
 * ============================================================================
 */

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import type { Database, JobOrder, Role, TimelineEntry, User } from '@/lib/types';
import { STATUS_GROUPS, STATUS_LABELS } from '@/lib/workflow';
import { dateTime } from '@/lib/format';

/** Reads the logged-in user from localStorage (demo session). */
export function useSession(db: Database | null): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!db) return;
    const id = window.localStorage.getItem('final_app_user_id');
    setUser(id ? db.users.find((u) => u.id === id) ?? null : null);
  }, [db]);

  return user;
}

/**
 * LIVE DATA HOOK — single source of realtime behavior (used by every
 * workspace, replacing five previously duplicated implementations).
 * Loads /api/state immediately, then re-syncs every 4 seconds while the tab
 * is visible; also returns a manual refresh used after each user action.
 */
export function useLiveState(): [Database | null, () => void] {
  const [db, setDb] = useState<Database | null>(null);

  const refresh = useCallback(() => {
    fetch('/api/state').then((r) => r.json()).then(setDb).catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    const t = setInterval(() => { if (!document.hidden) refresh(); }, 4000);
    return () => clearInterval(t);
  }, [refresh]);

  return [db, refresh];
}

/** Top navigation bar with tenant context, role, and logout. */
export function TopBar({ db, user }: { db: Database; user: User }) {
  const router = useRouter();
  const roleLabel = user.jobTitle;

  return (
    <header className="topbar">
      <span className="app-name">🔧 {db.tenant.name}</span>
      <span className="muted" style={{ color: 'rgba(255,255,255,.8)' }}>{db.tenant.branch}</span>
      <Link className="navlink" href="/front-desk">Front Desk</Link>
      <Link className="navlink" href="/technician">Technician</Link>
      <Link className="navlink" href="/qc">QC</Link>
      <Link className="navlink" href="/owner">Owner</Link>
      <Link className="navlink" href="/customer">Customer Portal</Link>
      <Link className="navlink" href="/wireframes">Wireflows</Link>
      <span className="who">
        {user.name} — {roleLabel}
        <br />
        <button
          className="mini"
          onClick={() => {
            // Full logout: clear every session key for this device.
            window.localStorage.removeItem('final_app_user_id');
            window.localStorage.removeItem('final_app_user_name');
            router.push('/');
          }}
        >
          Log out
        </button>
      </span>
    </header>
  );
}

/** Colored status pill. */
export function StatusBadge({ status }: { status: JobOrder['status'] }) {
  return <span className={`badge ${STATUS_GROUPS[status]}`}>{STATUS_LABELS[status]}</span>;
}

/** Vertical process timeline for a job order. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="timeline">
      {[...entries].reverse().map((e, i) => (
        <li key={i}>
          <strong>{e.detail}</strong>
          <div className="t-when">
            {e.actorName} ({e.actorRole.replace('_', ' ')}) · {dateTime(e.at)}
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Workspace guard: shows a friendly notice instead of data when nobody is
 * logged in, or when the current page belongs to a different role.
 */
export function RequireRole({
  user,
  roles,
  children,
}: {
  user: User | null;
  roles: Role[];
  children: React.ReactNode;
}) {
  if (!user) {
    return (
      <div className="page">
        <div className="card">
          <h2>Please log in</h2>
          <p className="sub">Choose your workspace persona on the start page to continue.</p>
          <Link className="btn" href="/">Go to login</Link>
        </div>
      </div>
    );
  }
  if (!roles.includes(user.role)) {
    return (
      <div className="page">
        <div className="card">
          <h2>Not available for your role</h2>
          <p className="sub">
            You are logged in as <strong>{user.name}</strong> ({user.jobTitle}). This workspace is
            reserved for: {roles.join(', ')}.
          </p>
          <Link className="btn" href="/">Switch persona</Link>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}

/** Calls POST /api/action and returns the parsed result. */
export async function runAction(
  action: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; message?: string; error?: string }> {
  const res = await fetch('/api/action', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, ...payload }),
  });
  return res.json();
}
