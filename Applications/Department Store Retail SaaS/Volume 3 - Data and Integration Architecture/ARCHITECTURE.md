# VOLUME 3 — DATA AND INTEGRATION ARCHITECTURE

## 1. Core entities

Tenant, Company, Branch, Store, Floor, Department, Register, Warehouse, Bin, User, Employee, Role, Permission, Shift, Customer, Supplier, Vendor, Product, Variant, Unit, Barcode, PriceList, Promotion, TaxRule, Sale, SaleLine, Payment, CashSession, Return, Refund, Exchange, StockItem, StockMovement, Lot, Serial, Expiry, PurchaseRequest, SupplierQuote, PurchaseOrder, Receipt, Discrepancy, SupplierInvoice, Expense, LedgerExport, LoyaltyAccount, CreditAccount, EcommerceOrder, FulfillmentTask, Delivery, Incident, AuditEvent.

## 2. Record ownership

- operational records belong to tenant + company + branch/store context
- accounting records remain company-specific
- warehouse records remain location-specific
- shared product catalogs require explicit company/branch policy
- cross-company access requires approved intercompany service contracts

## 3. Immutable movement model

Sales, payments, stock movements, refunds, cash changes, purchase receipts, and accounting postings are corrected by reversal, return, adjustment, or credit—not silent overwrite.

## 4. API and event domains

- Identity and Staff API
- Product and Pricing API
- POS and Order API
- Payment and Cash API
- Inventory and Warehouse API
- Procurement and Supplier API
- Customer and CRM API
- Finance and Accounting API
- HR API
- Ecommerce and Fulfillment API
- Reporting and AI API

Events include sale.completed, payment.confirmed, refund.completed, stock.received, stock.adjusted, inventory.low, product.expiring, purchase_order.approved, supplier_invoice.received, shift.closed, cash_variance.detected, customer_credit.overdue, and incident.opened.

## 5. Required future integrations

- Warehouse
- Accounting
- Finance
- HR
- CRM
- Supplier Portal
- Vendor Portal
- AI
- Multi-Branch
- Multi-Company

Connections use versioned contracts, stable identifiers, adapters, idempotency keys, event delivery, permission checks, and reconciliation. Existing module architecture is extended, not replaced.

## 6. Hardware and external systems

- barcode scanners and camera scanning
- receipt, label, and document printers
- cash drawers
- weighing scales
- customer displays
- payment terminals
- electronic shelf labels
- ecommerce marketplaces
- delivery providers
- banking/accounting providers

## 7. Standards and interoperability

- GS1-compatible identifiers and barcode support where applicable
- configurable tax, currency, rounding, unit, fiscal, and receipt rules by country/company
- import/export templates with validation and duplicate detection
- provider-neutral payment and accounting adapters
