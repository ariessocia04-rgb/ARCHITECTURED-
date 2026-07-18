# TECA REPOSITORY GOVERNANCE — OPERATIONAL INDEX

## PURPOSE AND AUTHORITY

This folder contains the operational instructions for the TECA CrewAI automation assigned to the ARCHITECTURED Technician Repair SaaS.

`1plan.md` is the master source of truth. TECA documents implement and explain the approved plan but must not create competing project scope, worker-coordination, handoff, provenance, deletion, priority, or completion rules.

Canonical worker authority:

- `1plan.md`, Section 1A — co-worker continuity, active-work detection, factual worker notification, continue-current-work behavior, save-before-transfer, source-of-truth provenance, unsupported-conflict removal, and gap-fill-only rules.
- `1plan.md`, Section 8A — full-architecture and UI/UX gate for every expansion.
- `TECA/IMPLEMENTATION_BUILD_PLAN.md` — exact implementation build sequence after the applicable `1plan.md` authorization gates pass.

## CANONICAL TECA DOCUMENTS

1. [Agent Job Assignments](AGENT_JOB_ASSIGNMENTS.md)
   - Exact jobs, goals, boundaries, inputs, outputs, prohibited actions, IDs, stages, and repository responsibilities for all 9 agents and 11 tasks.

2. [Pipeline Execution Plan](PIPELINE_EXECUTION_PLAN.md)
   - Required read order, phase control, no-jump behavior, implementation gates, synchronization, validation, publishing, memory, diagnostics, and reporting.

3. [CrewAI Studio Configuration Update](CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
   - Copy-ready instruction for aligning the live TECA Builder while preserving approved IDs, task order, contexts, tools, models, and sequential execution.

4. [Canonical Implementation Build Plan](IMPLEMENTATION_BUILD_PLAN.md)
   - Exact order for authorization, release locking, technology selection, repository foundation, CI, design system, physical database, permissions, shared services, modules, tests, deployment, rollback, and production-readiness evidence.

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
→ TECA/IMPLEMENTATION_BUILD_PLAN.md when implementation planning, coding, testing, deployment, or release is requested
→ exact canonical files assigned by 1plan.md
→ current branches, pull requests, commits, checks, migrations, assignments, and active-work evidence
→ .teca/memory/index.json and relevant memories
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

## WORKER-COORDINATION EXECUTION

TECA must use the exact command and classifications in `1plan.md`, Section 1A.

Operational behavior:

1. Inspect the latest repository evidence before selecting work.
2. When recent or active work is detected, send the factual `NEW CANONICAL GOVERNANCE RULE — CONTINUE CURRENT WORK` notice from `1plan.md`, Section 1A.
3. The active worker continues the current valid task unless the owner explicitly stops, cancels, replaces, revises, or reassigns it.
4. Other workers move to another unclaimed incomplete item instead of racing or duplicating the active task.
5. A reassigned worker must save a safe checkpoint and exact handoff before moving.
6. Partial available work is preserved and only exact missing gaps are filled.
7. Complete work is validated and returned as `SKIPPED_ALREADY_COMPLETE`.
8. Conflicted work is returned as `BLOCKED`; it is never silently overwritten.
9. Unsupported conflicting or duplicate content is removed or formally superseded only according to `1plan.md`, Section 1A, with Git and revision evidence.

The full definitions are intentionally not copied here. `1plan.md`, Section 1A remains authoritative.

## SOURCE-OF-TRUTH AND SAVE-TARGET EXECUTION

Every TECA specification, requirement package, artifact, validation report, publish action, and handoff must record:

- `source_path`;
- `source_section_or_requirement_id`;
- `canonical_target_path`;
- `active_owner_or_handoff_state`;
- `dependency_paths`;
- `last_verified_commit_or_sha`;
- `validation_evidence`.

A project-wide rule must be approved in `1plan.md`. Detailed module work must be saved to the canonical target assigned by `1plan.md`, and the plan status or mapping must be synchronized when required.

Chat responses, local drafts, prompts, memories, old branches, generated files, and copied documents are not project truth until validated and published to the assigned canonical repository location.

## COMPARABLE-PRODUCT RESEARCH PROCEDURE

External systems are research references only. They do not override `1plan.md` or the canonical ARCHITECTURED files.

When external comparison materially improves a missing module, workflow, UI/UX pattern, business rule, report, mobile flow, automation, or implementation decision:

1. Use current official vendor pages and official documentation first.
2. Compare at least three relevant products when the decision is material and multiple comparable systems exist.
3. Record the vendor, official source, access date, feature reviewed, useful pattern, ARCHITECTURED adaptation, and rejected or unsuitable behavior.
4. Compare the finding against `1plan.md` and the assigned canonical application, contract, design, or implementation source.
5. Do not copy proprietary source code, exact layouts, branding, text, icons, images, paid assets, database structures, or confidential behavior.
6. An adapted finding becomes ARCHITECTURED truth only after it is approved and saved in the correct canonical repository source assigned by `1plan.md`.
7. Store concise conclusions only; do not duplicate full vendor documentation.

Approved initial official references include:

- RepairDesk — `https://www.repairdesk.co/features/`
- Odoo Repairs — `https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/repairs/repair_orders.html`
- Microsoft Dynamics 365 Field Service — `https://learn.microsoft.com/en-us/dynamics365/field-service/`
- ServiceNow Field Service Management — `https://www.servicenow.com/docs/r/field-service-management/fsm-application-landing-page.html`
- Zoho FSM — `https://www.zoho.com/fsm/features.html`

Initial baseline reviewed: `2026-07-18`.

## IMPLEMENTATION CONTROL

The implementation build playbook defines how approved work must be built. It does not set `implementation_authorized=true` and does not prove that source code, tests, deployment, or production readiness are complete.

Each implementation slice follows:

```text
Approved Requirement
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
```

## CURRENT WORK STATE

### Complete in repository

- Core Technician, Front Desk, Owner-baseline, and Customer Portal architecture.
- Shared SaaS contract architecture.
- Core wireframe and wireflow architecture.
- Non-technical-user UI design system.
- TECA agent assignments and sequential pipeline plan.
- TECA live Studio configuration handoff.
- TECA canonical implementation build playbook.
- Master co-worker, handoff, provenance, and conflict-removal authority in `1plan.md`, Section 1A.

### Next controlled work

- Complete the remaining release-specific implementation-planning artifacts required by `1plan.md` and `TECA/IMPLEMENTATION_BUILD_PLAN.md`.
- Align and verify the live TECA Studio automation before autonomous TECA implementation work.

### Not authorized globally

- Uncontrolled application coding.
- Coding outside an exact approved release or slice.
- Expansion implementation before its Section 8A gate passes.
- Production claims without approved targets and test evidence.

## STATUS

- Master worker-coordination and source-of-truth authority: `1plan.md` Section 1A — DEFINED.
- Canonical TECA repository documents: 4 of 4 complete.
- Agent job assignments: COMPLETE.
- Pipeline and phase plan: COMPLETE.
- Live Studio handoff: COMPLETE IN REPOSITORY.
- Canonical implementation build playbook: COMPLETE AS A GOVERNING PLAN.
- Comparable-product research procedure: DEFINED UNDER `1plan.md` AUTHORITY.
- Live Studio alignment: PENDING LIVE EXECUTION AND READ-BACK.
- Actual application implementation: SEPARATE EVIDENCE-BASED STATUS.
- Accidental competing worker-rule definitions in this file: REMOVED.

**TECA MUST TAKE PROJECT SCOPE, TASK PRIORITY, ACTIVE-WORK ROUTING, HANDOFF, SOURCE PROVENANCE, AND CONFLICT-REMOVAL AUTHORITY FROM `1plan.md`. THIS FILE IS THE OPERATIONAL INDEX, NOT A COMPETING MASTER PLAN.**