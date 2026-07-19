# CX-R1-002 — TASK RECORD

## Identity and authorization

```yaml
task_id: CX-R1-002
title: CI, Quality, and Security Baseline
release_id: ROS-R1-MVP-2026-01
execution_type: CONTROLLED_IMPLEMENTATION
implementation_authorized: true
authorization_statement: The owner explicitly authorizes CX-R1-002 after CX-R1-001 reached externally reviewed APPROVED_COMPLETE and merged to main.
authorized_by: Aries Socia
authorized_at: 2026-07-19
dependency_task: CX-R1-001
dependency_status: APPROVED_COMPLETE
dependency_merge_commit: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
work_branch: agent/cx-r1-002-ci-quality-security
canonical_implementation_root: Codex Code/Implementation/
source_code_changes_authorized: true
documentation_changes_authorized: true
workflow_changes_authorized: true
dependency_installation_authorized: only_when_required_and_exactly_pinned
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

Create the Release 1 CI, quality, and security baseline so the existing empty technical foundation is reproducibly validated on GitHub and from a clean local checkout.

## Required outputs

- GitHub Actions workflows for deterministic install, format, lint, typecheck, unit tests, Next production build, Rust format/check, dependency review, secret scanning, and evidence artifacts.
- Stable required-check names and branch-review-policy documentation.
- Test/build evidence retention.
- Reproducible contributor commands.
- Factual task evidence under `Codex Code/Tasks/CX-R1-002/`.

## Acceptance

The foundation passes the complete required suite twice from clean checkouts. Failed required checks block merge. No product feature, database business schema, observability foundation, or CX-R1-003 work is authorized.

## Stop rule

Finish every authorized CX-R1-002 item, fix genuine in-scope failures, publish a draft PR, and stop for owner review/merge. Do not begin CX-R1-003.
