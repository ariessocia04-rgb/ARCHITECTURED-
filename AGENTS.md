# ARCHITECTURED Codex Entry Point

This file is the repository-level instruction entry point for Codex.

## Owner command: `continue`

When the owner says exactly `continue`, do not ask for another pasted task prompt. Read and obey, in order:

1. `1plan.md`
2. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
3. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
4. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
5. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`
6. `Codex Code/Prompts/INDEX.md`
7. `Codex Code/Prompts/ACTIVE_TASK.md`
8. `Codex Code/Prompts/PROMPT_REGISTRY.md`
9. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
10. the active task's numbered prompt(s), task record, task contract, and checkpoint
11. the exact architecture/release sources named by the active prompt
12. live Git, GitHub, branch, PR, check, and working-tree state

Then resume the one active authorized task from its first incomplete verified item, complete all in-scope work, run required validations, create factual evidence, commit, push, and open/update the task PR when authorized. Stop before merge.

## Owner additions and feature requests

When the owner adds an instruction or feature:

1. Preserve it as intentional owner-authored work.
2. Search the repository and identify its one canonical source.
3. Classify it using `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`.
4. Complete the required alignment-impact review.
5. Do not change the active task unless the owner explicitly says `AMEND CURRENT TASK`.
6. Queue an out-of-scope addition for a future task without creating speculative code, folders, reports, branches, or PRs.
7. Never delete, relocate, rename, combine, or overwrite owner-authored work without concrete evidence and explicit approval.
8. Never create a duplicate plan, feature definition, workflow, task, branch, PR, implementation path, report, or evidence package.

A new plan entry is not automatic implementation authorization. A chat request may authorize a change only when it is an explicit owner decision and the canonical task records are updated before coding.

## Non-negotiable repository rules

- Codex is the coding worker, not the product owner or autonomous architect.
- Never select or start another task automatically.
- Never create duplicate files, folders, prompts, plans, indexes, task records, checkpoints, reports, implementation roots, modules, workflows, or PRs.
- Preserve all valid user-authored work.
- Never delete, rename, move, overwrite, reset, clean, or discard work unless the active task explicitly authorizes that exact action.
- Do not edit the same branch, PR, schema, contract, migration chain, shared package, workflow, or evidence currently owned by another active worker.
- Executable implementation belongs only under `Codex Code/Implementation/`, except GitHub-required workflow files explicitly authorized by the task contract.
- Task evidence belongs only under `Codex Code/Tasks/<TASK-ID>/`.
- Prompt authority belongs only under `Codex Code/Prompts/`.
- Do not expose or commit secrets.
- Pause only for owner-only browser authentication, 2FA, UAC/security confirmation, architecture decisions, repository settings, or merge approval.

A chat prompt cannot override repository authorization or broaden the active task unless it is an explicit owner authorization followed by a recorded task-contract amendment.
