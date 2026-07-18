# MULTI-COMPANY INTEGRATION ARCHITECTURE

## Purpose and boundary

Allow a tenant group or platform customer to operate multiple legal companies with separate books, tax, users, policies, customers, inventory, and reporting while reusing the same SaaS architecture.

## Ownership

Each company owns its legal and financial records. Group scope owns approved shared services and consolidated views. Platform remains tenant-isolated.

## Core entities

Company, LegalEntity, CompanyMembership, CompanyPolicy, CompanyLedgerLink, CompanyTaxProfile, IntercompanyAgreement, IntercompanyTransaction, ConsolidationRule, SharedServiceGrant.

## Lifecycle

Draft → Verified → Active → Restricted / Suspended → Closing → Closed / Archived.

## Integration points

Identity, authorization, branches, customers, suppliers, vendors, warehouses, finance, accounting, HR, CRM, AI, reporting, and intercompany services.

## Events

`company.created`, `company.verified`, `user.company_assigned`, `intercompany.transaction_created`, `company.policy_changed`, `company.closed`, `consolidation.generated`.

## Compatibility rules

- Single-company tenants require no migration behavior change.
- Every company-owned record has immutable company scope.
- Cross-company sharing requires explicit grant and purpose.
- Intercompany transactions create paired records; no hidden cross-company write.
- Consolidation is a derived read model, not a rewrite of source ledgers.

## Roles and controls

Group Owner, Company Owner, Company Admin, Group Finance, Company Finance, Security Auditor, Consolidation Reviewer.

## UI/UX

Visible company context, authorized company switcher, confirmation before cross-company action, separate and consolidated reports, clear legal-entity labels.

## Reports

Company statements, consolidated statements, intercompany balances, shared-service charges, company performance, access and policy differences.

## Acceptance

Company isolation, legal retention, explicit sharing, paired intercompany entries, single-company compatibility, no cross-company leakage, complete audit and closure plan.

**STATUS: COMPLETE (100%)**
