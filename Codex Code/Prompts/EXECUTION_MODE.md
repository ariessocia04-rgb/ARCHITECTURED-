# CODEX EXECUTION MODE POLICY

## Authority and purpose

This is the single canonical policy for the owner commands `continue`, `sleep mode`, `deactivate sleep mode`, and `stop sleep mode`, including reviewer handoff and model-fallback behavior.

It defines operational behavior only. It does not authorize a product task, broaden an active task, approve a pull request, or permit a merge.

## Safe default

```yaml
default_mode: CONTINUE_MODE
auto_sleep_enabled: true
auto_sleep_after_owner_inactivity_minutes: 60
chatgpt_review_interval_minutes: 60
codex_automation_interval_minutes: 60
actual_auto_sleep_activation_window_minutes: 60_to_120
```

The hourly activation window exists because scheduled checks cannot run more frequently than once per hour. No worker may claim an exact minute-60 activation unless live scheduler evidence proves it.

## Owner commands

### `continue`

`continue` means:

- operate in `CONTINUE_MODE` for the current owner interaction;
- read the complete repository-backed instruction chain;
- resume only the one active authorized task;
- obey the active prompt, contract, checkpoint, review handoff, allowed paths, tests, and stop rules;
- stop before merge and before activating another task.

### `sleep mode`

`sleep mode` means:

- arm `SLEEP_MODE` for the current repository and same Codex project/thread;
- allow scheduled Codex runs to resume the one active authorized task;
- allow the external ChatGPT reviewer to inspect completed Codex output on its scheduled interval;
- require Codex to read the canonical reviewer handoff before any correction;
- allow exact review corrections on the same authorized branch and pull request;
- allow later tasks only when they are explicitly listed in a repository-backed owner-authorized sleep queue and every predecessor is `APPROVED_COMPLETE` after external review, merge, and main read-back.

`sleep mode` is not blanket permission to build the whole repository, select tasks, change architecture, approve work, or merge.

### `deactivate sleep mode` and `stop sleep mode`

These commands mean:

- immediately return to `CONTINUE_MODE`;
- scheduled Codex runs must not modify code while the owner remains active;
- the owner resumes work using the single command `continue`;
- if no newer owner activity or explicit hold is observed for at least 60 minutes, the external ChatGPT controller may re-arm `SLEEP_MODE` on its next hourly run;
- because the controller checks hourly, re-arming may occur between 60 and 120 minutes after the last observable owner activity.

## Required reading order

Before either manual or scheduled execution, read:

1. `AGENTS.md`;
2. `1plan.md`;
3. `1plan-EXTENSIONS_INDEX.md` and applicable extensions;
4. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`;
5. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`;
6. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`;
7. `Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md`;
8. `Codex Code/Prompts/INDEX.md`;
9. this file;
10. `Codex Code/Prompts/ACTIVE_TASK.md`;
11. `Codex Code/Prompts/PROMPT_REGISTRY.md`;
12. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`;
13. the active task prompt, record, contract, checkpoint, changed-files manifest, evidence, and reviewer handoff;
14. live Git, GitHub, PR, checks, review, artifact, and working-tree state.

## Reviewer handoff

The only operational reviewer handoff path is:

```text
Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md
```

Allowed handoff states:

```text
NO_REVIEW_HANDOFF
REVIEW_IN_PROGRESS
FIX_REQUIRED
REVIEW_PASS_PENDING_OWNER
BLOCKED_REVIEW
```

Rules:

- Create or update only one handoff for the active task.
- `FIX_REQUIRED` must identify the exact file, problem, required correction, reason, required validation, and next action.
- Codex may correct only findings within the active task contract and allowed paths.
- `REVIEW_PASS_PENDING_OWNER` forbids further code changes and later-task activation.
- The operational handoff does not replace the terminal `REVIEW_RESULT.md` stored with the task after external approval.

## Sleep-mode execution priority

On every scheduled Codex run in `SLEEP_MODE`, use this priority:

```text
VERIFY REPOSITORY AND MODE
→ READ ACTIVE TASK AND LIVE STATE
→ READ REVIEW_HANDOFF
→ FIX_REQUIRED: APPLY ONLY EXACT AUTHORIZED CORRECTIONS
→ PENDING CHECKS: WAIT OR RECHECK SAFELY
→ INCOMPLETE ACTIVE TASK: RESUME FIRST INCOMPLETE VERIFIED ITEM
→ READY_FOR_REVIEW: STOP FOR EXTERNAL REVIEW
→ REVIEW_PASS_PENDING_OWNER: STOP FOR OWNER
→ APPROVED_COMPLETE: CONSIDER ONLY AN EXPLICIT AUTHORIZED SLEEP QUEUE
→ OTHERWISE STOP BLOCKED
```

## Five-minute CI wait behavior

Within one Codex run, after a push or check-triggering action, Codex may wait five minutes and recheck external results only when:

- the environment and task contract permit waiting;
- no owner-only approval is required;
- no rate or runtime limit is being hidden;
- the total wait remains within the task contract's execution limit.

If results are still pending, return `PENDING_EXTERNAL_CHECKS` and stop. Do not create a busy loop or repeated commits.

## Authorized sleep queue

A sleep queue is optional. It must be stored once in the applicable task or release control and must contain exact task IDs in order.

A queued next task may start only when all are true:

1. the queue explicitly lists it;
2. its prompt, task record, contract, checkpoint, dependencies, allowed paths, tests, and stop rules already exist;
3. the previous task passed independent external review;
4. the previous PR was owner-authorized and merged;
5. latest `main` was read back and verified;
6. the previous task has a factual `REVIEW_RESULT.md` and `MERGE_RECORD.md` with status `APPROVED_COMPLETE`;
7. there is no active worker, branch, PR, schema, migration, workflow, or evidence overlap;
8. no owner-only decision or blocker exists.

Without all eight conditions, stop. Never infer authorization from task order alone.

## Model continuity and fallback policy

Repository instructions, contracts, checkpoints, tests, and evidence preserve workflow continuity across model switches. They do not make different models identical in capability.

```yaml
model_policy:
  primary_coding_model: GPT-5.6-Sol
  fallback_model: GPT-5.6-Terra
  polling_model: GPT-5.6-Luna

sol_limit_behavior:
  preserve_all_work: true
  never_restart_task: true
  never_duplicate_branch_or_pr: true
  retry_after_reset: true

terra_allowed:
  - inspect_status
  - read_rules_and_checkpoint
  - read_review_handoff
  - run_existing_validations
  - apply_exact_low_risk_fix
  - update_evidence

terra_forbidden:
  - architecture_change
  - schema_or_migration_design
  - security_contract_change
  - broad_refactor
  - new_feature_selection
  - merge_or_approval

luna_allowed:
  - inspect_status
  - report_pending_state

on_insufficient_model_capacity:
  status: BLOCKED_MODEL_QUOTA
  action: WAIT_FOR_SOL
```

### Required self-behavior on every run

1. Identify the actual selected model when the environment exposes it. Never claim a model identity that cannot be verified.
2. Re-read the complete canonical instruction chain after every model switch, interruption, resumed run, or scheduled activation.
3. Preserve the same task, branch, commits, checkpoint, evidence, review handoff, and PR. Never restart from zero or create a replacement branch or PR.
4. If Sol is available, use it for architecture-sensitive implementation, broad multi-file coding, schema or migration work, security contracts, difficult debugging, and final complex corrections already authorized by the active task.
5. If Sol is unavailable and Terra is selected, Terra may perform only the exact `terra_allowed` actions. A low-risk fix must already be fully documented by the active prompt, task contract, or `FIX_REQUIRED` handoff and must not require a new design decision.
6. Terra must refuse every `terra_forbidden` action and stop with `BLOCKED_MODEL_QUOTA` / `WAIT_FOR_SOL` rather than approximating, broadening scope, or weakening validation.
7. Luna is read-only. It may inspect live status and report the pending state only. It must not edit files, commit, push, change checkpoints, apply fixes, approve, merge, or activate another task.
8. `retry_after_reset: true` means a later owner-controlled or scheduled run may re-read repository state and retry after Sol becomes available. It does not authorize a hidden background loop, fabricated scheduler, repeated commits, or automatic model switching unsupported by the Codex product.
9. Automatic switching among Sol, Terra, and Luna is valid only when the owner or Codex automation configuration actually supports and selects those models. Otherwise preserve state and report the exact manual model action required.
10. When no available model can safely perform the first incomplete authorized item, write no speculative code. Preserve all work and return:

```text
BLOCKED_MODEL_QUOTA
WAIT_FOR_SOL
```

## Model-risk gate

The fallback may proceed without owner intervention only for work that is already fully specified and does not introduce a new architecture decision.

Stop for Sol or an owner decision when work includes:

- unresolved architecture or product choices;
- new schema or migration design;
- authentication, authorization, RLS, secrets, payment, privacy, or security contract changes;
- broad refactors or new dependencies not already authorized;
- destructive operations;
- conflicting canonical sources;
- unclear acceptance criteria.

## Strict invariants

All modes and models must preserve:

- one active task;
- one canonical prompt chain;
- one authorized task branch and PR;
- no duplicate files, prompts, plans, tasks, branches, PRs, schemas, migrations, workflows, reports, checkpoints, reviews, or implementation roots;
- no deletion, rename, move, overwrite, reset, clean, stash, discard, or history rewrite without exact authorization and recovery plan;
- no self-review, self-approval, self-merge, or unreviewed next-task activation;
- no bypass of authentication, 2FA, security confirmations, architecture decisions, repository settings, or owner approval;
- truthful status backed by live evidence.
