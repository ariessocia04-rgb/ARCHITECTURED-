# CODEX PROMPT CHAIN — INDEX

## Start here

Read in this order:

1. [Current Task Completion Law](../CURRENT_TASK_COMPLETION_LAW.md)
2. [Prompt Chain Control Center](README.md)
3. [Active Task Pointer](ACTIVE_TASK.md)
4. [Prompt Registry](PROMPT_REGISTRY.md)
5. [Continue Protocol](CONTINUE_PROTOCOL.md)
6. Active task's numbered prompts in registry order
7. Active task's `TASK_RECORD.md`
8. Active task's `TASK_CONTRACT.md` when present
9. Active task's `CHECKPOINT.md`
10. Live Git branch, PR, code, migration, test, and worker state

## Current active task

```text
TASK: CX-R1-000
CURRENT PROMPT: CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md
CHECKPOINT: ../Tasks/CX-R1-000/CHECKPOINT.md
PREVIOUS RESULT: BLOCKED_ENVIRONMENT
NEXT TASK AUTHORIZED: NO
```

## Control files

- [Prompt README](README.md)
- [Active Task](ACTIVE_TASK.md)
- [Prompt Registry](PROMPT_REGISTRY.md)
- [Continue Protocol](CONTINUE_PROTOCOL.md)
- [Prompt Entry Template](Templates/PROMPT_ENTRY_TEMPLATE.md)
- [Checkpoint Template](Templates/CHECKPOINT_TEMPLATE.md)
- [Completion Record](COMPLETION_RECORD.md)
- [Final Verification](FINAL_VERIFICATION.md)

## Current task prompt chain

- Historical initial prompt: `../Tasks/CX-R1-000/PROMPT.md`
- Current corrected prompt: [0002 — Continue after environment block](CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md)
- Current checkpoint: `../Tasks/CX-R1-000/CHECKPOINT.md`

## Non-negotiable rule

```text
FINISH CURRENT TASK
→ EXTERNAL REVIEW/CORRECTION OF SAME TASK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE NEXT TASK
```

`continue` always resumes the active task. It never means select the next task automatically.
