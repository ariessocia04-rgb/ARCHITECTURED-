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
primary_model_preference: GPT-5.6-Sol
fallback_selection: OWNER_OR_AUTOMATION_CONFIGURED_AVAILABLE_CODEX_MODEL
fallback_goal: preserve_progress_and_apply_same_repository_rules
identical_skill_guaranteed: false
```

When the primary model is unavailable, rate-limited, or out of usage:

1. preserve all work, branch, commits, checkpoint, evidence, and PR state;
2. never restart or duplicate the task;
3. switch only to a model that is actually available in the owner's Codex selector or automation configuration;
4. re-read the entire required instruction chain after switching;
5. apply the same task contract, tests, security boundaries, review gate, and stop rules;
6. permit low-risk exact corrections, validation, evidence updates, and continued implementation only when the selected model is capable of the task and the contract does not require the primary model;
7. stop with `BLOCKED_MODEL_CAPACITY` when the available fallback cannot safely handle architecture-sensitive, migration-sensitive, security-sensitive, destructive, or broad multi-system work.

Automatic model switching is not assumed. It must be configured in the Codex automation or selected by the owner when the product requires manual model choice.

## Model-risk gate

The fallback may proceed without owner intervention only for work that is already fully specified and does not introduce a new architecture decision.

Stop for the primary model or owner decision when work includes:

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
