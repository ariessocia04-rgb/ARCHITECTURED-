# API, EVENT, WEBHOOK, AND REAL-TIME CONTRACT

## PURPOSE

This document defines the canonical communication architecture between applications, services, external integrations, webhooks, and real-time clients.

It follows the Global System Contract Layer and preserves tenant, branch, role, record, field, and subscription controls.

## COMMUNICATION LAYERS

```text
CLIENT APPLICATIONS
├── Owner Application
├── Front Desk Application
├── Technician Application
└── Customer Portal

SERVICE CONTRACTS
├── Command APIs
├── Query APIs
├── File APIs
├── Report APIs
├── Integration APIs
└── Administration APIs

ASYNC CONTRACTS
├── Domain Events
├── Integration Events
├── Webhooks
├── Background Jobs
├── Notification Jobs
├── Reconciliation Jobs
└── Dead-Letter / Failure Queues

REAL-TIME CONTRACTS
├── Queue Updates
├── Assignment Updates
├── Repair Status Updates
├── Notification Updates
├── Inventory Availability Updates
├── Payment Status Updates
└── Presence and Session Signals
```

## API DESIGN RULES

- APIs are versioned.
- Resource names use stable business terminology.
- Commands and queries are separated where their behavior differs.
- Tenant context is validated server-side.
- Branch and record scopes are enforced for every request.
- Permission checks apply before field selection and mutation.
- Responses do not expose hidden or restricted fields.
- Bulk endpoints define per-item and overall results.
- Long-running work returns a job reference and status endpoint.

## REQUEST ENVELOPE

Every protected request resolves:

- request_id
- correlation_id
- tenant_id
- branch_id when applicable
- authenticated actor
- active role and permission context
- source application
- API version
- idempotency key when required
- accepted content type
- locale and time zone

## COMMAND CONTRACT

A command defines:

- command name
- target entity
- required input
- validation
- current-state requirement
- permission requirement
- approval requirement
- transaction boundary
- idempotency behavior
- emitted events
- audit event
- notification effects
- possible errors

Examples:

- CreateServiceRequest
- CompleteIntake
- CreateJobOrder
- AssignJobOrder
- AcceptAssignment
- CompleteDiagnosis
- SendQuotation
- ApproveQuotation
- ReserveParts
- StartRepair
- CompleteTesting
- ApproveQualityReview
- ConfirmPayment
- ReleaseDevice
- OpenWarrantyClaim

## QUERY CONTRACT

A query defines:

- allowed filters
- allowed sorting
- default sorting
- pagination model
- visible fields
- expand/include rules
- search behavior
- branch and record scope
- archived-record behavior
- performance limit
- export eligibility

List and search endpoints never return records the user could not access directly.

## PAGINATION CONTRACT

- Cursor pagination is preferred for frequently changing, high-volume records.
- Page-number pagination may be used for stable reports.
- Page size has a safe default and maximum.
- Responses include next cursor or page metadata.
- Total count is optional for expensive queries and must be labeled when estimated.
- Sorting includes a stable tie-breaker.

## FILTER AND SORT CONTRACT

- Filters are allowlisted per resource.
- Restricted fields cannot be filtered or sorted without permission.
- Date ranges define time zone and boundary behavior.
- Multi-value filters define AND/OR semantics.
- Unknown fields return validation errors rather than being ignored silently.

## BULK OPERATION CONTRACT

Bulk operations define:

- maximum item count
- all-or-nothing or partial-success behavior
- per-item validation result
- per-item request key
- overall operation ID
- approval requirement
- audit summary and per-item audit
- retry behavior

Financial and inventory bulk actions cannot hide partial failure.

## API RESPONSE CONTRACT

Success:

```text
status
request_id
correlation_id
data or operation_reference
record_version
occurred_at
warnings
```

Failure:

```text
status
error_code
safe_message
request_id
correlation_id
field_errors
retryable
support_reference
```

## API VERSIONING

- Major version changes may break clients and require migration.
- Minor changes are backward compatible.
- New optional fields are allowed in compatible versions.
- Removing or changing meaning requires deprecation notice.
- Clients must tolerate unknown optional response fields.
- Contract version is logged for protected operations.

## IDEMPOTENCY

Idempotency is mandatory for:

- job-order creation from retried intake
- quotation sending
- customer approval submission
- payment confirmation
- refund submission
- inventory reservation and movement
- device release
- warranty creation
- webhook processing
- notification scheduling
- file finalization

An idempotency record stores tenant, key, operation, input fingerprint, logical result, status, and expiry.

## RATE LIMITING

Limits may apply by:

- platform
- tenant
- user
- IP or device risk
- endpoint
- integration connection
- subscription plan

Rate-limit responses include a stable error code and safe retry guidance. Security limits are not fully disclosed to attackers.

## DOMAIN EVENT CONTRACT

Events are named in past tense and represent facts:

- CustomerRegistered
- DeviceRegistered
- ServiceRequestSubmitted
- IntakeCompleted
- JobOrderCreated
- JobOrderAssigned
- AssignmentAccepted
- DiagnosisCompleted
- QuotationSent
- QuotationApproved
- PartsReserved
- RepairStarted
- RepairCompleted
- TestingCompleted
- QualityReviewApproved
- InvoiceIssued
- PaymentConfirmed
- DeviceReleased
- WarrantyActivated
- WarrantyClaimOpened
- JobOrderClosed

Every event includes the global event envelope defined in the Global System Contract Layer.

## EVENT DELIVERY RULES

- At-least-once delivery is assumed unless a provider guarantees otherwise.
- Consumers deduplicate by event_id.
- Aggregate version prevents stale application.
- Failed events enter retry or dead-letter handling.
- Event publication and database state use an outbox or equivalent consistency pattern.
- Event payload contains only necessary data and respects classification.

## EVENT ORDERING

- Ordering is guaranteed only within a declared aggregate or partition when supported.
- Consumers handle out-of-order events.
- A later aggregate version cannot be replaced by an older version.
- Reconciliation can rebuild missing derived state from authoritative records.

## WEBHOOK SUBSCRIPTION CONTRACT

A webhook subscription defines:

- tenant_id
- integration_connection_id
- event types
- endpoint reference
- secret reference
- signing algorithm
- active status
- API and event version
- filters
- delivery timeout
- retry policy
- failure threshold
- created_by and approved_by

## WEBHOOK DELIVERY CONTRACT

Outbound webhook requests include:

- webhook_delivery_id
- event_id
- event_type
- event_version
- tenant-safe payload
- occurred_at
- signature
- timestamp
- delivery attempt number

Recipients must verify signature, timestamp, and replay window.

## WEBHOOK RETRY MODEL

- Retry only retryable failures.
- Use bounded exponential backoff with jitter.
- Record every attempt and response class.
- Disable or quarantine repeatedly failing subscriptions according to policy.
- Provide tenant-visible delivery history and replay controls with permission.
- Replay preserves the original event ID and creates a new delivery ID.

## INBOUND WEBHOOK CONTRACT

- Authenticate provider signature.
- Validate provider connection and tenant mapping.
- Reject replay outside the allowed window.
- Store provider event ID for deduplication.
- Convert external event to internal command or integration event.
- Do not directly bypass domain validation.
- Record reconciliation and audit evidence.

## REAL-TIME CHANNEL CONTRACT

Real-time updates may use WebSocket, Server-Sent Events, or an equivalent channel.

Every connection validates:

- authenticated user or approved public tracking token
- tenant
- application
- branch scope
- allowed topics
- session status
- subscription entitlement

## REAL-TIME TOPICS

Examples:

- tenant/{tenant_id}/branch/{branch_id}/queue
- user/{user_id}/assignments
- job-order/{job_order_id}/status
- customer/{customer_id}/portal-updates
- user/{user_id}/notifications
- branch/{branch_id}/inventory-availability
- payment/{payment_id}/status

Topic authorization is checked on subscribe and when relevant permissions change.

## REAL-TIME MESSAGE CONTRACT

Messages include:

- message_id
- topic
- message_type
- entity_type and entity_id
- entity_version
- safe change summary
- occurred_at
- correlation_id

Clients treat messages as change signals and refresh authoritative data when needed.

## CONNECTION RECOVERY

- Connections use heartbeat and expiry.
- Reconnect uses last acknowledged cursor when supported.
- Missing updates trigger a resynchronization query.
- Offline technician actions use a local queue, unique operation IDs, conflict rules, and explicit synchronization result.
- Real-time failure never authorizes stale protected actions.

## PUBLIC TRACKING CONTRACT

Customer tracking without full login uses:

- time-limited opaque tracking token
- restricted fields
- rate limiting
- revocation
- no sequential job-number enumeration
- no internal notes, staff identity details, financial secrets, or unrestricted documents

## BACKGROUND JOB CONTRACT

Every job records:

- job_id
- tenant_id
- job_type
- requested_by
- input reference
- queued_at
- started_at
- completed_at or failed_at
- progress
- retry count
- result reference
- safe error
- correlation_id

Examples include exports, report generation, bulk imports, notification delivery, reconciliation, backup, and media processing.

## RECONCILIATION CONTRACT

Reconciliation compares internal authoritative state against external or derived state for:

- payments
- inventory
- webhooks
- notifications
- files
- analytics
- accounting exports
- subscription usage

Differences create a reconciliation finding, resolution status, actor, reason, and audit record.

## OBSERVABILITY CONTRACT

Every API, event, webhook, and real-time operation produces safe metrics and traces using request_id and correlation_id without logging secrets or excessive personal data.

Minimum metrics:

- request count and latency
- error rate
- event backlog
- retry count
- dead-letter count
- webhook success rate
- real-time connection count
- reconnect rate
- background job duration
- reconciliation differences

## STATUS

- API commands, queries, responses, pagination, filtering, bulk operations, versioning, idempotency, and rate limits: COMPLETE.
- Domain events, delivery, ordering, webhooks, real-time channels, offline recovery, public tracking, background jobs, reconciliation, and observability: COMPLETE.

**API, EVENT, WEBHOOK, AND REAL-TIME CONTRACT COMPLETE (100%)**
