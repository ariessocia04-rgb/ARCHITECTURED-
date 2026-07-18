# FINANCE — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Canonical entities

Budget, BudgetLine, CashAccount, CashPosition, Receivable, Payable, ExpenseClaim, Disbursement, FundingTransfer, CreditLimit, Forecast, ApprovalRequest, Reconciliation, FinancialException.

## Ownership and relationships

- Each entity has immutable ID, tenant ID, company/branch scope where applicable, version, status, created/updated metadata, retention classification, and audit reference.
- Authoritative records remain in the owning module; integrations use references, read models, adapters, commands, events, and webhooks.
- Finalized or posted history is corrected through version, reversal, adjustment, cancellation, or compensating record—not silent overwrite.
- Attachments, signatures, approvals, comments, and timelines reference the owning record without duplicating private business data.

## Validation and business rules

Required fields, uniqueness, eligibility, thresholds, calculations, effective dates, approval limits, state transitions, duplicate detection, retention, and field-level access are explicit. Commands reject stale versions, cross-tenant references, unauthorized scope, impossible values, duplicate idempotency keys, and prohibited transitions.

## Commands and APIs

Create, update draft, submit, approve, reject, return for correction, cancel, execute, reverse/correct, close, reopen when permitted, search, filter, report, import, export, attach file, add comment, view history, and administer configuration.

Every command requires authenticated actor, authorization decision, tenant scope, expected version, idempotency key, correlation ID, validation result, and audit metadata.

## Domain events

`budget.approved`, `expense.submitted`, `expense.approved`, `receivable.due`, `payable.due`, `disbursement.executed`, `cash.position_changed`, `credit.limit_changed`, `finance.reconciled`.

## Integration points

- Payments and invoices.
- Accounting adapter.
- Procurement and suppliers.
- Payroll inputs.
- Branches and companies.
- Notifications.
- Business Intelligence.

## Integration contract

Source commit → transactional outbox → integration router → schema/version validation → target adapter → acknowledgement → audit and integration status. Failure enters retry, quarantine, dead-letter, or reconciliation without changing a truthful completed source transaction.

## Notifications

In-app, email, SMS, push, or webhook messages are template-versioned, consent-aware, localized, retryable, auditable, and linked to the correct record. Sensitive fields are excluded unless the recipient and channel are authorized.

## Import, export, and synchronization

Imports use template version, preview, validation, duplicate check, row-level errors, resumable batch, and rollback/compensation. Exports apply role/field scope, watermarking where required, audit, retention, and asynchronous generation for large jobs. Offline sync uses device identity, sequence, idempotency, conflict detection, and explicit resolution.

## Compatibility and migration

Additive nullable/defaulted fields, versioned APIs/events, backward-compatible consumers, migration rehearsal, compatibility window, rollback plan, replay tests, and no direct cross-module table writes are mandatory.