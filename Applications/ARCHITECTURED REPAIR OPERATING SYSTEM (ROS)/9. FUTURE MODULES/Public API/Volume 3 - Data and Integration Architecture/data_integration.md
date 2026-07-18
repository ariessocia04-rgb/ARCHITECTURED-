# PUBLIC API — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
APIProduct, APIVersion, EndpointDefinition, SchemaDefinition, ErrorDefinition, OAuthClient, ClientCredentialReference, ScopeDefinition, ScopeGrant, ConsentGrantReference, APIRequestMetadata, IdempotencyRecord, RateLimitPolicy, Quota, UsageRecord, WebhookSubscription, WebhookDelivery, DeadLetter, DeveloperOrganization, SandboxProfile, DeprecationNotice, SDKArtifactReference, APIIncident.

## Contract rules
REST/HTTP and OpenAPI baseline unless another style is approved. Stable resource IDs, ISO timestamps/time zones, explicit currency/units, pagination, filtering, sorting, sparse fields where approved, consistent errors, request/correlation IDs, optimistic concurrency, idempotency for mutation, and no hidden breaking changes.

## Authentication/authorization
OAuth/OIDC profiles, scoped service credentials, delegated user context, tenant/company/branch claims, token audience/issuer/expiry, key rotation, revocation, and policy evaluation at gateway and owning service. API keys alone are restricted to approved low-risk use cases.

## APIs/operations
Manage app/client/scopes/credentials/webhooks; query usage/log metadata; use exposed domain operations; async job/status/download for large work; upload through signed sessions; replay webhook; acknowledge deprecation. Owning modules remain authoritative.

## Events/webhooks
Published topics are explicit, versioned, minimal, tenant-scoped, signed, replay-protected, idempotent, and documented. Envelope includes event ID/type/version/time, tenant/company/branch, source module/record, correlation/causation, classification, and payload.

## Compatibility
Semantic/version policy, additive changes, compatibility tests, preview/stable stages, changelog, migration guide, deprecation window, sunset notice, usage-based outreach, rollback, and old-version observability.

## Data protection
Field allowlists, masking, purpose/consent, response minimization, secure file URLs, retention-limited logs, no secrets/payloads in ordinary telemetry, and region/residency enforcement.