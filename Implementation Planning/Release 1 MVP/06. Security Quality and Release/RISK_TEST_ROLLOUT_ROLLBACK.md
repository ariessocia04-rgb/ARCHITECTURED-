# RELEASE 1 MVP — RISK, TEST, ROLLOUT, AND ROLLBACK PLAN

## Release posture

Release 1 is a controlled pilot, not a public production release. Every required test failure blocks promotion. Pilot pressure, demo deadlines, or hardware availability do not waive tenant isolation, financial integrity, inventory integrity, authorization, document evidence, print safety, accessibility, backup, or rollback requirements.

## Priority risk register

| ID | Risk | Impact | Required controls | Release gate |
|---|---|---|---|---|
| R1-RSK-001 | Cross-tenant or cross-branch data leakage | Critical | tenant keys, RLS, server policy, negative tests, audit | zero unresolved |
| R1-RSK-002 | Frontend permission mistaken for authorization | Critical | backend/database/file/realtime/queue enforcement | zero unresolved |
| R1-RSK-003 | Duplicate payment, stock, release, warranty, or print action | Critical | idempotency, unique constraints, transaction/outbox, replay tests | zero unresolved |
| R1-RSK-004 | Stale role/session/entitlement access | High | session revocation, server reads, policy versioning, refresh tests | pass |
| R1-RSK-005 | Financial or inventory history overwritten | Critical | immutable movements/adjustments/versions, approval, audit | zero unresolved |
| R1-RSK-006 | Wrong quotation approved | High | exact-version token/signature, expiry, concurrency | pass |
| R1-RSK-007 | Customer sees internal/restricted data | Critical | audience-safe projection, field filtering, negative tests | zero unresolved |
| R1-RSK-008 | IT/support receives blanket business-data access | Critical | minimized support context, approval/scope/time/audit | zero unresolved |
| R1-RSK-009 | Local print agent compromise or command abuse | Critical | signed jobs, loopback, workstation binding, no shell, least privilege, signing | zero unresolved |
| R1-RSK-010 | Printer mismatch or false completion status | High | capability resolver, certification, truthful state, fallback | certified path only |
| R1-RSK-011 | Print retry repeats business transaction | Critical | document/print separation, immutable source, idempotency | zero unresolved |
| R1-RSK-012 | Queue loss/replay/poison message | High | durable queues, visibility timeout, attempt/dead letter, replay/reconcile | pass |
| R1-RSK-013 | Realtime topic leaks data | Critical | private channels, authorization policies, topic scope tests | zero unresolved |
| R1-RSK-014 | File/object URL exposes protected evidence | Critical | private storage, RLS, short signed access, expiry/audit | zero unresolved |
| R1-RSK-015 | Free hosted service pause/quota causes pilot outage | High | paid/self-hosted pilot decision, monitoring, backup, continuity plan | owner decision |
| R1-RSK-016 | Migration corrupts or loses data | Critical | empty/upgrade tests, backup, rehearsal, forward recovery | pass |
| R1-RSK-017 | Restore exists only on paper | Critical | actual restore rehearsal and evidence | pass |
| R1-RSK-018 | Dependency/supply-chain compromise | High | lockfiles, pinned actions, scanning, review, SBOM where approved | pass |
| R1-RSK-019 | Secrets or customer data in repo/logs | Critical | secret scan, schemas, redaction, synthetic fixtures | zero unresolved |
| R1-RSK-020 | Accessibility blocks staff/customer task | High | component checks, keyboard/zoom/screen-reader/UAT | pass |
| R1-RSK-021 | Cross-department projection diverges from domain truth | High | event versioning, rebuild/reconcile, read-only projection | pass |
| R1-RSK-022 | Staff send conflicting customer messages | Medium/High | one communication owner, audience policy, message history | pass |
| R1-RSK-023 | Pilot includes unapproved real data | Critical | data approval, minimization, roster, retention, audit | zero unresolved |
| R1-RSK-024 | Rollback leaves database/app/agent incompatible | Critical | compatibility window, forward recovery, agent rollback, rehearsal | pass |

## Test pyramid and ownership

### Per commit

- frozen install;
- format/lint/typecheck;
- unit/component tests;
- changed SQL/migration tests;
- changed contract/generated-type check;
- Rust fmt/clippy/tests when agent changes;
- dependency/secret/static checks;
- builds.

### Per task

- domain/state/invariant tests;
- authorization/RLS negative tests;
- migration reset/upgrade tests;
- API/event/queue contract tests;
- frontend states and accessibility;
- integration happy/failure/retry;
- audit/idempotency/recovery;
- task-specific performance or hardware tests.

### Per Release 1 candidate

1. clean install/build.
2. empty database migration.
3. upgrade from prior supported migration set.
4. deterministic seed and generated types.
5. complete RLS/authorization matrix.
6. complete repair E2E across roles.
7. customer audience-safe E2E.
8. IT/support-access E2E.
9. document and print fixture suite.
10. local-agent protocol/security suite.
11. selected hardware certification.
12. queue retry/dead-letter/replay/reconciliation.
13. backup and restore rehearsal.
14. browser/device responsive tests.
15. accessibility automated and manual checks.
16. load/capacity baseline against approved pilot volume.
17. dependency/security/threat-case verification.
18. role-based UAT.
19. deployment/rollback rehearsal.

## Critical E2E scenarios

### E2E-R1-01 — Complete repair happy path

```text
Owner configures branch/users
→ Front Desk creates customer/device/intake/job
→ Dispatcher assigns
→ Technician accepts/diagnoses
→ quotation generated
→ Customer approves exact version
→ Inventory reserves/issues part
→ Technician repairs/tests
→ QC approves
→ Cashier records payment
→ receipt generated/printed
→ Front Desk verifies release/signature
→ warranty activated
→ Customer sees documents/status
→ Owner sees audit/report
```

### E2E-R1-02 — Customer rejects quotation

Verify no unauthorized repair/parts consumption/payment/release; communication and closure/hold path remain auditable.

### E2E-R1-03 — Part unavailable

Verify blocker/handoff to inventory/purchasing, customer communication owner, resume after receiving, and no duplicate reservation.

### E2E-R1-04 — Testing fails and rework

Verify QC rejection, rework loop, evidence/history, and blocked release/payment completion.

### E2E-R1-05 — Printer unavailable after payment

Verify payment remains complete, document exists, print job fails truthfully, fallback appears, IT ticket links, reprint does not duplicate payment.

### E2E-R1-06 — Authorization attacks

Attempt cross-tenant, cross-branch, wrong-role, customer-other-record, IT-restricted-field, expired tracking token, revoked session, and stale entitlement access.

### E2E-R1-07 — Queue/worker failure

Crash workers during document/print/notification/outbox processing; verify retry/idempotency/dead-letter/reconciliation.

### E2E-R1-08 — Trial expiry

Verify no silent charge, Free conversion or remediation mode, continuity for active repairs/documents, and correct limits.

## Accessibility release checks

- WCAG 2.2 AA-oriented automated checks.
- Keyboard-only critical paths.
- Visible focus.
- Correct headings/landmarks/labels.
- Error summary and field association.
- Status not color-only.
- 200% zoom and responsive reflow.
- Touch targets and spacing.
- Reduced-motion alternative.
- Screen-reader pass on sign-in, intake, quotation approval, payment, customer tracking, ticket creation, and printer failure.

## Performance and reliability pilot targets

These are initial controlled-pilot targets and require measured evidence:

- ordinary authenticated page server response p95: ≤ 800 ms excluding large report/document generation;
- common API command/query p95: ≤ 500 ms under pilot load;
- search p95: ≤ 1 second for pilot data volume;
- critical transaction completion p95: ≤ 2 seconds excluding external/print delivery;
- realtime projection update: normally ≤ 3 seconds;
- document generation p95: ≤ 10 seconds;
- print job visible to local agent: normally ≤ 5 seconds when online;
- no data loss during approved queue/worker restart tests;
- restore rehearsal meets approved pilot RPO/RTO recorded before rollout.

Targets are not production SLAs.

## Release artifacts

The candidate package includes:

- release manifest and lock file;
- web build/container artifact;
- database migrations and checksums;
- generated API/database types;
- signed/checksummed local-agent package;
- SBOM/dependency report when approved;
- test reports;
- document golden files;
- hardware certification report;
- UAT results;
- configuration schema;
- deployment, monitoring, incident, restore, and rollback runbooks;
- known limitations;
- commit/PR evidence.

## Rollout stages

### R1-ROL-0 — Internal local/CI

Synthetic data only. No physical customer operation.

### R1-ROL-1 — Shared development integration

Synthetic multi-role and multi-tenant tests. No production printer claim.

### R1-ROL-2 — UAT staging

Named users, release candidate, exact printer hardware, test/approved masked data only. Execute full UAT and recovery rehearsals.

### R1-ROL-3 — Shadow pilot

Staff run selected workflows in parallel without making the new system the sole authoritative operational record. Compare results and capture defects.

### R1-ROL-4 — Limited live pilot

- one branch;
- named staff;
- limited volume;
- monitored hours;
- daily Owner/IT review;
- rollback ready;
- no unapproved future modules.

### R1-ROL-5 — Pilot stabilization

No feature expansion. Fix only approved release defects, validate data/audit/print/IT outcomes, and produce go/no-go for a later production release.

## Rollback triggers

Immediate stop/rollback consideration for:

- confirmed or suspected tenant/privacy breach;
- financial/inventory duplication or corruption;
- unrecoverable migration/data integrity issue;
- widespread authentication/authorization failure;
- print-agent security breach or unauthorized command acceptance;
- inability to restore critical data;
- repeated queue loss or inconsistent process/domain state;
- critical accessibility barrier preventing required task;
- unsupported printer/device behavior affecting payment/release evidence;
- monitoring/backup/support controls unavailable.

## Rollback methods

### Application

- disable affected release flag/route;
- redeploy previous compatible web artifact;
- preserve incoming evidence and queue state;
- block unsafe writes while allowing approved read/export/recovery.

### Database

- Prefer forward recovery migrations.
- Destructive down migration is prohibited when it risks history/data.
- Restore only from verified backup with Owner/incident approval and reconciliation plan.
- Maintain compatibility window so prior app can operate where approved.

### Queues/realtime

- pause consumers;
- retain/archive messages;
- fix/redeploy consumer;
- replay idempotently;
- rebuild projections and reconcile.

### Local print agent

- stop enrollment/job delivery;
- revoke affected agent/workstation certificate/token;
- roll back signed package;
- use browser/PDF fallback;
- reconcile pending/unknown print jobs.

### Pilot operations

- return to approved previous/manual process;
- export and preserve new-system records;
- communicate clear staff/customer handling;
- document affected jobs/payments/releases and manually reconcile.

## Go/no-go authority

Required approvals:

- technical reviewer;
- security/privacy reviewer;
- database/migration reviewer;
- Owner/business representative;
- Front Desk representative;
- Technician/QC representative;
- Finance/Inventory representatives;
- IT/printer support representative;
- UAT coordinator.

A single high/critical unresolved issue may block release according to the risk owner and release policy.

## Status

```text
RISK REGISTER: COMPLETE AS PLAN
TEST MATRIX: COMPLETE AS PLAN
ROLLOUT STAGES: COMPLETE AS PLAN
ROLLBACK METHODS: COMPLETE AS PLAN
EXECUTED TESTS/UAT/DEPLOYMENT: NOT PERFORMED
PILOT APPROVAL: NOT GRANTED
```