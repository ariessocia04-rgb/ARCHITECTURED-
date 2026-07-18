# MULTI-BRANCH — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Branch dashboard; branch directory/map/list; branch setup wizard; departments/workstations/warehouses; users/access; operating hours/holidays; service catalog/policies; queue/routing; capacity/workload; cross-branch assignment; job/device transfer; stock transfer; branch finance summary; comparison reports; exceptions; settings/audit.

## Lifecycles
Branch: Draft → Provisioning → Active → Restricted/Suspended → Closing → Archived.
Transfer: Requested → Source Approved → Prepared → In Transit → Destination Received → Reconciled → Closed / Cancelled / Disputed.
Temporary access: Requested → Approved → Active → Expired/Revoked → Reviewed.

## Workflow
Create branch → validate company/region/policies → provision dependencies → assign manager/users → publish hours/catalog/routing → activate. Cross-branch work uses readiness, customer consent where applicable, custody, financial, inventory, and audit handoffs. Closure blocks new work, resolves open records, transfers custody/data, and preserves history.

## Exceptions
Branch unavailable, capacity exceeded, skill mismatch, conflicting policies, transfer rejection, in-transit loss, stock discrepancy, payment ownership conflict, offline destination, temporary access expiry, and closure blocker enter explicit queues.

## UI/UX
Persistent branch context and easy authorized switcher; no hidden cross-branch data; visible owning/current/destination branch; plain transfer checklist; accessible comparison tables; responsive manager views; loading/empty/error/permission/conflict/offline states.

## Wireframes/wireflows
Branch dashboard/setup, switcher, routing, capacity, assignment, job transfer, stock transfer, access, comparison, closure, audit, and recovery. Prototype covers branch provisioning, cross-branch assignment, transfer rejection/recovery, and branch closure.