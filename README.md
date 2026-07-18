# ARCHITECTURED — TECHNICIAN REPAIR SAAS

## PROJECT PURPOSE

ARCHITECTURED is the documentation-first source of truth for a multi-tenant Technician Repair SaaS. It defines applications, users, roles, permissions, workflows, data ownership, shared contracts, wireframes, wireflows, UI behavior, security, audit, recovery, implementation gates, release-specific planning, and TECA responsibilities before coding begins.

## REQUIRED STARTING ORDER

```text
1plan.md
→ README.md
→ revise.md and applicable additive revision record
→ index.md
→ Applications/README.md when application work is requested
→ selected application INDEX.md
→ selected canonical application README.md or module file
→ relevant shared contracts and design artifacts
→ TECA/IMPLEMENTATION_BUILD_PLAN.md when implementation is requested
→ Implementation Planning/README.md
→ selected release INDEX.md and exact task contract
→ current repository and active-work evidence
```

Do not begin application or implementation work from a random module, stale prompt, chat copy, memory entry, old branch, or unverified draft.

## CORE RULES

- GitHub is the single source of truth.
- `1plan.md` is the master authority.
- One canonical source per module, shared concern, design concern, plan, TECA rule, release, and durable memory.
- Search and read before creating.
- Validate and skip completed work.
- Do not duplicate, aggregate-copy, or casually rewrite canonical architecture.
- Do not create empty appearance-only folders.
- Structural similarity alone is not a duplicate when separate modules have different domain responsibility and content.
- Do not advance to a new phase until current work is validated, published, read back, synchronized, diagnosed, and summarized.
- Application code requires explicit, scoped `implementation_authorized=true` approval after applicable release-planning gates.
- Completion of one Codex task does not authorize the next task.
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
    ├── IT Operations Application
    ├── Branches, Departments, Workstations, and Warehouses
    ├── Users, Roles, Permissions, and Approvals
    ├── Subscription and Feature Entitlements
    ├── Printing and Peripheral Operations
    ├── Cross-Department Operating Fabric
    ├── Shared Workflows, Contracts, and Integrations
    ├── Wireframes, Wireflows, and UI Design
    ├── Release-Specific Implementation Planning
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
Receipt / Document Printing or Digital Delivery
↓
Device Release / Delivery
↓
Warranty Activation
↓
Feedback, Follow-Up, and Closure
```

IT incidents, printer failures, and integration blockers connect to the same end-to-end process without allowing IT to rewrite another department's authoritative business record.

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

Future HR, payroll, expanded finance, sales, franchise, advanced analytics, automation, and other expansions require complete Section 8A packages in `1plan.md` and a later approved release.

### Customer Portal — COMPLETE

- [Entry Index](Applications/Customer%20Portal/INDEX.md)
- [Canonical Architecture](Applications/Customer%20Portal/README.md)

Arrangement: `CONSOLIDATED_ARCHITECTURE_MODE`.

### IT Operations Application — COMPLETE AS ARCHITECTURE SPECIFICATION

- [Entry Index](Applications/IT%20Operations%20Application/INDEX.md)
- [Completion Record](Applications/IT%20Operations%20Application/COMPLETION_RECORD.md)

Arrangement: `DECOMPOSED_APPLICATION_ARCHITECTURE_MODE`.

## APPLICATION FOLDER ARRANGEMENT

Approved modes include:

1. **Decomposed module mode** — an index links to approved module folders and one canonical detail file per concern.
2. **Consolidated architecture mode** — an index provides navigation while one README remains the canonical application architecture.
3. **Decomposed application/expansion package mode** — indexed volumes contain separate scope, functional, data/integration, design, and quality/delivery authorities.

Folder depth alone is not completeness evidence. A future decomposition must preserve valid content, synchronize links, prove no content loss, pass duplicate validation, and receive owner approval.

## SHARED SAAS PLATFORM — COMPLETE

[Open Shared SaaS Platform Master Index](SaaS%20Platform/README.md)

Fourteen canonical core documents cover:

- users, roles, permissions, and workflow;
- global system contracts;
- multi-tenant data and ownership;
- database relationships;
- APIs, events, webhooks, and real-time updates;
- authentication, authorization, and sessions;
- subscription, entitlement, usage, and tenant lifecycle;
- notification and communication;
- payment, invoice, refund, and financial controls;
- files, media, documents, QR, and barcode;
- audit, retention, backup, recovery, and incidents;
- cross-application handoffs;
- non-functional requirements;
- development readiness.

Decomposed detail packages specialize the core contracts:

- [Free, Pro, and Premium Plans and Billing](SaaS%20Platform/Plans%20and%20Billing/INDEX.md)
- [Printing and Peripheral Operations](SaaS%20Platform/Printing%20and%20Peripheral%20Operations/INDEX.md)
- [Cross-Department Operating Fabric](SaaS%20Platform/Cross-Department%20Operating%20Fabric/INDEX.md)

These files are structurally coordinated but have separate responsibilities and are not duplicates.

## DESIGN ARCHITECTURE — COMPLETE AS SPECIFICATION

[Open Design Architecture Master Index](Design/README.md)

- [Wireframe Architecture](Design/WIREFRAME_ARCHITECTURE.md)
- [Wireflow Architecture](Design/WIREFLOW_ARCHITECTURE.md)
- [Non-Technical User UI Design System](Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)
- [Release 1 High-Fidelity UI Execution Plan](Implementation%20Planning/Release%201%20MVP/04.%20High-Fidelity%20Design/HIGH_FIDELITY_UI_EXECUTION_PLAN.md)
- [Release 1 Screen Delivery Matrix](Implementation%20Planning/Release%201%20MVP/04.%20High-Fidelity%20Design/SCREEN_DELIVERY_MATRIX.md)

Wireflow defines user navigation and decisions. The shared cross-application handoff matrix and Cross-Department Operating Fabric define service ownership and operational handoffs. They are related but distinct canonical concerns.

Release 1 currently has 70 high-fidelity screen definitions, but the visual screens and interactive prototype have not yet been rendered or approved.

## IMPLEMENTATION PLANNING — RELEASE 1 COMPLETE AS PLAN

- [Implementation Planning Master Index](Implementation%20Planning/README.md)
- [Release 1 MVP Index](Implementation%20Planning/Release%201%20MVP/INDEX.md)
- [Release Manifest](Implementation%20Planning/Release%201%20MVP/01.%20Release%20Boundary/RELEASE_MANIFEST.md)
- [Technology Stack and Version Lock](Implementation%20Planning/Release%201%20MVP/02.%20Technology%20and%20Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md)
- [Printer Support and Certification Matrix](Implementation%20Planning/Release%201%20MVP/03.%20Printer%20Certification/PRINTER_SUPPORT_AND_CERTIFICATION_MATRIX.md)
- [Codex Task Manifest](Implementation%20Planning/Release%201%20MVP/05.%20Codex%20Execution/CODEX_TASK_MANIFEST.md)

Release 1 (`ROS-R1-MVP-2026-01`) is a controlled one-company/one-branch pilot. It locks a modular monolith using Next.js/React/TypeScript, Supabase/PostgreSQL, and a separate Tauri/Rust local print agent. It defines 24 requirement families, 70 screen definitions, 36 Codex tasks, and 24 priority risks.

Application coding remains disabled until the Owner explicitly sets `implementation_authorized=true` for an exact task such as `CX-R1-001`.

## TECA GOVERNANCE — COMPLETE IN REPOSITORY

[Open TECA Repository Operational Index](TECA/README.md)

- [Agent Job Assignments](TECA/AGENT_JOB_ASSIGNMENTS.md)
- [Pipeline Execution Plan](TECA/PIPELINE_EXECUTION_PLAN.md)
- [CrewAI Studio Configuration Update](TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
- [Canonical Implementation Build Plan](TECA/IMPLEMENTATION_BUILD_PLAN.md)

The Pipeline Execution Plan governs TECA stages and phase control. The Implementation Build Plan governs the detailed global build process. The selected release package governs exact release boundaries and task order. They are not duplicate plans.

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
- Release 1 package conflicts with global architecture/build authorities: 0 after responsibility review.

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
- Tenant IT Manager / IT Administrator
- Service Desk / Endpoint / Printer Administrator
- Customer
- Business Account Representative
- External Contractor / Vendor
- Auditor / Read-Only Reviewer

## REFERENCE BASELINES

The operating flow was compared with Microsoft Dynamics 365 Field Service, ServiceNow Field Service Management, Odoo Repairs, and electronics/service-repair workflow patterns.

The UI architecture uses WCAG 2.2 and service-design patterns for focused tasks, guided journeys, reused information, validation, review, confirmation, consistent navigation, and help.

Release 1 technology and printer decisions use official framework/platform/standards documentation and are recorded in the research registry. External references are not project authority until adapted and published in the repository.

## CURRENT COMPLETION

- Master architecture plan: 100% defined as a governing blueprint.
- Technician logical surfaces: 36.
- Technician canonical detailed architecture files: 34.
- Front Desk core architecture: complete.
- Owner core architecture: complete; expansions separate.
- Customer Portal core architecture: complete.
- IT Operations architecture: complete as specification.
- Shared SaaS contracts: 14 of 14 complete.
- Plans/Billing, Printing, and Cross-Department detail packages: complete as specifications.
- Core wireframes/wireflows/UI design system: complete as specifications.
- Release 1 implementation planning: complete as plan.
- Release 1 high-fidelity screen definitions: 70.
- Release 1 Codex tasks: 36.
- Release 1 priority risks: 24.
- Duplicate audit: complete.
- Removed or superseded duplicate files: 6.
- Active accidental duplicate canonical documents: 0.
- TECA repository governance and build plans: complete as governing documents.
- Live TECA Studio alignment: pending live read-back.
- High-fidelity rendered design/prototype, application/local-agent implementation, testing, hardware certification, pilot deployment, and public production release: separate evidence-based statuses.
- Global coding authorization: NO.

**THE NEXT CODING ENTRY IS NOT A CHAT PROMPT. IT IS AN OWNER-AUTHORIZED EXACT TASK UNDER `Implementation Planning/Release 1 MVP/05. Codex Execution/`.**