# 1PLAN — TECHNICIAN REPAIR SAAS MASTER ARCHITECTURE PLAN

This document is the master workflow, progress tracker, architecture authority, design authority, repository-governance authority, and TECA execution authority for the ARCHITECTURED Technician Repair SaaS.

## MASTER STATUS INTERPRETATION — 100% ARCHITECTURE PLAN

- This `1plan.md` is the 100% master architecture plan and governing blueprint for the approved core Repair SaaS scope, expansion requirements, sequencing, quality gates, repository rules, and completion rules.
- A 100% architecture-plan status does not mean the working application, testing, deployment, production readiness, or every future expansion is complete.
- Architecture, design, implementation, testing, and deployment statuses must always be reported separately.
- Implementation may execute only approved architecture, wireframe, wireflow, data, permission, security, integration, validation, and release requirements.
- No implementation worker may silently change, skip, reduce, or contradict this plan.

# 1. GOVERNANCE RULES

- GitHub is the single source of truth.
- `1plan.md` is the master authority for scope, priority, phase order, worker coordination, source ownership, canonical paths, completion rules, duplicate control, and repository entry assignments.
- Architecture and controlled implementation planning come before coding.
- Application source code is not authorized unless `implementation_authorized=true` is explicitly approved for an exact release or implementation slice.
- Every module, shared concern, design concern, plan, registry, and durable memory has one canonical repository source.
- Duplicate architecture, design, workflow, plan, TECA, memory, or implementation definitions are prohibited.
- Search and read the current repository before creating or changing a file.
- If the requested item is already complete, validate it and return `SKIPPED_ALREADY_COMPLETE`; do not recreate it.
- Preserve approved naming, numbering, folders, links, workflows, permissions, lifecycle, data ownership, history, and canonical paths.
- Do not start the next phase until the current phase is complete, validated, published, read back, synchronized, stored in memory when appropriate, diagnosed, and summarized.
- Synchronize `1plan.md`, `README.md`, `index.md`, relevant folder indexes, `MASTER_AUDIT.md`, `FINAL_ARCHITECTURE_VERIFICATION.md`, `duplicate.md`, and `revise.md` after approved repository-wide changes.
- No performance, availability, recovery, security, accessibility, compliance, or scale claim is valid without approved targets and test evidence.
- No token, API key, password, credential, private key, secret value, or environment-variable value may be stored in architecture, design, logs, prompts, source-control memory, or public reports.

## 1A. CANONICAL CO-WORKER CONTINUITY, HANDOFF, AND SOURCE-OF-TRUTH COMMAND

This section applies to ChatGPT, TECA, coding agents, designers, reviewers, and every assigned co-worker.

### Required worker-state classification

Before selecting or changing work, inspect current repository evidence and classify the target as one of:

- `UNCLAIMED_INCOMPLETE`
- `ACTIVE_BY_COWORKER`
- `PARTIAL_AVAILABLE`
- `COMPLETE`
- `CONFLICTED`
- `STALE_REVIEW_REQUIRED`

### Continue-current-work rule

1. A worker already performing valid current work continues that work.
2. A new rule does not cancel valid active work unless the owner explicitly says `STOP`, `CANCEL`, `REPLACE`, or `REVISE`, or assigns an exact different task.
3. Other workers must not race, shadow, re-create, reformat, rename, move, overwrite, or independently publish the same active work.
4. When a target is `ACTIVE_BY_COWORKER`, another worker selects the next highest-priority `UNCLAIMED_INCOMPLETE` item in the same approved phase.
5. Tightly coupled files must not be split across workers when simultaneous changes could create schema, contract, migration, workflow, UI, or merge conflicts.

### Required active-worker notice

```text
NEW CANONICAL GOVERNANCE RULE — CONTINUE CURRENT WORK

Repository: ariessocia04-rgb/ARCHITECTURED-
Master source of truth: 1plan.md
Current active target: <exact target>
Current worker evidence: <commit, branch, pull request, revise entry, check, or handoff>
Canonical requirement source: <path and section or requirement ID>
Canonical save target: <path, branch, or pull request>

Continue and finish the current assigned task. Do not abandon, restart, duplicate, or switch tasks unless the owner explicitly reassigns the work.
```

The notice must be factual and must not invent an active owner, commit, branch, pull request, status, or completion claim.

### Save-before-transfer rule

Before moving to another assignment, a worker must:

1. Stop at a safe and internally consistent checkpoint.
2. Save valid current work to the canonical file, approved branch, pull request, or owner-approved artifact location.
3. Re-read the target immediately before saving.
4. Record status as `IN_PROGRESS_HANDOFF`, `PARTIAL_AVAILABLE`, `BLOCKED`, or `COMPLETE` truthfully.
5. Record source requirement, completed items, missing items, changed files, validation, blockers, dependencies, latest commit or SHA, and exact next action.
6. Publish and read back when repository publishing is authorized.
7. Give the next worker an exact handoff path.
8. Start the new task only after the existing work is safely saved and reported.

### Source-of-truth provenance rule

Every requirement, decision, design, workflow, implementation artifact, correction, and status must identify:

- `source_path`
- `source_section_or_requirement_id`
- `canonical_target_path`
- `active_owner_or_handoff_state`
- `dependency_paths`
- `last_verified_commit_or_sha`
- `validation_evidence`

External research can support a decision, but it becomes project truth only after validation and publication in the correct canonical repository file.

Chat responses, prompts, old branches, local drafts, unverified memory, and generated copies are not canonical project truth.

### Unsupported-conflict removal rule

- Content with no approved source, no traceable requirement, and a conflict with canonical truth is `UNSUPPORTED_CONFLICT`.
- Unsupported, stale, copied, or conflicting content must be removed or formally superseded after validation.
- Git history and `revise.md` preserve removal evidence.
- Do not delete current active co-worker work before resolving ownership and saving a checkpoint.
- Valid derived detail is not invalid merely because it is not repeated word-for-word in this plan; it remains valid when it traces to an approved requirement and resides in the assigned canonical file.

### Gap-fill-only rule

When valid partial work exists and no worker is actively changing it:

1. Compare it with the canonical source and acceptance criteria.
2. List exact missing items.
3. Preserve correct content and history.
4. Change only the smallest necessary files and sections.
5. Validate preserved and new work together.
6. Report reused content, filled gaps, deliberate non-changes, and remaining work.

## 1B. APPLICATION FOLDER ARRANGEMENT AND JOINER STARTING COMMAND

### Required application read order

```text
1plan.md
→ Applications/README.md
→ selected application INDEX.md
→ selected canonical README.md or module file
→ relevant SaaS Platform contracts
→ relevant Design artifacts
→ relevant TECA execution or implementation plan
→ current branches, pull requests, commits, checks, and active-work evidence
```

No application worker may begin from a random module, stale prompt, chat copy, memory entry, old branch, or unverified local draft.

### Canonical application entries

- Applications starting point: `Applications/README.md`
- Technician entry: `Applications/Technician Application/INDEX.md`
- Front Desk entry: `Applications/Front Desk Application/INDEX.md`
- Front Desk canonical architecture: `Applications/Front Desk Application/README.md`
- Owner entry: `Applications/Owner Application/INDEX.md`
- Owner core-baseline architecture: `Applications/Owner Application/README.md`
- Customer Portal entry: `Applications/Customer Portal/INDEX.md`
- Customer Portal canonical architecture: `Applications/Customer Portal/README.md`

### Approved arrangement modes

#### Decomposed module mode

Used when approved module-by-module files already exist.

```text
Application/
├── INDEX.md
├── Volume or Domain Group/
│   └── Module or Feature Folder/
│       └── canonical_file.md
└── other approved groups
```

The Technician Application uses this mode.

#### Consolidated architecture mode

Used when one complete application architecture currently resides in a canonical `README.md`.

```text
Application/
├── INDEX.md
└── README.md
```

The index supplies navigation and status; it must not copy the full architecture. Front Desk, Owner core baseline, and Customer Portal currently use this mode.

### Folder and decomposition rules

- Do not move, rename, split, or delete valid architecture merely to make folder depths look identical.
- Empty folders and appearance-only placeholders are prohibited.
- A future decomposition requires an approved task with source path, target path, module grouping, numbering, ownership, dependencies, acceptance criteria, traceability, and owner approval.
- Until a decomposition passes content-loss, link, placement, and duplicate validation, the existing consolidated `README.md` remains canonical.

## 1C. EVIDENCE-BASED DUPLICATE, SIMILARITY, AND DELETION RULE

This section is mandatory for every repository audit and every create/update decision.

### Classification

1. `EXACT_DUPLICATE`
   - Same blob SHA, byte-identical content, or normalized content equivalent.
   - Keep the file in the correct canonical location and delete the competing copy.

2. `NEAR_DUPLICATE_SAME_AUTHORITY`
   - Different formatting or wording but substantially the same responsibility, fields, workflow, and architecture.
   - Keep the richer, correctly located, current canonical source; merge any unique valid detail first, then delete or supersede the competing file.

3. `SUBSET_DUPLICATE`
   - One file is primarily a reduced copy of another file governing the same system.
   - Replace the subset with a link or quick-access reference to the canonical source.

4. `AGGREGATE_COPY`
   - A file concatenates or republishes canonical module contents.
   - It must not remain an active competing source. Generate exports temporarily when required instead of storing them as canonical architecture.

5. `INTENTIONAL_SUMMARY_OR_INDEX`
   - README, index, audit, verification, revision, matrix, or navigation document that summarizes and links without copying full definitions.
   - Keep when it has a distinct governance or navigation responsibility.

6. `SHARED_TEMPLATE_NOT_DUPLICATE`
   - Files use the same structural pattern but contain different domain responsibilities, rules, states, entities, or acceptance criteria.
   - Do not delete merely because headings such as Dashboard, Workflow, Search, Analytics, Security, and Audit are consistently reused.

### Decision threshold

Deletion requires both:

- high content or responsibility overlap; and
- the same canonical authority or purpose.

Structural similarity alone is not sufficient when the business domain is different.

### Required audit evidence

For each deleted or superseded item record:

- removed path
- classification
- canonical replacement
- content/SHA evidence
- unique-content preservation result
- affected links
- commit SHA

### Memory duplicate control

- Do not keep multiple memories describing the same root cause or run result.
- Prefer one durable Lesson and one comprehensive Failure Pattern when their categories serve different retrieval purposes.
- Raw run summaries and low-value transient memories must not duplicate durable knowledge.
- Update `.teca/memory/index.json` immediately after memory removal or merge.

### Completed duplicate audit — 2026-07-18

Removed or superseded:

1. `Applications/Technician Application/Volume 1 - Header/Notification/notification.md`
   - Classification: `EXACT_DUPLICATE`
   - Evidence: same blob SHA as Sidebar Module 11 Notification.
   - Canonical replacement: `Applications/Technician Application/Volume 2 - Sidebar/Module 11 - Notification/notification.md`

2. `Applications/Technician Application/Volume 1 - Header/Profile/profile.md`
   - Classification: `NEAR_DUPLICATE_SAME_AUTHORITY` / `SUBSET_DUPLICATE`
   - Canonical replacement: `Applications/Technician Application/Volume 2 - Sidebar/Module 12 - Profile/profile.md`
   - Header Profile remains a logical quick-access surface through the application index.

3. `PLAN.md`
   - Classification: `AGGREGATE_COPY`
   - Evidence: it compiled the Technician module architecture into one large duplicate document.
   - Canonical replacements: `1plan.md`, application indexes, canonical module files, and `Design/` documents.

4. `.teca/memory/FailurePatterns/mem_1784179908210.json`
   - Classification: superseded duplicate failure pattern.
   - Canonical replacement: `.teca/memory/FailurePatterns/mem_1784187086628.json`

5. `.teca/memory/ProjectKnowledge/mem_1784180613040.json`
   - Classification: duplicate transient run summary.
   - Canonical replacements: retained Lesson and comprehensive Failure Pattern.

6. `.teca/memory/ProjectKnowledge/mem_1784236443508.json`
   - Classification: duplicate transient run summary.
   - Canonical replacements: retained Lesson and comprehensive Failure Pattern.

Retained intentionally:

- Application indexes and canonical READMEs because navigation and architecture have different responsibilities.
- Shared SaaS contracts because each governs a separate cross-application concern.
- Technician modules using a common enterprise structure because their domain content and responsibilities differ.
- `Design/WIREFLOW_ARCHITECTURE.md` and `SaaS Platform/CROSS_APPLICATION_WORKFLOW_AND_HANDOFF_MATRIX.md` because user navigation and service ownership/handoff contracts are distinct.
- `TECA/PIPELINE_EXECUTION_PLAN.md` and `TECA/IMPLEMENTATION_BUILD_PLAN.md` because pipeline governance and detailed implementation build order are distinct.

# 2. PRODUCT TARGET

A multi-tenant Technician Repair SaaS for repair businesses with:

- platform and tenant administration
- subscriptions, plans, entitlements, and usage limits
- organizations, branches, departments, workstations, and warehouses
- users, roles, permissions, approvals, and audit
- customers, business accounts, representatives, devices, and service requests
- intake, job orders, queue, dispatch, inspection, diagnosis, quotation, repair, parts, testing, quality, payment, release, warranty, support, and reporting
- files, media, documents, signatures, QR codes, barcodes, integrations, webhooks, real-time updates, offline work, backup, recovery, and incidents
- role-specific Technician, Front Desk, Owner, Customer, and Platform experiences
- friendly, accessible, responsive interfaces for non-technical users

# 3. RESEARCH-BACKED OPERATING FLOW

The operating flow was cross-checked against established field-service and repair-management patterns, including Microsoft Dynamics 365 Field Service, ServiceNow Field Service Management, Odoo Repairs, and electronics/service-repair workflow patterns.

These are references only. ARCHITECTURED retains its own terminology, rules, applications, and design.

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

# 4. MULTI-TENANT SAAS STRUCTURE

```text
SAAS PLATFORM
└── Tenant Repair Business
    ├── Subscription and Feature Entitlements
    ├── Tenant Owner and Administrators
    ├── Branches
    │   ├── Departments
    │   ├── Workstations
    │   ├── Warehouses
    │   └── Users
    ├── Roles, Permissions, and Approvals
    ├── Customers and Business Accounts
    ├── Service Operations
    ├── Inventory and Finance
    ├── Applications and Integrations
    ├── Design and User Experience
    └── Security, Audit, Backup, Recovery, and Reporting
```

# 5. REQUIRED USERS AND PERSONAS

Canonical source: `SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`

1. Platform Super Administrator
2. Platform Support Administrator
3. Platform Billing Administrator
4. Platform Security Auditor
5. Tenant Owner / Business Owner
6. Tenant Administrator
7. Branch Manager / Service Manager
8. Front Desk / Customer Service Agent
9. Dispatcher / Queue Coordinator
10. Technician / Frontline Resource
11. Quality Control Supervisor
12. Inventory and Purchasing Officer
13. Finance / Cashier / Accountant
14. Customer
15. Business Account Representative
16. External Contractor / Vendor
17. Auditor / Read-Only Reviewer

Usability validation must also include non-technical users, low-digital-confidence users, keyboard-only users, screen-reader users, low-vision users, users with limited dexterity or tremor, and users on slow or unstable internet.

# 6. APPLICATION ARCHITECTURE STATUS

Master application starting point: `Applications/README.md`

## Technician Application

Canonical entry: `Applications/Technician Application/INDEX.md`

- Arrangement: DECOMPOSED MODULE MODE.
- Logical user-facing surfaces: 36.
- Canonical detailed architecture files: 34.
- Header Profile quick access references canonical Sidebar Module 12 Profile.
- Header Notification quick access references canonical Sidebar Module 11 Notification.
- Duplicate detailed Profile/Notification definitions: 0.
- Volume 1 Header: COMPLETE with 3 dedicated files and 2 canonical quick-access references.
- Volume 2 Sidebar: COMPLETE.
- Volume 3 Main Workspace: COMPLETE.
- Repair Queue canonical file retained.

## Front Desk Application

- Entry: `Applications/Front Desk Application/INDEX.md`
- Canonical architecture: `Applications/Front Desk Application/README.md`
- Arrangement: CONSOLIDATED ARCHITECTURE MODE.
- Core baseline: COMPLETE.
- Dedicated module copies are not canonical until an approved decomposition passes no-content-loss and duplicate validation.

## Owner Application

- Entry: `Applications/Owner Application/INDEX.md`
- Canonical core architecture: `Applications/Owner Application/README.md`
- Arrangement: CONSOLIDATED ARCHITECTURE MODE.
- Core Repair SaaS baseline: COMPLETE.
- HR, payroll, finance expansion, sales, franchise, advanced analytics, automation, and other future expansions require separate complete packages under Section 8A.

## Customer Portal

- Entry: `Applications/Customer Portal/INDEX.md`
- Canonical architecture: `Applications/Customer Portal/README.md`
- Arrangement: CONSOLIDATED ARCHITECTURE MODE.
- Core baseline: COMPLETE.

# 7. SHARED SAAS PLATFORM STATUS

Master index: `SaaS Platform/README.md`

1. User, Role, and Workflow Architecture — COMPLETE.
2. Global System Contract Layer — COMPLETE.
3. Multi-Tenant Data and Entity Architecture — COMPLETE.
4. Database Relationship and Ownership Model — COMPLETE.
5. API, Event, Webhook, and Real-Time Contract — COMPLETE.
6. Authentication, Authorization, and Session Contract — COMPLETE.
7. Subscription, Entitlement, Usage, and Tenant Lifecycle Contract — COMPLETE.
8. Notification and Communication Contract — COMPLETE.
9. Payment, Invoice, Refund, and Financial Control Contract — COMPLETE.
10. File, Media, Document, QR, and Barcode Contract — COMPLETE.
11. Audit, Retention, Backup, Recovery, and Incident Contract — COMPLETE.
12. Cross-Application Workflow and Handoff Matrix — COMPLETE.
13. Non-Functional Requirements — COMPLETE.
14. Development Readiness Audit — COMPLETE.

Shared documents: 14 of 14 complete and distinct by responsibility.

# 8. DESIGN ARCHITECTURE STATUS

Master index: `Design/README.md`

1. `Design/WIREFRAME_ARCHITECTURE.md` — COMPLETE for the core baseline.
2. `Design/WIREFLOW_ARCHITECTURE.md` — COMPLETE for the core baseline.
3. `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md` — COMPLETE.

Design may improve presentation but cannot bypass permissions, lifecycle, approval, financial, inventory, security, audit, or cross-application handoff rules.

# 8A. MANDATORY FULL-ARCHITECTURE STANDARD FOR EVERY EXPANSION

Every future expansion must be fully architected and fully designed before implementation. A feature name in navigation, an Owner dashboard, or a high-level summary is not completion evidence.

## Expansion domains

The expansion registry must include every approved domain, including when applicable:

- Human Resources and workforce management
- Recruitment, onboarding, probation, transfer, promotion, discipline, separation, and offboarding
- Attendance, shifts, scheduling, timesheets, overtime, leave, training, certifications, targets, and performance
- Payroll, compensation, allowances, deductions, benefits, taxes, loans, advances, and payslips
- Finance, accounting, budgeting, expenses, receivables, payables, reconciliation, taxation, and reporting
- Inventory, procurement, suppliers, purchase orders, receiving, warehouses, costing, forecasting, and asset management
- Sales, CRM, contracts, marketing, loyalty, and business development
- Quality, risk, safety, incidents, legal controls, retention, and audit
- Multi-branch, franchise, territory, department, team, contractor, vendor, and partner operations
- Subscription, tenant lifecycle, platform administration, and support
- Analytics, forecasting, AI, agent automation, integrations, APIs, webhooks, and scheduled jobs
- Mobile, tablet, desktop, offline, synchronization, accessibility, localization, and low-connectivity operation
- Any future application, role, module, workflow, business engine, shared service, or platform capability

## Required architecture package

Each expansion requires:

1. Purpose, scope, boundaries, dependencies, exclusions, MVP, and later releases.
2. Complete application/module architecture and canonical paths.
3. Personas, roles, permissions, approval authority, field access, separation of duties, branch and tenant scope.
4. Feature, screen, navigation, search, filter, report, and export inventory.
5. Lifecycle, status, transitions, eligibility, ownership, and prohibited jumps.
6. Happy, alternate, rejection, exception, cancellation, retry, resume, rollback, conflict, recovery, and offline flows.
7. Cross-application handoffs and failure ownership.
8. Entities, fields, relationships, retention, history, validation, numbering, deduplication, and immutable records.
9. API, event, webhook, real-time, notification, import/export, integration, idempotency, and synchronization contracts.
10. Authentication, authorization, tenant isolation, privacy, security, compliance, audit, backup, recovery, incident, and support-access controls.
11. Business rules, calculations, policies, thresholds, limits, entitlements, pricing/cost logic, and reporting definitions.
12. Measurable non-functional targets.
13. Risks, tradeoffs, open decisions, migration, compatibility, and rollout dependencies.
14. Acceptance criteria, traceability, validation evidence, quality gates, owner approval, and truthful status.

## Required UI/UX package

Each expansion also requires:

1. User journeys and task models.
2. Complete low-fidelity wireframes.
3. Complete wireflows for normal and failure states.
4. Desktop, tablet, mobile, keyboard, touch, assistive-technology, low-dexterity, and low-connectivity behavior.
5. Plain-language labels, guidance, help, confirmation, warning, and error content.
6. High-fidelity UI and an interactive prototype.
7. Design tokens, components, variants, responsive rules, and accessibility specifications.
8. Screen-to-requirement, role, permission, state, and wireflow traceability.

## Expansion completion gate

An expansion is `COMPLETE` only when every required architecture and design artifact exists, all documents agree, duplicates/conflicts are removed, validation/read-back/synchronization are complete, and owner approval is recorded.

Otherwise the status is `PLANNED`, `PARTIAL`, or `BLOCKED`.

No expansion enters implementation until the owner explicitly authorizes the exact expansion and all applicable gates pass.

# 9. TECA AUTOMATION GOVERNANCE STATUS

Master index: `TECA/README.md`

1. `TECA/AGENT_JOB_ASSIGNMENTS.md` — COMPLETE.
2. `TECA/PIPELINE_EXECUTION_PLAN.md` — COMPLETE.
3. `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md` — COMPLETE IN REPOSITORY.
4. `TECA/IMPLEMENTATION_BUILD_PLAN.md` — COMPLETE AS A GOVERNING BUILD PLAYBOOK.

Repository-side TECA rules include:

- 9 agents and 11 sequential stages
- repository read order
- no-jump rule
- skip-complete rule
- no-duplicate rule
- architecture/design no-code gate
- validation, publishing, read-back, memory, diagnostics, and summary
- co-worker continuity and handoff
- source provenance and unsupported-conflict removal
- application folder arrangement
- evidence-based duplicate classification from Section 1C

Live CrewAI Studio alignment remains unverified until the Studio Assistant applies the canonical update and returns actual stored read-back.

# 10. CANONICAL WORK-ORDER LIFECYCLE

```text
Draft
→ Intake In Progress
→ Received
→ Awaiting Assignment
→ Assigned
→ Accepted
→ Inspection In Progress
→ Diagnosis In Progress
→ Awaiting Quotation
→ Awaiting Customer Approval
→ Awaiting Parts
→ Repair In Progress
→ Ready For Testing
→ Testing In Progress
→ Quality Review
→ Ready For Release
→ Awaiting Payment
→ Released
→ Completed
→ Closed
```

Exception states:

- On Hold
- Repair Paused
- Testing Failed
- Rework Required
- Cancelled
- Warranty Return
- SLA Warning
- SLA Breached

# 11. NON-NEGOTIABLE SYSTEM AND DESIGN RULES

- Tenant users cannot access another tenant's data.
- Platform support access is approved, scoped, time-limited, visible, and audited.
- Branch-restricted users access only authorized branches.
- Technicians cannot rewrite protected intake or financial records.
- Front Desk cannot rewrite finalized diagnosis, testing, or quality evidence.
- Customers access only owned or authorized records.
- Protected fields use field-level restrictions.
- Separation of duties applies to intake, diagnosis, quality, payment, refund, inventory adjustment, permissions, and release.
- Protected actions and transitions are auditable.
- Financial and inventory corrections use adjustment, reversal, refund, credit, or new movement rather than silent overwrite.
- Retry-sensitive operations use idempotency.
- Customer status uses plain language while mapping to authoritative internal status.
- Users see current status, next action, responsible owner, and blocked requirement.
- Reuse previously entered information unless security or validity requires re-entry.
- Errors retain valid input and explain recovery.
- Final legal, financial, approval, release, permission, deletion, and configuration actions require review and confirmation.
- Dragging has a non-drag alternative.
- Help is consistently located.
- New visual design cannot change completed workflow without an approved revision.
- Shared structural patterns do not authorize deletion of distinct domain modules.
- No worker may override Sections 1A, 1B, 1C, or 8A with a competing rule.

# 12. TECA REQUIRED PIPELINE

```text
STG-0 Memory Retrieval
→ STG-1 Repository Discovery
→ STG-2 Generate Specification
→ STG-3 Parse Requirements
→ STG-4 Generate Components
→ STG-5 Organize Project
→ STG-6 Validate and Report
→ STG-7 Repository Publish
→ STG-8 Memory Storage
→ STG-9 Pipeline Diagnostic
→ STG-10 Self-Diagnostic Summary
```

Required repository read order:

```text
1plan.md
→ README.md
→ revise.md
→ index.md
→ Applications/README.md when application work is requested
→ selected application INDEX.md
→ selected canonical application README.md or module file
→ SaaS Platform/README.md and relevant contracts
→ Design/README.md and relevant design files
→ TECA/README.md
→ TECA/AGENT_JOB_ASSIGNMENTS.md
→ TECA/PIPELINE_EXECUTION_PLAN.md
→ TECA/IMPLEMENTATION_BUILD_PLAN.md when implementation work is requested
→ current branches, pull requests, commits, checks, migrations, and active-work evidence
→ .teca/memory/index.json and relevant durable memories
```

TECA must enforce Sections 1A, 1B, 1C, and 8A during discovery, task selection, specification, creation, validation, publishing, memory, diagnostics, and completion reporting.

# 13. COMPLETION MATRIX

| Area | Status | Canonical Source |
|---|---|---|
| Worker continuity, handoff, and provenance | DEFINED | `1plan.md` Section 1A |
| Application folder arrangement | DEFINED | `1plan.md` Section 1B |
| Duplicate and similarity control | DEFINED AND AUDITED | `1plan.md` Section 1C / `duplicate.md` |
| Applications starting point | COMPLETE | `Applications/README.md` |
| Technician logical surfaces | 36 COMPLETE | `Applications/Technician Application/INDEX.md` |
| Technician canonical detailed files | 34 COMPLETE | Linked module files |
| Front Desk core | COMPLETE | Front Desk INDEX → README |
| Owner core baseline | COMPLETE | Owner INDEX → README |
| Customer Portal core | COMPLETE | Customer Portal INDEX → README |
| Shared SaaS contracts | 14 OF 14 COMPLETE | `SaaS Platform/README.md` |
| Core wireframes | COMPLETE | `Design/WIREFRAME_ARCHITECTURE.md` |
| Core wireflows | COMPLETE | `Design/WIREFLOW_ARCHITECTURE.md` |
| Non-technical UI system | COMPLETE | `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md` |
| Active duplicate canonical documents | 0 | Duplicate audit and read-back |
| Durable TECA memories | 2 ACTIVE AFTER DEDUPLICATION | `.teca/memory/index.json` |
| Future HR/workforce expansion | PLANNED | Future Section 8A package |
| Payroll/benefits expansion | PLANNED | Future Section 8A package |
| Other expansions | PLANNED INDIVIDUALLY | Section 8A |
| TECA agent assignments | COMPLETE | `TECA/AGENT_JOB_ASSIGNMENTS.md` |
| TECA pipeline plan | COMPLETE | `TECA/PIPELINE_EXECUTION_PLAN.md` |
| TECA implementation build playbook | COMPLETE AS PLAN | `TECA/IMPLEMENTATION_BUILD_PLAN.md` |
| TECA Studio update handoff | COMPLETE IN REPOSITORY | `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md` |
| Live TECA Studio alignment | PENDING READ-BACK | CrewAI Studio |
| Controlled implementation planning | NEXT CONTROLLED PHASE | Future approved planning artifacts |
| Application code | NOT GLOBALLY AUTHORIZED | Exact scoped gate required |

# 14. NEXT CONTROLLED PHASE — IMPLEMENTATION PLANNING

Required gates:

1. Create the canonical expansion registry.
2. Approve core MVP and later release boundaries.
3. Create release and dependency maps.
4. Select technology stack and supported versions.
5. Select hosting, environments, regions, and deployment strategy.
6. Create approved physical schemas and ER diagrams.
7. Define exact API, event, webhook, real-time, import/export, and integration schemas.
8. Complete Section 8A packages for selected expansions.
9. Complete required low-fidelity wireframes and wireflows.
10. Create high-fidelity UI and interactive prototypes.
11. Create design tokens and component specifications.
12. Select providers.
13. Approve measurable non-functional targets.
14. Approve threat model, privacy, testing, migration, release, rollback, support, and operations plans.
15. Create implementation tasks with ownership, dependencies, canonical paths, acceptance criteria, review gates, and handoff states.
16. Apply and verify the live TECA Studio configuration before autonomous TECA implementation.

# 15. FINAL MASTER STATUS

```text
MASTER ARCHITECTURE PLAN AND GOVERNING BLUEPRINT: 100% DEFINED
CORE REPAIR SAAS APPLICATION ARCHITECTURE: COMPLETE
TECHNICIAN LOGICAL SURFACES: 36
TECHNICIAN CANONICAL DETAILED FILES: 34
HEADER QUICK-ACCESS REFERENCES TO SIDEBAR CANONICAL MODULES: 2
CORE SHARED SAAS CONTRACTS: 14 OF 14 COMPLETE
CORE WIREFRAMES: COMPLETE
CORE WIREFLOWS: COMPLETE
NON-TECHNICAL UI DESIGN SYSTEM: COMPLETE
DUPLICATE AUDIT: COMPLETE
REMOVED OR SUPERSEDED DUPLICATE FILES: 6
ACTIVE ACCIDENTAL DUPLICATE CANONICAL DOCUMENTS: 0
ACTIVE DURABLE TECA MEMORIES AFTER DEDUPLICATION: 2
TECA REPOSITORY GOVERNANCE: COMPLETE
TECA IMPLEMENTATION BUILD PLAYBOOK: COMPLETE AS A PLAN
LIVE TECA STUDIO ALIGNMENT: PENDING LIVE READ-BACK
FUTURE EXPANSIONS: PLANNED — EACH MUST PASS SECTION 8A
ACTUAL APPLICATION IMPLEMENTATION: SEPARATE EVIDENCE-BASED STATUS
READY FOR CONTROLLED IMPLEMENTATION PLANNING: YES
UNCONTROLLED CODING AUTHORIZED: NO
```

**THE CORE TECHNICIAN REPAIR SAAS BASELINE IS ARCHITECTED AND DESIGNED. DUPLICATE CANONICAL CONTENT HAS BEEN CONSOLIDATED. FUTURE EXPANSIONS MUST BE FULLY ARCHITECTED, DESIGNED, VALIDATED, AND TRACEABLE BEFORE IMPLEMENTATION OR A COMPLETE STATUS IS ALLOWED.**
