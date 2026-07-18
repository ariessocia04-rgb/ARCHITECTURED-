# REVISION AND REMAINING-WORK REGISTER

## RULE

- Read this file after `1plan.md`, `README.md`, and `Applications/README.md` when application work is requested.
- `1plan.md` is the master source of truth for scope, priority, worker coordination, handoff, provenance, canonical targets, folder assignments, and completion rules.
- Complete the current related task accurately before moving to a later related task.
- Validate and skip items already complete.
- Do not create duplicate canonical files.
- Do not mark an item complete without repository or live-system evidence.
- A completed governing plan does not prove that coding, testing, deployment, or release is complete.

## COMPLETED CONTROLLED REVISIONS

### REV-001 — Canonical Wireframe Architecture

- Status: COMPLETE.
- File: `Design/WIREFRAME_ARCHITECTURE.md`
- Result: Global, Technician, Front Desk, Owner, Customer Portal, Platform, responsive, and exception-state wireframes documented for the current core Repair SaaS baseline.

### REV-002 — Canonical Wireflow Architecture

- Status: COMPLETE.
- File: `Design/WIREFLOW_ARCHITECTURE.md`
- Result: End-to-end navigation, decisions, handoffs, exceptions, recovery, and offline synchronization documented for the current core Repair SaaS baseline.

### REV-003 — Non-Technical User UI Design System

- Status: COMPLETE.
- File: `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md`
- Result: Plain-language, guided-task, form, validation, confirmation, responsive, accessibility, help, and usability rules documented without changing completed flows.

### REV-004 — TECA Agent Repository Job Assignments

- Status: COMPLETE.
- File: `TECA/AGENT_JOB_ASSIGNMENTS.md`
- Result: 9 agents and 11 stages assigned exact repository jobs, goals, outputs, boundaries, and prohibited actions.

### REV-005 — TECA Sequential Pipeline Execution Plan

- Status: COMPLETE.
- File: `TECA/PIPELINE_EXECUTION_PLAN.md`
- Result: Read order, no-jump rule, finish-current-task rule, skip-complete rule, phase gates, implementation authorization, deployment gate, and evidence rules documented.

### REV-006 — TECA CrewAI Studio Update Handoff

- Status: COMPLETE IN REPOSITORY.
- File: `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md`
- Result: Self-contained configuration instruction prepared for the live TECA Builder automation.

### REV-007 — Prior Master Document Synchronization

- Status: COMPLETE FOR THE PRIOR CONTROLLED BATCH.
- Result: Architecture, design, and TECA governance statuses were synchronized before the implementation-build-playbook addition.

### REV-009 — Canonical Implementation Build Playbook

- Status: COMPLETE AS A GOVERNING PLAN.
- File: `TECA/IMPLEMENTATION_BUILD_PLAN.md`
- Result:
  1. Foundation-first and dependency-ordered vertical-slice implementation method defined.
  2. Exact repository, CI, security, configuration, observability, and design-system foundation order defined.
  3. Exact physical database and migration order defined.
  4. Exact identity, tenant, role, permission, shared backend, and shared frontend order defined.
  5. Exact CORE-01 through CORE-16 module order defined.
  6. Per-module database → backend → API/events → frontend → tests → validation → publish sequence defined.
  7. Unit, contract, integration, E2E, security, accessibility, performance, resilience, recovery, and release-test gates defined.
  8. Local → CI → preview → development → staging → production promotion defined.
  9. Deployment, migration, monitoring, rollback, and post-deployment verification defined.
  10. The playbook explicitly remains separate from actual implementation status and does not grant coding authorization.

### REV-010 — Master Worker Continuity, Handoff, and Source-of-Truth Alignment

- Status: COMPLETE IN REPOSITORY.
- Master source: `1plan.md`, Section 1A.
- Synchronized operational files:
  - `TECA/README.md`
  - `index.md`
  - `revise.md`
- Result:
  1. Added the exact factual notification command for recent or active co-workers.
  2. Required active workers to continue their valid current task under the new rules unless the owner explicitly reassigns them.
  3. Required other workers to move to another unclaimed incomplete plan item instead of racing or duplicating active work.
  4. Added safe checkpoint and save-before-transfer requirements before reassignment.
  5. Required exact handoff paths, completed and missing work, dependencies, tests, blockers, and latest commit or SHA evidence.
  6. Made `1plan.md` the master source for project-wide worker coordination, provenance, canonical save targets, and conflict-removal authority.
  7. Required detailed work to be saved in the canonical target assigned by `1plan.md` and synchronized back to the plan when required.
  8. Classified unsupported conflicting or duplicate content for controlled removal or supersession while preserving Git and revision evidence.
  9. Removed the competing claim that `TECA/README.md` itself was the master source of worker rules; it is now the operational index under `1plan.md` authority.
  10. No application implementation file or active co-worker implementation was changed.

### REV-011 — Applications Folder Starting-Point and Index Alignment

- Status: COMPLETE IN REPOSITORY, PENDING FINAL MASTER-PLAN READ-BACK IN THIS BATCH.
- Reference pattern inspected: `Applications/Technician Application/`.
- Added files:
  - `Applications/README.md`
  - `Applications/Front Desk Application/INDEX.md`
  - `Applications/Owner Application/INDEX.md`
  - `Applications/Customer Portal/INDEX.md`
- Synchronized files:
  - `index.md`
  - `duplicate.md`
  - `revise.md`
  - `1plan.md` after final alignment
- Result:
  1. Defined `Applications/README.md` as the application-folder starting point under `1plan.md` authority.
  2. Preserved the Technician Application decomposed volume/module/folder structure as the approved reference pattern.
  3. Defined two valid arrangement modes: `DECOMPOSED_MODULE_MODE` and `CONSOLIDATED_ARCHITECTURE_MODE`.
  4. Added entry indexes for Front Desk, Owner, and Customer Portal without copying their canonical `README.md` architecture.
  5. Kept existing Front Desk, Owner, and Customer architecture files in place and unchanged.
  6. Prohibited empty appearance-only folders and duplicate module files.
  7. Required every joiner to start at `1plan.md`, continue through `Applications/README.md`, and enter the selected application through its `INDEX.md`.
  8. Required future module decomposition to have plan-assigned paths, traceability, link synchronization, no-content-loss validation, and owner approval.
  9. Existing completed application content deleted, moved, renamed, or split in this batch: NO.
  10. Open PR #4 was inspected as `STALE_REVIEW_REQUIRED`; its files were not used as authority and no active implementation work was overwritten.

## CURRENT OPEN REVISION

### REV-008 — Live TECA CrewAI Studio Alignment

- Status: PENDING LIVE EXECUTION AND READ-BACK.
- Source instruction: `TECA/CREWAI_STUDIO_CONFIGURATION_UPDATE.md`
- Master worker authority: `1plan.md`, Section 1A.
- Application starting authority: `Applications/README.md` under `1plan.md`.
- Required result:
  1. Apply the canonical role, goal, backstory, task, phase-gate, repository-read-order, no-duplicate, finish-current-task, skip-complete, validation, publishing, memory, diagnostic, and summary rules in CrewAI Studio.
  2. Add the `1plan.md` Section 1A active-work notification, continue-current-work, no-racing, save-before-transfer, source-provenance, gap-fill, and unsupported-conflict handling behavior without changing approved stage ownership.
  3. Use `Applications/README.md` and each application `INDEX.md` as the mandatory entry path for application work.
  4. Preserve the existing 9 agents, 11 tasks, exact stage order, IDs, contexts, tools, models, and sequential process unless an explicitly approved correction is required.
  5. Ensure implementation requests are governed by `TECA/IMPLEMENTATION_BUILD_PLAN.md`.
  6. Return live read-back evidence for every changed agent and task.
- Completion evidence: CrewAI Studio response classified as `TECA_LIVE_CONFIGURATION_ALIGNED` with actual stored read-back.
- Repository documentation alone is not sufficient evidence of live Studio alignment.

## NEXT CONTROLLED PHASE AFTER REV-008

### Release-Specific Controlled Implementation Planning

Use `1plan.md` for scope, priorities, source mapping, assignments, folder paths, and worker coordination. Use `Applications/README.md` for application entry and arrangement. Use `TECA/IMPLEMENTATION_BUILD_PLAN.md` for the exact authorized build order.

Required sequence:

1. Expansion registry and truthful scope status.
2. MVP, release, and exclusion boundaries.
3. Release and dependency maps.
4. Technology stack and supported versions.
5. Repository, hosting, environment, region, and deployment strategy.
6. Physical database schema, migrations, indexes, tenant isolation, backup, restore, and ER diagram.
7. Exact API, event, webhook, realtime, import, export, integration, idempotency, and synchronization schemas.
8. High-fidelity UI screens and interactive prototype traced to canonical wireframes and wireflows.
9. Design tokens and component specifications.
10. Provider selection.
11. Measurable non-functional targets.
12. Security, privacy, test, migration, deployment, rollback, monitoring, support, incident, and operations plans.
13. Release-specific and module-specific implementation slices with requirement IDs, source paths, application index paths, canonical save targets, handoff states, file targets, dependencies, tests, owners, acceptance criteria, and review gates.
14. Exact scoped `implementation_authorized=true` approval before source-code work.

## NOT AUTHORIZED

- Uncontrolled application coding.
- Global coding authorization inferred from the existence of the build playbook.
- Phase or module jumping.
- Beginning a later related task before the current related task is safely completed or handed off.
- Racing, shadowing, or overwriting active co-worker work.
- Leaving reassigned work only in chat, memory, an uncommitted workspace, or an unknown location.
- Treating a local draft, old branch, prompt, memory, or copied file as source of truth without canonical validation and publishing.
- Starting application work from a random module while bypassing `Applications/README.md` and the application `INDEX.md`.
- Creating empty folders or duplicate module files only to imitate visual hierarchy.
- Moving or deleting consolidated application architecture before approved decomposition, link synchronization, validation, and owner approval.
- Future expansion implementation before Section 8A completion.
- Duplicate architecture, design, implementation-plan, worker-rule, or shared business-logic documents.
- Claiming live TECA alignment before read-back.
- Claiming deployment or production readiness from repository changes alone.
- Production, security, performance, availability, accessibility, privacy, recovery, or compliance claims without approved targets and test evidence.

## CURRENT STATUS

```text
MASTER ARCHITECTURE PLAN: COMPLETE AS GOVERNING PLAN
MASTER WORKER CONTINUITY AND SOURCE-OF-TRUTH COMMAND: COMPLETE IN 1PLAN SECTION 1A
APPLICATIONS MASTER STARTING POINT: COMPLETE IN REPOSITORY
APPLICATION ENTRY INDEXES: 4 OF 4 AVAILABLE
EXISTING APPLICATION ARCHITECTURE MOVED OR DELETED: NO
CORE WIREFRAME ARCHITECTURE: COMPLETE
CORE WIREFLOW ARCHITECTURE: COMPLETE
NON-TECHNICAL UI DESIGN: COMPLETE
TECA REPOSITORY OPERATIONAL GOVERNANCE: COMPLETE IN REPOSITORY
CANONICAL IMPLEMENTATION BUILD PLAYBOOK: COMPLETE AS GOVERNING PLAN
LIVE TECA STUDIO ALIGNMENT: PENDING
RELEASE-SPECIFIC IMPLEMENTATION PLANNING: INCOMPLETE
GLOBAL APPLICATION CODING AUTHORIZATION: NO
ACTUAL CODING / TESTING / DEPLOYMENT / RELEASE: SEPARATE STATUS
NEXT PHASE: LIVE ALIGNMENT AND RELEASE-SPECIFIC CONTROLLED IMPLEMENTATION PLANNING
```
