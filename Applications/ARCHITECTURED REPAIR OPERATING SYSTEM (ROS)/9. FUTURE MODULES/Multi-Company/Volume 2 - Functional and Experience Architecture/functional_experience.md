# MULTI-COMPANY — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Group dashboard; company directory; company setup wizard; company profile/currency/tax/branding; users/access; branches/warehouses; service/shared policies; company switcher; shared-service grants; intercompany requests; company financial/operational summary; consolidation inputs; comparison; data residency; closure/migration; settings/audit.

## Lifecycles
Company: Draft → Provisioning → Active → Restricted/Suspended → Closing/Migrating → Archived.
Cross-company grant: Requested → Approved → Active → Expired/Revoked → Reviewed.
Intercompany transaction: Draft → Source Approved → Destination Approved → Executed → Reconciled → Closed / Reversed / Disputed.

## Workflow
Create company → validate legal/config scope → provision isolated dependencies → assign admins/users → configure currency/tax/policies → create branches → activate. Cross-company work requires explicit source/destination agreement, ownership, pricing/tax/accounting, data-sharing, and audit handoff. Closure resolves open obligations, exports/retains data, revokes access, and preserves history.

## Exceptions
Currency/tax conflict, duplicate company, invalid shared grant, cross-company customer/device ambiguity, inventory ownership mismatch, intercompany imbalance, data-residency violation, consolidation mismatch, or closure blocker enter guided queues.

## UI/UX
Persistent company context with authorized switcher; distinct company branding/context; no hidden group-wide exposure; visible owner/source/destination company; impact review for cross-company actions; accessible comparison tables; responsive manager views; loading/empty/error/permission/conflict/degraded states.

## Wireframes/wireflows
Group/company dashboards, setup, switcher, access, shared services, intercompany request, reconciliation, comparison, residency, closure/migration, audit, and recovery. Prototype covers company provisioning, cross-company grant, intercompany rejection/reconciliation, and closure.