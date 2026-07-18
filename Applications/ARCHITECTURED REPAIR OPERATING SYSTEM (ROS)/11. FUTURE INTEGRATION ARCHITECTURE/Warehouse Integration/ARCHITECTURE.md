# WAREHOUSE INTEGRATION ARCHITECTURE

## Purpose and boundary

Connect repair parts, inventory, receiving, transfers, reservations, returns, removed parts, and stock reconciliation to one or more warehouses without changing repair, job-order, quotation, or payment workflows.

## Ownership

- Repair modules own job demand, approved part usage, and repair evidence.
- Warehouse owns bins, lots, serials, available quantity, put-away, picking, transfer, cycle count, and stock valuation inputs.
- Inventory adapter owns mapping and synchronization.

## Core entities

Warehouse, WarehouseZone, Bin, StockItem, Lot, Serial, Reservation, PickList, GoodsReceipt, Transfer, StockAdjustment, Return, RemovedPartDisposition.

## Lifecycle

Requested → Reserved → Picked → Issued → Used / Returned / Removed → Reconciled.

Exceptions: shortage, substitution required, damaged, lost, quarantine, count variance, transfer delayed.

## Integration points

- Job Order and Diagnosis publish required-parts demand.
- Quotation publishes approved quantities and alternatives.
- Repair confirms consumed, unused, removed, and returned items.
- Purchasing publishes purchase-order and expected-receipt data.
- Finance receives valuation and cost postings through its own adapter.

## Events

`part.demanded`, `stock.reserved`, `stock.shortage_detected`, `stock.picked`, `stock.issued`, `part.consumed`, `part.returned`, `stock.transferred`, `stock.adjusted`, `stock.reconciled`.

## Compatibility rules

- Existing Parts and Repair records remain authoritative for job usage.
- Warehouse identifiers are additive references.
- No warehouse outage blocks diagnosis or draft quotation.
- Repair start may be gated only by approved tenant policy and confirmed reservation state.

## Roles and controls

Inventory Officer, Warehouse Clerk, Purchasing Officer, Technician, Branch Manager, Auditor. Separation of duties applies to request, approval, issue, adjustment, and reconciliation.

## UI/UX

Plain-language availability, branch/warehouse selector, reservation status, approved substitution, barcode/QR plus manual alternative, offline issue queue, conflict and reconciliation screens.

## Reports

Available stock, reserved stock, aging, shortages, transfer status, usage by repair, variance, removed-part disposition, and inventory value feed.

## Acceptance

Multi-warehouse and multi-branch support, idempotent movements, immutable movement history, no negative stock unless configured, no direct repair-table writes, full audit and rollback plan.

**STATUS: COMPLETE (100%)**
