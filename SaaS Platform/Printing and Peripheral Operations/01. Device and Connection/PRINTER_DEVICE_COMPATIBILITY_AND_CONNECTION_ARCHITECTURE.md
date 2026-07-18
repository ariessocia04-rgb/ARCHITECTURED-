# PRINTER DEVICE COMPATIBILITY AND CONNECTION ARCHITECTURE

## Purpose

Define exactly how ARCHITECTURED discovers, enrolls, classifies, selects, connects to, monitors, and safely supports receipt, page, and label printers across web, Windows, macOS, Linux, Android, and Apple devices.

## Core principle

The product must not claim that every printer can be controlled directly from a browser. A printer is supported only when:

```text
Printer hardware
+ connection method
+ operating system/runtime
+ installed or driverless capability
+ selected print adapter
+ requested document profile
+ completed compatibility test
= SUPPORTED PATH
```

## Printer classes

### 1. Thermal receipt printers

Typical uses:

- payment receipt;
- deposit receipt;
- intake receipt;
- queue ticket;
- compact pickup/release acknowledgement;
- cashier summary slip.

Capability fields:

- paper width: 58 mm, 80 mm, or declared custom roll;
- printable width in dots;
- DPI;
- text code pages and Unicode/raster behavior;
- raster image support;
- QR/barcode support;
- automatic cutter;
- partial/full cut;
- cash-drawer pulse support;
- paper sensor and cover status;
- connection protocol;
- bidirectional status support.

### 2. Page printers

Typical uses:

- A4/Letter job order;
- quotation;
- invoice;
- official receipt copy;
- diagnosis and testing report;
- release form;
- warranty certificate;
- audit, inventory, finance, and management reports.

Capability fields:

- supported media sizes;
- printable margins;
- portrait/landscape;
- simplex/duplex;
- monochrome/color;
- DPI;
- input trays;
- collation and finishing when relevant;
- accepted document formats such as PDF, PWG Raster, or driver-rendered output;
- IPP/AirPrint/Windows/native framework availability.

### 3. Label printers

Typical uses:

- device/job label;
- part/serial label;
- warehouse/bin label;
- QR/barcode label;
- tamper-evident or warranty label when approved.

Capability fields:

- continuous vs die-cut media;
- label width/height;
- gap/black-mark sensing;
- DPI;
- supported barcode/QR formats;
- cutter/peeler;
- printer command language or driver path;
- calibration status.

### 4. Impact or multipart printers

Optional legacy support only through a tested operating-system or local-agent adapter. The SaaS does not send model-specific control sequences without an approved profile.

## Connection and transport adapters

### Adapter A — Browser / operating-system print dialog

```text
ARCHITECTURED web app
→ printable HTML or PDF
→ browser `window.print()` / PDF viewer
→ operating-system print dialog
→ user selects installed printer
```

Use for:

- broad page-printer compatibility;
- one-off printing;
- unmanaged customer or owner computers;
- fallback when managed printing is unavailable.

Status limitation:

- records `PREVIEWED`, `DIALOG_OPENED`, and optionally `DIALOG_CLOSED`;
- never records physical success as confirmed;
- user may explicitly confirm output or choose another delivery channel.

### Adapter B — Native mobile print framework

```text
ARCHITECTURED mobile shell
→ paged PDF/render adapter
→ Android PrintManager or Apple native print sheet
→ user selects native printer/service
```

Use for mobile page documents. Silent printing is not assumed.

### Adapter C — Driverless IPP / AirPrint / modern Windows printing

```text
Print Orchestrator
→ IPP-capable client/service or OS print stack
→ capability query
→ validated print job
→ printer queue
→ normalized job status
```

Use for managed page printers and supported network/USB printer class devices.

### Adapter D — Secure Local Print Agent

```text
SaaS Print Orchestrator
→ signed/encrypted job envelope
→ enrolled branch workstation print agent
→ OS spooler / CUPS / IPP / ESC-POS / approved vendor SDK
→ physical printer
→ agent status callback
```

Use for:

- silent receipt printing after authorized cashier action;
- USB thermal printers;
- LAN thermal printers;
- Bluetooth printers when the local OS/agent supports them;
- label printers;
- legacy page printers requiring installed drivers;
- offline branch queueing.

### Adapter E — Managed cloud print service

Examples include an approved IPP shared-infrastructure service, Microsoft Universal Print, or vendor cloud-print adapter.

Use only when:

- tenant plan and policy enable it;
- printer/connector is enrolled;
- identity, location, and access assignment are configured;
- provider health and data-handling requirements pass.

### Adapter F — Experimental browser-device adapter

WebUSB, Web Serial, or Web Bluetooth may be enabled only for specifically tested devices and browser versions.

Rules:

- HTTPS and explicit user activation required;
- user permission cannot be bypassed;
- vendor/product filters are allowlisted;
- unsupported browsers never see this as the only printing path;
- no raw device identifiers are exposed outside authorized IT screens;
- connection is revoked when risk, user, workstation, or policy changes.

## Canonical adapter interface

```text
PrintAdapter
├── adapter_code
├── supportsDiscovery(context)
├── discoverPrinters(context)
├── getCapabilities(printerRef)
├── validateJob(job, capabilities)
├── submitJob(job)
├── getJobStatus(adapterJobRef)
├── cancelJob(adapterJobRef)
├── healthCheck()
└── normalizeError(providerError)
```

Required implementations:

- `BROWSER_DIALOG`;
- `NATIVE_MOBILE`;
- `IPP_OS`;
- `LOCAL_AGENT_OS_SPOOLER`;
- `LOCAL_AGENT_ESC_POS`;
- optional `UNIVERSAL_PRINT`;
- optional vendor adapters;
- optional tested `WEBUSB`, `WEB_SERIAL`, or `WEB_BLUETOOTH`.

## Printer registry

Every managed printer record contains:

```text
printer_id
printer_display_name
printer_class
manufacturer
model
serial_number or masked asset identifier
firmware_version when available
tenant_id
branch_id
physical_location
workstation_binding when applicable
connection_type
adapter_code
adapter_printer_reference
network_address reference when permitted
usb vendor/product identifiers when permitted
bluetooth service/profile reference when permitted
status
capability_profile_version
default_document_profiles
allowed_roles
maintenance_owner
last_seen_at
last_successful_test_at
last_error_code
created_by
approved_by
version
```

Sensitive addresses, credentials, community strings, tokens, or provider secrets are stored only through approved secret/reference mechanisms.

## Normalized printer status

```text
UNENROLLED
ENROLLING
ONLINE_READY
ONLINE_BUSY
OFFLINE
PAPER_LOW
PAPER_OUT
COVER_OPEN
JAMMED
TONER_OR_INK_LOW
SUPPLY_EMPTY
ERROR_RECOVERABLE
ERROR_SERVICE_REQUIRED
MAINTENANCE
DISABLED
RETIRED
UNKNOWN
```

The UI shows plain-language status and next action. Raw vendor codes are visible only to authorized IT personnel.

## Capability profile

```text
PrinterCapabilityProfile
├── media_sizes
├── media_types
├── roll_width_mm
├── printable_width_dots
├── dpi
├── color_modes
├── duplex_modes
├── orientations
├── copies
├── trays
├── cutter_modes
├── cash_drawer
├── barcode_symbologies
├── qr_models
├── raster_formats
├── text_code_pages
├── unicode_strategy
├── accepted_job_formats
├── status_reporting
└── profile_source and verified_at
```

Capability sources, in preferred order:

1. live IPP/native/provider capability query;
2. local-agent/driver capability query;
3. vendor SDK/model profile validated by tests;
4. IT-authored manual profile with warning and approval;
5. generic fallback profile with limited features.

## Printer selection algorithm

```text
1. Resolve tenant, branch, user, workstation, and document type.
2. Resolve required print profile and media.
3. Filter printers by tenant/branch/workstation assignment.
4. Filter by active status and adapter health.
5. Filter by required capabilities.
6. Apply document-policy restrictions.
7. Rank:
   a. explicit workstation default;
   b. branch/document-type default;
   c. same physical location;
   d. online/ready status;
   e. last successful health/test;
   f. user preference when allowed.
8. Show recommended printer and reason.
9. Allow authorized alternate selection.
10. Revalidate capabilities at submission.
```

## Default routing examples

| Document | Preferred printer | Fallback |
|---|---|---|
| Payment receipt | Branch cashier 80 mm thermal | 58 mm profile, page-printer PDF, email receipt |
| Intake receipt | Front-desk thermal or A4/Letter page printer based on tenant policy | PDF/email/message |
| Job order | A4/Letter page printer | PDF/email |
| Quotation | A4/Letter page printer | Customer Portal/email/PDF |
| Release form | A4/Letter page printer | PDF/email; thermal summary only when policy permits |
| Device label | Approved label printer | A4 label sheet or QR displayed for later print |
| Inventory label | Warehouse label printer | queued batch or A4 label sheet |
| Executive report | A4/Letter page printer | PDF download/email |

## Workstation binding

Printer defaults may be bound to:

- tenant;
- branch;
- department;
- physical location;
- workstation;
- cashier station;
- warehouse station;
- document profile;
- user preference.

Specific workstation defaults override broader defaults only when the user and document are authorized and the printer remains compatible.

## Compatibility certification

A printer model/path is marked supported only after recording:

- hardware and firmware;
- operating system and version;
- adapter and version;
- connection method;
- media profile;
- document types tested;
- text/Unicode/QR/barcode/raster results;
- cutter/duplex/color results where relevant;
- offline/reconnect behavior;
- status reporting;
- security review;
- test date and tester;
- known limitations.

Support status:

```text
UNTESTED
LAB_VALIDATED
PILOT_APPROVED
PRODUCTION_SUPPORTED
LIMITED_SUPPORT
DEPRECATED
BLOCKED
```

## Acceptance rules

- No job is submitted to an incompatible media profile.
- No printer from another tenant or unauthorized branch is discoverable.
- Offline or unhealthy printers provide a fallback rather than a false success.
- Physical confirmation is shown only when the selected adapter can provide trustworthy job/printer status.
- Unknown capability never defaults to cutter, cash-drawer, duplex, color, or protected label operations.
- Every support claim is traceable to a compatibility record.
