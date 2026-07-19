# GOV-CX-001 Prompt 0001 — Canonical Continue, Sleep, Review, and Model Fallback

## Role

Act as the controlled Codex governance worker for `ariessocia04-rgb/ARCHITECTURED-`.

## Objective

Verify, complete, and validate the repository-backed operational control system so the owner normally uses only:

```text
continue
sleep mode
deactivate sleep mode
stop sleep mode
```

The strict architecture, active-task, no-duplicate, no-deletion, review, evidence, security, and owner-approval plan must remain intact across manual continuation, scheduled sleep-mode runs, reviewer corrections, interruptions, and model switches.

## Required reading before any change

Read in the exact order required by `AGENTS.md`, including:

- `1plan.md`;
- `1plan-EXTENSIONS_INDEX.md`;
- `1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md`;
- `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`;
- `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`;
- `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`;
- `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`;
- `Codex Code/Prompts/INDEX.md`;
- `Codex Code/Prompts/EXECUTION_MODE.md`;
- `Codex Code/Prompts/ACTIVE_TASK.md`;
- `Codex Code/Prompts/PROMPT_REGISTRY.md`;
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`;
- this task record, contract, checkpoint, and live Git/GitHub state.

## Authorized branch and PR

```text
branch: governance/codex-execution-modes
pull_request: create or update exactly one draft PR to main
```

Do not create another task branch or PR.

## Authorized scope

Verify and make only the smallest missing corrections needed to connect:

1. repository entry commands and reading order;
2. manual `CONTINUE_MODE`;
3. scheduled `SLEEP_MODE`;
4. deactivation back to manual mode;
5. external ChatGPT reviewer handoff;
6. exact `FIX_REQUIRED` correction flow;
7. five-minute bounded CI recheck behavior inside a Codex run;
8. owner-authorized sleep queue gates;
9. model-capacity preservation and fallback risk gates;
10. truthful result states;
11. CX-R1-002 external-review and merge closure;
12. prompt, task, plan-extension, and index traceability.

## Allowed paths

```text
AGENTS.md
1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md
1plan-EXTENSIONS_INDEX.md
Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
Codex Code/Prompts/EXECUTION_MODE.md
Codex Code/Prompts/CONTINUE_PROTOCOL.md
Codex Code/Prompts/ACTIVE_TASK.md
Codex Code/Prompts/INDEX.md
Codex Code/Prompts/PROMPT_REGISTRY.md
Codex Code/Prompts/GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
Codex Code/Tasks/GOV-CX-001/**
Codex Code/Tasks/CX-R1-002/REVIEW_RESULT.md
Codex Code/Tasks/CX-R1-002/MERGE_RECORD.md
Codex Code/Reviews/GOV-CX-001/REVIEW_HANDOFF.md
```

A path may be changed only when necessary. Do not create appearance-only evidence files.

## Forbidden scope

- No product or application code.
- No database schema or migration.
- No dependency installation or version change.
- No product UI, API, event, queue, printing, billing, tenant, role, or security implementation.
- No CX-R1-003 activation or implementation.
- No direct edit to `main`.
- No duplicate policy, prompt, task, review handoff, branch, PR, plan, index, report, or implementation root.
- No deletion, rename, relocation, force-push, reset, clean, stash, or history rewrite.
- No self-review, self-approval, or merge.

## Model fallback rule

Primary preference is `GPT-5.6 Sol`. If it is unavailable, preserve the same task, branch, commits, checkpoint, and PR. Use only an actually available owner-selected or automation-configured Codex model that can safely satisfy this fully specified governance task.

Do not claim different models have identical skill. Stop with `BLOCKED_MODEL_CAPACITY` if the fallback cannot safely reason about canonical-source conflicts, authorization, security boundaries, or repository reconciliation.

## Required validation

Run and record factual results for all applicable checks:

```text
git status --short
git diff --check
repository path and duplicate search
Markdown formatting for changed Markdown files
link/path existence checks for every newly referenced canonical path
prompt registry uniqueness and task-sequence uniqueness
active-task pointer consistency
CX-R1-002 merge-SHA and terminal-record consistency
review-handoff path uniqueness
secret scan applicable to changed files
pnpm install --frozen-lockfile
pnpm ci:check
```

If a command is unavailable or inappropriate, record the exact reason instead of claiming it passed.

## Acceptance criteria

- `continue` is repository-backed and requires no repeated task-prompt paste.
- `sleep mode` has a single canonical safe loop.
- deactivation returns to manual continuation, with hourly external-controller re-arm semantics documented truthfully.
- Codex reads the reviewer handoff before correction.
- ChatGPT review and Codex correction cannot modify the same active work simultaneously.
- no later task starts without the exact sleep-queue prerequisites.
- model switching preserves progress and strict controls without promising identical capability.
- CX-R1-002 is factually closed as `APPROVED_COMPLETE` with actual merge evidence.
- all indexes and pointers resolve to one canonical source for each responsibility.
- no product code or duplicate authority is introduced.

## Stop rule

After validation, update the same task checkpoint and evidence, commit and push to the same branch, open or update the one draft PR, then return exactly one truthful state:

```text
READY_FOR_REVIEW
READY_FOR_OWNER_MERGE
BLOCKED_AUTHORIZATION
BLOCKED_CONFLICT
BLOCKED_ENVIRONMENT
BLOCKED_MODEL_CAPACITY
FAILED_VALIDATION
```

Stop before merge. Do not start CX-R1-003.
