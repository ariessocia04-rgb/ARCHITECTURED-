# PRINTING AND PERIPHERAL OPERATIONS — WIREFRAME ARCHITECTURE

## Purpose

Define the low-fidelity screens and component logic used by Front Desk, Cashier/Finance, Technician, Inventory, Owner, and IT staff when previewing, printing, reprinting, troubleshooting, configuring, and monitoring documents and printers.

## Shared print action pattern

Every authorized document page uses one consistent action group:

```text
[Print] [Download PDF] [Email/Send] [More]
```

`Print` opens the Print Preview and Destination screen. It never immediately sends a protected document without configured review.

## Screen PRT-01 — Print Preview and Destination

Primary users: all authorized staff and owners.

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Print document                                         Status: Ready │
│ Receipt #R-000123 • Version 1 • Payment confirmed                    │
├──────────────────────────────────────────────────────────────────────┤
│ Document preview                         │ Destination                │
│ [Rendered receipt/page/label]            │ Recommended printer       │
│                                          │ Front Desk Receipt — Ready│
│                                          │ Paper: 80 mm              │
│                                          │ [Change printer]          │
├──────────────────────────────────────────┼────────────────────────────┤
│ Warnings / required information          │ Copies [1]                │
│ • Physical confirmation available        │ Delivery alternatives     │
│ • Customer email available               │ □ Email PDF               │
│                                          │ □ Download PDF            │
├──────────────────────────────────────────┴────────────────────────────┤
│ [Back]                                      [Print document]         │
└──────────────────────────────────────────────────────────────────────┘
```

Rules:

- Shows exact document number/version.
- Shows media and rendering mode.
- Shows recommended printer, location, status, and reason.
- Warns when only OS-dialog confirmation is possible.
- Keeps digital fallback visible.
- Does not expose other-branch printers.

## Screen PRT-02 — Printer Selection

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Choose a compatible printer                                         │
├──────────────────────────────────────────────────────────────────────┤
│ Search | Location | Printer type | Ready only | Refresh              │
├──────────────────────────────────────────────────────────────────────┤
│ ● Front Desk Receipt Printer                                        │
│   Boroko • Counter 1 • 80 mm • Ready • Recommended                   │
│                                                                      │
│ ○ Finance A4 Printer                                                 │
│   Boroko • Finance Office • A4/Letter • Ready                        │
│                                                                      │
│ ○ Browser / system print dialog                                      │
│   Choose an installed printer on this device                         │
├──────────────────────────────────────────────────────────────────────┤
│ Incompatible printers are hidden or explained without selection.     │
│ [Cancel]                                             [Use printer]    │
└──────────────────────────────────────────────────────────────────────┘
```

## Screen PRT-03 — Print Progress

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Printing receipt #R-000123                                          │
├──────────────────────────────────────────────────────────────────────┤
│ ✓ Document verified                                                 │
│ ✓ Sent to Front Desk Receipt Printer                                │
│ … Printer is processing                                             │
│                                                                      │
│ Printer: Counter 1 • 80 mm • Job PRT-9842                           │
├──────────────────────────────────────────────────────────────────────┤
│ [Run in background]                              [Cancel if possible] │
└──────────────────────────────────────────────────────────────────────┘
```

## Screen PRT-04 — Print Result

Variants:

### Confirmed

```text
Receipt printed
Printer confirmed the job at 10:42 AM.
[Print another copy] [Email receipt] [Done]
```

### Submitted to OS

```text
Sent to your device's print window
The browser cannot confirm physical output.
[It printed correctly] [It failed] [I'm not sure]
```

### Failed

```text
The printer needs paper
Your payment is still safely recorded.
[Try again] [Choose another printer] [Email PDF] [Contact IT]
```

## Screen PRT-05 — Reprint Request

Primary users: Front Desk, Cashier/Finance, authorized manager.

```text
Document: Receipt #R-000123 • Original issued July 19, 2026
Previous prints: 1 original, 1 reprint
Reason * [Customer lost copy ▼]
Notes [................................]
Approval: Required / Not required
Output will be marked REPRINT #2
[Cancel] [Request reprint / Review]
```

## Screen PRT-06 — Reprint Approval

Primary users: Branch Manager, Owner, Finance approver.

Shows:

- requester;
- document and amount;
- previous reprints;
- reason/evidence;
- printer/delivery destination;
- fraud/risk warnings;
- approve/reject/request more information.

## Screen PRT-07 — Front Desk Quick Print Drawer

Embedded in intake/job/release pages:

```text
PRINT OPTIONS
• Intake receipt — thermal summary
• Full intake form — A4 PDF
• Job-order label — label printer
• Customer copy — email/PDF

Default destinations are shown beside each item.
[Preview selected] [Print selected]
```

The drawer cannot select documents not finalized for the current stage.

## Screen PRT-08 — Cashier Receipt Panel

```text
Payment confirmed: K1,550.00
Receipt #R-000123
Customer delivery: Print + Email
Printer: Cashier Receipt Printer — Ready
Cash drawer: Opens after approved cash confirmation [policy indicator]
[Preview receipt] [Print and send]
```

Printing failure never re-submits payment.

## Screen PRT-09 — Technician Document/Label Panel

```text
Job #JO-001245
Available outputs:
• Technical work summary (internal)
• Customer-safe diagnosis report
• Testing report
• Device/job label
• Parts request label

Permission and job state determine availability.
```

Technicians cannot print financial receipts or internal customer fields outside their scope.

## Screen PRT-10 — Inventory Batch Label Print

```text
Selected items: 24
Label profile: PART 40×25
Printer: Warehouse Label Printer — Ready
Preview sample [label]
Validation: 24 valid • 0 missing barcode • 0 duplicates
[Cancel] [Print batch]
```

On partial failure, show exact labels completed and remaining.

## Screen PRT-11 — Owner Print Governance Dashboard

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Printing and document delivery                         [Policies]    │
├─────────────────┬─────────────────┬─────────────────┬────────────────┤
│ Jobs today      │ Confirmed rate  │ Failures        │ Reprints       │
│ 1,245           │ 98.4% managed   │ 12 open         │ 18 / 2 flagged │
├──────────────────────────────────────────────────────────────────────┤
│ Branch status: printers online/offline, queue age, paper/device risk │
├──────────────────────────────────────────────────────────────────────┤
│ Cost/usage: pages, receipts, labels, provider usage when measurable  │
├──────────────────────────────────────────────────────────────────────┤
│ Approvals: protected reprints, new printer assignment, policy change│
└──────────────────────────────────────────────────────────────────────┘
```

Owner sees business-level impact, not raw driver logs by default.

## Screen PRT-12 — IT Printer Fleet

Primary users: IT Printer Administrator, IT Manager.

```text
Printers | Agents | Queues | Profiles | Policies | Incidents
Search | Branch | Type | Status | Adapter | Model | Support status

Printer                 Branch     Type       Status      Queue  Action
Counter 1 Receipt       Boroko     Thermal    Paper low   2      Open
Finance A4              Boroko     Page       Ready       0      Open
Warehouse Labels        Main       Label      Offline     18     Open
```

## Screen PRT-13 — Printer Detail

Sections:

- identity and asset details;
- branch/location/workstation assignment;
- connection and adapter;
- capabilities;
- supported document profiles;
- live/last-known status;
- queue and recent jobs;
- supplies/maintenance;
- compatibility certification;
- audit;
- actions: test print, refresh capabilities, disable, retire, create incident.

Business-document previews are not automatically visible to IT.

## Screen PRT-14 — Printer Enrollment Wizard

Steps:

```text
1. Select agent or managed print service
2. Discover/select printer
3. Confirm identity and location
4. Review capabilities
5. Assign document profiles
6. Assign branch/workstation/users
7. Run test prints
8. Review security and support status
9. Approve and activate
```

Each step supports Save and Exit.

## Screen PRT-15 — Local Print Agent Management

Shows:

- agent name/location;
- operating system;
- version/update channel;
- last heartbeat;
- printer count;
- local queue depth;
- plugin health;
- update/restart/revoke actions;
- diagnostic bundle action;
- enrollment history.

## Screen PRT-16 — Print Queue and Failure Center

```text
Filters: Branch | Printer | Status | Document | Age | Priority

Job       Document       Printer      Status           Age   Action
P-9842    Receipt        Counter 1    Paper out        2m    Retry
P-9843    24 labels      Warehouse    Agent offline    8m    Reroute
P-9844    A4 quotation   Browser      Submitted to OS  1m    User confirm
```

Bulk retry appears only for compatible retryable jobs.

## Screen PRT-17 — Print Job Detail and Timeline

Shows:

- document reference/version/checksum;
- requester and application;
- printer/agent/profile snapshots;
- attempts;
- normalized errors;
- user/adapter confirmations;
- audit timeline;
- allowed retry/cancel/reroute actions;
- linked IT incident/reconciliation finding.

## Screen PRT-18 — Compatibility Test and Certification

```text
Printer model/path
OS + adapter versions
Test profiles: 58/80 mm, A4/Letter, label
Tests: text, Unicode, QR, barcode, raster, cutter, duplex, status, reconnect
Result per test: Pass / Fail / Limited / Not applicable
Known limitations
Support classification
[Save draft] [Submit for approval]
```

## Screen PRT-19 — Print Policy and Defaults

Owner/IT-controlled settings:

- default printers per branch/workstation/document;
- required media;
- reprint approval thresholds;
- maximum copies;
- digital fallback;
- auto-print eligibility;
- secure/shared-printer restrictions;
- agent offline behavior;
- retention;
- cost/usage limits;
- drawer/cutter policies.

Protected changes show impact preview and require approval/version publication.

## Screen PRT-20 — Staff Printer Help

Contextual panel:

```text
Problem detected: Warehouse Label Printer is offline
What you can do:
1. Check power and connection.
2. Choose the approved A4 label-sheet fallback.
3. Queue the labels for later.
4. Create an IT support ticket.

Support reference: PRN-OFFLINE-014
[Choose fallback] [Create ticket]
```

## Responsive behavior

- Staff action screens work on desktop/tablet/mobile.
- Large printer fleet, queue, and compatibility tables use responsive filters and detail drawers; dense columns may use an accessible local horizontal scroller.
- Mobile staff see recommended printer first and advanced settings behind `More options`.
- IT admin actions with high detail are optimized for desktop but remain readable and operable on tablet.

## Accessibility

- Printer status uses text and icon, not color alone.
- All controls are keyboard reachable.
- Progress/status changes use appropriate status announcements.
- Print preview has accessible document summary even if embedded PDF preview is not fully accessible.
- Error summary links to destination/media/permission issues.
- Native print dialog instructions are explicit and platform-neutral.

## Completion rules

Every screen must map to:

- actor and application;
- permissions;
- document/printer/agent entities;
- commands/queries/events;
- success, empty, loading, offline, permission, and failure states;
- wireflow;
- tests and acceptance criteria.
