# 1PLAN EXTENSION — CODEX PROMPT CHAIN AND CONTINUATION

## Authority

`1plan.md` remains the master source of truth. This additive extension records the owner-approved persistent prompt-chain and continuation mechanism for Codex.

## Owner intent

Every Codex prompt is stored in GitHub so work can continue across interrupted sessions without relying on chat memory.

When the owner says `continue`, Codex must know:

- the exact active task;
- the complete prompt history;
- the latest valid instruction;
- the last verified checkpoint;
- what was completed;
- what remains incomplete;
- the correct branch and PR;
- the exact first next action;
- that the next task is forbidden until the current task is fully complete.

## Canonical paths

```text
Codex Code/Prompts/                    = append-only prompt chain
Codex Code/Prompts/ACTIVE_TASK.md      = only task `continue` may resume
Codex Code/Prompts/PROMPT_REGISTRY.md  = prompt sequence/status registry
Codex Code/Prompts/CONTINUE_PROTOCOL.md = live-state reconciliation and resume rules
Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md = exact interruption/resume state
Codex Code/CURRENT_TASK_COMPLETION_LAW.md = no-next-task completion gate
Codex Code/Implementation/             = all executable source code
```

## Required lifecycle

```text
OWNER CREATES/APPROVES PROMPT
→ STORE NEXT NUMBERED PROMPT IN GITHUB
→ REGISTER PROMPT
→ POINT ACTIVE_TASK TO EXACT TASK/PROMPT/CHECKPOINT
→ CODEX READS FULL CHAIN AND LIVE REPOSITORY STATE
→ CODEX CONTINUES SAME TASK
→ CODEX COMPLETES FULL AUTHORIZED SCOPE
→ CODEX CHECKPOINTS ONLY FOR EXTERNAL BLOCKER/REVIEW
→ REVIEW/CORRECTION REMAINS SAME TASK
→ APPROVED_COMPLETE
→ OWNER MAY ACTIVATE NEXT TASK
```

## No-premature-next-task rule

A task may not be replaced by the next manifest task because one step, file, command, or phase finished.

These are not completion:

```text
BLOCKED
INTERRUPTED
FAILED_VALIDATION
READY_FOR_REVIEW
WAITING_FOR_OWNER
```

Only an externally recorded terminal state may release the active-task pointer:

```text
APPROVED_COMPLETE
OWNER_CANCELLED
OWNER_SUPERSEDED_WITH_MIGRATION_PLAN
```

## Append-only rule

- Earlier prompts remain as immutable history.
- Corrections use a new sequence number and explicitly state what they supersede.
- A prompt never silently authorizes another task.
- A stale chat message cannot override the latest merged GitHub prompt chain.
- Completed code is not recopied or regenerated after interruption.

## Current active state

```text
ACTIVE TASK: CX-R1-000
CURRENT PROMPT: 0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK
CURRENT CHECKPOINT: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
PREVIOUS RESULT: BLOCKED_ENVIRONMENT
CONTINUATION SAFE: YES, FROM THE REAL GIT CHECKOUT
SOURCE CODE AUTHORIZED: NO
NEXT TASK CX-R1-001 AUTHORIZED: NO
```

## Status

```text
PROMPT CHAIN: DEFINED
ACTIVE TASK POINTER: DEFINED
CONTINUE PROTOCOL: DEFINED
CHECKPOINT MODEL: DEFINED
CURRENT TASK COMPLETION LAW: DEFINED
APPLICATION CODE CREATED: NO
```
