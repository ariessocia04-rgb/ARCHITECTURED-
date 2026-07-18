# RELEASE 1 MVP — TRACEABILITY AND ACCEPTANCE MATRIX

## Purpose

Connect every Release 1 outcome to canonical architecture, responsible roles, implementation slices, evidence, and acceptance gates. No Codex task may rely only on this summary; it must read the linked authority.

## Requirement families

| ID | Release requirement | Primary authority | Primary users | Evidence required |
|---|---|---|---|---|
| R1-REQ-001 | Tenant, company, branch, workstation, warehouse setup | Owner architecture; multi-tenant contracts | Platform Admin, Owner, Tenant Admin | migrations, RLS tests, setup E2E |
| R1-REQ-002 | Authentication, session, invitation, recovery, logout | Auth/session contract | all users | auth/session tests, revocation evidence |
| R1-REQ-003 | Role, permission, branch, record, field, approval scope | user/role architecture; auth contract | Owner, managers, all staff | authorization matrix, negative tests |
| R1-REQ-004 | Free and Pro Trial plan/entitlement/usage | Plans and Billing package | Platform Admin, Owner | catalog tests, snapshot tests, quota tests |
| R1-REQ-005 | Shared application shell and non-technical UX | Design package | all users | component, accessibility, responsive tests |
| R1-REQ-006 | Customer and device registry | Front Desk and shared data contracts | Front Desk, Owner | duplicate/search tests, privacy tests |
| R1-REQ-007 | Intake, consent, evidence, signature, job order | Front Desk architecture; file/document contract | Front Desk, Customer | form validation, document and E2E evidence |
| R1-REQ-008 | Queue, dispatch, acceptance, reassignment | Front Desk/Technician architecture | Dispatcher, Technician, Manager | state and concurrency tests |
| R1-REQ-009 | Inspection and diagnosis | Technician architecture | Technician, QC | checklist, evidence, protected snapshot tests |
| R1-REQ-010 | Quotation, versioning, customer approval | Technician/Front Desk/Customer/finance contracts | Technician, Front Desk, Customer, Owner | exact-version approval and rejection tests |
| R1-REQ-011 | Parts, stock, reservation, issue/use/return | inventory architecture | Inventory, Technician, Owner | immutable movement and concurrency tests |
| R1-REQ-012 | Repair execution, pause, exception, revised quote | Technician architecture | Technician, Manager | transition, audit, revised-scope tests |
| R1-REQ-013 | Testing, QC, rework, approval | Technician/QC architecture | Technician, QC | required-evidence and rework-loop tests |
| R1-REQ-014 | Invoice, payment record, receipt, reconciliation | financial contract; Front Desk | Cashier, Finance, Owner | idempotency, totals, reversal tests |
| R1-REQ-015 | Release, identity check, signature, warranty | Front Desk/Customer architecture | Front Desk, Customer | release gate, document, warranty tests |
| R1-REQ-016 | Customer portal tracking and documents | Customer Portal architecture | Customer | audience-safe authorization/E2E |
| R1-REQ-017 | Documents, QR/barcode, PDF, retention | file/document contract | all authorized roles | snapshot/checksum/version tests |
| R1-REQ-018 | A4/Letter and 80 mm printing | Printing package | Front Desk, Finance, IT | rendering, queue, agent, hardware test |
| R1-REQ-019 | Staff contextual IT help and printer support | IT Operations architecture | staff, IT, Owner | ticket/incident/resolution verification tests |
| R1-REQ-020 | Cross-department task/handoff/blocker/timeline | Cross-Department Fabric | all departments | process consistency, event, projection tests |
| R1-REQ-021 | Notifications and realtime updates | notification/API/realtime contracts | all users | private-channel, retry, preference tests |
| R1-REQ-022 | Audit, idempotency, outbox, queue, recovery | shared contracts | platform, Owner, auditors | replay, dead-letter, restore evidence |
| R1-REQ-023 | Basic Owner reporting and exports | Owner/report contracts | Owner, Manager, Auditor | permission-filtered query/export tests |
| R1-REQ-024 | Controlled pilot release/rollback | this package; TECA build plan | Owner, IT, release team | UAT, runbooks, restore/rollback rehearsal |

## Critical journey traceability

```text
R1-REQ-001..005 Foundation
→ R1-REQ-006 Customer/Device
→ R1-REQ-007 Intake/Job
→ R1-REQ-008 Dispatch
→ R1-REQ-009 Diagnosis
→ R1-REQ-010 Quotation/Approval
→ R1-REQ-011 Parts
→ R1-REQ-012 Repair
→ R1-REQ-013 Test/QC
→ R1-REQ-014 Payment/Receipt
→ R1-REQ-015 Release/Warranty
→ R1-REQ-016 Customer Tracking
```

Requirements 17–24 are cross-cutting and attach to every applicable step.

## Acceptance evidence schema

Every completed task or requirement records:

- requirement ID;
- source path and section;
- implementation task ID;
- changed paths;
- migration IDs;
- API/event/schema versions;
- role/permission/RLS policies;
- test IDs and commands;
- screenshots or generated test artifacts when applicable;
- hardware/OS/printer evidence when applicable;
- known limitations;
- reviewer and approval;
- commit SHA and PR;
- rollback/forward-recovery method.

## Role-based UAT matrix

| UAT actor | Required scenario |
|---|---|
| Platform Admin | create tenant, apply trial, approve/revoke support access |
| Owner | configure branch/users; view workflow, usage, IT, printer, finance, audit summaries |
| Front Desk | customer/device intake through job order; quotation communication; payment/release |
| Dispatcher | prioritize, assign, reassign, and verify history |
| Technician | accept, diagnose, request/use parts, repair, test, handle exception |
| QC | reject/rework/approve with evidence |
| Inventory | reserve, issue, receive, adjust with approval and immutable movement |
| Finance/Cashier | record payment, generate receipt, reprint without duplicate payment |
| IT | enroll workstation/agent/printer, receive ticket, resolve, obtain requester verification |
| Customer | track job, approve exact quotation, view receipt/release/warranty, submit support/feedback |
| Auditor | review allowed history without edit authority |

## Required negative tests

- Cross-tenant record lookup and mutation.
- Wrong-branch staff access.
- Technician editing protected intake/payment.
- Front Desk editing finalized diagnosis/QC.
- IT opening unrestricted customer/finance/HR data.
- Customer accessing another customer's record.
- Expired/revoked tracking token.
- Role removed while session remains active.
- Stale entitlement snapshot.
- Free/Trial quota bypass through API, import, job, realtime, or print path.
- Duplicate submit/retry for intake, quotation approval, stock movement, payment, release, and print.
- Tampered price/document/template/print payload.
- Browser print dialog incorrectly marked physically completed.
- Local agent replay, wrong tenant/branch/workstation, or expired job.
- Queue message loss/replay and dead-letter recovery.

## Completion decision

A requirement is complete only when architecture, schema, domain rules, backend/API/events, frontend states, automated tests, UAT where required, audit, documentation, and repository evidence agree. Partial layers are `IN_PROGRESS`, not complete.