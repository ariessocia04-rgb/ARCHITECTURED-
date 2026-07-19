# GOV-CONTROL-001 — Repository-Controlled Continue, Sleep Mode, and Model Fallback

## Authorization

The repository owner explicitly authorized this governance task in chat and asked ChatGPT to place the instruction in the repository so Codex can execute it through the normal `continue` command without another long pasted prompt.

## Objective

Reconcile the existing governance branch and PR #17 against the latest `origin/main`, then complete one canonical, repository-backed control system for:

- `continue` manual execution mode;
- `sleep mode` automated review/fix mode;
- `deactivate sleep mode` / `stop sleep mode` return to manual mode;
- one canonical reviewer handoff path;
- safe approved-model fallback when the preferred model reaches capacity;
- strict preservation of the existing plan, active-task rules, no-duplicate rules, owner-authored work, exact paths, evidence, security, review, merge, and stop boundaries.

## Existing branch and PR

```yaml
work_branch: governance/activate-cx-r1-002
pull_request: 17
base_branch: main
new_branch_allowed: false
new_pull_request_allowed: false
force_push_allowed: false
```

## Scope type

Governance and prompt-control reconciliation only. No product feature, business logic, database schema, migration, UI, infrastructure deployment, or later implementation task is authorized.

## Required terminal state

```text
READY_FOR_OWNER_MERGE
```

Codex must stop before merge and must not activate `CX-R1-003` or any later implementation task.
