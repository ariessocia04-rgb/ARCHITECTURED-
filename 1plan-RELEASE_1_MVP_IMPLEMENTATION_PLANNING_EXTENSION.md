# 1PLAN CANONICAL EXTENSION — RELEASE 1 MVP IMPLEMENTATION PLANNING

## Authority

`1plan.md` remains the master authority. This additive record locks the first controlled implementation release after the completed core, Plans/Billing, Printing, IT Operations, and Cross-Department architecture packages.

Governed by:

- Section 1A — co-worker continuity, source provenance, handoff, and no racing;
- Section 1B — canonical repository entry and folder arrangement;
- Section 1C — duplicate and placement control;
- Section 8A — architecture/UI/UX completion rules;
- Sections 12–14 — TECA sequence and controlled implementation gates;
- `TECA/IMPLEMENTATION_BUILD_PLAN.md`.

This extension does not grant coding authorization.

## Canonical target

```text
Implementation Planning/
└── Release 1 MVP/
```

Release ID: `ROS-R1-MVP-2026-01`.

## Locked release objective

Prove one connected repair-operations journey for one pilot company and branch, with scoped staff roles, customer tracking, Free/Pro Trial entitlement behavior, essential inventory/finance/IT connections, A4/Letter and one certified 80 mm receipt path, audit, recovery, and controlled rollout.

## Release boundary

Included:

- tenant/company/branch/workstation/warehouse foundation;
- authentication, membership, roles, permissions, scopes, approvals;
- Free and Pro Trial plan behavior;
- Owner, Front Desk, Dispatcher, Technician, QC, Inventory, Finance/Cashier, Customer, IT Lite, and Platform Admin pilot surfaces;
- customer/device/intake/job/dispatch/diagnosis/quotation/approval/parts/repair/testing/QC/payment/receipt/release/warranty;
- documents/evidence/signatures/QR/barcode;
- printing and printer failure fallback;
- IT service request and printer/workstation support;
- cross-department process, task, handoff, blocker, approval, timeline, notification, and audit;
- basic reports/search/exports;
- security/accessibility/migration/recovery/UAT/pilot gates.

Excluded:

- public production;
- live recurring SaaS billing checkout;
- Premium sale/activation;
- full accounting/payroll/CRM campaign execution;
- supplier/vendor portals;
- production multi-company/advanced multi-branch;
- AI/BI/remote diagnostics/IoT/native mobile/public API;
- universal printer support;
- untested hardware/OS/adapter paths.

## Locked architecture style

```text
MODULAR MONOLITH
├── one responsive Next.js web application
├── shared domain/application packages
├── Supabase/PostgreSQL platform layer
├── private realtime and durable queues
└── separate Tauri/Rust local print agent
```

Business rules are shared and not copied per application. Domain boundaries and events preserve future extraction options.

## Locked technology baseline

```text
Node.js 24 LTS
pnpm 10
Next.js 16.1
React 19.2
TypeScript 5.9
Supabase / PostgreSQL 17
Supabase Auth / Storage / Realtime Broadcast / Queues / Cron
Tauri 2 / Rust stable for Windows local print agent
OpenAPI 3.1
GitHub Actions
```

Exact patches/transitive dependencies, Rust toolchain, OS/browser builds, project image, drivers, firmware, and hardware IDs are pinned during authorized bootstrap/certification.

## Printer release boundary

Mandatory:

- secure PDF;
- A4 and Letter browser/OS page printing;
- Windows local-agent enrollment/health;
- one exact certified 80 mm thermal path;
- safe reprint/fallback/IT handoff.

Conditional:

- 58 mm thermal;
- IPP Everywhere;
- AirPrint/Android native page path;
- labels.

No model is certified before physical test evidence.

## High-fidelity design boundary

- 70 Release 1 screen definitions.
- Shared/auth, Owner, Front Desk, Technician/QC, Inventory, Customer, IT/Printing, and Platform Admin groups.
- Required loading/error/permission/limit/offline/conflict/processing/success/responsive states.
- Clickable prototype for the full critical journey.
- Design UAT and accessibility review before final frontend implementation.

Rendered screens and prototypes remain incomplete until actually produced and approved.

## Codex execution boundary

- 36 sequential tasks, `CX-R1-000` through `CX-R1-035`.
- First possible code task: `CX-R1-001` after exact authorization and CX-R1-000 verification.
- Every task uses the canonical task contract.
- A task edits only allowed paths, runs required tests, publishes evidence, and stops.
- Codex cannot redesign architecture or automatically continue to the next task.

## Implementation gates

```text
R1-0 planning approval
→ R1-1 stack/support lock
→ R1-2 high-fidelity critical-path prototype
→ R1-3 exact task authorization
→ R1-4 foundation/security/database pass
→ R1-5 operational vertical slices pass
→ R1-6 printer lab certification
→ R1-7 UAT/recovery rehearsal
→ R1-8 controlled pilot approval
```

## Truthful status

```text
RELEASE-1 IMPLEMENTATION PLANNING: COMPLETE AS PLAN
RELEASE BOUNDARY: LOCKED
STACK/TOPOLOGY: LOCKED AS BASELINE
PRINTER CERTIFICATION PLAN: COMPLETE
HIGH-FIDELITY SCREEN/PROTOTYPE PLAN: COMPLETE
CODEX TASK MANIFEST: COMPLETE
APPLICATION CODE: NOT CREATED
IMPLEMENTATION_AUTHORIZED: FALSE
```