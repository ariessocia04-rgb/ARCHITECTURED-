# CODEX PROMPT CHAIN — INDEX

## Start here

Read in this order:

1. [Current Task Completion Law](../CURRENT_TASK_COMPLETION_LAW.md)
2. [Fully Armored Prompt Requirements](../ARMORED_PROMPT_REQUIREMENTS.md)
3. [Armored Codex Master Prompt](../ARMORED_CODEX_MASTER_PROMPT.md)
4. [Prompt Chain Control Center](README.md)
5. [Active Task Pointer](ACTIVE_TASK.md)
6. [Prompt Registry](PROMPT_REGISTRY.md)
7. [Continue Protocol](CONTINUE_PROTOCOL.md)
8. active task's numbered prompts in registry order
9. active task's `TASK_RECORD.md`
10. active task's `TASK_CONTRACT.md` when present
11. active task's `CHECKPOINT.md`
12. exact master-plan/application/SaaS/design/release sources required by the current prompt
13. live Git branch, PR, code, migration, test, and worker state

## Current active task

```text
TASK: CX-R1-000
TITLE: Repository Safety and Live-State Verification
CURRENT PROMPT: CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md
CHECKPOINT: ../Tasks/CX-R1-000/CHECKPOINT.md
PREVIOUS RESULT: BLOCKED_ENVIRONMENT
CURRENT CONTINUATION: RECOVER REAL CHECKOUT AND FINISH COMPLETE READ-ONLY VERIFICATION
MASTER SYNC: ../../1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
SOURCE CODE AUTHORIZED: NO
NEXT TASK CX-R1-001 AUTHORIZED: NO
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
- [Merge Record](MERGE_RECORD.md)
- [Main Read-Back](MAIN_READBACK.md)

## Current task prompt chain

- Historical initial prompt: `../Tasks/CX-R1-000/PROMPT.md`
- Historical Prompt 0002: [Continue after environment block](CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md)
- Historical Prompt 0003: [Final armored continue and finish](CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md)
- Current Prompt 0004: [Master SaaS sync continue and finish](CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md)
- Current checkpoint: `../Tasks/CX-R1-000/CHECKPOINT.md`

## Non-negotiable completion rule

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK
→ RUN ALL REQUIRED VALIDATIONS
→ PRODUCE ALL REQUIRED EVIDENCE
→ EXTERNAL REVIEW/CORRECTION OF THE SAME TASK
→ AUTHORIZED MERGE AND MAIN READ-BACK WHEN APPLICABLE
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

`continue` always resumes the active task from the latest verified checkpoint. It never means select the next task automatically.

A blocker or ready-for-review state keeps the same task active.