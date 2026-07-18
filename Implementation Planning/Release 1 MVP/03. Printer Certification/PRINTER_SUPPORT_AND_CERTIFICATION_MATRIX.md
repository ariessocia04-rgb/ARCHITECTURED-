# RELEASE 1 MVP — PRINTER SUPPORT AND CERTIFICATION MATRIX

## Purpose

Define exactly what Release 1 can claim about printing, how the software chooses a compatible printer, which operating systems and connection paths are supported, and what test evidence is required before a physical printer model becomes certified.

No physical printer model is certified merely because it advertises ESC/POS, AirPrint, IPP, Windows support, or a compatible paper width.

## Support levels

| Level | Name | Meaning | Release 1 status |
|---|---|---|---|
| `P0` | Digital document | PDF generated, stored, downloaded, or emailed; no physical printer dependency | MANDATORY |
| `P1` | Browser/OS page print | Application opens OS/browser print workflow for an installed printer | MANDATORY |
| `P2` | Managed OS queue through local agent | Windows local agent submits rendered output to an approved OS queue | MANDATORY FOR PILOT |
| `P3` | Driverless IPP network print | Printer advertises and passes required IPP Everywhere capabilities | CONDITIONAL CERTIFICATION |
| `P4` | Direct thermal/ESC-POS adapter | Agent sends tested byte commands to an exact profile/device path | MANDATORY FOR ONE 80 MM PILOT PATH |
| `P5` | Native mobile print | Generated PDF printed using Android/iOS system print framework | CONDITIONAL USER PATH |
| `P6` | Label/legacy/vendor adapter | Exact media/device/vendor adapter with dedicated tests | LATER OR CONDITIONAL |

## Primary pilot environment

```text
Staff workstation OS: Windows 11 x64, current supported release
Primary browsers: Microsoft Edge and Google Chrome, current and previous major
Local agent: Tauri/Rust signed pilot build
Page output: A4 and Letter through installed Windows printer queue
Receipt output: 80 mm thermal through one certified USB or LAN path
Fallback: PDF/download/email/another eligible printer/queue later/IT ticket
```

Windows on ARM, macOS local-agent execution, Linux local-agent execution, Android direct thermal, iOS direct thermal, and Bluetooth direct printing are not mandatory Release 1 support claims.

## Mandatory document profiles

### `DOC-PAGE-A4-V1`

- Media: ISO A4, 210 × 297 mm.
- Orientation: portrait by default; landscape only for approved reports.
- Printable margins: template-safe minimum; never assume borderless.
- Color: grayscale-safe; color optional.
- Resolution: vector/PDF preferred; raster assets at sufficient print DPI.
- Supported documents: intake form, job order, quotation, invoice, release form, warranty certificate, reports.

### `DOC-PAGE-LETTER-V1`

- Media: US Letter, 8.5 × 11 inches.
- Same business-document rules as A4.
- Pagination and signatures must not depend on A4-only page breaks.

### `DOC-RECEIPT-80-V1`

- Media: nominal 80 mm roll.
- Usable width is device profile data, not assumed from roll name.
- Required content: tenant/branch, receipt number, timestamp, cashier, payment references, line summary, totals, balance, payment method, job/customer-safe reference, QR/verification token when approved, reprint marker.
- Required capabilities: text, alignment, line feed, cut or explicit manual-tear fallback.
- Optional capabilities: QR, barcode, logo, cash drawer.
- Logo/QR/barcode is enabled only when the exact profile passes fixture and hardware tests.

### `DOC-RECEIPT-58-V1`

- Conditional profile.
- Must use a separate compact layout with reduced columns and no horizontal clipping.
- Not certified until an exact device/media test passes.

### `DOC-LABEL-*`

- Exact width/height, gap/mark, orientation, DPI, darkness, QR/barcode size, and adhesive use must be recorded per label stock.
- No generic label-printer support claim in Release 1.

## Printer capability record

Every discovered or manually enrolled printer records:

```text
printer_id
adapter_type
manufacturer_reported
model_reported
serial_or_device_identifier
os_queue_name_or_uri
connection_type
host_or_usb_mapping_reference
branch_id
workstation_id
media_supported[]
media_loaded_or_configured
printable_width
resolution_dpi[]
color_capable
duplex_capable
cutter_capable
drawer_capable
qr_capable
barcode_capable
raster_capable
native_text_capable
ipp_versions[]
document_formats[]
status_capabilities[]
firmware_or_driver_version
last_discovered_at
last_health_at
certification_state
certification_record_id
```

The application never trusts a display name alone to determine compatibility.

## Adapter matrix

| Adapter | Suitable output | Connection | Confirmation semantics | Release 1 |
|---|---|---|---|---|
| Browser/OS dialog | A4/Letter/PDF | installed OS printer | `SUBMITTED_TO_OS`; physical completion unknown | Required |
| Windows OS queue agent | page/receipt/label if driver/profile supports | USB/LAN/Wi-Fi via Windows queue | queue submission plus best available status | Required |
| IPP Everywhere | page and some receipt/label printers | LAN/Wi-Fi | IPP job/state response | Conditional |
| Direct ESC/POS | thermal receipt | USB/LAN/serial adapter | bytes accepted plus device/status evidence where available | Required for one 80 mm path |
| Android Print Framework | page/PDF | Android print service | OS handoff; physical completion varies | Conditional |
| Apple AirPrint | page/PDF | iOS/macOS network print | OS handoff; physical completion varies | Conditional |
| Vendor cloud/API | vendor-supported devices | internet/cloud | vendor job status normalized | Not required |
| Bluetooth direct | thermal/label | Bluetooth | device-specific | Not certified in R1 |

## Certification lifecycle

```text
CANDIDATE
→ PROFILE_DEFINED
→ FIXTURE_RENDER_PASS
→ LAB_CONNECTED
→ FUNCTIONAL_TEST_PASS
→ FAILURE_RECOVERY_PASS
→ SECURITY_REVIEW_PASS
→ PILOT_APPROVED
→ PRODUCTION_CERTIFIED — later release only
```

Exceptional states:

- `BLOCKED_MISSING_DRIVER`
- `BLOCKED_UNSUPPORTED_MEDIA`
- `BLOCKED_STATUS_UNRELIABLE`
- `FAILED_LAYOUT`
- `FAILED_CUTTER`
- `FAILED_QR_BARCODE`
- `FAILED_RECONNECT`
- `SUSPENDED_DRIVER_OR_FIRMWARE_CHANGE`
- `RETIRED`

A driver, firmware, OS, agent, renderer, or template change can invalidate certification and require retest.

## Candidate support matrix

No brand/model in this table is certified until the evidence fields are complete.

| Candidate class | OS | Connection | Adapter | Required profile | Initial status |
|---|---|---|---|---|---|
| Standard office laser/inkjet | Windows 11 | installed USB/LAN/Wi-Fi queue | Browser/OS + local agent queue | A4/Letter | CLASS CANDIDATE |
| IPP Everywhere office printer | Windows/macOS/mobile | LAN/Wi-Fi | IPP/AirPrint/native | A4/Letter | CLASS CANDIDATE |
| 80 mm ESC/POS-compatible thermal | Windows 11 | USB queue or direct USB/LAN | OS queue or direct ESC/POS | 80 mm receipt | ONE EXACT MODEL/PATH REQUIRED FOR PILOT |
| 58 mm thermal | Windows 11 | USB/LAN | direct/OS queue | 58 mm receipt | CONDITIONAL |
| QR/barcode label printer | Windows 11 | OS queue/IPP/vendor adapter | exact profile | exact label stock | LATER/CONDITIONAL |
| Impact/dot-matrix receipt/slip | Windows 11 | OS queue | driver-based page/text | exact form | OUT OF R1 UNLESS OWNER APPROVES |

## Hardware test inventory

For every candidate model/path, record:

- test record ID;
- manufacturer/model/serial;
- firmware;
- driver and OS build;
- connection and cable/network setup;
- agent version;
- adapter and capability profile version;
- loaded media and paper dimensions;
- rendered template and fixture checksum;
- test operator/date/location;
- photos/scans of physical output;
- device/OS/agent logs without sensitive data;
- pass/fail per test;
- limitations;
- reviewer and approval;
- support state and expiry/retest condition.

## Required page-printer tests

1. Printer discovery or manual enrollment.
2. A4 single-page document.
3. Letter single-page document.
4. Multi-page pagination.
5. Long customer/device text wrapping.
6. Table overflow handling.
7. Signature and footer placement.
8. QR/barcode readability when enabled.
9. Grayscale readability.
10. Wrong media selected.
11. Printer offline.
12. Paper out/jam when status is available.
13. Cancel and retry.
14. Duplicate submission protection.
15. Browser dialog cancel does not claim physical print.
16. Local-agent queue reconnect after restart.

## Required 80 mm thermal tests

1. Initialization/reset.
2. Character set and locale fixtures.
3. Tenant/branch header.
4. Long item/description wrapping.
5. Decimal/currency alignment.
6. Discount/tax/total/balance accuracy.
7. Partial-payment and full-payment variants.
8. Reprint marking and unchanged payment reference.
9. QR verification readability when supported.
10. Logo fallback when unsupported.
11. Cutter operation or manual-tear fallback.
12. Paper out/offline/reconnect.
13. USB/LAN disconnect during job.
14. Agent restart with queued job.
15. Same idempotency key replay.
16. Duplicate button press.
17. Wrong tenant/branch/workstation rejection.
18. Expired/tampered signed job rejection.
19. 100 sequential receipt soak test.
20. Physical receipt reconciliation with print-job audit.

## Status normalization

```text
REQUESTED
RENDERING
READY_FOR_DELIVERY
QUEUED
SUBMITTED_TO_OS
SUBMITTED_TO_DEVICE
PRINTING
PRINTED_CONFIRMED
COMPLETED_UNCONFIRMED
FAILED_RETRYABLE
FAILED_TERMINAL
CANCELLED
EXPIRED
RECONCILIATION_REQUIRED
```

`PRINTED_CONFIRMED` is used only when the adapter/device provides sufficient evidence. Browser dialog completion alone never reaches that state.

## Selection algorithm

```text
Requested Document Profile
→ Resolve tenant/branch/workstation policy
→ Find active enrolled printers in scope
→ Filter by certified adapter and media
→ Filter by required capabilities
→ Check health/status/freshness
→ Rank default, proximity, reliability, queue depth
→ Show eligible choices or apply approved default
→ Preview and confirm when required
→ Create immutable print request/job
→ Deliver through selected adapter
→ Record truthful status and fallback
```

Users cannot select an incompatible printer merely because it exists in the operating system.

## Failure and fallback policy

- A print failure never rolls back a completed payment, intake, release, warranty, or stock movement.
- A document exists before physical delivery.
- Retry reuses the same document version and creates a new print attempt, not a new business transaction.
- Staff may select another eligible printer, download/send PDF, queue for later, or create an IT ticket.
- Final release may continue with approved digital evidence or manager exception only when the business policy allows it and the decision is audited.

## Release 1 claim boundary

```text
DIGITAL PDF: SUPPORTED AFTER AUTOMATED TESTS
A4/LETTER OS PRINT: SUPPORTED AFTER BROWSER/OS TESTS
WINDOWS LOCAL AGENT: SUPPORTED AFTER SIGNED PACKAGE AND SECURITY TESTS
80 MM THERMAL: SUPPORTED ONLY FOR EXACT CERTIFIED MODEL/CONNECTION/PROFILE
58 MM: CONDITIONAL
IPP/AIRPRINT/ANDROID: USER PATH AFTER PLATFORM TEST; NOT SILENT UNIVERSAL PRINT
LABEL/LEGACY/BLUETOOTH: NOT GENERALLY SUPPORTED IN R1
ANY PRINTER: NEVER CLAIMED
```