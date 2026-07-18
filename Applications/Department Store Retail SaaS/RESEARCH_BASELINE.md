# DEPARTMENT STORE RETAIL SAAS — RESEARCH BASELINE

## Purpose

Records the real-world retail operating patterns used to validate the architecture. External sources support decisions but do not replace `1plan.md` or the canonical application volumes.

## Validated patterns

### Point of sale and store operations

- browser/device-based POS
- temporary offline operation and later synchronization
- register open, cash control, sale, payment, receipt, return/refund, and register close
- employee attribution and permission levels
- barcodes, serial/lot data, customer accounts, loyalty, and reporting

Reference baseline: official Odoo Point of Sale and multi-employee documentation.

### Inventory, purchasing, and accounting

- sales automatically create stock movements
- receiving and purchase orders connect to inventory
- returns/refunds create controlled reversing documents
- accounting uses balanced entries and company-specific rules
- multi-company operations require company context and isolated accounting policy

Reference baseline: official Odoo accounting and retail documentation.

### Offline payment risk

- offline payments must be visibly pending until uploaded and confirmed
- staff permissions control who may enable or accept offline payments
- businesses need limits, expiry windows, reconciliation, and clear liability warnings
- refunds wait until the original offline payment is uploaded and confirmed

Reference baseline: official Square offline-payment documentation.

### Barcode and product identification

- global identifiers and scannable barcodes improve product, logistics, receiving, and point-of-sale interoperability
- the architecture remains configurable because local stores may also use internal SKUs, PLUs, or manual items

Reference baseline: GS1 retail identification principles.

## Design decisions derived from research

1. POS must remain usable during temporary connectivity loss.
2. Offline card transactions are not treated as final confirmed cash.
3. Every order, refund, discount, register action, and stock movement identifies the responsible employee or compressed solo-owner role context.
4. Inventory, accounting, cash, purchasing, and returns use linked controlled records rather than silent edits.
5. Small stores receive a simplified interface; larger stores activate departments and advanced permissions.
6. The same records scale from solo seller to multi-branch and multi-company operation.
7. Hardware integrations use provider-neutral adapters and capability checks.
8. Legal, tax, receipt, privacy, restricted-goods, and payment rules are configured per country/company before deployment.

## Legal boundary

“Informal market” support means lawful open markets, wet markets, street-vendor operations, and community retail where legally permitted. The application does not support illegal trade, stolen goods, prohibited goods, unlicensed restricted products, sanctions evasion, or tax evasion.

**RESEARCH BASELINE COMPLETE**
