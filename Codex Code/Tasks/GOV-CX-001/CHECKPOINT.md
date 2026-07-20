# GOV-CX-001 Checkpoint

```yaml
task_id: GOV-CX-001
execution_mode: SLEEP_MODE
mode_state: SLEEP_ARMED
mode_changed_at_utc: 2026-07-20T08:19:14Z
mode_change_source: external_controller
last_owner_activity_at_utc: 2026-07-20T02:06:29Z
explicit_hold: false
sleep_armed: true
auto_sleep_rearm_eligible_after_utc: 2026-07-20T04:06:29Z
checkpoint_status: READY_FOR_REVIEW
base_branch: main
base_sha: e93cbe519ea2cb9d913ce17b0bd9732836a63d9f
branch: governance/codex-execution-modes
starting_head_sha: 1b984f6536b2b9d03254dba98728b2d57ab653ca
validated_correction_head_sha: 48d2991e980cf28df5228369e808ca17470d76cf
pull_request: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/19
pull_request_state: OPEN_DRAFT
pull_request_merge_state_at_start: CLEAN
pull_request_checks_at_starting_head: SIX_PASS
pull_request_merge_state_at_validated_head: CLEAN
pull_request_checks_at_validated_head: SIX_PASS
model_policy:
  primary_coding_model: GPT-5.6-Sol
  fallback_model: GPT-5.6-Terra
  polling_model: GPT-5.6-Luna
  runtime_availability: UNVERIFIED
selected_model: NOT_EXPOSED_BY_ENVIRONMENT
fallback_model_used: NOT_VERIFIABLE
review_handoff_state: FIX_REQUIRED
local_validation_status: PASS
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
- Kept detailed model self-behavior in `EXECUTION_MODE.md` only; Prompt 0001 now links to that authority rather than copying its matrix.
- Re-read the complete repository chain in response to the owner's manual `continue` command.
- Compared every PR path with latest `origin/main` and preserved owner-authored work.
- Added the minimal `TASK_STORAGE_AND_HANDOFF_RULES.md` link to the one mode policy and operational handoff path.
- Standardized model identifiers and the safe stop state to `GPT-5.6-Sol` and `BLOCKED_MODEL_CAPACITY`; `WAIT_FOR_SOL` remains the exact unsafe-fallback action.
- Defined this active checkpoint as the sole persisted live mode-state record and recorded manual `CONTINUE_MODE` factually.
- Removed the parallel `STOP_*` aliases and retained one unprefixed top-level result taxonomy in `AGENTS.md`.
- Corrected the CX-R1-002 review record so it preserves verified scope/check/owner-merge/read-back facts without inventing a formal review event.
- Added factual changed-file, test, security/scope, and completion evidence in the existing GOV-CX-001 task folder.
- Verified the official Node `v24.18.0` archive checksum and used pinned Node `24.18.0`, pnpm `10.34.0`, Rust/Cargo `1.97.1`, and Rustfmt `1.9.0-stable`.
- Ran frozen installation successfully.
- Ran the full `pnpm ci:check` successfully, including formatting, lint, typecheck, 4 tests, build, release lock, duplicate paths, migration boundary, secrets, Rust formatting, and locked Cargo check.
- Ran authorization, canonical-path, prompt-registry, active-pointer, link, changed-file secret, model-term, CX-R1-002 merge, and diff validation successfully.
- Ran the final pinned Prettier check successfully across all 19 PR Markdown paths after creating evidence.
- Ran final structural validation successfully with 19/19 manifest coverage and no duplicate canonical authority, secret pattern, missing reference, or unauthorized path.
- Ran the production dependency audit at the high threshold successfully; one existing moderate advisory remains visible.
- Committed and pushed correction commit `48d2991e980cf28df5228369e808ca17470d76cf` normally to the same authorized branch.
- Verified PR #19 at that head as draft, `MERGEABLE`, and `CLEAN`, with all six named GitHub checks passing.
- Armed repository-backed Sleep Mode through the external controller after more than 120 minutes of verifiable owner inactivity, with no explicit hold.

## Incomplete items

- The canonical `FIX_REQUIRED` review handoff remains unresolved.
- Codex must correct only the documented 120-minute threshold and final-head evidence findings on the same branch and PR, then rerun all affected validations.
- Independent external re-review remains pending after those corrections.
- Owner approval and merge remain pending after independent review.
- GOV-CX-001 remains active until external review, owner merge, and main read-back; CX-R1-003 remains unauthorized.

## Exact next action

Codex: remain on task `GOV-CX-001`, branch `governance/codex-execution-modes`, and draft PR `#19`; read the existing `FIX_REQUIRED` handoff; correct only its two documented findings; rerun every affected and required validation; update this same checkpoint and evidence package to the exact final head; push to the same branch; and stop again at `READY_FOR_REVIEW`. Do not merge or start `CX-R1-003`.