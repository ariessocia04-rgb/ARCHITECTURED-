# ACCOUNTING — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
Tenant/company/branch/account/journal/period/record/action/field authorization; MFA or step-up for posting, reversal, mapping, close, and export; encryption; secure secrets; support-access approval; privacy-safe logs; rate limits.

## Audit and recovery
Immutable access, mapping, journal, posting, reversal, reconciliation, close, import/export, and configuration audit. Retention and legal hold follow financial rules. Backup/restore verifies balanced ledgers, source uniqueness, period locks, reconciliations, and audit continuity.

## Architecture targets
99.9% monthly availability; p95 reads ≤2s; protected posting response ≤3s excluding background processing; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted unbalanced, duplicate, cross-tenant, or closed-period posting in validation tests.

## Reports
Trial balance, general ledger, profit and loss, balance sheet, cash flow, tax summary, aged AR/AP, posting exceptions, reconciliation, dimensions, audit, and close status.

## Risks
Unbalanced entry, duplicate posting, incorrect mapping, period bypass, unauthorized reversal, currency error, tax error, and cross-company leakage are controlled by deterministic validation, idempotency, maker-checker, immutable posting, monitoring, reconciliation, and rollback.

## Tests
Posting rules, balancing, permissions, field masking, state machine, contract/version, duplicate/retry, concurrency, period locking, reversal, migration, reconciliation, statements, accessibility, performance, backup/restore, disaster recovery, and tenant/company isolation.

## Acceptance and status
All index/volumes exist; screens, roles, lifecycle, entities, events, reports, risks, tests, and traceability agree; no direct private-table writes or duplicate authority. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; implementation not authorized globally; tests not run; deployment not performed.