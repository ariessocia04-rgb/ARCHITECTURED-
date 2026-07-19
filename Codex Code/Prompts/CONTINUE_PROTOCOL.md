# CODEX CONTINUATION PROTOCOL

## Trigger

The owner command `continue` means resume the task identified in `Codex Code/Prompts/ACTIVE_TASK.md`.

It is never permission to select another task automatically.

## Mandatory resume algorithm

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
```

The repository must be `ariessocia04-rgb/ARCHITECTURED-`.

A temporary workspace containing only `work/` and `outputs/` is not the repository.

### Phase 2 — Resolve the active task

Read:

1. `Codex Code/Prompts/ACTIVE_TASK.md`;
2. `Codex Code/Prompts/PROMPT_REGISTRY.md`;
3. active task `TASK_RECORD.md`;
4. active task `TASK_CONTRACT.md` when present;
5. active task `CHECKPOINT.md`;
6. every valid prompt in sequence order.

Do not trust a task ID inferred only from chat history.

### Phase 3 — Reconcile live state

Classify the actual task state:

```text
NOT_STARTED
INTERRUPTED_BEFORE_CHANGES
WORKTREE_CHANGES_PRESENT
COMMITTED_NOT_PUSHED
PUSHED_NO_PR
DRAFT_PR_OPEN
PR_CHECKS_FAILED
PR_REVIEW_CHANGES_REQUESTED
BLOCKED_ENVIRONMENT
BLOCKED_DEPENDENCY
BLOCKED_ARCHITECTURE
READY_FOR_REVIEW
APPROVED_COMPLETE
```

Compare checkpoint claims against:

- Git status and diff;
- branch commits;
- remote branch;
- PR changed files and checks;
- migration history;
- test outputs;
- task evidence records.

When these disagree materially, return:

```text
BLOCKED_CONTINUATION_STATE
```

and report the exact difference. Never guess which state is correct.

### Phase 4 — Determine the resume point

Resume from the first incomplete authorized item in this order:

```text
AUTHORIZATION
→ REQUIRED READING
→ ACTIVE-WORKER CHECK
→ EXISTING-WORK CLASSIFICATION
→ IMPLEMENTATION
→ TESTS
→ SECURITY/ACCESSIBILITY/RECOVERY REVIEW
→ TASK EVIDENCE
→ COMMIT/PUSH
→ DRAFT PR
→ REVIEW CORRECTIONS
→ STOP
```

Completed verified items are not recreated.

Safe read-only checks and idempotent tests may be rerun to confirm state. Non-idempotent commands require explicit proof they have not already completed.

### Phase 5 — Continue only the same task

Codex may continue only:

- the task in `ACTIVE_TASK.md`;
- the exact authorization scope;
- the exact allowed paths;
- the same branch/PR when they already exist.

Do not create a second branch or second PR for the same task unless the checkpoint explicitly records that the old one was abandoned with reviewer approval.

### Phase 6 — Write the checkpoint before every stop

Before stopping for any reason, update:

```text
Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md
```

The checkpoint must state:

- exact status;
- latest verified main SHA;
- current branch and HEAD;
- PR and check state;
- completed items;
- incomplete items;
- changed paths;
- tests already run and results;
- blocker and exact correction;
- first next command/action;
- whether continuation is safe;
- whether the next task is authorized.

## Stop states

```text
STOP_COMPLETE
STOP_READY_FOR_REVIEW
STOP_BLOCKED_ENVIRONMENT
STOP_BLOCKED_DEPENDENCY
STOP_BLOCKED_ARCHITECTURE
STOP_FAILED_VALIDATION
STOP_INTERRUPTED_SAFE_TO_CONTINUE
```

## Non-destructive continuation rules

- Never reset, clean, stash, checkout over, or discard uncommitted work without exact authorization.
- Never rewrite published history.
- Never regenerate an existing module just because the session restarted.
- Never rerun a migration blindly.
- Never create root-level executable code trees outside `Codex Code/Implementation/`.
- Never copy the repository into the dated temporary workspace as a second source of truth.
- Never mark a task complete from checkpoint text alone; verify live evidence.
