# SUPPLIER PORTAL INTEGRATION ARCHITECTURE

## Purpose and boundary

Provide suppliers with controlled access to requests for quotation, purchase orders, acknowledgements, shipment notices, invoices, returns, disputes, and performance without exposing internal tenant operations.

## Ownership

Purchasing owns sourcing and purchase decisions. Supplier Portal owns supplier-facing collaboration. Warehouse owns receiving. Finance/Accounting own liabilities and postings.

## Core entities

SupplierAccount, SupplierUser, RFQ, Bid, PurchaseOrderView, Acknowledgement, AdvanceShipmentNotice, SupplierInvoice, ReturnAuthorization, Dispute, PerformanceScore.

## Lifecycle

Invited → Verified → Active → Restricted / Suspended → Closed. Transaction: RFQ → Bid → Award → PO Acknowledged → Shipped → Received → Invoiced → Settled / Disputed.

## Integration points

Parts shortage, purchase request, purchase order, receiving, quality inspection, return, payable, and supplier scorecard.

## Events

`rfq.published`, `bid.submitted`, `purchase_order.awarded`, `shipment.announced`, `goods.received`, `supplier_invoice.submitted`, `supplier_dispute.opened`.

## Compatibility rules

- Supplier sees only explicitly shared records.
- Portal cannot change internal job, customer, cost margin, or approval data.
- Internal purchasing works even when portal is offline through alternate communication and later reconciliation.

## Roles and controls

Supplier Admin, Supplier User, Purchasing Officer, Warehouse Receiver, Finance Reviewer, Auditor. Invitation, identity, company verification, scope, and revocation are audited.

## UI/UX

Simple PO acknowledgement, shipment entry, invoice upload, dispute thread, status timeline, accessible document and mobile support.

## Reports

On-time delivery, fill rate, quality issues, price variance, dispute rate, acknowledgement time, supplier risk.

## Acceptance

Strict supplier isolation, no internal-data leakage, signed document history, idempotent submissions, duplicate invoice detection, full revocation.

**STATUS: COMPLETE (100%)**
