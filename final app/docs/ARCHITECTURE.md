# Architecture — Final App

How this ready-to-run build relates to the canonical ARCHITECTURED plans, and
how to upgrade it to the locked production stack.

---

## 1. Design principles

1. **The plan is the code.** Every file implements a named part of the
   repository's Release 1 MVP plan; each source file says which in its header.
2. **One guarded state machine.** All job movement goes through
   `canTransition()` in `src/lib/workflow.ts`. Illegal moves are impossible,
   not just hidden.
3. **Role permissions enforced server-side.** The UI hides buttons, but the
   real enforcement lives in `ACTION_ROLES` (`src/lib/actions.ts`) and runs on
   every API call — the UI is never trusted.
4. **Audited by construction.** Every action appends to the job timeline AND
   the global audit log. Nothing consequential happens silently.
5. **Swappable persistence.** Business logic never touches the filesystem; it
   only talks to `getDb()/updateDb()` in `src/lib/store.ts`.

## 2. Request flow

```text
Browser (workspace page, client-rendered)
   │  GET /api/state            ← full snapshot for rendering
   │  POST /api/action          ← { action, userId, ...payload }
   ▼
Route handler (app/api/action/route.ts)
   ▼
performAction() → role check → state-machine guard → mutate → audit
   ▼
JSON store (data/db.json)     ← atomic read-mutate-write per request
```

## 3. Mapping to canonical documents

| Canonical document | Implementation |
|---|---|
| `1plan.md` master flow | `workflow.ts` TRANSITIONS + PIPELINE_ORDER |
| `RELEASE_MANIFEST.md` roles | `actions.ts` ACTION_ROLES table |
| Front Desk workspace surfaces | `app/front-desk/`, `components/intake-form.tsx`, `components/front-desk-board.tsx` |
| Technician surfaces | `app/technician/`, `components/work-panel.tsx` |
| QC gate | `app/qc/page.tsx`, `qc_decision` action |
| Owner workspace | `app/owner/page.tsx` |
| Customer tracking + quotation approval | `app/customer/page.tsx`, `customer_decision` action |
| Success criterion #4 (full journey) | all of the above chained via the state machine |
| Success criterion #5 (approval ↔ exact version) | versioned `Quotation` on the job record |
| Success criterion #6 (stock not silently overwritten) | check-then-reserve in `customerDecision`; payment mismatch confirmation in `recordPayment` |
| Success criterion #7 (idempotent receipt reprint) | stable receipt number derived from job code |
| Success criterion #9 (printer fallback, no duplicate transaction) | browser print dialog renders stored snapshot; reprinting mutates nothing |
| Success criterion #11 (owner summaries) | owner dashboard KPIs/pipeline/audit |

## 4. Deliberate pilot simplifications

| Pilot choice | Canonical production target |
|---|---|
| Persona-picker login (localStorage) | Supabase Auth with tenant-scoped sessions |
| JSON file store (`store.ts`) | PostgreSQL 17 + RLS policies (tenant isolation) |
| Single tenant seeded | Multi-tenant provisioning from empty database |
| Browser print dialog | Tauri/Rust local print agent (ESC/POS 80mm profile) |
| In-process action calls | Queues (domain-outbox, print-jobs…) per TECHNOLOGY_STACK_AND_VERSION_LOCK.md |

These are boundary-level swaps: pages call `/api/action`, actions validate and
mutate through `store.ts`. Replacing the store with a Supabase client and the
persona picker with Supabase Auth does not change the domain model, workflow,
or permission logic.

## 5. Extension guide

- **New status:** add to `JobStatus`, define its transitions in
  `TRANSITIONS`, label in `STATUS_LABELS`, badge group in `STATUS_GROUPS`.
- **New action:** write the handler in `actions.ts` (role-check first), register
  it in `HANDLERS`, then add UI controls where the status allows it.
- **New role:** extend `Role`, seed a user, add entries to `ACTION_ROLES`.
