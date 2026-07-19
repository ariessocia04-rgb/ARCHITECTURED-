# GOV-CONTROL-001 — Canonical Continue, Sleep Mode, and Model Fallback

## Owner authorization

The owner explicitly authorized this task and instructed ChatGPT to place the prompt in the repository so Codex can execute it through the normal `continue` command without another long pasted prompt.

## Role

Act as the controlled repository-governance implementer for existing PR #17 only.

## Mandatory reading order

Before any edit, read and obey:

1. `AGENTS.md`
2. `1plan.md`
3. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
4. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
5. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
6. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
7. `Codex Code/Prompts/INDEX.md`
8. `Codex Code/Prompts/ACTIVE_TASK.md`
9. `Codex Code/Prompts/PROMPT_REGISTRY.md`
10. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
11. this prompt
12. `Codex Code/Tasks/GOV-CONTROL-001/TASK_RECORD.md`
13. `Codex Code/Tasks/GOV-CONTROL-001/TASK_CONTRACT.md`
14. `Codex Code/Tasks/GOV-CONTROL-001/CHECKPOINT.md`
15. live Git, GitHub, branch, PR, changed-file, review, workflow-check, and working-tree state.

## Objective

Reconcile existing branch `governance/activate-cx-r1-002` and existing PR #17 against latest `origin/main` after merged PR #18, then finish one canonical repository-backed control system for:

- manual `continue`;
- `sleep mode`;
- `deactivate sleep mode` / `stop sleep mode`;
- one reviewer handoff path and correction loop;
- safe owner-approved model fallback;
- preservation of the strict plan and every no-duplicate, no-deletion, exact-path, active-worker, security, evidence, review, merge, and stop rule.

## Execution sequence

```text
VERIFY REAL REPOSITORY AND REMOTE
→ FETCH LATEST ORIGIN/MAIN
→ VERIFY PR #18 MERGE CONTENT
→ COMPARE EVERY PR #17 OVERLAP AGAINST LATEST MAIN
→ PRESERVE BOTH VALID CHANGE SETS
→ IDENTIFY ONE CANONICAL OWNER FOR EACH RULE
→ REMOVE OR SUPERSEDE ONLY OBSOLETE DUPLICATED CX-R1-002 ACTIVATION TEXT
→ IMPLEMENT CONTINUE/SLEEP/DEACTIVATION/REVIEW-HANDOFF/MODEL-FALLBACK STATE MACHINE
→ RUN ALL AFFECTED VALIDATIONS
→ UPDATE SAME BRANCH AND SAME PR #17
→ RETURN READY_FOR_OWNER_MERGE
→ STOP
```

## Required behavior

### Continue mode

`continue` always re-reads the repository authority and live state, passes the pre-coding gate, and resumes only the one active authorized task from its first incomplete verified item. It never asks for another long pasted prompt and never selects a later task automatically.

### Sleep mode

`sleep mode` activates the controlled automated review/fix loop but does not broaden scope. The worker must read the one canonical reviewer handoff for the active task when present.

- `FIX_REQUIRED`: fix only exact authorized findings, preserve valid work, rerun required tests, update the same branch/PR, return `READY_FOR_REVIEW`, and stop.
- `REVIEW_PASS_PENDING_OWNER`, `READY_FOR_OWNER_MERGE`, `PENDING_OWNER_ACTION`, or any `BLOCKED_*`: do not code, do not merge, do not start a later task, display the exact state, and stop.
- no review handoff and active task incomplete: continue only the active contract from the first incomplete verified checkpoint.

### Deactivation

`deactivate sleep mode` and `stop sleep mode` return to manual `CONTINUE_MODE`. External automation owns the hourly inactivity schedule; repository files must not pretend they can directly detect ChatGPT activity.

### Model fallback

When the preferred model reaches capacity, preserve all state and use only an owner-approved available fallback selected through Codex product controls. Every fallback model must re-read the repository and satisfy the same contract, tests, evidence, and security requirements. Never restart or duplicate work. Return `BLOCKED_MODEL_CAPACITY` when no approved capable model is available.

## Strict constraints

- Use existing branch `governance/activate-cx-r1-002`.
- Update existing PR #17.
- No new branch or PR.
- No force-push.
- No product code.
- No `CX-R1-003` work.
- No duplicate plan, prompt, task, state file, review file, checkpoint, report, workflow, implementation path, branch, or PR.
- No deletion, rename, relocation, simplification, consolidation, overwrite, reset, clean, stash, or history rewrite without exact authorization and recovery proof.
- Do not self-review, self-approve, or self-merge.
- Do not claim unsupported 5-minute or 30-minute scheduling.
- Do not claim repository text can directly switch Codex models.

## Required outputs

- reconciled canonical governance files;
- exactly one current execution-mode source if none already exists;
- exact reviewer handoff convention without empty appearance-only files;
- updated task checkpoint and changed-file evidence;
- updated same PR #17;
- validation results;
- final state `READY_FOR_OWNER_MERGE` or exact factual blocker.

Stop before merge.
