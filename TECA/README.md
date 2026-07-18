# TECA REPOSITORY GOVERNANCE — MASTER INDEX

## PURPOSE

This folder contains the canonical repository instructions for the TECA CrewAI automation assigned to the ARCHITECTURED Technician Repair SaaS.

TECA must use these documents to understand its agents, jobs, stage order, completed work, incomplete work, rules, publishing behavior, validation gates, memory behavior, and live Studio alignment requirements.

## CANONICAL DOCUMENTS

1. [Agent Job Assignments](AGENT_JOB_ASSIGNMENTS.md)
   - Exact jobs, goals, boundaries, inputs, outputs, prohibited actions, IDs, stages, and repository responsibilities for all 9 agents and 11 tasks.

2. [Pipeline Execution Plan](PIPELINE_EXECUTION_PLAN.md)
   - Required read order, completed and remaining phases, no-jump rule, skip-complete rule, no-code gate, synchronization requirements, and master completion matrix.

3. [CrewAI Studio Configuration Update](CREWAI_STUDIO_CONFIGURATION_UPDATE.md)
   - Copy-ready controlled instruction for aligning the live TECA Builder automation while preserving agent IDs, task IDs, task order, contexts, tools, models, and sequential execution.

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
→ relevant canonical files
→ .teca/memory/index.json and relevant memories
```

## CURRENT WORK STATE

### Complete

- Technician Application architecture.
- Front Desk Application architecture.
- Owner Application architecture.
- Customer Portal architecture.
- Shared SaaS contract architecture.
- Wireframe architecture.
- Wireflow architecture.
- Non-technical-user UI design system.
- TECA agent repository job assignments.
- TECA sequential pipeline execution plan.
- TECA live Studio configuration handoff.

### Next Controlled Phase

- Implementation planning.

### Not Authorized

- Uncontrolled application coding.
- Production claims without approved measurable targets and test evidence.

## NON-NEGOTIABLE RULES

- Search before creating.
- Skip and validate work already complete.
- Do not duplicate canonical documents.
- Do not jump to the next phase before validation, publishing, read-back, master synchronization, memory, diagnostic, and final summary.
- Do not generate application code while `implementation_authorized=false`.
- Do not expose secrets.
- Do not claim live Studio alignment without Studio read-back.
- Do not claim repository publishing without commit and file read-back evidence.

## STATUS

- Canonical TECA repository documents: 3 of 3 complete.
- Agent job assignments: COMPLETE.
- Pipeline and phase plan: COMPLETE.
- Live Studio handoff instruction: COMPLETE.
- Missing planned TECA repository documents: 0.
- Accidental duplicate TECA documents: 0.

**TECA REPOSITORY GOVERNANCE DOCUMENTATION COMPLETE (100%)**
