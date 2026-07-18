# WIREFLOW ARCHITECTURE — TECHNICIAN REPAIR SAAS

## PURPOSE

This is the single canonical wireflow for navigation, decisions, handoffs, exceptions, and user-visible state changes across the ARCHITECTURED Technician Repair SaaS.

The wireflow connects approved workflows to the canonical wireframes. It does not redefine domain rules or allow users to skip lifecycle gates.

## GOVERNANCE

- Follow `1plan.md`, the shared lifecycle, and the cross-application handoff matrix.
- No screen may create an illegal lifecycle transition.
- Every handoff has a source, destination, readiness check, result, and failure path.
- Customer-visible language is simpler than internal operational status but maps to the same authoritative state.
- Back, cancel, save-draft, retry, and resume behavior must preserve valid data.
- Current scope is documentation only; no code.

# 1. ENTRY AND ROUTING WIREFLOW

```mermaid
flowchart TD
    A[Open SaaS] --> B{Authenticated?}
    B -- No --> C[Sign In / Public Tracking / Customer Registration]
    B -- Yes --> D[Resolve User, Tenant, Role, Branch, Subscription]
    D --> E{Valid active context?}
    E -- No --> F[Context Error / Select Tenant / Contact Administrator]
    E -- Yes --> G{Application access}
    G -->|Technician| T[Technician Dashboard]
    G -->|Front Desk| FD[Front Desk Dashboard]
    G -->|Owner or Manager| O[Owner Dashboard]
    G -->|Customer| CP[Customer Portal]
    G -->|Platform Staff| PA[Platform Administration]
```

# 2. CUSTOMER REQUEST TO JOB ORDER WIREFLOW

```mermaid
flowchart TD
    A[Walk-in / Call / Portal / Appointment] --> B[Search Customer]
    B --> C{Existing authorized customer?}
    C -- Yes --> D[Select Customer]
    C -- No --> E[Create Customer]
    D --> F[Search or Add Device]
    E --> F
    F --> G[Record Reported Issue]
    G --> H[Accessories and Physical Condition]
    H --> I[Capture Evidence and Consent]
    I --> J[Choose Service, Priority, Warranty Claim, Fee]
    J --> K[Review Intake Summary]
    K --> L{Required information complete?}
    L -- No --> M[Highlight Missing or Invalid Fields]
    M --> K
    L -- Yes --> N[Customer / Representative Confirmation]
    N --> O[Create Job Order]
    O --> P[Issue Intake Receipt and Tracking Access]
    P --> Q[Queue Qualification]
```

## Intake Failure Paths

- Duplicate customer or device: show possible match and require authorized merge or selection.
- Evidence upload failure: preserve intake draft and permit retry or approved alternate capture.
- Signature unavailable: follow tenant-approved alternative confirmation.
- Offline intake: assign unique local operation ID and reconcile before creating another job.

# 3. QUEUE, DISPATCH, AND ACCEPTANCE WIREFLOW

```mermaid
flowchart TD
    A[Job Awaiting Assignment] --> B[Queue Qualification]
    B --> C[Priority, SLA, Branch, Skill, Certification, Workload]
    C --> D{Auto-assignment allowed and eligible?}
    D -- Yes --> E[Create Assignment]
    D -- No --> F[Dispatcher Reviews Queue]
    F --> G[Select Eligible Technician]
    G --> E
    E --> H[Technician Notification]
    H --> I[Technician Opens Assignment]
    I --> J{Accept?}
    J -- Yes --> K[Status: Accepted]
    J -- No --> L[Decline / Request Reassignment with Reason]
    L --> M[Dispatcher Exception Queue]
    M --> F
    K --> N[Inspection and Diagnosis]
```

## Queue UX Rules

- Show the reason a job is prioritized.
- Show SLA risk without exposing owner-only data.
- Do not allow a technician to claim an ineligible or locked job.
- Reassignment keeps assignment history.

# 4. TECHNICIAN DIAGNOSIS WIREFLOW

```mermaid
flowchart TD
    A[Accepted Job] --> B[Open Job Workspace]
    B --> C[Review Read-only Intake Snapshot]
    C --> D[Start Inspection]
    D --> E[Guided Diagnostic Checklist]
    E --> F[Record Test Results and Evidence]
    F --> G{Safety or data risk?}
    G -- Yes --> H[Stop / Isolate / Escalate]
    H --> I[Manager or Specialist Review]
    G -- No --> J[Record Findings]
    I --> J
    J --> K[Recommended Work, Parts, Risk, ETA]
    K --> L{Complete and valid?}
    L -- No --> M[Save Draft / Request Help]
    M --> E
    L -- Yes --> N[Complete Diagnosis]
    N --> O[Quotation Preparation]
```

# 5. QUOTATION AND CUSTOMER APPROVAL WIREFLOW

```mermaid
flowchart TD
    A[Completed Diagnosis] --> B[Prepare Quotation Version]
    B --> C[Parts, Labor, Fees, Tax, Discount, Warranty, Terms]
    C --> D{Protected price or discount?}
    D -- Yes --> E[Manager / Owner Approval]
    E --> F{Approved?}
    F -- No --> G[Revise or Reject Quote Draft]
    G --> B
    F -- Yes --> H[Send Customer-safe Quotation]
    D -- No --> H
    H --> I[Customer Opens Quote]
    I --> J{Customer decision}
    J -- Approve --> K[Record Approval and Lock Version]
    J -- Reject --> L[Record Rejection / Reason / Follow-up]
    J -- Ask Question --> M[Secure Message / Staff Follow-up]
    M --> I
    J -- Expire --> N[Expired Quote / Revision Required]
    K --> O[Parts Availability and Repair Authorization]
```

## Approval Rules

- Approval applies to one exact quotation version.
- New price-affecting changes require a new version and new approval.
- Staff cannot record customer approval without authorized evidence.

# 6. PARTS AND INVENTORY WIREFLOW

```mermaid
flowchart TD
    A[Approved Repair] --> B[Check Required Parts]
    B --> C{Available?}
    C -- Yes --> D[Reserve Parts]
    D --> E[Issue to Job]
    C -- No --> F[Shortage / Purchase / Transfer / Substitution]
    F --> G{Approved alternative available?}
    G -- No --> H[Status: Awaiting Parts]
    H --> I[Customer and Staff Update]
    I --> B
    G -- Yes --> D
    E --> J[Repair Execution]
    J --> K[Confirm Used / Unused / Removed / Recycled]
    K --> L[Stock Movements and Job Cost Updated]
```

# 7. REPAIR EXECUTION WIREFLOW

```mermaid
flowchart TD
    A[Repair Authorized and Parts Ready] --> B[Start Repair]
    B --> C[Follow Approved Repair Checklist]
    C --> D[Record Progress, Notes, Time, Evidence]
    D --> E{Blocked or unsafe?}
    E -- Yes --> F[Pause with Reason]
    F --> G{Needs approval, part, or revised quote?}
    G --> H[Create Exception / Handoff]
    H --> I[Resolve Exception]
    I --> C
    E -- No --> J{Repair complete?}
    J -- No --> C
    J -- Yes --> K[Confirm Parts Usage and Evidence]
    K --> L[Send to Testing]
```

# 8. TESTING, QUALITY, AND REWORK WIREFLOW

```mermaid
flowchart TD
    A[Ready for Testing] --> B[Select Required Test Plan]
    B --> C[Run Tests]
    C --> D[Record Result and Evidence]
    D --> E{All required tests pass?}
    E -- No --> F[Testing Failed]
    F --> G[Create Rework Requirement]
    G --> H[Return to Repair]
    H --> B
    E -- Yes --> I[Submit for Quality Review]
    I --> J[Quality Supervisor Reviews Evidence]
    J --> K{Decision}
    K -- Approve --> L[Ready for Release]
    K -- Rework --> G
    K -- Missing Evidence --> M[Request Evidence]
    M --> B
    K -- Escalate --> N[Safety / Compliance Review]
    N --> J
```

# 9. INVOICE, PAYMENT, AND RELEASE WIREFLOW

```mermaid
flowchart TD
    A[Quality Approved] --> B[Validate Final Charges]
    B --> C[Issue Invoice / Confirm Account Terms]
    C --> D{Payment required before release?}
    D -- Yes --> E[Customer Payment]
    E --> F{Trusted confirmation received?}
    F -- No --> G[Pending / Failed / Reconciliation]
    G --> E
    F -- Yes --> H[Release Financial Gate Passed]
    D -- No --> H
    H --> I[Notify Customer Ready for Release]
    I --> J[Verify Customer or Representative]
    J --> K[Accessories and Handover Checklist]
    K --> L[Signature / Delivery Confirmation]
    L --> M[Release Device]
    M --> N[Issue Receipt and Release Documents]
    N --> O[Activate Warranty]
```

# 10. CUSTOMER PORTAL WIREFLOW

```mermaid
flowchart TD
    A[Portal Home / Tracking Link] --> B[Resolve Authorized Repair]
    B --> C[Customer-safe Status Timeline]
    C --> D{Action required?}
    D -- Approve Quote --> E[Quotation Review]
    E --> F[Approve / Reject / Ask Question]
    D -- Pay --> G[Secure Payment Provider]
    D -- Pickup / Delivery --> H[Choose Handover Method]
    D -- Warranty Concern --> I[Warranty Request]
    D -- Support --> J[Secure Support Thread]
    D -- No --> K[View Updates, Documents, Warranty, History]
    F --> C
    G --> C
    H --> C
    I --> L[Warranty Intake and Linked Return]
    J --> C
```

# 11. WARRANTY RETURN WIREFLOW

```mermaid
flowchart TD
    A[Warranty Concern] --> B[Identify Original Job and Warranty]
    B --> C[Record Symptoms and Evidence]
    C --> D{Coverage appears valid?}
    D -- Yes --> E[Create Linked Warranty Job]
    D -- Unclear --> F[Supervisor / Owner Review]
    D -- No --> G[Explain Rejection / Paid-Service Option]
    F --> H{Decision}
    H -- Approve --> E
    H -- Reject --> G
    E --> I[Priority and Assignment]
    I --> J[Inspection / Diagnosis]
    J --> K[Repair / Replace / Refund / Reject]
    K --> L[Quality, Release, and Warranty History]
```

# 12. OWNER APPROVAL WIREFLOW

```mermaid
flowchart TD
    A[Protected Action Requested] --> B[Create Approval Request]
    B --> C[Show Policy, Evidence, Amount, Risk, Requester]
    C --> D[Authorized Approver Opens Request]
    D --> E{Decision}
    E -- Approve --> F[Execute Exact Approved Action]
    E -- Reject --> G[Reject with Reason]
    E -- More Info --> H[Return to Requester]
    H --> D
    F --> I[Audit Event and Notifications]
    G --> I
```

# 13. CONFIGURATION PUBLISH WIREFLOW

```mermaid
flowchart TD
    A[Edit Configuration Draft] --> B[Validate Fields and Dependencies]
    B --> C[Impact Preview]
    C --> D{Protected or breaking change?}
    D -- Yes --> E[Approval and Migration Plan]
    E --> F{Approved?}
    F -- No --> G[Remain Draft]
    F -- Yes --> H[Publish Version]
    D -- No --> H
    H --> I[Invalidate Cache / Notify Services / Audit]
    I --> J[Monitor and Roll Back if Required]
```

# 14. SUBSCRIPTION AND TENANT LIFECYCLE WIREFLOW

```mermaid
flowchart TD
    A[Trial / Active Tenant] --> B{Billing and usage status}
    B -- Healthy --> C[Normal Access]
    B -- Warning --> D[Usage or Renewal Warning]
    B -- Past Due --> E[Grace Period]
    E --> F{Resolved?}
    F -- Yes --> C
    F -- No --> G[Suspend According to Policy]
    G --> H[Read-only / Limited Payment / Support / Export Access]
    H --> I{Reactivated?}
    I -- Yes --> C
    I -- No --> J[Cancellation and Closure Workflow]
    J --> K[Export Offer / Integration Shutdown / Retention]
    K --> L[Archive / Deletion Eligibility Review]
```

# 15. SUPPORT ACCESS WIREFLOW

```mermaid
flowchart TD
    A[Support Need] --> B[Request Tenant Support Access]
    B --> C[Reason, Scope, Duration, Capabilities]
    C --> D{Approved?}
    D -- No --> E[No Access / Alternate Support]
    D -- Yes --> F[Time-limited Visible Support Session]
    F --> G[Allowed Diagnostic Actions Only]
    G --> H[Session Ends / Revoked / Expires]
    H --> I[Complete Audit and Tenant-visible Record]
```

# 16. ERROR, RETRY, AND RECOVERY WIREFLOW

```mermaid
flowchart TD
    A[Action Submitted] --> B{Result}
    B -- Success --> C[Confirm Outcome and Next Step]
    B -- Validation Error --> D[Keep Input and Highlight Corrections]
    B -- Permission / Plan Restriction --> E[Explain Required Access or Plan]
    B -- Conflict --> F[Show Current Authoritative Record]
    B -- Network / Provider Failure --> G[Safe Retry / Pending / Reconciliation]
    B -- Unknown Error --> H[Safe Error and Correlation Reference]
    D --> A
    F --> I[Reload / Merge Permitted Fields / Cancel]
    I --> A
    G --> J{Retry safe?}
    J -- Yes --> A
    J -- No --> K[Exception Queue / Support]
    H --> K
```

# 17. OFFLINE TECHNICIAN WIREFLOW

```mermaid
flowchart TD
    A[Connection Lost] --> B[Show Offline State]
    B --> C[Allow Approved Offline Actions]
    C --> D[Store Unique Operation IDs Locally]
    D --> E[Connection Restored]
    E --> F[Authenticate and Revalidate Context]
    F --> G[Upload Pending Operations]
    G --> H{Conflict?}
    H -- No --> I[Apply Idempotently and Confirm]
    H -- Yes --> J[Conflict Resolution Screen]
    J --> K[Authorized Merge / Reject / Escalate]
    K --> I
```

# 18. NAVIGATION RULES

- Dashboard cards open a filtered canonical list, not a disconnected duplicate page.
- Lists open one canonical record workspace.
- Record stage tabs follow the approved lifecycle and permissions.
- Back returns to the previous list with filters and scroll position preserved.
- Save and Exit returns the record to its valid current state.
- Deep links revalidate tenant, branch, role, record, field, subscription, and session access.
- Notifications link to the related authorized record or safe fallback page.
- Customer tracking links never expose internal job identifiers or staff-only data.

# 19. NON-TECHNICAL USER FLOW RULES

- State the purpose of each screen before asking for information.
- Use guided steps for intake, approval, payment, release, configuration, and recovery.
- Ask only for information needed in the current step.
- Reuse known information and avoid asking users to enter it again.
- Use plain-language status labels with an optional detailed operational label for trained staff.
- Show what happened, what is saved, what happens next, and who is responsible.
- Never require the user to understand database, API, event, tenant, entitlement, or synchronization terminology.
- Provide safe defaults and visible review before irreversible actions.

# 20. WIREFLOW VALIDATION MATRIX

| Flow | Source Application | Destination | Gate Preserved | Exception Path | Status |
|---|---|---|---|---|---|
| Intake to Job Order | Front Desk / Portal | Shared Service Workflow | Yes | Yes | Complete |
| Queue to Assignment | Front Desk / Dispatcher | Technician | Yes | Yes | Complete |
| Diagnosis to Quote | Technician | Front Desk / Finance / Customer | Yes | Yes | Complete |
| Quote to Parts / Repair | Customer / Finance | Inventory / Technician | Yes | Yes | Complete |
| Repair to Testing | Technician | Testing | Yes | Yes | Complete |
| Testing to Quality | Technician / Tester | Quality | Yes | Yes | Complete |
| Quality to Payment / Release | Quality | Finance / Front Desk / Customer | Yes | Yes | Complete |
| Release to Warranty | Front Desk | Warranty / Portal | Yes | Yes | Complete |
| Warranty Return | Portal / Front Desk | Technician / Quality / Owner | Yes | Yes | Complete |
| Owner Approval | Any protected workflow | Authorized Approver | Yes | Yes | Complete |
| Subscription Lifecycle | Platform / Tenant Owner | All Applications | Yes | Yes | Complete |
| Support Access | Tenant / Platform Support | Controlled Tenant Session | Yes | Yes | Complete |
| Offline Synchronization | Technician App | Shared Platform | Yes | Yes | Complete |

## STATUS

- Entry and application routing: COMPLETE.
- Intake, queue, assignment, diagnosis, quotation, parts, repair, testing, quality, payment, release, warranty, and closure flows: COMPLETE.
- Owner, subscription, support-access, error, offline, and recovery flows: COMPLETE.
- Navigation and non-technical-user flow rules: COMPLETE.
- Cross-application flow validation: COMPLETE.

**WIREFLOW ARCHITECTURE COMPLETE (100%)**
