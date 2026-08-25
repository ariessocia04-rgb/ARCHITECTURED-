'use client';

/**
 * FRONT DESK JOBS BOARD
 * Active jobs table with per-status "next action" controls and the full
 * process timeline. Split from page.tsx to keep each file readable.
 */

import Link from 'next/link';
import { useState } from 'react';
import type { Database, JobOrder } from '@/lib/types';
import { peso, dateTime } from '@/lib/format';
import { StatusBadge, Timeline } from '@/components/ui';

type Act = (action: string, payload: Record<string, unknown>) => void;

export function JobsBoard({ db, onAct }: { db: Database; onAct: Act }) {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const activeJobs = db.jobs.filter((j) => !['released', 'cancelled'].includes(j.status));
  const technicians = db.users.filter((u) => u.role === 'technician');

  return (
    <section className="card">
      <h2>Active Jobs ({activeJobs.length})</h2>
      <p className="sub">Click a row to open its controls and full timeline.</p>
      <table className="data">
        <thead>
          <tr><th>Code</th><th>Customer</th><th>Device</th><th>Status</th><th>Priority</th><th>Total</th><th></th></tr>
        </thead>
        <tbody>
          {activeJobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              db={db}
              technicians={technicians.map((t) => ({ id: t.id, name: t.name }))}
              open={openJob === job.id}
              onToggle={() => setOpenJob(openJob === job.id ? null : job.id)}
              onAct={onAct}
            />
          ))}
          {activeJobs.length === 0 && (
            <tr><td colSpan={7} className="muted">No active jobs. Create one above.</td></tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

function JobRow({
  job, db, technicians, open, onToggle, onAct,
}: {
  job: JobOrder;
  db: Database;
  technicians: { id: string; name: string }[];
  open: boolean;
  onToggle: () => void;
  onAct: Act;
}) {
  const customer = db.customers.find((c) => c.id === job.customerId);
  const device = db.devices.find((d) => d.id === job.deviceId);
  const tech = db.users.find((u) => u.id === job.assignedTechnicianId);

  return (
    <>
      <tr className="row-open" onClick={onToggle}>
        <td className="mono">
          {job.code}
          {job.payment && (
            <><br /><Link href={`/receipt/${job.code}`} onClick={(e) => e.stopPropagation()} className="muted">🧾 receipt</Link></>
          )}
        </td>
        <td>{customer?.name}<br /><span className="muted">{customer?.phone}</span></td>
        <td>{device ? `${device.brand} ${device.model}` : '?'}</td>
        <td><StatusBadge status={job.status} /></td>
        <td>{job.priority}</td>
        <td>{job.quotation ? peso(job.quotation.total) : '—'}</td>
        <td>{open ? '▲' : '▼'}</td>
      </tr>
      {open && (
        <tr>
          <td colSpan={7} style={{ background: '#fafbfe' }}>
            <div className="grid-2">
              <div>
                <StepControls job={job} technicians={technicians} techName={tech?.name ?? 'the technician'} onAct={onAct} />
                <h3>Details</h3>
                <p className="muted" style={{ margin: '0.2rem 0' }}>
                  <strong>Problem:</strong> {job.reportedProblem}<br />
                  <strong>Intake snapshot:</strong> {job.intakeNotes || '—'}<br />
                  <strong>Diagnosis:</strong> {job.diagnosis || '—'}<br />
                  <strong>Technician:</strong> {tech?.name ?? 'Unassigned'}
                </p>
                {job.quotation && (
                  <p className="muted" style={{ margin: '0.2rem 0' }}>
                    <strong>Quotation v{job.quotation.version}:</strong> labor {peso(job.quotation.laborFee)} · parts{' '}
                    {peso(job.quotation.total - job.quotation.laborFee)} · total {peso(job.quotation.total)} ·{' '}
                    {job.quotation.decision ? `customer ${job.quotation.decision}` : 'awaiting decision'}
                  </p>
                )}
                {job.payment && <p className="muted">Paid {peso(job.payment.amount)} ({job.payment.method}) · receipt {job.payment.receiptNo}</p>}
                {job.warranty && <p className="muted">Warranty {job.warranty.months} mo · until {dateTime(job.warranty.expiresAt)}</p>}
              </div>
              <div>
                <h3>Timeline</h3>
                <Timeline entries={job.timeline} />
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

/** Contextual action buttons per current status — the "obvious next action" UI rule. */
function StepControls({
  job, technicians, techName, onAct,
}: {
  job: JobOrder;
  technicians: { id: string; name: string }[];
  techName: string;
  onAct: Act;
}) {
  const [payAmount, setPayAmount] = useState('');
  const [warrantyMonths, setWarrantyMonths] = useState(3);
  const total = job.quotation?.total ?? 0;

  switch (job.status) {
    case 'queued':
      return (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <select id={`tech-${job.id}`} defaultValue="" style={{ width: 'auto' }}>
            <option value="" disabled>Choose technician…</option>
            {technicians.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          <button onClick={() =>
            onAct('dispatch_job', {
              jobId: job.id,
              technicianId: (document.getElementById(`tech-${job.id}`) as HTMLSelectElement).value,
            })
          }>
            Dispatch →
          </button>
          <button className="danger"
            onClick={() => onAct('cancel_job', { jobId: job.id, reason: prompt('Reason for cancellation?') ?? '' })}>
            Cancel
          </button>
        </div>
      );
    case 'dispatched':
      return (
        <p className="muted">
          Waiting for {techName} to accept.
          <button className="mini danger" style={{ marginLeft: 8 }}
            onClick={() => onAct('cancel_job', { jobId: job.id, reason: 'cancelled at dispatch' })}>
            Cancel
          </button>
        </p>
      );
    case 'diagnosis':
      return <p className="muted">{techName} is diagnosing. The quotation will appear here once sent.</p>;
    case 'awaiting_approval':
      return (
        <p className="muted">
          Waiting for the customer to decide on quotation v{job.quotation?.version}. They use the
          Customer Portal (open it in another tab as Ana Dela Rosa).
        </p>
      );
    case 'quotation_declined':
      return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => onAct('revise_quotation', { jobId: job.id, note: prompt('Note for the technician?') ?? '' })}>
            Send back for revised quotation
          </button>
          <button className="danger" onClick={() => onAct('cancel_job', { jobId: job.id, reason: 'quotation declined' })}>
            Cancel job
          </button>
        </div>
      );
    case 'repairing':
    case 'testing':
      return <p className="muted">In the shop — repair and testing are handled by the technician &amp; QC.</p>;
    case 'ready_for_payment':
      return (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input style={{ width: 130 }} placeholder={`PHP ${total}`} value={payAmount}
            onChange={(e) => setPayAmount(e.target.value)} />
          <select id={`pm-${job.id}`} defaultValue="cash">
            <option value="cash">Cash</option><option value="gcash">GCash</option>
            <option value="bank_transfer">Bank transfer</option><option value="card">Card</option>
          </select>
          <button onClick={() => {
            const amount = Number(payAmount || total);
            const method = (document.getElementById(`pm-${job.id}`) as HTMLSelectElement).value;
            onAct('record_payment', { jobId: job.id, amount, method, allowMismatch: amount !== total });
          }}>
            Record payment
          </button>
        </div>
      );
    case 'paid':
      return (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" href={`/receipt/${job.code}`}>🖨️ Print receipt &amp; release doc</Link>
          <input type="number" min={0} max={24} value={warrantyMonths}
            onChange={(e) => setWarrantyMonths(Number(e.target.value))}
            style={{ width: 80 }} title="Warranty months" aria-label="Warranty months" />
          <span className="muted">months warranty</span>
          <button className="ok" onClick={() => onAct('release_device', { jobId: job.id, warrantyMonths })}>
            Release device ✔
          </button>
        </div>
      );
    default:
      return null;
  }
}

/** IT blockers list + quick open form (IT resolution never completes the business task). */
export function ItTicketsSection({ db, onAct }: { db: Database; onAct: Act }) {
  return (
    <section className="card">
      <h2>IT Blockers</h2>
      <p className="sub">
        Open an IT ticket when equipment or systems block your work. Resolving it never completes
        the business step — only the affected stage is unblocked.
      </p>
      <form onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        onAct('open_it_ticket', Object.fromEntries(f.entries()));
        e.currentTarget.reset();
      }}>
        <label className="field"><span>Title *</span><input name="title" required /></label>
        <label className="field"><span>Detail *</span><input name="detail" required /></label>
        <button type="submit">Open IT ticket</button>
      </form>
      <table className="data" style={{ marginTop: '0.7rem' }}>
        <thead><tr><th>Ticket</th><th>Status</th><th>Opened</th></tr></thead>
        <tbody>
          {db.itTickets.map((t) => (
            <tr key={t.id}>
              <td><strong>{t.title}</strong><br /><span className="muted">{t.detail}</span></td>
              <td><span className={`badge ${t.status === 'open' ? 'warn' : 'success'}`}>{t.status}</span></td>
              <td>{dateTime(t.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
