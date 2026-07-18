# FREE PLAN — `FREE-2026-01`

## Purpose

Provide a safe, useful, permanently free entry plan for one low-volume repair business without compromising tenant isolation, audit, customer access, active repair completion, or data portability.

## Target tenant

- One independent technician or micro repair shop.
- One legal business/tenant company.
- One operating branch.
- Up to two active staff users.
- Low monthly repair volume.
- No advanced integration, AI, SSO, or multi-company requirement.

## Included applications and features

| Capability | Free behavior |
|---|---|
| Owner Application | Basic dashboard, business profile, users, branch, subscription, usage, core reports, billing/export. |
| Front Desk Application | Customer/device intake, job creation, quotation handoff, payment/release support. |
| Technician Application | Full core repair flow: queue, diagnosis, repair, parts usage, testing, completion. |
| Customer Portal | Repair tracking, quote review/approval, payment handoff, documents, warranty, support. |
| Inventory | Basic part catalog and branch stock; no purchasing automation or advanced forecasting. |
| Roles | Predefined Owner, Front Desk, Technician, and read-only auditor role; no custom roles. |
| Reports | Operational summaries and basic CSV/PDF exports. |
| Branding | ARCHITECTURED branding plus tenant business name/logo where allowed; no white-label domain. |
| Notifications | Email and in-app notifications within included quota. |
| Data export | Owner-authorized portable export and cancellation export window. |
| Support | Documentation and standard email support; target response is an operational objective, not a contractual SLA. |

## Included limits

| Meter | Limit | Reset/enforcement |
|---|---:|---|
| Companies | 1 | Structural; no reset. |
| Active branches | 1 | Structural; no reset. |
| Active staff users | 2 | Structural; invitations blocked at limit. |
| Active warehouses | 1 | Structural; no reset. |
| Job orders created | 100 per billing month | Warning at 80/90; routine new jobs blocked at 100 until reset or upgrade. |
| Storage | 500 MB | Warning at 80/90%; new non-critical uploads blocked at 100%. |
| Outbound email | 250 per billing month | Non-critical messages queued/blocked at limit; platform security/billing notices excluded. |
| SMS/push credits | 0 included | Channel disabled unless approved paid pass-through/add-on becomes available. |
| Report/export jobs | 10 per billing month | Interactive views continue; new export jobs blocked at limit. |
| API calls | 0 | Public API disabled. |
| Webhook endpoints | 0 | Outbound tenant webhooks disabled. |
| Integration connections | 0 | Provider integrations disabled except platform-required billing/auth services. |
| AI credits | 0 | AI Assistant disabled outside a separately approved trial. |
| Backup recovery window target | 7 days | Platform target; production evidence required. |
| Tenant audit visibility | 90 days | Protected financial/security retention may be longer by law/policy. |
| Cancellation archive window | 30 days | Then entity-level deletion eligibility rules apply. |

## Usage-limit continuity rules

At a job-order limit:

- active jobs remain fully operable through diagnosis, quote, repair, testing, payment, release, warranty, closure, and export;
- warranty returns linked to prior jobs remain creatable;
- security incident, payment, refund, data export, and tenant closure records remain creatable;
- routine new intake/job creation is blocked with plan, usage, reset date, and upgrade action;
- no existing customer, device, job, file, invoice, payment, warranty, or audit record is deleted.

At a storage limit:

- existing files remain readable according to permission;
- required legal, payment, release, warranty, or safety evidence may use a hidden platform continuity reserve up to the configured emergency threshold;
- optional media uploads are blocked;
- owner receives cleanup/export/upgrade guidance;
- files are never automatically deleted solely because a quota is exceeded.

At a seat limit:

- existing active users are not automatically removed;
- new invitation and reactivation are blocked;
- owner may deactivate an existing user to free a seat;
- audit history retains the original actor identity.

## Free plan lifecycle

```text
Tenant Created
→ Free Plan Assigned
→ Entitlements Published
→ Usage Counters Opened
→ Active
→ Monthly Counters Reset
→ Active
```

Exception paths:

```text
Active → Usage Warning → Limit Reached → Restricted New Creation → Reset / Upgrade → Active
Active → Cancellation Scheduled → Cancelled → 30-Day Export/Archive Window → Deletion Eligibility Review
```

## Upgrade behavior

- Free to Pro or Premium is immediate only after payment-requiring change succeeds.
- Current tenant, users, branches, customers, jobs, settings, and history remain unchanged.
- New entitlement snapshot and higher limits become effective atomically.
- Usage already consumed in the current cycle carries into the new plan; it is not reset to manipulate billing.

## Free compatibility after trial or downgrade

A tenant is Free-compatible only when:

- companies ≤ 1;
- active branches ≤ 1;
- active staff users ≤ 2;
- active warehouses ≤ 1;
- current-cycle job creation ≤ 100;
- storage ≤ 500 MB;
- no active custom roles, SSO, API client, webhook, external integration, AI automation, multi-company, or Premium-only dependency is required.

If incompatible, the system creates a remediation checklist. It never guesses which branch, user, company, role, integration, or file to delete.

## Security and privacy

Free receives the same tenant isolation, authentication, server-side authorization, encryption, audit integrity, secure webhook/provider handling, backup verification, and vulnerability-remediation baseline as paid plans. Security is not intentionally weakened to differentiate price tiers.

## Plan-specific acceptance tests

1. The third active-user invitation is blocked without affecting existing sessions.
2. The 101st routine job-order creation is blocked, while active-job completion and warranty return remain allowed.
3. API and webhook endpoints return stable entitlement errors without revealing hidden system details.
4. Upgrade preserves all tenant identifiers and immediately resolves the new entitlement snapshot after successful payment.
5. Cancellation preserves export access and protected records for the declared window.
6. Cross-tenant, permission, field, search, file, report, cache, event, and export isolation tests pass exactly as for paid plans.

## Status

`FREE_PLAN_ARCHITECTURE_COMPLETE`
