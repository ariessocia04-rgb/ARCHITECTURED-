# PREMIUM PLAN — `PREMIUM-2026-01`

## Purpose

Provide the highest standard plan for multi-branch and multi-company repair operators requiring Business Intelligence, controlled AI assistance, Public API, SSO, extended audit/backup retention, high quotas, advanced integrations, configurable support, and readiness for optional isolated deployment.

## Target tenant

- One tenant organization managing up to three legal/operating companies.
- Up to twenty active branches and warehouses.
- Up to one hundred active staff users.
- High repair, communication, reporting, integration, API, storage, and AI usage.
- Requires advanced security, data governance, automation, and platform support.

## Included applications and features

| Capability | Premium behavior |
|---|---|
| Owner Application | Full core and expansion-ready owner workspace across companies, branches, staff, inventory, finance, audit, analytics, security, AI, integrations, and configuration. |
| Front Desk, Technician, Customer Portal | Full functionality with multi-company/branch routing, advanced communication, and higher quotas. |
| Multi-Company | Up to three active companies with explicit legal entity, currency, tax, numbering, reporting, permission, and data-scope controls. |
| Multi-Branch | Up to twenty branches with cross-branch dashboards, transfers, approvals, staffing, inventory, and reporting according to scope. |
| Warehouses | Up to twenty active warehouses with purchasing, receiving, transfer, stock, valuation, reconciliation, and forecasting. |
| Roles and permissions | Advanced custom roles, approval authorities, field access, separation of duties, and company/branch scopes. |
| Business Intelligence | Governed datasets, executive dashboards, drilldown, scheduled reports, forecasting, and export subject to data access. |
| AI Assistant | Higher assisted-use quota with evidence, confidence, human review, audit, model/tool grants, and kill switch. |
| Public API | Full supported API surface within published scopes, versions, and quota. |
| Webhooks/integrations | Higher endpoint and connection allowance, replay controls, delivery history, reconciliation, and support diagnostics. |
| SSO and MFA | SAML/OIDC SSO where supported, mandatory MFA policy, domain verification, session policy, and break-glass recovery. |
| Branding | Advanced branding and approved custom domain/white-label options where technically and legally supported. |
| Retention/audit | Extended tenant-visible audit and configurable archive/backup policies within approved maximums. |
| Support | Priority support, guided onboarding, architecture review, and optional contractual SLA/add-on. |
| Deployment class | Pooled by default; approved bridge/silo deployment stamp available as an add-on without changing business contracts. |

## Included limits

| Meter | Limit | Reset/enforcement |
|---|---:|---|
| Companies | 3 | Structural; no reset. |
| Active branches | 20 | Structural; add-on or negotiated override available. |
| Active staff users | 100 | Structural; seat packs supported. |
| Active warehouses | 20 | Structural; no reset. |
| Job orders created | 10,000 per billing month | Warning at 80/90%; overage/add-on or safe block at configured limit. |
| Storage | 100 GB | Warning at 80/90%; storage pack supported. |
| Outbound email | 50,000 per billing month | Additional pack/pass-through supported. |
| SMS/push credits | 0 bundled by default | Tenant-funded pay-as-you-go or approved pack. |
| Report/export jobs | 5,000 per billing month | Concurrency, size, and schedule controls apply. |
| Public API calls | 250,000 per billing month | API-call packs and negotiated limit available. |
| Webhook endpoints | 20 | Endpoint health, quarantine, and replay controls. |
| Integration connections | 20 | Standard adapters included; custom adapter is separate approved work. |
| AI credits | 5,000 per billing month | Additional credits supported; protected actions still require human authority. |
| Backup recovery window target | 90 days | Exact provider capability and tested evidence required. |
| Tenant audit visibility | 2,555 days / 7 years | Legal and data-minimization rules can require shorter/longer handling by record class. |
| Cancellation archive window | 180 days | Then entity-level deletion eligibility review. |

## Premium feature entitlements

- `feature.advanced_roles = enabled`
- `feature.inventory = enabled`
- `feature.purchasing = enabled`
- `feature.finance_export = enabled`
- `feature.advanced_reporting = enabled`
- `feature.business_intelligence = enabled`
- `feature.multi_branch = enabled`
- `feature.multi_company = enabled`
- `feature.integrations = enabled_advanced`
- `feature.public_api = enabled_full`
- `feature.webhooks = enabled_advanced`
- `feature.ai_assistant = enabled_advanced`
- `feature.custom_branding = enabled_advanced`
- `feature.sso = enabled`
- `feature.mandatory_mfa = enabled`
- `feature.extended_audit = enabled`
- `feature.premium_support = enabled`
- `feature.dedicated_deployment = eligible_add_on`

## Company and branch scope mechanics

- Tenant is the billing and top security boundary.
- Company is a legal/operating reporting and permission scope inside the tenant.
- Branch belongs to exactly one company at a time and preserves transfer history.
- Users can have different roles by company and branch.
- Cross-company actions require explicit authority and cannot infer access from tenant ownership alone.
- Invoices, tax, numbering, accounting, and legal documents preserve company context.
- Consolidated reports show source company, branch, currency, exchange-rate basis, period, and version.

## SSO and identity policy

- SSO activation requires verified domain, identity-provider metadata, attribute/claim mapping, test users, fallback owner account, and rollback.
- SSO never disables all break-glass access before validation.
- Mandatory MFA policy applies according to role and risk.
- Provisioning/deprovisioning through directory integration is optional and separately scoped.
- Tenant can require SSO for staff while preserving secure customer-portal access.

## AI policy

- AI output is advisory unless a deterministic low-risk action is explicitly approved.
- AI cannot silently alter money, stock, permissions, release, warranty, payroll, accounting, subscription, or tenant state.
- Every AI request records tenant, actor, tool grant, source evidence, model/version, cost/credits, result, confidence, human decision, and audit reference.
- AI disablement or quota exhaustion cannot break core repair workflows.
- Prompt injection, data exfiltration, cross-tenant context, unsafe tool use, and hallucinated authority are tested and monitored.

## Public API and webhook policy

- OAuth/OIDC or approved client credentials with least scopes.
- Company/branch and field scopes are enforced server-side.
- Idempotency is mandatory for retry-sensitive mutations.
- Quotas and security rate limits are separate.
- Webhooks use signatures, timestamps, replay windows, delivery IDs, retries, dead-letter/quarantine, and tenant-visible history.
- Version retirement includes notice, compatibility window, migration guide, and usage report.

## Optional isolated deployment

Premium eligibility does not automatically create dedicated infrastructure. An approved add-on can assign the tenant to a bridge or silo deployment stamp when cost, data residency, performance, contractual SLA, or security requirements justify it.

Rules:

- Same application and contract versions as pooled tenants unless an approved compatibility window exists.
- Global control plane stores tenant-to-stamp mapping and deployment class.
- Entitlements remain product-level authority; infrastructure isolation is a separate policy.
- Automated provisioning, migration, monitoring, backup, incident, and rollback are required.
- Price must cover dedicated infrastructure and operations.

## Downgrade behavior

Premium to Pro or Free creates a complete compatibility report for:

- companies, branches, users, warehouses, storage, job usage, exports, API, webhooks, integrations, AI, BI, SSO, branding, retention, custom roles, and deployment class;
- active company/branch selections;
- SSO fallback credentials and session policy;
- API/webhook/integration shutdown dates;
- retention reduction and archive/export options;
- isolated-to-pooled migration requirements when applicable.

Default effective date is period end. Dedicated-deployment migration can require a later approved date and cannot be rushed without backup, reconciliation, and rollback evidence.

## Past-due continuity

- `Past Due`: core operations continue; owner/billing contacts receive warnings; new add-ons and high-cost optional processing can be restricted.
- `Grace Period`: fourteen calendar days by default.
- End of grace: no routine new intake/job creation, new API credentials, new integrations, AI, BI refresh, or large exports; active repair completion, payment, release, warranty, security, billing, support, and authorized export continue.
- Dedicated infrastructure may have contract-specific suspension timing but cannot bypass security or legal controls.

## Plan-specific acceptance tests

1. Company four, branch twenty-one, user one hundred one, warehouse twenty-one, and quota-over-limit actions follow deterministic entitlement errors.
2. Cross-company and cross-branch negative-access tests cover UI, API, database, search, cache, files, reports, events, exports, analytics, and support tools.
3. SSO misconfiguration preserves tested break-glass access and can roll back safely.
4. AI cannot execute protected changes without exact deterministic validation and authorized approval.
5. API/webhook retries do not duplicate money, stock, subscription, tenant, or job actions.
6. Premium-to-Pro/Free downgrade preserves all protected history and produces complete remediation.
7. Optional isolated deployment uses the same product contract and passes tenant mapping, migration, failover, observability, backup, and rollback tests.
8. Seven-year tenant-visible audit configuration does not override lawful deletion, minimization, legal hold, or record-specific retention policy.

## Status

`PREMIUM_PLAN_ARCHITECTURE_COMPLETE`
