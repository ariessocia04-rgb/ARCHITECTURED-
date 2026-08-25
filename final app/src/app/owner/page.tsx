'use client';

/**
 * OWNER WORKSPACE
 * Pilot dashboard per RELEASE_MANIFEST.md "Owner workspace":
 *   - Operational KPIs (active jobs, awaiting approval, revenue)
 *   - Pipeline funnel across every status
 *   - Inventory health with reorder flags
 *   - IT ticket oversight (owner may resolve tickets)
 *   - Full audit trail — no cross-tenant leakage in this pilot (one tenant)
 */

import { useState } from 'react';
import type { Database } from '@/lib/types';
import { peso, dateTime } from '@/lib/format';
import { PIPELINE_ORDER, STATUS_LABELS } from '@/lib/workflow';
import { RequireRole, TopBar, runAction, useLiveState, useSession } from '@/components/ui';

export default function OwnerPage() {
  const [db, refresh] = useLiveState();
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const user = useSession(db);

  async function act(action: string, payload: Record<string, unknown>) {
    const res = await runAction(action, { userId: user?.id, ...payload });
    setMsg({ good: res.ok, text: res.ok ? res.message ?? 'Done.' : res.error ?? 'Failed.' });
    if (res.ok) refresh();
  }

  if (!db || !user || !['owner', 'front_desk'].includes(user.role)) {
    return (
      <main className="page">
        <RequireRole user={user} roles={['owner']}><span /></RequireRole>
      </main>
    );
  }

  const active = db.jobs.filter((j) => !['released', 'cancelled'].includes(j.status));
  const revenue = db.jobs.reduce((sum, j) => sum + (j.payment?.amount ?? 0), 0);
  const completed = db.jobs.filter((j) => j.status === 'released').length;
  const lowStock = db.parts.filter((p) => p.stock <= p.reorderLevel);

  return (
    <>
      <TopBar db={db} user={user} />
      <main className="page">
        {msg && <div className={`notice ${msg.good ? 'good' : 'bad'}`}>{msg.text}</div>}

        <section className="kpis">
          <div className="kpi"><div className="n">{active.length}</div><div className="l">Active jobs</div></div>
          <div className="kpi"><div className="n">{db.jobs.filter((j) => j.status === 'awaiting_approval').length}</div><div className="l">Awaiting approval</div></div>
          <div className="kpi"><div className="n">{peso(revenue)}</div><div className="l">Revenue collected</div></div>
          <div className="kpi"><div className="n">{completed}</div><div className="l">Released</div></div>
          <div className="kpi"><div className="n">{lowStock.length}</div><div className="l">Parts at reorder</div></div>
        </section>

        <section className="card">
          <h2>Pipeline</h2>
          <p className="sub">Every job by lifecycle stage — mirrors the mandatory cross-department workflow.</p>
          <table className="data">
            <thead><tr><th>Stage</th><th>Jobs</th><th>Codes</th></tr></thead>
            <tbody>
              {PIPELINE_ORDER.map((status) => {
                const jobs = db.jobs.filter((j) => j.status === status);
                if (jobs.length === 0) return null;
                return (
                  <tr key={status}>
                    <td>{STATUS_LABELS[status]}</td>
                    <td>{jobs.length}</td>
                    <td className="mono muted">{jobs.map((j) => j.code).join(', ')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <div className="grid-2">
          <section className="card">
            <h2>Inventory Health</h2>
            <p className="sub">Stock is reserved at quotation approval; highlighted rows are at/below reorder level.</p>
            <table className="data">
              <thead><tr><th>Part</th><th>SKU</th><th>Stock</th><th>Reorder at</th><th>Unit price</th></tr></thead>
              <tbody>
                {db.parts.map((p) => (
                  <tr key={p.id} style={p.stock <= p.reorderLevel ? { background: '#fff7e6' } : undefined}>
                    <td>{p.name}</td><td className="mono muted">{p.sku}</td>
                    <td><strong>{p.stock}</strong></td><td>{p.reorderLevel}</td><td>{peso(p.unitPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="card">
            <h2>IT Tickets</h2>
            <p className="sub">Owner may resolve tickets; business steps stay authoritative to their departments.</p>
            <table className="data">
              <thead><tr><th>Ticket</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {db.itTickets.map((t) => (
                  <tr key={t.id}>
                    <td><strong>{t.title}</strong><br /><span className="muted">{t.detail}</span></td>
                    <td><span className={`badge ${t.status === 'open' ? 'warn' : 'success'}`}>{t.status}</span></td>
                    <td>
                      {t.status === 'open' && (
                        <button className="mini" onClick={() => act('resolve_it_ticket', { ticketId: t.id })}>Resolve</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <section className="card">
          <h2>Audit Trail (latest 25)</h2>
          <p className="sub">Append-only record of every consequential action, newest first.</p>
          <table className="data">
            <thead><tr><th>When</th><th>Who</th><th>Action</th><th>Target</th><th>Summary</th></tr></thead>
            <tbody>
              {[...db.auditLog].reverse().slice(0, 25).map((a, i) => (
                <tr key={i}>
                  <td className="muted">{dateTime(a.at)}</td>
                  <td>{a.actorName}</td>
                  <td className="mono muted">{a.action}</td>
                  <td className="mono muted">{a.targetType}/{a.targetId}</td>
                  <td>{a.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
