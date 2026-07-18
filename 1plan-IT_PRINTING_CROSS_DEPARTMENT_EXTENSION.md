# 1PLAN CANONICAL EXTENSION — IT, PRINTING, AND CROSS-DEPARTMENT OPERATIONS

## Authority and relationship to `1plan.md`

`1plan.md` remains the master source of truth. This file is the additive canonical extension record for the owner-approved request to add complete Printing and Peripheral Operations, a tenant IT Operations Application, and literal cross-department connection across all current and future modules.

It is governed by:

- Section 1A — co-worker continuity, handoff, provenance, and gap-fill-only;
- Section 1B — application arrangement and starting order;
- Section 1C — evidence-based duplicate/placement control;
- Section 8A — full architecture and design completion requirements;
- Sections 10–14 — lifecycle, non-negotiable rules, TECA pipeline, completion matrix, and controlled implementation planning.

This extension does not authorize coding and does not modify existing domain ownership.

## Canonical targets

```text
SaaS Platform/Printing and Peripheral Operations/
Applications/IT Operations Application/
SaaS Platform/Cross-Department Operating Fabric/
SaaS Platform/IT_AND_CROSS_DEPARTMENT_ROLE_EXTENSION.md
```

## Master architecture additions

### A. Printing and Peripheral Operations

Required scope:

- receipt, page/bond-paper, label, and optional legacy output classes;
- 58/80 mm thermal, A4/Letter/Legal/A5, exact label profiles;
- browser/OS dialog, native mobile, IPP/AirPrint/modern Windows/CUPS, local print agent, managed cloud, vendor and optional experimental adapters;
- capability-driven printer selection;
- document/template/source snapshot/version/checksum;
- print request/job/attempt/queue/status/retry/cancel/reprint/reconciliation;
- ESC/POS profile rules;
- local agent enrollment/security/offline/update/diagnostics;
- staff, Owner, and IT UX;
- hardware/OS/adapter compatibility certification;
- tests, rollout, rollback, support, and Codex sequence.

### B. IT Operations Application

Required scope:

- tenant IT roles and operating models;
- contextual support and service desk;
- incidents/major incidents;
- problems/root cause/known errors;
- changes/releases/maintenance/rollback;
- assets/configuration/workstations/devices;
- printers/peripherals/local agents;
- identity/access requests;
- integrations/credential references/health/reconciliation;
- monitoring/alerts/service health;
- backup/restore/continuity coordination;
- knowledge/runbooks;
- vendors/platform support access;
- Owner governance/reports/audit;
- data/API/events, wireframes, wireflows, traceability, security, tests, rollout, and implementation sequence.

### C. Cross-Department Operating Fabric

Required scope:

- all departments remain distinct authorities but are connected through one end-to-end process instance;
- shared process stages, linked domain records, tasks, handoffs, blockers, approvals, timeline, notifications, communication, documents, events, metrics, and audit;
- Owner, Tenant Admin, Branch Manager, Front Desk, Dispatch, Technician, QC, Inventory, Purchasing, Warehouse, Finance, Cashier, Accounting, HR, CRM, Marketing, IT, Security, Audit, Customer, Supplier, Vendor, Platform Support, and all ROS Future Modules are connected;
- external portals remain scoped;
- IT/printing/provider blockers connect to affected business processes;
- AI/BI recommendations use controlled domain commands and human review;
- cross-company/branch scopes remain explicit.

## Approved end-to-end process families

```text
E2E-01 Customer Request to Repair Closure
E2E-02 Warranty Return to Resolution
E2E-03 Source to Pay
E2E-04 Inventory to Repair Consumption
E2E-05 Quote to Cash / Record to Report
E2E-06 Hire to Operate to Offboard
E2E-07 Lead/Campaign to Customer Service
E2E-08 Issue to Resolution
E2E-09 Change to Release
E2E-10 Customer Complaint to Improvement
E2E-11 Multi-Branch Transfer and Fulfilment
E2E-12 Data to Insight to Controlled Action
```

## Required application behavior

Every applicable application/module must expose:

```text
My Cross-Department Work
End-to-End Process Header
Current Stage and Health
Next Action and Responsible Owner
Handoff / Approval / Blocker
Related Domain Records
Shared Audience-Safe Timeline
Contextual Get Help / IT Status
Document Print / Digital Delivery when applicable
```

The shared UI is coordination only. Actual business actions execute in the authoritative domain application.

## Required architecture reading order

```text
1plan.md
→ this extension record when IT/printing/cross-department work is involved
→ Applications/README.md
→ selected application/future module INDEX.md
→ Cross-Department Operating Fabric INDEX.md
→ relevant Printing or IT Operations INDEX.md
→ shared contracts
→ Design
→ TECA implementation plan
→ current branch/PR/worker evidence
```

## Implementation dependency order

```text
Identity / role / tenant / branch / domain authority
→ shared data and API/event foundation
→ document rendering and print orchestration
→ staff contextual support and IT service management
→ process instance/stage/link/timeline foundation
→ shared handoff/task/blocker/approval/notification
→ E2E repair vertical slice
→ source-to-pay/inventory/finance/accounting
→ HR/access/IT onboarding/offboarding
→ CRM/marketing/customer/warranty
→ multi-branch/company and external portals
→ AI/BI/mobile/public API projections
→ security/accessibility/reliability/hardware tests
→ staged pilot/rollout/rollback/operations
```

## Completion matrix

| Package | Architecture/design status | Separate gated status |
|---|---|---|
| Printing and Peripheral Operations | COMPLETE AS SPECIFICATION: 20 screens, 16 flows | code, agent, hardware tests, deployment |
| IT Operations Application | COMPLETE AS SPECIFICATION: 26 screens, 20 flows | code, executed tests, deployment |
| Cross-Department Operating Fabric | COMPLETE AS SPECIFICATION: 12 E2E process families, 20 screens, 16 flows | code, executed tests, deployment |
| IT and Cross-Department Role Extension | COMPLETE | live role configuration/testing |

## Non-negotiable rules

- No universal physical-printer support claim without exact adapter/capability/test evidence.
- Browser print dialog is not physical print confirmation.
- Print retry never repeats payment, invoice, job, inventory, release, or warranty operations.
- IT roles do not receive blanket tenant business-data access.
- A department cannot complete or edit another department's authoritative record.
- One coordinated customer message owner prevents conflicting updates.
- Shared projections never override domain truth.
- Events/commands/handoffs are versioned, idempotent, scoped, auditable, and recoverable.
- AI/automation cannot bypass protected approvals or domain commands.
- High-fidelity UI, interactive prototype, physical schema lock, provider/stack selection, source code, migrations, executed tests, rollout, and deployment remain separate evidence-based gates.

## Truthful final status

```text
MASTER-PLAN EXTENSION FOR IT / PRINTING / ALL-DEPARTMENT CONNECTION: COMPLETE
CANONICAL FOLDERIZED ARCHITECTURE PACKAGES: COMPLETE
LOW-FIDELITY WIREFRAME/WIREFLOW/TRACEABILITY: COMPLETE AS SPECIFICATION
EXISTING DOMAIN ARCHITECTURE DELETED OR REPLACED: NO
IMPLEMENTATION AUTHORIZED: NO
```
