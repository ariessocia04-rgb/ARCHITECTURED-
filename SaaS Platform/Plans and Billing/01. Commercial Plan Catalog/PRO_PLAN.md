# PRO PLAN — `PRO-2026-01`

## Purpose

Provide the complete operating plan for an established repair business that needs multiple staff and branches, full inventory and purchasing, advanced permissions and reporting, standard integrations, controlled AI assistance, and materially higher usage limits without Premium-only multi-company, SSO, BI, or high-scale API requirements.

## Target tenant

- One repair company with up to three active branches.
- Up to fifteen active staff users across Owner, Manager, Front Desk, Technician, Inventory, Finance, Quality, and Auditor roles.
- Moderate repair volume and storage needs.
- Requires purchasing, advanced reports, integrations, custom roles, and limited API/AI access.

## Included applications and features

| Capability | Pro behavior |
|---|---|
| Owner Application | Full core owner workspace, business/branch/staff monitoring, advanced reports, approvals, inventory, finance export, audit, settings, usage, and subscription. |
| Front Desk Application | Full intake, appointments, communication, quote approval, payment, release, warranty, reports, notifications, and profile workflows. |
| Technician Application | Full repair lifecycle with queue, diagnosis, quotation collaboration, parts, testing, completion, reports, notifications, and profile. |
| Customer Portal | Full tracking, timeline, quotation decision, online payment handoff, appointments, warranty, feedback, notifications, support, and documents. |
| Inventory and purchasing | Stock by branch/warehouse, reservations, movements, suppliers, purchase orders, receiving, returns, transfers, reorder warnings, and cost reporting. |
| Roles and permissions | Custom tenant roles, branch scope, approval authority, and field-level restrictions within platform-defined safety boundaries. |
| Analytics and reports | Advanced operational, technician, branch, inventory, financial, SLA, warranty, and exportable reports. |
| Integrations | Up to three active standard integration connections using approved adapters. |
| API/webhooks | Limited Public API and up to three outbound webhook endpoints. |
| AI Assistant | Limited assisted drafting/summarization quota; no autonomous protected action. |
| Branding | Tenant logo, business details, approved colors, documents, and customer-facing templates; no full white-label domain by default. |
| Support | Priority email support and guided onboarding materials; response objectives are defined operationally until a contractual SLA is approved. |

## Included limits

| Meter | Limit | Reset/enforcement |
|---|---:|---|
| Companies | 1 | Structural; no reset. |
| Active branches | 3 | Structural; no reset. |
| Active staff users | 15 | Structural; invitations blocked at limit. |
| Active warehouses | 3 | Structural; no reset. |
| Job orders created | 2,000 per billing month | Warning at 80/90%; routine new jobs blocked at 100% unless approved overage/add-on exists. |
| Storage | 10 GB | Warning at 80/90%; optional new uploads blocked at 100%. |
| Outbound email | 5,000 per billing month | Threshold warnings; pass-through/add-on available after approval. |
| SMS/push credits | 0 bundled by default | Channel enabled with tenant-funded pay-as-you-go or approved pack; platform never hides provider cost. |
| Report/export jobs | 500 per billing month | Asynchronous queue with concurrency limit and cancellation. |
| Public API calls | 10,000 per billing month | Stable quota headers and `429` response after limit. |
| Webhook endpoints | 3 | Failed endpoints can be quarantined. |
| Integration connections | 3 | Connection health and reconciliation required. |
| AI credits | 500 per billing month | AI stops at limit; core workflow continues. |
| Backup recovery window target | 30 days | Production target requires tested evidence. |
| Tenant audit visibility | 365 days | Longer protected retention may apply. |
| Cancellation archive window | 90 days | Then entity-level deletion eligibility review. |

## Standard Pro feature entitlements

- `feature.advanced_roles = enabled`
- `feature.inventory = enabled`
- `feature.purchasing = enabled`
- `feature.finance_export = enabled`
- `feature.advanced_reporting = enabled`
- `feature.multi_branch = enabled`
- `feature.integrations = enabled`
- `feature.public_api = enabled_limited`
- `feature.webhooks = enabled_limited`
- `feature.ai_assistant = enabled_limited`
- `feature.custom_branding = enabled_standard`
- `feature.business_intelligence = disabled`
- `feature.multi_company = disabled`
- `feature.sso = disabled`
- `feature.dedicated_deployment = disabled`

## Usage and overage policy

- Pro launch defaults are prepaid subscription plus included quotas; automatic monetary overage is disabled until an approved overage price book is published.
- At 80%, notify Tenant Owner and Billing Contacts.
- At 90%, show persistent usage warning and projected reset date.
- At 100%, apply meter-specific safe enforcement.
- API returns quota metadata and retry/reset guidance; security rate limits remain separate and undisclosed.
- AI usage blocks only AI requests, never diagnosis, quote, repair, payment, release, warranty, or export.
- Outbound message overage preserves platform security/billing notices and queues tenant communications according to priority/fallback rules.
- Storage continuity reserve applies only to required legal, safety, payment, release, or warranty evidence.

## Upgrade behavior to Premium

- Owner opens plan comparison and requests a billing-impact preview.
- Backend validates target plan, price book, market, tax, current usage, and payment method.
- Preview shows immediate proration/credit, next renewal, new limits, newly enabled features, and any optional deployment change.
- Payment-requiring change uses a pending update; Premium entitlements activate only after trusted payment confirmation.
- Existing API keys, webhooks, roles, integrations, jobs, and history remain; their permitted limits expand according to the new snapshot.

## Downgrade behavior to Free

Downgrade preflight checks:

- branch count above one;
- staff users above two;
- warehouses above one;
- current-cycle job creation above 100;
- storage above 500 MB;
- custom roles and approvals;
- integrations, API clients, webhooks, purchasing workflows, advanced reports, and AI configuration.

Default downgrade effective time is the current paid period end. The owner receives a remediation task list and selects which users/branch remain active. Excess records become inactive or read-only according to policy; they are never deleted automatically.

## Past-due continuity

- `Past Due`: all core operations continue with owner/billing warnings; new paid add-ons and high-cost optional actions can be blocked.
- `Grace Period`: seven calendar days by default. Active repairs, customer quote decisions, payment, release, warranty, export, and security actions continue.
- End of grace: routine new intake/job creation and optional integrations/AI/API are restricted; active repair completion remains available.
- Pro reactivation restores the prior plan version unless retired or legally unavailable.

## Plan-specific acceptance tests

1. The sixteenth active-user invitation is blocked without deactivating current users.
2. Branch four cannot activate without upgrade/add-on, while historical branch data remains visible to authorized users.
3. The 10,001st Public API call receives a stable quota response; interactive core application use is unaffected.
4. AI credit exhaustion disables only AI capabilities and shows reset/upgrade guidance.
5. Downgrade produces deterministic remediation items for every incompatible resource and feature.
6. Upgrade to Premium does not activate until payment-requiring pending update succeeds.
7. Custom roles never bypass tenant, branch, record, field, lifecycle, approval, or subscription controls.
8. Provider outage leaves internal plan, entitlement, usage, and repair operations in a truthful degraded state.

## Status

`PRO_PLAN_ARCHITECTURE_COMPLETE`
