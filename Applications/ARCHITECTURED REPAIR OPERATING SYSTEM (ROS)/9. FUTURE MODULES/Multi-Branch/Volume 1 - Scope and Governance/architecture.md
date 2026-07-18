# MULTI-BRANCH — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Enable one tenant/company to operate multiple branches with branch-specific users, departments, workstations, warehouses, service areas, operating hours, queues, pricing/SLA policies, inventory, finance scope, reporting, transfers, routing, and centralized oversight.

## Boundaries
Tenant and company remain authoritative parent scopes. Each business record has owning branch and permitted sharing rules. Cross-branch visibility, assignment, transfer, stock movement, payment, and reporting occur only through approved policies and handoffs. Multi-Branch does not merge separate legal companies.

## Personas
Tenant Owner, Tenant Administrator, Regional Manager, Branch Manager, Dispatcher, Inventory Manager, Finance Manager, Auditor, Authorized Cross-Branch User.

## Permissions
Branch membership, home branch, temporary branch grant, regional scope, record-sharing policy, cross-branch assignment, transfer approval, branch pricing/SLA override, financial visibility, inventory visibility, export, and configuration. Maker-checker applies to branch creation/closure, protected transfer, override, and scope grant.

## MVP
Branch setup, departments/workstations/warehouses, branch users, operating hours, branch queue/routing, cross-branch assignment, job/device transfer, inventory transfer, branch policies, dashboards/reports, audit, and notifications.

## Later releases
Territories, franchise models, service regions, load balancing, automated routing, shared-service centers, branch benchmarking, and geographic optimization.

## Dependencies
Organization/Branches, Authorization, Jobs/Dispatch, Inventory/Warehouse, Finance, Notifications, Audit, BI, Mobile, and API Layer. Architecture completion does not authorize cross-branch access or coding.