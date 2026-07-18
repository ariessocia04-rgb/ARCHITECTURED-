# TECA REPOSITORY GOVERNANCE — MASTER INDEX

## PURPOSE

This folder contains the canonical repository instructions for the TECA CrewAI automation assigned to the ARCHITECTURED Technician Repair SaaS.

TECA must use these documents to understand its agents, jobs, stage order, completed work, incomplete work, rules, publishing behavior, implementation build order, validation gates, memory behavior, deployment controls, co-worker handoffs, reference research requirements, and live Studio alignment requirements.

## CANONICAL DOCUMENTS

1. [Agent Job Assignments](AGENT_JOB_ASSIGNMENTS.md)
   - Exact jobs, goals, boundaries, inputs, outputs, prohibited actions, IDs, stages, and repository responsibilities for all 9 agents and 11 tasks.

2. [Pipeline Execution Plan](PIPELINE_EXECUTION_PLAN.md)
   - Required read order, completed and remaining phases, no-jump rule, skip-complete rule, no-code gate, synchronization requirements, and master completion matrix.

3. [CrewAI Studio Configuration Update](CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
   - Copy-ready controlled instruction for aligning the live TECA Builder automation while preserving agent IDs, task IDs, task order, contexts, tools, models, and sequential execution.

4. [Canonical Implementation Build Plan](IMPLEMENTATION_BUILD_PLAN.md)
   - Exact dependency order for authorization, release locking, stack selection, repository foundation, CI, design system, physical database, identity and permissions, shared backend and frontend services, core modules, vertical-slice coding, tests, deployment, rollback, and production-readiness evidence.

## REQUIRED LIVE PIPELINE

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

## REQUIRED REPOSITORY READ ORDER

```text
1plan.md
→ README.md
→ revise.md
→ index.md
→ SaaS Platform/README.md
→ Design/README.md
→ TECA/README.md
→ TECA/AGENT_JOB_ASSIGNMENTS.md
→ TECA/PIPELINE_EXECUTION_PLAN.md
→ TECA/IMPLEMENTATION_BUILD_PLAN.md when implementation planning or coding is requested
→ relevant canonical files
→ current branches, pull requests, commits, checks, migrations, and active work evidence
→ .teca/memory/index.json and relevant memories
```

## CURRENT WORK STATE

### Complete

- Technician Application architecture.
- Front Desk Application architecture.
- Owner Application architecture for the current core Repair SaaS baseline.
- Customer Portal architecture.
- Shared SaaS contract architecture.
- Core Repair SaaS wireframe architecture.
- Core Repair SaaS wireflow architecture.
- Non-technical-user UI design system.
- TECA agent repository job assignments.
- TECA sequential pipeline execution plan.
- TECA live Studio configuration handoff.
- TECA canonical implementation build playbook.

### Next Controlled Phase

- Complete the remaining implementation-planning artifacts required by `1plan.md` and the build playbook.
- Align and verify the live TECA Studio automation before autonomous TECA implementation work.

### Not Authorized

- Uncontrolled application coding.
- Coding outside an exact release or slice authorization.
- Future expansion implementation before its Section 8A architecture and UI/UX gate passes.
- Production claims without approved measurable targets and test evidence.

## IMPLEMENTATION CONTROL

The implementation build playbook defines how approved work must be built. It does not itself set `implementation_authorized=true` and does not prove that application source code, tests, deployment, or production readiness are complete.

Every implementation slice must follow:

```text
Requirement
→ Data and State Contract
→ Database Migration
→ Domain and Backend
→ API / Events / Integrations
→ Backend Tests
→ Frontend Data and UI
→ Integration and E2E Tests
→ Security / Accessibility / Performance Checks
→ Validation
→ Publish and Read-Back
→ Memory / Diagnostic / Summary
```

## ACTIVE-WORK OWNERSHIP AND NO-RACING RULE

TECA, ChatGPT, assigned builders, and other agents are co-workers contributing to the same repository and master plan. The goal is shared completion, not competition for the same task.

Before starting any plan item, module, architecture section, implementation slice, test, migration, UI screen, or repository change, the assigned worker must inspect the latest repository state and classify the target work as one of the following:

- `UNCLAIMED_INCOMPLETE` — no active worker owns it and required work is missing.
- `ACTIVE_BY_COWORKER` — another worker is currently changing the same target, dependency, branch, pull request, or tightly coupled files.
- `PARTIAL_AVAILABLE` — valid work exists but specific required gaps remain and the work is no longer actively owned or has been handed off.
- `COMPLETE` — the canonical item satisfies its acceptance criteria with evidence.
- `CONFLICTED` — existing or active changes disagree and controlled resolution is required.
- `STALE_REVIEW_REQUIRED` — work appears abandoned or outdated, but ownership and correctness must be verified before editing.

### Mandatory routing behavior

1. Fetch and read the latest target file, `revise.md`, relevant indexes, recent commits, branches, pull requests, checks, migrations, and current work evidence.
2. Never assume an earlier local copy, prompt, chat response, generated file, or memory entry is still current.
3. When the target is `ACTIVE_BY_COWORKER`, do not edit, replace, reformat, rename, move, or publish changes to that active work.
4. When the target is `ACTIVE_BY_COWORKER`, select the next highest-priority `UNCLAIMED_INCOMPLETE` item from the same approved phase and work there instead.
5. Do not wait beside, race, shadow, or independently recreate the same work another co-worker is producing.
6. When the target is `PARTIAL_AVAILABLE`, preserve all valid existing work and fill only the exact missing requirements, screens, flows, fields, states, tests, links, evidence, or acceptance criteria.
7. Partial work may be extended only after confirming it is not currently being edited or after a clear handoff from the active worker.
8. When the target is `COMPLETE`, validate it, record evidence, return `SKIPPED_ALREADY_COMPLETE`, and continue to the next incomplete item inside the same authorized phase.
9. When the target is `CONFLICTED`, return `BLOCKED`, identify the conflicting files, owners, branches, requirements, and required resolution; never silently overwrite one version.
10. When the target is `STALE_REVIEW_REQUIRED`, verify last activity, current owner, branch or pull-request status, dependencies, and acceptance evidence before deciding whether it may be resumed.
11. Re-read every target file immediately before publishing and use its latest SHA or repository version.
12. Commits and reports must state what was reused, validated, extended, skipped, blocked, or completed by another contributor.

### Evidence that work may be active

Active-work evidence may include:

- an open branch or pull request targeting the same files or tightly coupled requirements;
- a current entry in `revise.md` or another approved work register;
- recent commits for the same module or plan item;
- unresolved review comments or failed checks under active correction;
- an explicit current assignment or handoff note;
- migrations, schemas, contracts, or UI work whose dependent files are presently changing.

Absence of one signal does not automatically prove the work is free. The worker must use the combined repository evidence.

## GAP-FILL-ONLY RULE

When a co-worker has already produced valid partial work, the next worker must not rewrite the whole item. The next worker must:

1. compare the current artifact against its canonical requirements and acceptance criteria;
2. create a precise missing-items list;
3. preserve correct content, numbering, naming, links, paths, workflows, permissions, decisions, and history;
4. change only the smallest necessary files and sections;
5. add only missing or required corrections;
6. test and validate both the preserved work and the new gap-fill work together;
7. report the exact gaps filled and the existing work intentionally left unchanged.

Cosmetic preference, writing style, personal ownership, or a different implementation approach is not a valid reason to replace correct current work.

## COMPARABLE-PRODUCT RESEARCH RULE

Before designing or filling a missing module, workflow, UI/UX pattern, business rule, report, mobile flow, automation, or implementation approach, the assigned worker must research current comparable products and official documentation when external comparison can materially improve completeness or accuracy.

### Research procedure

1. Use official vendor product pages and official documentation first.
2. Compare at least three relevant products when the decision is material and multiple comparable systems exist.
3. Extract reusable concepts such as workflow stages, roles, permissions, scheduling, dispatch, repair tickets, parts movement, quotations, customer approval, mobile execution, service reports, warranty, invoicing, notifications, audit, and reporting.
4. Record the vendor, official source, access date, feature or workflow reviewed, useful pattern, ARCHITECTURED adaptation, and rejected or unsuitable behavior.
5. Compare findings against `1plan.md`, canonical application architecture, shared contracts, wireframes, wireflows, UI rules, and current repository decisions.
6. Use external products as research references only. Do not copy proprietary source code, exact screen layouts, branding, text, icons, images, paid assets, database structures, or confidential behavior.
7. Do not replace ARCHITECTURED terminology, workflows, permissions, tenant rules, accessibility requirements, or approved decisions merely because another product behaves differently.
8. Research must identify missing requirements and improve the original architecture; it must not turn the product into an unauthorized clone.
9. Store only concise, traceable research conclusions in the correct canonical planning artifact. Do not duplicate full vendor documentation in the repository.
10. Re-check official sources when the referenced product, feature, version, standard, or provider may have changed.

### Approved initial comparison baseline

The following official systems are approved starting references. This list is not exclusive and must be expanded when another product is more relevant:

- **RepairDesk** — repair ticket management, POS, inventory, employee management, appointments, customer communication, reporting, payments, and multi-location repair operations.
  - Official source: `https://www.repairdesk.co/features/`
- **Odoo Repairs** — repair orders, returned products, warranty handling, parts add/remove/recycle movements, component availability, repair stages, quotations, invoicing, and return to customer.
  - Official source: `https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/repairs/repair_orders.html`
- **Microsoft Dynamics 365 Field Service** — customer accounts, resources, work orders, scheduling, field-service mobile operation, price lists, security roles, and implementation configuration.
  - Official source: `https://learn.microsoft.com/en-us/dynamics365/field-service/`
- **ServiceNow Field Service Management** — work orders, tasks, resources, skills, assets, locations, dispatch, workforce planning, mobile collaboration, and operational dashboards.
  - Official source: `https://www.servicenow.com/docs/r/field-service-management/fsm-application-landing-page.html`
- **Zoho FSM** — service requests, estimates, work orders, scheduling, dispatch, appointments, job sheets, mobile work, timesheets, service reports, invoicing, notifications, automation, security, dashboards, and integrations.
  - Official source: `https://www.zoho.com/fsm/features.html`

Initial baseline reviewed: `2026-07-18`.

## NON-NEGOTIABLE RULES

- Search before creating.
- Fetch the latest repository state before editing.
- Check active ownership before selecting a task.
- Do not touch work currently owned or actively changed by another co-worker.
- When another co-worker is active on the target, move to a different unclaimed incomplete plan item.
- Skip and validate work already complete, including work completed by another co-worker.
- Fill only missing gaps when another contributor has partially completed the task and the work is available for handoff.
- Do not duplicate canonical documents or shared business logic.
- Research relevant comparable products through current official sources before filling material design or workflow gaps.
- Use research as a reference, not as authorization to clone proprietary products.
- Finish the current authorized task accurately before beginning a later related task.
- Do not jump to the next phase before validation, publishing, read-back, master synchronization, memory, diagnostic, and final summary.
- Do not generate application code while `implementation_authorized=false`.
- Authorization for one release or module does not authorize another.
- Do not expose secrets.
- Do not claim live Studio alignment without Studio read-back.
- Do not claim repository publishing without commit and file read-back evidence.
- Do not claim deployment or production readiness from source-code completion alone.

## STATUS

- Canonical TECA repository documents: 4 of 4 complete.
- Agent job assignments: COMPLETE.
- Pipeline and phase plan: COMPLETE.
- Live Studio handoff instruction: COMPLETE IN REPOSITORY.
- Canonical implementation build playbook: COMPLETE.
- Co-worker active-work ownership and no-racing rule: DEFINED.
- Gap-fill-only rule: DEFINED.
- Comparable-product research rule and initial official reference baseline: DEFINED.
- Live Studio alignment: PENDING LIVE EXECUTION AND READ-BACK.
- Actual application implementation: SEPARATE STATUS.
- Missing planned TECA repository documents in the current governance package: 0.
- Accidental duplicate TECA documents: 0.

**TECA REPOSITORY GOVERNANCE, CO-WORKER NO-RACING AND GAP-FILL RULES, COMPARABLE-PRODUCT RESEARCH REQUIREMENTS, AND CANONICAL IMPLEMENTATION BUILD-ORDER DOCUMENTATION ARE COMPLETE AS GOVERNING RULES. ACTUAL CODING, TESTING, DEPLOYMENT, AND RELEASE REMAIN SEPARATE EVIDENCE-BASED STATUSES.**