# PLANS AND BILLING — RESEARCH SOURCE REGISTRY

## Purpose

This registry records the sources used to derive the Free, Pro, and Premium architecture. External material is advisory only. Project truth exists only in the canonical ARCHITECTURED files after validation and publication.

## Canonical repository sources

| Source | Authority used in this package |
|---|---|
| `1plan.md` | Governance, sequencing, completion truth, no-duplicate rule, Section 8A architecture standard, and implementation authorization gate. |
| `SaaS Platform/SUBSCRIPTION_ENTITLEMENT_USAGE_AND_TENANT_LIFECYCLE_CONTRACT.md` | Tenant provisioning, plan versioning, entitlement checks, usage dimensions, subscription states, upgrades, downgrades, renewal, suspension, export, closure, and deletion. |
| `SaaS Platform/PAYMENT_INVOICE_REFUND_AND_FINANCIAL_CONTROL_CONTRACT.md` | Money fields, invoices, payments, provider references, idempotency, reconciliation, refunds, tax snapshots, financial approvals, security, and immutable history. |
| `SaaS Platform/MULTI_TENANT_DATA_AND_ENTITY_ARCHITECTURE.md` | Platform-owned plan records, tenant-owned operational records, tenant and branch isolation, data classification, snapshot rules, retention, and ownership matrix. |
| `SaaS Platform/API_EVENT_WEBHOOK_AND_REALTIME_CONTRACT.md` | Versioned command/query APIs, idempotency, rate limits, events, webhook verification, retries, realtime authorization, background jobs, reconciliation, and observability. |
| `SaaS Platform/NON_FUNCTIONAL_REQUIREMENTS.md` | Reliability, performance, security, privacy, accessibility, isolation, offline behavior, observability, cost governance, testing, and target-register rules. |
| `Design/WIREFRAME_ARCHITECTURE.md` | Global shell, shared page/list frames, subscription-aware navigation, and low-fidelity documentation rules. |
| `Design/WIREFLOW_ARCHITECTURE.md` | Entry routing, subscription lifecycle flow, save/retry/resume rules, handoffs, and failure-path requirements. |
| `Design/NON_TECHNICAL_USER_UI_DESIGN_SYSTEM.md` | Plain language, guided steps, task lists, review-before-submit, error summaries, confirmation pages, accessibility, and consistent help. |
| `TECA/IMPLEMENTATION_BUILD_PLAN.md` | Foundation-first vertical slices, schema/API/design/test prerequisites, implementation order, traceability, and `implementation_authorized=true` gate. |

## External primary sources reviewed

### AWS SaaS Lens

1. Tenant tiers: https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-tiers.html
   - Used to separate tier experience, cost, operational, reliability, and isolation concerns.
2. Tenant activity and consumption: https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-activity-and-consumption.html
   - Used for tenant-aware metering, consumption visibility, and billing aggregation.
3. Tier-based isolation: https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tier-based-isolation.html
   - Used to keep optional Premium isolation compatible with the same product version and control plane.
4. Monitoring tenant tiers: https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/monitoring.html
   - Used for per-tier performance controls and cost-to-revenue governance.

### Microsoft Azure Architecture Center

1. Multitenant architectural approaches: https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/overview
   - Used for pool, bridge, silo, deployment-stamp, noisy-neighbor, and cost tradeoffs.
2. Multitenant control planes: https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/control-planes
   - Used for the platform tenant catalog, plan/SKU assignment, onboarding, offboarding, and lifecycle automation.
3. Deployment and configuration: https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/deployment-configuration
   - Used to separate release feature flags from commercial license entitlements.
4. Tenancy models: https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models
   - Used for tenant-to-deployment mapping and Premium isolation readiness.
5. Deployment stamps: https://learn.microsoft.com/en-us/azure/architecture/patterns/deployment-stamp
   - Used for future scale-out without changing plan and entitlement contracts.

### Stripe Billing documentation — provider reference, not provider lock-in

1. Entitlements: https://docs.stripe.com/billing/entitlements
   - Used for stable feature lookup keys, product-to-feature mapping, change notifications, and internal entitlement persistence.
2. Subscription webhooks: https://docs.stripe.com/billing/subscriptions/webhooks
   - Used because subscription and payment changes are asynchronous and require verified webhook handling.
3. Usage-based billing lifecycle: https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works
   - Used for ingestion, catalog, billing, monitoring, meters, events, aggregation, and threshold alerts.
4. Meter configuration: https://docs.stripe.com/billing/subscriptions/usage-based/meters/configure
   - Used for SUM, COUNT, LAST aggregation, immutable meter definitions, dimensions, and correction behavior.
5. Recording usage: https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage
   - Used to account for asynchronous usage processing and reconciliation delay.
6. Modify subscriptions: https://docs.stripe.com/billing/subscriptions/change
   - Used for plan switching, billing-impact previews, and pending updates.
7. Proration: https://docs.stripe.com/billing/subscriptions/prorations
   - Used for upgrade/downgrade preview and credit/debit handling.
8. Pending updates: https://docs.stripe.com/billing/subscriptions/pending-updates
   - Used so payment-requiring changes do not activate before payment succeeds.
9. Customer portal configuration: https://docs.stripe.com/customer-management/configure-portal
   - Used as a reference for self-service plan switching, quantity/seat changes, invoices, and payment-method management.

### Usability and accessibility

1. GOV.UK check-answers pattern: https://design-system.service.gov.uk/patterns/check-answers/
   - Used for review pages before paid plan changes, cancellation, and tenant closure.
2. GOV.UK error summary: https://design-system.service.gov.uk/components/error-summary/
   - Used for linked error summaries plus field-specific correction messages.
3. WCAG 2.2: https://www.w3.org/TR/WCAG22/
   - Target: Level AA for all responsive subscription and billing screens.

### Secure development and verification

1. OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
   - Stable reference: ASVS 5.0.0 for application security verification requirements.
2. NIST SP 800-218 SSDF 1.1 final: https://csrc.nist.gov/pubs/sp/800/218/final
   - Used for secure development, supply-chain, verification, release, and vulnerability-response practices.
3. NIST SP 800-218 Rev. 1 / SSDF 1.2 draft status: https://csrc.nist.gov/projects/ssdf/publications
   - Tracked as draft research only; the final 1.1 publication remains the release baseline until a later final revision is approved.

## Derived architecture decisions

1. Free, Pro, and Premium are plan versions, not hardcoded application branches.
2. Commercial entitlements are not ordinary feature flags. Feature flags control rollout; entitlements control purchased eligibility.
3. The internal entitlement snapshot is authoritative for application access; provider state is reconciled input.
4. Usage is captured first in the application domain, then aggregated and optionally reported to a billing provider.
5. Webhooks are verified, deduplicated, durably queued, processed asynchronously, and reconciled.
6. Upgrade activation requiring payment uses a pending-change model.
7. Downgrade preserves all historical and protected data and produces remediation tasks for excess resources.
8. Core repair continuity remains available during warning and grace states according to the access-mode matrix.
9. Premium may support stronger isolation later, but the product contract stays identical across pooled and isolated deployments.
10. Every material plan, price, entitlement, limit, meter, and policy change is versioned and auditable.

## Research status

```text
REPOSITORY SOURCE REVIEW: COMPLETE
OFFICIAL MULTITENANT / TIER / METERING REVIEW: COMPLETE
OFFICIAL SUBSCRIPTION / ENTITLEMENT / WEBHOOK REVIEW: COMPLETE
OFFICIAL ACCESSIBILITY / UX REVIEW: COMPLETE
OFFICIAL SECURITY DEVELOPMENT BASELINE REVIEW: COMPLETE
PROVIDER LOCK-IN CREATED: NO
```
