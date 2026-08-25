'use client';

/**
 * TECHNICIAN WORK PANEL — diagnosis form, quotation builder, and repair
 * controls for one job. Shown inside the technician workbench table.
 */

import { useState } from 'react';
import type { Database, JobOrder, QuotationItem } from '@/lib/types';
import { peso } from '@/lib/format';
import { Timeline } from '@/components/ui';

type Act = (action: string, payload: Record<string, unknown>) => void;

export function WorkPanel({ job, db, onAct }: { job: JobOrder; db: Database; onAct: Act }) {
  const [items, setItems] = useState<QuotationItem[]>(
    job.quotation?.items?.length ? job.quotation.items : [{ description: '', qty: 1, unitPrice: 0 }],
  );
  const [laborFee, setLaborFee] = useState(job.quotation ? String(job.quotation.laborFee) : '0');
  const total =
    items.reduce((s, it) => s + it.qty * (Number(it.unitPrice) || 0), 0) + (Number(laborFee) || 0);

  return (
    <div className="grid-2">
      <div>
        <p className="muted">
          🔒 <strong>Protected intake snapshot:</strong> {job.intakeNotes || '—'}
          <br /><strong>Reported:</strong> {job.reportedProblem}
        </p>

        {(job.status === 'diagnosis') && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            onAct('send_quotation', {
              jobId: job.id,
              diagnosis: f.get('diagnosis'),
              laborFee: Number(laborFee),
              items: items.filter((it) => it.description).map((it) => ({ ...it, qty: Number(it.qty), unitPrice: Number(it.unitPrice) })),
            });
          }}>
            <label className="field"><span>Diagnosis *</span>
              <textarea name="diagnosis" defaultValue={job.diagnosis ?? ''} required />
            </label>
            <fieldset className="parts">
              <legend>Parts to quote (from inventory)</legend>
              {items.map((it, i) => (
                <div className="part-row" key={i}>
                  <select value={it.description}
                    onChange={(e) => setItems(items.map((x, xi) => xi === i
                      ? { ...x, description: e.target.value, unitPrice: db.parts.find((p) => p.name === e.target.value)?.unitPrice ?? 0 }
                      : x))}>
                    <option value="" disabled>Select part…</option>
                    {db.parts.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} — {peso(p.unitPrice)} (stock {p.stock})</option>
                    ))}
                  </select>
                  <input type="number" min={1} value={it.qty} aria-label="Quantity"
                    onChange={(e) => setItems(items.map((x, xi) => xi === i ? { ...x, qty: Number(e.target.value) } : x))} />
                  <input type="number" min={0} step="0.01" value={it.unitPrice} aria-label="Unit price"
                    onChange={(e) => setItems(items.map((x, xi) => xi === i ? { ...x, unitPrice: Number(e.target.value) } : x))} />
                </div>
              ))}
              <button type="button" className="mini secondary"
                onClick={() => setItems([...items, { description: '', qty: 1, unitPrice: 0 }])}>
                + Add part line
              </button>
            </fieldset>
            <label className="field"><span>Labor fee (PHP)</span>
              <input type="number" min={0} step="0.01" value={laborFee} onChange={(e) => setLaborFee(e.target.value)} />
            </label>
            <p>
              <strong>Total: {peso(total)}</strong>{' '}
              {job.quotation && <span className="muted">(previous v{job.quotation.version}: {peso(job.quotation.total)})</span>}
            </p>
            <button type="submit">
              {job.quotation ? `Send revised quotation v${job.quotation.version + 1}` : 'Send quotation to customer'}
            </button>
          </form>
        )}

        {job.status === 'repairing' && (
          <RepairForm job={job} db={db} onAct={onAct} />
        )}

        {job.status === 'testing' && <p className="muted">With QC for functional testing.</p>}
        {job.status === 'awaiting_approval' && <p className="muted">Quotation v{job.quotation?.version} sent — waiting for the customer&apos;s decision in the Customer Portal.</p>}
        {job.status === 'quotation_declined' && <p className="muted">Customer declined. Front Desk can send it back here for a revised quotation.</p>}
      </div>
      <div>
        <h3>Timeline</h3>
        <Timeline entries={job.timeline} />
      </div>
    </div>
  );
}

/** Shown while status = repairing: reserved parts summary + completion form. */
function RepairForm({ job, db, onAct }: { job: JobOrder; db: Database; onAct: Act }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onAct('complete_repair', { jobId: job.id, notes: new FormData(e.currentTarget).get('notes') });
    }}>
      <p className="muted">
        <strong>Parts reserved:</strong>{' '}
        {job.partsRequested
          .map((r) => `${db.parts.find((p) => p.id === r.partId)?.name ?? '?'} ×${r.qty}`)
          .join(', ') || 'none'}
      </p>
      <label className="field"><span>Completion notes</span><textarea name="notes" /></label>
      <button type="submit" className="ok">Finish repair → send to Testing/QC</button>
    </form>
  );
}
