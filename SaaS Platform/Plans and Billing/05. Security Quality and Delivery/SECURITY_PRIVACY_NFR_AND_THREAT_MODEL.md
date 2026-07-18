# PLANS AND BILLING — SECURITY, PRIVACY, NFR, AND THREAT MODEL

## Security objectives

1. A tenant cannot obtain paid features, higher quotas, lower prices, refunds, credits, or another tenant's billing data without exact authority.
2. Provider callbacks, redirects, sessions, and identifiers cannot bypass internal validation.
3. Money, subscription state, entitlement snapshots, usage, invoices, payments, refunds, and audit history remain correct under retries, concurrency, delay, outage, and attack.
4. Free receives the same essential authentication, tenant isolation, secure development, encryption, audit integrity, and vulnerability-remediation baseline as paid plans.
5. Billing restrictions cannot cause unsafe device custody, unpaid duplicate charge, lost repair evidence, or silent data deletion.

## Verification baselines

- OWASP ASVS 5.0.0 stable baseline, tailored into release requirements.
- NIST SP 800-218 SSDF 1.1 final for secure development and vulnerability response.
- WCAG 2.2 Level AA for subscription/billing web experiences.
- Parent ARCHITECTURED authentication, authorization, audit, financial, API, and NFR contracts.

## Trust boundaries

```text
Public Browser
→ Edge/WAF/API Gateway
→ Identity and Session Boundary
→ Tenant/Role/Subscription Authorization Boundary
→ Plans and Billing Services
→ Billing Database / Event / Queue / Cache Boundary
→ Provider Adapter
→ External Billing Provider

Tenant Applications
→ Shared Entitlement Resolver
→ Owning Business Services / Workers / Exports / Realtime

Platform Administration
→ Step-Up Authentication / Approval Boundary
→ Catalog / Override / Suspension / Reconciliation Services
```

No boundary trusts tenant ID, plan, price, entitlement, usage, role, or provider status supplied by the client.

## Protected assets

- plan and price-book versions;
- entitlements and limits;
- tenant subscription/access state;
- billing account and contact data;
- provider customer/subscription/payment references;
- invoices, credits, refunds, tax snapshots;
- usage events and aggregates;
- API keys, webhook secrets, SSO settings, payment-method references;
- downgrade selections and closure/export requests;
- provider webhook payload references;
- audit, reconciliation, security, and support evidence.

## Data classification

| Data | Classification | Rules |
|---|---|---|
| Public published plan names/prices/features | Public | Versioned and market-scoped. |
| Internal catalog drafts, cost/margin, migration plans | Internal/Confidential | Platform roles only. |
| Billing contacts, addresses, tax identifiers | Confidential/Restricted by field | Masking, purpose, retention, export control. |
| Payment method references/provider IDs | Restricted | No full payment credentials; logs masked. |
| Invoices/payments/refunds | Confidential/Restricted | Immutable financial history and field controls. |
| Subscription/entitlement/usage | Confidential | Tenant-isolated; event/report filters. |
| Webhook raw payload/signature evidence | Restricted | Encrypted reference, limited retention/access. |
| Security/abuse/legal suspension evidence | Restricted | Need-to-know, legal hold, safe tenant notice. |

## Threat model

### T1 — Client-side plan or price tampering

Attack: change plan ID, price, interval, tax, currency, or amount in browser request.

Controls:

- backend resolves published plan/price by stable IDs and market;
- preview input fingerprint and expiry;
- expected subscription version;
- provider and internal amount reconciliation;
- client amount never authoritative;
- audit and anomaly alert.

### T2 — Entitlement bypass

Attack: direct URL/API call, hidden UI re-enable, modified token, stale cache, worker/export route omission.

Controls:

- common server-side entitlement resolver;
- separate permission/scope/lifecycle checks;
- snapshot version in cache keys;
- route/API/service/worker/search/file/export/realtime enforcement tests;
- fail closed for optional capabilities;
- core continuity allowlist is explicit, not broad bypass.

### T3 — Cross-tenant or cross-company billing access

Controls:

- tenant ownership on every billing record/query;
- company/branch scope where relevant;
- provider mapping includes tenant and environment;
- negative database/API/search/cache/file/report/event tests;
- support access time-bound and audited.

### T4 — Webhook spoofing/replay/duplicate/out-of-order events

Controls:

- raw-body signature and timestamp verification;
- replay-window validation;
- unique provider event ID;
- durable receipt before acknowledgement;
- asynchronous processing;
- aggregate/subscription version checks;
- dedupe/idempotency;
- reconciliation and security metrics.

### T5 — Open redirect or malicious provider return URL

Controls:

- server-generated allowlisted return paths;
- opaque state/correlation;
- no arbitrary URL input;
- short-lived portal/checkout sessions;
- re-authentication and trusted status query after return.

### T6 — Duplicate charge/refund/subscription/usage

Controls:

- idempotency keys and input fingerprints;
- provider object uniqueness;
- immutable operation reference;
- no blind retry on unknown outcome;
- event deduplication;
- invoice/payment/refund reconciliation.

### T7 — Privilege abuse by platform staff

Controls:

- least privilege and separation of product, billing, security, support, and owner approval;
- step-up authentication;
- temporary overrides with expiry;
- tenant-visible audit where policy permits;
- no self-approval for protected grants/suspension/migration;
- anomaly review and immutable audit.

### T8 — Downgrade used to delete/hide obligations

Controls:

- deterministic remediation items;
- financial, warranty, custody, legal, and security holds;
- no automatic deletion;
- explicit resource selection;
- period-end effective time/revalidation;
- export and rollback.

### T9 — Usage counter manipulation

Controls:

- authoritative domain events/queries;
- tenant/meter/idempotency uniqueness;
- append-only corrections;
- aggregate rebuild;
- provider/internal reconciliation;
- dispute workflow;
- protected meter definitions and change approval.

### T10 — Provider outage or compromise

Controls:

- provider-neutral adapter;
- internal state is not updated from unverified/unknown result;
- core Free and active repair continuity do not require live provider call;
- circuit breaker/timeouts/retries;
- secret rotation/revocation;
- health monitoring and reconciliation;
- provider replacement/cutover plan.

### T11 — Sensitive data leakage in logs/events/exports

Controls:

- safe schemas and field allowlists;
- no full payment credentials or secrets;
- restricted payload references;
- export step-up, encryption/access control, expiry;
- log redaction and sampling controls;
- tenant/field/classification tests.

### T12 — SSO lockout during Premium downgrade

Controls:

- verified local owner/break-glass account;
- test authentication before cutover;
- scheduled change and rollback;
- session/credential review;
- tenant-visible confirmation.

### T13 — AI/API cost abuse and noisy neighbor

Controls:

- entitlement + quota + security rate limit;
- per-tenant queues/backpressure/concurrency;
- reservation and settlement for costly calls;
- cost and latency metrics by tier;
- abuse detection and kill switch;
- one tenant cannot consume unrestricted shared capacity.

## Authentication and authorization

- Owner/Billing actions require authenticated tenant membership and declared permissions.
- Plan change, cancellation, payment method, export, SSO fallback, platform override, suspension, refund/credit, and plan publication can require step-up authentication.
- Platform protected actions require role separation and approval.
- Sessions are revoked or narrowed on security suspension.
- Customer users never access tenant subscription administration.
- Direct object references are tenant-scoped and opaque.

## Secrets and provider credentials

- Stored only in approved secrets manager or provider vault.
- Database stores secret reference and metadata, not secret value.
- Separate test/staging/production provider accounts and keys.
- Least provider scopes.
- Rotation, revocation, expiry, access audit, and incident response.
- Webhook signing secrets can overlap during controlled rotation.
- No secrets in source control, prompts, architecture, logs, screenshots, exports, or test fixtures.

## Privacy

- Collect billing identity/contact/tax/payment-reference data only for declared purposes.
- Separate repair-customer data from subscription billing data.
- Mask tax IDs and payment references where full display is unnecessary.
- Provider data sharing and subprocessors require approved privacy/contract review.
- Export and deletion requests follow tenant authority, record retention, legal hold, and backup policy.
- Platform analytics use approved aggregated/de-identified data.
- Trial-abuse controls use proportionate signals and protected review; they do not expose risk thresholds.

## Availability and continuity classes

| Class | Examples | Architecture treatment |
|---|---|---|
| Critical continuity | entitlement resolution for core flows, subscription access mode, active repair continuity | cached/versioned safe resolution, fallback policy, high monitoring priority |
| Financial critical | activation payment, renewal, invoice, refund/credit, reconciliation | idempotency, immutable records, provider verification, manual recovery |
| Important | usage dashboard, plan comparison, invoices, billing account | graceful degradation and retry |
| Optional | AI, BI, large exports, optional integration/webhook processing | can queue/degrade without corrupting core work |

Provider outage cannot make every authenticated request fail. Entitlements are internally persisted and refreshed asynchronously.

## Numeric architecture targets

These are pre-production target requirements, not measured claims.

| Measure | Target requirement |
|---|---|
| Internal entitlement check | p95 ≤ 50 ms from service-local/cached resolver; authoritative fallback p95 ≤ 250 ms under approved load |
| Subscription/usage owner pages | p95 initial data response ≤ 2 seconds under approved regional load |
| Plan-change command acknowledgement | ≤ 2 seconds to operation reference; external payment completion excluded |
| Verified provider webhook durable acknowledgement | p95 ≤ 2 seconds within provider timeout policy |
| Webhook internal processing | p95 ≤ 60 seconds for normal events |
| Internal usage visibility | p95 ≤ 60 seconds after accepted source event |
| Threshold notification enqueue | p95 ≤ 60 seconds after threshold detection |
| Reconciliation detection | ≤ 24 hours scheduled; immediate after protected change/failure where triggered |
| Billing-service availability target | 99.9% monthly for owner billing queries/commands; provider dependency reported separately |
| Entitlement/core continuity resolver target | 99.95% monthly architecture objective |
| RPO | ≤ 15 minutes for catalog/subscription/entitlement/usage control data; zero accepted loss for confirmed financial/audit records through transaction/outbox controls |
| RTO | ≤ 4 hours for billing control plane; ≤ 1 hour target for entitlement/core continuity service |
| Accessibility | WCAG 2.2 AA across documented responsive variations |
| Tenant isolation | zero accepted cross-tenant access in automated/security/UAT evidence |

All targets require capacity assumptions, test evidence, monitoring, and owner approval before production claims.

## Resilience

- Database transaction + outbox for internal facts.
- Durable queue with bounded retries/dead-letter.
- Circuit breakers and timeouts for provider.
- Idempotent replay of provider/internal events.
- Entitlement snapshot rebuild and cache invalidation.
- Usage aggregate rebuild.
- Backup/restore and tenant-isolation verification.
- Reconciliation runbooks.
- Read-only/core-continuity access modes.
- No automated destructive compensation.

## Accessibility and usability security

- Security controls remain accessible: authentication, MFA, payment recovery, cancellation, export, and error correction.
- No security information conveyed only by color.
- Time limits warn and support extension where safe.
- Copy/paste is not unnecessarily blocked for passwords or recovery codes.
- Error messages do not reveal account existence, provider internals, tenant data, or risk thresholds.
- Confirmation pages clearly distinguish pending from complete.

## Observability and incident response

Minimum alerts:

- entitlement resolver error/stale rate;
- cross-tenant authorization denial anomaly;
- plan-change/payment mismatch;
- webhook verification failures/replay spikes;
- event/dead-letter backlog;
- usage aggregate/provider mismatch;
- duplicate charge/refund prevention triggers;
- override/suspension abnormal activity;
- API/AI/noisy-neighbor cost spike;
- billing export or sensitive-data access anomaly.

Every alert has owner, severity, response objective, runbook, evidence, and safe tenant communication policy.

## Secure development requirements

- threat model updated for every material architecture/provider/plan change;
- dependency and secret scanning;
- static analysis and typed validation;
- code review and protected paths;
- provider SDK/version pinning;
- test fixtures contain synthetic non-secret data;
- migration, rollback, restore, and incident rehearsal;
- vulnerability intake, severity, remediation, and disclosure process;
- release traceability to requirement and test evidence.

## Status

`PLANS_BILLING_SECURITY_PRIVACY_NFR_THREAT_MODEL_COMPLETE`
