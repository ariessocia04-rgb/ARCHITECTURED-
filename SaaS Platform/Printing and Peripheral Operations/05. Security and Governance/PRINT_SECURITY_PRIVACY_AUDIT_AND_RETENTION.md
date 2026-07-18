# PRINT SECURITY, PRIVACY, AUDIT, AND RETENTION

## Purpose

Define security, privacy, tenant isolation, authorization, audit, data minimization, retention, incident, and compliance requirements for printable documents, printer devices, local agents, cloud print services, and staff printing workflows.

## Threat model

Protected assets:

- customer identity/contact data;
- device identifiers and repair details;
- quotations, invoices, payments, receipts, refunds;
- signatures and release evidence;
- warranty records;
- employee and business reports;
- printer/network/agent configuration;
- print artifacts and local queues;
- audit and diagnostic evidence.

Threats:

1. Cross-tenant or cross-branch printing.
2. Printing a protected document to a public/wrong location.
3. Unauthorized reprint of receipt, invoice, label, or identity document.
4. Browser/local-agent spoofing or malicious local website commands.
5. Replay of a signed print job.
6. Print artifact tampering.
7. Raw vendor command injection.
8. Printer/agent credential theft.
9. Sensitive data in queue names, logs, spool files, or diagnostics.
10. Cloud print provider outage or data exposure.
11. Abandoned output on a shared printer.
12. Compromised printer firmware/driver/plugin.
13. Excessive print jobs causing cost/resource exhaustion.
14. Fraudulent cash-drawer commands.
15. Reprint used to misrepresent a second payment or original document.
16. Offline agent retaining data beyond policy.

## Authorization model

Every print action evaluates:

```text
Tenant membership
+ subscription entitlement when applicable
+ active user/account/session
+ application access
+ role and explicit permission
+ branch/department/workstation scope
+ record and field visibility
+ document state/version
+ printer assignment
+ print/reprint/copy policy
+ approval requirement
+ device/agent trust
= decision
```

Frontend visibility is never the only control.

## Canonical permissions

Suggested permission keys:

```text
printing.document.preview
printing.document.print
printing.document.download
printing.document.email
printing.receipt.print
printing.receipt.reprint
printing.financial.reprint.approve
printing.release.print
printing.label.print
printing.report.print
printing.print_job.view_own
printing.print_job.view_branch
printing.print_job.retry
printing.print_job.cancel
printing.printer.view
printing.printer.manage
printing.printer.test
printing.printer.assign
printing.agent.enroll
printing.agent.manage
printing.agent.diagnostics
printing.queue.admin
printing.policy.manage
printing.audit.view
```

## Role examples

- Front Desk: intake/job/release documents for assigned branch.
- Cashier/Finance: receipt/invoice printing; reprint subject to policy.
- Technician: assigned-job technical report/label as permitted; no payment receipt authority.
- Inventory: part/bin/inventory labels and approved reports.
- Branch Manager: branch print oversight and selected approvals.
- Owner: tenant policy, reports, usage, approval, and governance.
- IT Printer Administrator: devices, agents, mappings, health, diagnostics—not unrestricted business-document content.
- Auditor: read-only print/audit evidence without device control.
- Platform Support: only approved time-limited support access.

## Document minimization

- Queue/job display names use document type and opaque reference, not full customer names or device identifiers.
- Printer panels receive the minimum job metadata required.
- Local agent stores no searchable customer index.
- Logs use IDs and normalized error codes.
- Diagnostic bundles omit full document payloads by default.
- Cloud providers receive only the artifact and metadata required for delivery.
- Customer-facing documents exclude internal notes, costs, security findings, and protected staff data.

## Printer and agent secrets

The following are secret/restricted:

- cloud print tokens;
- agent private keys;
- provider credentials;
- printer admin passwords;
- SNMP/community or management credentials;
- network secrets;
- vendor SDK secrets;
- certificate private keys.

They are stored in approved secret management or secure OS stores, never ordinary database text, source code, print templates, logs, or documentation.

## Artifact protection

- Final artifacts have checksums.
- Sensitive artifacts use authenticated, short-lived download/claim URLs.
- Agent payloads are encrypted in transit and at rest.
- Signed job envelopes bind tenant, branch, agent, printer, artifact checksum, profile, copies, and expiry.
- A modified artifact or envelope is rejected.
- Print artifacts are not placed in public object storage.

## Shared-printer controls

For sensitive output, tenant policy may require:

- dedicated branch printer;
- secure/pull printing through approved provider;
- user proximity/confirmation;
- cover sheet with minimal metadata;
- immediate retrieval acknowledgement;
- no unattended batch printing;
- printer location classification;
- limited retention in provider/queue.

## Cash-drawer security

- Drawer command is separate from document bytes.
- Requires active cashier session, assigned workstation, explicit permission, and permitted event/reason.
- Manual drawer opening requires reason and may require manager approval.
- All drawer commands are audited.
- Remote/cloud printing cannot trigger a drawer unless the approved adapter and policy explicitly support it.

## Reprint controls

A reprint requires:

- original finalized document;
- valid actor/branch/record scope;
- reason;
- reprint sequence;
- visible `REPRINT` marker when required;
- optional approval based on document/risk;
- immutable audit.

Protected examples requiring approval or threshold:

- high-value payment receipt;
- refund/credit document;
- release form;
- warranty certificate;
- identity/intake evidence;
- repeated reprints within a configured period.

## Audit events

```text
PrinterDiscovered
PrinterEnrolled
PrinterApproved
PrinterCapabilityUpdated
PrinterAssigned
PrinterDisabled
PrinterRetired
PrintAgentEnrollmentCreated
PrintAgentEnrolled
PrintAgentUpdated
PrintAgentQuarantined
PrintAgentRevoked
PrintRequested
PrintAuthorized
PrintDenied
PrintQueued
PrintSubmitted
PrintConfirmed
PrintFailed
PrintCancelled
PrintRetried
PrintReprintRequested
PrintReprintApproved
PrintReprinted
PrintArtifactDownloaded
PrintArtifactEmailed
PrintPolicyChanged
CashDrawerOpened
PrintDiagnosticBundleCreated
PrintReconciliationFindingCreated
PrintReconciliationResolved
```

Audit fields include actor, tenant, branch, application, workstation, printer, agent, document, document version, print profile, result, reason, approval, request/correlation ID, timestamp, and safe diagnostic reference.

## Retention classes

### Final financial and legal documents

Follow the financial/legal/warranty retention of the source record.

### Print delivery evidence

Retain according to document risk, dispute needs, tenant policy, and provider capability.

### Temporary rendered artifacts

Expire after the authorized print/delivery window unless they are the official finalized document artifact.

### Local-agent spool payload

Short-lived, encrypted, and purged after success/final failure/expiry.

### Provider jobs

Retention must be documented per provider. The platform reconciles provider deletion/expiry where APIs permit.

### Diagnostics

Short retention; restricted access; redact sensitive data.

### Compatibility test artifacts

May retain non-production synthetic examples and test results; never use real customer data unless approved and sanitized.

## Incident triggers

Create or escalate a security/IT incident for:

- signature/checksum failure;
- repeated cross-tenant/branch denial;
- agent identity anomaly;
- unauthorized local-origin request;
- job replay attempts;
- printer firmware/driver/plugin compromise;
- leaked artifact URL;
- unexpected provider routing/retention;
- abnormal receipt/reprint/drawer activity;
- large print-volume abuse;
- malware or unsafe print payload detection.

## Provider risk assessment

Before enabling a cloud/vendor adapter approve:

- data categories transmitted;
- tenant isolation;
- region/residency;
- encryption;
- identity/RBAC;
- API/webhook authentication;
- job/artifact retention;
- deletion/export;
- logs and support access;
- sub-processors;
- outage/fallback;
- incident notification;
- migration/offboarding.

## Secure defaults

- Browser/OS dialog for unmanaged devices.
- Managed printers restricted to assigned tenant/branch.
- No direct raw port printing by default.
- No experimental WebUSB/Serial/Bluetooth adapter by default.
- No automatic cutter/drawer command without declared capability/policy.
- No automatic physical-success claim without evidence.
- No public artifact URL.
- No silent reprint.
- No unrestricted IT access to business-document content.

## Security tests

- Cross-tenant and cross-branch negative tests.
- Role/permission/field visibility tests.
- Agent enrollment/revocation tests.
- Local origin/spoof/replay tests.
- Job signature/checksum tamper tests.
- URL expiry and unauthorized download tests.
- Cloud webhook/provider callback verification tests.
- Reprint/drawer abuse tests.
- Log/diagnostic secret and PII scanning.
- Offline queue encryption/expiry tests.
- Plugin/update signature tests.
- Printer status/error injection tests.

## Acceptance rules

- IT personnel manage devices without receiving blanket access to customer/financial documents.
- A print job cannot escape tenant/branch/printer policy.
- Every official reprint is distinguishable and traceable.
- Sensitive payloads are minimized and short-lived outside the authoritative document store.
- Compromised/revoked agents and printers stop receiving jobs.
- Security incidents integrate with the IT Operations incident workflow.
