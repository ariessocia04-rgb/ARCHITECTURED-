# GOV-CX-001 Task Record

```yaml
task_id: GOV-CX-001
title: Canonical Continue, Sleep, Review, and Model Fallback Controls
task_type: GOVERNANCE_AND_OPERATIONAL_CONTROL
release_id: REPOSITORY_GOVERNANCE
owner_request: Connect ChatGPT and Codex through repository-backed continue and sleep-mode rules, preserve the strict plan, add reviewer correction flow, and preserve progress across model fallback.
classification: ADDITIVE_COMPATIBLE_EXTENSION
implementation_authorized: true
authorization_scope: governance documentation, prompt control, task closure, pointer/index alignment, validation, and one draft PR only
product_code_authorized: false
database_or_migration_authorized: false
next_release_task_authorized: false
work_branch: governance/codex-execution-modes
base_branch: main
base_sha_at_activation: e93cbe519ea2cb9d913ce17b0bd9732836a63d9f
prompt_sequence: 0001
prompt_path: Codex Code/Prompts/GOV-CX-001/0001-CANONICAL-CONTINUE-SLEEP-AND-MODEL-FALLBACK.md
contract_path: Codex Code/Tasks/GOV-CX-001/TASK_CONTRACT.md
checkpoint_path: Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md
canonical_mode_policy: Codex Code/Prompts/EXECUTION_MODE.md
canonical_continue_protocol: Codex Code/Prompts/CONTINUE_PROTOCOL.md
previous_release_task: CX-R1-002
previous_release_task_terminal_state: APPROVED_COMPLETE
next_release_task: CX-R1-003
next_release_task_authorized: false
```

## Owner intent preserved

- The owner normally sends only `continue` for manual work.
- The owner sends `sleep mode` to arm unattended scheduled work and review.
- `deactivate sleep mode` or `stop sleep mode` returns to manual continuation.
- When the owner is inactive for at least one hour, the external ChatGPT controller may re-arm sleep behavior on its next hourly check.
- ChatGPT independently reviews completed Codex output and writes one canonical reviewer handoff.
- Codex reads the strict flow and reviewer handoff before correcting code.
- A five-minute wait may be used only as a bounded CI recheck inside a run; scheduled reviews remain hourly.
- Model fallback preserves task progress and strict controls but cannot guarantee identical capability.
- No duplicate files, plans, prompts, tasks, branches, PRs, reviews, code roots, or implementation paths are allowed.

## Canonical placement decision

- Repository command and global worker entry rules: `AGENTS.md`.
- Detailed execution-mode, sleep-loop, review, queue, and model-fallback authority: `Codex Code/Prompts/EXECUTION_MODE.md`.
- Live execution-mode state: the active task's existing `CHECKPOINT.md`; static policy defaults are not live activation evidence.
- Resume-state algorithm: `Codex Code/Prompts/CONTINUE_PROTOCOL.md`.
- Master-plan connection: existing `1plan-CODEX_PROMPT_CHAIN_CONTINUATION_EXTENSION.md`.
- Operational review exchange: `Codex Code/Reviews/<TASK-ID>/REVIEW_HANDOFF.md`.
- Terminal external review and merge evidence: `Codex Code/Tasks/<TASK-ID>/REVIEW_RESULT.md` and `MERGE_RECORD.md`.

No second sleep-mode plan or parallel continuation protocol is authorized.

Prompt 0001 remains the unmerged pre-acceptance draft while this checkpoint requires Codex validation. The owner-directed model addition and exact validation corrections are therefore reconciled in the current draft; after the first `READY_FOR_REVIEW` handoff, a material executable change requires prompt 0002 and a recorded contract amendment.

## Alignment-impact review

```yaml
scope_and_release_boundary: ADDITIVE_COMPATIBLE
active_task_and_dependencies: CHANGE_REQUIRED
canonical_source_and_file_ownership: CHANGE_REQUIRED
user_roles_and_permissions: NO_IMPACT
workflow_states_and_handoffs: CHANGE_REQUIRED
data_entities_fields_constraints_and_migrations: NO_IMPACT
api_events_queues_realtime_and_integrations: NO_IMPACT
ui_routes_screens_components_and_accessibility: NO_IMPACT
plans_entitlements_limits_prices_and_billing: NO_IMPACT
security_privacy_audit_and_secret_handling: ADDITIVE_COMPATIBLE
backward_compatibility_and_existing_data: ADDITIVE_COMPATIBLE
performance_availability_recovery_and_offline_behavior: ADDITIVE_COMPATIBLE
tests_evidence_deployment_and_rollback: CHANGE_REQUIRED
indexes_links_logs_memory_and_documentation: CHANGE_REQUIRED
```

## Active-work impact

No open PR existed when this task was activated. CX-R1-002 had already merged, while its active pointer and terminal records remained stale or incomplete. This governance task closes that factual gap and becomes the sole temporary active task. It does not begin CX-R1-003.
