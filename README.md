# ARCHITECTURED — TECHNICIAN REPAIR SAAS

## PROJECT PURPOSE

ARCHITECTURED is the documentation-first source of truth for a multi-tenant Technician Repair SaaS. It defines the applications, users, roles, permissions, workflows, data ownership, contracts, wireframes, wireflows, user-interface behavior, security boundaries, audit requirements, recovery rules, and TECA automation responsibilities before coding begins.

## REQUIRED STARTING ORDER

Every new contributor, ChatGPT session, TECA agent, designer, reviewer, or builder must begin with:

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

Do not start application work from a random module file. `1plan.md` Sections 1A and 1B define worker continuity, handoff, source provenance, folder arrangement, and the correct application entry path.

## CORE RULES

- GitHub is the single source of truth.
- `1plan.md` is the master authority.
- `Applications/README.md` is the application-folder starting point under `1plan.md` authority.
- One canonical file per application module, shared concern, design concern, plan, or TECA registry.
- Search before creating; validate and skip work already complete.
- Do not duplicate or casually rewrite completed architecture.
- Do not create empty appearance-only folders or copied module files merely to imitate another folder depth.
- Do not move, rename, split, or delete consolidated application architecture without an approved decomposition, link synchronization, validation, and owner approval.
- Do not advance to the next phase until the current phase is validated, published, read back, synchronized, diagnosed, and summarized.
- Current repository work is documentation and controlled implementation planning only.
- Application code requires explicit `implementation_authorized=true` approval after all planning gates.
- Shared definitions are referenced instead of copied.
- No secret values may be stored in documentation, logs, prompts, or project memory.

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

### Technician Application — COMPLETE

[Open Technician Application Master Index](Applications/Technician%20Application/INDEX.md)

Arrangement mode: `DECOMPOSED_MODULE_MODE`.

- Volume 1 — Header
- Volume 2 — Sidebar
- Volume 3 — Main Workspace
- 36 detailed modules
- 0 partial modules
- 0 missing modules

Canonical Repair Queue:

`Applications/Technician Application/Volume 2 - Sidebar/Module 2 - Repair Queue/repair_queue.md`

No duplicate Repair Queue document was created.

### Front Desk Application — COMPLETE

- [Open Front Desk Application Entry Index](Applications/Front%20Desk%20Application/INDEX.md)
- [Open Front Desk Application Canonical Architecture](Applications/Front%20Desk%20Application/README.md)

Arrangement mode: `CONSOLIDATED_ARCHITECTURE_MODE`.

Covers customer and device intake, job-order creation, queue, dispatch, quotation, payment, release, warranty, communication, reports, security, and audit.

### Owner Application — CORE BASELINE COMPLETE

- [Open Owner Application Entry Index](Applications/Owner%20Application/INDEX.md)
- [Open Owner Application Core-Baseline Architecture](Applications/Owner%20Application/README.md)

Arrangement mode: `CONSOLIDATED_ARCHITECTURE_MODE`.

Covers organization, branches, users, roles, permissions, workflows, operations, workforce, inventory, finance, quality, analytics, subscription, integrations, security, recovery, and owner approvals for the current core Repair SaaS baseline.

Future HR, payroll, finance, sales, franchise, advanced analytics, automation, and other expansions remain separate Section 8A packages until fully architected and designed.

### Customer Portal — COMPLETE

- [Open Customer Portal Entry Index](Applications/Customer%20Portal/INDEX.md)
- [Open Customer Portal Canonical Architecture](Applications/Customer%20Portal/README.md)

Arrangement mode: `CONSOLIDATED_ARCHITECTURE_MODE`.

Covers identity, devices, service requests, repair tracking, quotation approval, payment, pickup, delivery, warranty, support, messaging, privacy, and account settings.

## APPLICATION FOLDER ARRANGEMENT

Two arrangement modes are approved:

1. **Decomposed module mode** — an `INDEX.md` links to approved volume/domain/module folders and one canonical detail file per concern.
2. **Consolidated architecture mode** — an `INDEX.md` provides navigation while one `README.md` remains the canonical application architecture.

The modes are structurally aligned because every application has a clear entry index and one canonical detail source. Folder depth alone is not evidence of completeness.

Future decomposition must be assigned by `1plan.md`, preserve existing valid content, create exact source-to-target mapping, update every link, prove no content loss, pass duplicate validation, and receive owner approval before the old source is superseded.

## SHARED SAAS PLATFORM — COMPLETE

[Open Shared SaaS Platform Master Index](SaaS%20Platform/README.md)

The shared platform contains 14 canonical documents covering:

- users, roles, permissions, and workflow
- global system contracts
- multi-tenant data and entity ownership
- database relationships
- APIs, events, webhooks, and real-time updates
- authentication, authorization, and sessions
- subscription, entitlement, usage, and tenant lifecycle
- notification and communication
- payment, invoice, refund, and financial control
- files, media, documents, QR codes, and barcodes
- audit, retention, backup, recovery, and incidents
- cross-application handoffs
- non-functional requirements
- development readiness

## DESIGN ARCHITECTURE — COMPLETE

[Open Design Architecture Master Index](Design/README.md)

Canonical design documents:

- [Wireframe Architecture](Design/WIREFRAME_ARCHITECTURE.md)
- [Wireflow Architecture](Design/WIREFLOW_ARCHITECTURE.md)
- [Non-Technical User UI Design System](Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md)

The design system prioritizes plain language, one clear task at a time, guided steps, review and confirmation, retained user input, specific errors, consistent help, responsive layouts, accessibility, and preserved workflow integrity.

High-fidelity screens must trace to the canonical wireframes and wireflows and must not bypass approved status, permission, approval, financial, inventory, security, or audit gates.

## TECA AUTOMATION GOVERNANCE — COMPLETE IN REPOSITORY

[Open TECA Repository Operational Index](TECA/README.md)

Canonical TECA documents:

- [Agent Job Assignments](TECA/AGENT_JOB_ASSIGNMENTS.md)
- [Pipeline Execution Plan](TECA/PIPELINE_EXECUTION_PLAN.md)
- [CrewAI Studio Configuration Update](TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
- [Canonical Implementation Build Plan](TECA/IMPLEMENTATION_BUILD_PLAN.md)

Repository-side TECA governance now defines:

- 9 agents and 11 sequential stages
- required repository and application read order
- exact jobs, goals, outputs, and prohibited actions
- current-worker continuation, no-racing, and safe handoff behavior
- no-jump and skip-complete behavior
- no-duplicate and folder-placement rules
- architecture/design-mode no-code gate
- exact database, backend, frontend, module, test, deployment, and rollback order
- validation, publishing, memory, diagnostic, and summary requirements

The live CrewAI Studio automation is not considered aligned until the Studio Assistant applies the canonical update and returns live read-back evidence.

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

The operating flow was cross-checked against established patterns from Microsoft Dynamics 365 Field Service, ServiceNow Field Service Management, Odoo Repairs, and electronics/service-repair systems.

The UI architecture was informed by WCAG 2.2 and service-design patterns for focused tasks, step-by-step journeys, reusable information, clear validation, review, confirmation, consistent navigation, and consistent help.

These sources are references only. ARCHITECTURED retains its own repair-business terminology and design.

## CURRENT COMPLETION

- Applications master starting point: complete in repository.
- Application entry indexes: 4 of 4 available.
- Technician Application architecture: 100% for the core baseline.
- Front Desk Application architecture: 100% for the core baseline.
- Owner Application architecture: 100% for the current core baseline; future expansions separate.
- Customer Portal architecture: 100% for the core baseline.
- Existing application architecture moved or deleted during folder alignment: no.
- Shared SaaS platform architecture: 100%.
- Wireframe architecture: 100% for the core baseline.
- Wireflow architecture: 100% for the core baseline.
- Non-technical-user UI design system: 100%.
- TECA repository agent assignments, pipeline plan, and build-order playbook: complete as governing documents.
- TECA Studio update handoff: complete in repository.
- Live TECA Studio alignment: pending live Studio execution and read-back.
- Accidental duplicate canonical documents: 0.
- Current repository documentation upload: 100%.
- Application code included: no.

## NEXT CONTROLLED PHASE

Controlled implementation planning must approve:

- MVP and later release boundaries
- technology stack and supported versions
- repository and application folder targets for the selected release
- hosting, environments, regions, and deployment strategy
- physical database schema and ER diagram
- exact API, event, and webhook schemas
- high-fidelity UI screens and interactive prototype
- design tokens and component specifications
- provider selections
- measurable non-functional targets
- threat model, privacy, testing, migration, deployment, rollback, support, and operations plans
- implementation tasks, owners, source paths, canonical save targets, acceptance criteria, and review gates
- live TECA Studio configuration alignment and verification

## MASTER PLAN

Read [`1plan.md`](1plan.md) before adding or changing any architecture, application folder, module, design, TECA, or implementation-planning artifact.

```text
MASTER ARCHITECTURE PLAN: COMPLETE AS GOVERNING PLAN
APPLICATIONS STARTING POINT: COMPLETE
APPLICATION ENTRY INDEXES: 4 OF 4 AVAILABLE
DESIGN ARCHITECTURE: COMPLETE FOR CORE BASELINE
TECA REPOSITORY GOVERNANCE AND BUILD ORDER: COMPLETE AS GOVERNING DOCUMENTS
ACCIDENTAL DUPLICATES: 0
CURRENT REPOSITORY DOCUMENTATION UPLOAD: 100%
READY FOR CONTROLLED IMPLEMENTATION PLANNING: YES
LIVE TECA STUDIO ALIGNMENT: PENDING READ-BACK
UNCONTROLLED CODING AUTHORIZED: NO
```

**APPLICATION WORK STARTS AT `1plan.md`, CONTINUES THROUGH `Applications/README.md`, AND THEN ENTERS THE SELECTED APPLICATION THROUGH ITS `INDEX.md`.**