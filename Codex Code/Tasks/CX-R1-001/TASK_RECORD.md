# CX-R1-001 — TASK RECORD

## Identity and authorization

```yaml
task_id: CX-R1-001
title: Workspace and Version Bootstrap
release_id: ROS-R1-MVP-2026-01
execution_type: CONTROLLED_IMPLEMENTATION
implementation_authorized: true
authorization_statement: The owner authorizes CX-R1-001 only after CX-R1-000 reached external APPROVED_COMPLETE.
authorized_by: Aries Socia
authorized_at: 2026-07-19
dependency_task: CX-R1-000
dependency_status: APPROVED_COMPLETE
work_branch: agent/cx-r1-001-workspace-bootstrap
canonical_implementation_root: Codex Code/Implementation/
source_code_changes_authorized: true
documentation_changes_authorized: true
dependency_installation_authorized: true
branch_creation_authorized: true
commit_authorized: true
push_authorized: true
draft_pull_request_authorized: true
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
automatic_next_task_authorized: false
next_task_id: CX-R1-002
next_task_authorized: true
```

## Objective

Create the deterministic Release 1 implementation workspace, pinned toolchain and dependency baseline, minimal buildable web and local-agent skeletons, environment-variable schema, quality scripts, lockfiles, release lock, documentation, and task evidence—all under `Codex Code/Implementation/`.

## Scope boundary

This is technical foundation only. It does not authorize:

- business tables, RLS policies, application migrations, domain modules, workflows, role screens, visual design implementation, billing/payment providers, production deployment, or real secrets;
- root-level implementation trees;
- copying architecture documents into implementation folders;
- `CX-R1-002` or any later task.

The high-fidelity UI plan is still incomplete. That does not block this non-UI bootstrap, but no product screen or visual-design claim may be created.

## Required core version pins

The task must reverify official stable releases before writing and record evidence. The authorized Release 1 line is:

```yaml
node: 24.18.0
pnpm: 10.34.0
next: 16.2.9
react: 19.2.0
react_dom: 19.2.0
typescript: 5.9.3
supabase_cli: 2.101.0
tauri: 2.11.2
rust: 1.97.1
```

Do not use canary, beta, preview, `latest`, caret, tilde, wildcard, or unbounded dependency specifications. If an exact transitive or companion version is incompatible, stop with exact package evidence rather than silently changing the approved major line.

## Canonical outputs

Primary implementation outputs belong only under:

```text
Codex Code/Implementation/
```

Task control/evidence belongs only under:

```text
Codex Code/Tasks/CX-R1-001/
```

## Required checks

- clean deterministic install and `pnpm install --frozen-lockfile`;
- format check;
- lint;
- TypeScript check;
- environment-schema tests;
- minimal Next.js production build;
- Rust formatting and `cargo check` when the Rust/Tauri skeleton is included;
- changed-path and duplicate-root review;
- secret scan of created files;
- second clean/frozen install verification before review.

## Stop rule

Finish every in-scope implementation and validation step. Stop only for a factual external blocker or after returning `READY_FOR_REVIEW`. Do not begin `CX-R1-002`.

## Terminal closure

```yaml
terminal_status: APPROVED_COMPLETE
review_result_path: Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
merge_record_path: Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
task_commit: ef8c0bc6e5abfb1de765bf043d08218ab7065eb4
pull_request: 16
pull_request_url: https://github.com/ariessocia04-rgb/ARCHITECTURED-/pull/16
merge_commit_on_main: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
main_read_back: VERIFIED
successor_task: CX-R1-002
successor_authorized_by: Aries Socia
successor_authorized_at: 2026-07-19
```

The original bootstrap authorization did not automatically authorize a successor. The owner
separately authorized CX-R1-002 after PR #16 was reviewed and merged.
