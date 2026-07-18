# ARCHITECTURED — TECHNICIAN REPAIR SAAS

## PROJECT PURPOSE

ARCHITECTURED is the documentation-first source of truth for a multi-tenant Technician Repair SaaS. It defines applications, users, roles, permissions, workflows, data ownership, shared contracts, wireframes, wireflows, UI behavior, security, audit, recovery, implementation gates, and TECA responsibilities before coding begins.

## REQUIRED STARTING ORDER

```text
1plan.md
→ README.md
→ revise.md
→ index.md
→ Applications/README.md when application work is requested
→ selected application INDEX.md
→ selected canonical application README.md or module file
→ relevant shared contracts, design artifacts, and TECA plans
→ current repository and active-work evidence
```

Do not begin application work from a random module, stale prompt, chat copy, memory entry, old branch, or unverified draft.

## CORE RULES

- GitHub is the single source of truth.
- `1plan.md` is the master authority.
- One canonical source per module, shared concern, design concern, plan, TECA rule, and durable memory.
- Search and read before creating.
- Validate and skip completed work.
- Do not duplicate, aggregate-copy, or casually rewrite canonical architecture.
- Do not create empty appearance-only folders.
- Structural similarity alone is not a duplicate when separate modules have different domain responsibility and content.
- Do not advance to a new phase until current work is validated, published, read back, synchronized, diagnosed, and summarized.
- Application code requires explicit, scoped `implementation_authorized=true` approval after applicable planning gates.
- Shared definitions are referenced rather than copied.
- No secret values may be stored in documentation, logs, prompts, source-control memory, or reports.

## PRODUCT MODEL

```text
SAAS PLATFORM
└── Tenant Repair Business
    ├── Owner Application
    ├── Front Desk Application
    ├── Technician Application
    ├── Customer Portal
    ├── Branches, Departments, Workstations, and Warehouses
    ├── Users, Roles, Permissions, and Approvals
    ├── Subscription and Feature Entitlements
    ├── Shared Workflows, Contracts, and Integrations
    ├── Wireframes, Wireflows, and UI Design
    └── Security, Audit, Backup, Recovery, and Reporting
```

## END-TO-END SERVICE FLOW

```text
Customer Request / Walk-In / Call / Portal
↓
Customer and Device Intake
↓
Job Order Creation
↓
Queue Qualification and Priority
↓
Schedule and Dispatch
↓
Technician Acceptance
↓
Inspection and Diagnosis
↓
Quotation and Customer Approval
↓
Parts Reservation / Purchasing
↓
Repair Execution
↓
Functional Testing
↓
Quality Review and Approval
↓
Invoice and Payment Completion
↓
Device Release / Delivery
↓
Warranty Activation
↓
Feedback, Follow-Up, and Closure
```

## APPLICATIONS

[Open Applications Master Starting Point](Applications/README.md)

### Technician Application — CORE BASELINE COMPLETE

[Open Technician Application Master Index](Applications/Technician%20Application/INDEX.md)

Arrangement: `DECOMPOSED_MODULE_MODE`.

- Logical user-facing surfaces: 36.
- Canonical detailed architecture files: 34.
- Header Profile: quick-access reference to canonical Sidebar Module 12 Profile.
- Header Notification: quick-access reference to canonical Sidebar Module 11 Notification.
- Duplicate full Profile or Notification architecture files: 0.
- Volume 1 Header: complete with 3 dedicated files and 2 quick-access references.
- Volume 2 Sidebar: complete.
- Volume 3 Main Workspace: complete.
- Partial canonical Technician files: 0.
- Missing planned core Technician files: 0.

Canonical Repair Queue:

`Applications/Technician Application/Volume 2 - Sidebar/Module 2 - Repair Queue/repair_queue.md`

### Front Desk Application — COMPLETE

- [Entry Index](Applications/Front%20Desk%20Application/INDEX.md)
- [Canonical Architecture](Applications/Front%20Desk%20Application/README.md)

Arrangement: `CONSOLIDATED_ARCHITECTURE_MODE`.

### Owner Application — CORE BASELINE COMPLETE

- [Entry Index](Applications/Owner%20Application/INDEX.md)
- [Canonical Architecture](Applications/Owner%20Application/README.md)

Arrangement: `CONSOLIDATED_ARCHITECTURE_MODE`.

Future HR, payroll, expanded finance, sales, franchise, advanced analytics, automation, and other expansions require complete Section 8A packages in `1plan.md`.

### Customer Portal — COMPLETE

- [Entry Index](Applications/Customer%20Portal/INDEX.md)
- [Canonical Architecture](Applications/Customer%20Portal/README.md)

Arrangement: `CONSOLIDATED_ARCHITECTURE_MODE`.

## APPLICATION FOLDER ARRANGEMENT

Two modes are approved:

1. **Decomposed module mode** — an index links to approved module folders and one canonical detail file per concern.
2. **Consolidated architecture mode** — an index provides navigation while one README remains the canonical application architecture.

Folder depth alone is not completeness evidence. A future decomposition must preserve valid content, synchronize links, prove no content loss, pass duplicate validation, and receive owner approval.

## SHARED SAAS PLATFORM — COMPLETE

[Open Shared SaaS Platform Master Index](SaaS%20Platform/README.md)

Fourteen canonical documents cover:

- users, roles, permissions, and workflow
- global system contracts
- multi-tenant data and ownership
- database relationships
- APIs, events, webhooks, and real-time updates
- authentication, authorization, and sessions
- subscription, entitlement, usage, and tenant lifecycle
- notification and communication
- payment, invoice, refund, and financial controls
- files, media, documents, QR, and barcode
- audit, retention, backup, recovery, and incidents
- cross-application handoffs
- non-functional requirements
- development readiness

These files are structurally coordinated but have separate responsibilities and are not duplicates.

## DESIGN ARCHITECTURE — COMPLETE

[Open Design Architecture Master Index](Design/README.md)

- [Wireframe Architecture](Design/WIREFRAME_ARCHITECTURE.md)
- [Wireflow Architecture](Design/WIREFLOW_ARCHITECTURE.md)
- [Non-Technical User UI Design System](Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)

Wireflow defines user navigation and decisions. The shared cross-application handoff matrix defines service ownership and operational handoffs. They are related but distinct canonical concerns.

## TECA GOVERNANCE — COMPLETE IN REPOSITORY

[Open TECA Repository Operational Index](TECA/README.md)

- [Agent Job Assignments](TECA/AGENT_JOB_ASSIGNMENTS.md)
- [Pipeline Execution Plan](TECA/PIPELINE_EXECUTION_PLAN.md)
- [CrewAI Studio Configuration Update](TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
- [Canonical Implementation Build Plan](TECA/IMPLEMENTATION_BUILD_PLAN.md)

The Pipeline Execution Plan governs TECA stages and phase control. The Implementation Build Plan governs the detailed dependency-ordered build process. They are not duplicate plans.

Live CrewAI Studio alignment remains pending until actual Studio configuration read-back is available.

## DUPLICATE AUDIT — COMPLETE

The repository-wide audit applied exact-content, near-duplicate, subset, aggregate-copy, and memory-deduplication rules from `1plan.md` Section 1C.

Removed or superseded:

1. Duplicate Header Notification architecture.
2. Overlapping Header Profile architecture.
3. Aggregate root `PLAN.md` that copied modular architecture.
4. Superseded TECA validation failure memory.
5. Duplicate TECA run-summary memory.
6. Duplicate TECA architecture-freeze run-summary memory.

Canonical replacements and reasons are recorded in `1plan.md`, `duplicate.md`, and `revise.md`. Git history preserves deleted content.

Current result:

- Active accidental duplicate canonical documents: 0.
- Wrongly placed active canonical documents: 0.
- Durable TECA memories after deduplication: 2.

## REQUIRED USERS

- Platform Super Administrator
- Platform Support Administrator
- Platform Billing Administrator
- Platform Security Auditor
- Tenant Owner / Business Owner
- Tenant Administrator
- Branch Manager / Service Manager
- Front Desk / Customer Service Agent
- Dispatcher / Queue Coordinator
- Technician / Frontline Resource
- Quality Control Supervisor
- Inventory and Purchasing Officer
- Finance / Cashier / Accountant
- Customer
- Business Account Representative
- External Contractor / Vendor
- Auditor / Read-Only Reviewer

## REFERENCE BASELINES

The operating flow was compared with Microsoft Dynamics 365 Field Service, ServiceNow Field Service Management, Odoo Repairs, and electronics/service-repair workflow patterns.

The UI architecture uses WCAG 2.2 and service-design patterns for focused tasks, guided journeys, reused information, validation, review, confirmation, consistent navigation, and help.

These are external references, not project authority. Approved adaptations are stored in canonical repository files.

## CURRENT COMPLETION

- Master architecture plan: 100% defined as a governing blueprint.
- Technician logical surfaces: 36.
- Technician canonical detailed architecture files: 34.
- Front Desk core architecture: complete.
- Owner core architecture: complete; expansions separate.
- Customer Portal core architecture: complete.
- Shared SaaS contracts: 14 of 14 complete.
- Core wireframes: complete.
- Core wireflows: complete.
- Non-technical UI design system: complete.
- Duplicate audit: complete.
- Removed or superseded duplicate files: 6.
- Active accidental duplicate canonical documents: 0.
- TECA repository governance and build plans: complete as governing documents.
- Live TECA Studio alignment: pending live read-back.
- Application implementation, testing, deployment, and release: separate evidence-based statuses.
- Application code included by this documentation audit: no.

## NEXT CONTROLLED PHASE

Controlled implementation planning must approve:

- MVP and later release boundaries
- technology stack and supported versions
- physical schema and ER diagram
- API, event, webhook, real-time, and integration schemas
- high-fidelity UI and interactive prototype
- design tokens and components
- provider selections
- measurable non-functional targets
- security, privacy, test, migration, deployment, rollback, support, and operations plans
- implementation tasks, owners, canonical paths, dependencies, acceptance criteria, and review gates
- live TECA Studio alignment before autonomous TECA implementation

## MASTER PLAN

Read [`1plan.md`](1plan.md) before changing architecture, applications, design, TECA, memory, implementation planning, or repository structure.

```text
MASTER ARCHITECTURE PLAN: COMPLETE AS GOVERNING PLAN
CORE APPLICATION ARCHITECTURE: COMPLETE
TECHNICIAN LOGICAL SURFACES: 36
TECHNICIAN CANONICAL DETAILED FILES: 34
SHARED CONTRACTS: 14 OF 14 COMPLETE
DESIGN ARCHITECTURE: COMPLETE
DUPLICATE AUDIT: COMPLETE
ACTIVE ACCIDENTAL DUPLICATES: 0
TECA REPOSITORY GOVERNANCE: COMPLETE AS DOCUMENTATION
LIVE TECA STUDIO ALIGNMENT: PENDING READ-BACK
READY FOR CONTROLLED IMPLEMENTATION PLANNING: YES
UNCONTROLLED CODING AUTHORIZED: NO
```
