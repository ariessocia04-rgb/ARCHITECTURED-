# CX-R1-002 — TASK RECORD

## Identity and authorization

```yaml
task_id: CX-R1-002
title: CI, Quality, and Security Baseline
release_id: ROS-R1-MVP-2026-01
execution_type: CONTROLLED_IMPLEMENTATION
implementation_authorized: true
authorization_statement: The owner explicitly authorizes CX-R1-002 after CX-R1-001 reached APPROVED_COMPLETE and was merged to main.
authorized_by: Aries Socia
authorized_at: 2026-07-19
dependency_task: CX-R1-001
dependency_status: APPROVED_COMPLETE
dependency_merge_commit: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
base_branch: main
work_branch: agent/cx-r1-002-ci-quality-security
canonical_implementation_root: Codex Code/Implementation/
source_code_changes_authorized: true
documentation_changes_authorized: true
github_workflow_exception_authorized: true
dependency_installation_authorized: true
branch_creation_authorized: true
commit_authorized: true
push_authorized: true
draft_pull_request_authorized: true
merge_authorized: false
deletion_authorized: false
rename_or_move_authorized: false
automatic_next_task_authorized: false
next_task_id: CX-R1-003
next_task_authorized: false
```

## Objective

Implement the Release 1 CI, quality, and security baseline: GitHub Actions checks, reproducible
contributor commands, required-check and branch-review documentation, artifact retention, and
factual validation evidence. All executable project files remain under
`Codex Code/Implementation/`; `.github/workflows/` is the narrowly required GitHub Actions
location and does not establish a second implementation tree.

## Scope boundary

This task does not authorize product UI, business/domain modules, authentication, tenant or role
logic, database schema, migrations, Supabase configuration, observability, deployment
infrastructure, external providers, production secrets, or CX-R1-003 and later tasks.

## Required completion gate

The baseline must pass frozen install, format, lint, typecheck, tests, production build, migration
boundary validation, Rust/Tauri checks, dependency review, secret scanning, and artifact evidence
checks from a clean checkout twice. The task stops after a draft PR is opened; only the owner may
review and merge it.
