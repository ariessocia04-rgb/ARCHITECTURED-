# PRINT JOB QUEUE, SPOOLER, AND DELIVERY CONTRACT

## Purpose

Define print requests, authorization, rendering, routing, queueing, submission, status, retry, cancellation, reprint, reconciliation, offline behavior, and audit without coupling the SaaS to one printer vendor or operating system.

## Architecture

```text
Staff Application / Owner / Customer-safe action
→ Print Command API
→ Permission + entitlement + source-state validation
→ Document renderer or finalized artifact lookup
→ Print policy and routing engine
→ Print job record
→ Queue / spooler
→ Selected adapter
→ OS, local agent, IPP, native mobile, or cloud service
→ Printer
→ Status normalization
→ User notification / IT alert / audit / reconciliation
```

## Core entities

### PrintRequest

```text
print_request_id
tenant_id
branch_id
requested_by
source_application
source_workstation_id
document_type
document_id or render_request
requested_print_profile
requested_printer_id optional
copies
purpose
reprint_reason optional
idempotency_key
created_at
```

### PrintJob

```text
print_job_id
print_request_id
tenant_id
branch_id
document_id
document_version
artifact_checksum
print_profile_id
printer_id
adapter_code
adapter_version
status
status_reason
copies
priority
attempt_count
max_attempts
queued_at
submitted_at
completed_at
expires_at
adapter_job_reference
correlation_id
record_version
```

### PrintAttempt

```text
print_attempt_id
print_job_id
attempt_number
adapter_code
printer_snapshot
capability_snapshot
started_at
ended_at
result
normalized_error_code
safe_error_message
provider_or_agent_reference
retryable
```

### PrintDeliveryEvidence

Used only when the adapter can provide trustworthy status.

```text
print_delivery_evidence_id
print_job_id
evidence_type
printer_status_snapshot
adapter_status
reported_at
source
checksum_or_signature when applicable
```

## Print job lifecycle

```text
REQUESTED
→ AUTHORIZING
→ AUTHORIZED
→ RENDERING
→ RENDERED
→ ROUTING
→ QUEUED
→ DISPATCHING
→ SUBMITTED
→ PROCESSING
→ PRINTED_CONFIRMED / SUBMITTED_TO_OS / USER_CONFIRMED
→ COMPLETED
```

Exception states:

```text
AUTHORIZATION_FAILED
SOURCE_NOT_FINAL
RENDER_FAILED
NO_COMPATIBLE_PRINTER
WAITING_FOR_PRINTER
WAITING_FOR_AGENT
OFFLINE_QUEUED
RETRY_SCHEDULED
PARTIALLY_COMPLETED
FAILED_RETRYABLE
FAILED_FINAL
CANCEL_REQUESTED
CANCELLED
EXPIRED
RECONCILIATION_REQUIRED
```

## Confirmation semantics

### `PRINTED_CONFIRMED`

Allowed only when an approved adapter reports a trustworthy printer/job completion state.

### `SUBMITTED_TO_OS`

Used for browser/native-dialog paths where the system handed content to the operating system but cannot verify physical output.

### `USER_CONFIRMED`

Optional explicit user confirmation after a dialog path. This is user evidence, not device evidence.

### `COMPLETED`

Means the configured completion rule for the adapter/path was satisfied. It does not always mean physical printer telemetry was available; the UI and audit must retain the confirmation type.

## Command contract

### `CreatePrintRequest`

Validates:

- authenticated actor;
- tenant and branch;
- application and role permission;
- document visibility;
- source record state;
- reprint permission/reason;
- copy limit;
- plan/feature entitlement when applicable;
- workstation and printer policy;
- idempotency key.

Returns:

- print request/job reference;
- selected/recommended printer;
- print profile;
- warnings;
- required user interaction;
- status endpoint or realtime topic.

### `SelectPrinterForJob`

Revalidates capability and authorization. A user cannot select a printer hidden by branch/workstation/document policy.

### `CancelPrintJob`

Cancellation is best effort after adapter submission. It never reverses the underlying business record.

### `RetryPrintJob`

Creates a new attempt under the same logical job or a linked replacement job according to adapter semantics. It never duplicates financial or operational records.

### `ConfirmDialogPrintOutcome`

Records user outcome for browser/native-dialog paths:

- printed successfully;
- print failed;
- cancelled;
- unsure;
- use another delivery method.

## Idempotency

The idempotency fingerprint includes:

```text
tenant_id
actor_id
document_id
document_version
print_profile_id
requested_printer_id when explicit
copies
purpose
reprint_sequence when applicable
```

Repeated requests with the same key return the original logical job result. A deliberate reprint requires a new authorized reprint operation and reason.

## Routing policy

Routing evaluates:

- document type;
- required media/profile;
- branch;
- workstation;
- role;
- printer health;
- adapter health;
- capability match;
- printer load;
- local/offline availability;
- tenant default;
- user choice when permitted;
- fallback policy.

## Queue priority

Suggested priority classes:

```text
P0_SECURITY_OR_LEGAL
P1_CUSTOMER_WAITING_PAYMENT_OR_RELEASE
P2_ACTIVE_INTAKE_OR_JOB_OPERATION
P3_NORMAL_BUSINESS_DOCUMENT
P4_BATCH_LABEL_OR_REPORT
P5_BACKGROUND_ARCHIVE_COPY
```

Priority cannot bypass authorization or corrupt order. Branch quotas prevent one workstation or tenant from starving others.

## Retry policy

Retry only failures classified retryable, such as:

- temporary printer offline;
- local agent reconnecting;
- network timeout;
- provider transient failure;
- spooler temporarily unavailable;
- paper-out after user replenishment;
- queue busy.

Do not auto-retry:

- authorization failure;
- incompatible media;
- invalid template;
- unsupported command;
- document superseded before official submission;
- retired/disabled printer;
- security rejection;
- user cancellation.

Retry uses bounded exponential backoff with jitter for remote services and device-appropriate backoff for local queues.

## Offline behavior

### Branch local agent offline from cloud

- Agent may print only signed, previously delivered, unexpired jobs in its local encrypted queue.
- New cloud-originated jobs wait until connectivity returns unless the application has an approved local/offline workflow.
- Local job IDs and operation IDs prevent duplicates after reconnect.
- Status events upload in order with deduplication.

### SaaS available, printer offline

- Job becomes `WAITING_FOR_PRINTER` or routes to an approved alternative.
- User sees exact safe options: retry, choose another compatible printer, download PDF, email, queue for later, or contact IT.

### Browser offline

- Official financial and release documents cannot be regenerated from stale data.
- Already finalized downloaded artifacts may be printed only according to offline policy and must later record local confirmation/audit where required.

## Reprint contract

Reprint validation checks:

- original finalized document exists;
- actor has reprint permission;
- branch/record access is valid;
- reprint reason is present;
- approval is obtained when policy requires;
- original document version is used;
- reprint sequence is incremented;
- receipt/invoice/document is marked as reprint where required;
- reprint event is audited.

## Copies and partial completion

For multiple copies:

- one logical job may contain copy count when the adapter/printer supports it;
- otherwise the orchestrator creates child attempts/copies;
- partial success is explicit;
- retry prints only missing copies unless policy requires a complete reprint set;
- each official copy retains the same document identity and a separate print-delivery record.

## Print reconciliation

Reconciliation compares:

- internal job state;
- adapter/provider state;
- local agent state;
- printer telemetry when available;
- user confirmation;
- audit timeline.

Findings:

```text
SUBMITTED_NO_FINAL_STATUS
ADAPTER_COMPLETED_INTERNAL_PENDING
INTERNAL_COMPLETED_ADAPTER_FAILED
DUPLICATE_PROVIDER_REFERENCE
STALE_OFFLINE_STATUS
PRINTER_MISMATCH
ARTIFACT_CHECKSUM_MISMATCH
UNAUTHORIZED_REPRINT_ATTEMPT
```

Resolution requires actor, reason, evidence, and audit.

## Events

```text
PrintRequested
PrintAuthorized
DocumentRenderedForPrint
PrintRouted
PrintQueued
PrintSubmitted
PrintProcessing
PrintConfirmed
PrintDialogSubmitted
PrintUserConfirmed
PrintRetryScheduled
PrintFailed
PrintCancelled
PrintExpired
PrintReprintRequested
PrintReprinted
PrinterOfflineDetected
PrinterRecovered
PrintReconciliationFindingCreated
PrintReconciliationResolved
```

## Realtime topics

```text
tenant/{tenant_id}/branch/{branch_id}/print-jobs
workstation/{workstation_id}/print-jobs
printer/{printer_id}/status
user/{user_id}/print-notifications
it-operations/{tenant_id}/printer-alerts
```

## Observability

Minimum metrics:

- print requests by document type and branch;
- render latency and failure rate;
- queue wait time;
- adapter submission latency;
- confirmed success rate by printer/adapter;
- dialog-path user-confirmed success rate;
- retry count;
- paper-out/jam/offline frequency;
- reprint rate and reason;
- fallback usage;
- local-agent heartbeat and version;
- queue depth and oldest job;
- reconciliation findings;
- pages/receipts/labels when measurable for cost reporting.

## Acceptance rules

- No print failure changes the confirmed payment or release state.
- No retry duplicates the receipt, invoice, payment, stock movement, job order, or warranty record.
- Users always know whether a job is queued, submitted, confirmed, failed, or only handed to the OS dialog.
- Every official reprint is identifiable and audited.
- Printer/agent/provider errors are normalized into plain-language recovery plus an IT diagnostic code.
- Queueing and fallback preserve customer-facing operational continuity.
