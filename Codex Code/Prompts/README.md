# CODEX PROMPT CHAIN — CONTROL CENTER

## Purpose

This folder is the canonical GitHub source for prompts sent to Codex.

It allows the same task to continue safely across interrupted sessions, environment failures, token/context limits, worker restarts, review corrections, and new follow-up instructions without restarting completed work or creating duplicate code.

```text
OWNER/REVIEWER DEFINES OR CORRECTS THE CURRENT TASK PROMPT
→ PROMPT IS STORED AS THE NEXT APPEND-ONLY SEQUENCE
→ PROMPT REGISTRY MARKS THE CURRENT PROMPT
→ ACTIVE TASK POINTER IDENTIFIES THE ONLY RESUMABLE TASK
→ CODEX READS COMPLETION LAW AND FULL ARMOR REQUIREMENTS
→ CODEX READS THE COMPLETE VALID PROMPT CHAIN
→ CODEX READS TASK CONTRACT AND LATEST CHECKPOINT
→ CODEX RECONCILES LIVE GIT/PR/CODE/MIGRATION/TEST STATE
→ CODEX CONTINUES FROM THE FIRST INCOMPLETE AUTHORIZED ITEM
→ CODEX FINISHES THE ENTIRE CURRENT TASK
→ EXTERNAL REVIEW/CORRECTION REMAINS THE SAME TASK
→ APPROVED_COMPLETE BEFORE ANOTHER TASK CAN BE ACTIVATED
```

## Required prompt armor

Every prompt must follow:

- `../CURRENT_TASK_COMPLETION_LAW.md`;
- `../ARMORED_PROMPT_REQUIREMENTS.md`;
- `../ARMORED_CODEX_MASTER_PROMPT.md`;
- `Templates/PROMPT_ENTRY_TEMPLATE.md`;
- the exact task contract and current repository authorities.

Every prompt defines Role, Goal, Background, Current State, Sources, Authorization, Tools, Paths, Existing-Work Classification, Complete Steps, Architecture/Security/UX Rules, Tests, Evidence, Git/PR Rules, Blockers, Final Report, Completion, and Stop behavior.

A short prompt is not valid authority when those sections are missing.

## Canonical locations

```text
Codex Code/
├── Implementation/                  # all executable application code
├── Prompts/                         # prompt history, current pointer and continuation control
├── Tasks/<TASK-ID>/                 # task contract, checkpoint, evidence, review, merge record
├── Evidence/
└── Reviews/
```

## Prompt folder structure

```text
Codex Code/Prompts/
├── INDEX.md
├── README.md
├── ACTIVE_TASK.md
├── PROMPT_REGISTRY.md
├── CONTINUE_PROTOCOL.md
├── Templates/
│   ├── PROMPT_ENTRY_TEMPLATE.md
│   └── CHECKPOINT_TEMPLATE.md
└── <TASK-ID>/
    ├── 0001-INITIAL-....md
    ├── 0002-CONTINUE-....md
    ├── 0003-CORRECTION-....md
    └── 0004-....md
```

## Append-only prompt rule

- Never overwrite an earlier prompt to hide history.
- Store each material prompt as the next zero-padded sequence number.
- Corrections explicitly identify the prompt/rule they supersede.
- Earlier prompts remain historical evidence.
- The latest valid prompt does not erase completed work.
- Prompts may refine the same active task but may not silently authorize another task.
- One prompt chain belongs to one exact task ID.
- Do not create a new prompt merely to restate an existing complete instruction; new prompts require a material correction, continuation state, review fix, or recovery requirement.

## Current-task completion rule

```text
ONE ACTIVE TASK
→ COMPLETE FULL AUTHORIZED SCOPE
→ RUN ALL REQUIRED CHECKS
→ PRODUCE ALL REQUIRED EVIDENCE
→ EXTERNAL REVIEW/CORRECTION OF SAME TASK
→ AUTHORIZED MERGE AND MAIN READ-BACK WHEN APPLICABLE
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

Codex must not stop after one file, one phase, one successful command, or partial tests when it can continue safely.

A real blocker pauses the same task and requires an exact continuation checkpoint. It never advances the task pointer.

## Continuation rule

When the owner says `continue`, Codex does not ask for the old prompt again and does not restart the project.

Codex reads, in order:

1. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`;
2. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`;
3. `Codex Code/Prompts/ACTIVE_TASK.md`;
4. `Codex Code/Prompts/PROMPT_REGISTRY.md`;
5. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`;
6. every valid prompt for the active task, in sequence order;
7. the active task's `TASK_RECORD.md`;
8. the active task's `TASK_CONTRACT.md` when present;
9. the active task's `CHECKPOINT.md`;
10. current master-plan/application/SaaS/design/release authorities required by the current prompt;
11. latest `main`, active task branch, commits, diff, PR, checks, migrations, tests, and implementation state.

It then resumes from the first incomplete authorized action and continues through the full current scope.

## Source-code boundary

All executable source code remains only under:

```text
Codex Code/Implementation/
```

Prompts never authorize competing root-level `apps/`, `packages/`, `supabase/`, `tests/`, `infrastructure/`, or implementation `docs/` trees.

Prompt/task/evidence folders do not contain copied source code.

## Safety

A continuation must never:

- repeat a non-idempotent migration or business operation blindly;
- recreate already completed files or modules;
- reset or discard unreviewed work;
- create a duplicate branch or PR for the same current task;
- switch to a new task automatically;
- merge or approve its own PR;
- treat stale chat text as newer than the merged prompt chain;
- continue when checkpoint and live repository state materially conflict;
- hide failed tests or weaken protections;
- expose secrets or sensitive data.

A material continuation conflict returns `BLOCKED_CONTINUATION_STATE` with exact evidence.