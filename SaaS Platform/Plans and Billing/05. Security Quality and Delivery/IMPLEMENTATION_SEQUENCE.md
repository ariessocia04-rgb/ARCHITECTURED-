# PLANS AND BILLING — EXACT IMPLEMENTATION SEQUENCE

## Authority

This sequence specializes `TECA/IMPLEMENTATION_BUILD_PLAN.md` for Free, Pro, Premium, subscription, entitlement, usage, billing-provider integration, wireframes, wireflows, security, testing, and release. It is a coding handoff only after the owner sets `implementation_authorized=true` for an exact slice.

Codex or any implementation worker must implement only assigned approved tasks. It must not redesign plan rules, prices, entitlements, limits, lifecycle, data, screens, provider behavior, or business continuity.

## Release strategy

Use foundation-first, dependency-ordered vertical slices. Do not build a pricing UI before catalog validation, payment preview, entitlement resolution, data ownership, and security contracts exist.

## Phase PB-00 — Authorization and repository verification

1. Read required canonical documents in index order.
2. Verify latest `main`, open PRs, branches, migrations, provider configuration, and active worker.
3. Confirm exact release ID, included plan versions, market, provider, price-book approval, and exclusions.
4. Confirm `implementation_authorized=true` for exact slice.
5. Return `NOT_AUTHORIZED`, `BLOCKED`, `SKIPPED_ALREADY_COMPLETE`, or approved task.

Exit: factual release manifest and no racing worker.

## Phase PB-01 — Stack, provider, and version lock

Approve exact versions for:

- frontend/backend/runtime/workspace;
- PostgreSQL/database access/migrations;
- API schema and validation;
- event/queue/realtime/cache;
- identity/MFA/SSO;
- billing provider and SDK/API version;
- email/SMS/push;
- file/export storage;
- test/security/accessibility/performance tools;
- hosting/region/environments/observability.

Provider capability checklist:

- customers, products/prices, subscriptions, invoices, payments, refunds/credits;
- checkout/payment collection;
- billing portal or secure payment-method session;
- tax/market/currency support;
- proration preview and pending updates;
- signed webhooks/replay protection;
- idempotency;
- usage meters when used;
- sandbox/test clocks where available;
- data export and migration support.

Exit: approved ADR and environment variable names only, no secret values.

## Phase PB-02 — Traceability and contract lock

1. Assign requirement IDs to all package sections.
2. Map 24 screens, 20 flows, data tables, APIs, events, permissions, tests.
3. Lock launch plan versions and owner-approved prices/limits.
4. Lock trial, grace, retention, support, and market policy.
5. Lock provider mapping and internal/provider state map.

Exit: release traceability matrix and no open critical decision.

## Phase PB-03 — Database/catalog foundation

Implement migrations and repositories in this order:

1. plans and plan versions;
2. price books and plan prices;
3. features and entitlements;
4. meter definitions and plan limits;
5. trial/support/retention/add-on policies;
6. billing accounts/provider mappings;
7. subscriptions and subscription items;
8. entitlement snapshots and overrides;
9. usage periods/events/aggregates/thresholds;
10. plan previews/changes/remediation;
11. provider inbox/events;
12. subscription invoices/payments/credits/refunds;
13. reconciliation findings and audit.

Implement constraints, indexes, ownership, immutability, versioning, and migration tests before services.

Exit: empty/upgrade migration, tenant-isolation, integrity, and restore tests pass.

## Phase PB-04 — Plan catalog service and platform administration

Backend:

- draft/read/review/approve/publish/close/migrate plan versions;
- price-book validation;
- feature/meter registry and type validation;
- immutable publication;
- catalog eligibility query;
- audit/outbox/cache invalidation.

Frontend vertical slice:

- PB-WF-20 Plan Catalog;
- PB-WF-21 Version Task List;
- PB-WF-22 Entitlement/Limit Matrix;
- loading/error/permission/review/confirmation;
- platform approval separation.

Exit: published test catalog can be queried, cannot be silently edited, and passes contract/security/accessibility tests.

## Phase PB-05 — Entitlement resolver foundation

Implement:

1. snapshot publication and effective lookup;
2. override precedence/expiry;
3. cache/version/invalidation;
4. common feature and limit resolver;
5. subscription access-mode resolver;
6. server middleware/service guards;
7. frontend typed entitlement client and route state;
8. worker/export/search/file/realtime enforcement helpers;
9. core continuity allowlist.

Do not integrate every feature yet; create test fixtures proving consistent denial/allow behavior.

Exit: cross-layer entitlement conformance and stale-cache tests pass.

## Phase PB-06 — Free plan and tenant provisioning vertical slice

Implement end to end:

- public catalog PB-WF-01;
- signup/trial PB-WF-02;
- check answers PB-WF-03;
- provisioning PB-WF-04;
- Free subscription creation;
- entitlement snapshot and usage period;
- owner overview PB-WF-05;
- Free usage dashboard baseline;
- Free limit enforcement fixtures;
- trial eligibility and conversion.

Provider is not required for pure Free activation. Paid trial conversion remains stubbed only through approved adapter test double until PB-08.

Exit: new Free tenant is idempotently provisioned and all Free plan tests pass.

## Phase PB-07 — Metering and quota vertical slice

Implement one meter fully before all meters:

```text
JobOrderCreated
→ usage event
→ aggregate
→ 80/90/100 thresholds
→ usage dashboard/detail
→ safe block of 101st Free routine job
→ active repair continuity
→ audit/notifications/reconciliation
```

Then implement structural counts, storage, email, export, API, webhooks, integrations, AI according to source map.

Implement usage dispute and correction after authoritative meters are stable.

Exit: every meter passes dedupe, late event, correction, rebuild, threshold, continuity, isolation, and performance tests.

## Phase PB-08 — Billing provider adapter and webhook foundation

Implement provider-neutral interface and fake provider first.

Then approved provider adapter:

- create/resolve customer;
- checkout/portal/payment method;
- preview/apply change;
- cancel/reactivate/retrieve;
- invoices/payments/refunds;
- meter usage when approved;
- webhook verification/parser;
- health/circuit breaker.

Implement durable webhook inbox:

- raw signature verification;
- event dedupe;
- encrypted payload reference;
- fast durable acknowledgement;
- async processing/dead letter;
- tenant mapping/version/idempotency;
- reconciliation.

Exit: fake and sandbox-provider contract suites pass, including duplicate/delayed/out-of-order events and unknown outcomes.

## Phase PB-09 — Pro paid activation and upgrade vertical slice

Implement:

- authorized comparison PB-WF-06;
- immutable preview PB-WF-07;
- pending payment/change;
- processing/confirmation PB-WF-08;
- Pro activation/upgrade;
- invoice/payment references;
- entitlement snapshot/usage carry-forward;
- owner notifications and reconciliation.

Test Free → Pro, failed payment, processing, webhook delay, provider success/internal failure, browser refresh, duplicate click, stale preview.

Exit: no entitlement activation before trusted payment; no duplicate charge/change.

## Phase PB-10 — Premium and advanced entitlement vertical slice

Implement Premium plan activation and configuration gates for:

- multi-company/branch limits;
- BI/AI/API/webhooks/integrations;
- SSO/MFA activation and break-glass;
- advanced branding/retention/support visibility;
- optional dedicated-deployment eligibility flag only, not infrastructure unless separately authorized.

Each advanced module remains implemented according to its own canonical architecture. This slice grants/denies entitlements; it does not invent those modules.

Exit: Premium entitlement/limit/security matrix passes.

## Phase PB-11 — Downgrade and remediation vertical slice

Implement:

- compatibility engine;
- remediation items;
- PB-WF-09/10/11;
- explicit company/branch/user/warehouse selections;
- role mapping, SSO fallback, API/webhook/integration shutdown;
- storage and retention handling;
- scheduled effect/revalidation/revocation;
- read-only/inactive resource treatment;
- reconciliation/confirmation.

Test Premium → Pro, Premium → Free, Pro → Free, resource changes after schedule, active repair/custody/legal holds, no deletion.

Exit: deterministic complete remediation and data preservation evidence.

## Phase PB-12 — Renewal, past due, grace, suspension, reactivation

Implement:

- renewal notices and invoice/payment attempt;
- retry policy and idempotency;
- PB-WF-16 past due/grace;
- access-mode transitions;
- PB-WF-17 suspended owner view;
- PB-WF-19 reactivation;
- security/legal suspension approval boundary;
- core continuity behavior;
- provider outage/unknown status reconciliation.

Exit: Pro/Premium grace and all suspension reasons pass workflow/security/continuity tests.

## Phase PB-13 — Cancellation, export, archive, and closure

Implement:

- PB-WF-18 cancellation/check answers/step-up/confirmation;
- revoke scheduled cancellation;
- access changes at effective time;
- authorized export with manifest/checksum/expiry;
- integration/API/session shutdown;
- archive window;
- entity retention/legal hold/deletion eligibility;
- verified deletion jobs and close state.

Deletion jobs remain separately protected and cannot be inferred from commercial archive expiry.

Exit: cancellation/export/reactivation/retention/deletion tests and legal/financial continuity pass.

## Phase PB-14 — Platform overrides, suspension, and reconciliation

Implement PB-WF-23/24:

- temporary override request/approval/expiry/revocation;
- platform suspension/reactivation;
- provider/internal comparison;
- deterministic retry/rebuild/replay;
- manual resolution approval;
- safe payload masking;
- tenant-visible audit where configured.

Exit: no self-approval, permanent override, cross-tenant access, or unsafe auto financial/destructive action.

## Phase PB-15 — Full UI state and accessibility completion

For all 24 screens:

- desktop/tablet/mobile;
- loading/empty/error/permission/entitlement/limit/restriction;
- processing/unknown result/confirmation;
- keyboard/screen reader/zoom/reflow/target size/status messages;
- low-connectivity preservation and stale-client refresh;
- visual regression against approved high-fidelity design when available.

High-fidelity design cannot alter the documented workflow or business rules.

Exit: WCAG 2.2 AA evidence and all responsive variants pass.

## Phase PB-16 — Security, performance, recovery, and operational readiness

- ASVS-derived security verification and penetration testing;
- provider/webhook/redirect/IDOR/privilege/secret tests;
- target load by plan mix;
- entitlement/usage/provider/reconciliation monitoring;
- database/queue/cache/provider failover;
- backup/restore/RTO/RPO;
- runbooks, alerts, on-call/support ownership;
- privacy/terms/tax/invoice approval;
- evidence package.

Exit: no critical/high unresolved issue and all release gates pass.

## Phase PB-17 — Staged rollout

1. internal/fake provider;
2. sandbox provider;
3. staging;
4. internal pilot;
5. small Free cohort;
6. controlled Pro paid pilot;
7. controlled Premium pilot;
8. market general availability.

Each stage has metrics, observation window, stop/rollback criteria, and owner approval.

## Codex task format

Every coding task must contain:

```text
Task ID:
Release ID:
Source paths/sections:
Exact canonical target files:
Included behavior:
Explicit exclusions:
Dependencies:
Database/API/event/UI contracts:
Wireframe IDs:
Wireflow IDs:
Permissions/entitlements/scopes:
Failure/continuity behavior:
Tests required:
Acceptance evidence:
Branch/worktree:
Handoff state:
implementation_authorized=true/false:
```

## Codex prohibitions

Codex must not:

- change plan prices/limits/features without an approved version;
- substitute provider state for internal authorization;
- hardcode plan-name branches instead of entitlement resolution;
- omit backend enforcement because UI hides a feature;
- auto-delete downgrade excess data;
- activate paid entitlement before payment-requiring change succeeds;
- weaken Free security;
- skip failure, accessibility, isolation, reconciliation, migration, or rollback tests;
- merge to main without review and evidence;
- claim production complete from architecture or partial code.

## Completion reporting

Report separately:

```text
ARCHITECTURE STATUS
HIGH-FIDELITY DESIGN STATUS
IMPLEMENTATION STATUS
AUTOMATED TEST STATUS
SECURITY/ACCESSIBILITY/PERFORMANCE STATUS
PROVIDER SANDBOX STATUS
DEPLOYMENT STATUS
PRODUCTION STATUS
```

## Status

`PLANS_BILLING_IMPLEMENTATION_SEQUENCE_COMPLETE_AS_PLAN`
