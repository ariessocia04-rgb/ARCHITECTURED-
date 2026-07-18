# ACCOUNTING — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
Account, AccountGroup, Journal, JournalEntry, JournalLine, Ledger, AccountingPeriod, TaxCode, CurrencyRate, CostCenter, BranchDimension, CompanyLedger, PostingRule, SourcePosting, Reconciliation, Adjustment, Reversal, ClosingBatch, StatementDefinition.

## Invariants
Every posted entry balances; source reference plus posting version is unique; posted history is immutable; period and company scopes are mandatory; reversal links the original; lines preserve currency, base currency, tax, dimensions, actor, and audit metadata.

## Commands/APIs
Configure accounts/mappings; create/validate/approve/post/reject journal; reverse/adjust; open/soft-close/hard-close period; reconcile source/bank/ledger; query ledger; generate statements; import opening balances; export governed reports.

## Events
`posting.drafted`, `posting.validated`, `journal.posted`, `posting.failed`, `journal.reversed`, `reconciliation.completed`, `period.opened`, `period.closed`, `statement.generated` plus consumed invoice, payment, refund, inventory, payroll, expense, and intercompany events.

## Integration
Transactional outbox/inbox, versioned schemas, idempotency, source acknowledgement, dead-letter/reconciliation, replay safety, adapter isolation, and no private-table writes. Accounting failure after source commit creates an exception, not a false source rollback.

## Import/export
Preview, balance check, account mapping, duplicate detection, row errors, batch rollback, role-scoped exports, statement versioning, and audit.

## Migration
Additive schema, opening-balance plan, historical source mapping, rehearsal, period freeze, reconciliation proof, compatibility window, and rollback/forward recovery.