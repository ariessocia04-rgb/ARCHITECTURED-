# ACCOUNTING — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Accounting dashboard; chart of accounts; journal workspace; source-posting queue; general ledger; AR/AP ledgers; tax setup; dimensions; reconciliation; period close; adjustment/reversal wizard; financial statements; posting failures; settings; audit.

## Lifecycle
`Source Event → Draft Posting → Validation → Approval when required → Posted → Reconciled → Closed / Reversed`.

## Workflow
Receive versioned source event → validate account mapping, period, currency, dimensions, tax, debit/credit balance, duplication, and permission → create draft → approve when required → post immutably → reconcile → close period. Failures enter a posting exception queue without falsely reversing an already-completed business transaction.

## Prohibited behavior
No unbalanced posting, direct edit of posted lines, posting into locked periods, cross-company leakage, duplicate source posting, silent account remapping of history, or direct source-table writes.

## Exceptions
Missing mapping, closed period, currency mismatch, incomplete dimensions, unbalanced draft, duplicate event, stale source version, integration outage, partial reconciliation, and restore/replay conflict preserve context and show owner, blocker, and next action.

## UI/UX
Plain distinction between business completion and accounting completion; visible company, branch, period, journal, source, posting status, debit/credit totals, and reconciliation state. Guided mapping and reversal flows, review before posting, keyboard-accessible tables, responsive statements, loading/empty/error/permission/conflict/degraded states.

## Wireframes and wireflows
Dashboard, queue, journal detail, mapping wizard, posting review, reconciliation, period close, reports, audit, and exception recovery. Prototype covers source event to posting, rejection/correction, reversal, closed-period denial, and reconciliation failure.