# CODEX CODE — MASTER INDEX

## Entry order

```text
1plan.md
→ applicable validated 1plan extension
→ README.md
→ revise.md
→ index.md
→ Implementation Planning/Release 1 MVP/INDEX.md
→ Codex Code/README.md
→ Codex Code/Implementation/README.md
→ Codex Code/CURRENT_TASK_COMPLETION_LAW.md
→ Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
→ Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
→ Codex Code/Prompts/INDEX.md
→ Codex Code/Prompts/ACTIVE_TASK.md
→ current prompt chain
→ current task contract and checkpoint
→ current code and live Git/PR/test state
```

## Canonical implementation

1. [Canonical Implementation Root](Implementation/README.md)

All executable source code, migrations, tests, infrastructure, configuration, local-agent code, and implementation runbooks produced by Codex belong under `Codex Code/Implementation/`.

## Control documents

1. [Control Center README](README.md)
2. [Current Task Completion Law](CURRENT_TASK_COMPLETION_LAW.md)
3. [Fully Armored Prompt Requirements](ARMORED_PROMPT_REQUIREMENTS.md)
4. [Armored Codex Master Prompt](ARMORED_CODEX_MASTER_PROMPT.md)
5. [Task Storage and Handoff Rules](TASK_STORAGE_AND_HANDOFF_RULES.md)
6. [Prompt Chain Index](Prompts/INDEX.md)
7. [Active Task Pointer](Prompts/ACTIVE_TASK.md)
8. [Prompt Registry](Prompts/PROMPT_REGISTRY.md)
9. [Continue Protocol](Prompts/CONTINUE_PROTOCOL.md)
10. [Task Registry](Tasks/README.md)
11. [Evidence Registry](Evidence/README.md)
12. [Review Registry](Reviews/README.md)

## Current active task

```text
TASK ID: CX-R1-002
TASK: CI, Quality, and Security Baseline
CURRENT PROMPT: Prompts/CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md
TASK RECORD: Tasks/CX-R1-002/TASK_RECORD.md
CHECKPOINT: Tasks/CX-R1-002/CHECKPOINT.md
SOURCE-CODE AUTHORIZATION: YES, CX-R1-002 SCOPE ONLY
GITHUB ACTIONS EXCEPTION: .github/workflows/ ONLY
NEXT TASK CX-R1-003 AUTHORIZED: NO
```

## Completion rule

```text
FINISH CURRENT AUTHORIZED TASK
→ ALL REQUIRED VALIDATIONS AND EVIDENCE
→ EXTERNAL REVIEW/CORRECTION OF SAME TASK
→ AUTHORIZED MERGE/MAIN READ-BACK WHEN APPLICABLE
→ APPROVED_COMPLETE
→ ONLY OWNER MAY ACTIVATE ANOTHER TASK
```

`continue` always resumes the active task from the latest verified checkpoint. It never selects the next task automatically.

## Storage rule

```text
Codex Code/Implementation/ = actual application code
Codex Code/Prompts/        = append-only prompt history and continuation controls
Codex Code/Tasks/          = contracts, checkpoints and task evidence
Codex Code/Evidence/       = cross-task evidence
Codex Code/Reviews/        = reviewer records
```

Root-level parallel implementation trees are prohibited.

Task/prompts/evidence folders must not contain copied executable source trees.

## Status

```text
CANONICAL IMPLEMENTATION ROOT: PRESENT AS VERSION-PINNED CX-R1-001 FOUNDATION
CURRENT-TASK COMPLETION LAW: PRESENT
FULLY ARMORED PROMPT STANDARD: PRESENT
ARMORED MASTER PROMPT: PRESENT
APPEND-ONLY PROMPT CHAIN: PRESENT
CURRENT ACTIVE PROMPT: CX-R1-002 / 0001
TASK STORAGE MODEL: PRESENT
EVIDENCE MODEL: PRESENT
REVIEW MODEL: PRESENT
DUPLICATE APPLICATION CODE: PROHIBITED
APPLICATION CODE: CX-R1-001 FOUNDATION PRESENT
IMPLEMENTATION AUTHORIZATION: CX-R1-002 CI/QUALITY/SECURITY SCOPE ONLY
```
