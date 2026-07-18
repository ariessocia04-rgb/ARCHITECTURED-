# CROSS-DEPARTMENT OPERATING FABRIC — WIREFRAME ARCHITECTURE

## Purpose

Define shared low-fidelity surfaces that appear consistently across applications while preserving each application's own workspaces and permissions.

## CDF-01 — My Cross-Department Work

Available to every staff member.

```text
┌──────────────────────────────────────────────────────────────────────┐
│ My work                           Department: Technician • Branch A  │
├──────────────────────────────────────────────────────────────────────┤
│ Assigned to me | Waiting on me | Waiting on others | Approvals      │
├──────────────────────────────────────────────────────────────────────┤
│ JO-1204 • Diagnose device            Due today • Customer waiting    │
│ From: Dispatch • Ready: intake complete • [Open task]                │
│                                                                      │
│ PO-0441 • Confirm part requirement   Waiting on you • [Respond]      │
│                                                                      │
│ INC-0078 • Validate printing recovery Assigned by IT • [Validate]    │
└──────────────────────────────────────────────────────────────────────┘
```

Cards show source, requested result, owner, target, process stage, blocker, and safe related references.

## CDF-02 — End-to-End Process Header

Embedded above relevant domain records.

```text
Repair JO-1204
Stage: Awaiting Parts
Health: At risk • Blocked by Supplier ETA
Current owner: Inventory/Purchasing
Next action: Confirm substitute part by 3:00 PM
[View process] [Customer timeline] [Related work]
```

It is a summary and cannot edit another department's domain record.

## CDF-03 — Process Command Center

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Customer Request to Repair Closure • PRC-00982                       │
│ Outcome: Repair and release device • Owner: Branch Manager           │
├──────────────────────────────────────────────────────────────────────┤
│ Stages                                                               │
│ ✓ Intake → ✓ Diagnosis → ! Parts → Repair → QC → Payment → Release   │
├───────────────────────┬──────────────────────────────────────────────┤
│ Current/next work     │ Shared timeline                              │
│ Inventory task        │ customer, repair, parts, IT, finance events  │
│ Supplier handoff      │                                              │
│ IT printer incident   │                                              │
├───────────────────────┼──────────────────────────────────────────────┤
│ Blockers/risks        │ Approvals/documents/communications           │
└───────────────────────┴──────────────────────────────────────────────┘
```

## CDF-04 — Department Work Queue

Filters:

- company/branch;
- process type/stage;
- source/destination department;
- priority/target risk;
- customer waiting;
- blocked type;
- accepted/unaccepted handoff;
- approval/IT/supplier dependency.

## CDF-05 — Handoff Composer

```text
From: Technician
To: Inventory / Purchasing
Requested result: Reserve or source approved screen assembly
Source: Job JO-1204 • Diagnosis v2
Readiness:
✓ Customer approved quotation
✓ Exact part requirement attached
✓ Branch and target date
□ Substitute approval required if exact part unavailable
Customer impact: Repair paused
Target: Tomorrow 12:00
[Save draft] [Send handoff]
```

## CDF-06 — Handoff Inbox/Detail

Receiver actions:

```text
[Accept and assign]
[Return for missing information]
[Reject invalid handoff]
```

Shows checklist, artifacts, process context, impact, target, sender, and shared history.

## CDF-07 — Cross-Department Task Workspace

Header: task, department, process, source record, status, owner, target.

Panels:

- requested result;
- readiness/input;
- task form/action link in owning domain;
- dependencies/blockers;
- communication;
- evidence/result;
- timeline/audit.

## CDF-08 — Process Timeline

Filters:

- All;
- Customer-visible;
- Operations;
- Parts/Supplier;
- Finance/Accounting;
- IT/Technical;
- Approvals;
- Documents/Communication.

Every entry shows audience-safe summary and opens its authoritative source when permitted.

## CDF-09 — Blocker and Dependency View

```text
BLOCKED: Part unavailable
Owner: Purchasing
Linked task: PUR-221
Dependency: Supplier quote SUP-Q-55
Customer update: Sent 9:10 AM
Target: Tomorrow
Escalation: Branch Manager at 4:00 PM
[Open task] [Add approved workaround] [Escalate]
```

Includes graph/table alternative of linked department dependencies.

## CDF-10 — Cross-Department Approval Inbox

Shows:

- decision type/source/version;
- requester/process/customer/business context;
- amount/risk/impact;
- affected departments;
- conflict/SoD warning;
- evidence;
- approve/reject/more information;
- downstream action that will occur.

## CDF-11 — Communication Center

One coordinated workspace for:

- customer updates;
- supplier/vendor updates;
- staff/branch updates;
- owner updates;
- IT incident/maintenance messages.

Shows audience preview, channel, delivery, next-update rule, and source facts. Multiple departments may contribute facts; only authorized communication owner publishes.

## CDF-12 — Owner Enterprise Operations Dashboard

```text
End-to-end outcomes: volume, completion, cycle time, risk
Processes blocked by department/reason
Customer waiting and complaint risk
Revenue/payment/accounting risk
Parts/supplier/warehouse risk
Quality/warranty/rework risk
Workforce/capacity/training risk
IT/service/printer/integration risk
Cross-branch/company transfers
Approvals and overdue decisions
```

Drilldowns preserve field/record scope.

## CDF-13 — Branch Manager Operations Board

- current branch process lanes;
- department workloads;
- customer waiting;
- handoffs awaiting acceptance;
- blocked jobs/orders/requests;
- IT/asset/printer status;
- staffing and inventory constraints;
- approvals/escalations;
- upcoming changes/maintenance.

## CDF-14 — Customer-Safe Timeline

Customer Portal surface:

```text
Device received
Diagnosis completed
Quotation waiting for your approval
Part ordered — expected date
Repair in progress
Testing
Ready for payment/pickup
Warranty active
```

Shows customer action, safe estimate, approved documents, payment/release, and support. Internal department names/details appear only when helpful and approved.

## CDF-15 — Supplier/Vendor Task Portal

External user sees:

- assigned request/order/case;
- required quote/availability/evidence/action;
- target and contact;
- documents/messages;
- submit response;
- status/history limited to their participation.

## CDF-16 — Process Definition and Stage Designer

Authorized platform/tenant process administrators see:

- process version;
- stages and parallel groups;
- owning/contributing departments;
- readiness/exit rules;
- required tasks/records/documents/approvals;
- events/transitions;
- timeout/escalation;
- customer communication;
- exceptions/compensation;
- traceability/test impact.

Published versions cannot be edited in place.

## CDF-17 — Responsibility Matrix

Rows: stages/tasks/decisions. Columns: departments/roles. Cells: Responsible, Accountable, Consulted, Informed. Highlights missing accountability, prohibited self-approval, and unavailable assigned roles.

## CDF-18 — Process Health and Bottleneck Analytics

- stage/handoff wait time;
- return/rejection/rework;
- blocker duration;
- department capacity;
- customer wait;
- supplier/IT/payment dependencies;
- cycle-time trends;
- branch/company comparison;
- trace to source records.

## CDF-19 — Shared Record Link Panel

Embedded panel lists related domain records:

```text
Customer C-102
Device D-441
Job JO-1204
Diagnosis DG-33 v2
Quotation Q-882 v1 approved
Purchase request PR-91
IT incident INC-78
Invoice INV-31
Payment PAY-40
Warranty W-12
```

Only authorized links/fields appear.

## CDF-20 — Coordination Failure/Recovery Panel

Variants:

- event delayed/projection stale;
- handoff missing readiness;
- domain record changed after approval;
- destination department unavailable;
- notification failed;
- duplicate/replayed event;
- IT/provider outage.

Shows business record safety, preserved input, responsible recovery, retry/reconcile/escalate action, and support reference.

## Shared UX rules

- Every application shows current status, next action, responsible owner, and blocker.
- Staff never need to search another application merely to discover who owns the next step.
- Domain-specific action opens in the correct application/module.
- Shared fabric never presents an editable copy of protected domain fields.
- Desktop/tablet/mobile views preserve the same process context.
- Status, charts, lanes, and dependency graphs have text/table alternatives.
- Loading, empty, permission, offline, stale, conflict, failure, and archived states exist for every surface.
