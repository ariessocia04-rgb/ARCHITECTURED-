# DOCUMENT TEMPLATE AND LAYOUT SPECIFICATION

## Purpose

Define the authoritative printable document model, source snapshots, template versions, media profiles, rendering formats, localization, preview, pagination, and validation rules for receipts, forms, reports, and labels.

## Rendering pipeline

```text
Authoritative business record
→ Finalized source snapshot
→ Approved document template version
→ Locale / currency / tax / branch branding
→ Print profile and media selection
→ Renderer
→ Rendered artifact with checksum
→ Preview and authorization
→ Print job
```

A print renderer never reads uncontrolled live fields after the source snapshot is finalized.

## Document families

| Family | Common source | Default output |
|---|---|---|
| Intake receipt | intake session, customer, device, condition, consent | thermal or A4/Letter PDF |
| Job order | job order and intake snapshot | A4/Letter PDF; optional compact summary |
| Quotation | approved quotation version | A4/Letter PDF; portal/email |
| Invoice | issued invoice snapshot | A4/Letter PDF |
| Payment receipt | confirmed payment and allocation | 80/58 mm thermal plus PDF copy |
| Refund/credit document | confirmed refund/credit snapshot | A4/Letter PDF; optional thermal acknowledgement |
| Diagnosis report | finalized diagnosis | A4/Letter PDF |
| Testing/quality report | finalized test and review | A4/Letter PDF |
| Release form | release readiness, identity, accessories, signature | A4/Letter PDF |
| Warranty certificate | activated warranty snapshot | A4/Letter PDF/card profile |
| Device/job label | job/device mapping and signed QR/barcode token | label media |
| Part/inventory label | item/serial/location mapping | label media |
| Operational report | report snapshot | A4/Letter/Legal PDF |
| Executive report | approved analytics/report snapshot | A4/Letter PDF |

## Canonical document record

```text
document_id
document_family_id
document_type
document_number
tenant_id
branch_id
related_entity_type
related_entity_id
source_snapshot_id
template_id
template_version_id
locale
currency
time_zone
render_profile_id
status
version
checksum
page_count or estimated_length
generated_by
generated_at
finalized_at
supersedes_document_id
visibility_class
retention_class
```

## Document states

```text
DRAFT
RENDERING
RENDER_FAILED
PREVIEW_READY
REVIEWED
FINALIZED
SUPERSEDED
ARCHIVED
DELETION_SCHEDULED
DELETED
```

Only `FINALIZED` versions are eligible for official receipt, invoice, release, warranty, or audit printing.

## Template version model

Every template version declares:

- document type;
- supported media profiles;
- required source fields;
- optional fields;
- calculation/display rules;
- legal and tax text version;
- branding slots;
- signature/QR/barcode slots;
- locale and font strategy;
- page-break behavior;
- accessibility metadata for digital copies;
- release status and effective dates;
- approval and change reason.

Published template versions are immutable. A correction creates a new version and does not rewrite prior finalized output.

## Print profiles

### Thermal 58 mm

```text
profile_code: THERMAL_58
media_class: ROLL
nominal_width_mm: 58
printable_width: from printer capability
render_modes: ESC_POS_TEXT_RASTER, RASTER_IMAGE, DRIVER_PDF where tested
```

Rules:

- Use capability-reported printable dots and margins.
- Use a compact hierarchy with one primary total and clear transaction/reference number.
- Long names, IMEI/serial data, and addresses wrap safely.
- Monetary columns must not truncate or overlap.
- QR/barcode size is validated against printable width.
- Customer-visible content excludes internal notes and secrets.

### Thermal 80 mm

```text
profile_code: THERMAL_80
media_class: ROLL
nominal_width_mm: 80
printable_width: from printer capability
render_modes: ESC_POS_TEXT_RASTER, RASTER_IMAGE, DRIVER_PDF where tested
```

Preferred for full payment receipts because it supports clearer itemization, taxes, allocations, balance, warranty note, and verification QR.

### Page A4

```text
profile_code: PAGE_A4
media: ISO A4
orientation: portrait by default
render_mode: PDF_FIRST
margins: template-controlled within printer printable area
```

### Page Letter

```text
profile_code: PAGE_LETTER
media: North American Letter
orientation: portrait by default
render_mode: PDF_FIRST
```

### Page Legal

Enabled only for templates and printers explicitly declaring Legal media support.

### Page A5

Optional for compact intake/job documentation where policy and printer capability permit.

### Label profiles

Each label profile declares exact width, height, gap/black-mark mode, safe area, DPI, orientation, QR/barcode size, text limits, and calibration requirements.

Example codes:

```text
LABEL_DEVICE_50X30
LABEL_JOB_60X40
LABEL_PART_40X25
LABEL_BIN_80X40
A4_LABEL_SHEET_<LAYOUT_VERSION>
```

## Payment receipt content

Required:

- tenant legal/trading name;
- branch and contact;
- receipt number;
- payment date/time and branch time zone;
- customer-safe name/reference;
- job order and invoice reference;
- payment method with masked provider/reference data;
- allocated invoice lines or summary;
- subtotal, tax, discount/credit where applicable;
- paid amount;
- remaining balance;
- cashier/confirming station reference without unnecessary personal data;
- reprint marker and reprint sequence when applicable;
- verification QR/token when enabled;
- customer support/warranty message where applicable.

Never print:

- full card data;
- authentication secrets;
- device passcodes;
- internal margins/costs;
- unrestricted staff notes;
- provider secret/reference fields not approved for display.

## Reprint rendering

A reprint uses the original finalized document version and records:

```text
reprint_id
original_document_id
print_job_id
reprint_sequence
reason
requested_by
approved_by when required
requested_at
watermark_or_header: REPRINT
```

Reprint never regenerates from current live customer or pricing data unless an authorized corrected document version is created first.

## Page layout rules

- Headers identify tenant, branch, document type, number, and status.
- Footers identify page number, total pages when known, document version, generated time, and verification reference.
- Tables repeat headers on new pages.
- Rows are not split when doing so would make amounts or item descriptions ambiguous.
- Signature sections remain with their associated confirmation text.
- Long reports use controlled page breaks and continuation headings.
- Duplex is optional and never required for legal comprehension.
- Background colors are not required to understand status.
- Grayscale output remains legible.

## Thermal layout rules

- Do not rely on proportional columns unless rendered as raster with validated width.
- Text mode uses measured character cells from the printer profile.
- If required characters are unavailable in the selected code page, render affected lines or the entire receipt as raster.
- Logos are optional and omitted automatically when quality or speed is unacceptable.
- Cut/feed commands are applied only after complete job content and only when capability permits.
- A failed cutter does not invalidate a successfully printed receipt; it produces a hardware warning.

## QR and barcode rules

- Encode opaque verification or mapping tokens, not raw customer/device/payment data.
- Validate symbology, data length, module size, error correction, quiet zone, and printable area.
- A human-readable reference remains available when scanning fails.
- QR/barcode content and document version are immutable for finalized documents.

## Localization

- Store canonical timestamps in UTC and render using branch/user time zone.
- Currency and tax formatting use the finalized financial snapshot.
- Template translations are versioned.
- Missing translation falls back to the approved tenant/default locale and is visible in validation.
- Thermal character support is validated; unsupported scripts use raster/PDF output.

## Preview rules

Preview shows:

- exact document version;
- destination profile;
- page/roll estimate;
- warnings for scaling, missing media, unsupported features, raster fallback, or low-quality QR;
- selected printer and status when managed;
- delivery alternatives.

Protected documents require review before print submission.

## Rendering formats

```text
PDF
├── authoritative page-document artifact
├── digital download/email/archive
└── browser/native/IPP submission

PRINTABLE_HTML
├── browser dialog fallback
└── never authoritative after final PDF exists

ESC_POS_BYTES
├── generated for an exact capability profile
└── delivered only through approved agent/vendor adapter

RASTER_IMAGE
├── thermal/label fallback
└── resolution and width tied to capability profile

IPP_JOB
└── document plus validated IPP attributes
```

## Validation gates

- Required source snapshot exists and is finalized.
- Template version is approved and effective.
- Media profile is allowed for document type.
- Required legal/financial fields fit without truncation.
- QR/barcode passes size and decode test.
- Page count/roll estimate is within policy.
- Fonts are embedded or approved for target path.
- Checksum is generated before official print.
- Customer-visible and internal fields are separated.
- Output is reproducible from source snapshot + template version + render profile.
