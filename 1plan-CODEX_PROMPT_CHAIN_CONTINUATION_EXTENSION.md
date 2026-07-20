# 1PLAN EXTENSION — CODEX PROMPT CHAIN AND CONTINUATION

## Authority

`1plan.md` remains the master source of truth. This additive extension records the owner-approved persistent prompt-chain, continuation, execution-mode, reviewer-handoff, and model-continuity mechanism for Codex.

## Owner intent

Every Codex prompt is stored in GitHub so work can continue across interrupted sessions without relying on chat memory.

When the owner says `continue`, Codex must know:

- the exact active task;
- the complete prompt history;
- the latest valid instruction;
- the last verified checkpoint;
- what was completed;
- what remains incomplete;
- the correct branch and PR;
- the exact first next action;
- that the next task is forbidden until the current task is fully complete or an exact owner-authorized sleep queue is verified.

When the owner says `sleep mode`, ChatGPT and Codex must use the same repository-backed strict plan, reviewer handoff, active-task contract, and stop rules.

## Canonical paths

```text
AGENTS.md                                  = repository-level Codex entry commands and non-negotiable rules
Codex Code/Prompts/                        = append-only prompt chain and operational controls
Codex Code/Prompts/EXECUTION_MODE.md       = canonical continue/sleep/deactivation/review/model policy
Codex Code/Prompts/ACTIVE_TASK.md          = only task manual or scheduled continuation may resume
Codex Code/Prompts/PROMPT_REGISTRY.md      = prompt sequence/status registry
Codex Code/Prompts/CONTINUE_PROTOCOL.md    = live-state reconciliation and resume algorithm
Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md = one operational ChatGPT-to-Codex review handoff
Codex Code/Tasks/<TASK-ID>/CHECKPOINT.md   = exact interruption/resume state
Codex Code/Tasks/<TASK-ID>/REVIEW_RESULT.md = terminal independent review evidence
Codex Code/Tasks/<TASK-ID>/MERGE_RECORD.md = terminal merge and main-read-back evidence
Codex Code/CURRENT_TASK_COMPLETION_LAW.md  = no-next-task completion gate
Codex Code/Implementation/                 = all executable source code
```

## Required lifecycle

```text
OWNER CREATES OR APPROVES PROMPT
→ STORE NEXT NUMBERED PROMPT IN GITHUB
→ REGISTER PROMPT
→ POINT ACTIVE_TASK TO EXACT TASK/PROMPT/CHECKPOINT
→ SELECT CONTINUE_MODE OR SLEEP_MODE
→ CODEX READS FULL CHAIN, REVIEW HANDOFF, AND LIVE REPOSITORY STATE
→ CODEX CONTINUES THE SAME AUTHORIZED TASK
→ CODEX COMPLETES FULL AUTHORIZED SCOPE
→ CODEX CHECKPOINTS FOR INTERRUPTION, EXTERNAL CHECK, REVIEW, OR BLOCKER
→ EXTERNAL CHATGPT REVIEW WRITES ONE REVIEW_HANDOFF
→ EXACT CORRECTION REMAINS THE SAME TASK/BRANCH/PR
→ OWNER-AUTHORIZED MERGE AND MAIN READ-BACK
→ APPROVED_COMPLETE
→ OWNER MAY ACTIVATE NEXT TASK OR AN EXACT AUTHORIZED SLEEP QUEUE
```

## No-premature-next-task rule

A task may not be replaced by the next manifest task because one step, file, command, check, model run, or phase finished.

These are not completion:

```text
BLOCKED
INTERRUPTED
FAILED_VALIDATION
PENDING_EXTERNAL_CHECKS
READY_FOR_REVIEW
REVIEW_PASS_PENDING_OWNER
WAITING_FOR_OWNER
BLOCKED_MODEL_CAPACITY
```

Only an externally recorded terminal state may release the active-task pointer:

```text
APPROVED_COMPLETE
OWNER_CANCELLED
OWNER_SUPERSEDED_WITH_MIGRATION_PLAN
```

A sleep queue does not weaken this rule. It only pre-authorizes a named successor after every predecessor review, owner merge, main read-back, terminal record, and overlap gate is verified.

## Append-only rule

- Earlier prompts remain as immutable history.
- Corrections use a new sequence number and explicitly state what they supersede.
- A prompt never silently authorizes another task.
- A stale chat message cannot override the latest merged GitHub prompt chain.
- Completed code is not recopied or regenerated after interruption or model switch.
- A mode change alone does not create a new prompt unless executable repository instructions materially change.

## Canonical execution modes

### Manual `CONTINUE_MODE`

The owner command is:

```text
continue
```

Codex reads the repository chain and resumes only the active task. A scheduled Codex run must not edit code while manual mode remains active and the owner is present.

### Scheduled `SLEEP_MODE`

The owner command is:

```text
sleep mode
```

Sleep mode permits scheduled work only within the active task contract. It allows:

- safe continuation from the checkpoint;
- bounded waiting and rechecking of external checks;
- independent ChatGPT review;
- exact in-scope `FIX_REQUIRED` corrections;
- a named next task only when an explicit owner-authorized sleep queue and all predecessor gates are verified.

Sleep mode never authorizes Codex to review, approve, or merge its own work.

### Deactivation

The commands are:

```text
deactivate sleep mode
stop sleep mode
```

They return the workflow to manual `CONTINUE_MODE`. When the external ChatGPT controller observes at least 60 minutes without newer owner activity or an explicit hold, it may re-arm sleep behavior on its next hourly check. The truthful possible activation window is 60 to 120 minutes because scheduled checks are hourly.

## Reviewer-worker separation

ChatGPT and Codex communicate through one operational handoff:

```text
Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md
```

ChatGPT may inspect and write review findings only after the worker has stopped at a reviewable state. Codex must read the handoff before correction and may fix only exact findings within the active contract and allowed paths.

ChatGPT must not edit implementation while Codex owns the active branch. Codex cannot replace terminal independent review with its own assessment.

## Five-minute check behavior

Five minutes is a bounded wait/recheck interval inside a Codex run after a push or check-triggering action. It is not a five-minute ChatGPT schedule and must not become a busy loop.

When checks remain pending after the allowed wait, Codex records `PENDING_EXTERNAL_CHECKS` and stops. The external reviewer and Codex automations operate on their supported schedule.

## Model continuity and fallback

Primary preference is `GPT-5.6-Sol`. The repository preserves the same instructions, scope, branch, checkpoint, tests, and review gates when a different available Codex model is selected.

Different models are not guaranteed to have identical capability. A fallback may continue fully specified, non-destructive, in-scope work only when it can safely meet the contract. It must stop with `BLOCKED_MODEL_CAPACITY` for unresolved architecture, migrations, authentication/authorization/RLS, secrets, payments, privacy, security contracts, destructive operations, broad unapproved refactors, or unclear acceptance criteria.

Automatic switching is not assumed unless the Codex automation is configured for it. A model limit must never cause task restart, duplicate code, a second branch, or a second PR.

## Historical activation snapshot

The following earlier snapshot is preserved as history and is not the live pointer:

```text
ACTIVE TASK: CX-R1-000
CURRENT PROMPT: 0002-CONTINUE-AFTER-ENVIRONMENT-BLOCK
CURRENT CHECKPOINT: Codex Code/Tasks/CX-R1-000/CHECKPOINT.md
PREVIOUS RESULT: BLOCKED_ENVIRONMENT
CONTINUATION SAFE: YES, FROM THE REAL GIT CHECKOUT
SOURCE CODE AUTHORIZED: NO
NEXT TASK CX-R1-001 AUTHORIZED: NO
```

## Current connected status

```text
PROMPT CHAIN: DEFINED
ACTIVE TASK POINTER: DEFINED
CONTINUE PROTOCOL: DEFINED
EXECUTION MODE POLICY: DEFINED
SLEEP MODE REVIEW/CORRECTION LOOP: DEFINED
MODEL FALLBACK RISK GATE: DEFINED
CURRENT GOVERNANCE TASK: GOV-CX-001
PREVIOUS RELEASE TASK: CX-R1-002 = APPROVED_COMPLETE
NEXT RELEASE TASK CX-R1-003 AUTHORIZED: NO
APPLICATION PRODUCT CODE AUTHORIZED BY GOV-CX-001: NO
```
