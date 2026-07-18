# MULTI-BRANCH — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
Tenant/company/branch/region/record/action/field authorization; secure branch switching; temporary grants with expiry; step-up for cross-branch exports, overrides, transfers, access grants, and closure; encryption; support-access approval; audit.

## Audit/recovery
Audit branch configuration, memberships, switch, routing, assignment, transfer, custody, policy, finance/stock handoff, export, and closure. Restore verifies branch isolation, ownership, grants, open transfers, policies, and audit continuity.

## Targets
99.9% monthly availability; branch-context authorization decision p95 ≤200ms within service budget; reads ≤2s; protected writes ≤3s; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted unauthorized cross-branch access or orphaned transfer.

## Reports
Branch volume, backlog, SLA, capacity, staff utilization, revenue/payment scope, inventory, transfers, quality, warranty, customer outcomes, policy exceptions, access, and comparative benchmarks.

## Risks
Cross-branch leakage, wrong owning branch, policy mismatch, lost custody, duplicate transfer, orphaned closure records, temporary access persistence, and misleading aggregate reports require explicit scope, state machines, idempotency, maker-checker, reconciliation, monitoring, and closure gates.

## Tests/status
Branch/region permission matrix, switcher, cross-branch query, assignment/transfer, custody, stock/finance handoff, grants/expiry, closure, migration, offline conflict, accessibility, performance, backup/restore, and isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; code/tests/deployment separately gated.