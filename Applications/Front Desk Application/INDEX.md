# FRONT DESK APPLICATION — ENTRY INDEX

## STARTING POINT

Read in this order:

```text
1plan.md
→ Applications/README.md
→ Applications/Front Desk Application/INDEX.md
→ Applications/Front Desk Application/README.md
→ relevant shared contracts and design artifacts
```

## AUTHORITY

- Project scope, priority, handoff, source-of-truth, and folder assignment: `1plan.md`.
- Applications folder arrangement: `Applications/README.md`.
- Canonical Front Desk architecture: [`README.md`](README.md).
- Current arrangement mode: `CONSOLIDATED_ARCHITECTURE_MODE`.

This index provides navigation only. It does not duplicate or replace the canonical architecture in `README.md`.

## MODULE NAVIGATION

1. [Front Desk Dashboard](README.md#1-front-desk-dashboard)
2. [Customer Management](README.md#2-customer-management)
3. [Device Intake](README.md#3-device-intake)
4. [Job Order Intake](README.md#4-job-order-intake)
5. [Queue and Dispatch](README.md#5-queue-and-dispatch)
6. [Quotation and Approval](README.md#6-quotation-and-approval)
7. [Payment and Cashier](README.md#7-payment-and-cashier)
8. [Device Release and Handover](README.md#8-device-release-and-handover)
9. [Customer Communication](README.md#9-customer-communication)
10. [Warranty, Return, and Follow-Up](README.md#10-warranty-return-and-follow-up)
11. [Reports and Daily Reconciliation](README.md#11-reports-and-daily-reconciliation)
12. [User Profile and Shift](README.md#12-user-profile-and-shift)
13. [Security, Settings, and Audit](README.md#13-security-settings-and-audit)

## SHARED DEPENDENCIES

- `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`
- `SaaS Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md`
- `SaaS Platform/AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md`
- `SaaS Platform/NOTIFICATION_AND_COMMUNICATION_CONTRACT.md`
- `SaaS Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md`
- `SaaS Platform/FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md`
- `Design/WIREFRAME_ARCHITECTURE.md`
- `Design/WIREFLOW_ARCHITECTURE.md`
- `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`

## DECOMPOSITION RULE

Do not create separate Front Desk module folders or copy sections out of `README.md` unless `1plan.md` assigns an approved decomposition task and exact canonical paths.

A future decomposition must:

- preserve all valid architecture;
- create one canonical file per approved module;
- update this index and every dependent link;
- provide source-to-target traceability;
- validate no content loss or conflicting definitions;
- formally supersede the consolidated section only after owner approval.

## NEW CONTRIBUTOR NEXT ACTION

1. Verify the assigned module and current worker state.
2. Read the matching section in `README.md`.
3. Read its shared contracts and wireflow/wireframe sources.
4. Preserve current architecture.
5. Fill only approved missing gaps in the canonical target.

## STATUS

```text
FRONT DESK ENTRY INDEX: COMPLETE
CANONICAL ARCHITECTURE: README.md
ARRANGEMENT MODE: CONSOLIDATED ARCHITECTURE
MODULE FOLDERS CREATED IN THIS BATCH: NO
EXISTING CONTENT MOVED OR DELETED: NO
```
