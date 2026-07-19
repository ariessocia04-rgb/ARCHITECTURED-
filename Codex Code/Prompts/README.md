# CODEX PROMPT CHAIN — CONTROL CENTER

## Purpose

This folder is the canonical GitHub source for prompts sent to Codex.

It exists so implementation can continue safely across interrupted sessions, closed conversations, environment failures, token limits, worker restarts, and new follow-up instructions without starting the task again or duplicating code.

```text
OWNER/REVIEWER CREATES PROMPT
→ PROMPT IS STORED IN GITHUB
→ ACTIVE TASK POINTER IDENTIFIES THE CURRENT TASK
→ CODEX READS THE COMPLETE PROMPT CHAIN
→ CODEX READS THE LATEST CHECKPOINT
→ CODEX INSPECTS LIVE BRANCH/PR/CODE STATE
→ CODEX CONTINUES FROM THE FIRST INCOMPLETE STEP
→ CODEX WRITES A NEW CHECKPOINT BEFORE STOPPING
```

## Canonical locations

```text
Codex Code/
├── Implementation/                  # all executable application code
├── Prompts/                         # all Codex prompt history and continuation control
├── Tasks/<TASK-ID>/                 # task contract, checkpoint, evidence, review, merge record
├── Evidence/
└── Reviews/
```

## Prompt folder structure

```text
Codex Code/Prompts/
├── README.md
├── ACTIVE_TASK.md
├── PROMPT_REGISTRY.md
├── CONTINUE_PROTOCOL.md
├── Templates/
│   ├── PROMPT_ENTRY_TEMPLATE.md
│   └── CHECKPOINT_TEMPLATE.md
└── <TASK-ID>/
    ├── 0001-INITIAL.md
    ├── 0002-CONTINUE-....md
    └── 0003-CORRECTION-....md
```

## Append-only prompt rule

- Never overwrite an earlier prompt to hide history.
- Store each new prompt as the next zero-padded sequence number.
- Corrections supersede earlier instructions only when the new prompt explicitly identifies the superseded prompt and changed rule.
- The latest valid prompt does not erase earlier completed work.
- Prompts may refine an active task but may not silently authorize another task.
- One prompt chain belongs to one exact task ID.

## Continuation rule

When the owner says `continue`, Codex must not ask for the old prompt again and must not restart the project.

Codex reads, in order:

1. `Codex Code/Prompts/ACTIVE_TASK.md`;
2. `Codex Code/Prompts/PROMPT_REGISTRY.md`;
3. every valid prompt for the active task, in sequence order;
4. `Codex Code/Tasks/<TASK-ID>/TASK_RECORD.md`;
5. `Codex Code/Tasks/<TASK-ID>/TASK_CONTRACT.md` when present;
6. `Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md`;
7. latest `main`, active task branch, commits, diff, PR, checks, migrations, tests, and implementation state.

It then resumes from the first incomplete authorized action.

## Source-code boundary

All executable source code remains only under:

```text
Codex Code/Implementation/
```

Prompts never authorize root-level `apps/`, `packages/`, `supabase/`, `tests/`, `infrastructure/`, or implementation `docs/` trees.

## Safety

A continuation must never:

- repeat a non-idempotent migration or business operation blindly;
- recreate already completed files or modules;
- reset or discard unreviewed work;
- switch to a new task automatically;
- merge its own PR;
- treat stale chat text as newer than the merged prompt chain;
- continue when the checkpoint, branch, and live repository conflict.

A conflict returns `BLOCKED_CONTINUATION_STATE` with exact evidence.
