# IT AND CROSS-DEPARTMENT ROLE EXTENSION

## Authority and boundary

This file extends `USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md` only for the newly decomposed IT Operations and Cross-Department Operating Fabric. Existing role definitions remain authoritative and are not duplicated here.

## Additional canonical tenant IT roles

### Tenant IT Manager / IT Administrator

Owns tenant technical operations, service catalog, service desk, incidents, changes, assets, printers, integrations, monitoring, vendors, policies, and reporting within owner-approved scope.

### Service Desk Analyst

Receives, triages, resolves, communicates, or escalates staff technical requests and incidents using minimum necessary context.

### Systems and Integration Administrator

Manages approved tenant connectors, mappings, credentials references, health, retries, reconciliation, and technical provider coordination.

### Endpoint and Printer Administrator

Manages tenant workstations, printers, peripherals, local print agents, compatibility, assignments, maintenance, and technical support without blanket business-document access.

### Security and Incident Responder

Coordinates security/major incident containment, evidence, recovery, and corrective actions through restricted, audited access.

### Change and Release Manager

Controls change assessment, approval, schedule, implementation, validation, communication, rollback, and review.

## Cross-department responsibilities

Every user may participate in an end-to-end process through one or more responsibility types:

```text
RESPONSIBLE
ACCOUNTABLE
CONSULTED
INFORMED
```

Assignment does not grant access beyond the user's tenant, company, branch, department, application, record, field, and approval authority.

## Application access additions

```text
Tenant IT roles
└── IT Operations Application

All authorized internal staff
├── My Cross-Department Work
├── Process Header / Linked Work
├── Assigned Handoffs / Tasks / Approvals
└── Contextual Get Help

Owner / Managers
└── Cross-Department Command Center and Governance Dashboards

Customer / Supplier / Vendor
└── scoped portal process tasks, documents, and timelines only
```

## Separation of duties

- IT roles do not gain automatic customer, finance, HR, repair, or owner-only access.
- A department cannot complete another department's authoritative task or record.
- Protected approvals apply the existing conflict and self-approval rules.
- Small tenants may assign multiple roles to one user only where separation policy permits.
- Platform Support remains separate from tenant IT and uses approved time-limited support access.

## Status

```text
IT ROLE EXTENSION: COMPLETE
CROSS-DEPARTMENT PARTICIPATION MODEL: COMPLETE
EXISTING CANONICAL ROLE DEFINITIONS REPLACED: NO
```
