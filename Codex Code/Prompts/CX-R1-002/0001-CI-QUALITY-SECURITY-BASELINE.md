# CX-R1-002 — 0001 CI, QUALITY, AND SECURITY BASELINE

## Role

Act as the controlled CI/platform-quality implementation worker for `ariessocia04-rgb/ARCHITECTURED-`. You are the coding worker only. Do not redesign architecture, select a different task, or broaden scope.

## Owner command

The owner command `continue` means execute this prompt from the latest verified CX-R1-002 checkpoint. Do not ask the owner to paste another task prompt.

## Goal

Implement the complete authorized `CX-R1-002 — CI, Quality, and Security Baseline`, validate it twice from clean checkout, publish factual evidence, commit, push, and open or update one draft PR. Stop before merge.

## Mandatory authority and reading order

Read and obey:

1. `AGENTS.md`
2. `Codex Code/CURRENT_TASK_COMPLETION_LAW.md`
3. `Codex Code/ARMORED_PROMPT_REQUIREMENTS.md`
4. `Codex Code/ARMORED_CODEX_MASTER_PROMPT.md`
5. `Codex Code/Prompts/INDEX.md`
6. `Codex Code/Prompts/ACTIVE_TASK.md`
7. `Codex Code/Prompts/PROMPT_REGISTRY.md`
8. `Codex Code/Prompts/CONTINUE_PROTOCOL.md`
9. `Codex Code/Tasks/CX-R1-002/TASK_RECORD.md`
10. `Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md`
11. `Codex Code/Tasks/CX-R1-002/CHECKPOINT.md`
12. every architecture/release/technology source named in the task contract
13. live Git, GitHub, branch, PR, workflow, check, and working-tree state

Chat summaries and remembered assumptions are not authority when they conflict with current repository files or live state.

## Dependency and start gate

Verify before editing:

- repository is exactly `ariessocia04-rgb/ARCHITECTURED-`;
- latest `origin/main` includes CX-R1-001 merge commit `0fb218a3f8f8c100b8fd4655b6f04c14fcabd839` or a later descendant;
- `Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md` records `APPROVED_COMPLETE`;
- no active worker, open PR, or uncommitted work overlaps CX-R1-002 paths;
- no existing valid workflow already owns a required purpose.

When another active worker or PR overlaps, return `BLOCKED_DEPENDENCY`; do not race, duplicate, overwrite, or create a second task PR.

## Branch

Use exactly:

```text
agent/cx-r1-002-ci-quality-security
```

Create it from the latest verified `origin/main` only when it does not already exist. When it exists, reconcile and continue the same branch. Never work directly on `main`. Never force-push.

## Authorized implementation

Implement only the scope in `TASK_CONTRACT.md`, including:

- GitHub Actions workflows for frozen install, format, lint, typecheck, unit tests, Next production build, Rust format/check, dependency review, secret scanning, and evidence summary/artifacts;
- stable required-check names;
- explicit test/build artifact names and retention;
- branch review/required-check policy documentation;
- reproducible contributor and clean-checkout commands;
- factual CX-R1-002 evidence.

Use existing valid scripts and locks. Add or change dependencies only when genuinely required, exactly pinned, and within the authorized technology/version line. Do not add `latest`, caret, tilde, wildcard, preview, beta, canary, or unbounded versions.

## Required check names

Preserve these exact externally visible names unless GitHub platform syntax proves a technically necessary equivalent and the evidence explains it:

```text
quality / frozen-install
quality / format
quality / lint
quality / typecheck
quality / unit-tests
quality / web-build
quality / rust
security / dependency-review
security / secret-scan
evidence / ci-summary
```

## Workflow rules

- Trigger appropriate validation on pull requests to `main` and controlled pushes where justified.
- Grant least-privilege workflow permissions.
- Pin third-party actions to immutable full commit SHAs and document the human-readable release/tag source.
- Use the exact Node, pnpm, Rust, and dependency locks already committed.
- Do not print secrets or complete environment values.
- Do not use privileged pull-request targets for untrusted code.
- Do not create overlapping workflow jobs that duplicate the same producer/purpose.
- Upload only deliberate evidence artifacts; never upload `.env`, credentials, caches containing secrets, full home directories, `node_modules`, `.next`, or `target` as evidence.
- Use explicit artifact retention.
- A failed required check must fail the workflow and be documented as merge-blocking.

## Required validation

Run and record at minimum:

```text
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm release-lock:check
pnpm paths:check
pnpm secrets:check
cargo fmt --all -- --check
cargo check --workspace --locked
```

Run the complete suite twice from separate clean checkouts or equivalent proven clean states. Preserve lockfiles. Remove only generated dependency/build outputs when performing clean-state recovery. Never reset, clean, or discard user work.

Validate workflow syntax, action pinning, least privilege, required check naming, artifact retention, duplicate ownership, and secret exposure. After pushing, inspect GitHub-hosted workflow runs and fix genuine in-scope failures using the smallest correction. Do not report success from local checks alone when hosted checks exist and are still running or failed.

## Evidence files

Create exactly one of each under `Codex Code/Tasks/CX-R1-002/`:

```text
CHANGED_FILES.md
TEST_EVIDENCE.md
SECURITY_AND_SCOPE_REVIEW.md
COMPLETION_REPORT.md
```

Update the existing `CHECKPOINT.md` before every stop. Do not create duplicate reports, alternate summaries, revision copies, or parallel evidence folders.

Evidence must include exact commands, exit codes, clean-run distinction, workflow names/check names, action pins, permissions, run IDs/URLs when available, artifact names/retention, changed paths, blockers/corrections, and live PR/check state. Never invent a passed result.

## Git and publication

After all authorized implementation and available checks pass:

1. verify every changed path is authorized;
2. verify no secret, generated cache/build output, duplicate report, or unrelated file is staged;
3. commit with a clear CX-R1-002 message;
4. push the task branch normally;
5. open or update exactly one draft PR to `main`;
6. inspect changed files, conflicts, reviews, and checks;
7. correct genuine in-scope failures;
8. stop before merge.

Do not delete the branch. Do not merge. Do not begin CX-R1-003.

## Owner-only pauses

Pause only for:

- browser authentication or account selection;
- 2FA/device approval;
- UAC or Windows Security confirmation;
- a genuine architecture decision not already resolved by repository authority;
- an unavailable repository setting requiring owner permission;
- final merge approval.

At an owner-only pause, give one short exact action. After approval, continue from the same checkpoint without requesting a new prompt.

## Final response

Return exactly this terminal state only when the draft PR is ready for owner review:

```text
CX-R1-002_READY_FOR_OWNER_MERGE
```

Then include:

- active branch and final commit SHA;
- PR number and URL;
- changed-path count and scope classification;
- two clean-run results;
- GitHub workflow/check results;
- action pins and permissions review;
- artifact names and retention;
- security/secret/dependency review;
- any remaining owner-only repository-setting action;
- confirmation that CX-R1-003 was not started.

For a factual blocker, update the checkpoint and return the matching `STOP_BLOCKED_*` or `STOP_FAILED_VALIDATION` state with exact evidence. Never claim completion when checks are absent, pending, skipped, or failed.
