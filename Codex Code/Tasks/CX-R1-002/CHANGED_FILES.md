# CX-R1-002 changed-files manifest

Every listed path was changed on `agent/cx-r1-002-ci-quality-security` from main merge commit
`0fb218a3f8f8c100b8fd4655b6f04c14fcabd839`. `CREATED` files did not exist in the base commit;
`MODIFIED` files extend existing canonical controls without deletion, rename, or parallel source.

| Path | Change type | Purpose | Canonical owner | Requirement | Compatibility / review status |
| --- | --- | --- | --- | --- | --- |
| `.github/workflows/ci-quality-security.yml` | CREATED | Named GitHub Actions quality, build, migration-boundary, Rust, secret-scan, and artifact-evidence checks. | CX-R1-002 | CI baseline | Required GitHub workflow-location exception; reviewed locally. |
| `.github/workflows/dependency-review.yml` | CREATED | Pull-request dependency-review check. | CX-R1-002 | CI baseline | Required GitHub workflow-location exception; reviewed locally. |
| `Codex Code/Implementation/package.json` | MODIFIED | Adds migration-boundary and aggregate reproducible CI commands. | CX-R1-002 | Contributor commands | No dependency or version change; validated. |
| `Codex Code/Implementation/prettier.config.mjs` | MODIFIED | Preserves established CRLF/LF endings during format validation. | CX-R1-002 | Quality baseline | Minimal config correction; validated. |
| `Codex Code/Implementation/eslint.config.mjs` | MODIFIED | Ignores generated `apps/web/.next` build output. | CX-R1-002 | Quality baseline | Minimal generated-output correction; validated. |
| `Codex Code/Implementation/packages/testing/scripts/check-migration-boundary.mjs` | CREATED | Fails if future-owned Supabase migration/configuration content appears. | CX-R1-002 | Migration validation | No migration created; validated. |
| `Codex Code/Implementation/infrastructure/ci/README.md` | MODIFIED | Replaces the CX-R1-001 reservation with factual workflow ownership. | CX-R1-002 | CI documentation | Reviewed. |
| `Codex Code/Implementation/infrastructure/ci/BRANCH_REVIEW_POLICY.md` | CREATED | Required check names, owner-managed branch policy, and evidence retention. | CX-R1-002 | Branch review policy | Reviewed. |
| `Codex Code/Implementation/docs/runbooks/LOCAL_SETUP.md` | MODIFIED | Uses frozen install plus aggregate reproducible quality command. | CX-R1-002 | Contributor commands | Validated. |
| `Codex Code/Implementation/docs/runbooks/CI_QUALITY_SECURITY.md` | CREATED | Complete local CI/quality/security and clean-checkout runbook. | CX-R1-002 | Contributor commands | Reviewed. |
| `Codex Code/COMPLETION_RECORD.md` | MODIFIED | Marks historical CX-R1-000 record as superseded for current-task state. | Governance | CX-R1-001 closure | Reviewed. |
| `Codex Code/INDEX.md` | MODIFIED | Points the Code control index to CX-R1-002. | Governance | Task activation | Reviewed. |
| `Codex Code/Prompts/ACTIVE_TASK.md` | MODIFIED | Makes CX-R1-002 the sole active task. | Governance | Task activation | Reviewed. |
| `Codex Code/Prompts/COMPLETION_RECORD.md` | MODIFIED | Preserves historical record while resolving stale current-task claims. | Governance | Task activation | Reviewed. |
| `Codex Code/Prompts/INDEX.md` | MODIFIED | Archives CX-R1-001 and identifies the CX-R1-002 prompt chain. | Governance | Task activation | Reviewed. |
| `Codex Code/Prompts/PROMPT_REGISTRY.md` | MODIFIED | Archives CX-R1-001 and registers CX-R1-002/0001 as current. | Governance | Prompt registry | Reviewed. |
| `Codex Code/Prompts/CX-R1-002/0001-CI-QUALITY-AND-SECURITY-BASELINE.md` | CREATED | Canonical armored CX-R1-002 execution prompt. | Governance | Prompt chain | Reviewed. |
| `Codex Code/Tasks/README.md` | MODIFIED | Registers CX-R1-001 closure and CX-R1-002 activation. | Governance | Task registry | Reviewed. |
| `Codex Code/Tasks/CX-R1-001/TASK_RECORD.md` | MODIFIED | Records terminal approval, PR #16, merge, and successor authorization. | CX-R1-001 closure | Review reference | Reviewed. |
| `Codex Code/Tasks/CX-R1-001/CHECKPOINT.md` | MODIFIED | Resolves the owner-publish handoff to actual merge state. | CX-R1-001 closure | Checkpoint | Reviewed. |
| `Codex Code/Tasks/CX-R1-001/COMPLETION_REPORT.md` | MODIFIED | Appends actual review/merge closure. | CX-R1-001 closure | Completion record | Reviewed. |
| `Codex Code/Tasks/CX-R1-001/REVIEW_RESULT.md` | CREATED | Factual owner review decision for PR #16. | CX-R1-001 closure | Review reference | Reviewed. |
| `Codex Code/Tasks/CX-R1-001/MERGE_RECORD.md` | CREATED | Factual PR #16 merge and main read-back record. | CX-R1-001 closure | Merge reference | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/TASK_RECORD.md` | CREATED | Current task authorization and scope boundary. | CX-R1-002 | Task control | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/TASK_CONTRACT.md` | CREATED | Exact allowed paths, checks, evidence, and stop conditions. | CX-R1-002 | Task control | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/CHECKPOINT.md` | CREATED | Activation state and first incomplete action. | CX-R1-002 | Task control | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/CHANGED_FILES.md` | CREATED | This complete changed-path manifest. | CX-R1-002 | Evidence | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/TEST_EVIDENCE.md` | CREATED / MODIFIED | Exact validation evidence and two clean-checkout results. | CX-R1-002 | Evidence | PASS; both required clean runs recorded. |
| `Codex Code/Tasks/CX-R1-002/SECURITY_AND_SCOPE_REVIEW.md` | CREATED | Security, secret, duplicate, and scope review. | CX-R1-002 | Evidence | Reviewed. |
| `Codex Code/Tasks/CX-R1-002/COMPLETION_REPORT.md` | CREATED | Factual validation-complete and publication-handoff report. | CX-R1-002 | Evidence | Prepared for draft PR publication. |
| `Design/Prompt Design/CURRENT_CODEX_PROMPT.md` | MODIFIED | Updates the non-executable Design reference to CX-R1-002. | Governance | Task activation | Reviewed. |

No path was deleted, renamed, or moved. No root-level application source tree was created; the two
`.github/workflows/` files are required by GitHub Actions and are documented as the task's narrow
exception.
