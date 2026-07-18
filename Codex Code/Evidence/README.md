# CODEX EVIDENCE REGISTRY

This folder stores cross-task evidence indexes or reusable evidence rules. Task-specific evidence stays inside `Codex Code/Tasks/<TASK-ID>/`.

## Accepted evidence

- exact commands and exit results;
- CI check names and run references;
- migration IDs and verification results;
- RLS and cross-tenant negative-test results;
- API/event/schema versions;
- accessibility and responsive test results;
- printer hardware model/driver/firmware/profile evidence;
- commit, draft PR, review, merge, and main read-back references.

## Rejected evidence

- unsupported completion statements;
- screenshots without underlying test or state evidence;
- copied source code;
- secrets or sensitive production information;
- logs that are not redacted;
- evidence from a stale branch without main-base verification.

## Rule

Evidence proves a claim; it does not replace canonical source code, migrations, contracts, or tests.
