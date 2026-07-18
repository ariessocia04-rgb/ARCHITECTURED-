# MULTI-COMPANY — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
Company, CompanyProfile, LegalEntityReference, CurrencyPolicy, TaxPolicy, BrandingProfile, CompanyMembership, GroupRole, CrossCompanyGrant, SharedServiceAgreement, DataSharingPolicy, IntercompanyRequest, IntercompanyTransaction, IntercompanyLine, OwnershipReference, ResidencyPolicy, ConsolidationSnapshot, EliminationInput, CompanyMigrationCase, CompanyClosureCase.

## Rules
Company ID is mandatory on company-owned records. Cross-company reads/writes require explicit policy and grant. Intercompany transactions have independent source/destination approvals, mirrored references, currencies/rates, tax/accounting treatment, idempotency, and reconciliation. Historical company ownership is immutable.

## APIs
Create/configure/activate/restrict/close company; manage membership/grants/shared services; switch authorized company context; validate access; create/approve/reject/execute/reconcile/reverse intercompany request; query company/group summary; manage residency; export/migrate/close.

## Events
`company.created`, `company.activated`, `company.restricted`, `company.membership_changed`, `cross_company_grant.approved`, `intercompany.requested`, `intercompany.approved`, `intercompany.executed`, `intercompany.reconciled`, `company.migration_started`, `company.closed`.

## Integrations
Accounting/Finance, HR, Inventory/Warehouse, Customers/Jobs, Multi-Branch, Authorization, Subscription, Notifications, Files, BI, Admin Portal, Public API. Versioned contracts, outbox/inbox, company scope, idempotency, reconciliation, no direct private-table writes.

## Migration/residency
Preserve company IDs and ownership; validate region/residency; encrypt transfer; maintain compatibility window; rehearse migration; reconcile counts/balances/references; rollback or forward recovery; audit every data movement.