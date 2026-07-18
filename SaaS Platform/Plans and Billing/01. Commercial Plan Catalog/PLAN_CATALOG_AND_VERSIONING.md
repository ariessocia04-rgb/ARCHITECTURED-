# PLAN CATALOG AND VERSIONING ARCHITECTURE

## Purpose

Define how Free, Pro, and Premium plans, prices, included capabilities, add-ons, market availability, trials, migrations, grandfathering, retirement, and publication are represented without hardcoding commercial rules into application code.

## Canonical plan codes

| Display name | Stable code | Initial version code | Audience |
|---|---|---|---|
| Free | `FREE` | `FREE-2026-01` | Individual technician, micro repair shop, product evaluation, or low-volume single branch. |
| Pro | `PRO` | `PRO-2026-01` | Established repair business needing multiple staff, full operational workflow, purchasing, advanced reports, and controlled integrations. |
| Premium | `PREMIUM` | `PREMIUM-2026-01` | Multi-branch or multi-company operator needing BI, AI, API, SSO, extended retention, higher quotas, stronger support, and optional isolated deployment. |

Plan codes never change. A material commercial change creates a new plan version.

## Product and commercial object model

```text
Plan
├── PlanVersion
│   ├── PlanPriceBookEntry
│   ├── PlanEntitlement
│   ├── PlanLimit
│   ├── PlanSupportPolicy
│   ├── PlanRetentionPolicy
│   ├── TrialPolicy
│   ├── OveragePolicy
│   └── MigrationPolicy
├── FeatureDefinition
├── UsageMeterDefinition
├── AddOnDefinition
└── MarketAvailability
```

## Plan version rules

A new version is required when changing any of the following for future or migrated subscriptions:

- recurring price or billing interval;
- included seats, companies, branches, warehouses, jobs, storage, messages, API calls, integrations, exports, AI credits, retention, or support;
- enabled or disabled feature entitlement;
- overage behavior;
- trial duration or conversion rule;
- cancellation, grace, or archive policy;
- tax treatment or market eligibility;
- default deployment/isolation class;
- material terms or service-level commitment.

Editing a published plan version in place is prohibited except for non-semantic display corrections. Published versions are immutable snapshots.

## Plan version lifecycle

```text
Draft
→ Internal Review
→ Financial Review
→ Security / Privacy / Operations Review
→ Owner Approval
→ Scheduled
→ Published
→ Available
→ Closed to New Sales
→ Grandfathered
→ Migration Scheduled
→ Retired
→ Archived
```

### Allowed operations

- `Draft`: editable by authorized platform product and billing roles.
- `Scheduled`: immutable except cancel schedule.
- `Published/Available`: no semantic edit; replacement version required.
- `Closed to New Sales`: existing subscriptions remain valid.
- `Grandfathered`: existing subscriptions renew only under explicit grandfather policy.
- `Migration Scheduled`: tenant-visible preview, effective date, compatibility report, and rollback plan required.
- `Retired`: no active subscriptions may remain unless an approved exception exists.

## Initial market price books

These are recommended launch defaults and remain `OWNER_APPROVAL_REQUIRED_BEFORE_PUBLICATION`. Architecture execution does not require code changes when values change.

### Philippines public price book — `PH-PUBLIC-2026-01`

| Plan | Monthly | Annual | Annual policy |
|---|---:|---:|---|
| Free | PHP 0 | PHP 0 | No annual contract. |
| Pro | PHP 1,499 | PHP 14,990 | Equivalent to approximately two months free. |
| Premium | PHP 4,999 | PHP 49,990 | Equivalent to approximately two months free. |

### International public price book — `INTL-USD-2026-01`

| Plan | Monthly | Annual | Annual policy |
|---|---:|---:|---|
| Free | USD 0 | USD 0 | No annual contract. |
| Pro | USD 29 | USD 290 | Equivalent to approximately two months free. |
| Premium | USD 99 | USD 990 | Equivalent to approximately two months free. |

### Price display rules

- Show currency, billing interval, tax inclusion/exclusion, next charge date, and renewal behavior.
- Never convert currency silently at checkout.
- Tax is calculated by approved market/provider rules and stored as a versioned invoice snapshot.
- Annual pricing is a separate price-book entry, not a calculated frontend-only discount.
- Promotional price, coupon, credit, or commercial override is a separate auditable record.
- The backend validates price-book ID, plan-version ID, market, currency, and effective date.

## Trial policy — `PRO-TRIAL-14D-2026-01`

- One 14-day Pro-equivalent trial per verified tenant business identity.
- No payment method required by default; a market policy may require one later.
- Trial caps: 1 company, 1 branch, 5 active staff users, 200 created job orders, 2 GB storage, 500 outbound emails, 100 AI credits, no Public API, no SSO, no custom SLA.
- Day 0: tenant provisioned with trial entitlement snapshot.
- Day 10: plan-selection reminder.
- Day 13: final reminder and compatibility preview.
- Day 14: trial expires.
- If current usage fits Free, tenant converts to Free automatically unless a paid plan was selected.
- If usage exceeds Free, tenant enters a 7-day read-only remediation window for excess resources while active repairs can still be completed.
- Trial never silently becomes paid without explicit billing authorization.
- Trial abuse controls use verified identity, domain, payment reference when present, device/IP risk, and platform review without exposing security thresholds.

## Add-on policy

The launch catalog does not require an Enterprise plan. Premium can receive approved add-ons or exceptional entitlements:

- additional staff-seat pack;
- additional branch pack;
- additional storage pack;
- additional AI-credit pack;
- additional API-call pack;
- additional message/SMS pack;
- dedicated onboarding or training;
- dedicated deployment stamp or region;
- custom support/SLA;
- extended archive or backup retention.

Add-ons are versioned subscription items. They do not rewrite the base plan.

## Grandfathering and migration

- Existing subscriptions retain their exact plan version and price-book entry until renewal or an approved migration date.
- Forced migration requires at least 30 days' notice for monthly plans and 60 days for annual plans unless law/security requires faster action.
- Migration preview shows price, limits, removed or added features, remediation, effective date, and cancellation rights.
- No migration reduces access to protected historical data.
- A failed migration leaves the prior version active and records a reconciliation finding.

## Commercial and technical separation

```text
Plan / Price Book
→ commercial eligibility and billed amount

Entitlement Snapshot
→ feature access

Usage Policy
→ quota and overage behavior

Role / Permission / Scope
→ user authority inside the entitled feature

Deployment Class
→ pooled, bridge, or isolated infrastructure policy
```

Changing price never directly changes permission. Changing permission never changes the invoice. Changing deployment class never changes canonical business behavior.

## Required platform-admin approvals

| Action | Minimum approval |
|---|---|
| Create draft plan/version | Product administrator |
| Publish price or entitlement version | Product + Billing + Owner |
| Change security/retention/SSO behavior | Security/Privacy + Owner |
| Create exceptional tenant override | Billing or Product request + authorized approver |
| Grant free Premium access | Owner approval with start/end date and reason |
| Force migration | Owner + Product + Billing + Operations |
| Retire plan version | Product + Billing + Support + Owner |

## Acceptance criteria

- Every active subscription references one immutable plan version and price-book entry.
- Every feature and limit resolves from a stable key.
- No UI price can override backend catalog validation.
- Published plan versions cannot be mutated silently.
- Price, entitlement, limit, support, retention, and migration histories are auditable.
- Provider products/prices map to internal records but do not replace them.
- Commercial values can change through approved configuration without application code changes.

## Status

`PLAN_CATALOG_AND_VERSIONING_ARCHITECTURE_COMPLETE`
