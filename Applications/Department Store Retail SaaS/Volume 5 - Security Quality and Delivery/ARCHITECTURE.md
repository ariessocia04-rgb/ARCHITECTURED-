# VOLUME 5 — SECURITY, QUALITY, OFFLINE, RECOVERY, AND DELIVERY

## 1. Security and permissions

- tenant, company, branch, store, department, register, warehouse, record, and field scope
- employee PIN/badge/device login options
- protected actions: price override, void, refund, cash in/out, stock adjustment, purchase approval, supplier change, user/role change, export
- separation of duties for receiving, invoice approval, payment, refunds, stock adjustment, and register close when staff exist
- solo mode uses stepped confirmation, value limits, and optional external approval

## 2. Loss prevention

- void/refund/discount monitoring
- unusual price changes
- negative inventory and repeated adjustments
- cash variance
- no-sale drawer openings
- receiving discrepancies
- shrinkage by product, cashier, shift, department, branch, and period
- incident case with evidence and restricted access

## 3. Offline and low-connectivity operation

- local POS queue with unique operation IDs
- visible offline state and risk limits
- cash-first fallback where configured
- pending card/payment status clearly separated from confirmed payment
- offline stock reservation conflict handling
- automatic sync and reconciliation after reconnection
- no duplicate sale or payment on retry

## 4. Quality requirements

- accurate totals, taxes, rounding, stock, cash, and cost calculations
- load testing for peak checkout periods
- device/browser/printer/scanner/scale compatibility testing
- accessibility and non-technical-user usability testing
- restore tests and reconciliation drills
- country-specific legal, tax, receipt, privacy, and restricted-goods review before deployment

## 5. Delivery sequence

1. Approve business modes and release scope.
2. Validate wireflows with real store users.
3. Approve high-fidelity POS and back-office design.
4. Finalize physical schema and API/event contracts.
5. Select payment, accounting, ecommerce, messaging, and hardware providers.
6. Implement shared foundation.
7. Implement solo/micro-store MVP.
8. Add team, warehouse, procurement, accounting, HR, CRM, and enterprise modules without migration-breaking changes.
9. Run QA, security, offline, reconciliation, and UAT.
10. Pilot one store, then controlled multi-branch rollout.

## 6. Research baseline

Architecture was cross-checked against current official retail patterns covering browser-based/offline POS, stock movement, multiple employees and permission levels, cash-session control, returns/refunds, loyalty, barcodes, hardware, multi-company accounting, and offline-payment risk handling.
