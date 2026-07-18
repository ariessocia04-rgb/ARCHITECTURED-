# ACCOUNTING — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Convert approved operational and financial events into balanced, traceable accounting records covering chart of accounts, journals, ledgers, periods, taxes, dimensions, reconciliation, closing, and financial statements.

## Scope
Chart of accounts; journals; general, receivable, payable, tax, cash, inventory, payroll, and intercompany postings; period control; reconciliation; adjustments; reversals; closing; reports; configuration; audit; import/export; adapter health.

## Boundaries
Operational modules own invoices, payments, refunds, stock, payroll, and repair facts. Accounting stores posting references and never rewrites source transactions. Posted entries are corrected by reversal or adjustment. Provider or tax rules remain configurable and jurisdiction-reviewed.

## Personas
Accountant, Accounting Manager, Finance Manager, Tax Officer, Tenant Owner, Company Administrator, Auditor.

## Permissions and controls
Separate create, review, approve, post, reverse, reconcile, close period, configure mapping, export, and audit permissions. Maker-checker applies to manual journals, mappings, period close, write-offs, and reversals. Company, branch, cost-center, account, journal, record, and field scopes are enforced.

## MVP
Chart of accounts, posting rules, journals, ledger, source posting, reconciliation, periods, reversals, trial balance, profit and loss, balance sheet, audit, and exception queue.

## Later releases
Consolidation, multi-GAAP reporting, advanced tax packs, automated eliminations, fixed assets, revenue recognition, and external accounting-provider synchronization.

## Dependencies
Finance, Payments, Invoices, Refunds, Inventory valuation, Procurement, Payroll summaries, Multi-Company, Files, Audit, API Layer, and Business Intelligence.

Architecture completion does not authorize implementation.