# DATA MODEL AND PHYSICAL SCHEMA SPECIFICATION

## Purpose

Define the implementation-ready relational model for plan catalog, price books, subscriptions, entitlements, quotas, usage, invoices, provider mappings, plan changes, remediation, reconciliation, and audit. PostgreSQL-compatible types are used as the physical-design baseline; exact database version remains a technology-lock decision.

## Ownership

- Platform-owned: plans, plan versions, features, global meters, market price books, provider configuration, and global policies.
- Tenant-referenced: subscription, billing account, entitlement snapshot, usage, invoices, plan changes, overrides, and reconciliation.
- Tenant operational records remain in their owning domains and are never moved into the billing schema.
- Payment secrets remain with the approved provider; only permitted references are stored.

## Schema namespace

Recommended logical namespace: `billing` or an equivalent module boundary.

## Core tables

### `plans`

```text
id uuid PK
code varchar(32) UNIQUE NOT NULL            -- FREE, PRO, PREMIUM
name varchar(80) NOT NULL
purpose text NOT NULL
status varchar(32) NOT NULL                  -- ACTIVE, RETIRED
created_at timestamptz NOT NULL
created_by uuid NOT NULL
updated_at timestamptz NOT NULL
version bigint NOT NULL
```

### `plan_versions`

```text
id uuid PK
plan_id uuid FK plans NOT NULL
version_code varchar(64) UNIQUE NOT NULL
status varchar(32) NOT NULL                  -- DRAFT ... ARCHIVED
market_scope jsonb NOT NULL
trial_policy_id uuid NULL
default_support_policy_id uuid NOT NULL
default_retention_policy_id uuid NOT NULL
default_deployment_class varchar(32) NOT NULL
terms_version varchar(64) NOT NULL
effective_from timestamptz NULL
effective_until timestamptz NULL
published_at timestamptz NULL
published_by uuid NULL
created_at timestamptz NOT NULL
created_by uuid NOT NULL
record_version bigint NOT NULL
```

Constraints:

- `version_code` immutable after publish.
- Published semantic fields cannot be updated; create replacement version.
- `effective_until > effective_from` when both exist.

### `price_books`

```text
id uuid PK
code varchar(64) UNIQUE NOT NULL
market_code varchar(32) NOT NULL
status varchar(32) NOT NULL
name varchar(120) NOT NULL
tax_display_mode varchar(32) NOT NULL
currency_allowlist jsonb NOT NULL
effective_from timestamptz NOT NULL
effective_until timestamptz NULL
created_at timestamptz NOT NULL
created_by uuid NOT NULL
```

### `plan_prices`

```text
id uuid PK
price_book_id uuid FK price_books NOT NULL
plan_version_id uuid FK plan_versions NOT NULL
billing_interval varchar(16) NOT NULL        -- MONTH, YEAR
currency char(3) NOT NULL
amount_minor bigint NOT NULL CHECK >= 0
tax_behavior varchar(32) NOT NULL
provider_price_reference varchar(255) NULL
status varchar(32) NOT NULL
created_at timestamptz NOT NULL
UNIQUE(price_book_id, plan_version_id, billing_interval, currency)
```

Money is always minor units plus ISO currency. Frontend-calculated prices are never authoritative.

### `feature_definitions`

```text
id uuid PK
feature_key varchar(120) UNIQUE NOT NULL
name varchar(120) NOT NULL
description text NOT NULL
value_type varchar(24) NOT NULL               -- BOOLEAN, ENUM, STRING
security_classification varchar(24) NOT NULL
status varchar(24) NOT NULL
created_at timestamptz NOT NULL
```

### `plan_entitlements`

```text
id uuid PK
plan_version_id uuid FK plan_versions NOT NULL
feature_id uuid FK feature_definitions NOT NULL
value_json jsonb NOT NULL
source_policy varchar(64) NOT NULL
created_at timestamptz NOT NULL
UNIQUE(plan_version_id, feature_id)
```

### `usage_meter_definitions`

```text
id uuid PK
metric_key varchar(120) UNIQUE NOT NULL
name varchar(120) NOT NULL
unit varchar(32) NOT NULL
aggregation varchar(16) NOT NULL              -- SUM, COUNT, MAX, LAST
period_type varchar(24) NOT NULL              -- BILLING_MONTH, CONTINUOUS, ROLLING
source_event_type varchar(120) NULL
source_query_reference varchar(255) NULL
processing_delay_seconds integer NOT NULL
correction_policy varchar(64) NOT NULL
provider_meter_reference varchar(255) NULL
status varchar(24) NOT NULL
schema_version integer NOT NULL
created_at timestamptz NOT NULL
```

Published meter semantics are immutable. A semantic change creates a new meter/version and migration plan.

### `plan_limits`

```text
id uuid PK
plan_version_id uuid FK plan_versions NOT NULL
meter_id uuid FK usage_meter_definitions NOT NULL
included_quantity numeric(20,4) NOT NULL
overage_mode varchar(32) NOT NULL              -- NONE, BLOCK, SOFT, PAID, MANUAL
warning_thresholds jsonb NOT NULL               -- [0.8,0.9,1.0]
continuity_policy varchar(64) NOT NULL
add_on_eligible boolean NOT NULL
created_at timestamptz NOT NULL
UNIQUE(plan_version_id, meter_id)
```

### `add_on_definitions`

```text
id uuid PK
code varchar(64) UNIQUE NOT NULL
name varchar(120) NOT NULL
value_type varchar(24) NOT NULL
entitlement_delta jsonb NOT NULL
limit_delta jsonb NOT NULL
status varchar(24) NOT NULL
created_at timestamptz NOT NULL
```

### `trial_policies`

```text
id uuid PK
code varchar(64) UNIQUE NOT NULL
duration_days integer NOT NULL
reminder_days jsonb NOT NULL
requires_payment_method boolean NOT NULL
eligibility_rules jsonb NOT NULL
trial_entitlements jsonb NOT NULL
trial_limits jsonb NOT NULL
expiry_behavior varchar(64) NOT NULL
remediation_days integer NOT NULL
created_at timestamptz NOT NULL
```

### `support_policies` and `retention_policies`

Each is versioned and stores support channel/objectives or record-class visibility/archive/backup defaults. These policies cannot override legal hold or security requirements.

## Tenant billing tables

### `billing_accounts`

```text
id uuid PK
tenant_id uuid UNIQUE NOT NULL
legal_name varchar(255) NOT NULL
billing_email varchar(320) NOT NULL
billing_contacts jsonb NOT NULL
billing_address jsonb NULL
tax_identifiers jsonb NULL
preferred_currency char(3) NOT NULL
invoice_delivery varchar(32) NOT NULL
purchase_order_required boolean NOT NULL
provider_customer_reference varchar(255) NULL
payment_method_reference varchar(255) NULL
created_at timestamptz NOT NULL
updated_at timestamptz NOT NULL
record_version bigint NOT NULL
```

Restricted payment data and full card/bank credentials are prohibited.

### `subscriptions`

```text
id uuid PK
tenant_id uuid UNIQUE NOT NULL
billing_account_id uuid FK billing_accounts NOT NULL
plan_version_id uuid FK plan_versions NOT NULL
plan_price_id uuid FK plan_prices NOT NULL
status varchar(32) NOT NULL
access_mode varchar(40) NOT NULL
billing_interval varchar(16) NOT NULL
currency char(3) NOT NULL
current_period_start timestamptz NOT NULL
current_period_end timestamptz NOT NULL
trial_end timestamptz NULL
grace_end timestamptz NULL
cancel_at_period_end boolean NOT NULL
cancellation_effective_at timestamptz NULL
provider_subscription_reference varchar(255) NULL
provider_status varchar(64) NULL
provider_synced_at timestamptz NULL
record_version bigint NOT NULL
created_at timestamptz NOT NULL
updated_at timestamptz NOT NULL
```

Constraints:

- one current subscription per tenant;
- period end after period start;
- optimistic version required for transitions;
- state and access-mode values validated by state machine.

### `subscription_items`

```text
id uuid PK
subscription_id uuid FK subscriptions NOT NULL
item_type varchar(24) NOT NULL                 -- BASE_PLAN, ADD_ON
add_on_id uuid NULL
quantity numeric(20,4) NOT NULL
unit_amount_minor bigint NULL
currency char(3) NULL
provider_item_reference varchar(255) NULL
effective_from timestamptz NOT NULL
effective_until timestamptz NULL
status varchar(24) NOT NULL
```

### `tenant_entitlement_snapshots`

```text
id uuid PK
tenant_id uuid NOT NULL
subscription_id uuid FK subscriptions NOT NULL
subscription_version bigint NOT NULL
plan_version_id uuid FK plan_versions NOT NULL
feature_values jsonb NOT NULL
limit_values jsonb NOT NULL
add_on_values jsonb NOT NULL
override_values jsonb NOT NULL
access_mode varchar(40) NOT NULL
effective_from timestamptz NOT NULL
effective_until timestamptz NULL
source_change_id uuid NULL
source_provider_event_id uuid NULL
snapshot_version bigint NOT NULL
created_at timestamptz NOT NULL
UNIQUE(tenant_id, snapshot_version)
```

Effective snapshot lookup index: `(tenant_id, effective_from DESC)` with validity predicate.

### `tenant_entitlement_overrides`

```text
id uuid PK
tenant_id uuid NOT NULL
feature_key varchar(120) NULL
metric_key varchar(120) NULL
override_value jsonb NOT NULL
reason text NOT NULL
support_or_commercial_reference varchar(120) NOT NULL
requested_by uuid NOT NULL
approved_by uuid NOT NULL
starts_at timestamptz NOT NULL
expires_at timestamptz NOT NULL
tenant_visible boolean NOT NULL
revoked_at timestamptz NULL
revoked_by uuid NULL
created_at timestamptz NOT NULL
CHECK(expires_at > starts_at)
```

No non-expiring override.

## Usage tables

### `usage_periods`

```text
id uuid PK
tenant_id uuid NOT NULL
subscription_id uuid FK subscriptions NOT NULL
period_start timestamptz NOT NULL
period_end timestamptz NOT NULL
status varchar(24) NOT NULL
opened_at timestamptz NOT NULL
closed_at timestamptz NULL
UNIQUE(tenant_id, period_start, period_end)
```

### `usage_events`

```text
id uuid PK
tenant_id uuid NOT NULL
meter_id uuid FK usage_meter_definitions NOT NULL
usage_period_id uuid NULL
source_event_id uuid NULL
idempotency_key varchar(255) NOT NULL
quantity numeric(20,4) NOT NULL
occurred_at timestamptz NOT NULL
ingested_at timestamptz NOT NULL
dimensions jsonb NOT NULL
correction_of_event_id uuid NULL
status varchar(24) NOT NULL
provider_report_status varchar(24) NOT NULL
UNIQUE(tenant_id, meter_id, idempotency_key)
```

### `usage_aggregates`

```text
id uuid PK
tenant_id uuid NOT NULL
meter_id uuid NOT NULL
usage_period_id uuid NULL
current_quantity numeric(20,4) NOT NULL
included_quantity numeric(20,4) NOT NULL
overage_quantity numeric(20,4) NOT NULL
last_event_at timestamptz NULL
calculated_at timestamptz NOT NULL
aggregate_version bigint NOT NULL
UNIQUE(tenant_id, meter_id, usage_period_id)
```

### `usage_threshold_events`

```text
id uuid PK
tenant_id uuid NOT NULL
meter_id uuid NOT NULL
usage_period_id uuid NULL
threshold numeric(8,4) NOT NULL
crossed_at timestamptz NOT NULL
notification_status varchar(24) NOT NULL
UNIQUE(tenant_id, meter_id, usage_period_id, threshold)
```

## Change and remediation tables

### `plan_change_previews`

Stores immutable preview fields defined in the lifecycle contract, current subscription version, provider preview reference, expiry, and input fingerprint.

### `subscription_changes`

```text
id uuid PK
tenant_id uuid NOT NULL
subscription_id uuid NOT NULL
change_type varchar(32) NOT NULL              -- UPGRADE, DOWNGRADE, INTERVAL, CANCEL, REACTIVATE
from_plan_version_id uuid NOT NULL
to_plan_version_id uuid NULL
preview_id uuid NULL
status varchar(32) NOT NULL                   -- REQUESTED, PENDING_PAYMENT, SCHEDULED, APPLIED, FAILED, CANCELLED
requested_by uuid NOT NULL
approved_by uuid NULL
requested_at timestamptz NOT NULL
effective_at timestamptz NULL
applied_at timestamptz NULL
idempotency_key varchar(255) NOT NULL
provider_change_reference varchar(255) NULL
failure_code varchar(80) NULL
record_version bigint NOT NULL
UNIQUE(tenant_id, idempotency_key)
```

### `downgrade_remediation_items`

```text
id uuid PK
subscription_change_id uuid FK subscription_changes NOT NULL
resource_type varchar(64) NOT NULL
resource_id uuid NULL
current_value jsonb NOT NULL
target_value jsonb NOT NULL
required_action varchar(64) NOT NULL
consequence text NOT NULL
status varchar(24) NOT NULL
resolved_by uuid NULL
resolved_at timestamptz NULL
validation_version bigint NOT NULL
```

## Provider and financial tables

### `billing_provider_accounts`

Contains provider name, environment, configuration/secret references, supported capabilities, enabled market/currency, health, and version. Secret values are never stored here.

### `billing_provider_events`

```text
id uuid PK
provider_account_id uuid NOT NULL
provider_event_id varchar(255) NOT NULL
provider_event_type varchar(160) NOT NULL
verified boolean NOT NULL
received_at timestamptz NOT NULL
occurred_at timestamptz NULL
payload_reference varchar(255) NOT NULL
mapped_tenant_id uuid NULL
mapped_subscription_id uuid NULL
processing_status varchar(32) NOT NULL
attempt_count integer NOT NULL
last_error_code varchar(80) NULL
processed_at timestamptz NULL
UNIQUE(provider_account_id, provider_event_id)
```

Raw payload is stored only in approved encrypted/event storage with retention and redaction rules.

### `subscription_invoices`, `subscription_invoice_lines`, `subscription_payments`, `subscription_credits`, `subscription_refunds`

These follow the canonical money, invoice, payment, refund, provider-reference, idempotency, snapshot, and reconciliation rules. They are distinct from repair-customer invoices/payments but may reuse shared financial primitives.

## Reconciliation and audit

### `billing_reconciliation_findings`

```text
id uuid PK
tenant_id uuid NULL
subscription_id uuid NULL
finding_type varchar(64) NOT NULL
severity varchar(16) NOT NULL
internal_state jsonb NOT NULL
provider_state jsonb NOT NULL
amount_difference_minor bigint NULL
currency char(3) NULL
status varchar(24) NOT NULL
assigned_to uuid NULL
resolution text NULL
created_at timestamptz NOT NULL
resolved_at timestamptz NULL
```

### `subscription_audit_events`

Append-only audit envelope with tenant, actor, source, event type, entity, before/after references or safe diff, reason, approval, request/correlation IDs, provider reference, occurred/recorded times, classification, and retention class.

## Referential and deletion rules

- Plan/plan-version/price/feature/meter records are never hard-deleted after use.
- Subscription and financial history is immutable or corrected through new version/credit/refund/reversal.
- Tenant deletion eligibility follows parent closure contract and record-specific retention.
- Provider references are unique within provider account and object type.
- Cross-tenant foreign keys are prohibited or validated with composite ownership constraints.
- Usage event corrections reference the original event; silent update is prohibited.
- Entitlement snapshots are append-only.

## Required indexes

- subscriptions: unique tenant, provider reference, status/effective period.
- entitlement snapshots: tenant/effective/version.
- usage events: tenant/meter/occurred, provider-report status, idempotency.
- aggregates: tenant/meter/period.
- provider events: provider/event ID, processing status/received time.
- invoices/payments: tenant, provider reference, due/status/time.
- plan changes: tenant/status/effective time/idempotency.
- remediation: change/status/resource type.
- reconciliation: status/severity/tenant/created time.
- audit: tenant/entity/event/time/correlation.

## Transaction boundaries

1. Subscription activation: internal subscription transition + entitlement snapshot + usage period + outbox event.
2. Plan change application: version check + state transition + items + snapshot + counters + audit/outbox.
3. Usage ingestion: dedupe + event + aggregate update/outbox; provider reporting may be asynchronous.
4. Provider webhook: verify/store/ack, then asynchronous mapping and domain command.
5. Invoice/payment confirmation: immutable financial record + subscription command + audit/outbox.

External provider calls are not held inside long database transactions.

## Migration order

1. catalog and feature/meter definitions;
2. price books and prices;
3. billing accounts and provider mappings;
4. subscriptions/items;
5. entitlement snapshots/overrides;
6. usage periods/events/aggregates/thresholds;
7. plan changes/remediation;
8. provider events and subscription financial records;
9. reconciliation and audit;
10. deterministic seed of `FREE-2026-01`, `PRO-2026-01`, `PREMIUM-2026-01` in non-production/test environments only until owner approves publication.

## Acceptance criteria

- Every table has ownership, timestamps, actor/source where applicable, and record version.
- Tenant ownership is enforceable in queries, writes, indexes, jobs, and tests.
- Money uses minor units and currency.
- Published catalog and snapshot history is immutable.
- Usage is deduplicated and correctable without destructive edit.
- Provider events are verified, unique, and asynchronously processed.
- Schema supports all documented wireflows, failure paths, reconciliation, and rollback.
- Empty-database and previous-version migration tests pass before implementation release.

## Status

`PLAN_BILLING_DATA_MODEL_PHYSICAL_SCHEMA_SPEC_COMPLETE`
