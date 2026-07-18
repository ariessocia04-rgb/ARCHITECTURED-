# TECA PIPELINE EXECUTION PLAN — ARCHITECTURED

## PURPOSE

This is the canonical phase-control plan that tells TECA what is complete, what is incomplete, what to read, what to produce, when it may proceed, and how an authorized implementation slice must use the canonical implementation build playbook.

## REPOSITORY READ ORDER

1. `1plan.md`
2. `README.md`
3. `revise.md`
4. `index.md`
5. `Applications/README.md` when application work is requested
6. Selected application `INDEX.md`
7. Selected canonical application `README.md` or module file
8. `SaaS Platform/README.md` and relevant shared contracts
9. `Design/README.md` and relevant design artifacts
10. `TECA/README.md`
11. `TECA/AGENT_JOB_ASSIGNMENTS.md`
12. `TECA/PIPELINE_EXECUTION_PLAN.md`
13. `TECA/IMPLEMENTATION_BUILD_PLAN.md` when implementation planning, coding, testing, deployment, or release work is requested
14. Other relevant canonical release, schema, API, security, test, and operations documents assigned by `1plan.md`
15. Current branches, pull requests, commits, checks, migrations, assignments, and active-work evidence
16. `.teca/memory/index.json` and relevant memory files

## APPLICATION ENTRY RULE

When the work affects an application:

1. Use `1plan.md` Section 1B as authority.
2. Enter through `Applications/README.md`.
3. Open the selected application's `INDEX.md`.
4. Identify the approved arrangement mode.
5. Open only the canonical detail source linked by the index.
6. Preserve existing valid content and fill only approved gaps.
7. Do not create empty appearance-only folders or duplicate module files.
8. Do not move, split, rename, delete, or supersede consolidated architecture without an approved decomposition and owner approval.

## PHASE CONTROL RULE

```text
READ CURRENT PHASE
→ VERIFY COMPLETE / INCOMPLETE / MISSING / BLOCKED / AUTHORIZED
→ VERIFY APPLICATION ENTRY AND ACTIVE OWNERSHIP WHEN APPLICABLE
→ FINISH THE CURRENT AUTHORIZED TASK BEFORE A LATER RELATED TASK
→ SKIP ALREADY COMPLETE ITEMS
→ COMPLETE ONLY THE CURRENT PHASE OR IMPLEMENTATION SLICE
→ VALIDATE WITH EVIDENCE
→ PUBLISH AND READ BACK
→ UPDATE MASTER STATUS AND TRACEABILITY
→ STORE DURABLE MEMORY
→ DIAGNOSE
→ SUMMARIZE
→ ONLY THEN PROCEED
```

## STATUS VALUES

- `PLANNED`
- `READY`
- `IN_PROGRESS`
- `COMPLETE`
- `INCOMPLETE`
- `PARTIAL`
- `MISSING`
- `BLOCKED`
- `SKIPPED_ALREADY_COMPLETE`
- `FAILED`
- `NOT_AUTHORIZED`
- `ROLLED_BACK`
- `DEPLOYED`
- `VERIFIED`

No item may be marked COMPLETE, DEPLOYED, VERIFIED, or PRODUCTION_READY without evidence.

# PHASE 1 — APPLICATION ARCHITECTURE

## Scope

- Applications master starting point
- Technician Application
- Front Desk Application
- Owner Application for the current core Repair SaaS baseline
- Customer Portal

## Canonical Entry Sources

- `Applications/README.md`
- `Applications/Technician Application/INDEX.md`
- `Applications/Front Desk Application/INDEX.md` → `README.md`
- `Applications/Owner Application/INDEX.md` → `README.md`
- `Applications/Customer Portal/INDEX.md` → `README.md`

## Status

`COMPLETE`

## Rule

Read and preserve. Use the assigned application index before opening a detail source. A high-level mention of a future expansion is not proof that the expansion is fully architected. Folder depth alone is not evidence of completeness.

# PHASE 2 — SHARED SAAS CONTRACT ARCHITECTURE

## Scope

- users, roles, permissions, and workflow
- global contracts
- data and entity ownership
- database relationships
- API, event, webhook, and realtime behavior
- authentication and sessions
- subscription and tenant lifecycle
- communication
- financial control
- files and media
- audit, backup, recovery, and incidents
- cross-application handoffs
- non-functional requirements
- development readiness

## Status

`COMPLETE`

## Rule

Read and preserve. Update only through an approved synchronized revision.

# PHASE 3 — CORE WIREFRAME ARCHITECTURE

## Canonical File

`Design/WIREFRAME_ARCHITECTURE.md`

## Status

`COMPLETE` for the current core Repair SaaS baseline.

## Rule

High-fidelity UI and implementation must trace back to canonical wireframes. Future expansions require their own complete Section 8A design package.

# PHASE 4 — CORE WIREFLOW ARCHITECTURE

## Canonical File

`Design/WIREFLOW_ARCHITECTURE.md`

## Status

`COMPLETE` for the current core Repair SaaS baseline.

## Rule

No screen, API, worker, integration, or prototype may bypass canonical lifecycle, permission, approval, financial, inventory, audit, or handoff gates.

# PHASE 5 — NON-TECHNICAL USER UI DESIGN SYSTEM

## Canonical File

`Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`

## Status

`COMPLETE`

## Rule

Implementation must preserve plain language, one clear task at a time, responsive behavior, accessibility, retained valid input, clear errors, review, confirmation, help, and recovery.

# PHASE 6 — TECA REPOSITORY GOVERNANCE

## Canonical Files

- `TECA/README.md`
- `TECA/AGENT_JOB_ASSIGNMENTS.md`
- `TECA/PIPELINE_EXECUTION_PLAN.md`
- `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md`
- `TECA/IMPLEMENTATION_BUILD_PLAN.md`

## Status

`COMPLETE IN REPOSITORY`

## Completion Evidence

- 9 agent jobs documented.
- 11 sequential tasks documented.
- repository and application read order documented.
- no-jump, finish-current-task, skip-complete, no-duplicate, validation, publishing, memory, diagnostic, and summary rules documented.
- application starting path and arrangement modes documented under `1plan.md` Section 1B.
- live Studio configuration handoff documented.
- exact database, backend, frontend, module, test, environment, deployment, and rollback build order documented.

## Rule

Repository documents do not prove live Studio persistence. Live alignment requires actual Studio execution and read-back.

# PHASE 7 — CONTROLLED IMPLEMENTATION PLANNING

## Status

`IN_PROGRESS / NEXT CONTROLLED PHASE`

The canonical implementation build playbook is complete, but the remaining release-specific planning inputs must still be approved.

## Canonical Build-Order Source

`TECA/IMPLEMENTATION_BUILD_PLAN.md`

## Required Work

1. Create and approve the expansion registry.
2. Approve core MVP and later-release boundaries.
3. Approve release IDs, included modules, exclusions, dependencies, owners, and acceptance criteria.
4. Select frontend, backend, database, API, event, cache, queue, realtime, search, authentication, file, payment, messaging, monitoring, testing, hosting, and deployment technologies with supported versions.
5. Approve repository, application, and workspace structure.
6. Assign every selected application task an application index path, canonical source path, canonical save target, arrangement mode, active owner or handoff state, and dependency paths.
7. Define physical schemas, migrations, indexes, constraints, tenant and branch enforcement, seeds, backup, restore, and rollback.
8. Define exact API, event, webhook, realtime, import, export, notification, integration, idempotency, and synchronization schemas.
9. Create high-fidelity UI screens and interactive prototypes traced to canonical wireframes and wireflows.
10. Approve design tokens, components, states, variants, responsive, accessibility, content, and interaction specifications.
11. Approve measurable performance, availability, capacity, scalability, recovery, retention, accessibility, observability, support, security, and cost targets.
12. Approve threat model, privacy review, test strategy, migration plan, deployment plan, rollback plan, monitoring plan, incident plan, support plan, and operations runbooks.
13. Convert the build playbook into release and slice task graphs with requirement IDs, application indexes, canonical source paths, canonical save targets, arrangement modes, file targets, dependencies, tests, gates, and owners.
14. Align and verify the live TECA Studio configuration before autonomous TECA coding.

## Completion Gate

Phase 7 is complete only when every required planning artifact for the selected release exists, is linked, validated, read back, synchronized, and owner-approved.

# PHASE 8 — CONTROLLED IMPLEMENTATION

## Status

`NOT_AUTHORIZED` globally. Individual work may begin only through exact scoped authorization.

## Entry Requirements

- Phase 7 complete for the exact release or slice.
- applicable expansion passed Section 8A of `1plan.md`.
- application work entered through `Applications/README.md` and the selected application `INDEX.md`.
- exact canonical source and target paths assigned.
- `implementation_authorized=true` explicitly approved for the exact release, module, or atomic slice.
- live TECA Studio aligned and verified when TECA performs autonomous work.
- approved stack, environment, schema, API, design, security, testing, deployment, rollback, and release contracts exist.
- no earlier related implementation task remains unfinished.

## Mandatory Build Source

`TECA/IMPLEMENTATION_BUILD_PLAN.md`

## Mandatory Global Order

```text
BUILD-00 Authorization and Live State
→ BUILD-01 Release Boundary and Dependencies
→ BUILD-02 Technology and Version Lock
→ BUILD-03 Repository and Workspace Foundation
→ BUILD-04 CI, Quality, and Security Baseline
→ BUILD-05 Configuration and Observability
→ BUILD-06 Design System and App Shell
→ BUILD-07 Physical Database Foundation
→ BUILD-08 Identity, Tenant, Roles, Permissions, and Approvals
→ BUILD-09 Shared Backend Services
→ BUILD-10 Shared Frontend Services
→ CORE-01 through CORE-16 in dependency order
→ Release Validation
→ Staging
→ Approved Production Deployment
→ Post-Deployment Verification
```

## Mandatory Per-Module Order

```text
Requirement
→ Application Index and Canonical Source Verification
→ Contract
→ Migration
→ Domain
→ Backend
→ API / Event / Integration
→ Backend Tests
→ Frontend Data
→ Frontend UI
→ Integration Tests
→ E2E Tests
→ Security / Accessibility / Performance
→ Documentation and Traceability
→ STG-6 Validation
→ STG-7 Publish and Read-Back
→ STG-8 Memory
→ STG-9 Diagnostic
→ STG-10 Summary
```

## Rule

Do not implement a later module, release, or expansion early. Do not mark a module complete from backend-only, frontend-only, mock UI, placeholder API, disabled tests, or unverified deployment. Do not create duplicate module folders or bypass the selected application index.

# PHASE 9 — CONTROLLED RELEASE AND DEPLOYMENT

## Status

`NOT_AUTHORIZED` until the selected release passes implementation and release gates.

## Required Promotion Path

```text
Local
→ CI Test Environment
→ Preview when applicable
→ Development
→ Staging
→ Production
```

## Entry Requirements

- included modules complete;
- full regression and cross-application E2E pass;
- migration rehearsal pass;
- backup and restore evidence;
- security, privacy, accessibility, performance, resilience, monitoring, support, and rollback gates pass;
- user acceptance and owner approval;
- approved production change window and release record.

## Rule

A commit, merged PR, build artifact, or staging deployment does not prove production deployment or production readiness.

# MASTER COMPLETION MATRIX

| Area | Canonical Source | Status | Next Action |
|---|---|---|---|
| Applications Master Starting Point | `Applications/README.md` | COMPLETE | Enforce for application work |
| Core Technician Application Architecture | `Applications/Technician Application/INDEX.md` | COMPLETE | Preserve decomposed structure |
| Core Front Desk Architecture | `Applications/Front Desk Application/INDEX.md` → `README.md` | COMPLETE | Preserve consolidated source |
| Core Owner Architecture | `Applications/Owner Application/INDEX.md` → `README.md` | COMPLETE | Preserve; expansions remain separate |
| Core Customer Portal Architecture | `Applications/Customer Portal/INDEX.md` → `README.md` | COMPLETE | Preserve consolidated source |
| Shared SaaS Contracts | `SaaS Platform/README.md` | COMPLETE | Preserve and trace |
| Core Wireframes | `Design/WIREFRAME_ARCHITECTURE.md` | COMPLETE | Trace high-fidelity UI |
| Core Wireflows | `Design/WIREFLOW_ARCHITECTURE.md` | COMPLETE | Trace behavior |
| UI Design System | `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md` | COMPLETE | Implement after stack approval |
| TECA Agent Assignments | `TECA/AGENT_JOB_ASSIGNMENTS.md` | COMPLETE | Align live Studio |
| TECA Pipeline Plan | `TECA/PIPELINE_EXECUTION_PLAN.md` | COMPLETE | Enforce |
| TECA Studio Handoff | `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md` | COMPLETE IN REPOSITORY | Execute and read back live |
| Canonical Implementation Build Playbook | `TECA/IMPLEMENTATION_BUILD_PLAN.md` | COMPLETE | Convert into approved release slices |
| Release-Specific Implementation Planning | Future approved artifacts | INCOMPLETE | Complete Phase 7 |
| Live TECA Alignment | CrewAI Studio | PENDING | Apply and verify |
| Application Code | Approved implementation structure | NOT AUTHORIZED GLOBALLY | Require scoped approval |
| Production Deployment | Approved infrastructure | NOT AUTHORIZED | Require release evidence |

# REQUIRED MASTER DOCUMENT UPDATES

After any completed planning, implementation, release, or deployment slice, synchronize when applicable:

- `1plan.md`
- `README.md`
- `index.md`
- `Applications/README.md`
- selected application `INDEX.md`
- affected application, shared-platform, design, implementation, and TECA indexes
- `MASTER_AUDIT.md`
- `FINAL_ARCHITECTURE_VERIFICATION.md`
- `duplicate.md`
- `revise.md`
- implementation traceability, release records, runbooks, and evidence indexes

# TECA RUN OUTPUT REQUIREMENTS

Each run must report:

- requested phase, release, and slice;
- authorization evidence;
- application start path, selected application index, arrangement mode, canonical source, and canonical target when application work is involved;
- current repository, branch, migration, CI, environment, and deployment state;
- already-complete items skipped;
- exact artifacts created, updated, rejected, or blocked;
- database, backend, frontend, test, CI, security, accessibility, performance, deployment, and rollback results applicable to the slice;
- validation result;
- publish mode, branch, commit SHA, PR, and read-back result;
- master-document and traceability synchronization;
- memory result;
- diagnostic result;
- truthful current status and next controlled task.

## STATUS

- Completed and remaining work map: COMPLETE.
- Sequential phase gates: COMPLETE.
- Application starting path and arrangement enforcement: COMPLETE IN REPOSITORY.
- Finish-current-task rule: COMPLETE.
- No-jump rule: COMPLETE.
- No-duplicate and skip-complete behavior: COMPLETE.
- Implementation authorization gate: COMPLETE.
- Canonical implementation build order: COMPLETE.
- Release-specific planning: INCOMPLETE.
- Live TECA Studio alignment: PENDING READ-BACK.
- Actual application implementation: SEPARATE STATUS.

**TECA PIPELINE EXECUTION, APPLICATION ENTRY CONTROL, AND CANONICAL IMPLEMENTATION BUILD-ORDER PLAN ARE COMPLETE AS GOVERNING RULES, NOT AS PROOF OF APPLICATION COMPLETION.**