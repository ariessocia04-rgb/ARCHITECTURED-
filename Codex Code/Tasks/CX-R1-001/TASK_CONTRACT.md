# CX-R1-001 — TASK CONTRACT

```yaml
task_id: CX-R1-001
task_title: Workspace and Version Bootstrap
release_id: ROS-R1-MVP-2026-01
repository: ariessocia04-rgb/ARCHITECTURED-
base_branch: main
work_branch: agent/cx-r1-001-workspace-bootstrap
canonical_implementation_root: Codex Code/Implementation/

implementation_authorized: true
authorization_statement: The owner explicitly authorizes only CX-R1-001 after external APPROVED_COMPLETE of CX-R1-000.
authorized_by: Aries Socia
authorized_at: 2026-07-19
authorization_scope: Build and validate the deterministic workspace/toolchain/version foundation only.

active_worker_state: UNCLAIMED_AT_AUTHORIZATION
active_worker_evidence: No open PR or active executable-code worker was found at CX-R1-000 completion.
last_verified_main_sha: 1b7be2ea37174b9d08df112d9f80d159e0a023a6
open_pr_check: 0 open PRs at authorization; reverify immediately before editing.

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
  - Implementation Planning/Release 1 MVP/04. High-Fidelity Design/HIGH_FIDELITY_UI_EXECUTION_PLAN.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CANONICAL_IMPLEMENTATION_PATH_OVERRIDE.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_MANIFEST.md
  - Implementation Planning/Release 1 MVP/05. Codex Execution/CODEX_TASK_CONTRACT_TEMPLATE.md
  - Codex Code/README.md
  - Codex Code/Implementation/README.md
  - Codex Code/CURRENT_TASK_COMPLETION_LAW.md
  - Codex Code/ARMORED_PROMPT_REQUIREMENTS.md
  - Codex Code/ARMORED_CODEX_MASTER_PROMPT.md
  - Codex Code/TASK_STORAGE_AND_HANDOFF_RULES.md
  - Codex Code/Tasks/CX-R1-000/COMPLETION_REPORT.md
  - Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md
  - Codex Code/Tasks/CX-R1-001/TASK_RECORD.md
  - Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md
  - Codex Code/Prompts/ACTIVE_TASK.md
  - Codex Code/Prompts/PROMPT_REGISTRY.md
  - Codex Code/Prompts/CX-R1-001/0001-WORKSPACE-AND-VERSION-BOOTSTRAP.md
source_sections_or_requirement_ids:
  - CX-R1-001
  - CANONICAL_IMPLEMENTATION_PATH_OVERRIDE
  - LOCKED_BASELINE_VERSIONS
  - REPOSITORY_IMPLEMENTATION_SHAPE
  - ENVIRONMENT_AND_SECRET_BOUNDARIES

dependency_task_ids:
  - CX-R1-000
dependency_completion_evidence:
  - Codex Code/Tasks/CX-R1-000/COMPLETION_REPORT.md
  - Codex Code/Tasks/CX-R1-000/REVIEW_RESULT.md

objective: Create a deterministic, buildable, testable, version-pinned Release 1 monorepo foundation without implementing business behavior.
in_scope:
  - canonical workspace directories under Codex Code/Implementation/
  - root package/workspace configuration inside the canonical implementation root
  - exact Node, pnpm, TypeScript, Next.js, React, Supabase CLI, Rust, and Tauri pins
  - pnpm lockfile and release lock
  - minimal non-product Next.js build skeleton
  - minimal Rust/Tauri-compatible local-agent skeleton when environment supports required checks
  - environment-variable schema containing names, classifications, and safe local defaults only
  - formatting, linting, type-checking, build, and bootstrap test scripts
  - meaningful README/runbook files for future-owned empty subtrees
  - task evidence and completion records
out_of_scope:
  - business/domain modules
  - database business tables, RLS, grants, queues, functions, or application migrations
  - role-specific product routes/screens or approved visual design implementation
  - authentication, tenant, billing, repair, inventory, finance, printing behavior, or external providers
  - CI workflows owned by CX-R1-002
  - observability foundation owned by CX-R1-003
  - full Supabase local/migration foundation owned by CX-R1-004
  - production deployment
  - secrets or real customer data

allowed_paths_create:
  - Codex Code/Implementation/.gitignore
  - Codex Code/Implementation/.npmrc
  - Codex Code/Implementation/.nvmrc
  - Codex Code/Implementation/package.json
  - Codex Code/Implementation/pnpm-lock.yaml
  - Codex Code/Implementation/pnpm-workspace.yaml
  - Codex Code/Implementation/tsconfig.base.json
  - Codex Code/Implementation/eslint.config.*
  - Codex Code/Implementation/prettier.config.*
  - Codex Code/Implementation/.prettierignore
  - Codex Code/Implementation/RELEASE_LOCK.json
  - Codex Code/Implementation/rust-toolchain.toml
  - Codex Code/Implementation/Cargo.toml
  - Codex Code/Implementation/Cargo.lock
  - Codex Code/Implementation/apps/**
  - Codex Code/Implementation/packages/**
  - Codex Code/Implementation/supabase/**
  - Codex Code/Implementation/tests/**
  - Codex Code/Implementation/infrastructure/**
  - Codex Code/Implementation/docs/**
  - Codex Code/Tasks/CX-R1-001/CHANGED_FILES.md
  - Codex Code/Tasks/CX-R1-001/TEST_EVIDENCE.md
  - Codex Code/Tasks/CX-R1-001/SECURITY_AND_SCOPE_REVIEW.md
  - Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
  - Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
allowed_paths_modify:
  - Codex Code/Implementation/README.md
  - Codex Code/Tasks/CX-R1-001/CHANGED_FILES.md
  - Codex Code/Tasks/CX-R1-001/TEST_EVIDENCE.md
  - Codex Code/Tasks/CX-R1-001/SECURITY_AND_SCOPE_REVIEW.md
  - Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
  - Codex Code/Tasks/CX-R1-001/CHECKPOINT.md
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
  - root-level apps/**
  - root-level packages/**
  - root-level supabase/**
  - root-level tests/**
  - root-level infrastructure/**
  - source-code copies under Codex Code/Tasks/**
  - source-code copies under Codex Code/Evidence/**
  - source-code copies under Codex Code/Reviews/**

required_entities_or_tables: []
required_migration_ids: []
required_permissions: []
required_rls_policies: []
required_api_operations: []
required_events: []
required_queue_jobs: []
required_ui_screen_ids: []
required_states: []
required_document_or_print_profiles: []

business_invariants:
  - No business behavior is implemented in this task.
  - Canonical source remains a modular monolith under Codex Code/Implementation/.
  - No root-level competing source tree may be created.
  - High-fidelity status remains truthful; no screen is claimed approved or implemented.
  - Release 1 boundaries, roles, workflows, prices, limits, permissions, and providers remain unchanged.
idempotency_requirements:
  - Re-running bootstrap generation must detect and reuse existing valid files rather than duplicate or overwrite blindly.
  - Install and build scripts must be deterministic from committed locks.
audit_requirements:
  - RELEASE_LOCK.json records exact selected versions, source/evidence, and verification date.
  - CHANGED_FILES.md lists every changed path and purpose.
privacy_and_security_requirements:
  - No secret values, API keys, private certificates, production URLs, customer data, payment data, or device passcodes.
  - Environment schema must distinguish public, server-only, optional, and test-only names.
  - No publishable key may be treated as authorization.
  - Package versions are exact and lockfile integrity is committed.
accessibility_requirements:
  - No product UI is in scope.
  - The minimal build page, when present, must use semantic HTML and keyboard-safe defaults without claiming design approval.
performance_or_reliability_targets:
  - Frozen install succeeds twice from a clean dependency state.
  - Production web build succeeds deterministically.
  - No unbounded dependency version is present.

required_tests:
  format: true
  lint: true
  typecheck: true
  unit:
    - environment schema accepts safe documented local/test defaults
    - environment schema rejects malformed or missing required names
  database_migration: []
  rls_authorization: []
  contract:
    - RELEASE_LOCK.json matches package/toolchain pins
    - no root-level implementation tree exists
  integration:
    - pnpm install --frozen-lockfile
    - minimal Next.js production build
  component: []
  accessibility:
    - semantic smoke review of the minimal technical page when included
  e2e: []
  recovery:
    - delete generated dependency/build output only, reinstall frozen, and rerun checks
  hardware: []

acceptance_criteria:
  - All implementation files are under Codex Code/Implementation/.
  - All required top-level workspace paths exist with meaningful files; no empty appearance-only folder is committed.
  - Exact approved versions are pinned with no latest/caret/tilde/wildcard ranges.
  - pnpm-lock.yaml and RELEASE_LOCK.json are committed and internally consistent.
  - Minimal web application builds successfully without product workflows or role UI.
  - Environment schema and tests pass without secret values.
  - Rust/Tauri version lock is recorded; included skeleton passes rustfmt and cargo check, or an exact external platform blocker is documented.
  - Frozen install, format, lint, typecheck, tests, and build pass twice after clean dependency recovery.
  - No unrelated file is changed and no duplicate implementation tree exists.
  - Completion and evidence files are factual and complete.
required_evidence:
  - exact versions and official source references
  - exact commands and exit results
  - changed-file manifest
  - lockfile and release-lock consistency result
  - secret/scope/duplicate review
  - clean/frozen reinstall evidence
  - build and Rust check evidence
rollback_or_forward_recovery: Before merge, revert the isolated task branch. After merge, use a dedicated reviewed dependency/bootstrap correction PR; never delete valid user work or recreate a parallel workspace.

stop_conditions:
  - authorization missing or ambiguous
  - working directory is not the real ARCHITECTURED- checkout
  - origin remote does not match ariessocia04-rgb/ARCHITECTURED-
  - CX-R1-000 external APPROVED_COMPLETE evidence is missing
  - current main, open PR, or active worker overlaps bootstrap paths
  - implementation code exists outside Codex Code/Implementation/ without an authorized migration task
  - exact approved major line cannot be installed securely or compatibly
  - proposed creation duplicates existing canonical implementation
  - a required test cannot run or fails after one grounded correction attempt
  - any required change falls outside allowed paths
  - task would implement product behavior, UI, database business schema, CI, observability, or another task

task_record_path: Codex Code/Tasks/CX-R1-001/TASK_RECORD.md
task_contract_path: Codex Code/Tasks/CX-R1-001/TASK_CONTRACT.md
changed_files_manifest_path: Codex Code/Tasks/CX-R1-001/CHANGED_FILES.md
test_evidence_path: Codex Code/Tasks/CX-R1-001/TEST_EVIDENCE.md
security_review_path: Codex Code/Tasks/CX-R1-001/SECURITY_AND_SCOPE_REVIEW.md
completion_report_path: Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md
review_result_path: Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md
merge_record_path: Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md
```

## Publish boundary

Codex must work on the isolated task branch. When the Codex Windows sandbox blocks `.git` writes, the owner must create/switch the branch and later commit/push/open the draft PR from normal PowerShell. Codex must not bypass the sandbox or work directly on `main`; it must complete files/tests/evidence and return `READY_FOR_OWNER_PUBLISH` with exact commands.

## Completion gate

`CX-R1-001` becomes `APPROVED_COMPLETE` only after the draft PR is reviewed, required checks/evidence pass, the approved changes are merged, main is read back, and `REVIEW_RESULT.md` plus `MERGE_RECORD.md` are stored. `CX-R1-002` remains unauthorized until then.
