# REVISION RECORD — CODEX PROMPT CHAIN AND CONTINUATION

## Reason

The owner requires every Codex prompt to be stored in GitHub so interrupted work can resume from the exact stopping point. The owner also requires the current task to be fully completed before any next task begins.

## Problem corrected

Before this revision:

- prompts existed but there was no complete append-only prompt registry;
- there was no single active-task pointer for the word `continue`;
- there was no standardized checkpoint file;
- Codex could report an interruption but future sessions had no canonical GitHub resume algorithm;
- the no-next-task rule was present in separate task rules but not expressed as a dedicated terminal-state law.

## Correction

Added:

- `Codex Code/Prompts/README.md`;
- `Codex Code/Prompts/ACTIVE_TASK.md`;
- `Codex Code/Prompts/PROMPT_REGISTRY.md`;
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`;
- prompt/checkpoint templates;
- `Codex Code/Tasks/CX-R1-000/CHECKPOINT.md`;
- the full corrected `CX-R1-000` continuation prompt;
- `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`;
- prompt-chain completion and final-verification records;
- additive `1plan` extension.

## Required behavior after merge

```text
continue
→ read ACTIVE_TASK
→ read prompt chain
→ read checkpoint
→ verify live Git state
→ resume same task
→ finish entire authorized scope
→ pause only for external blocker/review
→ never activate next task until terminal completion
```

## Preservation

- Existing architecture is not moved or rewritten.
- Existing Codex implementation-root decision remains unchanged.
- Existing prompts remain in history.
- No application code is created.
- No source file, migration, task record, or architecture document is deleted.
- `CX-R1-001` remains unauthorized.

## Current state

```text
ACTIVE TASK: CX-R1-000
PREVIOUS RESULT: BLOCKED_ENVIRONMENT
CONTINUATION PROMPT: COMPLETE
CHECKPOINT: COMPLETE
PROMPT CHAIN: COMPLETE AS GOVERNANCE
NEXT TASK: NOT AUTHORIZED
```

PR and merge evidence are recorded after final validation.
