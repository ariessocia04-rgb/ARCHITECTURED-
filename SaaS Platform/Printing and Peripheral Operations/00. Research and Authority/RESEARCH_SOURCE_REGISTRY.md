# PRINTING AND IT OPERATIONS — RESEARCH SOURCE REGISTRY

## Purpose

Record the official external references and existing repository sources used to derive the printing/peripheral and IT Operations architecture. External sources support decisions but become project truth only through the canonical files in this package.

## Existing repository authority

| Source | Reused authority |
|---|---|
| `1plan.md` | Governance, no-racing, provenance, duplicate control, Section 8A completion, implementation authorization. |
| `SaaS Platform/FILE_MEDIA_DOCUMENT_QR_AND_BARCODE_CONTRACT.md` | Generated documents, receipts, labels, QR/barcodes, template versions, evidence immutability, reprint history. |
| `SaaS Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md` | Receipt generation, immutable finance history, payment idempotency, cashier and reconciliation. |
| `SaaS Platform/API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md` | Commands, queries, events, jobs, idempotency, realtime, retries, dead-letter handling, observability. |
| `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md` | Tenant, branch, role, permission, support-access, audit, and application access rules. |
| `SaaS Platform/NON_FUNCTIONAL_REQUIREMENTS.md` | Security, accessibility, reliability, tenant isolation, offline recovery, testing, and operational readiness. |
| `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md` | Plain language, guided tasks, review, confirmation, errors, accessibility, responsive behavior. |
| Front Desk, Owner, Technician, Customer Portal architecture | Receipt, quotation, invoice, release, report, label, and staff workflow entry points. |
| `TECA/IMPLEMENTATION_BUILD_PLAN.md` | Foundation-first implementation, physical schema, services, UI, testing, deployment, and rollback gates. |

## Official printing standards and platform references

### Printer Working Group — IPP Everywhere

Adopted decisions:

- IPP is the preferred vendor-neutral network/page-printer protocol.
- Driverless printer discovery and capability retrieval use IPP/DNS-SD where the selected runtime and network allow it.
- Printer capabilities, not model-name guesses, determine media, duplex, color, resolution, and finishing availability.
- Cloud/managed print adapters may act as intermediaries while preserving the same internal print-job contract.

### OpenPrinting CUPS — IPP implementation

Adopted decisions:

- Linux/macOS local print-agent implementations may use CUPS/IPP rather than embedding vendor drivers in the SaaS.
- The print agent must translate internal jobs into supported IPP operations and expose normalized status to the SaaS.

### Microsoft Modern Print Platform and Universal Print

Adopted decisions:

- Windows page-printer support prefers the modern IPP-based Windows print platform.
- Universal Print is an optional enterprise adapter, not a mandatory dependency.
- Existing non-native printers may require a managed connector; connector health must be monitored.
- A capability shown to users must be supported by the service, printer, and producing application.
- Universal Print is not the primary solution for generic thermal/label printers because support is limited and device-specific.

### Apple AirPrint

Adopted decisions:

- iPhone, iPad, macOS, and Apple Vision Pro page printing uses the native print sheet and AirPrint-capable printers when available.
- AirPrint is a driverless user-mediated path; the SaaS does not promise unattended silent printing through it.
- Same-network discovery is the normal local path unless an approved managed print service is used.

### Android Print Framework

Adopted decisions:

- Android native/mobile output uses `PrintManager` and a print adapter for page documents.
- The application must generate layout-aware paged output and allow the Android framework to apply printer settings.
- Android page printing remains user-mediated; unattended thermal printing requires a separate approved device adapter.

### Browser printing — HTML `window.print()`

Adopted decisions:

- Standard web printing opens the browser/OS print dialog.
- Browser printing is the universal fallback for page documents but cannot guarantee which printer is selected or whether physical output completed.
- Browser completion is recorded as `SUBMITTED_TO_OS` or `DIALOG_CLOSED`, never `PRINTED_CONFIRMED`.

### WebUSB, Web Serial, and Web Bluetooth

Adopted decisions:

- These browser APIs are optional experimental/limited-availability adapters only.
- They are not the default cross-browser production strategy.
- Use requires HTTPS, explicit user permission, allowlisted device identifiers, and capability testing.
- Unsupported browsers fall back to the local print agent, native print framework, or OS dialog.

### Epson ESC/POS

Adopted decisions:

- ESC/POS is treated as an adapter protocol for compatible receipt printers, not as a universal printer language.
- Command support is capability- and model-profile-driven.
- Basic text, alignment, feed, barcode/QR, raster image, status, and cutter functions are independently declared.
- Unsupported extension commands are never sent based solely on brand assumptions.

### Star CloudPRNT

Adopted decisions:

- Vendor cloud printing may be implemented through an adapter when a tenant selects supported Star hardware.
- Jobs, authentication, status, media types, timeouts, and failures are normalized into the internal print-job lifecycle.
- The SaaS core remains vendor-neutral.

## Official IT operations and service-management references

### Microsoft Cloud Adoption Framework — RAMP and operating models

Adopted decisions:

- IT operations responsibilities are split into Ready, Administer, Monitor, and Protect functions.
- The architecture supports centralized, shared-management, and outsourced operating models.
- Platform responsibilities and tenant/workload responsibilities are separate.
- Every responsibility has a named owner, escalation, operating procedure, and audit trail.

### Azure Well-Architected Operational Excellence

Adopted decisions:

- Monitoring is designed as a parallel operational stack using logs, metrics, traces, events, health models, and correlation IDs.
- Incident management has structured detection, triage, mitigation, recovery, communication, root-cause analysis, and post-incident learning.
- Changes move through controlled review, testing, safe deployment, monitoring, and rollback.
- Routine and emergency procedures use reusable runbooks and automation.

### NIST Cybersecurity Framework 2.0 and SP 800-61 Rev. 3

Adopted decisions:

- Incident preparation, detection, response, and recovery are integrated into normal operations rather than isolated in one emergency screen.
- Security incidents have clear severity, roles, evidence preservation, communication, containment, recovery, and lessons-learned requirements.

### NIST SP 800-128

Adopted decisions:

- Configuration items, approved baselines, change requests, impact analysis, authorization, implementation evidence, and rollback are controlled.
- High-risk technical changes require a change-control board or equivalent approval authority.

## Architecture conclusions

1. The SaaS needs one internal print-orchestration contract with pluggable transport adapters.
2. Page printing and thermal printing are separate output classes with different confirmation and compatibility behavior.
3. The safest broad page-printer strategy is PDF/printable HTML plus OS/native print frameworks and IPP-capable adapters.
4. The safest broad thermal-printer strategy is a signed local print agent or approved vendor adapter with ESC/POS/profile support.
5. Staff must never choose from raw printer driver names without location, media, status, and recommended-use context.
6. Printer failures must not corrupt payment, release, stock, warranty, or job records.
7. A dedicated IT Operations Application is required for tenant technical support, assets, printers, integrations, monitoring, incidents, changes, knowledge, and release operations.
8. Platform SaaS operations and tenant IT operations remain separate, with controlled support access between them.
