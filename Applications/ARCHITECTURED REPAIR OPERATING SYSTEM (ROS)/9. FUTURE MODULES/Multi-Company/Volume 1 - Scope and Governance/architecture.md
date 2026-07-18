# MULTI-COMPANY — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Allow one authorized tenant group to operate multiple legal or operational companies with independent ledgers, currencies, taxes, branches, users, policies, branding, inventory ownership, contracts, reports, data residency, and controlled intercompany activity.

## Boundaries
Company is a stronger boundary than branch. A company owns its legal, financial, tax, inventory, employment, customer-contract, and operational records unless an explicit shared-service or intercompany contract applies. Multi-Company never treats separate companies as one undifferentiated dataset.

## Personas
Group Owner, Group Administrator, Company Owner/Administrator, Company Finance Manager, Company HR Manager, Shared-Service Operator, Consolidation Accountant, Security Auditor, Read-Only Group Reviewer.

## Permissions
Tenant-group, company, branch, record, action, field, ledger, inventory, HR, export, consolidation, shared-service, and intercompany scopes. Cross-company grants are explicit, purpose-limited, time-bound where needed, and audited. Maker-checker applies to company setup/closure, grants, intercompany rules, eliminations, and data movement.

## MVP
Company setup, company users/roles, policies/currency/tax/branding, company branches/warehouses, company-scoped records, cross-company switcher, shared-service grants, intercompany request/approval, company reporting, group overview, audit, and closure controls.

## Later releases
Consolidation, eliminations, transfer pricing, shared-service centers, regional data residency, franchise/group structures, mergers/acquisitions migration, and multi-ledger reporting.

## Dependencies
Authorization, Multi-Branch, Accounting, Finance, HR, Inventory/Warehouse, Customers, Subscription/Entitlements, Audit, BI, Admin Portal, and Public API. Architecture completion does not authorize company data sharing or coding.