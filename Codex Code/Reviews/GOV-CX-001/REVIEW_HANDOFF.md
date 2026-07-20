# GOV-CX-001 Review Handoff

## Review state

```text
FIX_REQUIRED
```

## Scope reviewed

- Active task: `GOV-CX-001`
- Branch: `governance/codex-execution-modes`
- Pull request: `#19`
- Review basis: `1plan.md`, applicable extensions, `AGENTS.md`, completion law, active prompt, task contract, checkpoint, evidence, live PR/check state, official OpenAI automation documentation, and the owner's clarified Sleep Mode intent.

## Authoritative owner intent

The owner explicitly clarified that:

```text
SLEEP_MODE
= Codex works on exact authorized queued work
→ ChatGPT reviews automatically on its hourly repository poll
→ Codex fixes exact findings when required
→ after an automated review pass, Codex may continue only to the next task already listed in the owner-authorized sleep queue
→ owner final/manual consolidated review is deferred until Sleep Mode is deactivated

CONTINUE_MODE
= owner controls each continuation
→ owner asks ChatGPT to review the repository work
→ Codex corrects exact findings when instructed
→ owner controls final approval and merge
```

The owner also clarified this deactivation behavior:

```text
DEACTIVATE SLEEP MODE
→ enter CONTINUE_MODE immediately
→ stop new autonomous task advancement
→ preserve a safe reviewable checkpoint
→ if the owner sends no newer message or command for at least 60 minutes
→ on the external controller's next hourly poll, verify the inactivity timestamp and all safety gates
→ automatically re-arm SLEEP_MODE
→ resume the existing Codex Sleep Mode sequence without changing its work/review priority
```

This automatic re-arm may factually occur between 60 and 120 minutes after the latest verified owner activity because the controller polls hourly. It must never be claimed at exact minute 60 without scheduler evidence.

## External factual constraints

Current official OpenAI automation documentation supports these constraints:

1. Scheduled monitoring cannot run more than once per hour.
2. ChatGPT scheduled review and Codex automation are separate scheduled capabilities.
3. There is no supported completion webhook joining the two; coordination must use repository polling and canonical state.
4. Scheduled tasks may be paused and require actual configuration, permissions, and active-runtime evidence.
5. Local project execution may require the computer to remain on, the desktop app to remain running, and sleep prevention to be configured.

## Finding 1 — preserve the canonical 60-minute design

**Required correction:** Preserve all of these values:

```text
ChatGPT reviewer cadence: 60 minutes
Codex automation cadence: 60 minutes
automatic re-arm inactivity threshold: 60 minutes
hourly polling activation window: 60 to 120 minutes
```

Do not implement the withdrawn 120-minute threshold direction.

**Required validation:** Search all changed and connected governance records for unintended threshold conflicts and verify consistent 60-minute / 60-to-120-minute semantics.

## Finding 2 — automation policy and runtime truth must be separate

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** A policy cadence is not proof that either automation is configured, enabled, correctly permissioned, or bound to this repository and project/thread.

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

Do not fabricate task IDs, timestamps, permissions, bindings, or active state. Use `UNVERIFIED` when product evidence is unavailable.

## Finding 3 — preserve the existing Codex work/review priority

The new auto-rearm behavior must wrap the existing sequence; it must not reorder, bypass, or weaken it.

```text
VERIFY REPOSITORY, MODE, CHECKPOINT, ACTOR, ACTIVE TASK, QUEUE, BRANCH/PR, HEAD, CHECKS, AND EXISTING WORK
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
→ IF PASS IN SLEEP_MODE: WRITE REVIEW_PASS_PENDING_OWNER AND RECORD THE REVIEWED SHA
→ ON A LATER CODEX RUN, ADVANCE ONLY WHEN THE ACTIVE OWNER-AUTHORIZED SLEEP QUEUE EXPLICITLY LISTS THE SUCCESSOR AND EVERY GATE PASSES
```

No automatic mode transition may skip required reading, duplicate search, active-worker checks, exact review correction priority, validations, evidence, or reviewer locking.

## Finding 4 — mode-sensitive review-pass behavior and queue safety

`REVIEW_PASS_PENDING_OWNER` must mean:

```text
CONTINUE_MODE:
  no further autonomous Codex changes;
  wait for owner-controlled continuation, final review, approval, or merge.

SLEEP_MODE:
  automated external review passed for an exact immutable SHA;
  owner final consolidated review remains pending;
  Codex may advance only to the next task explicitly listed in the active owner-authorized sleep queue;
  no arbitrary task selection;
  no merge unless separately and exactly pre-authorized by the owner;
  no successor when branch strategy, dependency state, or path overlap is ambiguous.
```

Each queued successor must already specify:

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

If any required queue field or gate is missing, Codex must not infer it.

## Finding 5 — deactivation, manual review, and automatic re-arm

**Required correction:** Add this exact control sequence without changing the Codex work/review priority:

```text
OWNER ISSUES deactivate sleep mode OR stop sleep mode
→ RECORD THE OWNER COMMAND AS last_owner_activity_at_utc
→ SET execution_mode: CONTINUE_MODE
→ SET mode_state: MANUAL_OWNER_ACTIVE
→ SET sleep_armed: false
→ SET owner_final_review_requested: true
→ SET auto_sleep_rearm_eligible_after_utc TO EXACTLY 60 MINUTES AFTER last_owner_activity_at_utc
→ IMMEDIATELY DISABLE NEW AUTOMATED TASK ADVANCEMENT
→ IF CODEX CURRENTLY OWNS A RUN, IT MAY ONLY REACH A SAFE INTERNALLY CONSISTENT CHECKPOINT, PUSH THE REVIEWABLE STATE, UPDATE EVIDENCE, RELEASE OWNERSHIP, AND STOP
→ RECORD SLEEP-SESSION TASKS, REVIEWED SHAS, CORRECTION SHAS, OPEN PRS, AND PENDING MERGES
→ ALLOW OWNER-REQUESTED CHATGPT CONSOLIDATED REVIEW IN CONTINUE_MODE
```

Every newer owner message, command, manual review request, approval action, correction instruction, or explicit hold must update `last_owner_activity_at_utc` and recalculate the 60-minute eligibility timestamp.

On each hourly external-controller poll while in manual mode:

```text
VERIFY checkpoint is consistent
→ VERIFY explicit_hold: false
→ VERIFY active_actor: NONE
→ VERIFY no newer owner activity exists
→ VERIFY current time is at or after auto_sleep_rearm_eligible_after_utc
→ IF ANY FACT CANNOT BE VERIFIED: MAKE NO WRITE AND RETURN AN EXISTING BLOCKED/PENDING STATE
→ IF ALL FACTS PASS: SET SLEEP_MODE, SLEEP_ARMED, sleep_armed: true, mode_change_source: external_controller
→ PRESERVE owner_final_review_requested AND THE RECORDED SLEEP-SESSION REVIEW BACKLOG
→ RESUME ONLY THROUGH THE UNCHANGED CODEX PRIORITY IN FINDING 3
```

Automatic re-arm does not approve, merge, erase pending owner review, create a queue, authorize a successor, or permit arbitrary work. It only restores Sleep Mode when all canonical safety facts are verified.

Extend the checkpoint without creating a parallel state record:

```yaml
last_owner_activity_at_utc: exact_timestamp_or_UNVERIFIED
explicit_hold: true | false
auto_sleep_rearm_eligible_after_utc: exact_timestamp_or_NOT_ELIGIBLE
auto_sleep_rearm_status: NOT_ELIGIBLE | ELIGIBLE | REARMED | BLOCKED_UNVERIFIED
owner_final_review_requested: true | false
sleep_session_id: exact_id_or_NOT_ACTIVE
sleep_session_started_at_utc: exact_timestamp_or_NOT_ACTIVE
sleep_session_completed_tasks: []
sleep_session_pending_owner_review_tasks: []
latest_automated_reviewed_sha: exact_sha_or_UNVERIFIED
latest_manual_reviewed_sha: exact_sha_or_NOT_REVIEWED
```

## Finding 6 — worker/reviewer mutual exclusion

Use one existing-checkpoint coordination lock:

```yaml
active_actor: NONE | OWNER | CODEX_WORKER | CHATGPT_REVIEWER
actor_started_at_utc: exact_timestamp_or_NOT_ACTIVE
automation_phase: WORK_READY | WORKING | READY_FOR_REVIEW | REVIEW_IN_PROGRESS | FIX_REQUIRED | REVIEW_PASS_PENDING_OWNER | PENDING_OWNER_ACTION
review_target_sha: exact_sha_or_UNVERIFIED
```

No scheduled writer may act while another actor is active. A stale, contradictory, or head-mismatched lock must produce an existing blocked state rather than guessed recovery.

## Finding 7 — canonical checkpoint and evidence are stale

After implementing Findings 1–6, update the same checkpoint, test evidence, and completion report to record:

```text
EXACT FINAL HEAD SHA
LIVE PR AND CHECK STATE AT THAT SHA
GOVERNANCE POLICY DEFINED
AUTOMATION RUNTIME VERIFIED OR UNVERIFIED
SLEEP MODE ARMED OR NOT ARMED
AUTO-REARM ELIGIBILITY AND LAST VERIFIED OWNER ACTIVITY
AUTOMATED REVIEW STATE
OWNER FINAL REVIEW STATE
AUTHORIZED SLEEP QUEUE STATE
ACTIVE ACTOR AND AUTOMATION PHASE
CURRENT TASK/BRANCH/PR
NEXT EXACT ACTION
```

Do not claim operational automation or automatic re-arm when required configuration, timestamp, owner-activity, permission, or scheduler evidence is unverified.

## Required validation

Codex must:

1. Preserve the canonical 60-minute values and 60-to-120-minute polling window.
2. Verify deactivation immediately prevents new autonomous task advancement.
3. Verify every newer owner interaction resets the inactivity timer.
4. Verify auto-rearm occurs only after the exact recorded 60-minute threshold and the next hourly controller poll.
5. Verify unverified owner activity, timestamps, actor state, or explicit hold causes read-only blocked/pending behavior.
6. Verify automatic re-arm resumes the unchanged Codex priority rather than bypassing or reordering it.
7. Verify `CONTINUE_MODE` remains owner-controlled.
8. Verify `SLEEP_MODE` advances only through an explicit owner-authorized queue.
9. Verify automated review pass is anchored to an exact immutable SHA.
10. Verify Codex cannot write during `REVIEW_IN_PROGRESS`.
11. Verify ChatGPT cannot review while Codex owns the checkpoint.
12. Re-run every task-contract formatting, link, duplicate, path, secret, install, test, build, and GitHub check.
13. Update only the same branch, PR, checkpoint, evidence package, and review handoff.

## Exact next action

Codex must remain on `GOV-CX-001`, branch `governance/codex-execution-modes`, and PR `#19`.

Read this updated handoff, amend the GOV-CX-001 contract only as needed to authorize the smallest governance-path delta, preserve the existing Codex work/review sequence, implement Findings 2–7, rerun all required validations, update the same checkpoint and evidence, and stop again at `READY_FOR_REVIEW` for validation of this governance correction.

Do not activate `CX-R1-003` during this governance correction because the active pointer still records `sleep_queue_authorized: false`. Do not merge, create a duplicate task, branch, PR, policy, checkpoint, evidence package, or reviewer handoff.