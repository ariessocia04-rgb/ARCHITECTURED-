# MULTI-TENANT DATA AND ENTITY ARCHITECTURE

## PURPOSE

This document defines the canonical data domains, entities, ownership, tenant boundaries, branch boundaries, record classifications, and lifecycle relationships for the Technician Repair SaaS.

It follows `GLOBAL_SYSTEM_CONTRACT_LAYER.md` and does not replace application-specific architecture.

## DOMAIN MAP

```text
PLATFORM DOMAIN
├── Platform Organization
├── Tenant
├── Subscription
├── Plan
├── Feature Entitlement
├── Usage Meter
├── Platform User
├── Support Access Grant
└── Platform Audit Event

TENANT ADMINISTRATION DOMAIN
├── Organization Profile
├── Branch
├── Department
├── Workstation
├── Warehouse
├── User
├── Team
├── Role
├── Permission
├── User Role Assignment
├── Branch Assignment
└── Approval Authority

CUSTOMER DOMAIN
├── Customer
├── Business Account
├── Contact
├── Authorized Representative
├── Address
├── Communication Preference
├── Consent Record
├── Customer Note
└── Customer Merge Request

DEVICE DOMAIN
├── Device
├── Device Identifier
├── Device Ownership
├── Device Evidence
├── Accessory Record
├── Condition Record
├── Warranty Evidence
└── Device Service History

SERVICE INTAKE DOMAIN
├── Service Request
├── Appointment
├── Intake Session
├── Intake Checklist
├── Reported Issue
├── Consent and Terms Acceptance
├── Intake Evidence
└── Intake Receipt

WORK MANAGEMENT DOMAIN
├── Job Order
├── Queue Entry
├── Assignment
├── Work Status Transition
├── SLA Instance
├── Escalation
├── Work Note
├── Work Attachment
└── Work Timeline Event

TECHNICAL DOMAIN
├── Inspection
├── Diagnosis
├── Diagnostic Finding
├── Recommended Action
├── Repair
├── Repair Task
├── Technician Time Entry
├── Testing Session
├── Test Result
├── Quality Review
└── Rework Record

COMMERCIAL DOMAIN
├── Price List
├── Labor Rate
├── Service Package
├── Quotation
├── Quotation Line
├── Customer Approval
├── Invoice
├── Invoice Line
├── Payment
├── Refund
├── Credit
├── Tax Record
└── Financial Adjustment

INVENTORY DOMAIN
├── Part
├── Tool
├── Inventory Item
├── Stock Level
├── Stock Reservation
├── Stock Movement
├── Supplier
├── Supplier Offer
├── Purchase Order
├── Receiving Record
├── Return Record
└── Stock Reconciliation

RELEASE AND WARRANTY DOMAIN
├── Release Record
├── Pickup Authorization
├── Delivery Record
├── Warranty
├── Warranty Claim
├── Warranty Decision
├── Return Intake
└── Follow-Up Record

COMMUNICATION DOMAIN
├── Notification
├── Message Thread
├── Message
├── Template
├── Delivery Attempt
├── Preference
└── Communication Audit

CONTENT DOMAIN
├── Document
├── Media Asset
├── Signature
├── QR Code
├── Barcode
├── Generated Report
├── Export Job
└── Print Job

INTEGRATION DOMAIN
├── Integration Connection
├── Credential Reference
├── Webhook Subscription
├── Webhook Delivery
├── External Mapping
├── Reconciliation Job
└── Integration Incident

GOVERNANCE DOMAIN
├── Audit Event
├── Approval Request
├── Policy
├── Retention Rule
├── Legal Hold
├── Backup Record
├── Restore Record
├── Security Incident
└── Support Case
```

## TENANT OWNERSHIP CLASSES

### Platform-Owned

- Plans and global feature definitions.
- Platform operations and platform security records.
- Tenant registration metadata.
- Global service status.

Platform-owned records do not contain tenant operational data unless a controlled support or billing reference is required.

### Tenant-Owned

- Organization configuration.
- Users, roles, branches, customers, devices, job orders, financial records, inventory, documents, integrations, and audit records.
- Every tenant-owned record contains tenant_id.

### Branch-Scoped

- Intake, queue, assignment, repair, inventory, cashier, release, local reports, shifts, and branch configuration.
- Every branch-scoped record contains tenant_id and branch_id.

### User-Owned or User-Assigned

- Personal settings, saved views, assigned work, notifications, sessions, and user-specific drafts.
- Ownership never bypasses tenant and branch rules.

### Customer-Visible

- Customer-safe service status, approved quotation, invoices, receipts, release documents, warranty, messages, and authorized history.
- Internal notes, technician-only findings, security fields, and staff-only analytics remain hidden.

## ENTITY RELATIONSHIP FOUNDATION

```text
Tenant
├── Subscription
├── Branches
│   ├── Departments
│   ├── Workstations
│   ├── Warehouses
│   ├── Users
│   └── Job Orders
├── Roles and Permissions
├── Customers
│   ├── Devices
│   ├── Service Requests
│   ├── Job Orders
│   ├── Quotations
│   ├── Invoices
│   └── Warranties
└── Audit Events
```

## SERVICE RECORD CHAIN

```text
Customer
→ Device
→ Service Request
→ Intake Session
→ Job Order
→ Queue Entry
→ Assignment
→ Inspection
→ Diagnosis
→ Quotation
→ Customer Approval
→ Parts Reservation
→ Repair
→ Testing Session
→ Quality Review
→ Invoice
→ Payment
→ Release Record
→ Warranty
→ Follow-Up
```

Each record links to the previous authoritative record without copying all source data. Snapshot fields are used only where legal, financial, document, or historical accuracy requires an immutable representation.

## SNAPSHOT RULES

Create an immutable snapshot when:

- A quotation is sent or approved.
- An invoice or receipt is issued.
- A customer signs intake, approval, or release.
- A warranty certificate is issued.
- A testing or quality report is finalized.
- A regulatory, dispute, or financial record must preserve historical values.

Live profile updates do not rewrite finalized snapshots.

## ENTITY STATUS REQUIREMENTS

Every stateful entity defines:

- initial_status
- lifecycle_status
- allowed transitions
- terminal status
- cancellation status
- archive status
- transition timestamp
- transition actor
- transition reason
- transition version

## SOFT DELETE, ARCHIVE, AND HARD DELETE

- Operational, financial, warranty, security, and audit records are not hard deleted through normal application use.
- Archive hides inactive records while preserving history and relationships.
- Soft delete is used only for recoverable user-managed content where policy allows.
- Hard deletion requires tenant closure, retention expiry, legal and financial clearance, and an approved deletion workflow.
- Audit evidence of deletion remains according to policy.

## DATA CLASSIFICATION

### Public

- Public business profile and approved service information.

### Internal

- Operational configuration, non-sensitive workflow data, and internal reporting.

### Confidential

- Customer contact data, device identifiers, quotations, invoices, payments, employee records, and business analytics.

### Restricted

- Authentication data, secrets, identity evidence, protected financial details, support-access evidence, security incidents, and legally restricted records.

Every entity and field receives a classification that controls access, logging, export, retention, encryption, and masking.

## FIELD PROTECTION RULES

- Passwords and authentication secrets are never stored as readable business fields.
- Payment-card data is not stored unless handled through a compliant provider and explicitly designed scope.
- Device passcodes are never exposed in logs, notifications, analytics, or exports.
- IMEI, serial number, identity documents, financial details, and security data support masking.
- Internal technical notes and customer-visible updates are separate fields or records.

## SEARCH AND INDEXING RULES

- Search indexes include tenant_id and branch scope.
- Restricted fields are excluded or tokenized according to policy.
- Search results apply the same permission filtering as direct record access.
- Deleted, archived, merged, or superseded records have defined search visibility.
- Search indexing failures do not change the authoritative database record.

## CACHE RULES

- Cache keys include tenant and applicable branch/user scope.
- Restricted records use approved encrypted or non-persistent cache policies.
- Cache invalidation follows record version and event contracts.
- Cached data never authorizes access by itself.

## ANALYTICS RULES

- Tenant operational analytics remain tenant-isolated.
- Cross-tenant platform analytics use aggregated or de-identified data when allowed.
- Financial and workforce analytics follow role and field restrictions.
- Metrics retain source definitions, time range, branch, currency, and version.

## IMPORT AND MERGE RULES

- Imports validate tenant, branch, identifier, classification, format, duplicates, and required permissions.
- Customer and device merges require approval and preserve redirect/history links.
- Job orders, financial records, audit records, and warranties are never merged through generic tools.
- Import errors produce a safe report without partial hidden success unless explicitly supported and reported.

## DATA RESIDENCY AND RETENTION

Each tenant policy defines:

- primary storage region when supported
- backup region
- retention class by entity
- archive period
- deletion eligibility
- legal hold behavior
- export format
- tenant closure behavior

## CANONICAL DATA OWNERSHIP MATRIX

| Domain | Platform Owner | Tenant Owner | Branch Scope | Customer Visibility |
|---|---|---|---|---|
| Subscription | Platform | Tenant reference | No | Billing contact only |
| User and Role | Platform identity / Tenant access | Tenant | Optional | No |
| Customer and Device | No | Tenant | Optional | Own records |
| Job and Repair | No | Tenant | Yes | Customer-safe view |
| Inventory | No | Tenant | Yes | Limited quotation/warranty view |
| Finance | Provider/platform reference | Tenant | Yes | Own documents |
| Audit | Platform or Tenant by event | Tenant | Optional | Limited consent/access history |
| Integration | Platform connector / Tenant configuration | Tenant | Optional | No |

## STATUS

- Data domains: COMPLETE.
- Tenant and branch ownership: COMPLETE.
- Service record chain: COMPLETE.
- Snapshot, lifecycle, deletion, classification, field protection, search, cache, analytics, import, retention, and ownership matrix: COMPLETE.

**MULTI-TENANT DATA AND ENTITY ARCHITECTURE COMPLETE (100%)**
