'use client';

/**
 * QUALITY CONTROL WORKSPACE
 * Functional testing gate: pass moves the job to "Ready for Payment";
 * fail returns it to repair with notes (audited, per the master flow).
 */

import { useState } from 'react';
import type { Database } from '@/lib/types';
import { RequireRole, StatusBadge, Timeline, TopBar, runAction, useLiveState, useSession } from '@/components/ui';

export default function QcPage() {
  const [db, refresh] = useLiveState();
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const user = useSession(db);

  async function act(action: string, payload: Record<string, unknown>) {
    const res = await runAction(action, { userId: user?.id, ...payload });
    setMsg({ good: res.ok, text: res.ok ? res.message ?? 'Done.' : res.error ?? 'Failed.' });
    if (res.ok) refresh();
  }

  if (!db || !user || user.role !== 'qc') {
    return (
      <main className="page">
        <RequireRole user={user} roles={['qc']}><span /></RequireRole>
      </main>
    );
  }

  const inTesting = db.jobs.filter((j) => j.status === 'testing');

  return (
    <>
      <TopBar db={db} user={user} />
      <main className="page">
        {msg && <div className={`notice ${msg.good ? 'good' : 'bad'}`}>{msg.text}</div>}

        <section className="card">
          <h2>Testing Queue ({inTesting.length})</h2>
          <p className="sub">Repairs submitted by technicians. Test functionally before approving.</p>
          {inTesting.map((j) => {
            const customer = db.customers.find((c) => c.id === j.customerId);
            const device = db.devices.find((d) => d.id === j.deviceId);
            return (
              <div key={j.id} className="card" style={{ marginBottom: '0.8rem' }}>
                <h3 className="mono">{j.code} — {customer?.name} · {device ? `${device.brand} ${device.model}` : ''}</h3>
                <p className="muted" style={{ margin: '0.2rem 0' }}>
                  <strong>Diagnosis:</strong> {job_diagnosis(j)}<br />
                  <strong>Reported:</strong> {j.reportedProblem}
                </p>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  act('qc_decision', { jobId: j.id, result: f.get('result'), notes: f.get('notes') });
                }}>
                  <label className="field"><span>QC decision</span>
                    <select name="result" defaultValue="pass">
                      <option value="pass">PASS — all checks OK</option>
                      <option value="fail">FAIL — return to repair</option>
                    </select>
                  </label>
                  <label className="field"><span>QC notes</span><input name="notes" placeholder="What was tested / why failed" /></label>
                  <button type="submit">Submit decision</button>
                </form>
                <Timeline entries={j.timeline.slice(-3)} />
              </div>
            );
          })}
          {inTesting.length === 0 && <p className="muted">Nothing waiting for testing.</p>}
        </section>

        <section className="card">
          <h2>Recently Approved / In Pipeline</h2>
          <table className="data">
            <thead><tr><th>Code</th><th>Status</th></tr></thead>
            <tbody>
              {db.jobs.filter((j) => !inTesting.includes(j)).slice(-6).map((j) => (
                <tr key={j.id}><td className="mono">{j.code}</td><td><StatusBadge status={j.status} /></td></tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

function job_diagnosis(j: Database['jobs'][number]): string {
  return j.diagnosis ?? '—';
}
