# PAGE PRINTER, PDF, IPP, AIRPRINT, WINDOWS, AND ANDROID ARCHITECTURE

## Purpose

Define the primary architecture for A4, Letter, Legal, A5, and page-based bond-paper output across web browsers, Windows, macOS, Linux, Android, iOS/iPadOS, and managed cloud print services.

## PDF-first rule

Official page documents are rendered to a deterministic PDF artifact before submission whenever practical.

Benefits:

- immutable document version;
- consistent pagination;
- embedded or approved fonts;
- predictable A4/Letter layout;
- digital delivery and archive reuse;
- printer-independent source artifact;
- checksum and auditability.

Printable HTML remains a browser fallback and must map to the same source snapshot and template version.

## Supported output paths

### 1. Web browser / OS dialog

```text
Final PDF or printable HTML
→ preview
→ browser print command
→ OS print dialog
→ user selects installed page printer
```

This is the default broad-compatibility path for unmanaged desktop/laptop environments.

Limitations:

- SaaS cannot silently force a specific printer;
- physical completion cannot be trusted;
- OS/browser may expose different options;
- margins/scaling must be previewed;
- status is `SUBMITTED_TO_OS` plus optional user confirmation.

### 2. IPP / driverless local or network printing

```text
Final PDF/PWG Raster artifact
→ capability query
→ IPP job attributes
→ printer or print server
→ normalized job status
```

Use when an approved runtime, local agent, CUPS service, Windows print stack, or managed service exposes IPP.

### 3. Apple AirPrint/native print sheet

```text
Final PDF / native printable content
→ Apple print sheet
→ AirPrint-capable printer
→ user-controlled output
```

The application supplies document name, pagination, orientation, and permitted print metadata but does not bypass user selection/confirmation.

### 4. Android Print Framework

```text
Android application screen
→ PrintManager
→ PrintDocumentAdapter
→ layout callback
→ write PDF pages
→ Android print service/printer
```

Layout logic responds to selected media, margins, resolution, color mode, and page range. The source business document remains server-authoritative.

### 5. Windows native/modern print platform

A Windows desktop shell or local print agent may use supported Windows printing APIs and the modern IPP print platform. Advanced OEM functions require the printer/OEM Print Support App rather than custom untrusted driver logic in the SaaS.

### 6. macOS/Linux OS spooler

A local agent may submit PDF through the operating-system queue/CUPS and retrieve normalized queue/job status when available.

### 7. Managed cloud printing

Optional enterprise adapter:

- Microsoft Universal Print;
- an approved IPP shared-infrastructure service;
- an approved managed print provider.

The SaaS maintains its own authorization and document audit. Provider authorization never replaces tenant/branch/document checks.

## Page print profile

```text
PagePrintProfile
├── profile_code
├── media_size
├── orientation
├── margin_policy
├── scaling_policy
├── color_policy
├── duplex_policy
├── resolution_policy
├── copies_policy
├── tray_policy
├── finishing_policy
├── page_range_policy
├── document_format
└── required_capabilities
```

## Standard profiles

### `PAGE_A4_STANDARD`

- A4 portrait;
- simplex default;
- monochrome allowed;
- color optional;
- no forced scaling;
- safe margins from template and printer capability.

### `PAGE_LETTER_STANDARD`

- Letter portrait;
- otherwise equivalent to A4 standard.

### `PAGE_A4_DUPLEX_REPORT`

- A4 portrait or landscape according to report;
- duplex requested only when printer reports support;
- content remains understandable if simplex fallback is chosen.

### `PAGE_LEGAL_REPORT`

- Legal media required;
- no silent shrink-to-fit on A4/Letter;
- unavailable media triggers alternate profile/preview decision.

### `PAGE_A5_COMPACT`

- A5 templates only;
- not used for documents whose legal/financial content becomes unreadable.

## Capability negotiation

The adapter queries or resolves:

- supported media sizes;
- printable area/margins;
- portrait/landscape;
- color modes;
- duplex;
- copies;
- resolution;
- trays;
- finishing;
- supported document formats;
- queue/job status.

Requested settings are divided into:

```text
REQUIRED — job must fail or use an approved alternate profile if unavailable
PREFERRED — adapter may safely fall back and report warning
USER_SELECTABLE — shown in native/managed print UI
FORBIDDEN — disabled by policy
```

Example:

- required: A4 vs Letter when the form is certified only for one size;
- preferred: duplex for long reports;
- user-selectable: color when content remains valid in grayscale;
- forbidden: unauthorized secure/hold or external destination.

## Scaling rules

- Default is 100% / actual size for certified forms.
- Fit-to-page is allowed only when the template declares it safe.
- Never silently crop signatures, totals, QR codes, terms, or document numbers.
- Print preview warns when driver/OS scaling could change output.
- The generated PDF defines page geometry; native framework layout may regenerate from the same source snapshot for selected media.

## Document-specific routing

| Document | Default media | Notes |
|---|---|---|
| Full intake receipt/form | A4 or Letter | signature/condition evidence summary |
| Job order | A4 or Letter | page numbering required |
| Quotation | A4 or Letter | exact approved version |
| Invoice | A4 or Letter | issued snapshot |
| Receipt digital/full copy | A4/Letter or thermal | same payment receipt identity |
| Diagnosis report | A4/Letter | internal/customer-safe version separated |
| Test/quality report | A4/Letter | finalized evidence references |
| Release form | A4/Letter | signature/handover details |
| Warranty certificate | A4/Letter or approved card | verification token |
| Daily/management report | A4/Letter; landscape when needed | permission-scoped |

## Managed printer assignment

Managed page printers may be assigned to:

- tenant;
- branch;
- building/floor/location;
- department;
- workstation group;
- user/group;
- document type.

The user sees a business-friendly name such as:

```text
Front Desk A4 Printer — Boroko Branch
Finance Color Printer — Main Office
Warehouse Label Sheet Printer — Stock Room
```

Raw queue names and IP addresses remain IT-only.

## Cloud print job data

Before using a cloud service, architecture records:

- provider;
- region/data route;
- retention behavior;
- encryption;
- tenant/customer partitioning;
- identity/access mapping;
- printer assignment;
- job expiry;
- deletion behavior;
- support and outage path;
- provider audit reference.

## Offline and degraded modes

### Browser/native dialog available

Allow local printing of an already finalized artifact, subject to policy.

### Cloud print provider unavailable

Offer:

- local/OS dialog;
- another managed adapter;
- PDF download;
- email/customer portal;
- queue for later.

### Network printer unavailable

Show status and compatible alternatives. Do not auto-route protected documents to a printer in another branch without authorization.

## User experience

Print preview shows:

- document title/number/version;
- A4/Letter/Legal profile;
- page count;
- portrait/landscape;
- duplex/color preference;
- recommended printer and location;
- readiness/queue warning;
- digital delivery choices;
- plain-language note explaining when the operating-system dialog will appear.

After submission:

- managed path: progress and normalized status;
- browser/native path: `The document was sent to your device's print window. Confirm whether it printed correctly.`

## Accessibility

- Digital PDF must have approved accessible tagging strategy where required.
- The print workflow remains keyboard accessible.
- Printer/status selection does not rely on color alone.
- Errors identify the document, required media, and recovery action.
- A digital accessible alternative is available when paper output is inaccessible.

## Security

- Cloud/local adapter receives only the finalized artifact and necessary job metadata.
- Protected PDFs use controlled temporary access and expiry.
- Printer assignment is tenant/branch scoped.
- Print job names avoid exposing unnecessary customer/device details on shared queues.
- Secure/pull printing may be enabled only through an approved provider and policy.
- Provider and queue identifiers are not trusted as authorization.

## Acceptance rules

- A4 and Letter layouts are independently tested rather than assumed interchangeable.
- Legal/A5 output appears only when the document template and printer support it.
- Unsupported duplex/color/finishing options degrade safely with a visible warning.
- Browser/native dialog paths never falsely report physical confirmation.
- Page output reproduces the finalized document checksum/version.
- PDF remains available for authorized digital delivery and audit.
