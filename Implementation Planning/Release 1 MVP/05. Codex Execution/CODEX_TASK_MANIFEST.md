# RELEASE 1 MVP — CODEX EXECUTION TASK MANIFEST

## Codex role

Codex is the coding worker only.

```text
Read approved architecture
→ implement only the assigned task
→ run the required checks
→ publish evidence
→ stop
```

Codex must not redesign the architecture, change the release boundary, add features, alter prices/limits/roles/workflows, skip tests, or begin another task automatically.

## Global task states

```text
NOT_AUTHORIZED
READY
ACTIVE
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
FAILED_VALIDATION
READY_FOR_REVIEW
APPROVED_COMPLETE
SKIPPED_ALREADY_COMPLETE
```

Only one tightly coupled task group may edit the same schema/contract/shared package at a time.

## Execution waves

```text
WAVE 0 — Authorization and reproducible foundation
WAVE 1 — Database, identity, authorization, platform services
WAVE 2 — Shared shell, documents, printing, coordination
WAVE 3 — Repair operational vertical slices
WAVE 4 — Customer, IT, reports, and cross-application completion
WAVE 5 — Hardware certification, UAT, pilot release
```

## Task summary

| ID | Task | Depends on | Primary outputs |
|---|---|---|---|
| CX-R1-000 | Authorization and live-state verification | none | factual task start record |
| CX-R1-001 | Workspace and version bootstrap | 000 | monorepo, lockfiles, version lock |
| CX-R1-002 | CI, quality, and security baseline | 001 | required checks and evidence |
| CX-R1-003 | Configuration and observability foundation | 001–002 | config schema, logs, health, correlation |
| CX-R1-004 | Local Supabase and migration foundation | 001–003 | local stack, migrations, reset/upgrade tests |
| CX-R1-005 | Tenant/company/branch/workstation/warehouse schema | 004 | scoped foundation tables and RLS |
| CX-R1-006 | Authentication/session/invitation/recovery | 004–005 | auth and session flows |
| CX-R1-007 | Membership/roles/permissions/scopes/approvals | 005–006 | authorization engine and tests |
| CX-R1-008 | Plan catalog, Free/Trial entitlements, usage | 005–007 | plan snapshot/limit resolver |
| CX-R1-009 | Audit, idempotency, outbox, queues, realtime | 004–008 | shared platform infrastructure |
| CX-R1-010 | Design-system foundation | 001–003, HF gate | shared components/tokens/tests |
| CX-R1-011 | Authenticated shell and role workspaces | 006–010 | route groups, context, guards, states |
| CX-R1-012 | File/evidence/document/signature foundation | 005–011 | storage, templates, PDF, metadata |
| CX-R1-013 | Printing registry, jobs, adapters contract | 009,012 | print schema/services/status UI |
| CX-R1-014 | Windows local print agent foundation | 001–003,013 | Tauri agent, enrollment, mock adapter |
| CX-R1-015 | Customer/business account/device registry | 007,009,011,012 | registry vertical slice |
| CX-R1-016 | Intake, consent, job order, intake documents | 012,015 | intake vertical slice |
| CX-R1-017 | Queue, dispatch, assignment, acceptance | 007,009,016 | dispatch vertical slice |
| CX-R1-018 | Inspection and diagnosis | 012,017 | diagnosis vertical slice |
| CX-R1-019 | Quotation/version/customer approval | 008,012,018 | quotation vertical slice |
| CX-R1-020 | Inventory, reservation, issue/use/return | 007,009,019 | inventory vertical slice |
| CX-R1-021 | Repair execution and exceptions | 018–020 | repair vertical slice |
| CX-R1-022 | Testing, QC, and rework | 021 | test/QC vertical slice |
| CX-R1-023 | Invoice, payment record, reconciliation | 007–009,019,022 | finance vertical slice |
| CX-R1-024 | Receipt/page printing and safe fallback | 013–014,023 | certified render/delivery paths |
| CX-R1-025 | Release, handover, warranty activation | 012,022–024 | release/warranty vertical slice |
| CX-R1-026 | Customer Portal | 011,019,023,025 | safe customer views/actions |
| CX-R1-027 | IT Operations Lite and contextual support | 011,013–014 | ticket/incident/printer support slice |
| CX-R1-028 | Cross-department process/handoff/timeline | 009,011,016–027 | connected process projection |
| CX-R1-029 | Notifications and communication | 009,016–028 | templates/preferences/retries |
| CX-R1-030 | Owner dashboards, reports, search, exports | 009,011,015–029 | scoped reporting/search/export |
| CX-R1-031 | Platform pilot administration/support access | 006–009,027–030 | tenant/trial/support controls |
| CX-R1-032 | Full migration, integration, E2E, security pass | 001–031 | release candidate evidence |
| CX-R1-033 | Printer hardware laboratory certification | 013–014,024,032 | exact model/path certification |
| CX-R1-034 | Role-based UAT and remediation | 032–033 | signed UAT evidence |
| CX-R1-035 | Controlled pilot deployment and rollback rehearsal | 034 | pilot release evidence |

# WAVE 0 — FOUNDATION AUTHORIZATION

## CX-R1-000 — Authorization and live-state verification

### Required actions

1. Read the complete Release 1 package and all assigned source paths.
2. Verify latest `main`, branches, PRs, migrations, CI, active worker, and code state.
3. Confirm the exact task ID and exact `implementation_authorized=true` statement.
4. Confirm required high-fidelity/design gate for frontend work.
5. Confirm dependencies are `APPROVED_COMPLETE`.
6. Produce the task start record.

### Stop results

- Missing authorization: `NOT_AUTHORIZED`.
- Conflicting active worker: `BLOCKED_DEPENDENCY`.
- Architecture conflict/missing required decision: `BLOCKED_ARCHITECTURE_CLARIFICATION`.
- Existing valid completed implementation: `SKIPPED_ALREADY_COMPLETE`.

No source code changes are allowed in CX-R1-000.

## CX-R1-001 — Workspace and version bootstrap

### Scope

- Create the approved `apps/`, `packages/`, `supabase/`, `tests/`, `infrastructure/`, and `docs/` implementation structure.
- Pin Node, pnpm, TypeScript, Next.js, React, Supabase CLI, Rust, Tauri, and all dependencies.
- Commit lockfiles and `RELEASE_LOCK.json`.
- Configure formatting, linting, type checking, workspace scripts, and deterministic install.
- Add environment-variable schemas containing names/default modes only—no secret values.

### Required checks

```text
frozen install
format check
lint
TypeScript check
empty web build
Rust format/check for agent skeleton when included
environment schema test
```

### Forbidden

- Business tables or modules.
- Provider secrets.
- Unpinned `latest` dependencies.
- Framework structure that contradicts the approved monorepo.

## CX-R1-002 — CI, quality, and security baseline

### Scope

- GitHub Actions workflows for install, format, lint, typecheck, unit tests, build, migration validation, Rust/Tauri checks, dependency review, secret scan, and artifact evidence.
- Required check names and branch review policy documentation.
- Test-result and build-artifact retention.
- Reproducible commands in contributor documentation.

### Acceptance

The empty foundation passes all checks twice from a clean checkout. Failed checks block merge.

## CX-R1-003 — Configuration and observability foundation

### Scope

- Typed configuration loader and environment separation.
- Structured JSON logging.
- request/correlation/process/job/print/ticket IDs.
- error classification and redaction.
- health/readiness/dependency endpoints.
- telemetry interfaces and local test sink.
- feature/rollout switches only for approved release gates.

### Tests

- missing/invalid configuration;
- secret redaction;
- correlation propagation;
- health degradation;
- environment isolation.

# WAVE 1 — DATA, IDENTITY, AND PLATFORM SERVICES

## CX-R1-004 — Local Supabase and migration foundation

### Scope

- Approved Supabase local project and config.
- Initial migration framework.
- database schemas and roles.
- SQL lint/test conventions.
- generated TypeScript database types.
- reset, seed, empty-database, and upgrade test commands.
- explicit Data API grants policy.
- security advisor execution where available.

### Acceptance

A new developer can start/reset the full local database and generate the same types using documented commands.

## CX-R1-005 — Tenant/company/branch/workstation/warehouse schema

### Scope

Implement platform organization, tenant, company, branch, department, workstation, service location, warehouse, and membership anchors required by R1.

### Security

- Tenant ownership on every tenant record.
- Branch scope where applicable.
- Unique identifiers/constraints.
- RLS positive and negative tests.
- No cross-tenant joins through views/functions.

## CX-R1-006 — Authentication, session, invitation, and recovery

### Scope

- Supabase Auth integration.
- invite/activate/sign-in/sign-out/recovery/session refresh.
- account state and session revocation.
- secure server-side user resolution.
- route/bootstrap behavior.
- audit events.

### Required negative tests

- expired/revoked sessions;
- disabled membership;
- wrong tenant context;
- stale claims;
- user-editable metadata privilege attempt.

## CX-R1-007 — Membership, roles, permissions, scopes, and approvals

### Scope

- canonical R1 roles and permission keys;
- application, branch, department, record, field, and action scopes;
- owner approvals and separation of duties;
- support-access request/scope/time/revocation;
- server policy service plus database/RLS enforcement;
- frontend permission projection.

### Acceptance

Complete authorization matrix and cross-tenant/role/branch negative tests pass. Frontend hiding is not the only control.

## CX-R1-008 — Plan catalog, Free/Trial entitlements, and usage

### Scope

- stable plan/version/feature/meter records;
- Free and Pro Trial definitions;
- Premium `CLOSED_TO_NEW_SALES` definition;
- subscription/entitlement snapshots;
- user/branch/job/storage/email/print-related pilot meters;
- limit warnings and safe continuity;
- trial expiry/remediation logic;
- platform-admin test overrides with expiry/audit.

### Excluded

- live paid checkout;
- recurring payment provider;
- automated tax/renewal charging.

## CX-R1-009 — Audit, idempotency, outbox, queues, and realtime

### Scope

- immutable audit envelope;
- idempotency records;
- transactional outbox/inbox;
- durable queues listed in stack plan;
- retry/dead-letter/replay controls;
- private realtime topics and authorization;
- background-worker runner and scheduling;
- observability and reconciliation.

### Tests

- duplicate command;
- transaction rollback;
- worker crash/retry;
- poison message/dead letter;
- replay;
- unauthorized channel;
- stale projection rebuild.

# WAVE 2 — SHARED UX, DOCUMENTS, PRINTING

## CX-R1-010 — Design-system foundation

### Prerequisite

Approved HF-01 token/component handoff.

### Scope

- tokens and semantic themes;
- accessible navigation, forms, tables, cards, timeline, dialogs, alerts, status, queues;
- loading/empty/error/permission/entitlement/offline/conflict states;
- Storybook or equivalent component evidence where approved;
- responsive and accessibility tests.

### Forbidden

Inventing business screens or workflows not present in the screen matrix.

## CX-R1-011 — Authenticated shell and role workspaces

### Scope

- app bootstrap;
- tenant/branch context;
- route groups for Owner, Front Desk, Technician, Customer, IT, Platform Admin;
- guards and navigation;
- My Cross-Department Work placeholder fed by typed contract;
- notifications/search/help placeholders;
- environment/support-access/usage banners;
- responsive shell.

### Acceptance

Role, route, branch, permission, entitlement, and session cases pass server and E2E tests.

## CX-R1-012 — File, evidence, document, and signature foundation

### Scope

- private storage buckets/policies;
- upload sessions, validation, checksum, scan status abstraction;
- document family/template/source snapshot/version;
- PDF renderer interface and deterministic fixtures;
- signature context/integrity;
- QR/barcode token mapping;
- download/preview authorization;
- retention metadata.

### Tests

- unauthorized object access;
- wrong tenant/entity link;
- tampered checksum;
- template/source version stability;
- signed URL expiry;
- finalized-document immutability.

## CX-R1-013 — Printer registry, capability resolver, and print jobs

### Scope

- printer/workstation/adapter/capability/certification records;
- document print profiles;
- compatible-printer resolver;
- print request/job/attempt/status/retry/cancel/reconcile;
- queue worker and mock adapters;
- staff/IT print status APIs and initial UI;
- audit and idempotency.

### Acceptance

Incompatible printers are excluded; browser dialog remains unconfirmed; duplicate retries do not repeat business transactions.

## CX-R1-014 — Windows local print agent foundation

### Scope

- Tauri/Rust signed-development skeleton;
- enrollment and workstation binding;
- secure loopback/native bridge;
- signed short-lived print-job validation;
- encrypted minimal local state;
- OS queue adapter and mock ESC/POS adapter;
- health/status/log bundle with redaction;
- update/rollback interface;
- offline queue rules.

### Forbidden

- arbitrary shell/remote command execution;
- accepting unsigned or cross-tenant jobs;
- storing business documents indefinitely;
- claiming hardware support without test record.

# WAVE 3 — REPAIR OPERATIONAL VERTICAL SLICES

## CX-R1-015 — Customer, business account, and device registry

Implement search-before-create, duplicate warnings, customer/contact/consent, business account baseline, device identifiers/ownership/history, protected fields, role-specific UI, APIs/events/audit, and tests.

## CX-R1-016 — Intake, consent, job order, and documents

Implement guided intake, accessories, condition/evidence, reported issue, consent/signature, job numbering, authoritative initial state, intake/job PDF, QR/tracking token, print/digital delivery, and cross-department process creation.

## CX-R1-017 — Queue, dispatch, assignment, and acceptance

Implement qualification, priority/SLA baseline, branch/skill/workload checks, manual assignment, technician accept/decline, reassignment, concurrency control, notifications, timeline, and manager oversight.

## CX-R1-018 — Inspection and diagnosis

Implement protected intake snapshot, inspection/diagnosis drafts, findings/tests/evidence, recommended repair/parts/risk/ETA, help/escalation, completion lock, and history.

## CX-R1-019 — Quotation, versioning, and customer approval

Implement line items, labor/parts/fees/tax/discount rules, approvals, immutable quotation versions, customer-safe presentation, expiry, send/question/approve/reject/revise, and exact-version signature/audit.

## CX-R1-020 — Inventory, reservation, issue/use/return, and basic receiving

Implement parts/compatibility, branch/warehouse stock, immutable movement ledger, reservation, issue/use/return/removal, basic purchase request/receiving, count/adjustment approval, job costing, concurrency, and audit.

## CX-R1-021 — Repair execution and exceptions

Implement approved-scope enforcement, repair checklist, progress/evidence/notes, parts consumption, pause/blocker, safety escalation, revised quotation trigger, resume, and send-to-test gate.

## CX-R1-022 — Testing, QC, and rework

Implement test plan/results/evidence, pass/fail, rework cycle, QC review, reject/request evidence/approve, quality audit, and release-readiness gate.

## CX-R1-023 — Invoice, payment record, and reconciliation

Implement final-charge validation, invoice version, deposit/partial/full payment record, balance, payment reference, receipt document source, reversal/adjustment approval baseline, reconciliation state, cashier session/daily summary, and idempotent commands.

## CX-R1-024 — Receipt/page printing and fallback

Implement A4/Letter rendering, 80 mm receipt rendering, browser/OS and local-agent delivery, preview/selection, reprint, status normalization, retry/fallback/IT ticket, fixture tests, and one mock/device adapter path.

## CX-R1-025 — Release, handover, and warranty activation

Implement QC/payment gate, customer/representative verification, accessories/condition, release signature, receipt/release/warranty documents, physical/digital delivery status, release transition, warranty activation, and audit.

# WAVE 4 — CUSTOMER, IT, COORDINATION, AND ADMIN

## CX-R1-026 — Customer Portal

Implement secure customer access/tracking, device/job list, audience-safe status/timeline, quotation action, invoice/receipt/release/warranty documents, support/feedback, mobile layouts, and customer authorization tests.

## CX-R1-027 — IT Operations Lite and contextual support

Implement contextual Get Help, service request/ticket, assignment/priority/status, incident linkage, workstation/agent/printer registry views, print/integration health, resolution, requester verification, knowledge note, Owner status, and audited platform escalation.

## CX-R1-028 — Cross-department process, handoff, blocker, and timeline

Implement process instance/stage, linked domain record, shared task reference, handoff, blocker, approval reference, audience-safe timeline, current/next owner, health projection, event consumers/rebuild, and role-specific views.

Shared projection never edits authoritative domain records.

## CX-R1-029 — Notifications and communication

Implement templates/preferences, in-app/realtime, local email-safe adapter, retry/delivery history, one customer communication owner, audience filtering, reminders, and cross-department/IT/print notices.

Live SMS/push remains excluded.

## CX-R1-030 — Owner dashboards, reports, search, and exports

Implement pilot operational/financial/inventory/quality/IT/printer/subscription summaries, permission-filtered search, drill-down, safe export jobs, audit, and no BI warehouse.

## CX-R1-031 — Platform pilot administration and support access

Implement pilot tenant/trial/usage/health views, entitlement assignment, approved support access, session visibility/revocation, audit, and no direct tenant business action outside approved support scope.

# WAVE 5 — RELEASE VALIDATION

## CX-R1-032 — Full migration, integration, E2E, and security pass

Run and fix only approved release defects across:

- empty and upgrade migrations;
- RLS/authorization matrix;
- all critical API/event contracts;
- complete repair E2E;
- customer/IT/printing failure paths;
- accessibility;
- queue/retry/replay;
- document fixtures;
- backup/restore;
- performance baseline;
- dependency/secret/static security.

No feature expansion is allowed during stabilization.

## CX-R1-033 — Printer hardware laboratory certification

Execute the exact certification matrix against selected page and 80 mm thermal hardware. Record physical evidence, firmware/driver/OS/agent/template versions, failures, limitations, and support state.

No code change beyond a separately approved defect task.

## CX-R1-034 — Role-based UAT and remediation

Execute the UAT matrix with named representatives. Every finding is classified:

- defect within approved behavior;
- design usability defect;
- architecture change request;
- training/documentation issue;
- accepted limitation.

Only approved defect tasks enter coding.

## CX-R1-035 — Controlled pilot deployment and rollback rehearsal

### Required evidence

- release candidate SHA and signed artifacts;
- environment and migration approval;
- backups and restore rehearsal;
- monitoring/alerts/runbooks;
- local-agent deployment/rollback;
- printer certification;
- user/access roster;
- UAT approval;
- pilot data/privacy approval;
- rollback trigger and execution rehearsal;
- Owner go/no-go.

Public production remains unauthorized.

## Task completion report

Every task must end with:

```text
Task ID:
Status:
Authorization evidence:
Source paths read:
Changed paths:
Migration IDs:
API/event/schema versions:
Tests run and results:
Security/tenant/RLS evidence:
UI/accessibility evidence:
Hardware evidence when applicable:
Known limitations:
Rollback/forward recovery:
Commit SHA:
PR:
Reviewer result:
Exact next authorized task or STOP:
```

## Manifest status

```text
CODEX TASKS DEFINED: 36
DEPENDENCY ORDER: LOCKED
TASK CONTRACT: REQUIRED FOR EVERY EXECUTION
GLOBAL CODING AUTHORIZATION: NO
FIRST POSSIBLE CODE TASK AFTER AUTHORIZATION: CX-R1-001
```