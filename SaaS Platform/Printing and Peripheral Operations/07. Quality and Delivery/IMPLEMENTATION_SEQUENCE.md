# PRINTING AND PERIPHERAL OPERATIONS — EXACT IMPLEMENTATION SEQUENCE

## Authority

This sequence specializes `TECA/IMPLEMENTATION_BUILD_PLAN.md`. Codex or another implementation worker may execute only after the owner sets `implementation_authorized=true` for an exact slice.

The worker must not redesign document rules, print statuses, adapter semantics, permissions, printer profiles, or failure behavior.

## PRN-00 — Authorization and repository verification

1. Read canonical sources in index order.
2. Verify latest `main`, active branches/PRs/workers, existing code, migrations, providers, and hardware evidence.
3. Lock exact release ID, applications, documents, printer classes, OSs, adapters, branches, and exclusions.
4. Confirm `implementation_authorized=true` for the exact slice.
5. Return `NOT_AUTHORIZED`, `BLOCKED`, `SKIPPED_ALREADY_COMPLETE`, or approved task.

Exit: factual scope and no racing work.

## PRN-01 — Technology, runtime, and adapter lock

Approve exact versions for:

- frontend framework/browser support;
- backend/runtime;
- PDF/render engine and font strategy;
- PostgreSQL/database layer;
- queue/job system;
- realtime transport;
- local-agent language/runtime and supported OSs;
- Windows printing API/spooler approach;
- CUPS/IPP libraries;
- Android/iOS native printing when included;
- ESC/POS/vendor SDK versions;
- code signing, update, and installer system;
- observability and test tools.

Exit: architecture decision record and compatibility policy.

## PRN-02 — Requirement and traceability lock

1. Assign requirement IDs.
2. Map all documents, print profiles, 20 screens, 16 wireflows, roles, permissions, entities, commands, events, tests, and runbooks.
3. Lock supported printer/OS/connection matrix.
4. Lock launch branches/workstations and pilot hardware.
5. Lock retention, support, and incident policy.

Exit: no open critical design decision.

## PRN-03 — Physical database foundation

Implement migrations/repositories for:

```text
printer_assets
printer_connections
printer_capability_profiles
printer_profile_versions
printer_assignments
printer_compatibility_records
print_agents
print_agent_plugins
print_agent_enrollments
print_policies
print_policy_versions
print_document_profiles
print_requests
print_jobs
print_attempts
print_delivery_evidence
print_reprint_records
print_queue_leases
print_reconciliation_findings
print_diagnostic_bundles
```

Add tenant/branch ownership, constraints, indexes, history, retention, and migration tests.

Exit: schema, isolation, integrity, and rollback tests pass.

## PRN-04 — Document rendering foundation

1. Implement source snapshot resolver.
2. Implement template/version registry.
3. Implement PDF renderer.
4. Implement printable HTML fallback.
5. Implement thermal layout planner.
6. Implement label layout planner.
7. Implement QR/barcode generator/validator.
8. Implement checksum and artifact storage.
9. Add synthetic fixture set.

Exit: deterministic artifact golden tests pass for approved profiles.

## PRN-05 — Print policy and capability service

1. Implement printer registry.
2. Implement normalized capability model.
3. Implement policy/default hierarchy.
4. Implement printer recommendation/ranking.
5. Implement compatibility certification records.
6. Implement permission and branch/workstation filters.
7. Implement cache/invalidation.

Exit: capability and routing contract tests pass.

## PRN-06 — Print orchestration service

1. Implement PrintRequest/PrintJob lifecycle.
2. Implement idempotency.
3. Implement queue priorities/leases.
4. Implement attempts, retries, cancellation, expiry.
5. Implement confirmation semantics.
6. Implement events/realtime topics.
7. Implement reconciliation.
8. Implement metrics/traces/audit.

Exit: simulated adapter and failure-injection tests pass.

## PRN-07 — Browser/PDF adapter vertical slice

Build first complete vertical slice:

```text
Finalized document
→ preview
→ compatible profile
→ browser print dialog
→ SUBMITTED_TO_OS
→ user confirmation/failure
→ digital fallback
→ audit
```

Include A4 and Letter. This becomes the universal fallback before silent/local printing.

Exit: supported-browser E2E, accessibility, and layout tests pass.

## PRN-08 — Page printer managed adapter

Implement selected approved path(s):

- OS spooler/local agent;
- CUPS/IPP;
- Windows modern print;
- optional Universal Print/provider adapter;
- Android/Apple native framework when in release.

Implement capability query, submission, status, cancellation, and normalization.

Exit: lab hardware matrix and managed-status tests pass.

## PRN-09 — Local Print Agent foundation

1. Signed installer/package.
2. Enrollment and scoped credential.
3. Heartbeat/version/update.
4. Printer discovery.
5. Agent adapter plugin contract.
6. Signed job claim/validation.
7. Encrypted bounded local queue.
8. Status upload/reconciliation.
9. Loopback browser bridge where approved.
10. Diagnostics, revoke, quarantine, update/rollback.

Exit: security review, replay/tamper/origin tests, and pilot installation pass.

## PRN-10 — Thermal ESC/POS vertical slice

1. Structured ReceiptModel.
2. 80 mm profile and renderer.
3. USB or LAN adapter according to release.
4. status/paper/cover handling.
5. QR and raster fallback.
6. cutter policy.
7. receipt/reprint UX.
8. payment-safe E2E tests.

Add 58 mm only as a separately tested profile.

Exit: hardware certification records and payment integrity tests pass.

## PRN-11 — Label printing vertical slice

1. Device/job label profile.
2. Inventory/part label profile.
3. batch parent/child job.
4. partial success and remaining-only retry.
5. calibration and media validation.
6. A4 label-sheet fallback.

Exit: barcode/QR decode and batch recovery tests pass.

## PRN-12 — Reprint and protected actions

1. Reprint request/reason.
2. approval thresholds.
3. original-version rendering.
4. REPRINT marker/sequence.
5. audit and anomaly detection.
6. separate cash-drawer command and controls.

Exit: fraud/permission/separation-of-duties tests pass.

## PRN-13 — Staff application integrations

Implement role-specific surfaces:

- Front Desk intake/job/release quick print;
- Cashier receipt panel;
- Technician reports/labels;
- Inventory batch labels;
- Owner governance dashboard;
- Customer-safe digital delivery;
- one-click IT support handoff.

Do not duplicate orchestration logic in applications.

Exit: cross-application E2E and field-visibility tests pass.

## PRN-14 — IT Operations integrations

1. Printer fleet/detail/enrollment.
2. Agent management.
3. queue/failure center.
4. compatibility certification.
5. print policy/version publishing.
6. printer incidents/changes/assets/knowledge.
7. owner status/approval handoff.

Exit: IT role, service desk, incident, change, and audit tests pass.

## PRN-15 — Security, accessibility, capacity, and recovery

Run:

- tenant/branch isolation;
- agent security;
- secrets/PII scans;
- provider risk tests;
- accessibility and user testing;
- queue/capacity tests;
- agent/provider/printer outage drills;
- backup/restore/reconciliation rehearsal;
- update and rollback rehearsal.

Exit: no unresolved critical finding.

## PRN-16 — Pilot rollout

1. Feature flags per tenant/branch/adapter/profile.
2. Internal lab.
3. one-branch pilot.
4. limited tenant pilot.
5. measure success, failure, reprint, fallback, support tickets.
6. fix and recertify.
7. owner go/no-go.

Exit: approved support matrix and operations evidence.

## PRN-17 — General release and ongoing operations

- publish supported printer/path matrix;
- maintain compatibility registry;
- monitor fleet/agent/queue metrics;
- execute incident/change/runbooks;
- recertify after material changes;
- deprecate safely;
- keep browser/PDF fallback.

## Mandatory coding rules

- No hardcoded plan/user/printer model decision outside approved configuration/profile.
- No direct financial calculation in print layer.
- No unverified physical success claim.
- No raw arbitrary print bytes accepted from browser/client.
- No business transaction repeated by print retry.
- No adapter/plugin without contract, security, and compatibility tests.
- No printer support claim without evidence.
- Every slice includes database, backend, API/events, frontend, permissions, errors, tests, docs, and validation.
