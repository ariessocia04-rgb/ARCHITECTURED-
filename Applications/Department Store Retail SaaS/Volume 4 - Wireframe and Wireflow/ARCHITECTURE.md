# VOLUME 4 — WIREFRAME AND WIREFLOW ARCHITECTURE

## 1. Solo owner home

```text
┌──────────────────────────────────────────────┐
│ My Store | Today | Online/Offline | Help     │
├──────────────────────────────────────────────┤
│ [New Sale] [Add Stock] [Record Expense]      │
├──────────────────────────────────────────────┤
│ Sales Today | Cash Expected | Low Stock      │
│ Customer Credit Due | Items Expiring         │
├──────────────────────────────────────────────┤
│ Recent Sales | Tasks | Simple Profit Summary │
└──────────────────────────────────────────────┘
```

## 2. Cashier POS

```text
┌─────────────────────────────────────────────────────────┐
│ Scan/Search | Favorites | Customer | Hold Sale | Help  │
├──────────────────────────────┬──────────────────────────┤
│ Product Categories / Items   │ Cart                     │
│                              │ Item Qty Price Total     │
│                              │ Discount / Tax           │
├──────────────────────────────┼──────────────────────────┤
│ Offline status / sync queue  │ Total | [PAY]            │
└──────────────────────────────┴──────────────────────────┘
```

## 3. Receiving wireflow

Purchase Order / Direct Delivery → identify supplier → scan/count goods → record lot/expiry/cost → compare expected vs received → discrepancy decision → stock available or quarantine → supplier invoice handoff.

## 4. Sale wireflow

Open register → identify staff → scan/select products → validate price, stock, restrictions, promotions → select customer if needed → payment → receipt → stock movement → loyalty/account update → accounting event.

## 5. Return and exchange wireflow

Find original sale → validate return eligibility → inspect item → choose return/exchange/store credit → approval when protected → reverse stock/payment/accounting correctly → issue document → update customer history.

## 6. Stock count wireflow

Create count → freeze or controlled-live count → assign zones → count/scan → recount exceptions → approve variance → post adjustment → investigate shrinkage → audit.

## 7. Daily close wireflow

Stop or hand over register → count cash → compare expected vs actual → explain variance → manager approval → close session → accounting/reconciliation export → store-day summary.

## 8. Responsive behavior

- phone: one task at a time
- tablet: touch-first POS and receiving
- desktop: management, purchasing, accounting, reporting
- offline banner and pending-sync count remain visible
- tables become cards on narrow screens
