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
current_prompt_path: Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md
active_pointer_path: Codex Code/Prompts/ACTIVE_TASK.md
prompt_registry_path: Codex Code/Prompts/PROMPT_REGISTRY.md
checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
task_contract_path: Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md
prompt_design_standard: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: agent/cx-r1-002-ci-quality-security
next_task_authorized: false
```

## CURRENT PROMPT ROLE

Codex is the controlled CI, quality, and security baseline engineer for `CX-R1-002`.

It is authorized to create the CI, quality, security, evidence-retention, and contributor-command
baseline under `Codex Code/Implementation/`, plus the narrowly necessary
`.github/workflows/` GitHub Actions exception and task/governance evidence.

It is not authorized to act as:

- Product Owner or autonomous Architect;
- high-fidelity UI designer or approver;
- business/domain/database/observability implementer beyond the exact CI baseline contract;
- provider selector;
- reviewer or merger;
- task selector.

## CURRENT PROMPT GOAL

```text
VERIFY CX-R1-001 APPROVED_COMPLETE AND MERGED
→ WORK ONLY ON agent/cx-r1-002-ci-quality-security
→ IMPLEMENT FROZEN-INSTALL, QUALITY, SECURITY, AND ARTIFACT CI CHECKS
→ DOCUMENT REQUIRED CHECK NAMES, BRANCH REVIEW POLICY, RETENTION, AND CONTRIBUTOR COMMANDS
→ RUN THE COMPLETE CLEAN-CHECKOUT BASELINE TWICE
→ CREATE FACTUAL EVIDENCE
→ PREPARE A DRAFT PR
→ STOP FOR EXTERNAL REVIEW
```

## DESIGN-GATE BOUNDARY

High-fidelity screens, clickable prototype, and design UAT remain incomplete. That does not block this non-UI workspace bootstrap, but Codex may not implement or claim approval for product screens, role workspaces, visual tokens, or workflow UI.

## EXECUTION RULE

Always open and execute the canonical prompt from:

```text
Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md
```

This Design reference is not an executable replacement and must not be treated as newer authority than the canonical prompt chain.

## COMPLETION RULE

```text
FINISH THE ENTIRE CX-R1-002 SCOPE
→ RUN EVERY REQUIRED VALIDATION
→ CREATE COMPLETE EVIDENCE
→ DRAFT PR
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
PREVIOUS TASK CX-R1-001: APPROVED_COMPLETE
ACTIVE TASK: CX-R1-002
CURRENT PROMPT: 0001
SOURCE CODE AUTHORIZED: CX-R1-002 SCOPE ONLY; .github/workflows/ EXCEPTION ONLY
NEXT TASK AUTHORIZED: NO
```
