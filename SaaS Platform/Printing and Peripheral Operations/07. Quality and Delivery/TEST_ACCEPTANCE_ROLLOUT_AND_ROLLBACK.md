# PRINTING AND PERIPHERAL OPERATIONS — TEST, ACCEPTANCE, ROLLOUT, AND ROLLBACK

## Purpose

Define the evidence required before claiming support for a printer class, operating system, connection method, document profile, local agent, vendor adapter, or production workflow.

## Test environments

```text
UNIT / COMPONENT
CONTRACT
SIMULATED ADAPTER
HARDWARE LAB
BRANCH PILOT
STAGING WITH SYNTHETIC DATA
PRODUCTION CANARY
GENERAL AVAILABILITY
```

Production customer data is not required for hardware certification. Use synthetic documents representing boundary conditions.

## Required test categories

### 1. Document rendering

- source snapshot/version reproducibility;
- receipt/invoice/job/release/warranty templates;
- 58 mm and 80 mm thermal layouts;
- A4 and Letter independently;
- Legal/A5 only when supported;
- label dimensions and calibration;
- page breaks, repeating headers, totals, signatures;
- embedded fonts and localization;
- grayscale readability;
- QR/barcode decode;
- long strings and large monetary values;
- reprint marker/version.

### 2. Authorization and isolation

- cross-tenant denial;
- cross-branch denial;
- role and field-level restrictions;
- workstation/printer assignment;
- document-state restrictions;
- reprint approval;
- IT role without blanket document access;
- platform support access expiry/revocation.

### 3. Print orchestration

- request idempotency;
- rendering/routing/queue transitions;
- compatible printer ranking;
- no-compatible-printer fallback;
- copies and partial completion;
- safe cancellation;
- retryable vs non-retryable errors;
- dead-letter/reconciliation;
- realtime and polling fallback;
- queue priority/fairness.

### 4. Browser/native dialog

- supported browsers/OS combinations;
- print preview and CSS/PDF layout;
- dialog cancellation;
- `SUBMITTED_TO_OS` semantics;
- user confirmation flow;
- download/email fallback;
- popup/modal restrictions;
- mobile browser behavior.

### 5. IPP/page printing

- discovery and capability query;
- A4/Letter/media matching;
- portrait/landscape;
- simplex/duplex;
- color/grayscale;
- resolution;
- printer offline/jam/paper status;
- queue/job cancellation when supported;
- status normalization;
- CUPS/Windows/macOS paths;
- managed cloud print connector/native printer paths.

### 6. Thermal/ESC-POS

- model/profile match;
- USB, LAN, serial, and approved Bluetooth paths;
- text mode, code page, raster, hybrid;
- 58/80 mm;
- logo optional path;
- QR/barcode;
- feed/cut;
- paper out/cover open/cutter warning;
- disconnect/reconnect;
- large job/byte limits;
- replay rejection;
- drawer command permission and audit.

### 7. Label printing

- continuous/die-cut media;
- gap/black-mark sensing;
- calibration;
- batch parent/child jobs;
- partial result;
- duplicate barcode prevention;
- remaining-only retry;
- A4 label-sheet fallback.

### 8. Local print agent

- enrollment code expiry/reuse;
- scoped credential and certificate;
- origin/localhost authentication;
- signed job validation;
- checksum/expiry/replay;
- encrypted bounded queue;
- offline printing policy;
- reconnect/status upload/deduplication;
- plugin isolation;
- update/rollback;
- revoke/quarantine;
- diagnostic redaction;
- least-privilege service execution.

### 9. Security

- artifact URL expiry;
- tamper tests;
- secret/PII log scan;
- malicious local-origin request;
- raw command injection;
- cloud webhook/provider authentication;
- abnormal volume/rate limit;
- reprint/drawer fraud scenarios;
- printer/agent compromise response;
- dependency and package signature verification.

### 10. Accessibility and UX

- keyboard navigation;
- screen reader labels and status announcements;
- visible focus;
- no color-only status;
- plain-language errors;
- retained selections after failure;
- responsive mobile/tablet/desktop;
- reduced cognitive load for staff;
- accessible alternative to embedded preview;
- user testing with Front Desk, Cashier, Technician, Inventory, Owner, and IT.

### 11. Reliability and recovery

- database unavailable after payment but before print;
- queue unavailable;
- renderer unavailable;
- agent offline;
- printer offline;
- provider unavailable;
- delayed/out-of-order status;
- duplicate callback;
- stale capability cache;
- disaster restore preserving job/document relationships;
- reconciliation after outage.

## Hardware compatibility record

Each tested configuration records:

```text
manufacturer
model
firmware
connection
OS and version
agent/native/provider version
adapter/profile version
printer class
media tested
document profiles tested
capabilities tested
status/error tests
security tests
result
limitations
support classification
tester/reviewer
lab/pilot evidence
tested_at
expires_or_review_at
```

## Minimum supported launch matrix

Before general launch, approve at least:

```text
PAGE PRINTING
- Chrome/Edge + Windows system dialog with A4/Letter PDF
- Chrome/Edge/Safari + macOS system dialog with A4/Letter PDF
- one current Windows IPP/installed-queue managed path
- one CUPS/IPP managed path when Linux/macOS agent support is included
- Android Print Framework path if Android app is in release
- AirPrint/native Apple path if Apple app is in release

THERMAL
- at least two validated 80 mm printer models/paths
- at least one validated 58 mm printer model/path when offered
- USB and LAN paths if both are marketed
- raster fallback and QR decode

LABEL
- at least one validated job/device label profile and printer path if labels are in release
```

A release may support a smaller declared matrix; unsupported paths remain visible as not supported, not implied.

## Acceptance criteria

### Business integrity

- Payment, invoice, release, inventory, warranty, and job records remain correct when printing fails.
- Reprint never creates a new transaction.
- Retry never duplicates the business command.
- Finalized document version is reproducible and checksummed.

### Compatibility

- Every production-supported printer path has current evidence.
- Capability mismatch is blocked or safely downgraded with warning.
- No generic `any printer` claim appears without a defined supported path.

### Staff experience

- Common staff print flow requires no IT terminology.
- Recommended printer is shown first.
- Failure explains whether the business action succeeded.
- Digital/alternate fallback is available for critical documents.
- Staff can create a prefilled IT ticket in one action.

### IT/Owner experience

- Fleet, queue, agent, policy, incident, and usage are visible by scope.
- Raw diagnostics are restricted.
- Policy changes are versioned and reversible.
- Printer onboarding includes test and support classification.

### Security

- Cross-tenant/branch attempts fail.
- Agent/browser bridge rejects spoof/replay/tamper.
- Secrets and document payloads are not exposed in logs/diagnostics.
- Revoked agents/printers stop receiving jobs.

## Rollout stages

### Stage 0 — Documentation and decision lock

Approve release scope, target printers, OSs, agents, provider adapters, document profiles, security, and support boundaries.

### Stage 1 — Simulator and virtual adapters

Implement fake/simulated adapters and contract tests before hardware access.

### Stage 2 — Hardware lab

Use synthetic data; validate compatibility records and known limitations.

### Stage 3 — Internal staff pilot

One branch/workstation/printer per class. Manual support observation required.

### Stage 4 — Limited tenant pilot

Selected tenant/branch groups; feature flag per adapter/profile; collect reliability/UX evidence.

### Stage 5 — Progressive production

Expand by branch and printer class. Keep browser/PDF fallback enabled.

### Stage 6 — General availability

Only tested matrix is marketed as supported. Continue telemetry, periodic recertification, and incident review.

## Rollback strategy

Rollback controls:

- disable adapter/plugin by feature flag;
- return affected document types to browser/PDF path;
- revert printer policy version;
- revert local-agent version;
- quarantine printer/profile;
- stop new jobs while preserving queue/audit;
- cancel/requeue retryable jobs;
- notify affected staff/owners;
- reconcile status after rollback.

Rollback never deletes finalized documents or print history.

## Release evidence package

```text
release manifest
supported printer/OS/adapter matrix
compatibility records
contract test results
hardware test evidence
security test results
accessibility/user test results
performance/capacity results
incident/runbook readiness
agent package signature evidence
provider risk approval
migration/rollback rehearsal
known limitations
owner approval
implementation_authorized scope
```

## Periodic recertification

Trigger retest after:

- printer firmware update;
- OS major update;
- local-agent/adapter major update;
- driver/Print Support App change;
- template/render-engine change;
- security incident;
- repeated failure trend;
- vendor deprecation;
- support-review expiry.

## Truthful status rule

Documentation completeness is not hardware support evidence. A printer/path becomes `PRODUCTION_SUPPORTED` only after the required test and approval record exists.
