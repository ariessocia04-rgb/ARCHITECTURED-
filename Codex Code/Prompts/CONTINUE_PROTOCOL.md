# CODEX CONTINUATION PROTOCOL

## Canonical command and mode authority

The owner commands are:

```text
continue
sleep mode
deactivate sleep mode
stop sleep mode
```

Their complete operational semantics are defined in `Codex Code/Prompts/EXECUTION_MODE.md`.

`continue` means resume the task identified in `Codex Code/Prompts/ACTIVE_TASK.md` under manual `CONTINUE_MODE`. It is never permission to select another task automatically.

`sleep mode` arms scheduled continuation and external review for the same repository and Codex project/thread. It does not broaden the active task or authorize self-review, self-approval, self-merge, destructive work, or an unlisted next task.

`deactivate sleep mode` and `stop sleep mode` return to manual `CONTINUE_MODE`. Scheduled Codex runs must not modify code while the owner remains active. The external ChatGPT controller may re-arm sleep behavior only after at least 60 minutes without newer observable owner activity or an explicit hold, and only on its next hourly check.

## Mandatory resume algorithm

### Phase 0 — Resolve execution mode and model capacity

Read `Codex Code/Prompts/EXECUTION_MODE.md` before resolving the active task.

Verify:

```text
owner command or scheduled-run context
CONTINUE_MODE or SLEEP_MODE
manual owner activity or external-controller state
selected model
model availability or quota state
model-risk suitability for remaining work
reviewer-handoff path and state
```

Rules:

- In manual `CONTINUE_MODE`, proceed only because the owner issued `continue`.
- In a scheduled run while manual mode remains active, return `WAITING_FOR_OWNER_CONTINUE` without modifying code.
- In `SLEEP_MODE`, follow the active-task and reviewer-handoff priority in the execution-mode policy.
- After any model switch, re-read the full repository instruction chain.
- Preserve the same branch, PR, task, contract, checkpoint, tests, and evidence across model switches.
- Return `BLOCKED_MODEL_CAPACITY` when the available model cannot safely perform the remaining work.

### Phase 1 — Verify the repository

Codex must verify:

```text
current directory
Git repository root
git remote origin
default branch
latest main SHA
working tree state
active branches
open pull requests
current task branch
other active workers or worktrees
```

The repository must be `ariessocia04-rgb/ARCHITECTURED-`.

A temporary workspace containing only `work/` and `outputs/` is not the repository.

### Phase 2 — Resolve the active task

Read:

1. `Codex Code/Prompts/EXECUTION_MODE.md`;
2. `Codex Code/Prompts/ACTIVE_TASK.md`;
3. `Codex Code/Prompts/PROMPT_REGISTRY.md`;
4. active task `TASK_RECORD.md`;
5. active task `TASK_CONTRACT.md` when present;
6. active task `CHECKPOINT.md`;
7. active task `CHANGED_FILES.md` and evidence when present;
8. every valid prompt in sequence order;
9. `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md` when present.

Do not trust a task ID, mode, model, review state, branch, or completion claim inferred only from chat history.

### Phase 3 — Reconcile live state

Classify the actual task state:

```text
NOT_STARTED
INTERRUPTED_BEFORE_CHANGES
WORKTREE_CHANGES_PRESENT
COMMITTED_NOT_PUSHED
PUSHED_NO_PR
DRAFT_PR_OPEN
PR_CHECKS_PENDING
PR_CHECKS_FAILED
PR_REVIEW_CHANGES_REQUESTED
REVIEW_HANDOFF_FIX_REQUIRED
REVIEW_PASS_PENDING_OWNER
BLOCKED_ENVIRONMENT
BLOCKED_DEPENDENCY
BLOCKED_ARCHITECTURE
BLOCKED_REVIEW
BLOCKED_MODEL_CAPACITY
READY_FOR_REVIEW
READY_FOR_OWNER_MERGE
APPROVED_COMPLETE
```

Compare checkpoint and review claims against:

- Git status and diff;
- branch commits;
- remote branch;
- PR changed files and checks;
- review threads and operational reviewer handoff;
- migration history;
- test outputs;
- task evidence records;
- model availability and the model-risk gate;
- latest `main` and predecessor merge/read-back records.

When these disagree materially, return:

```text
BLOCKED_CONTINUATION_STATE
```

and report the exact difference. Never guess which state is correct.

### Phase 4 — Determine the resume point

Use this priority:

```text
AUTHORIZATION
→ REQUIRED READING
→ EXECUTION MODE
→ MODEL CAPACITY AND RISK
→ ACTIVE-WORKER CHECK
→ EXISTING-WORK CLASSIFICATION
→ REVIEW_HANDOFF
→ EXACT REVIEW CORRECTIONS
→ IMPLEMENTATION
→ TESTS
→ EXTERNAL CHECK WAIT/RECHECK
→ SECURITY/ACCESSIBILITY/RECOVERY REVIEW
→ TASK EVIDENCE
→ COMMIT/PUSH
→ DRAFT PR
→ READY_FOR_REVIEW
→ STOP
```

Completed verified items are not recreated.

Safe read-only checks and idempotent tests may be rerun to confirm state. Non-idempotent commands require explicit proof they have not already completed.

### Phase 5 — Reviewer-handoff behavior

The only operational reviewer handoff is:

```text
Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md
```

Behavior:

- no handoff: continue only the active task from its verified checkpoint;
- `REVIEW_IN_PROGRESS`: do not modify code; return `PENDING_EXTERNAL_CHECKS` or `PENDING_OWNER_ACTION` as applicable;
- `FIX_REQUIRED`: fix only exact findings that remain inside the active contract and allowed paths, rerun affected and contract-required tests, update the same branch/PR/checkpoint/evidence, return `READY_FOR_REVIEW`, and stop;
- `REVIEW_PASS_PENDING_OWNER`: do not modify code, merge, approve, or activate another task;
- `BLOCKED_REVIEW`: stop and report the exact conflict, missing evidence, or owner decision.

The operational handoff is not the terminal task `REVIEW_RESULT.md`. Never create a duplicate handoff.

### Phase 6 — Continue only the same task

Codex may continue only:

- the task in `ACTIVE_TASK.md`;
- the exact authorization scope;
- the exact allowed paths;
- the same branch/PR when they already exist;
- exact `FIX_REQUIRED` findings that are inside the active contract.

Do not create a second branch or second PR for the same task unless the checkpoint explicitly records that the old one was abandoned with reviewer and owner approval.

### Phase 7 — Five-minute check waiting

After a push or other action that triggers external checks, Codex may wait five minutes and recheck only when the environment and task contract allow it.

A single run may repeat the five-minute wait only within the documented run limit. Do not busy-loop, hide rate limits, or create repeated commits while waiting.

If checks remain pending, update the checkpoint, return `PENDING_EXTERNAL_CHECKS`, and stop. The next scheduled or manual run must read live state again.

### Phase 8 — Sleep-queue advancement

Sleep-mode advancement is forbidden unless an exact repository-backed owner-authorized queue exists.

Before starting a queued successor, verify all of the following:

```text
SUCCESSOR_EXPLICITLY_LISTED
SUCCESSOR_PROMPT_AND_CONTRACT_EXIST
PREDECESSOR_EXTERNAL_REVIEW_PASSED
PREDECESSOR_OWNER_MERGE_AUTHORIZED
PREDECESSOR_PR_MERGED
LATEST_MAIN_READ_BACK_VERIFIED
PREDECESSOR_REVIEW_RESULT_RECORDED
PREDECESSOR_MERGE_RECORD_RECORDED
PREDECESSOR_STATUS_APPROVED_COMPLETE
NO_ACTIVE_WORKER_OR_PATH_OVERLAP
NO_OWNER_ONLY_DECISION_OR_BLOCKER
```

If any item fails, do not advance. Return the exact pending or blocked state.

Task order in a plan or manifest is not automatic authorization.

### Phase 9 — Model fallback

Primary model preference is `GPT-5.6 Sol`. A fallback may be used only when it is actually available through the owner's Codex model selector or automation configuration.

A model switch must not:

- restart or duplicate the task;
- create a new branch or PR;
- weaken tests, security, evidence, or review;
- change architecture or scope;
- claim identical capability.

The repository preserves instructions and progress, not identical model skill.

A fallback may continue fully specified, non-destructive, in-scope work when it can safely meet the contract. Stop with `BLOCKED_MODEL_CAPACITY` for unresolved architecture, migrations, authentication/authorization/RLS, secrets, payment, privacy, security contracts, destructive changes, broad refactors, new unapproved dependencies, or unclear acceptance criteria.

Automatic model switching is not assumed unless configured in Codex. When manual selection is required, preserve state and return `PENDING_OWNER_ACTION` with the exact requested model action.

### Phase 10 — Write the checkpoint before every stop

Before stopping for any reason, update:

```text
Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
```

The checkpoint must state:

- exact execution mode;
- exact model used and whether fallback occurred;
- exact status;
- latest verified main SHA;
- current branch and HEAD;
- PR and check state;
- reviewer-handoff state;
- completed items;
- incomplete items;
- changed paths;
- tests already run and results;
- blocker and exact correction;
- first next command/action;
- whether continuation is safe;
- whether the next task is explicitly authorized;
- whether an authorized sleep queue exists and its verified next item.

## Stop states

```text
STOP_COMPLETE
STOP_READY_FOR_REVIEW
STOP_REVIEW_PASS_PENDING_OWNER
STOP_WAITING_FOR_OWNER_CONTINUE
STOP_PENDING_EXTERNAL_CHECKS
STOP_BLOCKED_ENVIRONMENT
STOP_BLOCKED_DEPENDENCY
STOP_BLOCKED_ARCHITECTURE
STOP_BLOCKED_REVIEW
STOP_BLOCKED_MODEL_CAPACITY
STOP_FAILED_VALIDATION
STOP_INTERRUPTED_SAFE_TO_CONTINUE
```

## Non-destructive continuation rules

- Never reset, clean, stash, checkout over, or discard uncommitted work without exact authorization.
- Never rewrite published history.
- Never regenerate an existing module because the session or model restarted.
- Never rerun a migration blindly.
- Never create root-level executable code trees outside `Codex Code/Implementation/`.
- Never copy the repository into a dated temporary workspace as a second source of truth.
- Never mark a task complete from checkpoint or review text alone; verify live evidence.
- Never treat `sleep mode` as unlimited task authorization.
- Never let Codex act as its own independent reviewer, approver, or merger.
