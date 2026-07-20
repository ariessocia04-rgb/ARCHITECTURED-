# GOV-CX-001 Review Handoff

## Review state

```text
FIX_REQUIRED
```

## Scope reviewed

- Active task: `GOV-CX-001`
- Branch: `governance/codex-execution-modes`
- Pull request: `#19`
- Live PR head before this review correction: `4187530ef586576023bc79aa749d83d048980c56`
- Review basis: `1plan.md`, applicable plan extensions, `AGENTS.md`, completion law, active prompt, task contract, checkpoint, evidence records, live PR/check state, and current official OpenAI automation documentation.

## External factual basis

The following official OpenAI sources were checked on `2026-07-20`:

1. [Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
   - ChatGPT scheduled tasks can run one-off or recurring monitoring work.
   - Tasks cannot run more than once per hour.
   - Scheduled tasks and Codex-focused automations are separate product capabilities and must not be assumed to trigger each other automatically.
   - Scheduled tasks may pause and must be checked for active/paused state.
   - Scheduled tasks do not support webhooks, so completion-to-review coordination must use scheduled polling rather than an assumed event callback.
   - Tasks can use connected apps only when the required app and permissions are available.

2. [Scheduled tasks / Automations](https://learn.chatgpt.com/docs/automations)
   - Scheduled tasks can return to the same chat, poll GitHub or another connected source, and continue a review loop.
   - Git repository tasks may use the local project or a dedicated worktree.
   - Local project runs require the computer to remain on and the ChatGPT desktop app to remain running.
   - Scheduled tasks run unattended under configured sandbox and permission settings; required repository/network/plugin permissions must be explicit.

3. [ChatGPT desktop settings](https://learn.chatgpt.com/docs/reference/settings)
   - `Prevent sleep while running` exists for local runs because local work may stop when the computer sleeps.

External documentation supports the owner's existing 60-minute design, but it does not prove that either required automation is configured, active, correctly permissioned, bound to this repository/thread, or able to update the canonical records.

## Finding 1 — previous 120-minute review direction was incorrect and is withdrawn

**Files:**

- `Codex Code/Reviews/GOV-CX-001/REVIEW_HANDOFF.md`
- `Codex Code/Prompts/EXECUTION_MODE.md`
- connected 60-minute references

**Problem:** The previous version of this handoff instructed Codex to replace the repository's 60-minute threshold with 120 minutes. That direction conflicts with the canonical task contract and the owner's clarified design. The repository consistently defines:

```text
ChatGPT reviewer cadence: 60 minutes
Codex automation cadence: 60 minutes
automatic re-arm threshold: 60 minutes
hourly polling activation window: 60 to 120 minutes
```

**Required correction:** Preserve the canonical 60-minute values. Do not implement the withdrawn 120-minute instruction. Verify that no correction commit changed the valid 60-minute design because of the superseded review direction.

**Reason:** The task contract explicitly accepts the hourly 60-to-120-minute re-arm window. Current official ChatGPT documentation also confirms that scheduled tasks cannot run more than once per hour.

**Required validation:** Search the PR and branch history for any uncommitted or committed 120-minute replacement caused by the previous handoff. Confirm the final policy, prompt, contract, checkpoint, and connected references remain consistently 60 minutes / 60-to-120 minutes.

## Finding 2 — policy exists, but actual automation runtime configuration and evidence are missing

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** The repository defines `chatgpt_review_interval_minutes: 60` and `codex_automation_interval_minutes: 60`, but it does not distinguish a policy default from an actually created and active ChatGPT scheduled reviewer task or Codex scheduled worker task. It also does not record whether:

- the ChatGPT reviewer task exists and is active rather than paused;
- the Codex scheduled worker exists and is active;
- both are bound to the correct repository, project/thread, branch, and PR;
- the ChatGPT task has GitHub read/write capability for the reviewer handoff and checkpoint paths;
- the Codex task has the required repository, network, sandbox, and branch permissions;
- a local project run has the computer on, the desktop app running, and sleep prevention configured when needed;
- the task uses the local checkout or a dedicated worktree;
- the last and next scheduled runs are factually known.

Without this evidence, the repository describes intended automation but cannot truthfully claim that Sleep Mode is operational.

**Required correction:** Add one non-duplicative runtime-truth section to the existing canonical `EXECUTION_MODE.md` authority and connect it minimally from `AGENTS.md` and `CONTINUE_PROTOCOL.md`. Extend the existing active checkpoint—without creating another policy or checkpoint—to record at least:

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

Do not fabricate task IDs, timestamps, permissions, configuration, or activation. When configuration cannot be verified, record `UNVERIFIED` and use an existing truthful blocked/pending state such as `BLOCKED_ENVIRONMENT`, `BLOCKED_CONTINUATION_STATE`, or `PENDING_OWNER_ACTION` as appropriate.

**Reason:** Repository policy is not runtime configuration evidence. Official OpenAI documentation requires an actual scheduled task, correct permissions, and—when local files are used—an available computer and running desktop app.

**Required validation:** Verify every new field against live product/task evidence when exposed. Confirm the repository no longer claims operational automation solely because a 60-minute policy value exists.

## Finding 3 — the worker/reviewer sequence needs a deterministic polling and mutual-exclusion rule

**Files:**

- `Codex Code/Prompts/EXECUTION_MODE.md`
- `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
- `AGENTS.md`
- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`

**Problem:** The existing priority list is directionally correct, but the exact handoff between the independent hourly worker and reviewer is not complete. The repository does not explicitly prevent both scheduled tasks from acting during the same polling window, and it can be misread as though Codex completion immediately triggers ChatGPT review. ChatGPT scheduled tasks do not support webhooks, so review occurs only when the reviewer task next polls the repository.

**Required correction:** Add one exact sequence using the existing checkpoint and handoff as the coordination lock:

```text
OWNER OR VERIFIED CONTROLLER ARMS SLEEP_MODE
→ CODEX HOURLY RUN READS REPOSITORY AND CHECKPOINT
→ IF MANUAL MODE: READ-ONLY STOP
→ IF REVIEW_IN_PROGRESS OR REVIEW_PASS_PENDING_OWNER: STOP
→ IF FIX_REQUIRED: APPLY ONLY THE RECORDED FIXES
→ OTHERWISE RESUME THE FIRST INCOMPLETE ACTIVE-TASK ITEM
→ RUN VALIDATIONS, PUSH TO THE SAME BRANCH/PR, UPDATE EVIDENCE
→ SET READY_FOR_REVIEW AND RELEASE WORKER OWNERSHIP
→ CHATGPT REVIEWER ON ITS NEXT HOURLY RUN RECONCILES THE IMMUTABLE HEAD AND CHECKS
→ SET REVIEW_IN_PROGRESS BEFORE REVIEW WRITES
→ WRITE FIX_REQUIRED OR REVIEW_PASS_PENDING_OWNER
→ RELEASE REVIEWER OWNERSHIP
→ CODEX MAY ACT AGAIN ONLY ON A LATER RUN AND ONLY FOR FIX_REQUIRED
→ OWNER ALONE APPROVES/MERGES
```

Use one small canonical actor/lease field in the existing checkpoint, for example:

```yaml
active_actor: NONE | OWNER | CODEX_WORKER | CHATGPT_REVIEWER
actor_started_at_utc: exact_timestamp_or_NOT_ACTIVE
automation_phase: WORK_READY | WORKING | READY_FOR_REVIEW | REVIEW_IN_PROGRESS | FIX_REQUIRED | REVIEW_PASS_PENDING_OWNER | PENDING_OWNER_ACTION
```

A scheduled run must make no write when another actor is active, the actor state is stale or contradictory, or the live head/check state does not match the checkpoint. Use existing blocked states; do not invent a parallel result taxonomy.

**Reason:** `1plan.md` prohibits workers from racing or overwriting active work. Polling-based systems require an explicit repository lock/state transition because there is no guaranteed cross-product event trigger.

**Required validation:** Simulate or document the expected result for each phase, verify Codex cannot write during `REVIEW_IN_PROGRESS`, verify ChatGPT cannot review while the worker owns the checkpoint, and verify both stop at owner-only boundaries.

## Finding 4 — canonical checkpoint and completion evidence are stale relative to the live PR head and handoff

**Files:**

- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** The checkpoint still records `validated_correction_head_sha: 48d2991e980cf28df5228369e808ca17470d76cf` and `review_handoff_state: NO_REVIEW_HANDOFF`, while the live PR head before this correction was `4187530ef586576023bc79aa749d83d048980c56` and the canonical handoff exists with `FIX_REQUIRED`. The completion report also says no handoff exists. These records contradict live repository state.

**Required correction:** After applying Findings 1–3, update the same checkpoint and evidence package to record the exact final correction head, live PR state, reviewer-handoff state, runtime configuration truth, actor/phase state, and required check results at that same immutable SHA. The completion report must distinguish:

```text
GOVERNANCE POLICY DEFINED
AUTOMATION RUNTIME VERIFIED OR UNVERIFIED
SLEEP MODE ARMED OR NOT ARMED
CURRENT REVIEW STATE
OWNER-ONLY ACTION
```

Do not claim operational Sleep Mode when the required scheduled tasks or permissions are unverified.

**Required validation:** Re-run every task-contract validation, push only to the same branch, verify all required GitHub checks at the final head, and confirm PR metadata, checkpoint, evidence, completion report, handoff, and live head agree.

## Exact next action

Codex must remain on task `GOV-CX-001`, branch `governance/codex-execution-modes`, and PR `#19`. Read this corrected handoff, preserve the canonical 60-minute design, implement only Findings 2–4 within the existing allowed paths, re-run all required validations, update the same checkpoint and evidence, and stop again at `READY_FOR_REVIEW`.

Do not merge, activate `CX-R1-003`, create another task, branch, PR, policy, checkpoint, evidence package, or reviewer handoff. The independent reviewer will inspect the final immutable head after Codex stops.