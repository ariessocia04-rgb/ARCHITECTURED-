# IT OPERATIONS APPLICATION — MASTER INDEX

## Purpose

The IT Operations Application is the tenant technical-operations workspace for supporting staff, workstations, printers, integrations, identities, monitoring, incidents, changes, releases, assets, knowledge, vendors, continuity, and technical audit.

It does not replace the Platform Super Administrator or Platform Support Administrator. Platform teams operate the SaaS service; tenant IT teams operate the tenant's approved technical environment and receive controlled support from the platform.

## Authority

- Master authority: `1plan.md`.
- Application entry authority: `Applications/README.md`.
- Canonical role authority: `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`.
- Printing authority: `SaaS Platform/Printing and Peripheral Operations/INDEX.md`.
- Security/API/NFR authority: relevant `SaaS Platform/` contracts.
- Design authority: `Design/README.md`.
- Implementation authority: `TECA/IMPLEMENTATION_BUILD_PLAN.md`.

## Arrangement mode

`DECOMPOSED APPLICATION ARCHITECTURE MODE`

## Required reading order

```text
1plan.md
→ Applications/README.md
→ this INDEX.md
→ Volume 1 Scope and Governance
→ Volume 2 Functional and Experience Architecture
→ Volume 3 Data and Integration Architecture
→ Volume 4 Wireframe and Wireflow
→ Volume 5 Security Quality and Delivery
→ relevant shared contracts and applications
→ TECA implementation build plan
→ current branch/PR/worker evidence
```

## Physical structure

1. [Scope and Governance](Volume%201%20-%20Scope%20and%20Governance/architecture.md)
2. [Functional and Experience Architecture](Volume%202%20-%20Functional%20and%20Experience%20Architecture/functional_experience.md)
3. [Data and Integration Architecture](Volume%203%20-%20Data%20and%20Integration%20Architecture/data_integration.md)
4. [IT Operations Wireframe Architecture](Volume%204%20-%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
5. [IT Operations Wireflow Architecture](Volume%204%20-%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
6. [Screen Traceability Matrix](Volume%204%20-%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)
7. [Security, Quality, and Delivery](Volume%205%20-%20Security%20Quality%20and%20Delivery/security_quality_delivery.md)
8. [Completion Record](COMPLETION_RECORD.md)

## Application modules

```text
IT OPERATIONS APPLICATION
├── Header
│   ├── Tenant / Branch / Environment Context
│   ├── Global Search
│   ├── Critical Incident Indicator
│   ├── On-Call / Shift Status
│   ├── Notifications
│   └── User Profile
├── Sidebar
│   ├── 1. IT Operations Dashboard
│   ├── 2. Service Desk
│   ├── 3. Incidents
│   ├── 4. Problems and Root Cause
│   ├── 5. Changes and Approvals
│   ├── 6. Assets, Workstations, and Devices
│   ├── 7. Printers and Peripherals
│   ├── 8. Identity and Access Requests
│   ├── 9. Integrations and Credentials
│   ├── 10. Monitoring and Alerts
│   ├── 11. Releases, Deployments, and Maintenance
│   ├── 12. Backup, Recovery, and Continuity
│   ├── 13. Knowledge Base and Runbooks
│   ├── 14. Vendors and Platform Support
│   ├── 15. Reports, Audit, and Compliance
│   ├── 16. IT Policies and Settings
│   ├── 17. Profile and On-Call
│   └── 18. Logout
└── Main Workspace
    ├── Work Queue
    ├── Record Workspace
    ├── Timeline
    ├── Impact and Dependency View
    ├── Approvals
    ├── Diagnostics
    ├── Runbook Execution
    ├── Communications
    └── Evidence and Audit
```

## Primary users

- Tenant IT Manager / IT Administrator;
- Service Desk Analyst;
- Systems and Integration Administrator;
- Endpoint and Printer Administrator;
- Security and Incident Responder;
- Change and Release Manager;
- Tenant Owner / Business Owner;
- Branch Manager as requester/approver/viewer;
- Auditor / Read-Only Reviewer;
- Platform Support Administrator through approved support access;
- ordinary staff through simplified request/status/help surfaces, not the full IT application.

## Boundary rules

- IT staff do not automatically receive unrestricted customer, device, repair, finance, HR, or business data.
- Technical diagnostics use minimized metadata and support references.
- Platform support access is tenant-approved, time-limited, scoped, visible, and audited.
- IT changes cannot bypass owner, security, finance, workflow, or release approvals.
- Service restoration is prioritized during incidents, followed by root-cause and corrective work.
- Printer/peripheral operations reference the canonical Printing package rather than duplicating it.
- Business applications expose simple `Get help` and status UX; complex diagnostics stay inside IT Operations.

## Status

```text
IT OPERATIONS APPLICATION ARCHITECTURE: COMPLETE WHEN ALL LINKED VOLUMES PASS VALIDATION
LOW-FIDELITY WIREFRAME/WIREFLOW: INCLUDED IN THIS PACKAGE
HIGH-FIDELITY UI/PROTOTYPE: SEPARATE DESIGN EXECUTION
APPLICATION CODE: NOT CREATED BY THIS PACKAGE
IMPLEMENTATION AUTHORIZED: NO
```
