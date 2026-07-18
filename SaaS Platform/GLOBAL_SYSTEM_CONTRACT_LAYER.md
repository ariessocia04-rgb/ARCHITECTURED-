# GLOBAL SYSTEM CONTRACT LAYER

## PURPOSE

This document defines the system-wide contracts that every ARCHITECTURED application and shared service must follow. It is the canonical source for identifiers, context, ownership, lifecycle, status, versioning, error, audit, event, and integration rules.

## CONTRACT HIERARCHY

```text
GLOBAL SYSTEM CONTRACT
├── Identity Contract
├── Tenant and Branch Context Contract
├── Record Ownership Contract
├── Identifier Contract
├── Lifecycle and Status Contract
├── Version and Concurrency Contract
├── API Request and Response Contract
├── Event and Real-Time Contract
├── File and Evidence Contract
├── Notification Contract
├── Payment and Financial Contract
├── Audit and Compliance Contract
├── Error and Recovery Contract
└── Integration Contract
```

## GLOBAL CONTEXT ENVELOPE

Every protected operation must carry or resolve:

- request_id
- correlation_id
- tenant_id
- branch_id when branch-scoped
- actor_user_id or approved system_actor_id
- actor_role_id
- application_id
- session_id when user-initiated
- source_channel
- operation_name
- idempotency_key when repeat submission is possible
- occurred_at in UTC
- locale and time_zone for presentation
- contract_version

No client-supplied tenant, role, branch, or ownership context is trusted without server-side validation.

## CANONICAL IDENTIFIERS

Identifiers are globally unique, immutable, non-reusable, and never derived from mutable names.

Required identifier families:

- platform_organization_id
- tenant_id
- subscription_id
- branch_id
- department_id
- workstation_id
- warehouse_id
- user_id
- role_id
- permission_id
- customer_id
- business_account_id
- representative_id
- device_id
- service_request_id
- appointment_id
- job_order_id
- queue_entry_id
- assignment_id
- inspection_id
- diagnosis_id
- quotation_id
- approval_id
- repair_id
- repair_task_id
- part_id
- inventory_item_id
- stock_movement_id
- purchase_order_id
- supplier_id
- testing_session_id
- quality_review_id
- invoice_id
- payment_id
- refund_id
- release_id
- warranty_id
- support_case_id
- notification_id
- document_id
- media_asset_id
- integration_connection_id
- event_id
- audit_event_id

Human-readable numbers such as job-order numbers, queue numbers, invoice numbers, receipt numbers, and warranty numbers are display references and never replace internal identifiers.

## RECORD OWNERSHIP CONTRACT

Every tenant-owned operational record must contain:

- tenant_id
- created_at
- created_by
- updated_at
- updated_by
- record_version
- lifecycle_status
- branch_id when branch-scoped
- owner_user_id, assigned_user_id, or responsible_team_id when applicable
- archived_at and archived_by when archived

Every child record must inherit and validate the same tenant as its parent. Cross-tenant relationships are prohibited.

## TENANT AND BRANCH RULES

- Tenant isolation is mandatory for storage, queries, cache, search, files, events, exports, analytics, and integrations.
- Branch scope is mandatory when the business record belongs to a branch.
- Cross-branch access requires explicit permission and is audited.
- Platform support access is denied by default, time-limited when approved, and fully logged.
- Tenant deletion cannot bypass retention, financial, warranty, dispute, or legal-hold rules.

## LIFECYCLE CONTRACT

Every stateful record defines:

- allowed initial state
- allowed transitions
- transition permission
- required validation
- required evidence
- approval requirement
- side effects
- notification triggers
- event emitted
- audit event created
- cancellation and recovery behavior
- terminal states

Direct status editing outside the transition contract is prohibited.

## CANONICAL WORK-ORDER STATUS FAMILY

Primary lifecycle:

```text
Draft
→ Intake In Progress
→ Received
→ Awaiting Assignment
→ Assigned
→ Accepted
→ Inspection In Progress
→ Diagnosis In Progress
→ Awaiting Quotation
→ Awaiting Customer Approval
→ Awaiting Parts
→ Repair In Progress
→ Ready For Testing
→ Testing In Progress
→ Quality Review
→ Ready For Release
→ Awaiting Payment
→ Released
→ Completed
→ Closed
```

Exception states:

- On Hold
- Repair Paused
- Testing Failed
- Rework Required
- Cancelled
- Warranty Return
- SLA Warning
- SLA Breached

A state transition must not erase the previous state. The full transition history is retained.

## VERSION AND CONCURRENCY CONTRACT

- Every mutable record uses record_version or equivalent optimistic concurrency control.
- Conflicting updates return a conflict result and preserve both audit contexts.
- Approved quotations, invoices, receipts, release records, warranty certificates, and audit records are version-locked.
- Corrections to protected records create a new revision, adjustment, reversal, or superseding record.
- Silent overwrite of protected data is prohibited.

## TIMESTAMP CONTRACT

- Store canonical timestamps in UTC.
- Preserve the tenant and user time zone used for display and reports.
- Use created_at, updated_at, occurred_at, effective_from, effective_to, completed_at, cancelled_at, archived_at, and deleted_at only for their defined purpose.
- Client device time is never the sole authority for protected events.

## REQUEST CONTRACT

Every command request defines:

- actor and authorization context
- tenant and branch scope
- command name
- target record
- required input
- validation rules
- idempotency behavior
- expected result
- possible error codes
- emitted events
- audit requirements

Repeated requests with the same valid idempotency key return the original logical result and do not create duplicate financial, job, notification, inventory, or file records.

## RESPONSE CONTRACT

Successful responses contain:

- success status
- result data or accepted reference
- request_id
- correlation_id
- record_version when applicable
- occurred_at
- warnings when applicable

Failed responses contain:

- stable error_code
- safe user_message
- request_id
- correlation_id
- validation fields when applicable
- retryable flag
- support_reference when needed

Secret values, internal stack traces, raw database errors, and private integration credentials are never exposed.

## GLOBAL ERROR CATEGORIES

- VALIDATION_ERROR
- AUTHENTICATION_REQUIRED
- AUTHENTICATION_FAILED
- AUTHORIZATION_DENIED
- TENANT_SCOPE_VIOLATION
- BRANCH_SCOPE_VIOLATION
- RECORD_NOT_FOUND
- RECORD_CONFLICT
- INVALID_STATE_TRANSITION
- APPROVAL_REQUIRED
- DUPLICATE_REQUEST
- IDEMPOTENCY_CONFLICT
- RATE_LIMITED
- SUBSCRIPTION_RESTRICTED
- FEATURE_NOT_ENTITLED
- EXTERNAL_SERVICE_UNAVAILABLE
- PAYMENT_FAILED
- INVENTORY_UNAVAILABLE
- FILE_VALIDATION_FAILED
- SECURITY_POLICY_VIOLATION
- RETENTION_POLICY_BLOCK
- SYSTEM_ERROR

## EVENT CONTRACT

Every domain event contains:

- event_id
- event_type
- event_version
- tenant_id
- branch_id when applicable
- aggregate_type
- aggregate_id
- aggregate_version
- actor reference
- occurred_at
- correlation_id
- causation_id
- safe payload
- data classification

Events are immutable. Consumers must handle duplicate delivery and out-of-order arrival using event_id, aggregate_version, and idempotent processing.

## FILE AND EVIDENCE CONTRACT

Every file, photo, video, signature, report, and generated document records:

- document_id or media_asset_id
- tenant_id
- related entity type and ID
- category
- original file name
- safe storage key
- content type
- size
- integrity checksum
- uploaded_by
- uploaded_at
- access classification
- retention class
- scan and validation status
- version

Files never inherit access solely from an unvalidated URL. Access is resolved from tenant, role, record, and field permissions.

## NOTIFICATION CONTRACT

Every notification records:

- notification_id
- tenant_id
- recipient identity
- related record
- template and version
- channel
- priority
- consent and preference result
- delivery status
- retry count
- created_at, scheduled_at, sent_at, delivered_at, read_at, failed_at
- failure reason

Operational record completion never depends solely on notification delivery.

## FINANCIAL CONTRACT

- Monetary values store currency and precision.
- Quotations, invoices, payments, deposits, refunds, credits, taxes, and discounts use separate records.
- Payment success is confirmed by trusted provider or authorized manual verification.
- Refunds, reversals, write-offs, and protected discounts require configured permission and approval.
- Financial records are never hard deleted.
- Every financial state change is audited.

## INVENTORY CONTRACT

- Stock changes only through stock-movement records.
- Every movement identifies source, destination, quantity, unit, reason, actor, related job or purchase record, and timestamp.
- Reserved, issued, consumed, returned, removed, recycled, transferred, adjusted, and damaged quantities remain distinguishable.
- Negative stock follows explicit tenant policy and approval.

## AUDIT CONTRACT

Protected operations create an immutable audit event with:

- audit_event_id
- tenant_id
- branch_id
- actor
- action
- target type and ID
- previous protected values or secure change summary
- new protected values or secure change summary
- reason
- approval reference
- request_id
- correlation_id
- session, device, IP, and channel context when legally and operationally allowed
- occurred_at
- retention class

Audit logs cannot be edited by normal application users.

## INTEGRATION CONTRACT

Every integration defines:

- owning tenant
- provider and connection type
- allowed scopes
- secret-storage policy
- authentication method
- outbound and inbound data classification
- mapping version
- timeout and retry rules
- idempotency rules
- rate limits
- health status
- failure queue
- reconciliation process
- audit requirements
- disable and revoke behavior

## CONTRACT VERSIONING

- Every shared contract has a version.
- Breaking changes require a new major version and migration plan.
- Backward-compatible additions use a minor version.
- Documentation and implementation must identify the contract version they follow.
- Deprecated fields, statuses, events, and endpoints require a defined support window and replacement path.

## DOCUMENT DEPENDENCIES

This contract is the parent of:

- Multi-Tenant Data and Entity Architecture
- Database Relationship and Ownership Model
- API, Event, Webhook, and Real-Time Contract
- Authentication, Authorization, and Session Contract
- Subscription and Tenant Lifecycle Contract
- Notification and Communication Contract
- Payment and Financial Control Contract
- File and Media Contract
- Audit, Backup, Recovery, and Incident Contract
- Cross-Application Handoff Matrix
- Non-Functional Requirements

## STATUS

- Global identifiers: COMPLETE.
- Context and ownership: COMPLETE.
- Lifecycle and status: COMPLETE.
- Versioning and concurrency: COMPLETE.
- Request, response, error, event, file, notification, financial, inventory, audit, and integration contracts: COMPLETE.

**GLOBAL SYSTEM CONTRACT LAYER COMPLETE (100%)**
