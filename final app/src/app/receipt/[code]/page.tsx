'use client';

/**
 * RECEIPT & RELEASE DOCUMENTS — /receipt/JOB-2026-XXXX
 *
 * Implements the document/printing requirement of the release flow:
 *   - 80 mm thermal-style receipt (matches the R1 printer tier)
 *   - A4/Letter-style job release document
 * Both render from the stored job snapshot; reprinting never creates a
 * duplicate business transaction — the receipt number stays stable.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Database, JobOrder } from '@/lib/types';
import { peso, dateTime, dateOnly } from '@/lib/format';

export default function ReceiptPage() {
  const params = useParams<{ code: string }>();
  const code = Array.isArray(params.code) ? params.code[0] : params.code;
  const [db, setDb] = useState<Database | null>(null);

  useEffect(() => {
    fetch('/api/state').then((r) => r.json()).then(setDb);
  }, []);

  if (!db) return <main className="page"><p className="muted">Loading…</p></main>;

  const job: JobOrder | undefined = db.jobs.find(
    (j) => j.code.toLowerCase() === decodeURIComponent(code).toLowerCase(),
  );

  return (
    <main className="page">
      {!job && (
        <div className="card">
          <h2>Job not found</h2>
          <p className="sub">No job order matches “{code}”.</p>
          <Link className="btn" href="/front-desk">Back to Front Desk</Link>
        </div>
      )}
      {job && <Documents job={job} db={db} />}
    </main>
  );
}

const cell: React.CSSProperties = { border: 'none', padding: '4px 8px', verticalAlign: 'top' };

function Documents({ job, db }: { job: JobOrder; db: Database }) {
  const customer = db.customers.find((c) => c.id === job.customerId);
  const device = db.devices.find((x) => x.id === job.deviceId);

  return (
    <>
      <div className="card no-print">
        <h2>Documents for {job.code}</h2>
        <p className="sub">Use your browser&apos;s print dialog (Ctrl+P). Only the document prints.</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button onClick={() => window.print()}>🖨️ Print</button>
          <Link className="btn secondary" href="/front-desk">← Back</Link>
        </div>
        {!job.payment && (
          <p className="notice bad" style={{ marginTop: 10 }}>
            No payment recorded yet — record payment first for a valid receipt. (Layout preview still works.)
          </p>
        )}
      </div>

      {/* ---------- 80 mm THERMAL RECEIPT ---------- */}
      <div className="print-area doc-80mm" style={{ marginBottom: 20 }}>
        <h1>{db.tenant.name}</h1>
        <p style={{ textAlign: 'center', margin: 0 }}>{db.tenant.branch}</p>
        <p style={{ textAlign: 'center', margin: 0 }}>Official Service Receipt</p>
        <hr />
        <table><tbody>
          <tr><td>Receipt No.</td><td style={{ textAlign: 'right' }}>{job.payment?.receiptNo ?? '(preview)'}</td></tr>
          <tr><td>Job Code</td><td style={{ textAlign: 'right' }}>{job.code}</td></tr>
          <tr><td>Date</td><td style={{ textAlign: 'right' }}>{dateTime(job.payment?.paidAt ?? job.createdAt)}</td></tr>
          <tr><td>Customer</td><td style={{ textAlign: 'right' }}>{customer?.name}</td></tr>
          <tr><td>Device</td><td style={{ textAlign: 'right' }}>{device ? `${device.brand} ${device.model}` : '?'}</td></tr>
        </tbody></table>
        <hr />
        <table><tbody>
          {(job.quotation?.items ?? []).map((it, i) => (
            <tr key={i}>
              <td>{it.description} ×{it.qty}</td>
              <td style={{ textAlign: 'right' }}>{peso(it.qty * it.unitPrice)}</td>
            </tr>
          ))}
          {job.quotation && job.quotation.laborFee > 0 && (
            <tr><td>Labor</td><td style={{ textAlign: 'right' }}>{peso(job.quotation.laborFee)}</td></tr>
          )}
        </tbody></table>
        <hr />
        <table><tbody>
          <tr><td><strong>TOTAL PAID</strong></td><td style={{ textAlign: 'right' }}><strong>{peso(job.payment?.amount ?? job.quotation?.total ?? 0)}</strong></td></tr>
          {job.payment && <tr><td>Method</td><td style={{ textAlign: 'right' }}>{job.payment.method.replace('_', ' ').toUpperCase()}</td></tr>}
          {job.warranty && <tr><td>Warranty</td><td style={{ textAlign: 'right' }}>{job.warranty.months} month(s)</td></tr>}
        </tbody></table>
        <hr />
        <p style={{ textAlign: 'center', margin: 0 }}>Thank you for trusting us with your repair!</p>
      </div>

      {/* ---------- A4 RELEASE DOCUMENT ---------- */}
      <div className="print-area doc-a4">
        <h1>JOB RELEASE &amp; WARRANTY CERTIFICATE</h1>
        <p style={{ color: '#555', marginTop: 0 }}>{db.tenant.name} — {db.tenant.branch}</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}><tbody>
          <tr><td style={cell}>Job code</td><td style={cell}><strong>{job.code}</strong></td></tr>
          <tr><td style={cell}>Customer</td><td style={cell}>{customer?.name}</td></tr>
          <tr><td style={cell}>Contact</td><td style={cell}>{customer?.phone}</td></tr>
          <tr><td style={cell}>Device</td><td style={cell}>
            {device ? `${device.type} — ${device.brand} ${device.model} (S/N ${device.serial || 'n/a'})` : '?'}
          </td></tr>
          <tr><td style={cell}>Reported problem</td><td style={cell}>{job.reportedProblem}</td></tr>
          <tr><td style={cell}>Diagnosis</td><td style={cell}>{job.diagnosis ?? '—'}</td></tr>
          <tr><td style={cell}>Work completed</td><td style={cell}>
            {(job.quotation?.items ?? []).map((it) => `${it.description} ×${it.qty}`).join(', ') || '—'}
            {job.quotation?.laborFee ? ' + labor' : ''}
          </td></tr>
          <tr><td style={cell}>Total charged</td><td style={cell}>{peso(job.payment?.amount ?? job.quotation?.total ?? 0)}</td></tr>
          <tr><td style={cell}>Released on</td><td style={cell}>{job.warranty ? dateOnly(job.warranty.activatedAt) : '(pending release)'}</td></tr>
          <tr><td style={cell}>Warranty</td><td style={cell}>
            {job.warranty
              ? `${job.warranty.months} month(s), until ${dateOnly(job.warranty.expiresAt)}`
              : 'Activated upon release'}
          </td></tr>
        </tbody></table>
        <br />
        <p style={{ color: '#555' }}>
          Warranty covers the repaired parts and workmanship above. It excludes new damage, liquid
          ingress after release, and unauthorized third-party repairs.
        </p>
        <br />
        <table style={{ width: '100%' }}><tbody><tr>
          <td style={{ ...cell, borderTop: '1px solid #000', width: '45%' }}>Customer signature</td>
          <td style={{ width: '10%' }}></td>
          <td style={{ ...cell, borderTop: '1px solid #000', width: '45%' }}>Authorized by (shop)</td>
        </tr></tbody></table>
      </div>
    </>
  );
}
