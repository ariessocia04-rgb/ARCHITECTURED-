# PRINTING AND PERIPHERAL OPERATIONS — SCREEN TRACEABILITY MATRIX

## Purpose

Map every printing screen to actors, permissions, entities, commands, events, wireflows, and test evidence so implementation workers cannot invent or omit behavior.

## Matrix

| Screen | Primary actors | Permission/authority | Core entities | Commands/queries | Key events | Wireflow | Required tests |
|---|---|---|---|---|---|---|---|
| PRT-01 Print Preview and Destination | Authorized staff/owner | document preview/print | Document, PrintProfile, Printer | GetDocumentPreview, RecommendPrinter, CreatePrintRequest | PrintRequested | 1 | visibility, media, preview, fallback, accessibility |
| PRT-02 Printer Selection | Staff/owner | printer view + document print | Printer, CapabilityProfile, Policy | ListCompatiblePrinters, SelectPrinterForJob | PrintRouted | 1 | tenant/branch filtering, incompatible hidden, status refresh |
| PRT-03 Print Progress | Requester | own/branch job view | PrintJob, PrintAttempt | GetPrintJob, CancelPrintJob | PrintSubmitted, PrintProcessing | 2 | realtime, polling fallback, cancellation semantics |
| PRT-04 Print Result | Requester | own job view/confirm | PrintJob, DeliveryEvidence | ConfirmDialogPrintOutcome, RetryPrintJob | PrintConfirmed, PrintUserConfirmed, PrintFailed | 2,3 | truthful status, no false physical success, retry safety |
| PRT-05 Reprint Request | Front Desk/Finance/authorized staff | reprint request | Document, ReprintRecord | RequestDocumentReprint | PrintReprintRequested | 6 | reason, original version, repeat-click idempotency |
| PRT-06 Reprint Approval | Manager/Owner/Finance approver | approve protected reprint | ApprovalRequest, ReprintRecord | ApproveReprint, RejectReprint | PrintReprintApproved | 6 | separation of duties, threshold, audit |
| PRT-07 Front Desk Quick Print | Front Desk | intake/job/release print | Intake, JobOrder, Release, Document | ListAvailableOutputs, CreatePrintRequest | DocumentRenderedForPrint | 5 | lifecycle eligibility, multi-output partial results |
| PRT-08 Cashier Receipt Panel | Cashier/Finance | confirmed receipt print | Payment, Receipt, PrintJob | IssueReceipt, CreatePrintRequest | PaymentConfirmed, PrintRequested | 4 | payment idempotency, failure independence, drawer policy |
| PRT-09 Technician Document/Label | Technician/QC | assigned technical outputs | JobOrder, Diagnosis, Test, Label | ListAvailableOutputs, CreatePrintRequest | PrintRequested | 1 | assignment/field scope, no receipt access |
| PRT-10 Inventory Batch Labels | Inventory | label/batch print | InventoryItem, LabelDocument, BatchJob | ValidateLabels, CreateBatchPrintJob | PrintQueued, PrintFailed | 11 | duplicate IDs, partial completion, remaining-only retry |
| PRT-11 Owner Governance Dashboard | Owner/Manager | tenant/branch print oversight | Metrics, Policy, Approval | GetPrintDashboard, GetUsage, ListApprovals | PrinterOfflineDetected | 12 | aggregation, field restrictions, branch filters |
| PRT-12 IT Printer Fleet | IT roles | printer/agent view | Printer, PrintAgent, Queue | ListPrinters, GetFleetHealth | PrinterRecovered | 8,9,10 | IT scope, no document-content leakage, large-list UX |
| PRT-13 Printer Detail | IT roles | printer manage/test | Printer, Capability, CompatibilityRecord | GetPrinter, TestPrinter, RefreshCapabilities, DisablePrinter | PrinterCapabilityUpdated | 10 | permission, status normalization, test isolation |
| PRT-14 Enrollment Wizard | IT Manager/Printer Admin | enroll/approve | Agent, Printer, Enrollment | CreateEnrollment, ApprovePrinter | PrintAgentEnrolled, PrinterApproved | 9,10 | one-time code, approval, failed test, save/resume |
| PRT-15 Agent Management | IT roles | agent manage/diagnostics | PrintAgent, Plugin, Queue | UpdateAgent, RestartAgent, RevokeAgent, CreateDiagnostics | PrintAgentUpdated, PrintAgentRevoked | 9,13 | credential revocation, update rollback, redaction |
| PRT-16 Queue and Failure Center | IT/branch manager | queue admin/branch view | PrintJob, Attempt, Incident | ListPrintJobs, RetryPrintJob, ReroutePrintJob | PrintRetryScheduled | 8,13,15 | bulk eligibility, stale job, fallback, tenant isolation |
| PRT-17 Print Job Detail | Requester/IT/Auditor by scope | job/audit view | PrintJob, Attempts, Evidence, Finding | GetPrintJobTimeline, ResolveFinding | PrintReconciliationResolved | 15 | field masking, timeline completeness, immutable history |
| PRT-18 Compatibility Certification | IT/approver | test/certify printer | CompatibilityRecord, TestResult | RunCompatibilitySuite, ApproveSupportStatus | PrinterApproved | 10 | synthetic data, model/path variants, limitation display |
| PRT-19 Policy and Defaults | Owner/IT/Finance/Security by rule | manage/publish policy | PrintPolicyVersion, Mapping | ValidatePrintPolicy, PublishPrintPolicy | PrintPolicyChanged | 12 | impact preview, approval, versioning, rollback |
| PRT-20 Staff Printer Help | All staff | support create | Printer, PrintJob, ITTicket | GetContextHelp, CreateITTicket | ITSupportTicketCreated | 8 | prefilled context, privacy, alternate path, accessibility |

## Permission groups

```text
STAFF_PRINT
├── preview
├── print authorized document
├── view own job
├── safe retry
└── request support

FINANCIAL_PRINT
├── receipt/invoice print
├── protected reprint request
└── cashier/drawer policy

MANAGER_PRINT
├── branch oversight
├── protected reprint approval
└── branch default review

OWNER_PRINT_GOVERNANCE
├── tenant policy
├── usage/cost
├── approvals
└── audit

IT_PRINT_OPERATIONS
├── device/agent/fleet
├── capability and test
├── queues/diagnostics
├── incident/change
└── no blanket business-document visibility
```

## State coverage required for every screen

- loading;
- empty;
- ready;
- permission denied;
- source document not finalized;
- no compatible printer;
- printer offline/error;
- agent/provider unavailable;
- retry pending;
- offline/degraded;
- stale/concurrent update;
- success with trustworthy confirmation type;
- unknown status with safe support reference.

## End-to-end acceptance chains

### Payment receipt

```text
PaymentConfirmed
→ Receipt finalized
→ PRT-08
→ PRT-01
→ PRT-03
→ PRT-04
→ print audit / digital fallback
```

### Front-desk intake package

```text
IntakeCompleted
→ documents/QR/label finalized
→ PRT-07
→ PRT-01/02
→ independent print/delivery jobs
→ result summary
```

### Printer incident

```text
PrinterOfflineDetected
→ PRT-04 or PRT-20 staff recovery
→ IT ticket/incident
→ PRT-12/13/16
→ resolution
→ PrinterRecovered
→ queued job reconciliation
```

### New printer onboarding

```text
IT change/asset approval
→ PRT-14 enrollment
→ PRT-18 compatibility test
→ PRT-19 policy mapping
→ controlled pilot
→ production support
```

## Traceability completion rule

Implementation is blocked when a screen lacks its role, permission, entity, command/query, event, failure path, or test mapping.
