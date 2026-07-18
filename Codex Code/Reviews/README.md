# CODEX REVIEW REGISTRY

Codex cannot approve or merge its own work.

## Reviewer checks

Every task review verifies:

- exact authorization and task ID;
- latest-main and active-worker checks;
- allowed versus changed paths;
- architecture and release-boundary compliance;
- no deletion, rename, move, or duplicate implementation;
- migration and backward-compatibility behavior;
- tenant isolation, RLS, authorization, privacy, and secret handling;
- API/event/queue/idempotency compatibility;
- tests, accessibility, recovery, and hardware evidence;
- factual task and completion reports;
- draft PR scope and diff.

## Review outcomes

```text
APPROVED_COMPLETE
RETURNED_FOR_CORRECTION
FAILED_VALIDATION
BLOCKED_ARCHITECTURE_CLARIFICATION
BLOCKED_DEPENDENCY
```

Only `APPROVED_COMPLETE` may proceed to an authorized merge action. The next Codex task remains unauthorized until separately approved.
