# MODULE COMPATIBILITY MATRIX

Legend: `R` reads, `W` sends approved commands/events, `A` adapter required, `O` optional, `G` policy gate.

| Existing ROS Domain | Warehouse | Accounting | Finance | HR | CRM | Supplier Portal | Vendor Portal | AI | Multi-Branch | Multi-Company |
|---|---|---|---|---|---|---|---|---|---|---|
| Enterprise Foundation | A | A | A | A | A | A | A | A/G | A | A |
| Technician Application | R/W | R | R | R/G | R | O | W/G | R/G | A/G | A/G |
| Owner Application | R/W | R/W | R/W | R/W | R/W | R/W | R/W | R/G | R/W | R/W |
| Front Desk Application | R | R | R/W | R | R/W | O | O | R/G | A/G | A/G |
| Customer Portal | O | R | R/W | O | R/W | O | O | R/G | R | R |
| Shared Business Modules | A | A | A | A | A | A | A | A | A | A |
| Shared UI System | O | O | O | O | O | O | O | O | O | O |
| Shared Database | A | A | A | A | A | A | A | A | A | A |
| API Layer | A | A | A | A | A | A | A | A | A | A |
| Future Modules | W | W | W | W | W | W | W | W | W | W |
| Development Pipeline | G | G | G | G | G | G | G | G | G | G |

## Mandatory compatibility checks for every current and future module

1. Can the module operate when the integration is disabled?
2. Does it preserve tenant, company, and branch scope?
3. Is data ownership explicit?
4. Are commands and events idempotent?
5. Are contract versions backward-compatible?
6. Are retries, quarantine, reconciliation, and rollback defined?
7. Are permissions and field access enforced?
8. Are customer-visible and internal data separated?
9. Are offline, low-connectivity, accessibility, and error states defined?
10. Are audit, retention, security, backup, and incident controls preserved?
11. Is historical data immutable or corrected through approved adjustment?
12. Can the new module be removed without corrupting the core system?

## Result

All 11 existing ROS domains have an approved integration relationship with all 10 future integration domains. No existing canonical architecture is replaced.

**STATUS: COMPLETE (100%)**
