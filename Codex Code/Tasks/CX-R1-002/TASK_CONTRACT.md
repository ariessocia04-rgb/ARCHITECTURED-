# CX-R1-002 — TASK CONTRACT

```yaml
task_id: CX-R1-002
task_title: CI, Quality, and Security Baseline
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
base_sha: 0fb218a3f8f8c100b8fd4655b6f04c14fcabd839
work_branch: agent/cx-r1-002-ci-quality-security
canonical_implementation_root: Codex Code/Implementation/

implementation_authorized: true
authorization_statement: The owner explicitly authorizes CX-R1-002 after CX-R1-001 was approved, merged, and read back on main.
authorized_by: Aries Socia
authorized_at: 2026-07-19
authorization_scope: Implement and validate the CI, quality, security, evidence-retention, and contributor-command baseline only.

dependency_task_ids:
  - CX-R1-001
dependency_completion_evidence:
  - Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
  - Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md

source_paths:
  - 1plan.md
  - 1plan-RELEASE_1_MVP_IMPLEMENTATION_PLANNING_EXTENSION.md
  - README.md
  - revise.md
  - index.md
  - Implementation Planning/Release 1 MVP/INDEX.md
  - Implementation Planning/Release 1 MVP/01. Release Boundary/RELEASE_MANIFEST.md
  - Implementation Planning/Release 1 MVP/02. Technology and Topology/TECHNOLOGY_STACK_AND_VERSION_LOCK.md
  - Implementation Planning/Release 1 MVP/03. Environments and Deployment/ENVIRONMENT_DEPLOYMENT_AND_SECRETS_PLAN.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md
  - Codex Code/CURRENT_TASK_COMPLETION_LAW.md
  - Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
  - Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
  - Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
  - Codex Code/Implementation/README.md
  - Codex Code/Implementation/package.json
  - Codex Code/Implementation/prettier.config.mjs
  - Codex Code/Implementation/eslint.config.mjs
  - Codex Code/Implementation/infrastructure/ci/README.md
  - Codex Code/Implementation/docs/runbooks/LOCAL_SETUP.md
  - Codex Code/Prompts/ACTIVE_TASK.md
  - Codex Code/Prompts/PROMPT_REGISTRY.md
  - Codex Code/Prompts/COMPLETION_RECORD.md
  - Codex Code/COMPLETION_RECORD.md
  - Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
  - Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
source_sections_or_requirement_ids:
  - CX-R1-002
  - CANONICAL_IMPLEMENTATION_PATH_OVERRIDE
  - REPOSITORY_IMPLEMENTATION_SHAPE
  - LOCKED_BASELINE_VERSIONS
  - ENVIRONMENT_AND_SECRET_BOUNDARIES

in_scope:
  - GitHub Actions workflows for frozen install, format, lint, typecheck, unit tests, build, migration-boundary validation, Rust/Tauri checks, dependency review, secret scanning, and evidence artifacts
  - CI scripts and runbooks under the canonical implementation root
  - documented required check names, artifact retention, branch-review policy, and reproducible contributor commands
  - factual task records and validation evidence
out_of_scope:
  - product UI, business/domain modules, authentication, tenant/role behavior, or billing
  - database schema, RLS, Supabase configuration, migration creation, or provider configuration
  - observability, deployment infrastructure, production environment configuration, or CI secrets
  - architecture redesign, dependency version changes, or CX-R1-003 and later work

allowed_paths_create:
  - .github/workflows/ci-quality-security.yml
  - .github/workflows/dependency-review.yml
  - Codex Code/Implementation/infrastructure/ci/**
  - Codex Code/Implementation/docs/runbooks/**
  - Codex Code/Implementation/packages/testing/scripts/check-migration-boundary.mjs
  - Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md
  - Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
  - Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
  - Codex Code/Tasks/CX-R1-002/**
allowed_paths_modify:
  - Codex Code/Implementation/package.json
  - Codex Code/Implementation/infrastructure/ci/README.md
  - Codex Code/Prompts/ACTIVE_TASK.md
  - Codex Code/Prompts/INDEX.md
  - Codex Code/Prompts/PROMPT_REGISTRY.md
  - Codex Code/Tasks/README.md
  - Codex Code/Tasks/CX-R1-001/TASK_RECORD.md
  - Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
  - Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
  - Codex Code/INDEX.md
  - Design/Prompt Design/CURRENT_CODEX_PROMPT.md
protected_paths:
  - 1plan.md
  - 1plan-*.md
  - README.md
  - revise*.md
  - index.md
  - Implementation Planning/**
  - Applications/**
  - SaaS Platform/**
  - Design/**
  - Codex Code/Implementation/apps/**
  - Codex Code/Implementation/packages/domain/**
  - Codex Code/Implementation/packages/contracts/**
  - Codex Code/Implementation/supabase/**
  - Codex Code/Implementation/tests/**
  - .github/actions/**
  - .github/dependabot.yml

required_entities_or_tables: []
required_migration_ids: []
required_permissions: []
required_rls_policies: []
required_api_operations: []
required_events: []
required_queue_jobs: []
required_ui_screen_ids: []

business_invariants:
  - Existing exact package, lockfile, Rust, and release-lock pins are reused without version changes.
  - Failed required checks are documented as merge-blocking; CI does not weaken or skip checks.
  - GitHub Actions workflow files are the only repository-root implementation exception because GitHub requires that location.
  - No root-level competing application source tree may be created.
  - CX-R1-003 remains unauthorized.
idempotency_requirements:
  - Workflows and scripts use immutable lockfiles and can be rerun without generated source changes.
  - Artifact upload names are unique per job/run and retain only non-secret evidence.
privacy_and_security_requirements:
  - No secrets, tokens, credentials, private keys, production values, or customer data may enter source, workflow, logs, or artifacts.
  - Workflow permissions use least privilege.
  - Dependency review and secret scans run on pull requests before merge.

required_tests:
  frozen_install: true
  format: true
  lint: true
  typecheck: true
  unit: true
  production_build: true
  migration_boundary: true
  rust_format: true
  rust_check: true
  dependency_review: true
  secret_scan: true
  duplicate_path: true
  release_lock: true
  clean_checkout_runs: 2

acceptance_criteria:
  - Named GitHub Actions checks cover every manifest-required baseline check.
  - Workflow and runbook names exactly match documented branch-review policy entries.
  - Test-result and build-evidence artifacts have an explicit retention period and exclude secrets/generated caches.
  - A contributor can reproduce the full local quality baseline from the documented frozen-install commands.
  - The complete clean-checkout validation passes twice without lockfile or source changes.
  - Changed-path, duplicate-path, secret, and scope reviews are factual and pass.
  - A draft PR is opened against main and is not merged by Codex.

required_evidence:
  - Codex Code/Tasks/CX-R1-002/CHANGED_FILES.md
  - Codex Code/Tasks/CX-R1-002/TEST_EVIDENCE.md
  - Codex Code/Tasks/CX-R1-002/SECURITY_AND_SCOPE_REVIEW.md
  - Codex Code/Tasks/CX-R1-002/COMPLETION_REPORT.md

stop_conditions:
  - base main is not the verified CX-R1-001 merge commit
  - a required workflow or validation cannot run after a grounded minimal correction
  - a proposed file is outside the exact allowed paths
  - the work would add product, database, migration, deployment, or observability behavior
  - GitHub browser sign-in, 2FA, UAC, or final owner merge approval is needed
```

## Publish boundary

Codex may commit, push only `agent/cx-r1-002-ci-quality-security`, and open one draft PR to
`main`. It must never force-push, push directly to `main`, approve, or merge its own work.

## Completion gate

CX-R1-002 is `READY_FOR_REVIEW` only after the full two-run clean-checkout evidence is recorded
and the draft PR is open. It becomes `APPROVED_COMPLETE` only after external review, an authorized
merge, and main read-back; CX-R1-003 remains unauthorized until a separate owner action.
