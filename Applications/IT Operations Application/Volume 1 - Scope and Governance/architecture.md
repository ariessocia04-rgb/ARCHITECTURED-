# IT OPERATIONS APPLICATION — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose

Provide a controlled technical-operations department for each eligible tenant so staff can receive support and the business can manage its devices, printers, integrations, identities, monitoring, incidents, changes, releases, vendors, recovery, and technical knowledge without giving IT personnel unrestricted business-data access.

## Business outcomes

- Staff have one clear help and incident path.
- Technical issues are prioritized by business impact.
- Printer, workstation, integration, and access problems are traceable.
- Changes are reviewed, tested, scheduled, communicated, and reversible.
- Owners see business risk, outages, support performance, and approvals.
- IT teams have operational telemetry, runbooks, asset records, and audit evidence.
- Platform support and tenant IT coordinate through controlled support sessions.

## Operating model

The application supports:

```text
SMALL TENANT
└── Owner or designated Tenant Administrator performs minimum IT functions

GROWING TENANT
├── IT Manager / Administrator
├── Service Desk
└── Endpoint/Printer or Integration specialists

LARGE TENANT
├── IT Operations Manager
├── Service Desk L1/L2
├── Systems and Integration Administration
├── Endpoint and Printer Administration
├── Security/Incident Response
├── Change and Release Management
└── Vendor/Platform Support coordination

OUTSOURCED MODEL
└── Approved managed-service provider users with limited tenant/branch/time scope
```

The role structure need not match a formal employee department for small tenants, but responsibilities and permissions remain separate.

## Platform vs tenant responsibility

### Platform SaaS Operations

Owned by platform roles:

- SaaS infrastructure and application availability;
- platform deployments and global maintenance;
- platform-wide security and incident response;
- tenant provisioning and platform billing;
- global integrations/connectors;
- support tooling and service status;
- platform backup/recovery.

### Tenant IT Operations

Owned by tenant IT roles:

- tenant users/access requests within owner policy;
- branch workstations and local devices;
- printer/print-agent enrollment and support;
- tenant integration configuration and health;
- tenant technical incidents and service requests;
- tenant-approved changes and maintenance;
- tenant knowledge/runbooks;
- branch connectivity and local operational continuity;
- vendor coordination;
- escalation to platform support.

### Shared responsibility

- identity recovery;
- integration/provider incidents;
- security investigations;
- data export/restore requests;
- agent/connector updates;
- major outage communication;
- complex print failures.

Shared actions require clear owner, handoff, evidence, and audit.

## Canonical IT roles

### 1. Tenant IT Manager / IT Administrator

- Owns tenant IT operating model, policy, queue, priorities, vendors, and reporting.
- Approves device/printer/integration onboarding within authority.
- Assigns IT roles and on-call schedules subject to owner controls.
- Coordinates major incidents and changes.
- Does not override owner-only business, financial, or subscription authority.

### 2. Service Desk Analyst

- Receives staff requests and incidents.
- Verifies requester, impact, urgency, category, and affected service.
- Uses knowledge/runbooks and safe remote diagnostics.
- Resolves or escalates.
- Cannot grant privileged access or publish high-risk changes without approval.

### 3. Systems and Integration Administrator

- Manages tenant technical configuration, connectors, webhooks, email/SMS/payment/accounting integrations, health, mappings, credentials references, and reconciliation.
- Uses secrets through approved references only.
- Cannot view business records beyond the minimum required diagnostic context.

### 4. Endpoint and Printer Administrator

- Manages workstations, local print agents, printers, labels, scanners, and approved peripherals.
- Maintains compatibility records, drivers/IPP paths, assignments, health, maintenance, and support.
- Cannot use device control to access unrelated files or customer records.

### 5. Security and Incident Responder

- Handles security alerts, containment, evidence, recovery coordination, and post-incident actions.
- May receive emergency time-limited elevated access according to policy.
- Evidence access is restricted, purpose-bound, and audited.

### 6. Change and Release Manager

- Reviews change requests, dependencies, risk, test evidence, schedule, communications, approvals, deployment, validation, and rollback.
- Maintains change calendar and conflict detection.
- Emergency changes receive retrospective review.

### 7. IT Auditor / Read-Only Reviewer

- Reviews configuration history, incidents, changes, assets, access, print/agent records, and compliance evidence.
- Cannot execute, approve, or alter operations.

### 8. IT Vendor / Managed Service Provider

- Time-bound, contract-bound, branch/service-specific access.
- Sees only assigned tickets/assets and approved diagnostics.
- Cannot browse tenant data.

## Owner and business-role relationship

### Tenant Owner

- Approves IT policies, critical vendors, high-risk changes, emergency access, budget, and major incident communications.
- Sees service health, risk, business impact, support trends, costs, and unresolved approvals.
- Does not need raw logs by default.

### Branch Manager

- Reports branch issues.
- Sees branch incident status, workarounds, planned maintenance, and local device/printer status.
- Approves branch downtime or hardware changes within authority.

### Ordinary staff

- Use `Get help`, contextual troubleshooting, request forms, incident status, knowledge, and notifications.
- Do not enter the full IT admin application unless assigned an IT role.

## Service taxonomy

```text
ACCESS AND IDENTITY
WORKSTATION / ENDPOINT
PRINTER / LABEL / SCANNER / PERIPHERAL
APPLICATION FUNCTION
INTEGRATION / API / WEBHOOK
PAYMENT / FINANCIAL PROVIDER TECHNICAL ISSUE
EMAIL / SMS / NOTIFICATION DELIVERY
NETWORK / CONNECTIVITY
FILE / STORAGE / DOCUMENT
SECURITY / SUSPICIOUS ACTIVITY
DATA / REPORT / EXPORT
BACKUP / RESTORE / CONTINUITY
CHANGE / RELEASE / MAINTENANCE
TRAINING / HOW-TO
OTHER CONTROLLED CATEGORY
```

## Priority model

Priority derives from impact and urgency, not requester seniority alone.

```text
P1 CRITICAL
- tenant/large branch unable to operate
- security compromise or serious data risk
- payment/release blocked across operations
- widespread print/identity/integration outage with no safe workaround

P2 HIGH
- major business function degraded
- multiple users/branch affected
- critical staff workflow has limited workaround

P3 MEDIUM
- one user/device or noncritical service affected
- reasonable workaround exists

P4 LOW
- information, training, planned request, cosmetic issue, nonurgent improvement
```

Each priority has approved response, update, escalation, and resolution targets from the measurable target register. No untested SLA claim is made.

## Record types and lifecycles

### Service Request

```text
DRAFT → SUBMITTED → TRIAGED → APPROVED if required → IN_PROGRESS
→ FULFILLED → USER_VALIDATION → CLOSED
```

### Incident

```text
DETECTED/REPORTED → TRIAGED → ASSIGNED → INVESTIGATING
→ MITIGATING → MONITORING → RESOLVED → REVIEWED → CLOSED
```

Exception states: awaiting user, vendor, platform, change, parts, maintenance window, or security review.

### Problem

```text
IDENTIFIED → INVESTIGATING → ROOT_CAUSE_KNOWN
→ WORKAROUND_AVAILABLE → PERMANENT_FIX_PLANNED
→ FIX_IMPLEMENTED → VERIFIED → CLOSED
```

### Change

```text
DRAFT → ASSESSMENT → TECHNICAL_REVIEW → RISK_REVIEW
→ APPROVAL → SCHEDULED → IMPLEMENTING → VALIDATING
→ COMPLETED / ROLLED_BACK / FAILED → REVIEWED → CLOSED
```

### Asset

```text
PROPOSED → APPROVED → ORDERED/RECEIVED → ENROLLED
→ ACTIVE → MAINTENANCE → RETIRED → DISPOSED
```

## Separation of duties

- Requester cannot approve their own protected access/change where policy prohibits it.
- Change implementer and approver are separate for high-risk changes.
- Security evidence reviewer and subject user may require separation.
- Printer/device administrator cannot use test tools to print protected production documents without document permission.
- Service Desk cannot reveal passwords, secrets, passcodes, or protected records.
- Platform Support cannot enter tenant context without approved support access.

## Scope boundaries

Included:

- service desk;
- incidents/problems/changes;
- workstations/printers/peripherals;
- tenant integrations;
- access requests;
- monitoring/alerts;
- releases/maintenance;
- backup/restore coordination;
- knowledge/runbooks;
- vendors/platform support;
- IT reports/audit.

Excluded or separately governed:

- source-code development itself;
- platform infrastructure administration by tenant IT;
- unrestricted employee monitoring;
- unrestricted remote desktop/control;
- business approvals unrelated to technical operations;
- financial/HR/customer content beyond authorized diagnostic context;
- public security vulnerability disclosure process unless separately approved.

## Plan/entitlement boundary

- Basic staff help and support request capability belongs to the core SaaS experience.
- Advanced IT Operations screens, asset fleet, monitoring, managed print, SSO, API/integration operations, extended retention, or premium support may be plan-controlled through entitlements.
- Entitlement never replaces role/permission/scope checks.
- Security response and data-protection controls cannot be weakened by a lower plan.

## Governance approvals

Potential approval authorities:

- Tenant Owner;
- IT Manager;
- Security approver;
- Finance approver for cost/provider changes;
- Branch Manager for branch downtime;
- Change Control Board for high-risk changes;
- Platform Support/Security for platform-impacting actions.

## Acceptance criteria

- Every technical operation has owner, scope, lifecycle, evidence, and audit.
- Staff have a simple request/status/help path.
- Owners see business impact and approvals.
- IT sees technical detail without blanket business-data access.
- Platform and tenant responsibilities are explicit.
- Incidents, changes, printer operations, and support access are connected rather than separate notes.
