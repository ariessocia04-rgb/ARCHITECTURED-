# MULTI-BRANCH — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
Branch, BranchProfile, Department, Workstation, WarehouseReference, ServiceArea, OperatingSchedule, Holiday, BranchMembership, RegionalScope, TemporaryBranchGrant, BranchPolicy, RoutingRule, CapacitySnapshot, CrossBranchAssignment, JobTransfer, CustodyTransfer, StockTransferReference, FinancialOwnershipRule, BranchClosureCase, BranchComparisonSnapshot.

## Rules
Every operational record has tenant/company/owning-branch scope. Sharing uses explicit policy and grants; no implicit all-branch access. Transfers preserve source/destination, custody, customer communication, financial ownership, inventory, status mapping, version, idempotency, and audit. Branch closure cannot orphan active records.

## APIs
Create/configure/activate/restrict/close branch; manage membership/grants; publish hours/policies/routing; query capacity; assign cross-branch; request/approve/dispatch/receive/reconcile transfer; compare branches; validate branch access; export governed reports.

## Events
`branch.created`, `branch.activated`, `branch.restricted`, `branch.closure_started`, `branch.closed`, `branch.membership_changed`, `branch.policy_published`, `cross_branch_assignment.created`, `job_transfer.requested`, `job_transfer.received`, `stock_transfer.reconciled`, `branch_capacity_changed`.

## Integrations
Authorization, Jobs/Dispatch, Customers, Warehouse/Inventory, Finance/Accounting, Notifications, Files, Mobile/offline, BI, Public API. Versioned contracts, outbox/inbox, idempotency, reconciliation, no direct private-table writes.

## Migration
Add branch IDs without reassigning history silently; define legacy home branch; backfill memberships/policies; validate isolation; rehearse transfers and rollback; retain old references.