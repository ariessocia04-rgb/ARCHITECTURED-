# CX-R1-002 — ARMORED PROMPT 0001

## 1. Prompt identity

```yaml
task_id: CX-R1-002
prompt_sequence: 0001
prompt_type: INITIAL
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
active_task_title: CI, Quality, and Security Baseline
status: CURRENT
authorized_by: Aries Socia
authorized_at: 2026-07-19
authorization_scope: Complete the CI, quality, security, artifact-evidence, and contributor-command baseline only.
supersedes: none
checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
canonical_implementation_root: Codex Code/Implementation/
github_workflow_exception: .github/workflows/ only
next_task_authorized: false
```

Read and obey `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md` and
`Codex Code/CURRENT_TASK_COMPLETION_LAW.md`.

## 2. Role

Codex is the controlled CI, quality, and security baseline engineer for CX-R1-002. It is not a
product engineer, architect, database/migration author, observability implementer, reviewer, or
merger.

## 3. Goal and definition of done

Create the required GitHub Actions checks, documented required-check and branch-review policy,
artifact retention, reproducible contributor commands, and factual evidence. Pass the complete
clean-checkout validation twice, create one draft PR to `main`, and stop before merge.

```text
FINISH THE ENTIRE CURRENT AUTHORIZED TASK.
DO NOT BEGIN CX-R1-003 OR ANY LATER TASK.
```

## 4. Project and domain background

Release 1 uses the existing version-pinned modular-monolith workspace at
`Codex Code/Implementation/`. CX-R1-001 supplied a minimal non-product Next/Rust foundation;
CX-R1-002 protects that foundation without introducing domain behavior. Consult the release and
technology sources rather than copying their architecture into implementation folders.

## 5. Current live state and continuation checkpoint

```yaml
previous_status: CX-R1-001 APPROVED_COMPLETE
base_main_sha: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
current_branch: agent/cx-r1-002-ci-quality-security
current_pull_request: NONE
completed_items:
  - CX-R1-001 PR #16 was merged and main was synchronized/read back.
  - CX-R1-001 closure records and CX-R1-002 activation controls were created.
incomplete_items:
  - CI workflows, runbooks, migration-boundary script, validations, evidence, commit, push, and draft PR.
failed_checks_or_review_comments: []
first_incomplete_action: Implement the scoped CI baseline from the existing locked workspace scripts.
checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
```

Reconcile this state against live Git and GitHub before editing.

## 6. Required source-of-truth reading order

1. `1plan.md`, applicable Release 1 extension, `README.md`, `revise.md`, and `index.md`.
2. `Implementation Planning/Release 1 MVP/INDEX.md`, release manifest, technology lock,
   environment/deployment plan, canonical implementation override, and task manifest.
3. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`, armored requirements, armored master prompt,
   task-storage rules, prompt chain, active task, registry, CX-R1-002 task record/contract/checkpoint.
4. Existing workspace `README.md`, `package.json`, locks, testing scripts, and CI boundary README.
5. CX-R1-001 review/merge records and live branch, PR, workflow, test, and worker state.

## 7. Authorization matrix

```yaml
implementation_authorized: true
authorized_task: CX-R1-002
local_checkout_discovery_authorized: true
read_only_fetch_authorized: true
source_code_changes_authorized: true
documentation_changes_authorized: true
dependency_installation_authorized: true
migration_authorized: false
branch_creation_authorized: true
commit_authorized: true
push_authorized: true
pull_request_authorized: true
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
architecture_change_authorized: false
automatic_next_task_authorized: false
```

## 8. Allowed tools

Use PowerShell, Git, `gh`, Node/Corepack/pnpm, Cargo/Rustfmt, and GitHub Actions-compatible YAML.
Use `gh` only with the configured repository authentication; never request or store a token.

## 9. Prohibited tools and actions

Do not force-push, push `main`, self-merge, reset, clean, discard valid work, weaken checks,
change dependency pins, introduce secrets, alter architecture, create a parallel source tree, or
implement product, database, migration, deployment, observability, or later-task work.

## 10. Allowed and protected paths

Allowed paths are exactly those in `Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md`. Project
executable files belong under `Codex Code/Implementation/`; `.github/workflows/` is permitted only
because GitHub Actions requires workflows at that repository location. All other root-level source
trees and architecture/release-plan documents are protected.

## 11. Existing-work and duplicate classification

Classify the CX-R1-001 workspace scripts, locks, and CI boundary README as `EXISTING_COMPLETE` and
reuse them. Classify absent workflows/runbooks/migration-boundary script as `NEW_ADDITIVE`. A
workflow, report, or runbook with an overlapping purpose is `DUPLICATE` and must be reused or
updated, never recreated. Any conflicting active worker or source ownership is `CONFLICT` and
requires a factual checkpoint.

## 12. Complete implementation or verification sequence

1. Verify branch/base/working state and inspect existing CI/workflow paths.
2. Create scoped task prompt/contract and reconcile CX-R1-001 closure controls.
3. Add locked workspace commands and a migration-boundary validation without adding migrations.
4. Add quality/security and dependency-review workflows with least-privilege permissions.
5. Add CI and contributor runbooks defining exact check names, retention, and branch policy.
6. Run format, lint, typecheck, unit, build, lock, duplicate-path, migration, secret, and Rust checks.
7. Perform two clean-checkout/frozen-install validation runs and record command results/hashes.
8. Perform scope/security/duplicate review, create factual evidence, commit, push, open a draft PR,
   inspect PR checks/conflicts, and stop before merge.

## 13. Non-negotiable architecture and business rules

The version-pinned workspace remains canonical. CI must fail closed on required checks, use the
existing locks, and not add business behavior. Existing domain, tenant, role, workflow, financial,
inventory, provider, and printing rules remain unchanged and unimplemented by this task.

## 14. Database, RLS, API, event, queue, and idempotency rules

Database/RLS/API/event/queue work is `NOT_APPLICABLE`: CX-R1-002 creates no migration or product
integration. The CI migration-boundary check verifies that no migration workspace was introduced.
Workflow and local commands must be rerunnable from the committed locks without source changes.

## 15. UX, accessibility, responsive, offline, and failure-state rules

Product UX is `NOT_APPLICABLE`. Contributor documentation must be readable, state failure/repair
commands clearly, and not claim visual-design approval.

## 16. Security and privacy requirements

Use minimal workflow permissions; never expose secrets in YAML, artifacts, logs, or evidence.
Scan implementation content for configured secret patterns, retain only test/build metadata, and
document that branch protection is an owner-controlled GitHub setting. No security control may be
disabled to obtain a passing result.

## 17. Required tests and exact evidence

Run frozen install, format, lint, typecheck, unit tests, production build, release-lock,
duplicate-path, migration-boundary, secret, Rust format, and locked Rust checks. Run the complete
clean-checkout suite twice. Record exact commands, exit results, artifact names/retention, changed
files, scope/security review, and completion state under `Codex Code/Tasks/CX-R1-002/`.

## 18. Branch, commit, PR, review, and merge rules

Use only `agent/cx-r1-002-ci-quality-security`, base `main`, commit the reviewed scoped changes,
push normally, and open one draft PR. An external owner/reviewer alone approves or merges. Read
back the remote branch and PR state after publication; do not merge.

## 19. Blocker and checkpoint behavior

For a real blocker, update the checkpoint with exact commands/errors, completed/incomplete work,
affected paths, branch/PR, and the first safe continuation action. Browser sign-in, 2FA, UAC, and
final merge approval are the only owner pauses. A blocker never authorizes CX-R1-003.

## 20. Required final report

The completion report must state `CX-R1-002_READY_FOR_OWNER_MERGE`, authorization/base/branch/PR,
source and existing-work classifications, exact changed paths, no migrations/APIs/events result,
both validation runs, artifact/retention evidence, security/scope outcome, checks/conflicts/risks,
and confirmation that CX-R1-003 was not started.

## 21. Completion and stop condition

Finish only after all applicable implementation, two clean-checkout validation runs, factual
evidence, commit, push, draft PR, and PR inspection are complete. Stop before merge. `STOP` never
authorizes the next task.
