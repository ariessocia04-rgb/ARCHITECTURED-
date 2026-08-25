'use client';

/**
 * TECHNICIAN WORKSPACE
 * Canonical Technician surfaces implemented here:
 *   - Assigned repair queue (dispatched jobs awaiting acceptance)
 *   - Accept / decline (decline returns the job to the queue)
 *   - Protected intake snapshot visible in job detail
 *   - Inspection & diagnosis, parts request + versioned quotation
 *   - Repair completion -> hands over to Testing/QC
 *
 * The per-job diagnosis/quotation panel lives in src/components/work-panel.tsx.
 */

import { useState } from 'react';
import type { Database, JobOrder } from '@/lib/types';
import { RequireRole, StatusBadge, TopBar, runAction, useLiveState, useSession } from '@/components/ui';
import { WorkPanel } from '@/components/work-panel';

export default function TechnicianPage() {
  const [db, refresh] = useLiveState();
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const [workingOn, setWorkingOn] = useState<string | null>(null);
  const user = useSession(db);

  async function act(action: string, payload: Record<string, unknown>) {
    const res = await runAction(action, { userId: user?.id, ...payload });
    setMsg({ good: res.ok, text: res.ok ? res.message ?? 'Done.' : res.error ?? 'Failed.' });
    if (res.ok) refresh();
  }

  if (!db || !user || user.role !== 'technician') {
    return (
      <main className="page">
        <RequireRole user={user} roles={['technician']}><span /></RequireRole>
      </main>
    );
  }

  // Queue = jobs dispatched to me; Workbench = my accepted jobs still moving.
  const queue = db.jobs.filter((j) => j.status === 'dispatched' && j.assignedTechnicianId === user.id);
  const mine = db.jobs.filter(
    (j) => j.assignedTechnicianId === user.id &&
      ['diagnosis', 'awaiting_approval', 'quotation_declined', 'repairing', 'testing'].includes(j.status),
  );
  const customerOf = (j: JobOrder) => db.customers.find((c) => c.id === j.customerId)?.name ?? '?';
  const deviceOf = (j: JobOrder) => {
    const d = db.devices.find((x) => x.id === j.deviceId);
    return d ? `${d.brand} ${d.model}` : '?';
  };

  return (
    <>
      <TopBar db={db} user={user} />
      <main className="page">
        {msg && <div className={`notice ${msg.good ? 'good' : 'bad'}`}>{msg.text}</div>}

        <section className="card">
          <h2>My Repair Queue ({queue.length})</h2>
          <p className="sub">Jobs dispatched to you. Accept to start diagnosis, or decline to send back to Front Desk.</p>
          <table className="data">
            <thead><tr><th>Code</th><th>Customer</th><th>Device</th><th>Priority</th><th>Reported problem</th><th>Actions</th></tr></thead>
            <tbody>
              {queue.map((j) => (
                <tr key={j.id}>
                  <td className="mono">{j.code}</td>
                  <td>{customerOf(j)}</td>
                  <td>{deviceOf(j)}</td>
                  <td>{j.priority}</td>
                  <td className="muted">{j.reportedProblem}</td>
                  <td style={{ display: 'flex', gap: 6 }}>
                    <button className="ok" onClick={() => act('accept_job', { jobId: j.id })}>Accept</button>
                    <button className="danger" onClick={() => act('decline_job', { jobId: j.id, reason: prompt('Reason?') ?? '' })}>Decline</button>
                  </td>
                </tr>
              ))}
              {queue.length === 0 && <tr><td colSpan={6} className="muted">Queue is empty. 🎉</td></tr>}
            </tbody>
          </table>
        </section>

        <section className="card">
          <h2>My Workbench ({mine.length})</h2>
          <p className="sub">Jobs you own that are in progress. Click one to open the work panel.</p>
          <table className="data">
            <thead><tr><th>Code</th><th>Customer</th><th>Device</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {mine.map((j) => (
                <>
                  <tr key={j.id} className="row-open" onClick={() => setWorkingOn(workingOn === j.id ? null : j.id)}>
                    <td className="mono">{j.code}</td>
                    <td>{customerOf(j)}</td>
                    <td>{deviceOf(j)}</td>
                    <td><StatusBadge status={j.status} /></td>
                    <td>{workingOn === j.id ? '▲' : '▼'}</td>
                  </tr>
                  {workingOn === j.id && (
                    <tr key={`${j.id}-panel`}>
                      <td colSpan={5} style={{ background: '#fafbfe' }}>
                        <WorkPanel job={j} db={db} onAct={act} />
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {mine.length === 0 && <tr><td colSpan={5} className="muted">Nothing in progress.</td></tr>}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
