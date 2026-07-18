# INTEGRATION COMPATIBILITY CONTRACT

## Objective

Allow every existing ROS module to connect to future modules without replacing its canonical data ownership, workflow, status model, permissions, UI contract, or audit history.

## Core compatibility rules

1. Existing modules remain authoritative for their current records.
2. New modules integrate through versioned APIs, domain events, webhooks, import/export jobs, read models, and adapter services.
3. No future module may write directly into another module's private tables.
4. Shared identifiers use immutable UUIDs plus tenant, company, branch, and source-system context.
5. Every command is idempotent; retries cannot create duplicate money, stock, payroll, customer, vendor, or job records.
6. Every integration supports enabled, disabled, degraded, retrying, quarantined, and disconnected states.
7. Existing screens remain usable when future integrations are unavailable.
8. New fields are additive, nullable or defaulted, versioned, and backward-compatible.
9. Breaking changes require a new contract version, migration plan, compatibility window, rollback, and owner approval.
10. Tenant and company isolation apply to APIs, events, caches, files, search, analytics, exports, and logs.

## Required integration envelope

Every message contains:

- event_id
- event_type
- schema_version
- occurred_at
- tenant_id
- company_id when applicable
- branch_id when applicable
- actor_id and actor_type
- source_module
- source_record_id
- correlation_id
- causation_id
- idempotency_key
- payload
- classification and retention metadata

## Integration flow

```text
Core Module Action
→ Local validation and commit
→ Outbox event
→ Integration router
→ Contract/version validation
→ Target adapter
→ Target acknowledgement
→ Integration status and audit update
→ Retry, quarantine, or reconciliation when needed
```

## Failure ownership

- Source module owns source validation and truthful publication.
- Integration router owns delivery, retries, dead-letter handling, and observability.
- Target adapter owns mapping and target validation.
- Business owner resolves policy conflicts.
- Security owner resolves access or data-classification violations.

## UI requirements

- Integration failures do not erase user work.
- Users see plain-language status and next action.
- Authorized users can retry, reconcile, disconnect, or escalate.
- Technical payloads and secrets are hidden from ordinary users.
- Mobile, keyboard, assistive technology, offline, and low-connectivity behavior are preserved.

## Acceptance criteria

- No direct cross-module table writes.
- No existing lifecycle transition changed.
- No current screen removed.
- All 10 future integrations use this contract.
- Contract tests, replay tests, duplicate tests, permission tests, tenant-isolation tests, and rollback tests are defined before implementation.

**STATUS: COMPLETE (100%)**
