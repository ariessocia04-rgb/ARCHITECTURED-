# GOV-CX-001 Task Contract

## Authorization

The owner explicitly authorized a connected canonical repository method for manual `continue`, unattended `sleep mode`, deactivation, ChatGPT review, Codex correction, bounded CI waiting, automatic hourly reviewer checks, and model fallback while keeping the strict plan intact.

This contract authorizes only the smallest governance and operational-control delta needed to implement and validate that request.

## Objective

Create one coherent repository-backed control system shared by ChatGPT and Codex so:

- manual work uses only `continue`;
- unattended work uses `sleep mode`;
- deactivation returns to manual mode;
- the external reviewer writes exact findings once;
- Codex reads the flow and fixes only authorized findings;
- progress survives interruption or model switch;
- later-task advancement remains gated by external review, owner merge, main read-back, and explicit queue authorization.

## Allowed paths

```text
AGENTS.md
1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md
1plan-EXTENSIONS_INDEX.md
Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
Codex Code/Prompts/EXECUTION_MODE.md
Codex Code/Prompts/CONTINUE_PROTOCOL.md
Codex Code/Prompts/ACTIVE_TASK.md
Codex Code/Prompts/INDEX.md
Codex Code/Prompts/PROMPT_REGISTRY.md
Codex Code/Prompts/GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
Codex Code/Tasks/GOV-CX-001/**
Codex Code/Tasks/CX-R1-002/REVIEW_RESULT.md
Codex Code/Tasks/CX-R1-002/MERGE_RECORD.md
Codex Code/Reviews/GOV-CX-001/REVIEW_HANDOFF.md
```

## Forbidden paths and actions

- No product or application implementation.
- No edit under `Codex Code/Implementation/` unless a validation command produces no committed output.
- No `.github/workflows/` change.
- No dependency, lockfile, schema, migration, API, UI, role, permission, event, queue, billing, printing, or deployment change.
- No CX-R1-003 prompt, task activation, branch, PR, or implementation.
- No direct commit to `main`.
- No deletion, rename, move, consolidation, reset, clean, stash, force-push, or history rewrite.
- No duplicate policy, prompt, task folder, checkpoint, review handoff, branch, PR, plan, index, or evidence package.
- No Codex self-review, self-approval, or self-merge.

## Required invariants

1. `AGENTS.md` remains the repository entry point.
2. `EXECUTION_MODE.md` is the one detailed mode/review/fallback authority.
3. `CONTINUE_PROTOCOL.md` remains the one live-state resume algorithm.
4. `ACTIVE_TASK.md` points to exactly one task.
5. `PROMPT_REGISTRY.md` remains append-only with unique task/sequence pairs.
6. `1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md` remains the existing plan connection; no new parallel plan is created.
7. `REVIEW_HANDOFF.md` is operational and cannot replace terminal `REVIEW_RESULT.md`.
8. A model switch preserves repository state but does not imply identical model capability.
9. Sleep mode never bypasses strict owner-review and merge gates.
10. The current release implementation remains CX-R1-002 complete; CX-R1-003 remains unauthorized.

## Required validation

- Verify repository identity and latest `main`.
- Search the whole repository for existing `sleep mode`, execution-mode, reviewer-handoff, and model-fallback authorities before adding or changing content.
- Verify all newly referenced paths exist or are created exactly once.
- Verify no duplicate prompt sequence or task ID.
- Verify active pointer, registry, index, prompt, record, contract, and checkpoint agree.
- Verify CX-R1-002 PR #18 head and merge SHAs against live GitHub state.
- Run Markdown formatting and `git diff --check`.
- Run repository duplicate/path/secret validations applicable to changed files.
- Run `pnpm install --frozen-lockfile` and `pnpm ci:check` unless environment evidence proves an exact blocker.
- Record exact commands and results; never convert an unavailable check into a pass.

## Acceptance criteria

- The four owner commands are unambiguous and linked from the repository entry point.
- Manual mode requires owner `continue`.
- Sleep mode supports scheduled current-task work, review correction, and safe waiting.
- Deactivation returns to manual mode and documents the hourly 60-to-120-minute possible re-arm window truthfully.
- Reviewer and worker ownership never overlap.
- Five-minute waiting is bounded and cannot become a busy loop.
- Sleep-queue advancement requires all explicit predecessor and owner gates.
- Model fallback cannot restart, duplicate, weaken, or silently broaden work.
- Unsupported automatic model switching is not claimed.
- CX-R1-002 has factual review and merge closure.
- No product code or next release task is started.

## Completion and stop rule

Codex may commit and push only to `governance/codex-execution-modes` and create or update exactly one draft PR to `main`.

Codex must stop before merge with factual evidence and one top-level result state. Only the owner may approve and merge this governance task.
