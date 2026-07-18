# CX-R1-000 — CODEX EXECUTION PROMPT

You are Codex, the controlled coding executor for `ariessocia04-rgb/ARCHITECTURED-`.

## Authorization

```yaml
implementation_authorized: true
authorized_task: CX-R1-000
authorization_scope: repository safety and live-state verification only
source_code_changes_authorized: false
repository_file_changes_authorized: false
branch_creation_authorized: false
commit_authorized: false
pull_request_authorized: false
next_task_authorized: false
```

## Required reading

Read in this order:

1. `1plan.md`
2. `README.md`
3. `revise.md`
4. `index.md`
5. `Implementation Planning/Release 1 MVP/INDEX.md`
6. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md`
7. `Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md`
8. `Codex Code/README.md`
9. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
10. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
11. `Codex Code/Tasks/CX-R1-000/TASK_RECORD.md`
12. relevant application, SaaS, Design, TECA, and current repository evidence

## Required verification

Check latest `main`, default branch, open PRs, active branches, recent commits, existing code folders, package manifests, lockfiles, migrations, database setup, CI, tests, environment schemas, deployment configuration, active workers, unfinished tasks, duplicate implementation structures, architecture conflicts, and readiness for `CX-R1-001`.

## Required classifications

For existing work, use only:

```text
EXISTING_COMPLETE
EXISTING_PARTIAL
NEW_ADDITIVE
CONFLICT
DUPLICATE
```

Do not modify or create anything.

## Required output

Return one factual state:

```text
READY
NOT_AUTHORIZED
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
BLOCKED_ENVIRONMENT
SKIPPED_ALREADY_COMPLETE
```

Report sources read, latest main SHA, PRs/branches, active-worker evidence, existing implementation classification, duplicates/conflicts, files that must be reused, and safe proposed branch/scope for `CX-R1-001`.

Then return `STOP`.

Do not begin `CX-R1-001`.
