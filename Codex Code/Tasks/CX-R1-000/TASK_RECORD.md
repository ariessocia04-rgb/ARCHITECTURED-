# CX-R1-000 — TASK RECORD

## Identity

```yaml
task_id: CX-R1-000
title: Repository Safety and Live-State Verification
release_id: ROS-R1-MVP-2026-01
execution_type: READ_ONLY_VERIFICATION
implementation_authorized: true
source_code_changes_authorized: false
branch_creation_by_codex_authorized: false
commit_by_codex_authorized: false
pull_request_by_codex_authorized: false
next_task_authorized: false
canonical_implementation_root: Codex Code/Implementation/
```

## Objective

Verify the live repository state before any coding begins. Codex must work from the real `ariessocia04-rgb/ARCHITECTURED-` Git checkout, read the canonical sources, inspect latest `main`, branches, PRs, code, migrations, CI, tests, active workers, duplicates, and conflicts, then return a factual readiness report and stop.

## Environment requirement

The repository root must contain:

```text
.git/
1plan.md
Codex Code/README.md
Codex Code/Implementation/README.md
Codex Code/Tasks/CX-R1-000/TASK_RECORD.md
```

A generated workspace containing only `work/`, `outputs/`, or files mentioned by the user is not the repository and must return `BLOCKED_ENVIRONMENT`.

## Required prompt

Use `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md` together with:

- `Implementation Planning/Release 1 MVP/02. Technology and Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md`;
- `Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md`;
- `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md`;
- `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md`;
- `Codex Code/Implementation/README.md`;
- this task record.

## Required path verification

Codex must confirm:

```text
CANONICAL CODE ROOT: Codex Code/Implementation/
ROOT apps/: must not exist as a competing implementation tree
ROOT packages/: must not exist as a competing implementation tree
ROOT supabase/: must not exist as a competing implementation tree
ROOT tests/: must not exist as a competing implementation tree
ROOT infrastructure/: must not exist as a competing implementation tree
```

When executable code exists outside the canonical root, Codex must not copy, delete, move, rename, or recreate it. It must report exact paths and return `BLOCKED_ARCHITECTURE_CLARIFICATION` unless a controlled migration task is authorized.

## Protected behavior

- No repository file modification.
- No source code.
- No migration.
- No dependency installation.
- No branch, commit, or PR.
- No architecture rewrite.
- No deletion, rename, move, copy, or duplicate creation.
- No automatic transition to `CX-R1-001`.

## Required result

```text
READY
NOT_AUTHORIZED
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
SKIPPED_ALREADY_COMPLETE
```

## Evidence state

```text
TASK_CONTRACT: TO BE PRODUCED FROM CANONICAL TEMPLATE AT EXECUTION
CHANGED_FILES: NONE AUTHORIZED
TEST_EVIDENCE: READ-ONLY REPOSITORY CHECKS ONLY
SECURITY_REVIEW: REPOSITORY/SECRET/ACTIVE-WORK INSPECTION
CANONICAL IMPLEMENTATION ROOT REVIEW: REQUIRED
REVIEW_RESULT: PENDING CODEX REPORT AND EXTERNAL REVIEW
MERGE_RECORD: NOT APPLICABLE — NO REPOSITORY CHANGE AUTHORIZED
```

## Stop rule

After producing the repository-safety report, Codex must return `STOP` and wait for a separately authorized task.
