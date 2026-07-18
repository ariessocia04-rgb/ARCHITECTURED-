# PRINTING AND PERIPHERAL OPERATIONS — WIREFLOW ARCHITECTURE

## Purpose

Connect staff actions, owner governance, IT administration, document state, printer capability, print adapters, failures, recovery, and audit without weakening payment, release, inventory, warranty, or security workflows.

# 1. Standard staff print flow

```mermaid
flowchart TD
    A[User selects Print] --> B[Resolve document and exact version]
    B --> C{Document finalized and visible?}
    C -- No --> D[Explain blocked requirement]
    C -- Yes --> E[Resolve actor, tenant, branch, workstation, permission]
    E --> F{Authorized?}
    F -- No --> G[Permission explanation / request access]
    F -- Yes --> H[Resolve required print profile]
    H --> I[Find compatible approved printers]
    I --> J{Compatible printer available?}
    J -- No --> K[Browser/PDF/email/queue/contact IT alternatives]
    J -- Yes --> L[Show preview and recommended printer]
    L --> M{User confirms?}
    M -- No --> N[Return without changing business record]
    M -- Yes --> O[Create idempotent print job]
    O --> P[Queue and dispatch to adapter]
    P --> Q[Show progress/result]
```

# 2. Managed printer success flow

```mermaid
flowchart TD
    A[Print job queued] --> B[Adapter validates capability and health]
    B --> C{Valid and ready?}
    C -- No --> D[Normalized failure / fallback]
    C -- Yes --> E[Submit job]
    E --> F[Adapter processing]
    F --> G{Trustworthy completion status?}
    G -- Yes --> H[PRINTED_CONFIRMED]
    G -- No --> I[SUBMITTED]
    H --> J[Complete job / audit / notify]
    I --> K[Wait, reconcile, or request user confirmation]
```

# 3. Browser/OS dialog flow

```mermaid
flowchart TD
    A[Preview finalized PDF/HTML] --> B[Open browser print dialog]
    B --> C[Record SUBMITTED_TO_OS]
    C --> D{User returns}
    D --> E[Ask outcome]
    E -->|Printed| F[Record USER_CONFIRMED]
    E -->|Failed| G[Show retry / other printer / digital delivery]
    E -->|Cancelled| H[Record cancelled without business-state change]
    E -->|Unsure| I[Keep status unconfirmed and offer help]
```

# 4. Cashier payment receipt flow

```mermaid
flowchart TD
    A[Payment confirmation request] --> B[Financial service confirms idempotently]
    B --> C[Issue finalized receipt document]
    C --> D[Show payment success independent of printing]
    D --> E[Open receipt print/delivery panel]
    E --> F[Select thermal/page/digital destinations]
    F --> G[Create print jobs and message/email jobs]
    G --> H{Physical print failed?}
    H -- No --> I[Receipt delivered / audit]
    H -- Yes --> J[Payment remains confirmed]
    J --> K[Retry safe print / alternate printer / email / PDF / IT ticket]
```

# 5. Intake and job-order multi-output flow

```mermaid
flowchart TD
    A[Intake/job order completed] --> B[Finalize intake receipt and job order]
    B --> C[Generate QR/barcode mapping]
    C --> D[Show output checklist]
    D --> E{Selected outputs}
    E --> F[Thermal intake summary]
    E --> G[A4/Letter full form]
    E --> H[Device/job label]
    E --> I[Email/message copy]
    F --> J[Independent print jobs]
    G --> J
    H --> J
    I --> K[Digital delivery job]
    J --> L[Show per-output success/failure]
    L --> M[Do not duplicate intake/job order on retry]
```

# 6. Reprint flow

```mermaid
flowchart TD
    A[User selects Reprint] --> B[Load original finalized document]
    B --> C[Check reprint permission and history]
    C --> D[Require reason]
    D --> E{Approval required?}
    E -- Yes --> F[Create approval request]
    F --> G{Decision}
    G -- Reject --> H[Close with reason]
    G -- More info --> I[Return to requester]
    I --> F
    G -- Approve --> J[Create reprint record]
    E -- No --> J
    J --> K[Render original version with REPRINT marker]
    K --> L[Preview and submit print job]
    L --> M[Audit reprint sequence and result]
```

# 7. Thermal ESC/POS flow

```mermaid
flowchart TD
    A[Structured receipt model] --> B[Resolve exact printer profile]
    B --> C[Check characters, width, QR, cutter, drawer policy]
    C --> D{Text mode safe?}
    D -- Yes --> E[Build validated ESC/POS bytes]
    D -- Partly --> F[Hybrid text/raster]
    D -- No --> G[Full raster output]
    E --> H[Signed agent/vendor job envelope]
    F --> H
    G --> H
    H --> I[Agent validates signature/checksum/expiry]
    I --> J[Send to printer]
    J --> K[Status / cutter warning / completion]
```

# 8. Printer offline or paper-out flow

```mermaid
flowchart TD
    A[Printer error detected] --> B[Normalize error]
    B --> C[Preserve print job and business record]
    C --> D{User can resolve locally?}
    D -- Paper/cover/simple --> E[Show guided correction]
    E --> F[Refresh status]
    F --> G{Ready?}
    G -- Yes --> H[Retry same logical job safely]
    G -- No --> I[Alternative printer/digital/IT]
    D -- No --> I
    I --> J{Create IT ticket?}
    J -- Yes --> K[Pre-fill printer, job, error, branch, diagnostics]
    J -- No --> L[Queue later or choose fallback]
```

# 9. Local agent enrollment flow

```mermaid
flowchart TD
    A[IT creates enrollment] --> B[Select tenant/branch/workstation]
    B --> C[Generate one-time code]
    C --> D[Install verified agent]
    D --> E[Agent presents installation identity/public key]
    E --> F[Verify code and device]
    F --> G{Approved?}
    G -- No --> H[Reject / expire / audit]
    G -- Yes --> I[Issue scoped credential]
    I --> J[Discover printers]
    J --> K[IT approves printer mappings]
    K --> L[Run compatibility test prints]
    L --> M{Pass?}
    M -- No --> N[Limited/blocked profile]
    M -- Yes --> O[Activate agent and printer]
```

# 10. Printer enrollment and certification flow

```mermaid
flowchart TD
    A[Discovered or manually proposed printer] --> B[Resolve identity and connection]
    B --> C[Query/import capabilities]
    C --> D[Assign location and owner]
    D --> E[Select document profiles]
    E --> F[Run synthetic test suite]
    F --> G[Record results and limitations]
    G --> H{Approval decision}
    H -- Approve --> I[PRODUCTION_SUPPORTED]
    H -- Limited --> J[LIMITED_SUPPORT with warnings]
    H -- Reject --> K[BLOCKED]
    I --> L[Publish mappings/defaults]
    J --> L
```

# 11. Inventory batch label flow

```mermaid
flowchart TD
    A[Select inventory items] --> B[Validate identifiers and label profile]
    B --> C[Preview sample and count]
    C --> D{All valid?}
    D -- No --> E[Show exact invalid/missing labels]
    E --> A
    D -- Yes --> F[Create batch parent job and child labels]
    F --> G[Submit to label printer]
    G --> H{Result}
    H -- Complete --> I[Record completed labels]
    H -- Partial --> J[Record printed and remaining IDs]
    J --> K[Retry remaining only]
    H -- Failed --> L[Reroute / A4 label sheet / queue later]
```

# 12. Owner policy publication flow

```mermaid
flowchart TD
    A[Edit print policy draft] --> B[Validate printer/profile/role dependencies]
    B --> C[Impact preview by branch/workstation/document]
    C --> D{Protected change?}
    D -- Yes --> E[Owner/IT/security/finance approval as applicable]
    E --> F{Approved?}
    F -- No --> G[Remain draft]
    F -- Yes --> H[Publish version]
    D -- No --> H
    H --> I[Invalidate routing cache / notify agents]
    I --> J[Monitor failures and rollback if needed]
```

# 13. Agent offline/reconnect flow

```mermaid
flowchart TD
    A[Heartbeat missed] --> B[Agent DEGRADED/OFFLINE]
    B --> C[Stop assigning new jobs]
    C --> D[Show staff fallbacks]
    D --> E[Create/attach IT incident based on severity]
    E --> F[Agent reconnects]
    F --> G[Validate credential/version/time]
    G --> H[Upload deduplicated local statuses]
    H --> I[Reconcile jobs]
    I --> J{Healthy?}
    J -- Yes --> K[Resume assignment]
    J -- No --> L[Quarantine/update/support]
```

# 14. Unauthorized direct URL/API print flow

```mermaid
flowchart TD
    A[Direct print API/document URL attempt] --> B[Authenticate]
    B --> C[Resolve tenant/branch/record/field permission]
    C --> D[Resolve document state and printer policy]
    D --> E{All checks pass?}
    E -- No --> F[Safe denial without protected disclosure]
    F --> G[Audit / rate-limit / incident signal when suspicious]
    E -- Yes --> H[Continue standard print flow]
```

# 15. Print reconciliation flow

```mermaid
flowchart TD
    A[Scheduled/manual reconciliation] --> B[Compare internal, adapter, agent, provider states]
    B --> C{Difference?}
    C -- No --> D[Close run]
    C -- Yes --> E[Create finding]
    E --> F[IT/Finance reviews evidence]
    F --> G{Resolution}
    G -- Update internal status --> H[Apply authorized correction]
    G -- Retry status query --> I[Query adapter]
    G -- User confirmation needed --> J[Request confirmation]
    G -- Security concern --> K[Create incident]
    H --> L[Audit resolution]
    I --> B
    J --> B
    K --> L
```

# 16. Universal failure/recovery flow

```mermaid
flowchart TD
    A[Print action] --> B{Failure class}
    B -->|Permission/state| C[Explain requirement; no retry]
    B -->|Capability/media| D[Choose compatible printer/profile]
    B -->|Temporary device/network| E[Safe retry or queue]
    B -->|Agent/provider outage| F[Fallback adapter/digital delivery]
    B -->|Security/tamper| G[Block and incident]
    B -->|Unknown| H[Preserve job; support reference]
    C --> I[No business-state change]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I
```

## Cross-application handoffs

| Source | Destination | Handoff |
|---|---|---|
| Front Desk | Print Orchestrator | intake/job/release document print request |
| Cashier/Finance | Print Orchestrator | confirmed receipt/invoice/reprint request |
| Technician | Print Orchestrator | technical report/device label request |
| Inventory | Print Orchestrator | part/bin/batch label request |
| Owner | Print Governance | defaults, policy, approval, usage review |
| Print Orchestrator | IT Operations | device/agent/queue incident or alert |
| IT Operations | Staff | resolution, temporary workaround, knowledge article |
| IT Operations | Owner | risk, outage, maintenance, cost, and approval summary |
| Platform Support | Tenant IT | approved time-limited support session and findings |

## Completion rules

- Every handoff includes source, destination, readiness check, result, failure path, and audit.
- No print retry repeats the underlying business command.
- No printer/agent failure silently changes a payment, release, inventory, warranty, or job state.
- Every staff failure path includes at least one safe next action.
