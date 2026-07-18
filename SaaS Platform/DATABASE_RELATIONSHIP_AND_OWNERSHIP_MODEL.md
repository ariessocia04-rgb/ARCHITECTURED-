# DATABASE RELATIONSHIP AND OWNERSHIP MODEL

## PURPOSE

This document defines the canonical logical database relationships, keys, ownership constraints, uniqueness rules, referential behavior, history strategy, and transaction boundaries for the Technician Repair SaaS.

This is architecture only. It does not prescribe a programming language or database library.

## DATABASE PRINCIPLES

- Tenant isolation is enforced at every tenant-owned table.
- Internal primary keys are immutable and non-reusable.
- Human-readable reference numbers are separate from internal keys.
- Foreign-key relationships must preserve tenant consistency.
- Protected history is append-only or versioned.
- Financial, inventory, warranty, approval, and audit records are never silently overwritten.
- Every critical operation has an explicit transaction boundary.

## KEY STRATEGY

Every primary business table uses:

- id: immutable internal identifier
- tenant_id: required for tenant-owned data
- branch_id: required for branch-owned data
- created_at
- created_by
- updated_at
- updated_by
- record_version
- lifecycle_status

Display references use tenant-scoped or branch-scoped sequences such as:

- customer_number
- device_number
- service_request_number
- job_order_number
- queue_number
- quotation_number
- invoice_number
- receipt_number
- release_number
- warranty_number

Display references must be unique within their declared scope and cannot be recycled.

## CORE RELATIONSHIP MAP

```text
platform_organizations
└── tenants
    ├── subscriptions
    ├── tenant_settings
    ├── branches
    │   ├── departments
    │   ├── workstations
    │   ├── warehouses
    │   ├── shifts
    │   └── branch_settings
    ├── users
    │   ├── user_roles
    │   ├── user_branch_assignments
    │   ├── sessions
    │   └── user_preferences
    ├── roles
    │   └── role_permissions
    ├── customers
    │   ├── customer_contacts
    │   ├── customer_addresses
    │   ├── authorized_representatives
    │   ├── devices
    │   ├── service_requests
    │   └── communication_preferences
    ├── job_orders
    │   ├── queue_entries
    │   ├── assignments
    │   ├── status_transitions
    │   ├── inspections
    │   ├── diagnoses
    │   ├── quotations
    │   ├── repairs
    │   ├── testing_sessions
    │   ├── quality_reviews
    │   ├── invoices
    │   ├── releases
    │   └── warranties
    ├── inventory_items
    │   ├── stock_levels
    │   ├── stock_reservations
    │   └── stock_movements
    ├── suppliers
    │   └── purchase_orders
    ├── notifications
    ├── documents
    ├── integrations
    └── audit_events
```

## USER, ROLE, AND SCOPE RELATIONSHIPS

- users belong to one tenant.
- roles belong to a tenant, except platform-defined role templates.
- permissions are stable capability definitions.
- role_permissions maps a role to permissions.
- user_roles maps a user to one or more roles with effective dates.
- user_branch_assignments limits access to branches.
- approval_authorities records financial, operational, quality, inventory, and security approval limits.
- a suspended or deactivated user retains historical authorship references.

Required uniqueness:

- user email or login uniqueness follows platform identity policy.
- tenant-local employee number is unique per tenant.
- active role names are unique per tenant.
- one active default role assignment per declared role context when required.

## CUSTOMER AND BUSINESS ACCOUNT RELATIONSHIPS

- a customer belongs to one tenant.
- a customer may be an individual or business account.
- a business account has contacts and authorized representatives.
- a customer can own or authorize access to multiple devices.
- a device may have ownership history, but only one current ownership record.
- customer merge creates a surviving customer and merge history; it does not rewrite protected historical snapshots.

Required uniqueness and duplicate controls:

- customer_number unique per tenant.
- business account number unique per tenant.
- normalized email and mobile combinations support duplicate detection but are not always hard unique.
- device IMEI or serial uniqueness is tenant-scoped and supports controlled exceptions for missing or reused identifiers.

## SERVICE REQUEST AND JOB ORDER RELATIONSHIPS

- a service_request belongs to a customer and optionally a device.
- a service_request can produce zero or one primary job_order unless split is explicitly recorded.
- a job_order belongs to one tenant and one servicing branch.
- a job_order links to customer, device, intake session, and service request.
- a job_order can have multiple assignments over time but only one current active assignment unless a crew model is used.
- a queue entry is versioned or historically retained when priority or position changes.
- status transitions are append-only.

Required uniqueness:

- job_order_number unique per tenant or configured branch numbering scope.
- one active queue entry per job order and queue type.
- one active primary assignment per job order unless multi-technician work is enabled.

## TECHNICAL RECORD RELATIONSHIPS

- a job order may have multiple inspections, diagnoses, repair attempts, testing sessions, and quality reviews.
- one record is marked current or final through explicit lifecycle state, not deletion of prior versions.
- diagnosis findings link to evidence and recommended actions.
- repair tasks link to technician, time entries, parts usage, and status transitions.
- testing results link to test definitions and evidence.
- quality review links to the reviewed testing session and repair version.
- rework creates a linked rework record and new repair/testing cycle.

## QUOTATION AND APPROVAL RELATIONSHIPS

- a quotation belongs to a job order and customer.
- quotation lines reference labor, parts, fees, taxes, or adjustments.
- sent and approved quotations store immutable snapshots.
- a quotation can have multiple versions; only one current active version.
- customer approval links to the exact quotation version.
- internal approval links to requested discount, override, or exception.

Required uniqueness:

- quotation_number unique per tenant.
- quotation version number unique within quotation family.
- one final customer decision per quotation version, with later changes represented as a new version or explicit revocation workflow.

## INVENTORY RELATIONSHIPS

- parts define catalog information.
- inventory_items represent stock-controlled items or serialized units.
- stock_levels are derived or maintained per warehouse and item.
- stock_reservations link inventory to job order or repair task.
- stock_movements are append-only and change stock state.
- purchase orders link suppliers, branch/warehouse, lines, receiving, returns, and financial references.
- part consumption links to job order, repair task, technician, and stock movement.

Required uniqueness:

- SKU unique per tenant.
- serialized item identifier unique per tenant.
- one stock-level row per warehouse and item.
- provider purchase-order reference uniqueness follows supplier and tenant scope.

## FINANCIAL RELATIONSHIPS

- an invoice belongs to customer and job order or business account billing cycle.
- invoice lines reference approved quotation lines or authorized adjustments.
- payments apply through payment_allocations to one or more invoices when supported.
- refunds link to original payment and approved refund request.
- receipts link to confirmed payments.
- credits and write-offs use separate adjustment records.
- cashier sessions group branch transactions and reconciliation.

Required rules:

- money stores amount and currency.
- payment provider transaction reference is unique per provider connection and tenant.
- confirmed payment cannot be replaced; it can be reversed or refunded.
- invoice totals reconcile with line totals, tax, discount, payments, credits, and balance.

## RELEASE AND WARRANTY RELATIONSHIPS

- release_record belongs to a completed job order and approved quality review.
- release requires customer or authorized pickup identity reference.
- delivery records link to release when delivery is used.
- warranty links to job order, repair, covered parts/services, customer, and device.
- warranty claims link to original warranty and create a new service request or job order.
- warranty decision preserves reviewer, reason, evidence, and approval.

## DOCUMENT AND MEDIA RELATIONSHIPS

- documents and media assets use polymorphic or mapping relationships to approved entity types.
- each link records tenant, entity type, entity ID, category, visibility, and version.
- generated documents link to the snapshot source used to produce them.
- signatures link to document/version and signing context.
- QR and barcode mappings link to one active target and retain mapping history.

## NOTIFICATION AND MESSAGE RELATIONSHIPS

- notification links to recipient, template version, related entity, and delivery attempts.
- message threads link to customer/service record and authorized participants.
- internal-only messages are stored separately or classified to prevent portal exposure.
- delivery attempts are append-only.

## INTEGRATION RELATIONSHIPS

- integration_connection belongs to tenant and provider.
- credential values live outside ordinary business tables; only secure references are stored.
- external_mapping links internal entity and version to external system identifier.
- webhook subscriptions link connection, event type, endpoint reference, and status.
- webhook deliveries and reconciliation jobs retain attempts and outcomes.

## AUDIT RELATIONSHIPS

- audit_event references target entity type and ID without requiring cascade deletion.
- audit events retain tenant, branch, actor, action, request, correlation, reason, and protected change summary.
- approvals link to both request and resulting operation.
- security incidents and support access grants link to related audit events.

## REFERENTIAL ACTION RULES

### RESTRICT

Use restrict when deleting or deactivating a parent would break protected records:

- tenant with operational data
- customer with job orders
- device with service history
- job order with technical or financial records
- user referenced by audit or financial records
- part referenced by inventory movement

### ARCHIVE

Use archive for users, branches, catalog items, templates, roles, suppliers, and integrations that must remain referenced historically.

### CASCADE ONLY FOR NON-BUSINESS CHILDREN

Cascade is allowed only for disposable configuration children that have no independent legal, financial, operational, or audit value, such as an unsaved draft's temporary rows.

## TRANSACTION BOUNDARIES

Atomic transaction examples:

- Create customer/device intake and job order reference.
- Assign job and create assignment/status/audit event.
- Approve quotation and lock version.
- Reserve or issue parts and create stock movement.
- Complete payment and create allocation/receipt/audit event.
- Release device and create release/status/warranty records.

External provider calls use an outbox, pending state, or reconciliation pattern so database commits and external side effects cannot silently disagree.

## HISTORY AND TEMPORAL MODEL

Use history tables or append-only records for:

- role assignments
- branch assignments
- ownership
- statuses
- priority
- assignment
- quotation versions
- price changes
- inventory movements
- financial transitions
- warranty decisions
- configuration versions
- integration mapping versions

## INDEXING MODEL

Every high-volume tenant table requires indexes beginning with tenant_id and the most common scope/filter fields.

Examples:

- tenant_id + branch_id + lifecycle_status
- tenant_id + customer_number
- tenant_id + job_order_number
- tenant_id + device identifier
- tenant_id + assigned_user_id + lifecycle_status
- tenant_id + occurred_at
- tenant_id + external provider reference

Indexes must not weaken permission checks or expose cross-tenant cardinality.

## BACKUP AND RESTORE IDENTIFIERS

Restored data preserves original IDs and audit relationships. A restore operation receives a restore_id and does not create duplicate active records without conflict validation.

## STATUS

- Primary keys and display references: COMPLETE.
- Core relationships: COMPLETE.
- User, customer, device, job, technical, quotation, inventory, finance, release, document, communication, integration, and audit models: COMPLETE.
- Referential actions, transaction boundaries, history, indexing, and restore rules: COMPLETE.

**DATABASE RELATIONSHIP AND OWNERSHIP MODEL COMPLETE (100%)**
