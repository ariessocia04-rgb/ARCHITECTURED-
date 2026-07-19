# CURRENT CODEX PROMPT — DESIGN REFERENCE

## PURPOSE

This file gives designers, architects, reviewers, and future prompt authors one Design-folder reference to the currently active Codex prompt without creating a duplicate executable prompt.

## CURRENT AUTHORITY

```yaml
active_task_id: CX-R1-001
active_task_title: Workspace and Version Bootstrap
current_prompt_sequence: 0001
current_prompt_type: INITIAL
current_prompt_status: CURRENT
current_prompt_path: Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md
active_pointer_path: Codex Code/Prompts/ACTIVE_TASK.md
prompt_registry_path: Codex Code/Prompts/PROMPT_REGISTRY.md
checkpoint_path: Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
task_contract_path: Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md
prompt_design_standard: Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
canonical_implementation_root: Codex Code/Implementation/
work_branch: agent/cx-r1-001-workspace-bootstrap
next_task_authorized: false
```

## CURRENT PROMPT ROLE

Codex is the controlled workspace/bootstrap engineer for `CX-R1-001`.

It is authorized to create only the deterministic technical foundation under `Codex Code/Implementation/`, including exact toolchain/dependency locks, minimal build skeletons, environment schema, quality scripts, tests, documentation, and task evidence.

It is not authorized to act as:

- Product Owner or autonomous Architect;
- high-fidelity UI designer or approver;
- business/domain/database/CI/observability implementer beyond the exact bootstrap contract;
- provider selector;
- reviewer or merger;
- task selector.

## CURRENT PROMPT GOAL

```text
VERIFY CX-R1-000 APPROVED_COMPLETE
→ WORK ONLY ON agent/cx-r1-001-workspace-bootstrap
→ CREATE THE CANONICAL WORKSPACE UNDER Codex Code/Implementation/
→ PIN EXACT APPROVED TOOLCHAIN AND DEPENDENCIES
→ CREATE LOCKFILES AND RELEASE LOCK
→ CREATE MINIMAL NON-PRODUCT WEB/LOCAL-AGENT FOUNDATIONS
→ CREATE ENVIRONMENT SCHEMA AND BOOTSTRAP TESTS
→ RUN FORMAT/LINT/TYPECHECK/TEST/BUILD/RECOVERY CHECKS
→ CREATE FACTUAL EVIDENCE
→ PREPARE DRAFT PR OR OWNER-PUBLISH HANDOFF
→ STOP FOR EXTERNAL REVIEW
```

## DESIGN-GATE BOUNDARY

High-fidelity screens, clickable prototype, and design UAT remain incomplete. That does not block this non-UI workspace bootstrap, but Codex may not implement or claim approval for product screens, role workspaces, visual tokens, or workflow UI.

## EXECUTION RULE

Always open and execute the canonical prompt from:

```text
Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md
```

This Design reference is not an executable replacement and must not be treated as newer authority than the canonical prompt chain.

## COMPLETION RULE

```text
FINISH THE ENTIRE CX-R1-001 SCOPE
→ RUN EVERY REQUIRED VALIDATION
→ CREATE COMPLETE EVIDENCE
→ DRAFT PR OR OWNER-PUBLISH HANDOFF
→ EXTERNAL REVIEW/CORRECTION
→ AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
```

After a full report or genuine external blocker:

```text
STOP
```

`STOP` does not authorize `CX-R1-002` or any later task.

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
PREVIOUS TASK CX-R1-000: APPROVED_COMPLETE
ACTIVE TASK: CX-R1-001
CURRENT PROMPT: 0001
SOURCE CODE AUTHORIZED: CX-R1-001 SCOPE ONLY
NEXT TASK AUTHORIZED: NO
```
