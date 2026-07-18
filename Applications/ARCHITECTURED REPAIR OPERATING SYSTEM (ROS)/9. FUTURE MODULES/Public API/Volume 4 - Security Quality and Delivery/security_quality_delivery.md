# PUBLIC API — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
OAuth/OIDC, least scopes, token/client rotation/revocation, signed webhooks, mTLS where required, TLS, schema/input/output validation, rate/usage/abuse limits, WAF/gateway policy, replay prevention, idempotency, SSRF/file protections, secret isolation, DDoS controls, approved support access, and kill switch.

## Audit/recovery
Audit app/client/scope/credential, protected requests, export, webhook, version/deprecation, admin, support, and incident actions. Logs retain metadata and redacted error context, not secrets. Recovery verifies grants, revocations, idempotency, rate state, webhook queues, versions, and audit continuity.

## Architecture targets
Critical gateway monthly availability target 99.95%; p95 gateway overhead target ≤150ms excluding owning service; endpoint SLO defined per product; webhook first-delivery target ≤60s for supported events; RPO ≤15m for control metadata; RTO ≤2h; WCAG 2.2 AA developer portal; zero accepted cross-tenant/unauthorized field response.

## Reports
Requests, latency, errors, status codes, usage/quota, rate limits, clients/scopes, credential age, webhooks/retries/dead letters, version adoption, deprecation risk, abuse/security events, incidents, support, and cost.

## Risks
Broken authorization, excessive data, credential theft, replay, injection, SSRF, mass assignment, unbounded query/export, duplicate mutation, webhook spoofing, breaking change, and denial of service require gateway/service authorization, field allowlists, validation, rate limits, signatures, idempotency, contract tests, monitoring, revocation, and rollback.

## Tests/status
OAuth/scopes/tenant/field matrix, schema/error consistency, idempotency/retry/concurrency, pagination/filtering, rate/quotas, webhook signature/replay/dead letter, file/upload, fuzz/security, compatibility/deprecation, accessibility, load/performance, backup/restore, incident/kill switch. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; endpoints/tests/publication/deployment separately gated.