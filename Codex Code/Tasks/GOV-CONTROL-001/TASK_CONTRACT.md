# GOV-CONTROL-001 — Task Contract

## Authorized role

Codex is the controlled repository-governance implementer for the open draft PR #20 only. PR #17 is already merged and is historical context. Codex is not the product owner, autonomous architect, external reviewer, approver, merger, or next-task selector.

## Required work

1. Fetch and verify the latest `origin/main`, including merged PR #18 and merged governance PR #17.
2. Compare every overlapping file in draft PR #20 against latest `main` before editing.
3. Reconcile the existing branch `governance/activate-cx-r1-002` without force-push and update the same draft PR #20.
4. Preserve every valid permanent control already merged through PR #17 and every valid implementation/evidence change merged through PR #18.
5. Complete one canonical control method for `continue`, `sleep mode`, `deactivate sleep mode`, reviewer handoff, and approved-model fallback.
6. Remove or supersede obsolete overlapping task-state text only after exact comparison and unique-content preservation.
7. Run every affected formatting, link, duplicate, secret, governance, and CI validation available to the repository.
8. Update factual checkpoint, changed-file manifest, evidence, and PR description.
9. Return `READY_FOR_OWNER_MERGE` and stop.

## Canonical ownership

Use existing canonical sources whenever they already own the rule. Do not duplicate complete rules across files.

- `AGENTS.md`: repository-level owner commands, mandatory reading order, pre-coding gate, monitored-work and stop boundaries.
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`: exact execution-mode state machine and resume algorithm.
- `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`: preservation, classification, active-worker, review handoff, no-duplicate, reconciliation, and lifecycle law.
- `Codex Code/Prompts/EXECUTION_MODE.md`: exactly one small canonical current-mode state file, created only if no equivalent canonical state file already exists.
- `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md`: exactly one reviewer-to-worker handoff per task; create only when real review evidence exists.
- active prompt, task record, task contract, and checkpoint: exact current authorization and factual progress.

## Required command semantics

### `continue`

Manual controlled execution. Re-read all canonical sources and live state, pass the pre-coding gate, then resume only the one active authorized task from the first incomplete verified item. Never ask for another long pasted prompt.

### `sleep mode`

Activate repository-backed automated review/fix behavior. It does not broaden scope, bypass review, authorize self-merge, or automatically authorize an unlisted later task.

In sleep mode, a worker cycle must:

1. re-read canonical rules and live state;
2. read the one canonical review handoff for the active task when present;
3. apply only exact `FIX_REQUIRED` findings within the existing contract;
4. run affected and contract-required validations;
5. update the same branch and PR;
6. return `READY_FOR_REVIEW` and stop for external review;
7. remain stopped on `REVIEW_PASS_PENDING_OWNER`, `READY_FOR_OWNER_MERGE`, `PENDING_OWNER_ACTION`, any `BLOCKED_*`, authentication, 2FA, security confirmation, repository settings, destructive action, unresolved architecture decision, or merge approval.

### `deactivate sleep mode` / `stop sleep mode`

Return to manual `CONTINUE_MODE`. Scheduled checks may inspect state but must not advance coding until a manual `continue`, unless the owner-authorized external inactivity policy explicitly reactivates sleep mode. The repository must not falsely claim that it can detect ChatGPT inactivity by itself; timing is owned by the external automation layer.

## Reviewer handoff statuses

```text
FIX_REQUIRED
REVIEW_PASS_PENDING_OWNER
```

`FIX_REQUIRED` must include exact file, problem, required correction, reason, required validations, scope boundary, and exact next action. Codex may not review or approve its own task.

## Approved-model fallback policy

The repository rules and checkpoint preserve the coding method across model switches. Model memory is never authority.

When the preferred model reaches capacity:

1. preserve branch, worktree, commits, PR, checkpoint, evidence, and review handoff;
2. do not restart, regenerate, duplicate, or broaden the task;
3. switch only to an owner-approved available fallback model through the Codex product controls;
4. the fallback model must re-read the complete repository authority and live state before coding;
5. the fallback may continue the same coding scope only when it can satisfy the same task contract, tests, security, and evidence requirements;
6. if the available fallback cannot safely perform the required work, return `BLOCKED_MODEL_CAPACITY` and wait for an approved capable model.

Do not claim the repository itself can change the selected Codex model. Model selection is an external Codex-product action or automation capability.

## Allowed paths

Only the existing PR #20 governance paths and factual task evidence required for this task. Product implementation paths are forbidden.

Expected governance paths may include:

```text
AGENTS.md
Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
Codex Code/Prompts/CONTINUE_PROTOCOL.md
Codex Code/Prompts/EXECUTION_MODE.md
Codex Code/Prompts/ACTIVE_TASK.md
Codex Code/Prompts/PROMPT_REGISTRY.md
Codex Code/Prompts/INDEX.md
Codex Code/Tasks/GOV-CONTROL-001/**
Design/Prompt Design/CURRENT_CODEX_PROMPT.md
```

Any additional path requires proof that it is an existing canonical owner of an affected rule and must be listed before editing.

## Forbidden actions

- a second branch or second PR for `GOV-CONTROL-001`;
- force-push, reset, clean, history rewrite, branch deletion;
- product code or later-task implementation;
- duplicate prompt, plan, state file, review handoff, task, checkpoint, report, workflow, branch, or PR;
- silent deletion, rename, relocation, consolidation, or overwrite of owner-authored work;
- self-review, self-approval, self-merge;
- automatic activation of `CX-R1-003` or any later task;
- unsupported claim that 5-minute or 30-minute automation scheduling is available;
- unsupported claim that repository files can directly control ChatGPT or Codex model selection.

## Acceptance criteria

- latest main plus merged PR #17 and PR #18 content are preserved;
- draft PR #20 becomes cleanly mergeable or returns an exact factual blocker;
- one canonical continue method exists;
- one canonical sleep-mode state machine exists;
- one canonical reviewer handoff convention exists;
- model fallback is safe, truthful, and repository-recoverable;
- strict plan and no-duplicate rules remain intact;
- all affected validations pass;
- same draft PR #20 is updated;
- no later implementation task is started;
- Codex stops at `READY_FOR_OWNER_MERGE`.
