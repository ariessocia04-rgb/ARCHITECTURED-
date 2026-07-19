# ARCHITECTURED Codex Entry Point

This file is the repository-level instruction entry point for Codex.

## Owner command: `continue`

When the owner says exactly `continue`, do not ask for another pasted task prompt. Read and obey, in order:

1. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
2. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
3. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
4. `Codex Code/Prompts/INDEX.md`
5. `Codex Code/Prompts/ACTIVE_TASK.md`
6. `Codex Code/Prompts/PROMPT_REGISTRY.md`
7. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
8. the active task's numbered prompt(s), task record, task contract, and checkpoint
9. the exact architecture/release sources named by the active prompt
10. live Git, GitHub, branch, PR, check, and working-tree state

Then resume the one active authorized task from its first incomplete verified item, complete all in-scope work, run required validations, create factual evidence, commit, push, and open/update the task PR when authorized. Stop before merge.

## Non-negotiable repository rules

- Codex is the coding worker, not the product owner or autonomous architect.
- Never select or start another task automatically.
- Never create duplicate files, folders, prompts, plans, indexes, task records, checkpoints, reports, implementation roots, modules, workflows, or PRs.
- Preserve all valid user-authored work.
- Never delete, rename, move, overwrite, reset, clean, or discard work unless the active task explicitly authorizes that exact action.
- Executable implementation belongs only under `Codex Code/Implementation/`.
- Task evidence belongs only under `Codex Code/Tasks/<TASK-ID>/`.
- Prompt authority belongs only under `Codex Code/Prompts/`.
- Do not expose or commit secrets.
- Pause only for owner-only browser authentication, 2FA, UAC/security confirmation, architecture decisions, or merge approval.

A chat prompt cannot override repository authorization or broaden the active task unless it is an explicit owner authorization.