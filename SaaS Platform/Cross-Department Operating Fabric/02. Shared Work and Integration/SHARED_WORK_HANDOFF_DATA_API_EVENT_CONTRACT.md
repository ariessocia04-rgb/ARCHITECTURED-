# SHARED WORK, HANDOFF, DATA, API, AND EVENT CONTRACT

## Purpose

Define the shared coordination layer that connects department-owned records and tasks without becoming a duplicate source of truth for repair, customer, finance, inventory, HR, IT, marketing, accounting, or other domains.

## Architecture

```text
Domain Application/Module
→ emits authoritative domain event or creates approved handoff
→ Process Coordinator
→ updates ProcessInstance/Stage/Handoff/LinkedTask summary
→ creates domain-specific commands/tasks through approved APIs
→ routes notifications/approvals
→ records shared timeline
→ receives result events
→ advances or blocks process
```

## Shared entities

### ProcessDefinition

```text
process_definition_id
process_code
version
name
business_outcome
stages
allowed_transitions
participant_rules
required_artifacts
metrics
status/effective dates
```

Published versions are immutable.

### ProcessInstance

Defined in the Operating Model. It stores coordination state only.

### ProcessStageInstance

```text
stage_instance_id
process_instance_id
stage_code
sequence/parallel_group
owning_department
accountable_user_or_team
status
entered_at
target_at
completed_at
readiness_result
exit_result
blocked_reason
```

### LinkedDomainRecord

```text
link_id
process_instance_id
domain_code
record_type
record_id
record_version_or_reference
relationship_type
visibility_class
linked_at
```

No full domain payload is copied by default.

### SharedTaskReference

```text
shared_task_id
process_instance_id
stage_instance_id
owning_department
source_domain
source_record_reference
task_type
summary
status
priority
assignee/team
target_at
result_reference
```

The actual task may be owned by a domain task table; the shared reference projects status.

### Handoff

```text
handoff_id
process_instance_id
source_department
destination_department
source_record_reference
requested_result
readiness_checklist
artifacts
priority
target_at
status
accepted_by
accepted_at
return_reason
completion_result_reference
```

Handoff states:

```text
DRAFT
READY_FOR_SEND
SENT
RECEIVED
ACCEPTED
RETURNED_FOR_INFORMATION
REJECTED_INVALID
IN_PROGRESS
COMPLETED
CANCELLED
EXPIRED
```

### ProcessBlocker

```text
blocker_id
process_instance_id
stage_instance_id
blocker_type
owner_department
owner_task_or_record
summary_safe
business_impact
status
created_at
resolved_at
```

### CrossDepartmentApproval

References the canonical approval engine and domain decision. It stores process context, not a second approval decision.

### SharedTimelineEntry

```text
timeline_entry_id
process_instance_id
occurred_at
source_domain/event
entry_type
actor/system
summary_safe
visibility/audiences
source_record_reference
correlation_id
```

## API commands

```text
StartProcessInstance
LinkDomainRecordToProcess
EnterProcessStage
CreateDepartmentHandoff
AcceptDepartmentHandoff
ReturnDepartmentHandoff
CompleteDepartmentHandoff
CreateLinkedDepartmentTask
RecordProcessBlocker
ResolveProcessBlocker
RequestCrossDepartmentApproval
PublishProcessUpdate
AdvanceProcessStage
CompleteProcessInstance
CancelProcessInstance
ReopenProcessInstance
```

Commands validate domain authority and cannot directly mutate linked records.

## Queries

```text
GetProcessSummary
GetMyCrossDepartmentWork
GetDepartmentWorkQueue
GetProcessTimeline
GetProcessDependencyAndBlockerView
GetOwnerEndToEndDashboard
GetCustomerSafeProcessStatus
GetHandoffDetail
GetApprovalContext
GetProcessMetrics
```

Queries assemble authorized projections from shared coordination and domain sources.

## Event envelope

All domain events participating in the fabric include or resolve:

```text
event_id
event_type
schema_version
occurred_at
producer
correlation_id
causation_id
tenant_id
company_id optional
branch_id optional
actor or system identity
entity_type/entity_id/entity_version
process_instance_id when known
payload classification
idempotency/deduplication key
```

## Core cross-department events

```text
ProcessStarted
ProcessStageEntered
ProcessStageCompleted
ProcessBlocked
ProcessBlockerResolved
DepartmentHandoffCreated
DepartmentHandoffAccepted
DepartmentHandoffReturned
DepartmentHandoffCompleted
CrossDepartmentTaskCreated
CrossDepartmentTaskCompleted
CrossDepartmentApprovalRequested
CrossDepartmentApprovalDecided
ProcessUpdatePublished
ProcessCompleted
ProcessCancelled
```

## Domain event connections

Examples:

```text
CustomerRegistered
DeviceIntakeCompleted
JobOrderCreated
JobAssigned
DiagnosisFinalized
QuotationIssued
QuotationApproved/Rejected
PartsReserved
PurchaseRequestCreated
PurchaseOrderApproved
GoodsReceived
PartIssued/Consumed/Returned
RepairCompleted
TestingCompleted
QualityApproved/Rejected
InvoiceIssued
PaymentConfirmed
ReleaseCompleted
WarrantyActivated
CustomerFeedbackSubmitted
ITSupportRequestSubmitted
IncidentCreated/Resolved
AccessGranted/Revoked
AccountingPostingCompleted
EmployeeOnboarded/Offboarded
CampaignLeadQualified
```

Each event maps to a process stage transition, task, blocker, notification, metric, or no-op according to versioned process rules.

## Orchestration vs choreography

- Domain services emit events and remain autonomous.
- The Process Coordinator orchestrates explicit end-to-end sequencing, readiness, handoff, approval, and timeout rules.
- Simple side effects may use event choreography.
- Critical financial, release, access, inventory, and deletion operations use explicit commands and confirmations.
- No distributed transaction is assumed. Use idempotency, outbox/inbox, retries, compensation, and reconciliation.

## Data consistency

```text
Domain record committed
→ outbox event committed atomically
→ event delivered at least once
→ coordinator inbox deduplicates
→ shared projection updates
→ required command/task created idempotently
→ result event reconciles
```

Stale shared summaries display last-updated/correlation state and never override live domain authority.

## Access model

A user can view a process only when authorized through at least one valid relationship and the requested fields pass:

- tenant/company/branch;
- department/application role;
- linked record permission;
- process participant/owner/assignee;
- customer/business-account scope;
- auditor/owner authority;
- field visibility.

Being involved in one stage does not grant full access to every domain record.

## Shared task and domain-task rule

- The shared fabric may create a task through the owning domain API.
- Domain task status is authoritative.
- SharedTaskReference mirrors selected safe fields.
- Completing the shared reference directly is prohibited unless the fabric owns that specific coordination-only task.

## Handoff contract

Required readiness schema:

```text
required_fields
required_record_states
required_documents/evidence
required_approvals
required_permissions
required_resource/stock/payment/customer input
IT/service health prerequisites
```

Handoff acceptance returns:

```text
ACCEPTED with accountable owner/target
RETURNED_FOR_INFORMATION with missing checklist
REJECTED_INVALID with canonical reason
```

## Timeout and escalation

- Each handoff/task/stage has target and escalation policy.
- Warning events route before breach.
- Escalation changes notification/management visibility, not domain truth.
- Auto-reassignment is allowed only through approved rules.
- Customer-facing timeline estimates update after material delay.

## Compensation and cancellation

Process cancellation does not delete completed domain records.

Examples:

- cancel purchase request if no PO commitment;
- release reservation or create return movement;
- void/reverse financial records through finance domain;
- cancel queued tasks;
- preserve intake/diagnosis/audit;
- notify customer/supplier/staff;
- create refund/credit only through financial commands.

## Public API and external portals

- Customer, Supplier, Vendor, and Public API interactions create scoped domain commands/events.
- External participants see their task/document/status, not internal process implementation.
- Webhooks use signed, versioned, idempotent delivery.
- External failure creates retry/reconciliation and, when material, a blocker/IT incident.

## AI/automation connection

AI may:

- summarize process status;
- suggest routing/priority/knowledge;
- detect missing readiness or bottlenecks;
- forecast delay or stock risk;
- draft communication;
- propose tasks/changes.

AI cannot:

- approve protected decisions;
- finalize diagnosis/quality/payment/refund/release/access;
- change domain records outside authorized commands;
- hide uncertainty/source;
- bypass human review when required.

## Observability

Metrics:

- process cycle time and stage time;
- handoff wait/return rate;
- blocker duration/type/owner;
- department workload and SLA risk;
- duplicate/retry/reconciliation;
- rework loops;
- customer wait time;
- parts/payment/IT dependency time;
- process completion/cancellation;
- event lag and stale projection.

Tracing uses process instance + correlation + causation IDs across services.

## Acceptance criteria

- Domain ownership remains intact.
- Every cross-department link is typed, scoped, and auditable.
- Event delivery is idempotent and recoverable.
- Handoffs cannot proceed without readiness or explicit exception approval.
- Shared timeline excludes fields unauthorized for its audience.
- Failure in one department creates a blocker/task/handoff rather than silent status manipulation.
