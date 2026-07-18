# ACCOUNTING INTEGRATION ARCHITECTURE

## Purpose and boundary

Convert approved operational and financial events into balanced accounting entries without changing quotations, invoices, payments, refunds, inventory movements, payroll, or repair workflows.

## Ownership

Operational modules own business facts. Accounting owns chart of accounts, journals, ledgers, periods, posting rules, taxes, dimensions, closing, and financial statements.

## Core entities

Account, Journal, JournalEntry, JournalLine, AccountingPeriod, TaxCode, CostCenter, BranchDimension, CompanyLedger, Reconciliation, Adjustment, ClosingBatch.

## Lifecycle

Operational Event → Draft Posting → Validation → Approval when required → Posted → Reconciled → Closed.

No posted entry is silently edited; correction uses reversal or adjustment.

## Integration points

Invoices, payments, refunds, inventory valuation, purchasing, supplier liabilities, payroll summaries, expenses, deposits, write-offs, and intercompany entries.

## Events

`invoice.finalized`, `payment.confirmed`, `refund.completed`, `inventory.valued`, `payable.recognized`, `payroll.posting_ready`, `journal.posted`, `journal.reversed`, `period.closed`.

## Compatibility rules

- Operational record numbers remain unchanged.
- Accounting stores source references and posting version.
- Posting failure does not falsely mark the source transaction failed if the business transaction already committed; it enters reconciliation.
- Contract versions support new account mappings without rewriting historical records.

## Roles and controls

Accountant, Finance Manager, Tenant Owner, Auditor. Maker-checker for journals, period close, mapping changes, and reversals.

## UI/UX

Posting status, clear difference between business completion and accounting completion, mapping preview, reconciliation queue, correction reason, period-lock guidance.

## Reports

Trial balance, general ledger, profit and loss, balance sheet, tax summary, branch/company dimensions, unreconciled sources, posting failures.

## Acceptance

Balanced entries, immutable posted history, period locking, tenant/company isolation, idempotent posting, traceability to source, replay and reversal tests.

**STATUS: COMPLETE (100%)**
