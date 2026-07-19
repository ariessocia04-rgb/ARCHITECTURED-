# CX-R1-002 — TASK CONTRACT

```yaml
task_id: CX-R1-002
task_title: CI, Quality, and Security Baseline
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: agent/cx-r1-002-ci-quality-security
canonical_implementation_root: Codex Code/Implementation/

implementation_authorized: true
authorization_statement: The owner explicitly authorizes only CX-R1-002 after external APPROVED_COMPLETE of CX-R1-001.
authorized_by: Aries Socia
authorized_at: 2026-07-19
authorization_scope: Implement and validate the CI, quality, and security baseline only.

active_worker_state: REVERIFY_BEFORE_EDITING
last_verified_main_sha: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839

source_paths:
  - 1plan.md
  - 1plan-RELEASE_1_MVP_IMPLEMENTATION_PLANNING_EXTENSION.md
  - README.md
  - revise.md
  - index.md
  - Implementation Planning/Release 1 MVP/INDEX.md
  - Implementation Planning/Release 1 MVP/02. Technology and Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md
  - Implementation Planning/Release 1 MVP/03. Environments and Deployment/ENVIRONMENT_DEPLOYMENT_AND_SECRETS_PLAN.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md
  - Codex Code/CURRENT_TASK_COMPLETION_LAW.md
  - Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
  - Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
  - Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
  - Codex Code/Prompts/ACTIVE_TASK.md
  - Codex Code/Prompts/PROMPT_REGISTRY.md
  - Codex Code/Prompts/CONTINUE_PROTOCOL.md
  - Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-SECURITY-BASELINE.md
  - Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
  - Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
  - Codex Code/Tasks/CX-R1-002/TASK_RECORD.md
  - Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md
  - Codex Code/Implementation/RELEASE_LOCK.json
  - Codex Code/Implementation/package.json
  - Codex Code/Implementation/Cargo.toml
  - Codex Code/Implementation/docs/runbooks/LOCAL_SETUP.md

objective: Create required GitHub and clean-checkout validation gates for the existing deterministic technical foundation.

in_scope:
  - GitHub Actions workflows for frozen install, format, lint, typecheck, unit tests, Next production build, Rust format/check, dependency review, secret scanning, and evidence artifact upload
  - stable required-check names
  - branch review policy documentation
  - test-result and build-artifact retention
  - reproducible contributor/CI commands
  - smallest required corrections to existing bootstrap scripts when a factual CI-only compatibility defect is proven
  - CX-R1-002 evidence and completion records

out_of_scope:
  - product UI, business modules, role workspaces, or workflow behavior
  - database business tables, RLS, migrations, local Supabase foundation, or generated database types
  - observability/logging/health/correlation foundation owned by CX-R1-003
  - authentication, tenant, billing, inventory, repair, finance, printing behavior, or provider integration
  - deployment infrastructure or production secrets
  - branch protection mutation when the available GitHub permission/API cannot prove a safe reviewed configuration; document the exact owner action instead
  - CX-R1-003 or later tasks

allowed_paths_create:
  - AGENTS.md only when absent and used solely as the non-duplicative Codex entry pointer
  - .github/workflows/**
  - .github/dependabot.yml only when required by the approved dependency-security design
  - Codex Code/Implementation/infrastructure/ci/**
  - Codex Code/Implementation/docs/runbooks/**
  - Codex Code/Implementation/docs/evidence/**
  - Codex Code/Implementation/packages/testing/scripts/**
  - Codex Code/Tasks/CX-R1-002/**
allowed_paths_modify:
  - .github/workflows/**
  - .github/dependabot.yml
  - Codex Code/Implementation/package.json
  - Codex Code/Implementation/pnpm-lock.yaml
  - Codex Code/Implementation/.gitignore
  - Codex Code/Implementation/.prettierignore
  - Codex Code/Implementation/docs/runbooks/**
  - Codex Code/Implementation/docs/evidence/**
  - Codex Code/Implementation/infrastructure/ci/**
  - Codex Code/Implementation/packages/testing/**
  - Codex Code/Tasks/CX-R1-002/**
forbidden_paths:
  - 1plan.md
  - 1plan-*.md
  - README.md
  - revise*.md
  - index.md
  - Applications/**
  - SaaS Platform/**
  - Design/**
  - Implementation Planning/**
  - TECA/**
  - .teca/**
  - Codex Code/Prompts/**
  - Codex Code/Tasks/CX-R1-000/**
  - Codex Code/Tasks/CX-R1-001/**
  - root-level apps/**
  - root-level packages/**
  - root-level supabase/**
  - root-level tests/**
  - root-level infrastructure/**

business_invariants:
  - No product/business behavior is implemented.
  - Canonical executable source remains under Codex Code/Implementation/.
  - GitHub workflow files are the sole necessary exception because GitHub Actions requires .github/workflows/ at repository root.
  - No duplicate workflow purpose, prompt authority, implementation root, task report, or evidence producer is created.
  - Failed required checks must block merge.
  - No secret value, token, credential, private certificate, production URL, or customer data may be committed or printed.

required_check_names:
  - quality / frozen-install
  - quality / format
  - quality / lint
  - quality / typecheck
  - quality / unit-tests
  - quality / web-build
  - quality / rust
  - security / dependency-review
  - security / secret-scan
  - evidence / ci-summary

required_tests:
  - validate workflow syntax and pinned action references
  - run frozen dependency install
  - run format check
  - run lint
  - run TypeScript check
  - run unit tests
  - run Next production build
  - run cargo fmt --all -- --check
  - run cargo check --workspace --locked
  - run release-lock, canonical-path/duplicate, and secret checks
  - verify artifact/evidence retention configuration
  - run the complete suite twice from separate clean checkouts or equivalent proven clean states

acceptance_criteria:
  - Required workflows exist without duplicate responsibilities.
  - Required check names are stable and documented.
  - All checks pass twice from clean checkout against the committed locks.
  - Failed checks are non-optional in the documented merge policy.
  - Test/build evidence artifacts have explicit retention.
  - Contributor commands reproduce CI locally.
  - No secrets or generated build/cache/environment artifacts are committed.
  - No unrelated file is changed and no later task is started.
  - Factual completion, changed-file, test-evidence, security/scope, and checkpoint records exist once under CX-R1-002.

required_evidence:
  - workflow and required-check inventory
  - exact commands, run URLs/IDs when available, and exit results
  - two clean-run results
  - artifact names and retention periods
  - changed-file manifest
  - dependency/secret/scope/duplicate review
  - branch/PR/check state

stop_conditions:
  - authorization, dependency completion, repository identity, or live state is inconsistent
  - another active worker or PR overlaps required paths
  - a proposed workflow duplicates an existing valid workflow purpose
  - a required action/version cannot be pinned or verified
  - GitHub-hosted checks require an owner-only permission or repository setting
  - a required test fails after grounded in-scope correction
  - any required change falls outside allowed paths
  - the task would implement CX-R1-003 or product/database/observability behavior

task_record_path: Codex Code/Tasks/CX-R1-002/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md
checkpoint_path: Codex Code/Tasks/CX-R1-002/CHECKPOINT.md
changed_files_manifest_path: Codex Code/Tasks/CX-R1-002/CHANGED_FILES.md
test_evidence_path: Codex Code/Tasks/CX-R1-002/TEST_EVIDENCE.md
security_review_path: Codex Code/Tasks/CX-R1-002/SECURITY_AND_SCOPE_REVIEW.md
completion_report_path: Codex Code/Tasks/CX-R1-002/COMPLETION_REPORT.md
review_result_path: Codex Code/Tasks/CX-R1-002/REVIEW_RESULT.md
merge_record_path: Codex Code/Tasks/CX-R1-002/MERGE_RECORD.md
```

## Publication boundary

Codex may create/switch the isolated task branch, modify only authorized paths, run checks, commit, push, and open or update one draft PR. Codex must not merge.
