# TECA REPOSITORY GOVERNANCE — MASTER INDEX

## PURPOSE

This folder contains the canonical repository instructions for the TECA CrewAI automation assigned to the ARCHITECTURED Technician Repair SaaS.

TECA must use these documents to understand its agents, jobs, stage order, completed work, incomplete work, rules, publishing behavior, implementation build order, validation gates, memory behavior, deployment controls, and live Studio alignment requirements.

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

## NON-NEGOTIABLE RULES

- Search before creating.
- Skip and validate work already complete.
- Do not duplicate canonical documents or shared business logic.
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
- Live Studio alignment: PENDING LIVE EXECUTION AND READ-BACK.
- Actual application implementation: SEPARATE STATUS.
- Missing planned TECA repository documents in the current governance package: 0.
- Accidental duplicate TECA documents: 0.

**TECA REPOSITORY GOVERNANCE AND CANONICAL IMPLEMENTATION BUILD-ORDER DOCUMENTATION COMPLETE (100%). ACTUAL CODING, TESTING, DEPLOYMENT, AND RELEASE REMAIN SEPARATE EVIDENCE-BASED STATUSES.**