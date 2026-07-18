# VOLUME 2 — FUNCTIONAL AND USER EXPERIENCE ARCHITECTURE

## 1. Core modules

- Owner Dashboard
- Store / Branch Dashboard
- Point of Sale
- Product Catalog
- Categories and Brands
- Pricing and Price Lists
- Promotions, Coupons, and Loyalty
- Customers and Credit Accounts
- Orders, Returns, Exchanges, and Refunds
- Inventory and Stock Counts
- Warehouse and Backroom
- Purchasing and Receiving
- Suppliers and Vendors
- Expenses and Cash Management
- Finance and Accounting Handoffs
- HR, Shifts, Attendance, and Performance
- CRM and Marketing
- Ecommerce and Fulfillment
- Loss Prevention and Incidents
- Reports and Analytics
- AI Assistant and Automation
- Settings, Users, Roles, and Permissions

## 2. Point-of-sale experience

### Non-technical cashier screen

- large product buttons and favorites
- barcode scan, camera scan, search, and manual lookup
- clear cart with quantity, unit, price, discount, and total
- cash, card, QR, account credit, split payment, and configured local methods
- visible change calculation
- hold/resume sale
- customer selection only when needed
- receipt print, SMS/email, or no-receipt option
- manager approval for protected discounts, voids, refunds, and price overrides

## 3. Product and selling models

- each, pack, case, kilogram, gram, liter, milliliter, meter, and custom legal units
- tingi / split-pack conversion with parent-child unit rules
- weighed items and scale integration
- variants such as size, color, flavor, and packaging
- barcodes, PLUs, SKUs, serial numbers, lots, batches, and expiry dates
- bundles, kits, combos, and buy-one-get-one rules
- consignment and vendor-owned stock
- restricted-item flags with age/license checks where legally required

## 4. Inventory experience

- opening stock
- receiving against purchase order or direct receiving
- transfer between shelf, backroom, warehouse, branch, or company
- reservation for online/pickup orders
- stock adjustment with reason and approval
- cycle count and full count
- damaged, expired, returned, quarantined, recalled, and lost stock
- automatic low-stock and expiry alerts
- replenishment suggestions

## 5. Purchasing experience

Request → approval → supplier quotation → purchase order → delivery → receiving → discrepancy → supplier invoice → payment handoff → supplier performance.

## 6. Customer and CRM experience

- optional quick anonymous sale
- customer profile for loyalty, credit, delivery, warranty, and communication
- legal consent and preference controls
- loyalty points, tiers, vouchers, rewards, and store credit
- complaint, return, service recovery, and case tracking

## 7. Friendly-use rules

- simple mode first; advanced mode optional
- one clear primary action per screen
- plain-language labels
- guided setup by business size
- reusable defaults and saved favorites
- visible offline/sync status
- error messages explain what was saved and how to recover
- no technical database or API terms in staff screens
- multilingual and localized labels supported
- accessible keyboard, touch, screen-reader, and low-dexterity behavior
