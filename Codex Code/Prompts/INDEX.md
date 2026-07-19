# CODEX PROMPT CHAIN — INDEX

## Start here

Read in this order:

1. repository `AGENTS.md`
2. [Current Task Completion Law](../CURRENT_TASK_COMPLETION_LAW.md)
3. [Fully Armored Prompt Requirements](../ARMORED_PROMPT_REQUIREMENTS.md)
4. [Armored Codex Master Prompt](../ARMORED_CODEX_MASTER_PROMPT.md)
5. [Prompt Chain Control Center](README.md)
6. [Active Task Pointer](ACTIVE_TASK.md)
7. [Prompt Registry](PROMPT_REGISTRY.md)
8. [Continue Protocol](CONTINUE_PROTOCOL.md)
9. active task's numbered prompts in registry order
10. active task's `TASK_RECORD.md`
11. active task's `TASK_CONTRACT.md`
12. active task's `CHECKPOINT.md`
13. exact master-plan/release/technology sources required by the current prompt
14. live Git branch, PR, workflow, check, code, migration, test, and worker state

## Current active task

```text
TASK: CX-R1-002
TITLE: CI, Quality, and Security Baseline
CURRENT PROMPT: CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md
TASK RECORD: ../Tasks/CX-R1-002/TASK_RECORD.md
TASK CONTRACT: ../Tasks/CX-R1-002/TASK_CONTRACT.md
CHECKPOINT: ../Tasks/CX-R1-002/CHECKPOINT.md
PREVIOUS TASK: CX-R1-001 = APPROVED_COMPLETE
WORK BRANCH: agent/cx-r1-002-ci-quality-security
CURRENT EXECUTION: BUILD COMPLETE CI, QUALITY, AND SECURITY BASELINE ONLY
CANONICAL IMPLEMENTATION ROOT: ../Implementation/
SOURCE/WORKFLOW CHANGES AUTHORIZED: YES, CX-R1-002 SCOPE ONLY
NEXT TASK CX-R1-003 AUTHORIZED: NO
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

## Completed task archive

### CX-R1-000

- Initial prompt: `../Tasks/CX-R1-000/PROMPT.md`
- Prompt 0002: [Continue after environment block](CX-R1-000/0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK.md)
- Prompt 0003: [Final armored continue and finish](CX-R1-000/0003-FINAL-ARMORED-CONTINUE-AND-FINISH.md)
- Prompt 0004: [Master SaaS sync continue and finish](CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md)
- Completion report: `../Tasks/CX-R1-000/COMPLETION_REPORT.md`
- External review: `../Tasks/CX-R1-000/REVIEW_RESULT.md`
- Terminal state: `APPROVED_COMPLETE`

### CX-R1-001

- Prompt 0001: [Workspace and Version Bootstrap](CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md)
- Task record: `../Tasks/CX-R1-001/TASK_RECORD.md`
- Task contract: `../Tasks/CX-R1-001/TASK_CONTRACT.md`
- Completion report: `../Tasks/CX-R1-001/COMPLETION_REPORT.md`
- External review: `../Tasks/CX-R1-001/REVIEW_RESULT.md`
- Merge record: `../Tasks/CX-R1-001/MERGE_RECORD.md`
- Terminal state: `APPROVED_COMPLETE`

## Current task prompt chain

### CX-R1-002

- Current Prompt 0001: [CI, Quality, and Security Baseline](CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md)
- Task record: `../Tasks/CX-R1-002/TASK_RECORD.md`
- Task contract: `../Tasks/CX-R1-002/TASK_CONTRACT.md`
- Checkpoint: `../Tasks/CX-R1-002/CHECKPOINT.md`

## Non-negotiable completion rule

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK
→ RUN ALL REQUIRED VALIDATIONS
→ PRODUCE ALL REQUIRED EVIDENCE
→ DRAFT PR
→ EXTERNAL REVIEW/CORRECTION OF THE SAME TASK
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

`continue` always resumes the active task from the latest verified checkpoint. It never means select the next task automatically. A blocker or ready-for-review state keeps the same task active.
