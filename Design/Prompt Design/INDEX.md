# CODEX PROMPT DESIGN — MASTER INDEX

## PURPOSE

This folder is the Design-layer starting point for the structure, readability, traceability, and execution presentation of Codex prompts used by ARCHITECTURED.

It does not create a second executable prompt authority. The canonical prompt, prompt history, task pointer, authorization, checkpoint, and execution records remain under `Codex Code/`.

## CANONICAL AUTHORITIES

Read in this order:

```text
1plan.md
→ 1plan-EXTENSIONS_INDEX.md
→ 1plan-SAAS_APPLICATION_WIREFRAME_WIREFLOW_INTEGRATION_EXTENSION.md
→ Codex Code/CURRENT_TASK_COMPLETION_LAW.md
→ Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
→ Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
→ Codex Code/Prompts/ACTIVE_TASK.md
→ Codex Code/Prompts/PROMPT_REGISTRY.md
→ current task prompt
→ current task checkpoint
```

## CURRENT CODEX PROMPT

- [Current Codex Prompt Reference](CURRENT_CODEX_PROMPT.md)
- Canonical executable prompt: `Codex Code/Prompts/CX-R1-000/0004-MASTER-SAAS-SYNC-CONTINUE-AND-FINISH.md`
- Active task: `CX-R1-000`
- Current prompt sequence: `0004`
- Next task authorized: `NO`

## PROMPT DESIGN REQUIREMENTS

Every Codex prompt must visibly and specifically contain all applicable sections:

1. prompt identity and sequence;
2. role and prohibited roles;
3. exact goal and definition of done;
4. project and domain background;
5. current live state and continuation checkpoint;
6. source-of-truth reading order;
7. exact authorization matrix;
8. allowed and prohibited tools;
9. exact allowed, protected, and prohibited paths;
10. existing-work and duplicate classification;
11. complete dependency-ordered execution steps;
12. architecture and business invariants;
13. database, RLS, API, event, queue, retry, and idempotency rules;
14. UX, accessibility, responsive, offline, loading, empty, error, and recovery rules;
15. security and privacy protections;
16. exact tests, commands, and evidence requirements;
17. branch, commit, PR, review, merge, and read-back rules;
18. blocker and checkpoint behavior;
19. required final report;
20. complete-current-task stop gate;
21. explicit prohibition on automatic next-task execution.

## DESIGN PRINCIPLES

A Codex prompt must be:

- clear enough that Codex does not invent missing architecture;
- specific enough that paths, permissions, tools, tests, and completion are unambiguous;
- ordered from authority and context to execution and validation;
- explicit about allowed and prohibited actions;
- resilient to interruption through prompt history and checkpoints;
- factual about architecture, design, code, tests, hardware, deployment, and production status;
- protected against deletion, duplication, parallel code trees, secret exposure, and architecture drift;
- complete for the current task before any next task is considered.

## DUPLICATE CONTROL

```text
DESIGN FOLDER
= presentation, navigation, and prompt-design guidance

CODEX CODE/PROMPTS
= canonical executable prompt authority and append-only history
```

Do not copy the full current prompt into this Design folder. Link to the canonical prompt so that only one executable prompt remains authoritative.

When a newer prompt becomes current:

1. add the new prompt to the canonical append-only prompt chain;
2. update `Codex Code/Prompts/ACTIVE_TASK.md`;
3. update `Codex Code/Prompts/PROMPT_REGISTRY.md`;
4. update `CURRENT_CODEX_PROMPT.md` in this folder to point to the new canonical prompt;
5. do not overwrite or delete historical prompts.

## CURRENT STATUS

```text
PROMPT DESIGN FOLDER: PRESENT
CURRENT PROMPT REFERENCE: PRESENT
CANONICAL PROMPT DUPLICATED: NO
CANONICAL EXECUTABLE PROMPT LOCATION CHANGED: NO
CURRENT ACTIVE TASK: CX-R1-000
CURRENT PROMPT: 0004
NEXT TASK AUTHORIZED: NO
APPLICATION CODE CREATED: NO
```

**THIS FOLDER MAKES CODEX PROMPT DESIGN EASY TO FIND FROM `Design/` WHILE PRESERVING `Codex Code/Prompts/` AS THE SINGLE EXECUTABLE PROMPT AUTHORITY.**