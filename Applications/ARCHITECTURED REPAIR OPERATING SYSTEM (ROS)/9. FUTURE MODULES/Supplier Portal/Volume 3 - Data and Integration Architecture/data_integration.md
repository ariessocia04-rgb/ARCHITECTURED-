# SUPPLIER PORTAL — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
SupplierPortalAccount, SupplierUser, Invitation, VerificationCase, ComplianceDocument, Catalog, CatalogItem, PriceTier, RFQReference, SupplierQuotation, QuotationLine, POReference, Acknowledgement, ChangeRequest, ShipmentNotice, ShipmentLine, Package, TrackingReference, ReceiptReference, SupplierInvoiceSubmission, ReturnRequest, Dispute, MessageThread, PerformanceSnapshot.

## Rules
Supplier organization and tenant scope are mandatory. Bank/profile/compliance changes are versioned and approved. RFQ/quotation/PO/invoice numbers are unique within source. Portal records reference canonical procurement/warehouse/finance records rather than duplicating authority.

## APIs
Accept invite; manage users/profile/compliance/catalog; receive RFQ; submit/revise quotation; acknowledge/request PO change; submit shipment; view receipt; submit invoice/documents; open return/dispute; message; view scorecard; configure webhook/API credentials when authorized.

## Events
`supplier.invited`, `supplier.verified`, `supplier.suspended`, `catalog.submitted`, `quotation.submitted`, `po.acknowledged`, `po.change_requested`, `shipment.notice_submitted`, `receipt.updated`, `invoice.submitted`, `dispute.opened`, `supplier.document_expiring`.

## Integrations
Procurement/PO, Warehouse/receiving, Inventory, Finance/Accounting, Files, Notifications, Public API. Versioned adapters, outbox/inbox, idempotency, signed webhooks, reconciliation, no private-table writes.

## Import/export
Catalog and shipment templates use preview, line validation, duplicate detection, row errors, resumable batch, and rollback. Exports are supplier-scoped and audited. EDI/API mappings are tenant-approved and versioned.

## Migration
Preserve supplier IDs, contacts, item mappings, open RFQs/POs, compliance status, and document evidence with rehearsal and rollback.