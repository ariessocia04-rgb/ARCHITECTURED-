# FEATURE, ENTITLEMENT, AND USAGE MATRIX

## Decision rule

Every protected action evaluates all gates in this order:

```text
Authenticated actor
→ valid tenant and subscription context
→ subscription access mode
→ active internal entitlement snapshot
→ feature entitlement
→ role permission
→ company / branch / record / field scope
→ lifecycle eligibility
→ usage quota and security rate limit
→ approval requirement
→ execute and audit
```

Passing a plan entitlement never grants a user permission. Passing a permission never overrides an absent plan entitlement.

## Stable feature keys

| Key | Free | Pro | Premium | Enforcement notes |
|---|---|---|---|---|
| `app.owner.core` | Enabled basic | Enabled full | Enabled full | Navigation and API both enforce. |
| `app.front_desk.core` | Enabled | Enabled | Enabled | Core continuity feature. |
| `app.technician.core` | Enabled | Enabled | Enabled | Core continuity feature. |
| `app.customer_portal.core` | Enabled basic | Enabled full | Enabled full | Customer-safe fields only. |
| `feature.multi_branch` | Disabled | Enabled ≤3 | Enabled ≤20 | Branch limit checked separately. |
| `feature.multi_company` | Disabled | Disabled | Enabled ≤3 | Tenant remains top security boundary. |
| `feature.inventory` | Enabled basic | Enabled full | Enabled full | Free excludes advanced purchasing/forecasting. |
| `feature.purchasing` | Disabled | Enabled | Enabled | Supplier/PO/receiving approvals apply. |
| `feature.advanced_roles` | Disabled | Enabled | Enabled | Platform safety constraints remain immutable. |
| `feature.finance_export` | Basic export | Enabled | Enabled advanced | Financial permission and audit required. |
| `feature.advanced_reporting` | Disabled | Enabled | Enabled | Export quota applies. |
| `feature.business_intelligence` | Disabled | Disabled | Enabled | Governed datasets and company scope apply. |
| `feature.integrations` | Disabled | Enabled limited | Enabled advanced | Connection limit and adapter allowlist apply. |
| `feature.public_api` | Disabled | Enabled limited | Enabled full | OAuth/scopes, API quota, and security rate limits apply. |
| `feature.webhooks` | Disabled | Enabled limited | Enabled advanced | Endpoint limit and delivery controls apply. |
| `feature.ai_assistant` | Disabled | Enabled limited | Enabled advanced | Credit meter and human-control policy apply. |
| `feature.custom_branding` | Basic tenant identity | Standard | Advanced | Accessibility and legal notices cannot be removed. |
| `feature.sso` | Disabled | Disabled | Enabled | Verified domain and break-glass path required. |
| `feature.mandatory_mfa` | Platform risk policy | Optional tenant policy | Enabled/tenant configurable | High-risk roles may require MFA on all plans. |
| `feature.extended_audit` | 90-day tenant view | 365-day tenant view | 7-year tenant view | Record-specific legal retention prevails. |
| `feature.premium_support` | Disabled | Priority support | Enabled | Contractual SLA requires separate approval. |
| `feature.dedicated_deployment` | Ineligible | Ineligible | Eligible add-on | Separate deployment policy, not feature access. |

## Stable limit keys

| Metric key | Unit | Free | Pro | Premium | Reset model |
|---|---|---:|---:|---:|---|
| `limit.companies.active` | count | 1 | 1 | 3 | Structural/no reset |
| `limit.branches.active` | count | 1 | 3 | 20 | Structural/no reset |
| `limit.staff_users.active` | count | 2 | 15 | 100 | Structural/no reset |
| `limit.warehouses.active` | count | 1 | 3 | 20 | Structural/no reset |
| `limit.job_orders.created` | count | 100 | 2,000 | 10,000 | Billing month, SUM |
| `limit.storage.bytes` | bytes current | 500 MB | 10 GB | 100 GB | Continuous/LAST |
| `limit.outbound_email.sent` | count | 250 | 5,000 | 50,000 | Billing month, SUM |
| `limit.sms_push.sent` | count | 0 included | 0 included | 0 included | Pay-as-you-go/add-on |
| `limit.export_jobs.created` | count | 10 | 500 | 5,000 | Billing month, SUM |
| `limit.api.calls` | count | 0 | 10,000 | 250,000 | Billing month, SUM |
| `limit.webhook_endpoints.active` | count | 0 | 3 | 20 | Structural/no reset |
| `limit.integration_connections.active` | count | 0 | 3 | 20 | Structural/no reset |
| `limit.ai.credits` | credits | 0 | 500 | 5,000 | Billing month, SUM |
| `limit.backup_window.days` | days | 7 | 30 | 90 | Policy target |
| `limit.audit_view.days` | days | 90 | 365 | 2,555 | Rolling visibility |
| `limit.archive_window.days` | days | 30 | 90 | 180 | Cancellation policy |

Binary feature values and numeric limits are stored separately. A limit of zero does not replace an explicit disabled entitlement.

## Meter definitions

Every meter records:

- stable metric key;
- source event or authoritative query;
- unit;
- aggregation method: `SUM`, `COUNT`, `MAX`, or `LAST`;
- period boundary and time zone;
- processing delay target;
- warning thresholds;
- hard/soft enforcement mode;
- included limit and add-on capacity;
- provider-reporting mapping when applicable;
- correction and dispute process;
- reconciliation schedule;
- retention and audit classification.

## Warning thresholds

| Stage | Threshold | User experience | System behavior |
|---|---:|---|---|
| Normal | 0–79% | Normal usage card. | No restriction. |
| Warning | 80–89% | In-app/email warning to Owner and Billing Contact. | No restriction. |
| Urgent | 90–99% | Persistent banner, projected reset, plan/add-on action. | Preflight expensive actions. |
| Limit reached | 100% | Dedicated explanation with current use, limit, reset, and recovery. | Apply metric-specific safe block/degradation. |
| Approved overage | >100% | Show paid/add-on or exceptional allowance. | Continue within explicit overage ceiling. |

Threshold notifications are idempotent by tenant, metric, period, and threshold.

## Enforcement matrix

| Meter/feature | At limit or disabled | Must remain available |
|---|---|---|
| Staff seats | Block invite/reactivation; allow deactivation and role cleanup. | Existing users, audit, billing, export, security. |
| Companies/branches | Block activation/new operational use above limit. | Existing history, selected active scope, export, downgrade remediation. |
| Job creation | Block routine new jobs after hard limit. | Active-job completion, warranty return, payment, release, security, export, closure. |
| Storage | Block optional uploads; show cleanup/upgrade. | Existing files and approved critical evidence continuity reserve. |
| Outbound tenant messages | Queue/block non-critical delivery or use approved paid channel. | Security, billing, legal, critical warranty notices. |
| Export jobs | Block new large exports until reset/upgrade. | Interactive views and cancellation export minimum. |
| API quota | Return stable quota error and reset guidance. | Staff applications and security endpoints. |
| Webhooks | Disable creation; quarantine unhealthy endpoints. | Internal domain events and reconciliation. |
| Integrations | Disable new connection and optional synchronization. | Core application data and provider-required billing/auth. |
| AI credits | Block AI request and show reset/upgrade. | Every non-AI workflow and human decision. |
| BI | Hide/deny BI routes and queries. | Standard operational reports allowed by plan. |
| SSO | Prevent activation/use when not entitled. | Local secure owner login and customer access. |

## Entitlement snapshot

The server resolves one immutable `TenantEntitlementSnapshot` per effective subscription change:

```text
snapshot_id
subscription_id
plan_version_id
price_book_entry_id
feature_values
limit_values
add_on_values
override_values
access_mode
effective_from
effective_until
source_change_id
source_provider_event_id
version
created_at
```

Rules:

- Snapshot creation is transactional with the internal subscription transition.
- The latest effective snapshot is cached but the database remains authoritative.
- Cache key includes tenant and snapshot version.
- Web, API, workers, exports, webhooks, realtime, search, files, and analytics use the same resolver contract.
- Provider entitlement data can trigger reconciliation but cannot silently overwrite internal policy.
- A stale snapshot fails closed for optional paid capabilities and follows continuity policy for core repair actions.

## Exceptional entitlement overrides

Allowed only for authorized platform roles and always contain:

- tenant;
- feature or limit key;
- previous/effective value;
- reason and commercial/support case;
- requester and approver;
- start and expiry time;
- tenant-visible flag;
- revocation path;
- audit event;
- reconciliation behavior.

Permanent exceptional overrides are prohibited. A renewal or explicit review date is mandatory.

## Feature flags versus entitlements

- Feature flag: controls rollout, experiment, safety kill switch, or technical availability.
- Entitlement: controls purchased/approved eligibility.
- Permission: controls actor authority.
- Scope: controls accessible tenant/company/branch/record/field.

A feature is usable only when technical availability, entitlement, permission, and scope all allow it.

## Frontend behavior

- Disabled navigation may be hidden for routine use, but plan comparison and upgrade entry remain discoverable to authorized owners.
- Direct URL access returns a dedicated plan-access page, not a generic 404.
- Limit errors preserve entered work and show reset/upgrade/remediation.
- Non-owner users see a plain explanation and `Contact your owner` action rather than prices or billing controls.
- Owner sees exact plan, usage, limit, reset date, and change options.

## Backend error contract

Examples:

```text
PLAN_FEATURE_NOT_INCLUDED
PLAN_LIMIT_REACHED
PLAN_CHANGE_PENDING
SUBSCRIPTION_PAST_DUE
SUBSCRIPTION_ACCESS_RESTRICTED
DOWNGRADE_REMEDIATION_REQUIRED
ENTITLEMENT_SNAPSHOT_STALE
METER_PROCESSING_PENDING
```

Errors include safe message, tenant-visible next action, retryable flag, current/limit/reset values when permitted, request/correlation IDs, and support reference.

## Acceptance criteria

- All listed feature and limit keys are unique and versioned.
- Every protected route/action has an entitlement mapping or explicit core exemption.
- Every meter has an authoritative source and reconciliation method.
- Thresholds do not send duplicate notifications.
- Usage enforcement preserves continuity actions.
- Frontend-only bypass cannot enable a paid feature.
- Provider outage or delayed usage does not create silent over-entitlement or double billing.
- Downgrade and plan migration use the same matrix to produce deterministic remediation.

## Status

`FEATURE_ENTITLEMENT_AND_USAGE_MATRIX_COMPLETE`
