# ARCHITECTURED Codex Entry Point

This file is the repository-level instruction entry point for Codex.

## Permanent owner command: `continue`

The owner's normal chat instruction is exactly:

```text
continue
```

Do not ask the owner to paste or repeat the task prompt. The executable prompt, task scope, rules, checkpoint, and next action must come from the repository.

On every `continue`, including after a model switch, session restart, interruption, timeout, repository update, or handoff, read and obey in this order:

1. `1plan.md`
2. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
3. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
4. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
5. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
6. `Codex Code/Prompts/INDEX.md`
7. `Codex Code/Prompts/ACTIVE_TASK.md`
8. `Codex Code/Prompts/PROMPT_REGISTRY.md`
9. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
10. the active task's numbered prompt(s), task record, task contract, and checkpoint
11. the exact architecture, release, design, technology, security, and workflow sources named by the active prompt or task contract
12. live Git, GitHub, branch, PR, changed-file, review, workflow-check, artifact, and working-tree state

The repository is the persistent instruction memory. Do not rely on chat memory, model memory, an earlier summary, an old branch, an unverified local draft, or assumptions about what happened before. Re-read the current canonical files and verify live state every time.

## Mandatory pre-coding gate

Before creating, editing, deleting, renaming, moving, generating, installing, committing, pushing, or opening a PR, Codex must verify and record:

```text
REPOSITORY_IDENTITY_VERIFIED
LATEST_MAIN_VERIFIED
ACTIVE_TASK_VERIFIED
ACTIVE_PROMPT_AND_CONTRACT_VERIFIED
CHECKPOINT_RECONCILED_WITH_LIVE_STATE
AUTHORIZED_BRANCH_VERIFIED_OR_CREATED
ACTIVE_WORKER_AND_PR_OVERLAP_CHECKED
EXISTING_REPOSITORY_SEARCH_COMPLETED
DUPLICATE_AND_CANONICAL_PATH_CHECK_COMPLETED
ALLOWED_AND_FORBIDDEN_PATHS_CHECKED
OWNER_ADDITIONS_PRESERVED
SECRETS_AND_SECURITY_BOUNDARIES_CHECKED
IMPLEMENTATION_AUTHORIZATION_CONFIRMED
```

If any required item is missing, inconsistent, ambiguous, or blocked, do not code. Update the checkpoint and return the exact blocked or pending state.

## Execution after the gate

When the gate passes, resume the one active authorized task from its first incomplete verified item. Preserve completed valid work, implement only the smallest authorized delta, run every required validation, create factual evidence, commit, push, and open or update the one authorized task PR. Stop before merge.

Codex must follow the exact paths, sequence, requirements, dependencies, acceptance criteria, tests, evidence, security boundaries, and stop rules defined by the repository prompt and task contract. Nearby files, convenience, model preference, or chat suggestions do not broaden authority.

## Owner additions and feature requests

When the owner adds an instruction or feature:

1. Preserve it as intentional owner-authored work.
2. Search the repository and identify its one canonical source.
3. Classify it using `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`.
4. Complete the required alignment-impact review.
5. Do not change the active task unless the owner explicitly says `AMEND CURRENT TASK`.
6. Queue an out-of-scope addition for a future task without creating speculative code, folders, reports, branches, or PRs.
7. Never delete, relocate, rename, combine, simplify, reinterpret, or overwrite owner-authored work without concrete evidence and explicit approval.
8. Never create a duplicate plan, feature definition, workflow, task, branch, PR, implementation path, report, checkpoint, prompt, or evidence package.

A new plan entry is not automatic implementation authorization. A chat request may authorize a change only when it is an explicit owner decision and the canonical prompt/task records are updated before coding.

## Monitored-work rule

Work as though every action will be reviewed against the repository contract, changed-file manifest, Git history, PR diff, workflow logs, test output, security evidence, and final main read-back.

Therefore:

- never claim a command, test, check, review, push, PR, merge, or completion state without live evidence;
- never hide skipped, pending, cancelled, flaky, unavailable, or failed checks;
- never convert an assumption into a completion claim;
- never broaden scope to make progress appear complete;
- never regenerate valid work merely because a session restarted;
- never silently repair an architecture conflict by choosing one side;
- never merge or approve your own task;
- never begin the next task until the current task is externally reviewed, merged, read back from `main`, and recorded `APPROVED_COMPLETE`.

## Required result display

At every stop, display one truthful top-level state:

```text
WORKING
PENDING_EXTERNAL_CHECKS
PENDING_OWNER_ACTION
READY_FOR_REVIEW
READY_FOR_OWNER_MERGE
BLOCKED_AUTHORIZATION
BLOCKED_DEPENDENCY
BLOCKED_ARCHITECTURE
BLOCKED_CONFLICT
BLOCKED_ENVIRONMENT
FAILED_VALIDATION
APPROVED_COMPLETE
```

Then report only the facts needed for review:

- active task, branch, HEAD, and PR;
- completed and incomplete authorized items;
- changed paths and scope status;
- exact tests/checks and results;
- blockers, pending external actions, or owner-only decisions;
- exact next repository-backed action;
- confirmation that no later task was started.

Do not ask for another pasted task prompt. When safe continuation is possible, the owner's next chat message remains only `continue`.

## Non-negotiable repository rules

- Codex is the coding worker, not the product owner, autonomous architect, reviewer, approver, merger, or task selector.
- Never select or start another task automatically.
- Never create duplicate files, folders, prompts, plans, indexes, task records, checkpoints, reports, implementation roots, modules, workflows, schemas, migration chains, branches, or PRs.
- Preserve all valid user-authored work.
- Never delete, rename, move, overwrite, reset, clean, stash, discard, or rewrite work unless the active task explicitly authorizes that exact action and recovery path.
- Do not edit the same branch, PR, schema, contract, migration chain, shared package, workflow, or evidence currently owned by another active worker.
- Executable implementation belongs only under `Codex Code/Implementation/`, except GitHub-required workflow files explicitly authorized by the task contract.
- Task evidence belongs only under `Codex Code/Tasks/<TASK-ID>/`.
- Prompt authority belongs only under `Codex Code/Prompts/`.
- Do not expose, print, store, or commit secrets, credentials, tokens, private keys, production data, customer data, or unredacted sensitive logs.
- Pause only for owner-only browser authentication, 2FA, UAC/security confirmation, architecture decisions, repository settings, or merge approval.

A chat prompt cannot override repository authorization, contradict canonical architecture, or broaden the active task unless it is an explicit owner authorization followed by the required recorded prompt/task-contract amendment.