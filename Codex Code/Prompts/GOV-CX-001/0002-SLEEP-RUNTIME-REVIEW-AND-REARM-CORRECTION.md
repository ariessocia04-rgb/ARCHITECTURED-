# GOV-CX-001 Prompt 0002 — Sleep Runtime, Review, and Rearm Correction

## 1. Prompt identity

```yaml
task_id: GOV-CX-001
prompt_sequence: 0002
prompt_type: REVIEW_FIX
release_id: REPOSITORY_GOVERNANCE
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: Canonical Continue, Sleep, Review, and Model Fallback Controls
status: CURRENT
supersedes: affected executable sleep-runtime, review-pass, queue, rearm, and actor-coordination rules in Prompt 0001
checkpoint_path: Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md
canonical_implementation_root: Codex Code/Implementation/
next_task_authorized: false
```

Prompt 0001 remains immutable history and continues to govern every unaffected requirement.

## 2. Role

Act as the controlled governance correction worker for GOV-CX-001. Do not act as product owner, autonomous architect, independent reviewer, approver, merger, or task selector.

## 3. Goal

Correct only the owner-authored `FIX_REQUIRED` findings in the one canonical review handoff. Separate configured policy from runtime truth, preserve the owner-selected 60-minute cadence, make review-pass behavior mode-sensitive, define safe rearm and mutual exclusion, align the permanent completion controls, update factual evidence, and return the same draft PR to independent review.

Done means the full correction is internally consistent, validated, committed and pushed to the existing branch and PR, with CX-R1-003 still unauthorized.

## 4. Background and non-goals

GOV-CX-001 is a repository-governance task. It changes no product behavior, executable application source, dependency, workflow, database, migration, API, UI, role, permission, deployment, or observability implementation.

The owner-authorized Sleep Mode exception is narrow: an automated external review pass may permit only the next task already listed in a complete owner-authorized sleep queue. It never creates a queue, completes or merges the predecessor, erases pending owner review, or authorizes arbitrary selection.

## 5. Current live state

```yaml
reviewed_head_before_correction: 2ac4ff631d5bff4912e3fb03c39ac3ff9ec3f98a
branch: governance/codex-execution-modes
pull_request: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/19
pull_request_state_at_amendment: OPEN_DRAFT_CLEAN
review_handoff_state: FIX_REQUIRED
execution_mode: CONTINUE_MODE
sleep_queue_authorized: false
next_task_authorized: false
```

Reconcile every value with live Git and GitHub before writing.

## 6. Required source order

Read the complete order in `AGENTS.md`, then Prompt 0001, this prompt, the task record, version 2 contract, checkpoint, all existing evidence, the one review handoff, the actual automation configuration exposed by the current product, and live Git/GitHub state.

## 7. Authorization matrix

```yaml
implementation_authorized: true
authorized_task: GOV-CX-001
authorization_scope: owner-authored review corrections to governance, prompt, task, evidence, and connected completion-control files only
local_checkout_discovery_authorized: true
local_git_clone_authorized: false
read_only_fetch_authorized: true
source_code_changes_authorized: false
documentation_changes_authorized: true
dependency_installation_authorized: validation_only
migration_authorized: false
branch_creation_authorized: false
commit_authorized: true
push_authorized: true
pull_request_authorized: update_existing_only
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
architecture_change_authorized: bounded_governance_amendment_only
automatic_next_task_authorized: false
```

## 8. Allowed tools and prohibited actions

Use read-only repository/GitHub inspection, normal fast-forward Git synchronization, `apply_patch`, pinned repository formatting, frozen installation, existing test/build scripts, Cargo/Rust checks, secret/path/link/duplicate validation, normal commits, normal push, and PR metadata updates.

Never force-push, reset, clean, stash, rewrite history, delete, rename, move, self-review, approve, merge, create another branch or PR, or start CX-R1-003.

## 9. Exact allowed paths

The version 2 task contract is the exact path authority. No path outside its list may change. Prompt 0001 must not be modified.

## 10. Existing-work classification

```text
Prompt 0001 and existing control system: EXISTING_PARTIAL, preserve
Prompt 0002: NEW_ADDITIVE append-only correction
Existing task evidence: EXISTING_PARTIAL, update in place
Review handoff: EXISTING_COMPLETE reviewer-owned finding source, preserve
Product implementation: OUT_OF_SCOPE
CX-R1-003: NOT_AUTHORIZED
```

## 11. Required correction sequence

1. Record this contract amendment and Prompt 0002 before material policy edits.
2. Claim worker ownership through the active checkpoint and a normal fast-forward push against the expected remote head.
3. Implement Findings 1–6 from the one handoff without changing their priority or inventing runtime facts.
4. Add the narrow Sleep Mode exception to every living permanent completion control that directly contradicts it; leave historical task records unchanged.
5. Update the same checkpoint and evidence package for Finding 7.
6. Run every required validation in this prompt and the contract.
7. Release worker ownership, push normally to the same branch, update PR metadata, verify live checks, and stop at `READY_FOR_REVIEW`.

## 12. Governance invariants

- The configured cadence and inactivity threshold remain 60 minutes; the configured hourly polling window remains 60 to 120 minutes.
- These are repository policy choices, not claims that the product cannot schedule more frequently.
- Static policy never proves an automation is configured, active, permissioned, or correctly bound.
- `CONTINUE_MODE` remains owner-controlled.
- `REVIEW_PASS_PENDING_OWNER` stops autonomous work in `CONTINUE_MODE`.
- In `SLEEP_MODE`, only a complete owner-authorized queue entry may permit one listed successor after an automated pass on an immutable SHA.
- One live active-task checkpoint exists at a time. Any queued handover changes the active pointer and successor checkpoint atomically and preserves the pending owner-review backlog.
- Worker and reviewer cannot own the checkpoint simultaneously. A stale lock, head mismatch, or non-fast-forward claim stops read-only.
- No merge occurs without separate exact owner authorization.

## 13. Data, API, and migration rules

`NOT_APPLICABLE`: no product data, schema, migration, RLS, API, event, queue, or idempotency implementation is authorized.

## 14. UX and accessibility rules

`NOT_APPLICABLE`: no product screen, route, component, interaction, responsive behavior, or accessibility implementation is authorized.

## 15. Security and privacy

Preserve least privilege, disclose no secrets or environment values, claim no unverified automation permission or binding, keep generated outputs outside Git, and do not weaken any validation or owner gate.

## 16. Required tests

Run and record:

```text
git status --short
git diff --check
whole-repository living-governance threshold and completion-gate searches
Prompt 0001/0002 registry, pointer, index, record, contract, and link consistency
runtime-truth field and timestamp arithmetic validation
mode/rearm/review/queue/actor transition table validation
exact PR manifest coverage and allowed-path validation
canonical duplicate and link/path checks
changed-file secret scan
pinned Markdown formatting for every PR Markdown path
pnpm install --frozen-lockfile
pnpm ci:check
pnpm audit --prod --audit-level=high
all six required GitHub checks on the final published correction head
```

Do not convert an unavailable command or product fact into a pass.

## 17. Evidence

Update only the existing GOV-CX-001 checkpoint, changed-files manifest, test evidence, security/scope review, and completion report. Preserve the one reviewer handoff and its `FIX_REQUIRED` state for independent rereview.

In-repository evidence cannot truthfully contain the SHA of the commit that contains that same SHA field. Record the immutable reviewed/correction target in-repository, and record the exact final evidence-bearing PR head and checks in live PR metadata and the next independent handoff. Never fabricate a self-referential commit SHA.

## 18. Branch, commit, PR, and review

Use only `governance/codex-execution-modes` and draft PR #19. Normal fast-forward commits and pushes are allowed. Codex cannot change the reviewer handoff to pass, approve, or merge.

## 19. Blocker and checkpoint behavior

A contradictory actor lock, unverified rearm prerequisite, non-fast-forward push, out-of-scope finding, failed required validation, or missing owner-only decision stops with the existing truthful state and an exact checkpoint. It never authorizes another task.

## 20. Required final report

Report the task, execution mode, model evidence, branch, final live head, PR, changed paths, exact validations, runtime truth, review handoff state, actor release, queue state, blockers/risks, next review action, and confirmation that CX-R1-003 was not started.

## 21. Completion and stop

Finish every authorized review correction that can be completed safely. After the branch, evidence, PR metadata, and checks are ready for independent rereview, return:

```text
READY_FOR_REVIEW
```

Stop before merge. Do not begin CX-R1-003.
