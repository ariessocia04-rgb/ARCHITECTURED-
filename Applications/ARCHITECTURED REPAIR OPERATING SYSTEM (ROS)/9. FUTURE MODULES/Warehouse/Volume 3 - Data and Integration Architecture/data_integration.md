# WAREHOUSE — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Canonical entities

Warehouse, WarehouseZone, Aisle, Rack, Bin, StagingArea, StockItem, StockUnit, Serial, Lot, Batch, Expiry, StockBalance, StockMovement, Reservation, Allocation, Receiving, ReceivingLine, PutAwayTask, PickTask, PackTask, Dispatch, Transfer, TransferLine, Return, QuarantineCase, DamageRecord, DisposalRecord, CountSession, CountLine, Variance, Reconciliation, Label, ScanEvent, CapacityRule.

## Ownership and relationships

- StockMovement is immutable and drives balances through validated projections.
- StockUnit links item, condition, serial/lot, ownership, company, branch, warehouse, and bin.
- Reservation references approved demand such as repair part request, transfer, sale, or return.
- Receiving references PO, transfer, customer return, or approved manual source.
- Adjustments never rewrite movement history; they create compensating movements.

## Required fields and validation

Tenant/company/branch/warehouse scope, item and unit of measure, quantity precision, source/destination, movement type, status, serial/lot rules, condition, reason, actor, timestamps, correlation and idempotency keys, evidence, approval, and retention classification.

No duplicate serial ownership, impossible quantity, unauthorized negative stock, cross-tenant reference, closed-period valuation change, or source/destination equality is allowed.

## APIs and commands

Warehouse setup, capacity query, availability query, receive, accept/reject, put-away, relocate, reserve/release, pick, pack, dispatch, issue, return, transfer, count, recount, approve variance, adjust, quarantine, dispose, and trace.

All commands require tenant scope, authorization, expected version, idempotency key, correlation ID, and audit metadata.

## Events

`warehouse.created`, `receiving.started`, `stock.received`, `stock.rejected`, `stock.quarantined`, `putaway.assigned`, `stock.relocated`, `stock.reserved`, `reservation.released`, `stock.picked`, `stock.dispatched`, `stock.issued`, `stock.returned`, `transfer.dispatched`, `transfer.received`, `count.completed`, `variance.detected`, `variance.approved`, `stock.adjusted`, `stock.disposed`.

## Integrations and handoffs

- Procurement sends approved PO and expected receipt.
- Parts/Repairs sends approved demand and receives issue/return result.
- Supplier/Vendor portals receive permitted PO, return, and shipment statuses.
- Accounting receives valuation-ready events through adapters, never direct table writes.
- Notification sends task, delay, discrepancy, expiry, and approval messages.
- BI receives governed events/read models.

## Import, export, sync, and offline

CSV/template imports require preview, validation, duplicate detection, and rollback batch. Exports enforce role and field scope. Mobile scan commands queue locally with device ID, monotonic sequence, idempotency key, and conflict handling. Reconciliation never silently drops a scan.

## Versioning and compatibility

Additive schemas, versioned contracts, outbox/inbox, replay safety, dead-letter queue, adapter isolation, and migration/rollback plans are mandatory.