# CURRENT CODEX PROMPT — DESIGN REFERENCE

## PURPOSE

This file gives designers, architects, reviewers, and future prompt authors one Design-folder reference to the currently active Codex prompt without creating a duplicate executable prompt.

## CURRENT AUTHORITY

```yaml
active_task_id: GOV-CONTROL-001
active_task_title: Repository-Controlled Continue, Sleep Mode, and Model Fallback
current_prompt_sequence: 0001
current_prompt_type: GOVERNANCE_RECONCILIATION
current_prompt_status: CURRENT
current_prompt_path: Codex Code/Prompts/GOV-CONTROL-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
active_pointer_path: Codex Code/Prompts/ACTIVE_TASK.md
prompt_registry_path: Codex Code/Prompts/PROMPT_REGISTRY.md
checkpoint_path: Codex Code/Tasks/GOV-CONTROL-001/CHECKPOINT.md
task_contract_path: Codex Code/Tasks/GOV-CONTROL-001/TASK_CONTRACT.md
prompt_design_standard: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: governance/activate-cx-r1-002
pull_request: 17
next_task_authorized: false
```

## CURRENT PROMPT ROLE

Codex is the controlled governance reconciler for existing PR #17. It must preserve merged PR #18 and every unique valid permanent control while completing one canonical repository-backed method for manual `continue`, `sleep mode`, deactivation, reviewer handoff, and safe owner-approved model fallback.

It is not authorized to act as:

- Product Owner or autonomous Architect;
- product, business, UI, database, observability, or deployment implementer;
- external reviewer or approver;
- merger;
- later-task selector;
- creator of another branch or PR for this work.

## CURRENT PROMPT GOAL

```text
FETCH LATEST ORIGIN/MAIN
→ VERIFY MERGED PR #18
→ COMPARE AND RECONCILE EXISTING PR #17
→ PRESERVE ALL UNIQUE VALID WORK
→ COMPLETE ONE CANONICAL CONTINUE/SLEEP/REVIEW-HANDOFF/MODEL-FALLBACK METHOD
→ RUN ALL AFFECTED VALIDATIONS
→ UPDATE SAME PR #17
→ RETURN READY_FOR_OWNER_MERGE
→ STOP
```

## DESIGN-GATE BOUNDARY

No product design or implementation is authorized. This task changes repository governance and prompt-control behavior only.

## EXECUTION RULE

Always open and execute the canonical prompt from:

```text
Codex Code/Prompts/GOV-CONTROL-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
```

This Design reference is not an executable replacement and must not be treated as newer authority than the canonical prompt chain.

## COMPLETION RULE

```text
FINISH THE ENTIRE GOV-CONTROL-001 SCOPE
→ RUN EVERY REQUIRED VALIDATION
→ CREATE FACTUAL EVIDENCE
→ UPDATE SAME PR #17
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
```

After a full report or genuine external blocker:

```text
STOP
```

`STOP` does not authorize `CX-R1-003` or any later task.

## UPDATE RULE

When another prompt becomes current:

- preserve the current prompt as append-only historical evidence;
- create the next numbered prompt under `Codex Code/Prompts/<TASK-ID>/`;
- update the canonical active pointer and registry;
- update this reference to the new exact canonical path;
- never copy the full executable prompt into this Design folder.

## STATUS

```text
CURRENT PROMPT REFERENCE: SYNCHRONIZED
FULL PROMPT COPIED HERE: NO
DUPLICATE EXECUTABLE AUTHORITY CREATED: NO
PREVIOUS IMPLEMENTATION TASK CX-R1-002: MERGED IN PR #18
ACTIVE TASK: GOV-CONTROL-001
CURRENT PROMPT: 0001
PRODUCT SOURCE CODE AUTHORIZED: NO
NEW BRANCH OR PR AUTHORIZED: NO
NEXT TASK AUTHORIZED: NO
```
