# PLANS AND BILLING — CANONICAL ARCHITECTURE INDEX

## Authority

- Master source: `1plan.md`.
- Parent contract: `SaaS Platform/SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md`.
- Financial dependency: `SaaS Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md`.
- Data dependency: `SaaS Platform/MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md`.
- API dependency: `SaaS Platform/API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md`.
- Design dependencies: `Design/WIREFRAME_ARCHITECTURE.md`, `Design/WIREFLOW_ARCHITECTURE.md`, and `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`.
- Build authority: `TECA/IMPLEMENTATION_BUILD_PLAN.md`.

This package is the implementation-ready architecture specification for the Free, Pro, and Premium SaaS plans. It does not authorize coding. Exact coding requires `implementation_authorized=true` for the assigned slice.

## Required reading order

```text
1plan.md
→ SaaS Platform/README.md
→ Subscription, Entitlement, Usage, and Tenant Lifecycle Contract
→ this INDEX.md
→ selected architecture volume
→ relevant shared contracts
→ relevant Design sources
→ TECA implementation build plan
→ current branch, PR, commit, and active-worker evidence
```

## Physical structure

1. [Research Source Registry](00.%20Research%20and%20Authority/RESEARCH_SOURCE_REGISTRY.md)
2. [Plan Catalog and Versioning](01.%20Commercial%20Plan%20Catalog/PLAN_CATALOG_AND_VERSIONING.md)
3. [Free Plan](01.%20Commercial%20Plan%20Catalog/FREE_PLAN.md)
4. [Pro Plan](01.%20Commercial%20Plan%20Catalog/PRO_PLAN.md)
5. [Premium Plan](01.%20Commercial%20Plan%20Catalog/PREMIUM_PLAN.md)
6. [Feature, Entitlement, and Usage Matrix](01.%20Commercial%20Plan%20Catalog/FEATURE_ENTITLEMENT_AND_USAGE_MATRIX.md)
7. [Subscription Lifecycle and State Machine](02.%20Lifecycle%20and%20Business%20Rules/SUBSCRIPTION_LIFECYCLE_AND_STATE_MACHINE.md)
8. [Upgrade, Downgrade, Renewal, and Cancellation](02.%20Lifecycle%20and%20Business%20Rules/UPGRADE_DOWNGRADE_RENEWAL_CANCELLATION.md)
9. [Past Due, Suspension, Reactivation, and Closure](02.%20Lifecycle%20and%20Business%20Rules/PAST_DUE_SUSPENSION_REACTIVATION_CLOSURE.md)
10. [Data Model and Physical Schema Specification](03.%20Data%20and%20Integration/DATA_MODEL_AND_PHYSICAL_SCHEMA_SPEC.md)
11. [API, Event, Webhook, and Provider Adapter Specification](03.%20Data%20and%20Integration/API_EVENT_WEBHOOK_PROVIDER_ADAPTER_SPEC.md)
12. [Metering, Quota, Reconciliation, and Audit](03.%20Data%20and%20Integration/METERING_QUOTA_RECONCILIATION_AND_AUDIT.md)
13. [Subscription Wireframe Architecture](04.%20Wireframe%20and%20Wireflow/WIREFRAME_ARCHITECTURE.md)
14. [Subscription Wireflow Architecture](04.%20Wireframe%20and%20Wireflow/WIREFLOW_ARCHITECTURE.md)
15. [Screen Traceability Matrix](04.%20Wireframe%20and%20Wireflow/SCREEN_TRACEABILITY_MATRIX.md)
16. [Security, Privacy, NFR, and Threat Model](05.%20Security%20Quality%20and%20Delivery/SECURITY_PRIVACY_NFR_AND_THREAT_MODEL.md)
17. [Test, Acceptance, Release, and Rollback](05.%20Security%20Quality%20and%20Delivery/TEST_ACCEPTANCE_RELEASE_AND_ROLLBACK.md)
18. [Implementation Sequence](05.%20Security%20Quality%20and%20Delivery/IMPLEMENTATION_SEQUENCE.md)
19. [Completion Record](COMPLETION_RECORD.md)

## Architecture boundaries

- Plan names are commercial labels; access is controlled by versioned entitlements and limits.
- Provider billing objects never become the only authorization source.
- Internal entitlement snapshots are the server-side access authority.
- Payment providers are isolated behind an adapter and can be replaced.
- Upgrades never create a new tenant or duplicate tenant data.
- Downgrades never silently delete users, branches, companies, jobs, files, invoices, audit records, or configuration.
- Usage enforcement cannot break completion of active repair, payment, release, warranty, export, security, or closure workflows.
- Frontend visibility is not authorization; backend, jobs, APIs, exports, search, webhooks, and realtime channels enforce the same policy.

## Status

```text
FREE / PRO / PREMIUM PLAN ARCHITECTURE: COMPLETE AS SPECIFICATION
PLAN VERSIONING AND PRICE-BOOK MECHANICS: COMPLETE
ENTITLEMENT AND USAGE ENFORCEMENT: COMPLETE
SUBSCRIPTION AND BILLING LIFECYCLE: COMPLETE
DATA / API / EVENT / WEBHOOK CONTRACTS: COMPLETE
LOW-FIDELITY WIREFRAMES: COMPLETE AS DOCUMENTED SCREEN SPECIFICATIONS
WIREFLOWS AND FAILURE PATHS: COMPLETE
SECURITY / TEST / RELEASE / ROLLBACK REQUIREMENTS: COMPLETE
HIGH-FIDELITY VISUAL DESIGN: SEPARATE DESIGN EXECUTION
APPLICATION CODE AND EXECUTED TESTS: NOT CREATED BY THIS PACKAGE
IMPLEMENTATION AUTHORIZED: NO
```
