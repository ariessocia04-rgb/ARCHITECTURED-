'use client';

/**
 * WIREFRAMES PAGE — clickable wireflow prototype (/wireframes)
 *
 * The whole repair journey rendered as an interactive map: click any stage to
 * open its wireframe spec (screen regions, actor, available actions, next
 * steps) and jump straight into the real working screen. This is the
 * executable version of the repository's wireframe/wireflow architecture.
 */

import { useState } from 'react';
import Link from 'next/link';
import { FLOW, IT_BRANCH, type FlowNode } from '@/lib/wireflows';

const DEPT_COLORS: Record<string, string> = {
  Customer: 'badge info',
  'Front Desk': 'badge work',
  Technician: 'badge warn',
  QC: 'badge money',
  Finance: 'badge success',
  'IT Ops': 'badge muted',
};

export default function WireframesPage() {
  const [selected, setSelected] = useState<FlowNode | null>(null);

  return (
    <main className="page">
      <div className="card">
        <h1 style={{ marginTop: 0 }}>🗺️ Clickable Wireframe &amp; Wireflow Map</h1>
        <p className="sub">
          Every screen of the repair journey. Click a stage to inspect its wireframe; every stage
          already exists as a real, working page in this app.
        </p>
      </div>

      {/* Flow strip: each node is clickable */}
      <section className="card">
        <h2>The Journey</h2>
        <div className="flowmap">
          {FLOW.map((node) => (
            <button
              key={node.id}
              className={`flow-node ${selected?.id === node.id ? 'active' : ''}`}
              onClick={() => setSelected(node)}
            >
              <span className={`badge ${DEPT_COLORS[node.dept]}`}>{node.dept}</span>
              <strong>{node.title}</strong>
            </button>
          ))}
        </div>
      </section>

      {/* Detail panel */}
      {selected && (
        <section className="card">
          <h2>
            {selected.title}{' '}
            <span className={`badge ${DEPT_COLORS[selected.dept]}`}>{selected.dept}</span>
          </h2>
          <p className="sub">{selected.purpose}</p>
          <div className="grid-2">
            <div>
              <h3>Screen regions (top → bottom)</h3>
              <ul className="timeline">
                {selected.ui.map((u, i) => (
                  <li key={i}><span style={{ border: '1px dashed var(--line)', padding: '4px 10px', borderRadius: 6, display: 'inline-block' }}>▭ {u}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Actions on this screen</h3>
              <ul>{selected.actions.map((a, i) => <li key={i}>{a}</li>)}</ul>
              {selected.next.length > 0 && (
                <>
                  <h3>Next steps</h3>
                  <p>
                    {selected.next.map((nid) => {
                      const n = FLOW.find((f) => f.id === nid);
                      if (!n) return null;
                      return (
                        <button key={nid} className="mini secondary" style={{ marginRight: 6 }}
                          onClick={() => setSelected(n)}>
                          {n.title} →
                        </button>
                      );
                    })}
                  </p>
                </>
              )}
              {selected.liveHref && (
                <Link className="btn" href={selected.liveHref}>▶ Open the real screen</Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cross-cutting IT branch */}
      <section className="card">
        <h2>Cross-cutting: {IT_BRANCH.title}</h2>
        <p className="sub">{IT_BRANCH.purpose} Resolving a ticket never completes the business step.</p>
        <ul>
          {IT_BRANCH.ui.map((u, i) => <li key={i}>▭ {u}</li>)}
        </ul>
        <Link className="btn secondary" href={IT_BRANCH.liveHref}>▶ Open related screen</Link>
      </section>

      <div className="card no-print">
        <Link className="btn" href="/">← Back to login</Link>
      </div>
    </main>
  );
}
