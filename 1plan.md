# 1PLAN — TECHNICIAN REPAIR SAAS MASTER ARCHITECTURE PLAN

This document is the master workflow, progress tracker, and architecture authority for the ARCHITECTURED Technician Repair SaaS.

## 1. GOVERNANCE RULES

- GitHub is the single source of truth.
- Architecture is completed before coding.
- Current work is documentation and architecture only.
- Every module or shared concern must have one canonical repository file.
- Do not create duplicate architecture documents.
- Application documents may reference shared architecture but must not copy the full shared definition.
- Preserve approved numbering, naming, folders, links, and tree formatting.
- Read the current canonical file before editing or adding related architecture.
- Record every completed architecture area in this plan and in `README.md`.
- Update the master index when a new canonical architecture file is added.
- Major decisions, access rules, workflow transitions, and integration boundaries must be documented.

## 2. PRODUCT TARGET

A multi-tenant Technician Repair SaaS for repair businesses with organization, branch, department, user, role, permission, customer, device, job order, queue, diagnosis, quotation, repair, parts, testing, payment, release, warranty, notification, reporting, subscription, security, and audit capabilities.

## 3. RESEARCH-BACKED REFERENCE FLOW

The project uses proven service-management patterns as references while keeping its own repair-shop workflow:

- Microsoft Dynamics 365 Field Service: work order creation, scheduling, dispatch, service execution, supervisor review, inventory adjustment, and invoicing.
- ServiceNow Field Service Management: administrator, manager, dispatcher, technician, skills, schedules, task assignment, and live status reporting.
- Odoo Repairs: customer and product intake, repair order confirmation, parts reservation, repair execution, quotation, invoicing, and return to customer.

Canonical ARCHITECTURED flow:

```text
Customer Request / Walk-In / Call / Portal
↓
Customer and Device Intake
↓
Job Order Creation
↓
Queue Qualification and Priority
↓
Schedule and Dispatch
↓
Technician Acceptance
↓
Inspection and Diagnosis
↓
Quotation and Customer Approval
↓
Parts Reservation / Purchasing
↓
Repair Execution
↓
Functional Testing
↓
Quality Review and Approval
↓
Invoice and Payment Completion
↓
Device Release / Delivery
↓
Warranty Activation
↓
Feedback, Follow-Up, and Closure
```

## 4. MULTI-TENANT SAAS STRUCTURE

```text
SAAS PLATFORM
└── Tenant Organization
    ├── Subscription and Feature Entitlements
    ├── Owner and Tenant Administrators
    ├── Branches
    │   ├── Departments
    │   ├── Workstations
    │   ├── Warehouses
    │   └── Users
    ├── Roles and Permissions
    ├── Customers and Business Accounts
    ├── Service Operations
    ├── Inventory and Finance
    ├── Integrations
    └── Audit and Security Records
```

## 5. REQUIRED USERS AND PERSONAS

The canonical user, role, permission, and workflow architecture is:

`SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`

Required personas:

1. Platform Super Administrator
2. Platform Support Administrator
3. Tenant Owner / Business Owner
4. Tenant Administrator
5. Branch Manager / Service Manager
6. Front Desk / Customer Service Agent
7. Dispatcher / Queue Coordinator
8. Technician / Frontline Resource
9. Quality Control Supervisor
10. Inventory and Purchasing Officer
11. Finance / Cashier / Accountant
12. Customer
13. Business Account Representative
14. External Contractor / Vendor
15. Auditor / Read-Only Reviewer

## 6. APPLICATION MAP

### A. Technician Application

Canonical index:

`Applications/Technician Application/INDEX.md`

Status:

- Volume 1 — Header: COMPLETE.
- Volume 2 — Sidebar: COMPLETE.
- Volume 3 — Main Workspace: COMPLETE.
- Detailed modules: 36 complete, 0 partial, 0 missing.
- Repair Queue System: COMPLETE.

### B. Front Desk Application

Canonical architecture:

`Applications/Front Desk Application/README.md`

Status:

- Customer and device intake: COMPLETE.
- Job-order intake: COMPLETE.
- Queue and dispatch: COMPLETE.
- Quotation and payment: COMPLETE.
- Release, warranty, reports, security, and audit: COMPLETE.

### C. Owner Application

Canonical architecture:

`Applications/Owner Application/README.md`

Status:

- Organization, branch, user, role, and permission management: COMPLETE.
- Operations, workforce, inventory, finance, quality, analytics, subscription, integration, security, and audit: COMPLETE.

### D. Customer Portal

Canonical architecture:

`Applications/Customer Portal/README.md`

Status:

- Registration, service request, tracking, quotation, payment, release, warranty, support, privacy, and account settings: COMPLETE.

### E. Shared SaaS Platform

Canonical architecture:

`SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`

Status:

- Multi-tenant hierarchy: COMPLETE.
- User roles and application access: COMPLETE.
- End-to-end workflow and status model: COMPLETE.
- User lifecycle, subscription requirements, security, and integration foundation: COMPLETE.

## 7. CURRENT ARCHITECTURE COMPLETION

- Technician Application detailed architecture: 100%.
- Front Desk Application architecture: 100%.
- Owner Application architecture: 100%.
- Customer Portal architecture: 100%.
- Shared SaaS user, role, and workflow architecture: 100%.
- Current documentation upload batch: 100%.

## 8. NEXT ARCHITECTURE PHASES

The next work must continue without duplicating existing application architecture:

1. Global System Contract Layer.
2. Multi-Tenant Data and Entity Architecture.
3. Database Relationship and Ownership Model.
4. API Contract Architecture.
5. Event, Webhook, and Real-Time Synchronization Architecture.
6. Authentication, Authorization, and Session Contract.
7. Subscription, Entitlement, Usage, and Tenant-Lifecycle Contract.
8. Notification and Communication Contract.
9. Payment, Invoice, Refund, and Financial-Control Contract.
10. File, Photo, Video, Document, QR, and Barcode Contract.
11. Audit, Retention, Backup, Recovery, and Incident Contract.
12. Cross-Application Workflow and Handoff Matrix.
13. Non-Functional Requirements: performance, availability, scalability, accessibility, security, and observability.
14. Development-readiness audit before any code is created.

## 9. REQUIRED WORK ORDER LIFECYCLE

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

Supported exception states:

- On Hold
- Repair Paused
- Testing Failed
- Rework Required
- Cancelled
- Warranty Return
- SLA Warning
- SLA Breached

## 10. NON-NEGOTIABLE ACCESS RULES

- Tenant users cannot access another tenant's records.
- Platform staff cannot access tenant operational data without approved, limited, and audited support access.
- Branch-restricted users access only authorized branches.
- Technicians access only assigned or explicitly shared work.
- Customers access only owned or authorized records.
- Financial, identity, security, and owner-only fields require field-level protection.
- Intake, diagnosis, quality approval, payment, refund, and release must support separation of duties.
- Every protected change, export, approval, access, and integration action must be auditable.

## 11. CURRENT MASTER STATUS

**MULTI-APPLICATION SAAS FOUNDATION ARCHITECTURE COMPLETE.**

**NEXT CONTROLLED WORK: GLOBAL SYSTEM CONTRACT LAYER.**
