# PLANS AND BILLING — WIREFLOW ARCHITECTURE

## Purpose

This is the canonical detailed wireflow for Free, Pro, Premium, tenant signup, plan changes, usage, billing recovery, suspension, reactivation, cancellation, platform plan publication, and reconciliation. It extends the global wireflow and never bypasses the subscription state machine, financial controls, permissions, tenant isolation, or entitlement rules.

## Global wireflow rules

- Every transition has a source screen, actor, permission, current-state requirement, validation, command, result, audit event, notification, and failure path.
- Back, save-and-exit, refresh, retry, resume, browser reload, duplicate submit, delayed webhook, and provider outage preserve truthful state.
- A client screen never activates entitlements directly.
- Payment-requiring changes remain pending until trusted payment confirmation and internal apply succeed.
- Provider events are verified, deduplicated, durably accepted, asynchronously processed, and reconciled.
- No failed flow silently falls back to a paid feature, lower price, higher limit, or destructive resource removal.
- Customer-facing and non-owner staff messages use plain language and do not expose payment secrets, platform internals, or security investigation details.

# 1. PUBLIC PLAN ENTRY AND ROUTING — `PB-FLOW-01`

```mermaid
flowchart TD
    A[Open Pricing Page PB-WF-01] --> B[Resolve Market and Supported Currency]
    B --> C{Catalog available?}
    C -- No --> D[Safe Pricing Unavailable State / Contact Support]
    C -- Yes --> E[Show Published Eligible Plan Versions]
    E --> F[Select Monthly or Annual]
    F --> G[Select Free / Pro / Premium]
    G --> H{Authenticated?}
    H -- No --> I[Start Signup PB-WF-02]
    H -- Yes --> J[Resolve Tenant and Actor]
    J --> K{Existing tenant?}
    K -- No --> I
    K -- Yes --> L{Actor authorized to change plan?}
    L -- No --> M[Explain Contact Owner]
    L -- Yes --> N[Authorized Comparison PB-WF-06]
```

Failure paths:

- Price book changed after page load: backend rejects stale selection and reloads current catalog.
- Unsupported currency/market: show available options; never convert silently.
- Retired plan deep link: show replacement options and migration explanation.

# 2. SIGNUP, TRIAL ELIGIBILITY, AND TENANT PROVISIONING — `PB-FLOW-02`

```mermaid
flowchart TD
    A[Signup PB-WF-02] --> B[Create or Resume Signup Draft]
    B --> C[Owner Identity]
    C --> D[Business Identity]
    D --> E[Duplicate Tenant / Trial Eligibility Check]
    E --> F{Eligible?}
    F -- No --> G[Existing Account / Support / Direct Free or Paid Route]
    F -- Yes --> H[Default Company and Branch]
    H --> I[Select Plan / Trial]
    I --> J[Review PB-WF-03]
    J --> K{Complete and valid?}
    K -- No --> L[Error Summary and Return to Step]
    L --> J
    K -- Yes --> M[Accept Terms and Submit Idempotent Provision Command]
    M --> N[Provisioning PB-WF-04]
    N --> O[Create Tenant]
    O --> P[Create Owner Membership]
    P --> Q[Create Company/Branch/Roles/Workflow]
    Q --> R[Create Subscription/Trial]
    R --> S[Publish Entitlement Snapshot and Usage Period]
    S --> T{All mandatory resources ready?}
    T -- No --> U[Pending Activation / Retry / Support]
    T -- Yes --> V[Active Tenant Confirmation]
```

Retry/resume:

- Signup draft uses an opaque resume token or authenticated draft.
- Final provisioning uses one idempotency family and returns the prior logical result on duplicate submit.
- Partial provisioning records each completed step and compensates only approved reversible resources.
- Tenant is not `ACTIVE` until mandatory resource verification passes.

# 3. TRIAL EXPIRY AND CONVERSION — `PB-FLOW-03`

```mermaid
flowchart TD
    A[Trial Active] --> B[Day 10 Reminder]
    B --> C[Day 13 Final Reminder]
    C --> D[Day 14 Expiry Evaluation]
    D --> E{Paid plan already selected?}
    E -- Yes --> F[Run Paid Activation Flow]
    E -- No --> G[Evaluate Free Compatibility]
    G --> H{Fits Free?}
    H -- Yes --> I[Activate FREE-2026-01]
    H -- No --> J[Read-Only Remediation PB-WF-09]
    J --> K{Resolved within 7 days?}
    K -- Upgrade --> F
    K -- Free compatible --> I
    K -- No --> L[Cancelled / Export Window]
```

Rules:

- No automatic paid conversion without explicit billing authorization.
- Active repair continuity remains available during the remediation window.
- Trial usage carries into the current target-plan period according to published policy.

# 4. SUBSCRIPTION OVERVIEW ROUTING — `PB-FLOW-04`

```mermaid
flowchart TD
    A[Open Subscription PB-WF-05] --> B[Resolve Tenant, Actor, Subscription, Snapshot]
    B --> C{Authorized billing role?}
    C -- No --> D[Limited Plan Status / Contact Owner]
    C -- Yes --> E{Subscription state}
    E -- Active --> F[Normal Overview]
    E -- Renewal Due --> G[Renewal Warning + Invoice Preview]
    E -- Past Due --> H[Recovery PB-WF-16]
    E -- Grace Period --> H
    E -- Suspended --> I[Suspended View PB-WF-17]
    E -- Cancellation Scheduled --> J[Overview + Revoke Cancellation Action]
    E -- Cancelled --> K[Read-Only / Export / Reactivate]
    E -- Archived/Closed --> L[Retention/Support Status]
```

# 5. UPGRADE PREVIEW, PAYMENT, AND ACTIVATION — `PB-FLOW-05`

```mermaid
flowchart TD
    A[Authorized Comparison PB-WF-06] --> B[Choose Higher Plan]
    B --> C[Create Immutable Change Preview]
    C --> D[Validate Market, Price, Tax, Current Version, Usage]
    D --> E[Provider Billing Preview]
    E --> F{Preview available?}
    F -- No --> G[Preserve Selection / Retry / No Change]
    F -- Yes --> H[Review PB-WF-07]
    H --> I{Owner confirms?}
    I -- No --> J[Return to Comparison]
    I -- Yes --> K[Create Pending Change with Idempotency]
    K --> L{Payment required now?}
    L -- No --> M[Apply Internal Change]
    L -- Yes --> N[Provider Checkout/Payment]
    N --> O{Trusted payment result}
    O -- Failed --> P[Old Plan Remains / Failure Guidance]
    O -- Processing --> Q[Processing PB-WF-08]
    Q --> R[Verified Webhook / Reconciliation Poll]
    R --> O
    O -- Confirmed --> M
    M --> S[Version Check + Subscription Transition]
    S --> T[Publish Entitlement Snapshot]
    T --> U[Adjust/Open Usage Period]
    U --> V[Audit + Events + Notifications + Cache Invalidation]
    V --> W[Confirmation PB-WF-08]
```

Critical failure paths:

- Payment succeeded, internal apply failed: create reconciliation; retry internal apply with same change/event; never charge again.
- Snapshot publish failed: do not claim complete; preserve safe previous snapshot and core continuity; reconcile.
- Webhook duplicated: return prior durable processing result.
- Webhook delayed: show processing, not failure; owner can refresh safely.
- Current subscription version changed after preview: reject and rebuild preview.

# 6. DOWNGRADE PREFLIGHT AND REMEDIATION — `PB-FLOW-06`

```mermaid
flowchart TD
    A[Choose Lower Plan PB-WF-06] --> B[Create Compatibility Report]
    B --> C[Check Companies/Branches/Users/Warehouses]
    C --> D[Check Storage/Jobs/API/Webhooks/Integrations/AI/BI/SSO]
    D --> E[Check Roles/Retention/Deployment/Legal Holds]
    E --> F{Incompatibilities?}
    F -- No --> G[Create Downgrade Preview]
    F -- Yes --> H[Downgrade Preflight PB-WF-09]
    H --> I[Resolve One Remediation Item PB-WF-10]
    I --> J[Validate Resource Decision]
    J --> K{More required items?}
    K -- Yes --> H
    K -- No --> G
    G --> L[Review PB-WF-11]
    L --> M{Owner confirms?}
    M -- No --> N[Save Draft / Exit]
    M -- Yes --> O[Schedule Downgrade at Period End]
    O --> P[Reminders Before Effective Date]
    P --> Q[Effective-Time Full Revalidation]
    Q --> R{Still compatible?}
    R -- No --> H
    R -- Yes --> S[Apply Lower Plan Snapshot]
    S --> T[Deactivate/Read-Only Unsupported Resources]
    T --> U[Reconcile / Notify / Confirm]
```

Rules:

- Resource selection is explicit. No automatic branch/user/company deletion.
- Scheduled downgrade can be revoked before irreversible provider/deployment work.
- Storage over target preserves files and blocks optional new upload.
- SSO cannot turn off before tested local owner access exists.
- Dedicated-to-pooled migration is a separate migration flow with backup and rollback.

# 7. MONTHLY/ANNUAL RENEWAL — `PB-FLOW-07`

```mermaid
flowchart TD
    A[Active Paid Subscription] --> B[Renewal Window Opens]
    B --> C[30/14/7/1 Day Notifications]
    C --> D[Validate Plan/Price/Tax/Credits/Payment Method]
    D --> E[Generate Renewal Invoice/Attempt]
    E --> F{Payment result}
    F -- Confirmed --> G[Record Invoice/Payment]
    G --> H[Open New Usage Period]
    H --> I[Subscription Active / Renewal Confirmation]
    F -- Failed --> J[Past Due]
    J --> K[Retry +1/+3/+5 Days]
    K --> L{Resolved?}
    L -- Yes --> G
    L -- No --> M[Grace Period]
```

Free renewal opens the next usage period without invoice/charge.

# 8. USAGE INGESTION, WARNING, AND LIMIT — `PB-FLOW-08`

```mermaid
flowchart TD
    A[Authoritative Business Action Commits] --> B[Outbox/Usage Source Event]
    B --> C[Usage Ingestion]
    C --> D{Duplicate?}
    D -- Yes --> E[Return Prior Logical Result]
    D -- No --> F[Store Usage Event]
    F --> G[Update/Rebuild Aggregate]
    G --> H[Resolve Effective Limit]
    H --> I{Threshold crossed?}
    I -- 80/90 --> J[Persist Unique Threshold Event]
    J --> K[Notify Owner / Realtime Usage Update]
    I -- 100 --> L[Mark Limit Reached]
    L --> M[Apply Meter-Specific Preflight Enforcement]
    I -- No --> N[Normal]
    F --> O[Optional Provider Usage Report]
    O --> P{Provider accepted?}
    P -- No --> Q[Retry / Dead Letter / Reconciliation]
    P -- Yes --> R[Provider Summary Reconciliation]
```

Action preflight:

```mermaid
flowchart TD
    A[User Attempts Metered Action] --> B[Resolve Current Aggregate + Reservation]
    B --> C[Check Security Rate Limit]
    C --> D{Security allowed?}
    D -- No --> E[Security Rate Limit Error]
    D -- Yes --> F[Check Commercial Quota]
    F --> G{Continuity exemption?}
    G -- Yes --> H[Allow and Audit Exemption]
    G -- No --> I{Within limit?}
    I -- Yes --> J[Allow]
    I -- No --> K[Preserve Draft / Limit Page / Upgrade or Remediation]
```

# 9. USAGE DASHBOARD AND DISPUTE — `PB-FLOW-09`

```mermaid
flowchart TD
    A[Usage Dashboard PB-WF-12] --> B[Select Meter PB-WF-13]
    B --> C[View Aggregate and Authorized Event Detail]
    C --> D{Report problem?}
    D -- No --> E[Return]
    D -- Yes --> F[Create Dispute Draft]
    F --> G[Add Period/References/Explanation/Evidence]
    G --> H[Review]
    H --> I[Submit Dispute]
    I --> J[Usage Reviewer Queue]
    J --> K[Compare Source Events, Aggregate, Provider, Invoice]
    K --> L{Decision}
    L -- Correct --> M[Correction + Credit/Adjustment if needed]
    L -- Reject --> N[Reason and Evidence]
    L -- More Info --> O[Return to Tenant]
    O --> G
    M --> P[Rebuild/Reconcile/Audit/Notify]
    N --> P
```

# 10. PAST-DUE AND GRACE RECOVERY — `PB-FLOW-10`

```mermaid
flowchart TD
    A[Payment Failed Event] --> B[Verify and Reconcile]
    B --> C{Trusted failure?}
    C -- No --> D[Status Being Confirmed / No Suspension]
    C -- Yes --> E[Past Due PB-WF-16]
    E --> F[Notify Owner/Billing Contacts]
    F --> G[Update Payment / Retry]
    G --> H{Payment confirmed?}
    H -- Yes --> I[Active + Confirmation]
    H -- No --> J{Grace policy begins?}
    J -- Yes --> K[Grace Period + Exact Deadline]
    K --> L[Retry Schedule]
    L --> M{Resolved before deadline?}
    M -- Yes --> I
    M -- No --> N[Suspension Decision]
```

Provider unavailable never equals trusted failure.

# 11. SUSPENSION AND REACTIVATION — `PB-FLOW-11`

```mermaid
flowchart TD
    A[Suspension Decision] --> B[Resolve Reason and Authority]
    B --> C{Security/Legal?}
    C -- Yes --> D[Security Lock]
    C -- No --> E[Non-Payment Core Continuity Window]
    E --> F[Block New Optional/Routine Actions]
    F --> G[Billing/Support/Export View PB-WF-17]
    D --> G
    G --> H[Owner Requests Reactivation PB-WF-19]
    H --> I[Verify Authority / Step-Up]
    I --> J[Resolve Payment or Security/Legal Issue]
    J --> K[Validate Plan/Usage/Credentials]
    K --> L{Approved and compatible?}
    L -- No --> M[Explain Required Action / Preserve State]
    L -- Yes --> N[Confirm Reactivation]
    N --> O[Publish Snapshot + Restore Access]
    O --> P[Selective Job/Integration Replay]
    P --> Q[Reconcile / Notify / Audit]
```

# 12. CANCELLATION, EXPORT, ARCHIVE, AND CLOSURE — `PB-FLOW-12`

```mermaid
flowchart TD
    A[Cancel Subscription PB-WF-18] --> B[Show Alternatives and Consequences]
    B --> C[Select Reason/Effective Mode]
    C --> D[Impact and Retention Review]
    D --> E[Check Answers + Step-Up]
    E --> F{Confirm?}
    F -- No --> G[Keep Subscription]
    F -- Yes --> H[Schedule Cancellation]
    H --> I[Notify / Show Revoke Deadline]
    I --> J{Revoked before effective time?}
    J -- Yes --> K[Return Active]
    J -- No --> L[Effective Cancellation]
    L --> M[Read-Only / Export / Reactivate Window]
    M --> N[Owner Requests Export]
    N --> O[Authorize + Generate Async Export]
    O --> P[Manifest/Checksum/Short-Lived Download]
    M --> Q[Window Expires]
    Q --> R[Archive]
    R --> S[Entity Retention and Legal-Hold Review]
    S --> T[Deletion Eligible / Extended Hold]
    T --> U[Verified Deletion Jobs / Closed]
```

Cancellation submit is idempotent. Export failure does not advance deletion eligibility without policy evidence.

# 13. BILLING ACCOUNT AND PAYMENT METHOD — `PB-FLOW-13`

```mermaid
flowchart TD
    A[Billing Account PB-WF-14] --> B[Edit Permitted Legal/Billing Fields]
    B --> C[Validate Tax/Address/PO Rules]
    C --> D{Payment method change?}
    D -- No --> E[Review and Save]
    D -- Yes --> F[Create Short-Lived Provider Portal/Setup Session]
    F --> G[Provider-Hosted Secure Collection]
    G --> H[Verified Callback/Webhook]
    H --> I[Update Allowed Payment Reference]
    I --> E
    E --> J[Confirmation and Audit]
```

Raw payment credentials never pass through ordinary business forms.

# 14. PLATFORM PLAN VERSION AUTHORING AND PUBLICATION — `PB-FLOW-14`

```mermaid
flowchart TD
    A[Platform Plan Catalog PB-WF-20] --> B[Create Draft Plan Version]
    B --> C[Plan Version Task List PB-WF-21]
    C --> D[Price Books]
    C --> E[Feature Entitlements]
    C --> F[Limits/Overage]
    C --> G[Trial/Support/Retention]
    C --> H[Migration/Impact]
    D --> I[Validate Draft]
    E --> I
    F --> I
    G --> I
    H --> I
    I --> J{Complete and consistent?}
    J -- No --> K[Show Task Errors / Preserve Draft]
    J -- Yes --> L[Submit for Product/Billing/Security/Owner Review]
    L --> M{All approvals?}
    M -- No --> N[Return with Reason]
    M -- Yes --> O[Check Answers / Schedule Publish]
    O --> P[Publish Immutable Version]
    P --> Q[Catalog Cache Invalidation / Events / Audit]
    Q --> R[Monitor Eligibility and Errors]
```

Published semantic data cannot be edited. A correction requires replacement version unless display-only.

# 15. TEMPORARY ENTITLEMENT OVERRIDE — `PB-FLOW-15`

```mermaid
flowchart TD
    A[Tenant Admin PB-WF-23] --> B[Request Temporary Override]
    B --> C[Select Feature/Limit and Value]
    C --> D[Reason / Case / Start / Expiry / Visibility]
    D --> E[Impact Preview]
    E --> F[Authorized Approver]
    F --> G{Approved?}
    G -- No --> H[Rejected with Reason]
    G -- Yes --> I[Create Time-Bound Override]
    I --> J[Publish New Entitlement Snapshot]
    J --> K[Notify Tenant when configured]
    K --> L[Expiry Job]
    L --> M[Expire / Republish Snapshot / Audit]
```

No override can be permanent or silently renewed.

# 16. PROVIDER WEBHOOK PROCESSING — `PB-FLOW-16`

```mermaid
flowchart TD
    A[Provider Sends Webhook] --> B[Size/Rate/Timeout Controls]
    B --> C[Verify Raw Signature and Timestamp]
    C --> D{Valid and within replay window?}
    D -- No --> E[Reject / Security Metric]
    D -- Yes --> F[Parse Adapter Event]
    F --> G{Provider Event ID already stored?}
    G -- Yes --> H[Acknowledge Prior Durable Receipt]
    G -- No --> I[Store Event + Encrypted Payload Reference]
    I --> J[Acknowledge Provider]
    J --> K[Async Map Tenant/Subscription/Object]
    K --> L{Mapping valid?}
    L -- No --> M[Reconciliation Finding]
    L -- Yes --> N[Run Idempotent Internal Command]
    N --> O[State/Snapshot/Finance/Usage Update]
    O --> P[Events / Audit / Notifications]
    P --> Q[Reconcile]
```

# 17. RECONCILIATION QUEUE — `PB-FLOW-17`

```mermaid
flowchart TD
    A[Scheduled or Triggered Reconciliation] --> B[Compare Internal and Provider State]
    B --> C{Difference?}
    C -- No --> D[Record Healthy Check]
    C -- Yes --> E[Create/Update Finding PB-WF-24]
    E --> F[Assign Severity and Owner]
    F --> G{Deterministic reversible repair?}
    G -- Yes --> H[Retry/Rebuild/Replay]
    H --> I[Recompare]
    G -- No --> J[Manual Review]
    J --> K[Approve Exact Resolution]
    K --> I
    I --> L{Resolved?}
    L -- No --> M[Escalate / Tenant Safe Notice]
    L -- Yes --> N[Close Finding / Audit / Notify]
```

Never auto-charge, refund, delete, upgrade, downgrade, or revoke tenant resources during generic reconciliation.

# 18. DIRECT ACCESS TO NON-ENTITLED FEATURE — `PB-FLOW-18`

```mermaid
flowchart TD
    A[User Opens Paid Feature URL/API] --> B[Authenticate and Resolve Tenant]
    B --> C[Resolve Snapshot]
    C --> D{Feature entitled?}
    D -- Yes --> E[Continue Permission/Scope/Lifecycle Checks]
    D -- No --> F{Actor is Owner/Billing?}
    F -- Yes --> G[Plan Access Page + Compare/Upgrade]
    F -- No --> H[Plain Explanation + Contact Owner]
```

The server returns a stable entitlement error. Hiding navigation is supplemental only.

# 19. OFFLINE AND STALE CLIENT BEHAVIOR — `PB-FLOW-19`

- Subscription change, payment confirmation, plan publication, override, suspension, reactivation, cancellation, and provider operations require online authoritative validation.
- Offline core repair drafts can continue only under previously validated permission and continuity policy; reconnect refreshes subscription and entitlements before protected submit.
- A stale client showing an old entitlement cannot execute a protected action; backend returns current plan/access state and preserves valid draft data.
- Usage display can show last-known values with timestamp but cannot promise remaining quota when offline.

# 20. UNIVERSAL ERROR, RETRY, AND RESUME — `PB-FLOW-20`

```mermaid
flowchart TD
    A[Command Submitted] --> B{Result}
    B -- Success --> C[Confirmation + Reference + Next Step]
    B -- Validation --> D[Error Summary + Field Errors + Preserved Input]
    B -- Version Conflict --> E[Refresh Current State + Rebuild Preview]
    B -- Provider Processing --> F[Processing State + Poll/Webhook/Reconcile]
    B -- Retryable Failure --> G[Safe Retry with Same Idempotency Family]
    B -- Non-Retryable --> H[Safe Explanation + Alternate Action/Support]
    B -- Unknown Outcome --> I[Do Not Resubmit Blindly / Check Operation Reference]
    I --> F
```

## Wireflow completion criteria

- Every `PB-WF-01` through `PB-WF-24` screen is reached by at least one documented wireflow.
- Normal, alternate, rejection, exception, cancellation, retry, resume, conflict, provider-delay, reconciliation, and recovery paths exist.
- No path directly changes plan access from frontend state.
- Every financial/configuration completion has a review and confirmation stage.
- Downgrade/cancellation never silently deletes data.
- Usage enforcement has continuity paths.
- Platform plan publication and tenant override require approvals and immutable/auditable results.

## Status

`PLANS_BILLING_WIREFLOW_ARCHITECTURE_COMPLETE`
