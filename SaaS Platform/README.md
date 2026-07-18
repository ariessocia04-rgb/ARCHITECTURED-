# SHARED SAAS PLATFORM ARCHITECTURE — MASTER INDEX

## PURPOSE

This folder contains the canonical shared architecture used by the Owner Application, Front Desk Application, Technician Application, Customer Portal, platform administration, integrations, and operations.

Application documents must reference these contracts rather than duplicate them.

## ARCHITECTURE DOCUMENTS

1. [User, Role, and Workflow Architecture](USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md)
   - Multi-tenant hierarchy, users, roles, access, lifecycle, service flow, subscription, security, and integrations.

2. [Global System Contract Layer](GLOBAL_SYSTEM_CONTRACT_LAYER.md)
   - Context envelope, identifiers, ownership, lifecycle, versions, requests, responses, errors, events, files, finance, inventory, audit, and integrations.

3. [Multi-Tenant Data and Entity Architecture](MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md)
   - Domains, entities, ownership classes, data classification, snapshots, retention, search, cache, and analytics.

4. [Database Relationship and Ownership Model](DATABASE_RELATIONSHIP_AND_OWNERSHIP_MODEL.md)
   - Logical keys, relationships, uniqueness, referential behavior, transaction boundaries, history, and indexing.

5. [API, Event, Webhook, and Real-Time Contract](API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md)
   - Commands, queries, versioning, idempotency, events, webhooks, real-time topics, offline recovery, jobs, and reconciliation.

6. [Authentication, Authorization, and Session Contract](AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md)
   - Identity, invitation, authentication, MFA, permissions, scope, sessions, support access, contractors, and customer access.

7. [Subscription, Entitlement, Usage, and Tenant Lifecycle Contract](SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md)
   - Plans, entitlements, limits, billing lifecycle, suspension, reactivation, cancellation, export, closure, and deletion.
   - [Free, Pro, and Premium Plans and Billing Package](Plans%20and%20Billing/INDEX.md) — decomposed implementation-ready detail for exact plan catalog/versioning, entitlements, limits, lifecycle, schema, APIs/events/webhooks, provider adapter, metering, 24 low-fidelity screens, 20 wireflows, security, tests, rollout, rollback, and Codex sequence.

8. [Notification and Communication Contract](NOTIFICATION_AND_COMMUNICATION_CONTRACT.md)
   - Channels, templates, consent, preferences, delivery, retries, fallback, messaging, security, analytics, and retention.

9. [Payment, Invoice, Refund, and Financial Control Contract](PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md)
   - Quotations, invoices, deposits, payments, receipts, refunds, tax, reconciliation, approvals, and financial security.

10. [File, Media, Document, QR, and Barcode Contract](FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md)
     - Upload, validation, storage, evidence, signatures, generated documents, exports, codes, scanning, and retention.

11. [Audit, Retention, Backup, Recovery, and Incident Contract](AUDIT_RETENTION_BACKUP_RECOVERY_AND_INCIDENT_CONTRACT.md)
     - Immutable audit, retention, legal hold, archive, deletion, backup, restore, continuity, incidents, and drills.

12. [Cross-Application Workflow and Handoff Matrix](CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md)
     - Responsibility and handoffs among Owner, Front Desk, Technician, Customer Portal, Finance, Inventory, and shared services.

13. [Non-Functional Requirements](NON_FUNCTIONAL_REQUIREMENTS.md)
     - Reliability, performance, scale, security, privacy, accessibility, tenant isolation, observability, maintainability, testing, and operational readiness.

14. [Development Readiness Audit](DEVELOPMENT_READINESS_AUDIT.md)
     - Architecture completion, consistency, implementation-planning gates, coding entry gate, and risk register.

## DECOMPOSED DETAIL PACKAGES

### Plans and Billing

Canonical entry: [Plans and Billing Index](Plans%20and%20Billing/INDEX.md)

```text
PLANS: FREE / PRO / PREMIUM
ARCHITECTURE FILES PLUS INDEX/RECORD: COMPLETE
LOW-FIDELITY SUBSCRIPTION/BILLING SCREENS: 24 OF 24
DETAILED WIREFLOWS: 20 OF 20
DATA / API / EVENT / WEBHOOK / METERING: COMPLETE AS SPECIFICATION
SECURITY / TEST / RELEASE / ROLLBACK / IMPLEMENTATION SEQUENCE: COMPLETE AS PLAN
LIVE PRICE PUBLICATION / PROVIDER SELECTION / CODE / EXECUTED TESTS / DEPLOYMENT: SEPARATE GATED STATUS
```

This package specializes Contract 7 and references the finance, API, data, authentication, audit, NFR, and Design authorities. It is not a competing shared contract or duplicate global design source.

## DEPENDENCY ORDER

```text
User, Role, and Workflow Architecture
↓
Global System Contract Layer
↓
Data and Database Ownership Architecture
↓
API, Event, Authentication, Subscription, Communication, Finance, File, and Audit Contracts
↓
Approved Decomposed Detail Packages such as Plans and Billing
↓
Cross-Application Handoff Matrix
↓
Non-Functional Requirements
↓
Development Readiness Audit
```

## GOVERNANCE

- One canonical file per shared concern.
- No copied contract definitions inside application documents.
- A decomposed detail package must point to its parent shared contract and must not republish another contract as competing authority.
- Breaking changes require versioning, migration, and synchronized updates to dependent files.
- `1plan.md`, root `README.md`, `index.md`, `MASTER_AUDIT.md`, `FINAL_ARCHITECTURE_VERIFICATION.md`, `duplicate.md`, and `revise.md` must remain synchronized after approved repository-wide publication.
- No coding is included in this folder.

## STATUS

- Shared architecture documents complete: 14 of 14.
- Plans and Billing decomposed detail package: COMPLETE AS ARCHITECTURE SPECIFICATION.
- Missing shared documents: 0.
- Accidental duplicate shared documents: 0.
- Current shared SaaS architecture upload: 100%.
- Implementation authorization: NO unless exact scoped `implementation_authorized=true` is approved.

**SHARED SAAS PLATFORM ARCHITECTURE AND FREE / PRO / PREMIUM DETAIL PACKAGE COMPLETE AS DOCUMENTED SPECIFICATION**
