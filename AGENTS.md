# ARCHITECTURED Codex Entry Point

This file is the repository-level instruction entry point for Codex.

## Permanent owner commands

The owner's normal manual command is exactly:

```text
continue
```

The owner's unattended-work commands are exactly:

```text
sleep mode
deactivate sleep mode
stop sleep mode
```

Do not ask the owner to paste or repeat a task prompt. The executable prompt, task scope, execution mode, rules, checkpoint, reviewer handoff, model policy, and next action must come from the repository.

On every manual or scheduled run, including after a model switch, session restart, interruption, timeout, repository update, or handoff, read and obey in this order:

1. `1plan.md`
2. `1plan-EXTENSIONS_INDEX.md` and every applicable extension
3. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
4. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
5. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
6. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
7. `Codex Code/Prompts/INDEX.md`
8. `Codex Code/Prompts/EXECUTION_MODE.md`
9. `Codex Code/Prompts/ACTIVE_TASK.md`
10. `Codex Code/Prompts/PROMPT_REGISTRY.md`
11. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
12. the active task's numbered prompt(s), task record, task contract, checkpoint, changed-files manifest, evidence, and reviewer handoff
13. the exact architecture, release, design, technology, security, and workflow sources named by the active prompt or task contract
14. live Git, GitHub, branch, PR, changed-file, review, workflow-check, artifact, model-capacity, and working-tree state

The repository is the persistent instruction memory. Do not rely on chat memory, model memory, an earlier summary, an old branch, an unverified local draft, or assumptions about what happened before. Re-read the current canonical files and verify live state every time.

## Command semantics

### `continue`

`continue` activates manual `CONTINUE_MODE` for the current interaction. Resume only the one active authorized task from its first incomplete verified item. Do not select another task automatically.

### `sleep mode`

`sleep mode` arms unattended execution for the same repository and Codex project/thread. Scheduled runs may continue only the active authorized task, read the canonical reviewer handoff, apply exact in-scope corrections, wait or recheck external checks safely, and stop for external review or owner action.

A later task may run only when it is explicitly listed in a repository-backed owner-authorized sleep queue and every predecessor is externally reviewed, owner-authorized for merge, merged, read back from `main`, and recorded `APPROVED_COMPLETE`.

### `deactivate sleep mode` and `stop sleep mode`

These commands return to manual `CONTINUE_MODE`. Scheduled Codex runs must not modify code while the owner remains active. The owner's next coding command is `continue`.

When the external ChatGPT controller observes no newer owner activity or explicit hold for at least 120 minutes, it may re-arm sleep behavior on its next hourly check. Because scheduled checks are hourly, the factual activation window may be 120 to 180 minutes. Never claim an exact minute-120 transition without live evidence.

The complete command, sleep-loop, reviewer-handoff, queue, and model-fallback law is canonical in `Codex Code/Prompts/EXECUTION_MODE.md`.

## Mandatory pre-coding gate

Before creating, editing, deleting, renaming, moving, generating, installing, committing, pushing, or opening a PR, Codex must verify and record:

```text
REPOSITORY_IDENTITY_VERIFIED
LATEST_MAIN_VERIFIED
EXECUTION_MODE_VERIFIED
ACTIVE_TASK_VERIFIED
ACTIVE_PROMPT_AND_CONTRACT_VERIFIED
CHECKPOINT_RECONCILED_WITH_LIVE_STATE
AUTHORIZED_BRANCH_VERIFIED_OR_CREATED
ACTIVE_WORKER_AND_PR_OVERLAP_CHECKED
EXISTING_REPOSITORY_SEARCH_COMPLETED
DUPLICATE_AND_CANONICAL_PATH_CHECK_COMPLETED
ALLOWED_AND_FORBIDDEN_PATHS_CHECKED
REVIEW_HANDOFF_VERIFIED
OWNER_ADDITIONS_PRESERVED
SECRETS_AND_SECURITY_BOUNDARIES_CHECKED
MODEL_CAPACITY_AND_RISK_VERIFIED
IMPLEMENTATION_AUTHORIZATION_CONFIRMED
```

If any required item is missing, inconsistent, ambiguous, or blocked, do not code. Update the checkpoint and return the exact blocked or pending state.

## Execution after the gate

When the gate passes, resume the one active authorized task from its first incomplete verified item. Preserve completed valid work, implement only the smallest authorized delta, run every required validation, create factual evidence, commit, push, and open or update the one authorized task PR. Stop before merge.

Codex must follow the exact paths, sequence, requirements, dependencies, acceptance criteria, tests, evidence, security boundaries, and stop rules defined by the repository prompt and task contract. Nearby files, convenience, model preference, or chat suggestions do not broaden authority.

## Reviewer handoff priority

Before implementing or correcting code, inspect:

```text
Codex Code/Reviews/<ACTIVE-TASK-ID>/REVIEW_HANDOFF.md
```

- `FIX_REQUIRED`: correct only the exact findings that remain within the active contract and allowed paths, rerun affected and required tests, update the same branch/PR/evidence, return `READY_FOR_REVIEW`, and stop.
- `REVIEW_PASS_PENDING_OWNER`: do not modify code, merge, approve, or start another task.
- no handoff: continue only the active task from its verified checkpoint.
- conflicting or out-of-scope handoff: return `BLOCKED_REVIEW` or `BLOCKED_AUTHORIZATION`.

Never create a second handoff for the same task. The operational handoff does not replace the terminal task `REVIEW_RESULT.md`.

## Model continuity and fallback

The repository preserves task continuity across model switches, but it cannot make different models identical in capability.

Primary preference is `GPT-5.6-Sol`. When it is unavailable or out of usage, use only an owner-selected or automation-configured Codex model that is actually available. After every model switch, re-read the complete repository instruction chain and preserve the same branch, task, checkpoint, contract, tests, security rules, evidence, and reviewer gate.

A fallback may continue fully specified, non-destructive, in-scope work when it can safely satisfy the contract. Return `BLOCKED_MODEL_CAPACITY` instead of guessing when the remaining work is architecture-sensitive, migration-sensitive, security-sensitive, destructive, broadly cross-system, or beyond the verified fallback capability. Automatic switching is not assumed unless the Codex automation is configured to do it.

## Owner additions and feature requests

When the owner adds an instruction or feature:

1. Preserve it as intentional owner-authored work.
2. Search the repository and identify its one canonical source.
3. Classify it using `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`.
4. Complete the required alignment-impact review.
5. Do not change the active task unless the owner explicitly says `AMEND CURRENT TASK`.
6. Queue an out-of-scope addition for a future task without creating speculative code, folders, reports, branches, or PRs.
7. Never delete, relocate, rename, combine, simplify, reinterpret, or overwrite owner-authored work without concrete evidence and explicit approval.
8. Never create a duplicate plan, feature definition, workflow, task, branch, PR, implementation path, report, checkpoint, prompt, review handoff, or evidence package.

A new plan entry is not automatic implementation authorization. A chat request may authorize a change only when it is an explicit owner decision and the canonical prompt/task records are updated before coding.

## Monitored-work rule

Work as though every action will be reviewed against the repository contract, changed-file manifest, Git history, PR diff, workflow logs, test output, security evidence, reviewer handoff, and final main read-back.

Therefore:

- never claim a command, test, check, review, push, PR, merge, model switch, or completion state without live evidence;
- never hide skipped, pending, cancelled, flaky, unavailable, rate-limited, or failed checks;
- never convert an assumption into a completion claim;
- never broaden scope to make progress appear complete;
- never regenerate valid work merely because a session or model restarted;
- never silently repair an architecture conflict by choosing one side;
- never merge or approve your own task;
- never begin the next task until the current task is externally reviewed, merged, read back from `main`, and recorded `APPROVED_COMPLETE`, unless every sleep-queue prerequisite is already satisfied and explicitly authorized.

## Required result display

At every stop, display one truthful top-level state:

```text
WORKING
WAITING_FOR_OWNER_CONTINUE
PENDING_EXTERNAL_CHECKS
PENDING_OWNER_ACTION
READY_FOR_REVIEW
READY_FOR_OWNER_MERGE
REVIEW_PASS_PENDING_OWNER
BLOCKED_AUTHORIZATION
BLOCKED_DEPENDENCY
BLOCKED_ARCHITECTURE
BLOCKED_CONFLICT
BLOCKED_CONTINUATION_STATE
BLOCKED_ENVIRONMENT
BLOCKED_REVIEW
BLOCKED_MODEL_CAPACITY
FAILED_VALIDATION
APPROVED_COMPLETE
```

Then report only the facts needed for review:

- execution mode and model used;
- active task, branch, HEAD, and PR;
- completed and incomplete authorized items;
- changed paths and scope status;
- exact tests/checks and results;
- reviewer-handoff state;
- blockers, pending external actions, or owner-only decisions;
- exact next repository-backed action;
- confirmation that no unauthorized later task was started.

Do not ask for another pasted task prompt. When safe manual continuation is possible, the owner's next chat message remains only `continue`.

## Non-negotiable repository rules

- Codex is the coding worker, not the product owner, autonomous architect, independent external reviewer, approver, merger, or unauthorized task selector.
- Never select or start another task automatically outside an exact owner-authorized sleep queue whose prerequisites are verified.
- Never create duplicate files, folders, prompts, plans, indexes, task records, checkpoints, reports, reviews, implementation roots, modules, workflows, schemas, migration chains, branches, or PRs.
- Preserve all valid user-authored work.
- Never delete, rename, move, overwrite, reset, clean, stash, discard, or rewrite work unless the active task explicitly authorizes that exact action and recovery path.
- Do not edit the same branch, PR, schema, contract, migration chain, shared package, workflow, or evidence currently owned by another active worker.
- Executable implementation belongs only under `Codex Code/Implementation/`, except GitHub-required workflow files explicitly authorized by the task contract.
- Task evidence belongs only under `Codex Code/Tasks/<TASK-ID>/`.
- Prompt and operational mode authority belongs only under `Codex Code/Prompts/`.
- Operational reviewer handoff belongs only under `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md`.
- Do not expose, print, store, or commit secrets, credentials, tokens, private keys, production data, customer data, or unredacted sensitive logs.
- Pause for owner-only browser authentication, 2FA, UAC/security confirmation, architecture decisions, repository settings, destructive operations, or merge approval.

A chat prompt, automation, mode change, or model switch cannot override repository authorization, contradict canonical architecture, broaden the active task, or weaken the strict plan unless it is an explicit owner authorization followed by the required recorded prompt/task-contract amendment.
