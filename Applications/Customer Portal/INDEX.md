# CUSTOMER PORTAL — ENTRY INDEX

## STARTING POINT

Read in this order:

```text
1plan.md
→ Applications/README.md
→ Applications/Customer Portal/INDEX.md
→ Applications/Customer Portal/README.md
→ relevant shared contracts and design artifacts
```

## AUTHORITY

- Project scope, priority, handoff, source-of-truth, and folder assignment: `1plan.md`.
- Applications folder arrangement: `Applications/README.md`.
- Canonical Customer Portal architecture: [`README.md`](README.md).
- Current arrangement mode: `CONSOLIDATED_ARCHITECTURE_MODE`.

This index provides navigation only. It does not duplicate or replace the canonical architecture in `README.md`.

## MODULE NAVIGATION

1. [Registration, Login, and Identity](README.md#1-registration-login-and-identity)
2. [Customer Dashboard](README.md#2-customer-dashboard)
3. [Customer and Business Profile](README.md#3-customer-and-business-profile)
4. [Device Registry](README.md#4-device-registry)
5. [Service Request and Appointment](README.md#5-service-request-and-appointment)
6. [Repair Tracking and Timeline](README.md#6-repair-tracking-and-timeline)
7. [Quotation and Approval](README.md#7-quotation-and-approval)
8. [Payments and Documents](README.md#8-payments-and-documents)
9. [Release, Pickup, and Delivery](README.md#9-release-pickup-and-delivery)
10. [Warranty, Return, and Support](README.md#10-warranty-return-and-support)
11. [Messages and Notifications](README.md#11-messages-and-notifications)
12. [Feedback and Service History](README.md#12-feedback-and-service-history)
13. [Privacy, Security, and Account Settings](README.md#13-privacy-security-and-account-settings)

## SHARED DEPENDENCIES

- `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`
- `SaaS Platform/AUTHENTICATION_AUTHORIZATION_AND_SESSION_CONTRACT.md`
- `SaaS Platform/NOTIFICATION_AND_COMMUNICATION_CONTRACT.md`
- `SaaS Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md`
- `SaaS Platform/FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md`
- `SaaS Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md`
- `Design/WIREFRAME_ARCHITECTURE.md`
- `Design/WIREFLOW_ARCHITECTURE.md`
- `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`

## DECOMPOSITION RULE

Do not create separate Customer Portal module folders or copy sections out of `README.md` unless `1plan.md` assigns an approved decomposition task and exact canonical paths.

A future decomposition must:

- preserve all customer-facing and security requirements;
- maintain customer-safe versus internal-only information separation;
- create one canonical file per approved module;
- update this index and all dependent links;
- provide source-to-target traceability;
- validate no content loss or conflicting definitions;
- formally supersede the consolidated section only after owner approval.

## NEW CONTRIBUTOR NEXT ACTION

1. Verify the assigned portal module and active worker state.
2. Read the matching canonical section in `README.md`.
3. Read the shared permission, communication, payment, file, handoff, wireframe, and wireflow sources.
4. Preserve existing customer privacy and tenant-isolation rules.
5. Fill only approved missing gaps in the canonical target.

## STATUS

```text
CUSTOMER PORTAL ENTRY INDEX: COMPLETE
CANONICAL ARCHITECTURE: README.md
ARRANGEMENT MODE: CONSOLIDATED ARCHITECTURE
MODULE FOLDERS CREATED IN THIS BATCH: NO
EXISTING CONTENT MOVED OR DELETED: NO
```
