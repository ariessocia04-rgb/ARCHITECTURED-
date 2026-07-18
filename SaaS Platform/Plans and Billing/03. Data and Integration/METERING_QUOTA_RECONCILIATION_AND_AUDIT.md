# METERING, QUOTA, RECONCILIATION, AND AUDIT

## Purpose

Define how tenant consumption is captured, aggregated, displayed, enforced, optionally billed, corrected, disputed, reconciled, monitored, and audited without relying solely on delayed external-provider usage data.

## Metering pipeline

```text
Authoritative Business Action
→ Domain Commit
→ Outbox Event / Authoritative Counter Source
→ Usage Event Ingestion
→ Tenant/Meter/Period Deduplication
→ Aggregate Update
→ Threshold Evaluation
→ Entitlement/Quota Resolver
→ User Warning or Enforcement
→ Optional Provider Meter Report
→ Provider Summary/Invoice
→ Reconciliation
```

Usage reporting never determines whether the original business transaction committed. It observes an authoritative fact after or within the same consistent transaction boundary.

## Meter source map

| Meter | Authoritative source | Aggregation |
|---|---|---|
| Active companies | Company status query/projection | LAST current count |
| Active branches | Branch activation events/query | LAST current count |
| Active staff users | Membership activation/deactivation | LAST current count |
| Active warehouses | Warehouse activation events/query | LAST current count |
| Job orders created | `JobOrderCreated` event | COUNT/SUM 1 per unique job |
| Storage bytes | Finalized file/media byte projection | LAST current total |
| Outbound email | Trusted successful/accepted delivery event by policy | COUNT |
| SMS/push | Provider accepted/billed delivery event | COUNT/SUM |
| Export jobs | `ExportJobCreated` for chargeable/export-quota types | COUNT |
| API calls | Gateway authorized request metric | COUNT excluding internal/security/health routes |
| Webhook endpoints | Active webhook subscription projection | LAST current count |
| Integration connections | Active connection projection | LAST current count |
| AI credits | AI run cost/credit event after validation | SUM |

## Usage event contract

```text
usage_event_id
idempotency_key
tenant_id
subscription_id
meter_key
quantity
unit
occurred_at
ingested_at
source_service
source_event_id
source_record_type
source_record_id
company_id / branch_id when relevant
dimensions
schema_version
correction_of_event_id
classification
```

- `quantity` can be negative only through approved correction policy.
- Event time and ingestion time are separate.
- Late events are assigned according to meter period rules and invoice-finalization state.
- Duplicate source event/idempotency key is ignored with previous logical result returned.

## Period boundaries

- Subscription billing periods use `current_period_start` and `current_period_end` in UTC.
- User display uses tenant/billing time zone but cannot change stored boundaries.
- Free monthly periods open on tenant activation date by default.
- Paid periods follow the provider/internal agreed billing anchor.
- Plan change does not silently reset usage; preview defines carry-forward or split period.
- Closed periods are immutable except approved adjustment/reconciliation records.

## Aggregation rules

- `COUNT`: one unit per accepted unique event.
- `SUM`: sum event quantity.
- `LAST`: latest authoritative current value; not a sum of snapshots.
- `MAX`: peak value where explicitly approved.
- Aggregates are projections and can be rebuilt from retained authoritative events/queries.
- Aggregate version and calculated time are visible to support/reconciliation.

## Threshold evaluation

For each aggregate update:

1. resolve effective entitlement snapshot;
2. resolve base limit + add-on + override;
3. calculate utilization;
4. detect newly crossed 80%, 90%, and 100% thresholds;
5. persist unique threshold event;
6. queue notification and update realtime signal;
7. apply enforcement only during protected action preflight, not by deleting data.

Repeated aggregate recalculation cannot resend the same threshold notification for one period unless an authorized reset/re-notify policy exists.

## Quota preflight

Before a metered action:

```text
Resolve Current Aggregate
→ Add Requested Quantity
→ Apply Processing-Lag Safety Rules
→ Check Continuity Exemption
→ Check Base/Add-On/Override Limit
→ Check Security Rate Limit Separately
→ Allow / Warn / Require Approval / Block
→ Commit Action
→ Record Usage Event
```

Security rate limits always apply even when commercial quota remains.

## Processing delay

- UI displays `usage updated at` and processing-delay notice.
- Provider usage summaries can be asynchronous and are never the sole current quota source.
- Internal aggregate target: reflect accepted event within 60 seconds p95 under approved load.
- High-risk API/AI usage can use a reservation counter before work begins and settle actual use afterward.
- Reservation expiry and compensation prevent permanent quota leakage.

## Meter corrections

Corrections require:

- original event or aggregate period;
- reason and evidence;
- authorized actor/automated reconciliation source;
- correction quantity or cancellation reference;
- invoice/provider impact;
- tenant-visible result when billing is affected;
- audit event.

Finalized invoice usage is not silently rewritten. Correction creates credit, adjustment, next-invoice correction, or dispute workflow according to financial policy.

## Usage dispute workflow

```text
Tenant Opens Usage Detail
→ Select Meter/Period/Event Range
→ Submit Dispute and Evidence
→ Freeze Only the Disputed Billing Resolution when required
→ Usage Reviewer Investigates Source Events
→ Compare Internal Aggregate and Provider Summary
→ Approve Correction / Reject / Request More Information
→ Apply Adjustment/Credit when authorized
→ Notify and Audit
```

Usage dispute cannot alter operational source records without the owning domain's correction process.

## Provider reporting

- Internal usage events can be reported individually or in approved pre-aggregated batches.
- Provider meter mapping stores internal meter key, provider meter ID, aggregation compatibility, unit conversion, reporting frequency, and last successful cursor.
- Provider report uses unique idempotency/reference.
- Retry uses bounded backoff and dead-letter/reconciliation after threshold.
- Provider rejection does not delete internal usage.
- If provider aggregation semantics cannot match internal policy, provider is used for invoicing only after an approved mapping/compensation design.

## Reconciliation schedules

| Scope | Frequency/trigger |
|---|---|
| Subscription and entitlement | Daily and after every provider subscription event/change. |
| Usage aggregates | Hourly incremental; daily full current-period check; on-demand rebuild. |
| Provider meter summaries | Daily for open periods and before invoice finalization. |
| Invoice/payment | After webhook, retry, dispute, refund, and daily open-item check. |
| Structural counts | On every activation/deactivation plus daily query reconciliation. |
| Storage | On finalize/delete/archive plus daily object/database reconciliation. |
| API/AI | Near-real-time internal aggregate plus daily provider/analytics comparison. |

## Reconciliation finding types

- missing internal/provider subscription;
- plan/price mismatch;
- status mismatch;
- entitlement mismatch;
- duplicate/missing usage event;
- aggregate mismatch;
- provider usage-report failure;
- invoice amount/currency/tax mismatch;
- payment/refund/credit mismatch;
- period-boundary mismatch;
- stale webhook cursor;
- storage or structural count mismatch.

Severity determines alert, tenant impact, auto-remediation eligibility, owner, and response objective.

## Auto-remediation rules

Allowed only when deterministic and reversible, for example:

- retry provider usage event with same idempotency key;
- rebuild aggregate from authoritative events;
- replay verified unprocessed provider event;
- republish current entitlement snapshot/cache invalidation;
- correct a stale derived status when a newer authoritative version exists.

Never auto-charge, refund, delete tenant data, activate a higher plan, revoke users, or apply destructive downgrade remediation without exact approved authority.

## Observability

Minimum metrics:

- usage ingestion count/latency/error;
- deduplication count;
- aggregate lag and rebuild duration;
- threshold events and notification success;
- quota blocks by plan/meter;
- continuity exemptions;
- provider report backlog/error;
- webhook backlog/dead letters;
- subscription/entitlement mismatch count;
- invoice/payment reconciliation findings;
- dispute count/resolution time;
- cost per tenant/tier and noisy-neighbor indicators using approved aggregated data.

Logs use request/correlation/event IDs and exclude secrets/excess personal data.

## Tenant usage UI requirements

- Summary cards for highest-risk meters.
- Exact used/included/add-on/override values.
- Percent, reset date, last updated, and processing delay.
- Trend and projected exhaustion where source quality permits.
- Filter by meter and period.
- Event-level detail only for authorized roles and permitted fields.
- Explain what happens at limit and which actions remain available.
- Upgrade/add-on action only for authorized Owner/Billing Contact.
- Downloadable usage statement according to export quota and billing rights.

## Audit events

- `UsageEventRecorded`
- `UsageEventDeduplicated`
- `UsageCorrectionRecorded`
- `UsageAggregateRebuilt`
- `UsageThresholdCrossed`
- `UsageLimitReached`
- `QuotaOverrideGranted`
- `QuotaOverrideExpired`
- `ProviderUsageReported`
- `ProviderUsageReportFailed`
- `UsageDisputeOpened`
- `UsageDisputeResolved`
- `BillingReconciliationFindingCreated`
- `BillingReconciliationFindingResolved`

High-volume raw usage events can use operational event retention while material threshold, correction, dispute, invoice, and override events remain in durable audit.

## Acceptance criteria

1. Every meter has one authoritative source, unit, aggregation, period, delay, limit, enforcement, and reconciliation rule.
2. Duplicate usage does not double count or double bill.
3. Late/corrected usage follows period and invoice rules.
4. Provider async delay does not permit uncontrolled internal usage or false immediate totals.
5. Threshold notifications are unique and accessible.
6. Quota enforcement preserves declared core continuity.
7. Usage aggregates can be rebuilt and compared to provider summaries.
8. Disputes and corrections preserve immutable source/financial history.
9. One tenant's usage cannot affect another tenant's counters, limits, reports, billing, or performance controls.

## Status

`METERING_QUOTA_RECONCILIATION_AUDIT_ARCHITECTURE_COMPLETE`
