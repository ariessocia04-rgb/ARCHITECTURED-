# PUBLIC API — VOLUME 1: SCOPE AND GOVERNANCE

## Purpose
Provide secure, versioned, documented external APIs and webhooks for authorized customers, business accounts, partners, suppliers/vendors, integrations, and tenant-developed applications while protecting internal services and canonical data ownership.

## Boundaries
Public API is an external contract and gateway, not a duplicate business engine. Owning modules validate and execute commands. Internal/private endpoints, tables, secrets, fields, and events are not exposed by default. Every API product has owner, audience, scopes, version, SLA, rate plan, deprecation, support, and data classification.

## Personas
External Developer, Partner Administrator, Tenant Integration Administrator, API Product Owner, Internal Service Owner, Security/Privacy Reviewer, Support Engineer, Auditor.

## Permissions
OAuth client, tenant/company/branch, API product, endpoint, method, record, field, webhook topic, rate, environment, and administration scopes. Client credentials, authorization code/PKCE, service accounts, delegated user scopes, and signed webhooks use approved profiles. High-risk scopes require review and step-up admin approval.

## MVP
Developer onboarding, applications/credentials, sandbox, OAuth/scopes, core read/write APIs, webhooks, documentation/OpenAPI, idempotency, pagination/filtering, rate limits/quotas, usage, error model, versioning/deprecation, audit, support, and incident controls.

## Later releases
Partner marketplace, SDK generation, event streaming, GraphQL where justified, bulk/async APIs, monetization, advanced consent delegation, and regional gateways.

## Dependencies
API Gateway, Authentication/Authorization, all exposed owning modules, Audit, Notification/Webhooks, Files, Admin Portal, Subscription/Entitlements, Monitoring, secret management, and developer documentation.

## Governance
No endpoint becomes public without threat/privacy review, owner approval, schema contract, examples, error behavior, tests, rate policy, observability, support, deprecation, and rollback. Architecture completion does not publish any API.