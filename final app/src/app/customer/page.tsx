'use client';

/**
 * CUSTOMER PORTAL
 * Safe customer-facing tracking surface:
 *   - Look up a repair by its job code (e.g. JOB-2026-0001)
 *   - See live status, full timeline, and the exact quotation version
 *   - Approve or decline the pending quotation (linked to that version)
 */

import { useState } from 'react';
import type { Database, JobOrder } from '@/lib/types';
import { peso, dateTime, dateOnly } from '@/lib/format';
import { RequireRole, StatusBadge, Timeline, TopBar, runAction, useLiveState, useSession } from '@/components/ui';

export default function CustomerPage() {
  const [db, refresh] = useLiveState();
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const [code, setCode] = useState('');
  const user = useSession(db);

  async function act(action: string, payload: Record<string, unknown>) {
    const res = await runAction(action, { userId: user?.id, ...payload });
    setMsg({ good: res.ok, text: res.ok ? res.message ?? 'Done.' : res.error ?? 'Failed.' });
    if (res.ok) refresh();
  }

  if (!db || !user || user.role !== 'customer') {
    return (
      <main className="page">
        <RequireRole user={user} roles={['customer']}><span /></RequireRole>
      </main>
    );
  }

  // Demo convenience: list this customer's jobs; plus manual code lookup.
  const myJobs = db.jobs.filter((j) => {
    const c = db.customers.find((x) => x.id === j.customerId);
    return c && (c.email === user.email || c.name === user.name);
  });
  const found = code.trim()
    ? db.jobs.find((j) => j.code.toLowerCase() === code.trim().toLowerCase())
    : undefined;
  const shown: JobOrder[] = found ? [found] : myJobs;

  return (
    <>
      <TopBar db={db} user={user} />
      <main className="page">
        {msg && <div className={`notice ${msg.good ? 'good' : 'bad'}`}>{msg.text}</div>}

        <section className="card">
          <h2>Track Your Repair</h2>
          <p className="sub">Enter the job code from your intake receipt (e.g. JOB-2026-0001), or view your repairs below.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="JOB-2026-XXXX" style={{ width: 220 }} />
          </div>
          {code.trim() && !found && (
            <div className="notice bad" style={{ marginTop: 8 }}>No repair found with code “{code}”.</div>
          )}
        </section>

        {shown.map((job) => (
          <section className="card" key={job.id}>
            <h2>{job.code} <StatusBadge status={job.status} /></h2>
            <p className="muted" style={{ margin: '0.2rem 0' }}>
              Device: {(() => {
                const d = db.devices.find((x) => x.id === job.deviceId);
                return d ? `${d.brand} ${d.model} (${d.type})` : '?';
              })()}
            </p>

            {/* Quotation decision — linked to the exact version */}
            {job.status === 'awaiting_approval' && job.quotation && !job.quotation.decision && (
              <div style={{ border: '1px solid var(--line)', borderRadius: 8, padding: '0.8rem', margin: '0.6rem 0' }}>
                <h3>Quotation v{job.quotation.version} — needs your decision</h3>
                <table className="data">
                  <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr></thead>
                  <tbody>
                    {job.quotation.items.map((it, i) => (
                      <tr key={i}><td>{it.description}</td><td>{it.qty}</td><td>{peso(it.unitPrice)}</td><td>{peso(it.qty * it.unitPrice)}</td></tr>
                    ))}
                    <tr><td><strong>Labor</strong></td><td></td><td></td><td><strong>{peso(job.quotation.laborFee)}</strong></td></tr>
                    <tr><td colSpan={3}><strong>Total</strong></td><td><strong>{peso(job.quotation.total)}</strong></td></tr>
                  </tbody>
                </table>
                <p className="muted">Sent {dateTime(job.quotation.sentAt)}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="ok" onClick={() => act('customer_decision', { jobId: job.id, decision: 'approved' })}>✓ Approve &amp; start repair</button>
                  <button className="danger" onClick={() => act('customer_decision', { jobId: job.id, decision: 'declined' })}>✗ Decline</button>
                </div>
              </div>
            )}

            {job.quotation?.decision === 'approved' && (
              <p className="notice good">You approved quotation v{job.quotation.version} on {dateTime(job.quotation.decidedAt ?? '')}.</p>
            )}
            {job.warranty && (
              <p className="notice good">
                🛡️ Warranty active for {job.warranty.months} months — until {dateOnly(job.warranty.expiresAt)}.
              </p>
            )}

            <Timeline entries={job.timeline} />
          </section>
        ))}

        {!found && myJobs.length === 0 && (
          <section className="card"><p className="muted">No repairs yet. Your shop will register you at intake.</p></section>
        )}
      </main>
    </>
  );
}
