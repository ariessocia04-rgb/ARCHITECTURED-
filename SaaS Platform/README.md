# SHARED SAAS PLATFORM ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical shared architecture used by the Owner, Front Desk, Technician, Customer Portal, IT Operations, ROS/future departments, platform administration, integrations, printing, and cross-department operations.

Application documents reference these contracts and decomposed detail packages rather than duplicate them.

## CORE ARCHITECTURE DOCUMENTS

1. [User, Role, and Workflow Architecture](USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md)
   - Multi-tenant hierarchy, canonical users/roles, access, lifecycle, repair flow, subscription, security, and integrations.
   - [IT and Cross-Department Role Extension](IT_AND_CROSS_DEPARTMENT_ROLE_EXTENSION.md) — additional IT roles and shared Responsible/Accountable/Consulted/Informed participation without replacing existing roles.

2. [Global System Contract Layer](GLOBAL_SYSTEM_CONTRACT_LAYER.md)
   - Context envelope, identifiers, ownership, lifecycle, versions, requests, responses, errors, events, files, finance, inventory, audit, and integrations.

3. [Multi-Tenant Data and Entity Architecture](MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md)
   - Domains, entities, ownership classes, data classification, snapshots, retention, search, cache, and analytics.

4. [Database Relationship and Ownership Model](DATABASE_RELATIONSHIP_AND_OWNERSHIP_MODEL.md)
   - Logical keys, relationships, uniqueness, referential behavior, transaction boundaries, history, and indexing.

5. [API, Event, Webhook, and Real-Time Contract](API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md)
   - Commands, queries, versioning, idempotency, events, webhooks, realtime topics, offline recovery, jobs, and reconciliation.

6. [Authentication, Authorization, and Session Contract](AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md)
   - Identity, invitation, authentication, MFA, permissions, scope, sessions, support access, contractors, and customer access.

7. [Subscription, Entitlement, Usage, and Tenant Lifecycle Contract](SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md)
   - Plans, entitlements, limits, billing lifecycle, suspension, reactivation, cancellation, export, closure, and deletion.
   - [Free, Pro, and Premium Plans and Billing Package](Plans%20and%20Billing/INDEX.md) — exact plan catalog/versioning, entitlements, limits, lifecycle, schema, APIs/events/webhooks, provider adapter, metering, 24 screens, 20 wireflows, security, tests, rollout, rollback, and implementation sequence.

8. [Notification and Communication Contract](NOTIFICATION_AND_COMMUNICATION_CONTRACT.md)
   - Channels, templates, consent, preferences, delivery, retries, fallback, messaging, security, analytics, and retention.

9. [Payment, Invoice, Refund, and Financial Control Contract](PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md)
   - Quotations, invoices, deposits, payments, receipts, refunds, tax, reconciliation, approvals, and financial security.

10. [File, Media, Document, QR, and Barcode Contract](FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md)
    - Upload, validation, storage, evidence, signatures, generated documents, exports, codes, scanning, and retention.
    - [Printing and Peripheral Operations Package](Printing%20and%20Peripheral%20Operations/INDEX.md) — printer classes/connections/capabilities, rendering, print jobs/queue/spooler, thermal ESC/POS, page/native/IPP/cloud paths, local agent, security, 20 screens, 16 flows, hardware certification, rollout, and implementation sequence.

11. [Audit, Retention, Backup, Recovery, and Incident Contract](AUDIT_RETENTION_BACKUP_RECOVERY_AND_INCIDENT_CONTRACT.md)
    - Immutable audit, retention, legal hold, archive, deletion, backup, restore, continuity, incidents, and drills.

12. [Cross-Application Workflow and Handoff Matrix](CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md)
    - Core responsibility and handoffs among Owner, Front Desk, Technician, Customer Portal, Finance, Inventory, and shared services.
    - [Cross-Department Operating Fabric](Cross-Department%20Operating%20Fabric/INDEX.md) — decomposed detail connecting all current/future departments through end-to-end processes, tasks, handoffs, approvals, timeline, notifications, blockers, documents, APIs/events, owner oversight, 20 screens, and 16 flows.

13. [Non-Functional Requirements](NON_FUNCTIONAL_REQUIREMENTS.md)
    - Reliability, performance, scale, security, privacy, accessibility, tenant isolation, observability, maintainability, testing, and operational readiness.

14. [Development Readiness Audit](DEVELOPMENT_READINESS_AUDIT.md)
    - Architecture completion, consistency, implementation-planning gates, coding entry gate, and risk register.

The core shared-contract count remains 14. Decomposed packages specialize parent contracts and do not become competing copies.

## DECOMPOSED DETAIL PACKAGES

### Plans and Billing

Canonical entry: [Plans and Billing Index](Plans%20and%20Billing/INDEX.md)

```text
FREE / PRO / PREMIUM ARCHITECTURE: COMPLETE AS SPECIFICATION
LOW-FIDELITY SCREENS: 24
WIREFLOWS: 20
CODE / EXECUTED TESTS / DEPLOYMENT: SEPARATE GATED STATUS
```

### Printing and Peripheral Operations

Canonical entry: [Printing and Peripheral Operations Index](Printing%20and%20Peripheral%20Operations/INDEX.md)

```text
THERMAL RECEIPT / A4-LETTER PAGE / LABEL ARCHITECTURE: COMPLETE
DEVICE/CONNECTION/CAPABILITY/LOCAL-AGENT/QUEUE/SECURITY: COMPLETE AS SPECIFICATION
LOW-FIDELITY SCREENS: 20
WIREFLOWS: 16
PHYSICAL SUPPORT CLAIM: REQUIRES HARDWARE/OS/ADAPTER TEST EVIDENCE
```

### Cross-Department Operating Fabric

Canonical entry: [Cross-Department Operating Fabric Index](Cross-Department%20Operating%20Fabric/INDEX.md)

```text
CONNECTED DEPARTMENTS AND EXTERNAL PARTICIPANTS: COMPLETE AS SPECIFICATION
END-TO-END PROCESS FAMILIES: 12
SHARED TASK/HANDOFF/APPROVAL/TIMELINE/DATA/API/EVENT: COMPLETE
LOW-FIDELITY SCREENS: 20
WIREFLOWS: 16
DOMAIN OWNERSHIP REPLACED: NO
```

## DEPENDENCY ORDER

```text
User, Role, and Workflow Architecture + Role Extension
↓
Global System Contract Layer
↓
Data and Database Ownership Architecture
↓
API, Event, Authentication, Subscription, Communication, Finance, File, and Audit Contracts
↓
Approved Decomposed Detail Packages:
Plans and Billing / Printing / Cross-Department Operating Fabric
↓
Application and Future-Module Architecture including IT Operations
↓
Non-Functional Requirements
↓
Development Readiness and controlled implementation planning
```

## GOVERNANCE

- One canonical file per shared concern.
- No copied contract definitions inside application documents.
- A decomposed detail package points to its parent contract and does not republish another contract as competing authority.
- Domain applications remain authoritative for their own records/actions; the Cross-Department package coordinates only.
- Printer support is adapter/capability/test-driven; no unsupported universal-printer claim.
- Breaking changes require versioning, migration, synchronized dependent updates, validation, and rollback.
- `1plan.md`, root indexes, relevant application/design indexes, audits, duplicate/revision evidence, and completion records remain synchronized after publication.
- No coding is included in this folder.

## STATUS

```text
CORE SHARED ARCHITECTURE DOCUMENTS: 14 OF 14 COMPLETE
PLANS AND BILLING DETAIL PACKAGE: COMPLETE AS SPECIFICATION
PRINTING AND PERIPHERAL OPERATIONS DETAIL PACKAGE: COMPLETE AS SPECIFICATION
CROSS-DEPARTMENT OPERATING FABRIC DETAIL PACKAGE: COMPLETE AS SPECIFICATION
IT ROLE EXTENSION: COMPLETE
MISSING CORE SHARED DOCUMENTS: 0
ACCIDENTAL DUPLICATE SHARED AUTHORITIES: 0 AFTER VALIDATION
IMPLEMENTATION AUTHORIZATION: NO UNLESS EXACT SCOPED implementation_authorized=true
```

**THE SHARED SAAS PLATFORM NOW CONNECTS PLANS/BILLING, DOCUMENTS/PRINTING, IT OPERATIONS, AND ALL DEPARTMENTS THROUGH VERSIONED CONTRACTS AND END-TO-END OPERATING PROCESSES WHILE PRESERVING DOMAIN AUTHORITY.**
