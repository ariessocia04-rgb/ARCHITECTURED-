'use client';

/**
 * FRONT DESK WORKSPACE
 * Implements the canonical Front Desk surface list from RELEASE_MANIFEST.md:
 *   - New intake (guided customer + device + job order creation)
 *   - Job order board with dispatch, payment, release and receipt actions
 *   - Quotation follow-up (revise after customer decline)
 *   - IT ticket creation when something blocks the desk
 *
 * The jobs board lives in src/components/front-desk-board.tsx.
 */

import { useState } from 'react';
import { RequireRole, TopBar, runAction, useLiveState, useSession } from '@/components/ui';
import { IntakeForm } from '@/components/intake-form';
import { JobsBoard, ItTicketsSection } from '@/components/front-desk-board';

export default function FrontDeskPage() {
  const [db, refresh] = useLiveState();
  const [msg, setMsg] = useState<{ good: boolean; text: string } | null>(null);
  const user = useSession(db);

  async function act(action: string, payload: Record<string, unknown>) {
    const res = await runAction(action, { userId: user?.id, ...payload });
    setMsg({ good: res.ok, text: res.ok ? res.message ?? 'Done.' : res.error ?? 'Failed.' });
    if (res.ok) refresh();
  }

  if (!db || !user || !['front_desk', 'owner'].includes(user.role)) {
    return (
      <main className="page">
        <RequireRole user={user} roles={['front_desk', 'owner']}><span /></RequireRole>
      </main>
    );
  }

  return (
    <>
      <TopBar db={db} user={user} />
      <main className="page">
        {msg && <div className={`notice ${msg.good ? 'good' : 'bad'}`}>{msg.text}</div>}
        <IntakeForm onAct={act} />
        <JobsBoard db={db} onAct={act} />
        <ItTicketsSection db={db} onAct={act} />
      </main>
    </>
  );
}
