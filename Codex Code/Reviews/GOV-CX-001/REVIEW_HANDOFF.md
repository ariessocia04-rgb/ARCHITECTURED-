# GOV-CX-001 Review Handoff

## Review state

```text
FIX_REQUIRED
```

## Scope reviewed

- Active task: `GOV-CX-001`
- Branch: `governance/codex-execution-modes`
- Pull request: `#19`
- Live PR head before this clarification: `dbf3d995aad6c4517371cc334e24bd51a53da562`
- Review basis: `1plan.md`, applicable extensions, `AGENTS.md`, completion law, active prompt, task contract, checkpoint, evidence, live PR/check state, official OpenAI automation documentation, and the owner's clarified Sleep Mode intent.

## Owner clarification — authoritative Sleep Mode intent

The owner explicitly clarified that Sleep Mode is an autonomous reviewed execution pipeline while the owner is asleep.

The intended distinction is:

```text
SLEEP_MODE
= Codex works on authorized queued work
→ ChatGPT automatically reviews on its hourly poll
→ Codex fixes exact findings when required
→ after automated review passes, Codex may continue to the next explicitly authorized sleep-queue task
→ owner final/manual review is deferred until Sleep Mode is deactivated

CONTINUE_MODE
= owner controls each continuation
→ owner asks ChatGPT to review the repository work
→ Codex corrects exact findings when instructed
→ owner decides final approval and merge
```

Therefore, the previous interpretation that `REVIEW_PASS_PENDING_OWNER` always stops Codex is superseded. It must be mode-sensitive:

- In `CONTINUE_MODE`, `REVIEW_PASS_PENDING_OWNER` stops for the owner.
- In `SLEEP_MODE`, `REVIEW_PASS_PENDING_OWNER` records that automated external review passed and owner final review remains pending, but it does not block advancement to the next task already listed in an explicit owner-authorized sleep queue when every Sleep Mode continuation gate is satisfied.

This clarification does not authorize Codex to invent or select a task. A successor must already be explicitly listed and fully prepared in the canonical sleep queue.

## External factual basis

Official OpenAI sources checked on `2026-07-20` support the following factual constraints:

1. Scheduled tasks can perform recurring monitoring but cannot run more than once per hour.
2. ChatGPT scheduled review and Codex automation are separate scheduled capabilities; neither should be treated as an immediate webhook trigger for the other.
3. Scheduled tasks do not support completion webhooks, so coordination must use repository polling and canonical state.
4. Tasks can pause and require actual configuration, permissions, and active runtime evidence.
5. Local project execution may require the computer to remain on, the desktop app to remain running, and sleep prevention to be configured.

These facts support the repository's existing 60-minute cadence but require an explicit polling sequence and runtime-truth record.

## Finding 1 — preserve the canonical 60-minute design

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- connected mode, prompt, contract, and checkpoint references

**Problem:** An earlier review version incorrectly requested a 120-minute threshold.

**Required correction:** Preserve:

```text
ChatGPT reviewer cadence: 60 minutes
Codex automation cadence: 60 minutes
automatic re-arm threshold: 60 minutes
hourly polling activation window: 60 to 120 minutes
```

Do not implement the withdrawn 120-minute direction.

**Required validation:** Search the branch and PR for unintended 120-minute replacements and verify all canonical references remain aligned with the 60-minute design.

## Finding 2 — actual automation configuration and runtime truth are not recorded

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** Policy values exist, but the repository does not distinguish policy from an actually configured and active reviewer or worker automation.

**Required correction:** Add one non-duplicative runtime-truth section to the existing canonical mode authority and extend the same checkpoint with factual fields such as:

```yaml
automation_coordination_mode: HOURLY_REPOSITORY_POLLING
webhook_completion_trigger: UNSUPPORTED
chatgpt_reviewer_task:
  configured: true | false | UNVERIFIED
  status: ACTIVE | PAUSED | DISABLED | UNVERIFIED
  cadence_minutes: 60
  repository_access: VERIFIED | UNVERIFIED
  handoff_write_access: VERIFIED | UNVERIFIED
  last_run_at_utc: exact_timestamp_or_UNVERIFIED
  next_run_at_utc: exact_timestamp_or_UNVERIFIED
codex_worker_task:
  configured: true | false | UNVERIFIED
  status: ACTIVE | PAUSED | DISABLED | UNVERIFIED
  cadence_minutes: 60
  repository_binding: VERIFIED | UNVERIFIED
  thread_or_project_binding: VERIFIED | UNVERIFIED
  execution_location: LOCAL_PROJECT | WORKTREE | CLOUD | UNVERIFIED
  local_runtime_ready: true | false | NOT_APPLICABLE | UNVERIFIED
  last_run_at_utc: exact_timestamp_or_UNVERIFIED
  next_run_at_utc: exact_timestamp_or_UNVERIFIED
```

Do not fabricate task IDs, timestamps, permissions, bindings, or active state. Record `UNVERIFIED` when product evidence is unavailable.

## Finding 3 — Sleep Mode sequence must allow automated pass and queued continuation

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/CURRENT_TASK_COMPLETION_LAW.md` when required to remove a direct contradiction
- `1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md`
- `Codex Code/Tasks/GOV-CX-001/TASK_CONTRACT.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`

**Problem:** The current repository says `REVIEW_PASS_PENDING_OWNER` forbids further work and requires owner merge before any queued successor. That directly conflicts with the owner's clarified Sleep Mode design.

**Required correction:** Amend the current GOV-CX-001 contract first, using this explicit owner authorization, to permit the smallest governance-file changes necessary to remove that contradiction. Do not touch product code.

Define the exact mode-sensitive sequence:

```text
OWNER OR VERIFIED CONTROLLER ARMS SLEEP_MODE
→ CODEX HOURLY RUN READS THE FULL REPOSITORY CHAIN
→ VERIFY MODE, ACTIVE ACTOR, ACTIVE TASK, SLEEP QUEUE, BRANCH/PR, HEAD, CHECKS, AND EXISTING WORK
→ SEARCH FOR EXISTING OR PARTIAL IMPLEMENTATION BEFORE WRITING
→ IF ANOTHER ACTOR OWNS THE STATE: READ-ONLY STOP
→ IF REVIEW_IN_PROGRESS: READ-ONLY STOP
→ IF FIX_REQUIRED: APPLY ONLY THE EXACT RECORDED CORRECTIONS
→ OTHERWISE RESUME THE FIRST INCOMPLETE ITEM OF THE CURRENT AUTHORIZED TASK
→ VALIDATE, PUSH TO THE AUTHORIZED BRANCH/PR, UPDATE CHECKPOINT AND EVIDENCE
→ SET READY_FOR_REVIEW AND RELEASE CODEX OWNERSHIP
→ CHATGPT REVIEWER ON ITS NEXT HOURLY POLL LOCKS THE EXACT IMMUTABLE HEAD
→ SET REVIEW_IN_PROGRESS
→ VERIFY PLAN, DIFF, TESTS, CHECKS, SECURITY, DUPLICATES, AND EVIDENCE
→ IF ISSUES: WRITE FIX_REQUIRED AND RELEASE REVIEWER OWNERSHIP
→ IF PASS IN SLEEP_MODE: WRITE REVIEW_PASS_PENDING_OWNER, RECORD THE REVIEWED SHA, RELEASE REVIEWER OWNERSHIP
→ ON A LATER CODEX RUN, IF SLEEP_MODE IS STILL ACTIVE AND AN EXPLICIT OWNER-AUTHORIZED SLEEP QUEUE LISTS A SUCCESSOR, VERIFY ALL QUEUE AND NON-OVERLAP GATES
→ ACTIVATE ONLY THAT LISTED SUCCESSOR AND CONTINUE
→ IF NO AUTHORIZED SUCCESSOR OR A GATE FAILS: STOP WITH THE EXISTING TRUTHFUL PENDING/BLOCKED STATE
```

`REVIEW_PASS_PENDING_OWNER` must have these conditional semantics:

```text
CONTINUE_MODE:
  no further Codex changes;
  wait for owner review/approval/merge.

SLEEP_MODE:
  automated external review passed for an exact SHA;
  owner final review remains pending;
  Codex may advance only to the next task explicitly listed in the active owner-authorized sleep queue;
  no arbitrary task selection;
  no merge unless the owner separately pre-authorized that exact merge behavior;
  no successor when branch strategy, dependencies, or path overlap are ambiguous.
```

The sleep queue must specify for each successor:

```yaml
- task_id: exact_task_id
  prompt_path: exact_existing_path
  contract_path: exact_existing_path
  predecessor_task_id: exact_task_id
  predecessor_reviewed_sha: exact_sha_or_to_be_recorded
  branch_strategy: SAME_SLEEP_SESSION_BRANCH | PREAUTHORIZED_STACKED_BRANCH
  pull_request_strategy: SAME_SLEEP_SESSION_PR | PREAUTHORIZED_TASK_PR
  dependency_on_unmerged_predecessor: true | false
  allowed_paths: exact_paths_or_contract_reference
  stop_conditions: exact_states
```

If this information is missing, Codex must not infer it.

## Finding 4 — Continue Mode and deactivation need a deferred owner-review rule

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`

**Problem:** The repository does not yet express the owner's intended wake-up flow after autonomous Sleep Mode work.

**Required correction:** Define:

```text
OWNER ISSUES deactivate sleep mode OR stop sleep mode
→ IMMEDIATELY DISABLE NEW AUTOMATED TASK ADVANCEMENT
→ IF CODEX CURRENTLY OWNS A RUN, IT MAY ONLY REACH A SAFE, INTERNALLY CONSISTENT CHECKPOINT, PUSH THE REVIEWABLE STATE, UPDATE EVIDENCE, RELEASE OWNERSHIP, AND STOP
→ SET CONTINUE_MODE
→ SET sleep_armed: false
→ SET owner_final_review_requested: true
→ RECORD THE SLEEP SESSION TASKS, REVIEWED SHAS, CORRECTION SHAS, OPEN PRS, AND PENDING MERGES
→ CHATGPT PERFORMS A MANUAL CONSOLIDATED REVIEW WHEN THE OWNER REQUESTS IT
→ IF MANUAL REVIEW FINDS ISSUES: WRITE FIX_REQUIRED FOR THE EXACT TASK/PR AND OWNER SENDS continue TO CODEX
→ IF MANUAL REVIEW PASSES: REPORT THE EXACT OWNER APPROVAL/MERGE ACTIONS
```

Extend the checkpoint with non-duplicative fields such as:

```yaml
owner_final_review_requested: true | false
sleep_session_id: exact_id_or_NOT_ACTIVE
sleep_session_started_at_utc: exact_timestamp_or_NOT_ACTIVE
sleep_session_completed_tasks: []
sleep_session_pending_owner_review_tasks: []
latest_automated_reviewed_sha: exact_sha_or_UNVERIFIED
latest_manual_reviewed_sha: exact_sha_or_NOT_REVIEWED
```

The manual review must never silently invalidate a factual automated pass; it may confirm it or create exact new findings based on the consolidated repository state.

## Finding 5 — worker/reviewer mutual exclusion is required

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`

**Required correction:** Use one checkpoint lock:

```yaml
active_actor: NONE | OWNER | CODEX_WORKER | CHATGPT_REVIEWER
actor_started_at_utc: exact_timestamp_or_NOT_ACTIVE
automation_phase: WORK_READY | WORKING | READY_FOR_REVIEW | REVIEW_IN_PROGRESS | FIX_REQUIRED | REVIEW_PASS_PENDING_OWNER | PENDING_OWNER_ACTION
review_target_sha: exact_sha_or_UNVERIFIED
```

No scheduled writer may act while another actor is active. A stale, contradictory, or head-mismatched lock must produce an existing blocked state rather than a guessed recovery.

## Finding 6 — canonical checkpoint and evidence are stale

**Files:**

- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** The checkpoint and completion evidence still trail the live PR and review handoff state.

**Required correction:** After implementing Findings 1–5, update the same checkpoint and evidence to record the exact final head, live PR/check state, handoff state, runtime truth, actor/phase state, and mode-sensitive continuation behavior.

The completion report must separately state:

```text
GOVERNANCE POLICY DEFINED
AUTOMATION RUNTIME VERIFIED OR UNVERIFIED
SLEEP MODE ARMED OR NOT ARMED
AUTOMATED REVIEW STATE
OWNER FINAL REVIEW STATE
AUTHORIZED SLEEP QUEUE STATE
CURRENT TASK/BRANCH/PR
NEXT EXACT ACTION
```

## Required validation

Codex must:

1. Preserve the canonical 60-minute values.
2. Search for contradictory unconditional stop-before-successor rules.
3. Verify any completion-law change is explicitly authorized by the amended GOV-CX-001 contract and limited to Sleep Mode semantics.
4. Validate that `CONTINUE_MODE` still stops for owner control.
5. Validate that `SLEEP_MODE` advances only through an explicit queue.
6. Validate that automated review pass is anchored to an exact immutable SHA.
7. Validate that Codex cannot write during `REVIEW_IN_PROGRESS`.
8. Validate that ChatGPT cannot review while Codex owns the checkpoint.
9. Validate deactivation prevents new autonomous task activation.
10. Run all task-contract formatting, link, duplicate, path, secret, install, test, build, and GitHub checks.
11. Update only the same branch, PR, checkpoint, evidence package, and review handoff.

## Exact next action

Codex must remain on `GOV-CX-001`, branch `governance/codex-execution-modes`, and PR `#19`.

Read this corrected handoff, amend the GOV-CX-001 contract only as needed to authorize the smallest governance-path delta, preserve the 60-minute cadence, implement Findings 2–6, rerun all required validations, update the same checkpoint and evidence, and stop again at `READY_FOR_REVIEW` for validation of this governance change.

Do not activate `CX-R1-003` during this governance correction because the current active pointer still records `sleep_queue_authorized: false`. Do not merge, create a duplicate task, branch, PR, policy, checkpoint, evidence package, or reviewer handoff.