# SAAS USER, ROLE, AND WORKFLOW ARCHITECTURE

## PURPOSE

This is the single canonical architecture document for users, roles, access scopes, and the end-to-end operating workflow of the Technician Repair SaaS.

No other application document should duplicate the complete role definitions in this file. Application documents may reference a role and describe only application-specific responsibilities.

## REFERENCE MODELS

The architecture is informed by official operating patterns used in:

- Microsoft Dynamics 365 Field Service: work order creation, scheduling, dispatch, service execution, supervisor review, inventory adjustment, and invoicing.
- ServiceNow Field Service Management: administrators, managers, dispatchers, field agents, skills, schedules, task assignment, and live status reporting.
- Odoo Repairs: customer and device intake, repair order confirmation, parts reservation, repair execution, quotation, invoicing, and return to the customer.

These products are reference models only. The ARCHITECTURED project retains its own repair-shop workflow and terminology.

## MULTI-TENANT SAAS HIERARCHY

```text
SAAS PLATFORM
└── Platform Organization
    ├── Platform Super Administrator
    ├── Platform Support Administrator
    ├── Platform Billing Administrator
    └── Platform Security Auditor

TENANT
└── Repair Business / Organization
    ├── Subscription
    ├── Organization Owner
    ├── Branches
    │   └── Departments
    │       └── Users
    ├── Roles
    ├── Permissions
    ├── Data Policies
    ├── Integrations
    └── Audit Records
```

## CANONICAL USER ROLES

### 1. Platform Super Administrator

- Creates and manages tenant organizations.
- Controls plans, platform limits, feature availability, and global configuration.
- Manages platform-wide security, incident response, maintenance, and service status.
- Cannot operate a tenant's repair jobs unless explicit support access is approved and audited.

### 2. Platform Support Administrator

- Handles tenant support, diagnostics, and controlled account recovery.
- Uses time-limited support access.
- Every support access session requires a reason, timestamp, and audit record.

### 3. Tenant Owner / Business Owner

- Owns the tenant workspace and subscription.
- Controls branches, departments, business policies, pricing, approvals, and executive reporting.
- Assigns tenant administrators and approves high-risk actions.

### 4. Tenant Administrator

- Configures users, roles, permissions, branches, workflows, forms, statuses, notifications, and integrations.
- Cannot change platform-level plans or global service policies.

### 5. Branch Manager / Service Manager

- Oversees branch workload, technicians, queues, SLA, quality, staffing, and escalations.
- Reviews and approves completed work where required.
- Monitors branch-level performance and compliance.

### 6. Front Desk / Customer Service Agent

- Registers customers and devices.
- Records reported issues, accessories, condition, intake evidence, and service requests.
- Creates job orders and communicates updates.
- Cannot alter technician diagnosis, testing results, or protected financial approvals.

### 7. Dispatcher / Queue Coordinator

- Reviews incoming work.
- Prioritizes, schedules, assigns, reassigns, and monitors job orders.
- Matches jobs to technician availability, branch, skills, certification, workload, and SLA.
- Cannot falsify technician progress or quality-control results.

### 8. Technician / Frontline Resource

- Views assigned or permitted repair work.
- Performs inspection, diagnosis, repair, parts usage, notes, evidence capture, and testing.
- Updates real-time work status.
- Cannot edit front-desk intake records, customer payments, or owner-only approval fields.

### 9. Quality Control Supervisor

- Reviews testing evidence and repair completeness.
- Approves, rejects, or returns a job for rework.
- Records quality findings and release readiness.

### 10. Inventory and Purchasing Officer

- Manages parts, tools, stock, purchasing, receiving, transfers, returns, and adjustments.
- Reserves and issues parts to repair jobs.
- Maintains traceability of parts consumed, returned, removed, or recycled.

### 11. Finance / Cashier / Accountant

- Manages quotations, deposits, invoices, payments, refunds, balances, taxes, and financial reports.
- Financial adjustments and refunds require configured approval rules.

### 12. Customer

- Creates or reviews service requests.
- Tracks repair status.
- Approves or rejects quotations.
- Pays authorized charges.
- Reviews release information, warranty, documents, and support history.

### 13. Business Account Representative

- Manages repairs for an approved company account.
- Can submit devices, approve quotations, view account invoices, and track authorized company repairs.
- Access is restricted to the represented business account.

### 14. External Contractor / Vendor

- Receives only explicitly assigned work or purchase-related records.
- Uses limited, time-bound access.
- Cannot browse unrelated customers, jobs, pricing, or tenant data.

### 15. Auditor / Read-Only Reviewer

- Reviews approved records, audit trails, compliance reports, and historical activity.
- Cannot create, edit, approve, delete, or restore operational records.

## APPLICATION ACCESS MAP

```text
Platform Super Administrator
└── SaaS Platform Administration

Tenant Owner / Tenant Administrator / Branch Manager
└── Owner Application

Front Desk / Customer Service / Dispatcher / Cashier
└── Front Desk Application

Technician / Quality Control Supervisor
└── Technician Application

Customer / Business Account Representative
└── Customer Portal

Inventory, Finance, Auditor, and Contractor Roles
└── Permission-based access to approved application modules
```

## END-TO-END SERVICE WORKFLOW

```text
Customer Request / Walk-In / Call / Online Submission
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
Initial Inspection and Diagnosis
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
Customer Feedback and Follow-Up
↓
Job Closure and Audit Retention
```

## WORK STATUS MODEL

- Draft
- Intake In Progress
- Received
- Awaiting Assignment
- Assigned
- Accepted
- Inspection In Progress
- Diagnosis In Progress
- Awaiting Quotation
- Awaiting Customer Approval
- Awaiting Parts
- Repair In Progress
- Repair Paused
- Ready For Testing
- Testing In Progress
- Testing Failed
- Rework Required
- Quality Review
- Ready For Release
- Awaiting Payment
- Released
- Completed
- Cancelled
- On Hold
- Warranty Return
- Closed

## ACCESS CONTROL MODEL

Every request must be evaluated using all applicable controls:

1. Tenant membership.
2. Active subscription and feature entitlement.
3. User account status.
4. Assigned role.
5. Explicit permission.
6. Application access.
7. Branch and department scope.
8. Record ownership or assignment.
9. Field-level protection.
10. Approval requirement.
11. Session and device trust.
12. Audit and retention policy.

## DATA SCOPE RULES

- Platform users cannot access tenant records by default.
- Tenant users cannot access another tenant's records.
- Branch-restricted users can access only assigned branches.
- Technicians access assigned or explicitly shared jobs.
- Customers access only their own authorized records.
- Business representatives access only approved company-account records.
- Financial, identity, security, and owner-only fields use field-level restrictions.
- Exports follow the same role, branch, record, and field restrictions as the screen view.

## USER LIFECYCLE

```text
Invitation
↓
Identity Verification
↓
Account Activation
↓
Tenant and Branch Assignment
↓
Role and Permission Assignment
↓
Optional Approval
↓
Active Access
↓
Role Change / Transfer / Temporary Access
↓
Suspension
↓
Deactivation
↓
Retention and Audit Archive
```

## SAAS ACCOUNT AND SUBSCRIPTION REQUIREMENTS

- Tenant registration and verification.
- Subscription plan and billing cycle.
- Trial, active, past-due, suspended, cancelled, and archived states.
- User-seat and branch limits.
- Feature entitlements by plan.
- Usage measurement and plan-limit warnings.
- Upgrade, downgrade, renewal, grace period, and cancellation workflows.
- Tenant data export and closure policy.
- Subscription and billing audit trail.

## SECURITY AND COMPLIANCE RULES

- Role-based and field-level access control.
- Strong authentication and optional multi-factor authentication.
- Session timeout and device/session history.
- Separation of duties for intake, diagnosis, approval, payment, refund, and release.
- Approval workflows for high-risk changes.
- Immutable audit records for protected actions.
- Tenant isolation and branch-level data boundaries.
- Data export, retention, recovery, and deletion policies.
- Support impersonation is disabled by default and must be explicitly approved, limited, and logged.

## INTEGRATION CONTRACTS

- Email, SMS, push, and in-app notifications.
- Payment gateways and accounting exports.
- Inventory, supplier, and purchasing systems.
- QR and barcode systems.
- File and evidence storage.
- Calendar and scheduling systems.
- Webhooks, API integrations, and event bus.
- Analytics and business-intelligence exports.

## ARCHITECTURE STATUS

- Multi-tenant hierarchy: COMPLETE.
- Canonical user roles: COMPLETE.
- Application access mapping: COMPLETE.
- End-to-end service workflow: COMPLETE.
- Work status model: COMPLETE.
- Access-control model: COMPLETE.
- User lifecycle: COMPLETE.
- Subscription requirements: COMPLETE.
- Security and integration foundation: COMPLETE.

**SAAS USER, ROLE, AND WORKFLOW ARCHITECTURE COMPLETE (100%)**
