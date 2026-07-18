# MULTI-COMPANY — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
Tenant-group/company/branch/record/action/field authorization; secure company switching; explicit cross-company grants; MFA/step-up for grants, intercompany execution, exports, residency changes, migration, and closure; encryption; residency enforcement; approved support access; audit.

## Audit/recovery
Audit company configuration, memberships, switch, shared-service access, data-sharing, intercompany actions, exports, migration, residency, consolidation inputs, and closure. Restore verifies company isolation, ownership, grants, intercompany pairs, currencies, residency, and audit continuity.

## Targets
99.9% monthly availability; company authorization p95 ≤200ms within service budget; reads ≤2s; protected writes ≤3s; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted unauthorized cross-company access or unreconciled duplicate intercompany execution.

## Reports
Company operational/financial summaries, group comparison, intercompany aging/reconciliation, shared-service use, access/grants, residency, consolidation inputs, migration/closure, exceptions, and audit.

## Risks
Cross-company leakage, wrong ownership, currency/tax mismatch, duplicate mirrored transaction, unapproved shared access, residency breach, consolidation error, and closure orphaning require explicit scope, dual approval, idempotency, reconciliation, immutable ownership, monitoring, migration gates, and rollback.

## Tests/status
Company/branch permission matrix, switcher, grants/expiry, intercompany lifecycle, currency/tax, ownership, residency, migration/closure, duplicate/retry, accessibility, performance, backup/restore, disaster recovery, and isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; code/tests/deployment separately gated.