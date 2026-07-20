# GOV-CX-001 Checkpoint

```yaml
task_id: GOV-CX-001
execution_mode: CONTINUE_MODE
checkpoint_status: READY_FOR_CODEX_VALIDATION
base_branch: main
base_sha: e93cbe519ea2cb9d913ce17b0bd9732836a63d9f
branch: governance/codex-execution-modes
pull_request: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/19
model_policy:
  primary_coding_model: GPT-5.6-Sol
  fallback_model: GPT-5.6-Terra
  polling_model: GPT-5.6-Luna
fallback_model_used: none
review_handoff_state: NO_REVIEW_HANDOFF
previous_release_task: CX-R1-002
previous_release_task_status: APPROVED_COMPLETE
previous_release_task_merge_sha: d0fe1d23fc1aa19b61958986709d7bc9fd01261b
next_release_task: CX-R1-003
next_release_task_authorized: false
sleep_queue_authorized: false
continuation_safe: true
```

## Completed items

- Verified PR #17 merged the permanent repository-backed `continue` entry controls into `main`.
- Verified PR #18 merged CX-R1-002 into `main` with merge commit `d0fe1d23fc1aa19b61958986709d7bc9fd01261b`.
- Verified there were no open pull requests before activating this governance task.
- Created the one authorized branch `governance/codex-execution-modes` from latest verified `main`.
- Added the single canonical `Codex Code/Prompts/EXECUTION_MODE.md` policy.
- Connected `AGENTS.md` and `CONTINUE_PROTOCOL.md` to manual mode, sleep mode, reviewer handoff, bounded CI waiting, sleep queue, and model fallback.
- Added factual CX-R1-002 external review and merge records without changing its implementation.
- Added and registered the GOV-CX-001 prompt, task record, task contract, and checkpoint.
- Activated GOV-CX-001 as the only task and kept CX-R1-003 unauthorized.
- Updated the prompt index, prompt registry, existing 1plan continuation extension, and 1plan extension index.
- Opened exactly one draft PR, #19, to `main`.
- Added the owner-directed canonical Sol/Terra/Luna model policy to the existing `EXECUTION_MODE.md` authority instead of creating a duplicate policy.
- Added matching Codex self-behavior to active Prompt 0001: preserve work, restrict Terra, make Luna read-only, block unsafe fallback, wait for Sol, and never duplicate the task, branch, or PR.

## Incomplete items

- Codex must re-read the complete repository chain using only `continue`.
- Codex must compare every changed path against latest `main` and verify no owner work was lost.
- Codex must decide whether `TASK_STORAGE_AND_HANDOFF_RULES.md` needs only a minimal link/clarification; do not copy the full execution-mode policy.
- Codex must validate the new model-policy terms against every existing continuation, fallback, result-state, and checkpoint reference and remove only contradictions within the allowed scope without creating another authority.
- Run and record all applicable Markdown formatting, link/path, duplicate, prompt uniqueness, active-pointer, secret, frozen-install, and CI validations.
- Update factual evidence and the same draft PR only when required.
- Stop at `READY_FOR_REVIEW` or `READY_FOR_OWNER_MERGE` for independent review and owner approval.

## Exact next action

In the Codex project opened on `governance/codex-execution-modes`, the owner's next message is only:

```text
continue
```

Codex must execute Prompt 0001, obey the canonical Sol/Terra/Luna self-behavior, make only the smallest required corrections, validate PR #19, and stop before merge. Do not start CX-R1-003.
