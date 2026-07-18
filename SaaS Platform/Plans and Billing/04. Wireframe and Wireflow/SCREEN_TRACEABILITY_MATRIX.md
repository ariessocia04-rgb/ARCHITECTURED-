# PLANS AND BILLING — SCREEN TRACEABILITY MATRIX

## Purpose

Map every subscription/billing screen to actor, requirement, entitlement, permission, data, command/query, lifecycle, event, failure state, and acceptance evidence. This matrix is the implementation and test handoff; it does not replace the detailed architecture files.

## Role codes

- `PUBLIC`: unauthenticated visitor.
- `TO`: Tenant Owner.
- `BC`: Billing Contact.
- `PA`: Platform Product Administrator.
- `BA`: Platform Billing Administrator.
- `SA`: Platform Security Administrator/Auditor.
- `SUP`: Authorized Platform Support.
- `STAFF`: non-billing tenant staff.

## Screen matrix

| ID | Screen | Actors | Primary requirements | Main APIs/commands | State/event outputs | Required negative/failure coverage |
|---|---|---|---|---|---|---|
| PB-WF-01 | Public pricing/comparison | PUBLIC, authenticated users | Published eligible plans, market/currency, exact monthly/annual prices, truthful limits | `GET eligible/public plans` | None until signup selection | stale/retired price, unsupported market, catalog unavailable, no client-price trust |
| PB-WF-02 | Signup/trial setup | PUBLIC/TO | identity, business, branch, plan/trial, save/resume | signup draft queries/commands | signup draft events | duplicate tenant, ineligible trial, field errors, interrupted draft |
| PB-WF-03 | Signup check answers | PUBLIC/TO | review, change links, terms, idempotent submit | `ProvisionTenant` | `TrialStarted` or activation requested | stale draft, changed price/terms, duplicate submit |
| PB-WF-04 | Provisioning/processing | TO | step progress, partial failure truth, safe leave/return | provisioning status query/retry | tenant provisioning facts | partial provision, retry, timeout, no false ACTIVE |
| PB-WF-05 | Subscription overview | TO, BC, limited STAFF | current plan/state/access, usage, invoices, actions | `GET tenant subscription/usage` | realtime subscription/usage signal | permission, stale snapshot, provider unknown, pending change |
| PB-WF-06 | Authorized comparison | TO, BC | current-vs-target differences, eligibility, usage fit | eligible plans + compatibility query | preview requested | unauthorized actor, retired/market-ineligible plan |
| PB-WF-07 | Upgrade preview/review | TO, BC | immutable amount/tax/proration/entitlement preview | create preview, upgrade command | change pending/applied | preview expiry, price/version conflict, payment failure |
| PB-WF-08 | Processing/confirmation | TO, BC | operation reference, no duplicate submit, final financial/config result | change status query | activated/upgraded, invoice/payment/snapshot events | delayed webhook, unknown outcome, internal apply after charge |
| PB-WF-09 | Downgrade preflight | TO, BC | complete incompatibility report/remediation list | create compatibility/preflight | remediation required | incomplete/stale report, legal/security hold |
| PB-WF-10 | Resource selection/remediation | TO | explicit company/branch/user/warehouse/role/integration choices | resolve remediation item | remediation resolved | unauthorized selection, active repair/custody conflict, concurrent changes |
| PB-WF-11 | Downgrade review/schedule | TO, BC | price/effective date/lost features/no deletion acknowledgement | schedule downgrade | downgrade scheduled | unresolved remediation, version conflict, revoke-after-cutoff |
| PB-WF-12 | Usage dashboard | TO, BC, permitted manager | meter totals, limits, reset, lag, projection | usage summary query | threshold realtime signal | stale/processing data, permission, aggregate unavailable |
| PB-WF-13 | Usage detail/dispute | TO, BC, authorized auditor | event detail, correction context, dispute | usage detail/dispute commands | dispute opened/resolved | hidden dimensions, duplicate dispute, closed invoice correction |
| PB-WF-14 | Billing account/payment | TO, BC | legal/tax/contact, provider-hosted payment method | billing account update, portal/setup session | billing account/payment method updated | redirect allowlist, provider timeout, restricted fields |
| PB-WF-15 | Subscription invoices | TO, BC, auditor | immutable invoices, credits, refunds, downloads | invoice list/detail/document | financial audit | cross-tenant, wrong currency, document permission, provider mismatch |
| PB-WF-16 | Past-due/grace recovery | TO, BC, limited STAFF | exact deadline, recovery, continuity, invoice/payment | retry/update payment, reconciliation | payment failed/paid, grace events | provider outage not treated as failure, duplicate payment, expired grace |
| PB-WF-17 | Suspended owner view | TO, BC, SUP | reason-safe explanation, allowed access, reactivate/export/support | suspension/read-only queries | access-mode changes | non-owner access, security reason leakage, blocked continuity path |
| PB-WF-18 | Cancellation | TO | consequences, alternatives, effective date, review/step-up | cancel/revoke cancellation | cancellation scheduled/revoked/cancelled | interrupted confirmation, unauthorized actor, active legal/custody hold |
| PB-WF-19 | Reactivation | TO, BC, SA/SUP when required | issue resolution, payment, compatibility, credentials | reactivate command | tenant reactivated/snapshot | retired plan, security approval missing, duplicate reactivation |
| PB-WF-20 | Platform plan catalog | PA, BA, SA read/audit | versions, markets, status, tenant impact | platform plan queries/create draft | draft created | tenant role access, unpublished leakage |
| PB-WF-21 | Plan version editor/task list | PA, BA, SA | complete package, reviews, approvals, migration impact | update draft/submit review/publish | version reviewed/published | missing task, approval separation, stale draft |
| PB-WF-22 | Entitlement/limit matrix editor | PA, BA, SA | registered keys/types/dependencies/validation | draft entitlement/limit commands | draft changed | unknown key, invalid type/limit, unsafe security reduction |
| PB-WF-23 | Tenant subscription admin/override | BA, SUP, SA | state, provider reconciliation, temporary override/suspension | override/suspend/reactivate/reconcile | snapshot/override/access events | no expiry, self-approval, cross-tenant, unsupported permanent grant |
| PB-WF-24 | Reconciliation queue/finding | BA, SUP, SA | safe internal/provider comparison, deterministic repair, manual approval | retry/rebuild/replay/resolve | finding created/resolved | raw secret exposure, unsafe auto-charge/refund/delete, stale resolution |

## Requirements-to-artifact mapping

| Requirement group | Architecture source | Wireframe IDs | Wireflow IDs |
|---|---|---|---|
| Public catalog and plan selection | Plan Catalog; Free/Pro/Premium | 01, 02, 03 | 01, 02, 03 |
| Tenant provisioning/trial | Parent contract; Plan Catalog | 02, 03, 04 | 02, 03 |
| Subscription overview/access modes | Lifecycle; Entitlement Matrix | 05, 16, 17 | 04, 10, 11 |
| Upgrade/payment activation | Plan Changes; API/Adapter | 06, 07, 08 | 05, 16, 20 |
| Downgrade/remediation | Plan Changes; Free/Pro/Premium | 09, 10, 11 | 06 |
| Renewal/past due/grace | Lifecycle; Past Due | 05, 15, 16 | 07, 10 |
| Usage/metering/quota/dispute | Matrix; Metering | 12, 13 | 08, 09 |
| Billing account/invoices | Financial contract; API/Adapter | 14, 15 | 13 |
| Cancellation/export/closure | Plan Changes; Closure | 18, 19 | 12, 11 |
| Platform plan governance | Plan Catalog; Security | 20, 21, 22 | 14 |
| Temporary overrides/suspension | Matrix; Past Due; Security | 23 | 15, 11 |
| Provider webhooks/reconciliation | API/Adapter; Metering | 08, 16, 24 | 16, 17 |
| Direct feature entitlement denial | Entitlement Matrix | dedicated plan-access state on all apps | 18 |
| Offline/stale client/error recovery | NFR; API/Adapter; Design system | shared states across all screens | 19, 20 |

## Screen permission and entitlement rules

| Screen group | Feature entitlement | Permission examples |
|---|---|---|
| Subscription overview/usage/invoices | core billing access on all plans | `subscription.view`, `usage.view`, `billing_invoice.view` |
| Change plan/cancel/reactivate | plan change capability | `subscription.change`, `subscription.cancel`, `subscription.reactivate` plus step-up/approval |
| Usage dispute | usage visibility and dispute policy | `usage.dispute.create`, `usage.dispute.review` |
| Platform catalog/version | platform-only | `platform.plan.manage`, `platform.price.manage`, `platform.plan.publish` |
| Tenant override/suspension | platform-only protected | `platform.entitlement.override`, `platform.tenant.suspend`, approval separation |
| Reconciliation | platform billing/support/security | `platform.billing.reconcile` with field masking |

## Data traceability

| UI concept | Authoritative entities |
|---|---|
| Plan name/version/price | Plan, PlanVersion, PriceBook, PlanPrice |
| Included feature | FeatureDefinition, PlanEntitlement, EntitlementSnapshot |
| Included/used quota | UsageMeterDefinition, PlanLimit, UsagePeriod, UsageAggregate, AddOn, Override |
| Subscription state/access | Subscription, StateTransition/Audit, EntitlementSnapshot |
| Change preview | PlanChangePreview, provider preview reference |
| Pending/applied change | SubscriptionChange, RemediationItem |
| Billing contact/payment method | BillingAccount, provider references |
| Invoice/payment/credit/refund | SubscriptionInvoice/Line, Payment, Credit, Refund |
| Trial/grace/cancellation date | Subscription and applicable policy version |
| Provider processing | BillingProviderEvent, operation/change, ReconciliationFinding |
| Usage event/dispute | UsageEvent, Aggregate, Correction, Dispute, Audit |
| Temporary override | TenantEntitlementOverride, Snapshot, Approval, Audit |

## Mandatory UI states per screen

Every screen has explicit test cases for:

- authorized normal state;
- no data/first use;
- loading and delayed source;
- validation error;
- permission denied;
- plan not entitled;
- usage warning/limit where relevant;
- subscription access restricted;
- stale version/conflict;
- retryable provider/service failure;
- unknown processing outcome;
- successful confirmation;
- keyboard, screen reader, zoom/reflow, mobile, tablet, and desktop.

## Traceability ID convention

Implementation requirements use:

```text
PB-REQ-<domain>-<number>
PB-SCREEN-<PB-WF-ID>
PB-FLOW-<flow-number>
PB-DATA-<entity/table>
PB-API-<command/query>
PB-EVENT-<event>
PB-TEST-<category>-<number>
```

Every implementation PR must map changed code and tests to these IDs and exact canonical file sections.

## Completion gate

- 24 of 24 screens mapped.
- 20 of 20 detailed wireflows mapped.
- All plan, lifecycle, usage, financial, platform-admin, provider, and reconciliation areas have data/API/event ownership.
- Every protected action has permission, entitlement, state, scope, review, audit, and failure coverage.
- No screen is authorized to invent a new plan rule or lifecycle transition.

## Status

`PLANS_BILLING_SCREEN_TRACEABILITY_COMPLETE`
