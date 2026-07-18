# THERMAL RECEIPT AND ESC/POS ARCHITECTURE

## Purpose

Define reliable receipt printing for 58 mm and 80 mm thermal printers through operating-system drivers, a secure local print agent, or approved vendor adapters. ESC/POS is an adapter protocol, not a universal guarantee.

## Supported paths

```text
PATH 1 — DRIVER / OS
Receipt PDF or raster
→ OS spooler
→ installed thermal printer driver
→ printer

PATH 2 — LOCAL AGENT ESC/POS
Structured receipt model
→ capability-specific ESC/POS renderer
→ signed local-agent job
→ USB / LAN / serial / supported Bluetooth connection
→ printer

PATH 3 — VENDOR CLOUD / SDK
Structured receipt or supported media artifact
→ approved vendor adapter
→ vendor service/device
→ normalized status
```

## Receipt domain model

The renderer receives structured, customer-safe data rather than arbitrary HTML:

```text
ReceiptModel
├── merchant
├── branch
├── receipt_number
├── issued_at and time_zone
├── customer_safe_reference
├── job_order_reference
├── invoice_reference
├── payment_method_safe_label
├── transaction_reference_safe_label
├── line_items[]
├── subtotal
├── tax_lines[]
├── discounts_or_credits[]
├── amount_paid
├── balance_remaining
├── cashier_or_station_safe_label
├── messages[]
├── verification_token
├── reprint_sequence
└── document_version and checksum
```

The printer adapter never calculates financial totals.

## Capability-driven ESC/POS profile

```text
EscPosPrinterProfile
├── profile_code and version
├── supported_models or validated identifiers
├── interface types
├── dpi
├── printable_width_dots
├── nominal_roll_width_mm
├── default_code_page
├── supported_code_pages
├── text_modes
├── raster_image_mode
├── barcode_support
├── qr_support
├── cutter_support
├── drawer_support
├── status_query_support
├── paper_sensor_support
├── max_job_bytes
├── line_feed_behavior
├── reset_behavior
└── known limitations
```

A model/profile must be compatibility-tested before production support.

## Renderer layers

```text
ReceiptModel
→ Layout Planner
→ Content Blocks
→ Encoding Strategy
→ ESC/POS Command Builder or Raster Renderer
→ Byte Validation
→ Job Envelope
```

### Content blocks

- merchant header;
- branch/contact;
- transaction references;
- item rows;
- totals;
- payment/balance;
- verification QR;
- terms/support message;
- reprint marker;
- footer/feed/cut.

## Text vs raster strategy

### Text mode

Use when:

- characters are supported by the selected code page;
- columns fit measured printer cells;
- no complex script or branding is required;
- speed and low byte size are priorities.

### Hybrid mode

Use text for ordinary lines and raster for:

- logo;
- unsupported localized text;
- complex totals table;
- signature/verification block;
- QR fallback.

### Full raster mode

Use when exact layout and character coverage are more important than byte size/speed. Raster dimensions must match the printer profile.

## Commands and feature gates

The adapter may use profile-approved command groups for:

- initialization/reset;
- alignment;
- emphasis/double size;
- line feed;
- absolute/relative positioning when validated;
- code-page selection;
- raster image printing;
- barcode and QR printing;
- status queries;
- paper feed;
- cutter;
- cash-drawer pulse.

Unknown or model-specific extension commands are disabled by default.

## Cutter rules

- `NO_CUT`, `PARTIAL_CUT`, and `FULL_CUT` are separate capabilities.
- Cut only after all receipt bytes have been accepted by the adapter.
- Feed before cut according to tested model profile.
- Cutter failure creates `PRINTED_WITH_HARDWARE_WARNING` when the content was printed.
- Do not retry the entire receipt automatically only because cutting failed.

## Cash drawer rules

Cash-drawer opening is a protected, separate action:

```text
Confirmed cash-payment workflow or authorized drawer-open request
→ cashier session validation
→ role and workstation check
→ printer/drawer capability check
→ explicit command
→ audit event
```

Printing a receipt does not automatically open a drawer unless tenant policy explicitly maps that payment action. Drawer commands are never available to ordinary print-template content.

## Status handling

When supported, normalize:

- ready;
- busy;
- paper low;
- paper out;
- cover open;
- cutter error;
- offline/disconnected;
- recoverable device error;
- service required.

When status is not available, display `STATUS_UNAVAILABLE` rather than assuming readiness.

## Unicode and localization

- The layout planner checks every string against the printer profile.
- Unsupported characters trigger raster fallback or a validated transliteration policy only when approved.
- User-entered names are never silently corrupted.
- The preview displays the actual selected rendering strategy.
- QR verification remains available when text rendering is constrained.

## QR and barcode

- Native printer QR/barcode commands are used only when the profile passes scan tests.
- Otherwise render to raster.
- Validate quiet zone, module size, error correction, and maximum data length.
- Encode opaque verification/mapping tokens only.

## Connection rules

### USB

Use OS spooler or local agent. Browser WebUSB is optional, explicitly permissioned, and limited to validated devices.

### LAN/Wi-Fi

Prefer IPP/driver path when supported, otherwise a secure local-agent/vendor protocol path. Raw unauthenticated port printing is disabled by default and requires an approved risk exception.

### Serial/virtual COM

Use local agent with explicit port enrollment, baud/protocol profile, timeout, exclusive access, and reconnect behavior.

### Bluetooth

Use native/local-agent OS support. Browser Bluetooth is not the default because availability and printer profiles vary.

## Job envelope

```text
job_id
printer_id
profile_version
receipt_document_id
receipt_document_version
artifact_checksum
render_mode
payload_checksum
created_at
expires_at
copies
cut_policy
drawer_policy
signature
```

The local agent validates the signature, expiry, printer binding, and checksum before sending bytes.

## Duplicate prevention

- Payment confirmation creates one finalized receipt document.
- Printing creates delivery attempts linked to that receipt.
- Repeated callbacks or button taps return the existing logical job under the same idempotency key.
- Reprint creates a separately authorized reprint record using the same receipt document version.
- Agent stores recently processed job IDs to reject replay.

## Thermal receipt UX

Before printing, staff see:

- receipt number and amount;
- printer name/location;
- paper width;
- ready/offline/paper status;
- copies;
- customer delivery alternatives;
- reprint warning/reason when applicable.

After printing:

- `Printed and confirmed` when telemetry supports it;
- `Sent to printer` when only submission is known;
- `Printer needs paper`, `Cover is open`, or other plain-language recovery;
- actions: retry safe attempt, select another compatible printer, open PDF, email receipt, contact IT.

## Test matrix

Each supported thermal profile must test:

- short/long merchant and customer names;
- zero, one, and many line items;
- discounts, taxes, credit, partial payment, and balance;
- large amounts and currency formats;
- reprint marker;
- QR decode;
- barcode where enabled;
- English and supported localized characters;
- raster fallback;
- paper out and recovery;
- cover open;
- disconnect/reconnect;
- duplicate job replay;
- cutter behavior;
- drawer command authorization;
- 58 mm and 80 mm layout separately.

## Acceptance rules

- No receipt total is calculated by the printer layer.
- No unsupported command is sent based on brand name alone.
- No receipt is marked physically confirmed without trustworthy adapter evidence.
- Reprint is visibly marked and audited.
- Print failure never changes payment confirmation.
- Customer can receive a digital receipt when physical printing is unavailable.
