# TECA REPOSITORY GOVERNANCE — OPERATIONAL INDEX

## PURPOSE AND AUTHORITY

This folder contains operational instructions for the TECA CrewAI automation assigned to ARCHITECTURED.

`1plan.md` is the master source of truth. TECA documents implement it and must not create competing scope, worker, handoff, provenance, duplicate, priority, folder, or completion rules.

Canonical authority:

- `1plan.md` Section 1A — co-worker continuity, active-work detection, no-racing, save-before-transfer, provenance, unsupported-conflict removal, and gap filling.
- `1plan.md` Section 1B — application entry, folder arrangement, indexes, canonical detail sources, and decomposition gates.
- `1plan.md` Section 1C — exact duplicate, near duplicate, subset, aggregate-copy, intentional-index, shared-template, deletion, and memory-deduplication rules.
- `1plan.md` Section 8A — full architecture and UI/UX gate for each expansion.
- `Applications/README.md` — application navigation under Section 1B.
- `Implementation Planning/README.md` — release-specific planning entry.
- `Implementation Planning/Release 1 MVP/INDEX.md` — controlled Release 1 boundary, stack, printer, design, Codex, and quality plan.
- `TECA/IMPLEMENTATION_BUILD_PLAN.md` — detailed global build order after applicable authorization gates.

## CANONICAL TECA DOCUMENTS

1. [Agent Job Assignments](AGENT_JOB_ASSIGNMENTS.md)
2. [Pipeline Execution Plan](PIPELINE_EXECUTION_PLAN.md)
3. [CrewAI Studio Configuration Update](CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
4. [Canonical Implementation Build Plan](IMPLEMENTATION_BUILD_PLAN.md)

These files have separate responsibilities and must not be merged merely because they share TECA terminology.

## REQUIRED READ ORDER

```text
1plan.md
→ README.md
→ revise.md and applicable additive revision record
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
→ Implementation Planning/README.md
→ selected release INDEX.md and exact task contract
→ other canonical files assigned by 1plan.md
→ current branches, pull requests, commits, checks, migrations, assignments, and active-work evidence
→ .teca/memory/index.json and relevant durable memories
```

Release 1 implementation begins only through:

```text
Implementation Planning/Release 1 MVP/INDEX.md
→ 05. Codex Execution/CODEX_TASK_MANIFEST.md
→ 05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md
→ exact authorized CX-R1 task
```

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

## APPLICATION ENTRY EXECUTION

1. Open the application through its `INDEX.md`.
2. Identify decomposed or consolidated mode.
3. Open the exact canonical detail source.
4. Check active ownership and repository evidence.
5. Preserve valid work and fill only approved gaps.
6. Reject empty folders and duplicate copies.
7. Do not supersede a consolidated README before approved decomposition and validation.

Application entries:

- Technician: `Applications/Technician Application/INDEX.md`
- Front Desk: `Applications/Front Desk Application/INDEX.md`
- Owner: `Applications/Owner Application/INDEX.md`
- Customer Portal: `Applications/Customer Portal/INDEX.md`
- IT Operations: `Applications/IT Operations Application/INDEX.md`
- ROS Future Modules: `Applications/ARCHITECTURED REPAIR OPERATING SYSTEM (ROS)/9. FUTURE MODULES/INDEX.md`

## DUPLICATE-CONTROL EXECUTION

Before every create, update, move, decomposition, memory write, or publish action, TECA must classify overlap using Section 1C:

- `EXACT_DUPLICATE`
- `NEAR_DUPLICATE_SAME_AUTHORITY`
- `SUBSET_DUPLICATE`
- `AGGREGATE_COPY`
- `INTENTIONAL_SUMMARY_OR_INDEX`
- `SHARED_TEMPLATE_NOT_DUPLICATE`

TECA must:

1. Compare exact path, blob SHA/content, purpose, responsibility, entities, workflow, and authority.
2. Keep the correctly located richer canonical source.
3. Preserve unique valid content before removing a near duplicate.
4. Replace Header or navigation subsets with links rather than full copied definitions.
5. Reject aggregate canonical copies; approved exports are temporary derived artifacts.
6. Keep domain modules when shared structure is intentional but content/responsibility differs.
7. Deduplicate memory by root cause and durable retrieval purpose.
8. Update `.teca/memory/index.json` after memory changes.
9. Record removal path, replacement, evidence, and commit.

Current verified repository result before Release 1 implementation:

- Technician logical surfaces: 36.
- Technician canonical detailed files: 34.
- Header quick-access references: 2.
- Removed/superseded duplicate files: 6.
- Active accidental duplicate canonical documents: 0.
- Durable active memories: 2.

## WORKER COORDINATION

TECA must use Section 1A exactly:

- inspect current evidence;
- notify an active worker factually;
- let active valid work continue;
- avoid racing;
- save before reassignment;
- preserve partial work;
- skip complete work;
- block conflicts rather than silently overwrite.

For Codex tasks, tightly coupled schema, contract, design-system, and shared service paths must have one active worker/task group at a time.

## SOURCE AND SAVE TARGET

Every TECA artifact and handoff records:

- source path and requirement ID;
- application or release starting/index path when applicable;
- canonical target path;
- arrangement mode;
- active owner/handoff state;
- dependencies;
- last verified commit/SHA;
- validation evidence.

Chat, prompts, local drafts, old branches, and memory are not canonical truth until validated and published to the assigned repository source.

## COMPARABLE-PRODUCT AND TECHNOLOGY RESEARCH

External systems are references only. Use official sources first; compare relevant products/standards for material decisions; record the adapted pattern and rejected behavior; do not copy proprietary code, branding, assets, layouts, or confidential behavior.

Approved initial reference set includes RepairDesk, Odoo Repairs, Microsoft Dynamics 365 Field Service, ServiceNow Field Service Management, Zoho FSM, official platform/framework documentation, and official printer standards.

Technology versions are time-sensitive. Before authorized bootstrap, verify changelogs/security advisories, pin exact versions, commit lockfiles, and update the release lock through a reviewed decision—not through an unreviewed `latest` upgrade.

## IMPLEMENTATION CONTROL

The global build playbook defines how approved work must be built. The selected release package defines what that release includes and the exact task order. Neither grants coding authorization.

```text
Approved Release Requirement
→ Exact CX-R1 Task Contract
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
→ Master Synchronization
→ Memory / Diagnostic / Summary
→ STOP
```

Codex must stop after the authorized task. Completion of one task does not authorize the next task.

## RELEASE 1 CONTROL

Canonical entry: `Implementation Planning/Release 1 MVP/INDEX.md`.

```text
RELEASE ID: ROS-R1-MVP-2026-01
RELEASE CLASS: CONTROLLED PILOT MVP
REQUIREMENT FAMILIES: 24
HIGH-FIDELITY SCREEN DEFINITIONS: 70
CODEX TASKS: 36
PRIORITY RISKS: 24
IMPLEMENTATION AUTHORIZED: NO
```

Release 1 uses a modular monolith with Next.js/React/TypeScript, Supabase/PostgreSQL platform services, and a separate Tauri/Rust Windows local print agent. It includes one complete repair workflow, essential staff/customer/IT connections, Free and Pro Trial behavior, A4/Letter page printing, and one exact certified 80 mm printer path.

Public production, live paid SaaS checkout, Premium sales, advanced future modules, universal printer support, high-fidelity completion, code, tests, hardware certification, and deployment remain separate evidence-based gates.

## CURRENT STATE

Complete in repository:

- core application architecture;
- application starting point and indexes;
- shared contracts;
- low-fidelity wireframes, wireflows, and UI design rules;
- Plans/Billing architecture;
- Printing and Peripheral Operations architecture;
- IT Operations Application architecture;
- Cross-Department Operating Fabric;
- ROS Future Module architecture packages;
- agent assignments and pipeline plan;
- Studio handoff;
- global implementation build playbook;
- duplicate audit and memory cleanup;
- Sections 1A, 1B, 1C, and 8A governance;
- Release 1 MVP implementation planning package.

Next controlled work after planning merge and Owner review:

1. apply and verify live TECA Studio alignment when autonomous TECA implementation will be used;
2. produce and approve Release 1 high-fidelity critical-path designs/prototype;
3. approve exact pilot provider/hosting/hardware choices;
4. authorize only `CX-R1-001` or an explicitly bounded task batch;
5. execute the Codex task contract and review evidence.

Not authorized globally:

- uncontrolled coding;
- starting a Codex task without exact authorization;
- automatically continuing to the next task;
- bypassing application/release entry;
- duplicate creation;
- deleting domain modules because of template similarity;
- expansion implementation before Section 8A;
- production claims without approved targets and evidence;
- hardware support claims without certification;
- public production or live billing provider activation under Release 1.

## STATUS

- Canonical TECA documents: 4 of 4 complete.
- Duplicate-control authority: DEFINED IN `1plan.md` Section 1C.
- Duplicate repository audit: COMPLETE.
- Release 1 implementation planning: COMPLETE AS PLAN.
- Live Studio alignment: PENDING LIVE EXECUTION AND READ-BACK.
- High-fidelity rendered design/prototype: NOT CREATED.
- Actual implementation: NOT AUTHORIZED / separate evidence-based status.

**TECA MUST TAKE SCOPE, TASK PRIORITY, WORKER ROUTING, HANDOFF, PROVENANCE, APPLICATION/RELEASE ENTRY, FOLDER ASSIGNMENT, DUPLICATE CLASSIFICATION, AND CONFLICT-REMOVAL AUTHORITY FROM `1plan.md` AND THE SELECTED CANONICAL RELEASE PACKAGE.**