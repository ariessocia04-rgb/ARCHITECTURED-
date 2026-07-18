# API, EVENT, WEBHOOK, AND PROVIDER ADAPTER SPECIFICATION

## Purpose

Define the exact interface boundary among tenant applications, platform administration, internal subscription/entitlement/usage services, external billing providers, background jobs, and realtime clients.

## Service boundaries

```text
Plan Catalog Service
├── plans, versions, prices, entitlements, limits, add-ons

Subscription Service
├── trial, activation, renewal, upgrade, downgrade, cancellation, suspension, reactivation

Entitlement Service
├── snapshots, overrides, feature/limit resolution, cache invalidation

Usage Service
├── meter definitions, ingestion, aggregation, thresholds, enforcement, provider reporting

Billing Adapter Service
├── provider customer, checkout, invoices, payment, portal, subscription mutation, usage reporting

Reconciliation Service
├── provider/internal comparison, findings, retry, resolution

Billing Presentation API
└── tenant owner and platform-admin queries/commands
```

## Tenant-facing query APIs

### `GET /v1/tenant/subscription`

Returns:

- current plan/version/price book;
- subscription state and access mode;
- billing interval/currency/current period;
- trial/grace/cancellation dates;
- active entitlement snapshot version;
- billing-contact-safe provider status;
- pending change summary;
- available owner actions.

### `GET /v1/tenant/plans/eligible`

Filters by tenant market, current plan, company/branch/usage compatibility, currency, plan availability, trial status, and actor permission.

### `GET /v1/tenant/usage`

Allowed filters: period, meter key, category. Returns current use, included/add-on/override quantities, threshold state, processing delay, reset date, projected exhaustion, and permitted recovery actions.

### `GET /v1/tenant/invoices` and `GET /v1/tenant/invoices/{id}`

Returns subscription invoices/credits/refunds visible to Billing Contacts. It does not mix repair-customer financial documents without an explicit combined view contract.

### `GET /v1/tenant/plan-changes/{id}`

Returns preview/change/remediation/effective status, safe provider-processing state, and next action.

## Tenant-facing command APIs

All commands require actor, tenant, expected subscription version, idempotency key, locale/time zone, and request/correlation IDs.

### `POST /v1/tenant/plan-change-previews`

Input:

```text
target_plan_version_id
target_price_id
billing_interval
requested_add_ons
requested_quantities
promotion_code when supported
preferred_effective_mode
```

Output: immutable preview ID and full billing/entitlement/compatibility preview.

### `POST /v1/tenant/subscription/upgrade`

Requires valid unexpired preview and owner/billing authorization. Returns `operation_reference` with `PENDING_PAYMENT`, `PROCESSING`, or `APPLIED`.

### `POST /v1/tenant/subscription/downgrade`

Requires valid preview; can create remediation tasks and schedule effective time. Does not apply until revalidation passes.

### `POST /v1/tenant/subscription/downgrade-remediation/{item_id}/resolve`

Records explicit resource selection/action and validation evidence.

### `DELETE /v1/tenant/subscription/scheduled-change`

Revokes an allowed scheduled downgrade/cancellation before irreversible work begins.

### `POST /v1/tenant/subscription/cancel`

Requires reason, effective mode, retention/export acknowledgement, and review confirmation. Step-up authentication required by risk policy.

### `POST /v1/tenant/subscription/reactivate`

Runs authority, payment, plan availability, compatibility, and security checks.

### `POST /v1/tenant/billing-portal-session`

Returns a short-lived provider-hosted or internal billing portal URL/reference according to approved provider strategy. Redirect targets are allowlisted.

### `POST /v1/tenant/data-exports`

Creates owner-authorized cancellation/general export background job subject to plan, closure, privacy, and retention policy.

## Platform-admin APIs

- `GET/POST /v1/platform/plans`
- `GET/POST /v1/platform/plan-versions`
- `POST /v1/platform/plan-versions/{id}/review`
- `POST /v1/platform/plan-versions/{id}/publish`
- `POST /v1/platform/plan-versions/{id}/close-sales`
- `POST /v1/platform/plan-versions/{id}/schedule-migration`
- `GET/POST /v1/platform/price-books`
- `GET/POST /v1/platform/features`
- `GET/POST /v1/platform/meters`
- `POST /v1/platform/tenants/{tenant_id}/entitlement-overrides`
- `DELETE /v1/platform/tenants/{tenant_id}/entitlement-overrides/{id}`
- `POST /v1/platform/tenants/{tenant_id}/suspend`
- `POST /v1/platform/tenants/{tenant_id}/reactivate`
- `GET /v1/platform/billing/reconciliation-findings`
- `POST /v1/platform/billing/reconciliation-findings/{id}/resolve`

Platform APIs require platform roles, separation of duties, approval when protected, and tenant-visible audit according to policy.

## Internal APIs/commands

- `ResolveTenantEntitlements(tenant_id, expected_snapshot_version?)`
- `CheckFeatureEntitlement(tenant_id, feature_key)`
- `CheckUsageAllowance(tenant_id, metric_key, requested_quantity)`
- `RecordUsageEvent(tenant_id, metric_key, quantity, dimensions, idempotency_key)`
- `OpenUsagePeriod(subscription_id)`
- `CloseUsagePeriod(subscription_id)`
- `ApplySubscriptionChange(change_id)`
- `ReconcileSubscription(tenant_id)`
- `RebuildUsageAggregate(tenant_id, meter_id, period)`
- `PublishEntitlementSnapshot(subscription_id)`

Internal calls still resolve service identity, authorization, tenant ownership, schema version, idempotency, and audit/trace context.

## Domain events

Existing parent events remain canonical. This package adds detailed facts:

- `PlanVersionPublished`
- `PlanVersionClosedToNewSales`
- `PriceBookPublished`
- `TrialEligibilityConfirmed`
- `TrialStarted`
- `TrialExpiryWarningSent`
- `TrialExpired`
- `PlanChangePreviewCreated`
- `SubscriptionActivationRequested`
- `SubscriptionActivated`
- `PlanUpgradeScheduled`
- `PlanUpgraded`
- `PlanDowngradeRemediationRequired`
- `PlanDowngradeScheduled`
- `PlanDowngraded`
- `RenewalDue`
- `RenewalPaymentAttempted`
- `RenewalPaid`
- `PaymentFailed`
- `GracePeriodStarted`
- `AccessModeChanged`
- `UsageThresholdCrossed`
- `UsageLimitReached`
- `UsageCorrectionRecorded`
- `EntitlementSnapshotPublished`
- `EntitlementOverrideGranted`
- `EntitlementOverrideExpired`
- `TenantSuspended`
- `TenantReactivated`
- `CancellationScheduled`
- `CancellationRevoked`
- `SubscriptionCancelled`
- `DataExportRequested`
- `TenantArchived`
- `TenantDeletionApproved`
- `BillingReconciliationFindingCreated`
- `BillingReconciliationFindingResolved`

Every event uses the canonical envelope, contains only necessary data, and excludes provider secrets/payment credentials.

## Realtime topics

- `tenant/{tenant_id}/subscription`
- `tenant/{tenant_id}/usage`
- `user/{user_id}/billing-notifications`
- `platform/billing/reconciliation` for authorized platform staff

Realtime messages are change signals. Clients refresh authoritative queries and cannot authorize paid actions based solely on realtime payload.

## Billing provider adapter interface

The internal domain depends on this capability interface, not a provider SDK directly:

```text
create_or_resolve_customer(billing_account)
create_checkout_session(plan_price, tenant, return_urls)
create_billing_portal_session(provider_customer, return_url)
preview_subscription_change(provider_subscription, target_items, effective_mode)
apply_pending_subscription_change(provider_subscription, preview/change)
cancel_at_period_end(provider_subscription)
cancel_immediately(provider_subscription, reason)
reactivate_subscription(provider_subscription)
retrieve_subscription(provider_subscription)
list_invoices(provider_customer/subscription)
retrieve_invoice(provider_invoice)
retrieve_payment(provider_payment)
refund_payment(provider_payment, amount, reason, idempotency_key)
record_meter_usage(provider_customer, meter, quantity, event_time, idempotency_key)
verify_and_parse_webhook(headers, raw_body)
health_check()
```

### Adapter result envelope

```text
provider
provider_request_id
provider_object_reference
provider_status
internal_mapped_status
amount/currency when relevant
effective_time
retryable
safe_error_code
raw_payload_reference
occurred_at
```

No provider-specific status is exposed directly as the internal state without mapping/versioning.

## Inbound webhook endpoint

`POST /v1/webhooks/billing/{provider_account_code}`

Processing:

```text
Receive Raw Request
→ Enforce Size/Timeout/Rate Controls
→ Verify Provider Signature and Timestamp
→ Reject Replay Outside Window
→ Parse Event Using Provider Adapter
→ Store Unique Provider Event ID and Encrypted Payload Reference
→ Return Provider-Required Success after Durable Acceptance
→ Asynchronous Mapping and Internal Command
→ Publish Domain Events / Snapshot / Usage Result
→ Reconcile
```

Rules:

- Signature verification uses raw body and secret reference.
- Duplicate provider event returns success after confirming prior durable receipt.
- Webhook handler never performs long-running plan migration synchronously.
- Unknown tenant/subscription mapping creates reconciliation finding; no guess.
- Provider event ordering cannot reduce internal subscription version.
- Secrets/raw payload are excluded from ordinary logs.

## Outbound tenant webhooks

Pro/Premium tenant webhooks can subscribe only to published allowed events. Subscription/billing events are filtered so sensitive provider, payment-method, tax-identity, and platform-only data are excluded.

Delivery follows canonical signatures, timestamp/replay windows, retries, quarantine, replay, and audit. Free receives no tenant webhook entitlement.

## API errors

| Error | HTTP tendency | Meaning |
|---|---:|---|
| `PLAN_NOT_ELIGIBLE` | 409/422 | Target plan unavailable for market/state. |
| `PLAN_PREVIEW_EXPIRED` | 409 | Recreate preview. |
| `PLAN_PRICE_CHANGED` | 409 | Catalog changed before confirmation. |
| `PAYMENT_REQUIRED` | 402/409 | Trusted payment needed. |
| `PAYMENT_STATUS_UNCONFIRMED` | 202/409 | Provider state pending reconciliation. |
| `DOWNGRADE_REMEDIATION_REQUIRED` | 409 | Resolve listed incompatibilities. |
| `SUBSCRIPTION_VERSION_CONFLICT` | 409 | Refresh current subscription. |
| `PLAN_FEATURE_NOT_INCLUDED` | 403 | Tenant lacks entitlement. |
| `PLAN_LIMIT_REACHED` | 429/409 | Meter-specific quota reached. |
| `SUBSCRIPTION_ACCESS_RESTRICTED` | 403 | Access mode blocks action. |
| `PROVIDER_TEMPORARILY_UNAVAILABLE` | 503 | No state change applied. |
| `BILLING_RECONCILIATION_REQUIRED` | 202/409 | Internal/provider mismatch under review. |

Exact HTTP code depends on command/query context; stable error code is authoritative.

## Idempotency requirements

Mandatory for:

- checkout/session creation;
- activation, upgrade, downgrade, cancellation, reactivation;
- provider event receipt and processing;
- invoice/payment/refund mapping;
- usage events and provider reporting;
- threshold notifications;
- export generation;
- entitlement snapshot publication;
- reconciliation repair action.

An idempotency record includes tenant, actor/source, operation, key, input fingerprint, result reference, status, and expiry.

## Provider fallback and replacement

- Internal catalog, entitlement, usage, subscription, invoice, and audit records remain portable.
- Provider mappings are adapter-owned references.
- A provider migration defines customer/subscription/invoice/payment mapping, cutover, dual reconciliation, rollback, communication, and legal/tax review.
- Core Free use and active repair continuity cannot require billing-provider availability.

## Acceptance criteria

- All endpoints enforce tenant/role/field/subscription controls server-side.
- Provider SDK types do not leak into domain contracts.
- Webhooks are verified, deduplicated, durably accepted, asynchronously processed, and reconciled.
- Paid plan changes use preview and pending-payment protection.
- API/event versions and deprecation are explicit.
- Realtime cannot authorize stale protected actions.
- Duplicate calls/events cannot create duplicate subscription, charge, invoice, refund, usage, snapshot, notification, or export.
- Provider outage leaves truthful internal state and recovery path.

## Status

`PLAN_BILLING_API_EVENT_WEBHOOK_PROVIDER_ADAPTER_SPEC_COMPLETE`
