# PUBLIC API — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Developer/admin screens
Developer portal home; API catalog; documentation/reference; quickstarts; application registration; credentials/scopes; sandbox/test data; webhook subscriptions; request logs; usage/quotas; errors/retries; version/deprecation notices; SDK/downloads; support/incidents; tenant API administration; security/audit.

## Lifecycles
Application: Draft → Review when required → Active → Restricted/Suspended → Revoked/Archived.
Credential: Created → Active → Rotating → Revoked/Expired.
API version: Draft → Preview → Stable → Deprecated → Sunset/Retired.
Webhook delivery: Queued → Sent → Acknowledged / Retrying → Dead Letter → Replayed/Closed.

## Workflow
Developer registers → verifies organization/user → creates app → requests scopes → tenant/platform approval when required → receives secret once or completes OAuth → tests in sandbox → calls versioned endpoint → owning service validates/executes → response with request/correlation IDs → monitor usage/errors. Webhook subscribers verify signature and acknowledge.

## Exceptions
Invalid token/scope, wrong tenant, expired/revoked credential, rate limit, idempotency conflict, validation error, stale version, unavailable dependency, webhook failure, schema mismatch, abusive traffic, or deprecated version returns stable documented errors and recovery guidance.

## UX/content
Documentation is task-oriented, searchable, copy-safe, accessible, and includes auth, scopes, examples, pagination, idempotency, errors, webhooks, changelog, limits, and support. Secrets are shown once; logs redact sensitive data. Status/usage/deprecation are visible.

## Wireframes/wireflows
Catalog, docs, app registration, scope approval, credential rotation, sandbox, logs, webhooks, usage, version/deprecation, support, and audit. Prototype covers app-to-first-call, scope denial, idempotent retry, rate limit, webhook replay, and credential revocation.