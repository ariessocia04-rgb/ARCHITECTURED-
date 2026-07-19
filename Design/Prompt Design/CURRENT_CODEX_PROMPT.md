# CURRENT CODEX PROMPT — DESIGN REFERENCE

## PURPOSE

This file gives designers, architects, reviewers, and future prompt authors one Design-folder reference to the currently active Codex prompt without creating a duplicate executable prompt.

## CURRENT AUTHORITY

```yaml
active_task_id: CX-R1-002
active_task_title: CI, Quality, and Security Baseline
current_prompt_sequence: 0001
current_prompt_type: INITIAL
current_prompt_status: CURRENT
current_prompt_path: Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md
active_pointer_path: Codex Code/Prompts/ACTIVE_TASK.md
prompt_registry_path: Codex Code/Prompts/PROMPT_REGISTRY.md
checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
task_contract_path: Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md
prompt_design_standard: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: agent/cx-r1-002-ci-quality-security
previous_task: CX-R1-001
previous_task_status: APPROVED_COMPLETE
next_task_id: CX-R1-003
next_task_authorized: false
```

## CURRENT PROMPT ROLE

Codex is the controlled CI/platform-quality implementation worker for CX-R1-002. It may implement only the GitHub Actions, quality/security gates, retained evidence, reproducible commands, and task evidence authorized by the canonical task contract.

It is not authorized to act as Product Owner, autonomous Architect, product/UI/business/database/observability implementer, provider selector, reviewer, merger, or task selector.

## CURRENT PROMPT GOAL

```text
VERIFY CX-R1-001 APPROVED_COMPLETE
→ WORK ONLY ON agent/cx-r1-002-ci-quality-security
→ IMPLEMENT REQUIRED CI, QUALITY, AND SECURITY CHECKS
→ USE STABLE REQUIRED CHECK NAMES
→ PIN ACTIONS AND USE LEAST-PRIVILEGE WORKFLOW PERMISSIONS
→ RETAIN DELIBERATE TEST/BUILD EVIDENCE
→ RUN THE COMPLETE SUITE TWICE FROM CLEAN CHECKOUT
→ CREATE FACTUAL CX-R1-002 EVIDENCE
→ COMMIT, PUSH, AND OPEN/UPDATE ONE DRAFT PR
→ STOP FOR EXTERNAL REVIEW
```

## EXECUTION RULE

Always open and execute the canonical prompt from:

```text
Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md
```

The owner command `continue` is resolved through repository `AGENTS.md`, the active pointer, registry, continuation protocol, task record, contract, and checkpoint. This Design reference is not an executable replacement and must not be treated as newer authority than the canonical prompt chain.

## COMPLETION RULE

```text
FINISH THE ENTIRE CX-R1-002 SCOPE
→ RUN EVERY REQUIRED VALIDATION TWICE FROM CLEAN CHECKOUT
→ CREATE COMPLETE EVIDENCE
→ DRAFT PR
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
```

After a full report or genuine external blocker: `STOP`. Stop does not authorize CX-R1-003 or any later task.

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
PREVIOUS TASK CX-R1-001: APPROVED_COMPLETE
ACTIVE TASK: CX-R1-002
CURRENT PROMPT: 0001
SOURCE/WORKFLOW AUTHORIZED: CX-R1-002 SCOPE ONLY
NEXT TASK AUTHORIZED: NO
```
