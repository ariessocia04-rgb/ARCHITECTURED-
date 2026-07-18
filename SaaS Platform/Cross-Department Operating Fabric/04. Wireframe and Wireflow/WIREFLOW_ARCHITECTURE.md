# CROSS-DEPARTMENT OPERATING FABRIC — WIREFLOW ARCHITECTURE

## Purpose

Define the literal connections between all departments, applications, portals, services, documents, approvals, tasks, events, and failure paths.

# 1. Universal process start and participation

```mermaid
flowchart TD
    A[Approved trigger/domain record] --> B[Resolve process definition/version]
    B --> C[Create idempotent ProcessInstance]
    C --> D[Link authoritative domain record]
    D --> E[Resolve first stage, departments, roles, readiness]
    E --> F[Create linked domain/coordination tasks]
    F --> G[Notify responsible/accountable participants]
    G --> H[Show process header in authorized applications]
```

# 2. Department handoff lifecycle

```mermaid
flowchart TD
    A[Source department reaches handoff point] --> B[Evaluate readiness checklist]
    B --> C{Ready?}
    C -- No --> D[Show missing records/documents/approvals]
    D --> A
    C -- Yes --> E[Create versioned handoff]
    E --> F[Notify destination queue/owner]
    F --> G{Destination decision}
    G -- Accept --> H[Assign accountable owner/target]
    G -- Return info --> I[Record exact missing information]
    I --> J[Source updates authoritative record]
    J --> B
    G -- Reject invalid --> K[Escalate/correct process routing]
    H --> L[Destination performs domain task]
    L --> M[Domain result event]
    M --> N[Complete handoff and advance/unblock process]
```

# 3. Customer request to repair closure

```mermaid
flowchart TD
    A[Marketing/CRM/Customer/Front Desk request] --> B[Front Desk intake]
    B --> C[Job order and dispatch]
    C --> D[Technician diagnosis]
    D --> E[Quotation by Operations/Finance]
    E --> F{Approval}
    F -- Reject/change --> G[Close/revise/cancel with customer communication]
    F -- Approve --> H[Inventory availability]
    H --> I{In stock?}
    I -- Yes --> J[Reserve/issue part]
    I -- No --> K[Purchasing/Supplier/Warehouse source-to-pay]
    K --> J
    J --> L[Technician repair]
    L --> M[Testing/QC]
    M --> N{Pass?}
    N -- No --> O[Rework/parts/problem/incident loop]
    O --> L
    N -- Yes --> P[Invoice/payment]
    P --> Q[Front Desk release]
    Q --> R[Warranty/CRM feedback/follow-up]
    R --> S[Accounting/reporting/audit/process closure]
    B -. technical blocker .-> T[IT support/incident/change]
    C -. technical blocker .-> T
    D -. technical blocker .-> T
    E -. technical blocker .-> T
    L -. technical blocker .-> T
    P -. printer/provider blocker .-> T
    T --> U[Resolution/workaround validated by affected department]
    U --> B
```

# 4. Source to pay and repair fulfilment

```mermaid
flowchart TD
    A[Technician/Inventory demand] --> B[Validate stock/reservation/substitution]
    B --> C[Purchase request]
    C --> D[Manager/Finance approval]
    D --> E{Approved?}
    E -- No --> F[Return/cancel and notify repair process]
    E -- Yes --> G[Supplier quotations/selection]
    G --> H[Purchase order]
    H --> I[Supplier confirmation/dispatch]
    I --> J[Warehouse receiving/inspection]
    J --> K{Accepted?}
    K -- No --> L[Supplier return/dispute/replacement]
    L --> I
    K -- Yes --> M[Inventory stock movement]
    M --> N[Reserve/issue to repair]
    N --> O[Invoice matching and Accounts Payable]
    O --> P[Payment/accounting/supplier performance]
```

# 5. Quote to cash and record to report

```mermaid
flowchart TD
    A[Diagnosis/service pricing] --> B[Quotation draft]
    B --> C[Discount/tax/override approval as required]
    C --> D[Issue quotation]
    D --> E{Customer decision}
    E -- Changes --> F[Versioned revision]
    F --> B
    E -- Reject --> G[Close/cancel process path]
    E -- Approve --> H[Deposit/invoice/payment schedule]
    H --> I[Payment confirmation]
    I --> J[Receipt print/digital delivery]
    J --> K[Release eligibility]
    I --> L[Accounting posting/reconciliation]
    L --> M[Period close/tax/report/owner analytics]
    J -. printer/provider issue .-> N[IT/Printing safe fallback]
    N --> O[Digital/alternate print without repeating payment]
```

# 6. Hire to operate to offboard

```mermaid
flowchart TD
    A[Manager workforce need] --> B[Owner/HR approval]
    B --> C[Recruit/select/hire]
    C --> D[HR employee record]
    D --> E[Tenant Admin identity invitation]
    E --> F[IT device/account/MFA/access fulfilment]
    F --> G[Training/certification]
    G --> H[Branch/department/role/schedule assignment]
    H --> I[Operational work and performance]
    I --> J{Change event}
    J -- Transfer/promotion --> K[HR/Manager approval]
    K --> L[Role/branch/device/access/schedule changes]
    L --> I
    J -- Leave/suspension --> M[Schedule/access rules]
    M --> I
    J -- Offboard --> N[HR termination checklist]
    N --> O[Access revoke/device return/knowledge handoff]
    O --> P[Payroll/accounting/final audit/retention]
```

# 7. Lead/campaign to service and retention

```mermaid
flowchart TD
    A[Marketing campaign/lead] --> B[Consent and qualification]
    B --> C[CRM account/opportunity]
    C --> D[Appointment/service request]
    D --> E[Front Desk intake and repair process]
    E --> F[Outcome/payment/warranty]
    F --> G[Customer satisfaction/complaint]
    G --> H[CRM follow-up/retention]
    H --> I[Attribution and Owner/Marketing analytics]
    I --> J[Approved campaign/process improvement]
```

# 8. Warranty return and customer complaint

```mermaid
flowchart TD
    A[Customer warranty/complaint] --> B[CRM/Front Desk case]
    B --> C[Original repair/payment/warranty validation]
    C --> D[Technical/quality assessment]
    D --> E{Issue type}
    E -- Repair fault --> F[Warranty repair/rework]
    E -- Part/supplier --> G[Inventory/Supplier recovery]
    E -- Payment/service --> H[Finance/Manager resolution]
    E -- Communication/process --> I[CRM/Training/Change action]
    F --> J[QC/release/customer confirmation]
    G --> J
    H --> J
    I --> J
    J --> K[Root cause/problem/analytics/accounting effects]
```

# 9. IT blocker connected to any department

```mermaid
flowchart TD
    A[Department task blocked by technical issue] --> B[Create linked ProcessBlocker]
    B --> C[Contextual IT request/incident]
    C --> D[IT triage service/asset/integration/printer]
    D --> E{Need business input/approval?}
    E -- Yes --> F[Linked task to affected department/Owner]
    F --> G[Input/approval returned]
    G --> H[IT runbook/change/vendor/platform action]
    E -- No --> H
    H --> I[Technical validation]
    I --> J[Affected department business validation]
    J --> K{Restored?}
    K -- No --> D
    K -- Yes --> L[Resolve IT record and process blocker]
    L --> M[Resume original department stage]
```

# 10. Cross-branch transfer

```mermaid
flowchart TD
    A[Source branch capacity/part/service need] --> B[Check tenant/company/branch eligibility]
    B --> C[Owner/manager/customer approval when required]
    C --> D[Create transfer/handoff plan]
    D --> E[Inventory/job/device/document/logistics preparation]
    E --> F[Source branch dispatch]
    F --> G[Destination branch receipt and acceptance]
    G --> H[Destination execution]
    H --> I[Financial/accounting allocation]
    I --> J[Customer communication and process continuation]
    J --> K[Cross-branch audit/performance]
```

# 11. Approval changed-source flow

```mermaid
flowchart TD
    A[Approval requested for source version] --> B[Approver reviews impact/evidence]
    B --> C{Source changes before decision/application?}
    C -- No --> D[Approve/reject/more info]
    C -- Yes --> E[Mark approval superseded/stale]
    E --> F[Generate new decision context/version]
    F --> B
    D --> G[Owning domain revalidates and executes decision]
    G --> H[Event updates shared process/timeline]
```

# 12. Coordinated customer communication

```mermaid
flowchart TD
    A[Material process event/delay/action] --> B[Collect verified facts from departments]
    B --> C[Resolve communication owner]
    C --> D[Generate customer-safe draft]
    D --> E[Review status, estimate, required action, channel]
    E --> F[Publish once through approved channels]
    F --> G[Delivery/acknowledgement]
    G --> H{Delivery/action failed?}
    H -- Yes --> I[Retry/alternate channel/Front Desk follow-up]
    H -- No --> J[Record timeline]
```

# 13. AI recommendation to controlled action

```mermaid
flowchart TD
    A[Authorized process/data projection] --> B[AI/BI analysis]
    B --> C[Recommendation with sources/confidence/limitations]
    C --> D[Authorized human reviews]
    D --> E{Accepted?}
    E -- No --> F[Record dismissal/feedback]
    E -- Yes --> G[Create domain task/approval/change proposal]
    G --> H[Owning domain executes through normal controls]
    H --> I[Measure outcome and audit]
```

# 14. Process cancellation/compensation

```mermaid
flowchart TD
    A[Cancellation requested] --> B[Check authority and current linked records]
    B --> C[Impact preview: customer/financial/inventory/supplier/IT]
    C --> D[Required approvals]
    D --> E{Approved?}
    E -- No --> F[Continue process]
    E -- Yes --> G[Issue domain compensation commands]
    G --> H[Void/reverse/refund/release reservation/cancel tasks as applicable]
    H --> I[Preserve completed evidence/history]
    I --> J[Notify departments/external participants]
    J --> K[Complete cancelled process with audit]
```

# 15. Event failure and reconciliation

```mermaid
flowchart TD
    A[Domain event/command result delayed, duplicate, or conflicting] --> B[Inbox/outbox deduplication and version check]
    B --> C{Safe automatic recovery?}
    C -- Yes --> D[Retry/replay/rebuild projection idempotently]
    C -- No --> E[Create reconciliation finding/blocker]
    E --> F[Domain owner + coordinator review evidence]
    F --> G[Apply authorized correction/compensation]
    D --> H[Reconcile process summary]
    G --> H
    H --> I[Audit and unblock/advance when valid]
```

# 16. Owner cross-department decision flow

```mermaid
flowchart TD
    A[Owner sees blocked/risk/approval item] --> B[Review end-to-end context]
    B --> C[Drill into authorized domain evidence]
    C --> D[Review department recommendations and conflicts]
    D --> E{Decision}
    E -- More info --> F[Linked tasks to responsible departments]
    F --> B
    E -- Reject --> G[Owning domain records rejection/result]
    E -- Approve --> H[Owning domain executes approved command]
    G --> I[Shared process/timeline/notifications update]
    H --> I
```

## Global handoff map

```text
Customer/Marketing/CRM → Front Desk
Front Desk → Dispatch → Technician → QC → Front Desk/Finance
Technician → Inventory/Purchasing → Supplier/Warehouse → Technician
Finance → Accounting → Owner/Audit
HR → Tenant Admin/IT/Managers/Accounting
All departments ↔ IT Operations
IT Operations ↔ Platform Support/Vendors
All domains → BI/AI → controlled recommendations
Owner/Managers ↔ approvals/oversight across all departments
```

## Failure rules

- The shared process never repeats a domain transaction merely because coordination failed.
- Every failure identifies whether the authoritative domain operation succeeded.
- Valid input, artifacts, and decisions are preserved.
- Retry/compensation is idempotent.
- Customer messages remain coordinated.
- A department cannot mark another department's task complete.
- IT resolution does not close business work without business validation.
