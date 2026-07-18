# PLANS AND BILLING — TEST, ACCEPTANCE, RELEASE, AND ROLLBACK

## Quality rule

The architecture is not implementation evidence. A release is complete only when the approved vertical slice, automated/manual tests, security/accessibility/performance evidence, migration/restore evidence, monitoring, support, and rollback gates pass.

## Required test layers

### Unit and component

- plan/version/price eligibility and effective dates;
- money/tax/proration/credit calculations using approved provider preview fixtures;
- entitlement resolution and override precedence;
- usage aggregation, threshold crossing, reservation, settlement, correction;
- state-transition eligibility and access-mode resolution;
- downgrade compatibility/remediation generation;
- provider-status mapping;
- error and plain-language content components;
- responsive/keyboard component behavior.

### Database and migration

- empty database migration;
- previous supported schema to new schema;
- deterministic non-production catalog seed;
- constraints, uniqueness, foreign keys, checks, indexes;
- tenant ownership and row-level/database enforcement when selected;
- append-only snapshot/audit/usage-correction behavior;
- migration rollback or forward-fix plan;
- backup before destructive migration and verified restore.

### Service integration

- catalog → preview → provider adapter → subscription → snapshot;
- subscription → usage period;
- domain event → usage event → aggregate → threshold → enforcement;
- payment/invoice/refund → state transition;
- provider webhook inbox → asynchronous command → reconciliation;
- downgrade remediation → scheduled apply;
- cancellation → export → archive;
- identity/permission/step-up/support access;
- notification, audit, file export, realtime, queue, cache, and search integration.

### Contract

- API request/response/error schemas;
- event and webhook schemas/versions;
- provider adapter conformance using fake provider and approved sandbox provider;
- idempotency behavior;
- pagination/filter/sort/field visibility;
- deprecation/compatibility;
- realtime topic authorization;
- export manifest/schema.

### Workflow/state transition

Test every allowed transition and reject every unlisted transition:

- signup/provision/trial/Free activation;
- trial conversion and incompatible remediation;
- Free → Pro/Premium;
- Pro → Premium;
- monthly ↔ annual;
- paid renewal success/failure/retry/grace;
- downgrade clean/remediation/stale/revoked/applied;
- cancellation scheduled/revoked/effective;
- past due/grace/non-payment suspension/security suspension;
- reactivation normal/security/retired plan;
- cancelled → archived → closed;
- provider/internal mismatch and repair.

### Plan matrix

| Scenario | Free | Pro | Premium |
|---|---:|---:|---:|
| Normal activation/use | Required | Required | Required |
| Structural limits | Required | Required | Required |
| Monthly quotas | Required | Required | Required |
| Upgrade target/source | Source | Source/target | Target |
| Downgrade target/source | Target | Source/target | Source |
| Trial conversion | Target | Trial target | Trial target |
| Past due/grace | N/A | Required | Required |
| API/webhooks/integrations | Denial | Limited | Advanced |
| AI/BI/SSO | Denial | Limited/denial | Advanced |
| Multi-company/isolation add-on | Denial | Denial | Required |

### Permission and tenant isolation

For every screen/API/service/job/file/event/export/cache/search/realtime path:

- another tenant;
- another company/branch;
- non-owner staff;
- customer user;
- expired/suspended membership;
- role without field permission;
- platform support without grant;
- platform staff outside role;
- stale entitlement snapshot;
- hidden direct object reference;
- provider reference mapped to wrong tenant/environment.

Zero accepted cross-tenant access.

### Idempotency/concurrency

- repeated signup/provision;
- repeated checkout/upgrade/downgrade/cancel/reactivate;
- double-click and browser refresh;
- simultaneous plan changes;
- renewal and cancellation race;
- upgrade and provider webhook race;
- duplicate/out-of-order provider events;
- repeated usage events and correction;
- duplicate threshold notifications;
- concurrent seat/branch/job/storage preflight;
- payment succeeds while preview expires;
- downgrade effective while resources change;
- repeated export/refund/reconciliation action.

### Provider and financial

- signature/timestamp/replay verification;
- provider timeout before/after object creation;
- webhook delayed/duplicated/out of order;
- payment success/failure/processing/dispute/reversal;
- provider succeeds/internal apply fails;
- internal succeeds/provider read delayed;
- invoice amount, currency, tax, credit, proration mismatch;
- refund/credit authorization and reconciliation;
- provider customer/subscription/price mapping;
- sandbox end-to-end checkout and portal;
- secret rotation and invalid credential behavior.

### Usage/quota

- every meter source, unit, aggregation, period, reset;
- 79%, 80%, 89%, 90%, 99%, 100%, approved overage;
- late events, corrections, closed periods;
- provider reporting delay/retry/failure;
- aggregate rebuild and comparison;
- active job continuity at job limit;
- critical evidence reserve at storage limit;
- AI/API/message/export isolation;
- dispute and adjustment;
- plan change carry-forward/split period;
- one tenant/noisy neighbor cannot affect others.

### UI/end-to-end

All `PB-WF-01`–`PB-WF-24` and `PB-FLOW-01`–`PB-FLOW-20`:

- normal path;
- back/change/save/exit/resume;
- validation/error summary;
- permission/entitlement/limit/restriction;
- pending processing/unknown outcome;
- confirmation/reference;
- mobile/tablet/desktop;
- browser reload and network interruption;
- deep link and stale page;
- non-owner plain-language view;
- no lost input or duplicate command.

### Accessibility

- automated WCAG checks plus manual keyboard, screen-reader, zoom/reflow, contrast, focus, target size, labels, errors, status messages, tables/charts, dialogs, provider-return journey;
- all responsive variations;
- payment, cancellation, reactivation, export, and MFA/step-up;
- no color-only or hover-only information;
- check-answers Change links and error-summary focus.

Target: WCAG 2.2 AA, with documented exceptions only through owner-approved remediation plan.

### Security

- OWASP ASVS-derived verification;
- authentication/session/MFA/step-up;
- broken access control and IDOR;
- mass assignment/field allowlists;
- injection, SSRF, XSS, CSRF as applicable;
- open redirect;
- webhook spoof/replay;
- secrets/log leakage;
- rate-limit/abuse;
- provider and dependency compromise simulations;
- privilege abuse and approval bypass;
- export/download authorization/expiry;
- SSO lockout/break-glass;
- AI/API cost abuse;
- penetration test before production and after material risk change.

### Performance/capacity

Use approved load model by Free/Pro/Premium tenant mix:

- entitlement resolver p50/p95/p99;
- subscription/usage pages;
- plan preview/operation acknowledgement;
- webhook durable acknowledgement and processing;
- usage ingestion/aggregation/threshold;
- renewal batch and reconciliation;
- export jobs;
- catalog publication/cache invalidation;
- high API/AI tenants and noisy-neighbor isolation;
- pooled versus optional isolated Premium deployment.

Target values come from the Security/NFR file and require measured evidence.

### Resilience/recovery

- database failover/restore;
- queue/cache/object storage/provider outage;
- lost/delayed event recovery;
- outbox/inbox replay;
- snapshot/cache rebuild;
- usage aggregate rebuild;
- provider event replay and reconciliation;
- partial plan change;
- backup restore with tenant-boundary verification;
- RTO/RPO rehearsal;
- runbook and incident communication.

## UAT personas

- new micro-shop owner selecting Free;
- Pro owner upgrading and managing usage;
- Premium multi-company owner;
- Billing Contact;
- Front Desk/Technician during grace/limit;
- non-technical owner performing downgrade remediation;
- keyboard-only and screen-reader user;
- low-vision/zoom user;
- user with limited dexterity/tremor;
- slow/unstable network user;
- Platform Product/Billing/Security/Support roles;
- auditor reviewing immutable history.

## Release acceptance gates

### Architecture gate

- all package files complete and consistent;
- screen/flow/data/API/event/test traceability complete;
- no conflicting canonical definition;
- owner approves launch plan versions, price books, terms, limits, trial, retention, and support policies.

### Implementation gate

- exact stack/provider/version and release scope approved;
- `implementation_authorized=true` for exact slice;
- code, migrations, tests, and docs reviewed;
- no later-scope feature introduced.

### Quality gate

- required automated suites pass;
- no critical/high unresolved security issue;
- no cross-tenant failure;
- no duplicate-charge/data-loss bug;
- accessibility AA evidence or approved exception;
- performance/capacity meets approved target;
- restore/reconciliation/rollback rehearsal passes.

### Operational gate

- production catalog/price/provider mappings verified;
- provider webhooks/return URLs/secrets/rotation configured;
- monitoring/alerts/runbooks/support ownership active;
- legal terms/privacy/tax/invoice communications approved;
- backups and restore verified;
- status/support communications ready;
- staged rollout and kill switches ready.

## Rollout sequence

1. Internal development with fake provider and synthetic tenants.
2. Provider sandbox integration.
3. Staging with production-like catalog, no live charges.
4. Internal staff/owner pilot.
5. Small Free cohort.
6. Controlled Pro pilot with explicit billing consent.
7. Controlled Premium pilot.
8. General availability by market/price book.
9. Optional Premium isolated deployment only after separate infrastructure gate.

Each stage has entry/exit metrics, observation window, owner, rollback criteria, and tenant communication.

## Rollback design

### Catalog/version rollback

- stop new sales of faulty version;
- restore previous available catalog pointer;
- never mutate existing published records;
- identify affected tenants and create migration/reconciliation plan.

### Application release rollback

- deploy previous compatible application version;
- maintain backward-compatible database/event/API window;
- disable new technical feature flags without revoking valid purchased entitlements;
- reconcile commands submitted during transition.

### Provider rollout rollback

- disable new checkout/portal sessions;
- preserve existing provider objects;
- queue/reconcile verified webhooks;
- revert adapter version when compatible;
- no blind duplicate charge/refund.

### Data migration rollback

- prefer forward-compatible migrations/forward fix;
- destructive rollback requires verified backup, outage plan, tenant isolation, and financial/event reconciliation;
- entitlement snapshots and audit remain append-only.

### Plan-change failure rollback

- payment not confirmed: old plan remains.
- payment confirmed/internal apply failed: retry internal apply or approved refund/credit; do not charge again.
- downgrade apply partial: enter protected reconciliation, restore prior snapshot where safe, preserve all data.

## Release evidence package

```text
docs/evidence/plans-billing/<release-id>/
├── release-manifest.md
├── requirement-traceability.csv
├── architecture-approval.md
├── catalog-price-approval.md
├── migration-results.md
├── automated-test-results/
├── accessibility-results/
├── security-results/
├── performance-capacity-results/
├── backup-restore-results/
├── provider-sandbox-results/
├── reconciliation-results/
├── uat-signoff.md
├── monitoring-runbooks.md
├── rollout-record.md
└── rollback-record.md
```

No secrets or personal production data in evidence.

## Definition of done

A plan/billing release is done only when:

- approved plans work exactly as configured;
- every entitlement/limit is enforced consistently;
- every documented screen/flow/state/failure is implemented and tested;
- money/provider events are idempotent and reconciled;
- downgrade/cancellation preserve data;
- core repair continuity behaves as specified;
- security, isolation, accessibility, performance, recovery, monitoring, support, and rollback evidence exists;
- canonical status files are synchronized and read back.

## Status

`PLANS_BILLING_TEST_ACCEPTANCE_RELEASE_ROLLBACK_ARCHITECTURE_COMPLETE`
