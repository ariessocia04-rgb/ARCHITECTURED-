# ARCHITECTURED — TECHNICIAN REPAIR SAAS

## PROJECT PURPOSE

ARCHITECTURED is the documentation-first architecture repository for a multi-tenant Technician Repair SaaS. It defines the applications, users, roles, permissions, workflows, modules, business rules, integrations, security boundaries, and audit requirements before coding begins.

## CORE RULES

- GitHub is the single source of truth.
- Architecture must be completed before implementation.
- Current repository work is documentation only; no application code is included.
- Every module and shared concern must have one canonical file.
- Duplicate architecture documents are not allowed.
- Existing approved content, links, numbering, and tree formatting must be preserved.
- Shared definitions are referenced instead of copied into every application.

## PRODUCT MODEL

```text
SAAS PLATFORM
└── Tenant Repair Business
    ├── Owner Application
    ├── Front Desk Application
    ├── Technician Application
    ├── Customer Portal
    ├── Branches and Departments
    ├── Users, Roles, and Permissions
    ├── Subscription and Feature Entitlements
    ├── Shared Workflows and Integrations
    └── Security, Audit, Backup, and Reporting
```

## APPLICATIONS

### 1. Technician Application — COMPLETE

[Open Technician Application Master Index](Applications/Technician%20Application/INDEX.md)

Completed architecture:

- Volume 1 — Header
- Volume 2 — Sidebar
- Volume 3 — Main Workspace
- 36 detailed modules
- 0 partial modules
- 0 missing modules

The canonical Repair Queue System remains at:

`Applications/Technician Application/Volume 2 - Sidebar/Module 2 - Repair Queue/repair_queue.md`

No duplicate Repair Queue document was created.

### 2. Front Desk Application — COMPLETE

[Open Front Desk Application Architecture](Applications/Front%20Desk%20Application/README.md)

Covers customer and device intake, job-order creation, queue and dispatch, quotations, payments, release, warranty, communication, reconciliation, security, and audit.

### 3. Owner Application — COMPLETE

[Open Owner Application Architecture](Applications/Owner%20Application/README.md)

Covers organization, branches, users, roles, permissions, workflow configuration, operations, workforce, inventory, purchasing, finance, quality, SLA, warranty, analytics, subscription, integrations, security, and recovery.

### 4. Customer Portal — COMPLETE

[Open Customer Portal Architecture](Applications/Customer%20Portal/README.md)

Covers customer registration, devices, service requests, appointments, repair tracking, quotation approval, payments, documents, pickup, delivery, warranty, support, communication, privacy, and account settings.

### 5. Shared SaaS Platform — COMPLETE

[Open SaaS User, Role, and Workflow Architecture](SaaS%20Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md)

This is the canonical source for the multi-tenant hierarchy, required users, application access, permission model, user lifecycle, work-order lifecycle, subscription requirements, security, and integration foundation.

## REQUIRED USERS

- Platform Super Administrator
- Platform Support Administrator
- Tenant Owner / Business Owner
- Tenant Administrator
- Branch Manager / Service Manager
- Front Desk / Customer Service Agent
- Dispatcher / Queue Coordinator
- Technician / Frontline Resource
- Quality Control Supervisor
- Inventory and Purchasing Officer
- Finance / Cashier / Accountant
- Customer
- Business Account Representative
- External Contractor / Vendor
- Auditor / Read-Only Reviewer

## END-TO-END SERVICE FLOW

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

## REFERENCE MODELS

The workflow and role architecture was cross-checked against official patterns from:

- Microsoft Dynamics 365 Field Service
- ServiceNow Field Service Management
- Odoo Repairs

These products are used only as operating references. ARCHITECTURED retains its own repair-shop terminology and application design.

## CURRENT COMPLETION

- Technician Application detailed architecture: 100%.
- Front Desk Application architecture: 100%.
- Owner Application architecture: 100%.
- Customer Portal architecture: 100%.
- Shared SaaS user, role, and workflow architecture: 100%.
- Current upload batch: 100%.

## NEXT CONTROLLED ARCHITECTURE WORK

1. Global System Contract Layer.
2. Multi-Tenant Data and Entity Architecture.
3. Database Relationship and Ownership Model.
4. API, Event, Webhook, and Real-Time Contract.
5. Authentication, Authorization, Session, Subscription, Notification, Payment, File, Audit, Backup, and Recovery Contracts.
6. Cross-Application Handoff Matrix.
7. Non-Functional Requirements and development-readiness audit.

## MASTER PLAN

Read [`1plan.md`](1plan.md) before adding or changing architecture.

**CURRENT STATUS: MULTI-APPLICATION SAAS FOUNDATION ARCHITECTURE COMPLETE.**
