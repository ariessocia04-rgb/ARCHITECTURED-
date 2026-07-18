# PAST DUE, SUSPENSION, REACTIVATION, AND CLOSURE

## Purpose

Define safe access behavior when payment fails, grace expires, risk requires suspension, a tenant reactivates, or the tenant is closed. The system must protect revenue and infrastructure without corrupting or trapping repair-business data.

## Past-due entry conditions

- renewal payment failed;
- invoice reached due date without trusted payment confirmation;
- required payment method became invalid;
- disputed/reversed provider payment invalidated a required subscription payment;
- reconciliation found a provider/internal payment mismatch requiring review.

Past due never results from a transient provider timeout without durable evidence. Unknown provider state becomes `PAYMENT_STATUS_UNCONFIRMED` and enters reconciliation.

## Grace periods

| Plan | Default grace | Access during grace |
|---|---:|---|
| Free | Not applicable | No recurring payment. |
| Pro | 7 calendar days | Full core operation with persistent owner/billing warnings; optional high-cost actions may be limited. |
| Premium | 14 calendar days | Full core operation with persistent warnings; new add-ons, high-cost optional actions, and isolated-deployment expansion may be limited. |

A contractual Premium SLA can define another grace period, but security/legal suspension can override it.

## Access behavior by stage

### `PAST_DUE` — `FULL_WITH_WARNING`

Allowed:

- all current core workflows;
- routine new intake/jobs unless risk policy says otherwise;
- customer quote decisions and payments;
- active integrations/API/AI within existing quotas;
- billing method update and payment retry;
- invoices, receipts, usage, export, support.

Restricted:

- new paid add-ons;
- plan downgrade that attempts to avoid a valid outstanding balance;
- high-cost optional operations when explicitly configured.

### `GRACE_PERIOD` — `FULL_WITH_WARNING` or `CORE_CONTINUITY`

Always allowed:

- complete active repairs;
- quote decision and customer communication;
- payment, receipt, release, warranty, refund/dispute handling;
- security and support access;
- owner billing recovery;
- authorized export and cancellation.

Plan policy may block:

- new API clients or integrations;
- new AI/BI jobs;
- large exports unrelated to cancellation;
- additional users/branches/storage packs;
- routine new intake near grace expiry, with explicit warning.

### `SUSPENDED` for prolonged non-payment — `CORE_CONTINUITY` then `BILLING_SUPPORT_EXPORT_ONLY`

Initial suspension continuity window default: 7 days.

During initial window:

- finish active jobs;
- receive repair-customer payments and release devices;
- process warranty/safety issues;
- owner can pay/reactivate/export/contact support;
- block routine new intake, new jobs, invitations, integrations, API, AI, BI, scheduled reports, and optional uploads.

After initial window:

- Owner/Billing Contact can access billing, invoices, payment method, plan, reactivation, export, and support.
- Other staff access becomes read-only or revoked according to policy.
- Customer portal remains read-only for authorized tracking/documents during the declared notice window unless security/legal policy blocks it.
- No new operational transaction except payment, support, export, security, closure, and required correction/reconciliation.

### `SUSPENDED` for security, abuse, or legal reason — `SECURITY_LOCK`

- Security/legal authority defines allowed actors and actions.
- Ordinary payment recovery does not automatically reactivate.
- Sessions, API keys, webhooks, integrations, exports, and customer access can be immediately revoked or narrowed.
- Evidence, logs, legal hold, incident, and audit records are preserved.
- User-facing notice is safe and does not expose investigation details.

## Suspension reason codes

- `NON_PAYMENT`
- `SECURITY_RISK`
- `ABUSE_POLICY`
- `LEGAL_REQUIREMENT`
- `TENANT_REQUEST`
- `PROVIDER_DISPUTE`
- `DATA_INTEGRITY_RISK`
- `PLATFORM_INCIDENT_CONTAINMENT`

Reason controls access mode, notification, approver, review deadline, and reactivation prerequisites.

## Reactivation workflow

```text
Owner Opens Reactivation
→ Resolve Current Suspension Reason
→ Verify Authority / Step-Up Authentication
→ Reconcile Provider, Invoice, Payment, and Subscription
→ Validate Plan Availability and Price Version
→ Validate Usage and Data Compatibility
→ Security/Legal Approval when required
→ Show Reactivation Review
→ Confirm Payment/Terms when required
→ Restore Subscription State
→ Publish New Entitlement Snapshot
→ Restore Access Mode and Sessions Safely
→ Restart Integrations/Jobs Selectively
→ Notify and Audit
```

### Reactivation rules

- Non-payment reactivation requires trusted payment or approved credit/waiver.
- Security/legal reactivation requires explicit authorized approval.
- Closed or unavailable plan version can map to an approved replacement only through a tenant-visible preview.
- Expired SSO/API/integration secrets are not silently restored; owner must revalidate them.
- Queued messages, webhooks, jobs, and synchronization are rechecked before replay.
- Reactivation never duplicates invoices, payments, usage periods, jobs, notifications, or provider subscriptions.

## Cancellation to closure lifecycle

```text
Cancelled
→ Interactive Read-Only / Export / Reactivation Window
→ Integrations and API Disabled
→ Sessions Revoked except authorized owner access
→ Archive Window
→ Retention and Legal-Hold Review
→ Deletion Eligibility by Entity
→ Approved Deletion / Extended Hold
→ Closed
```

## Tenant export

Owner-authorized export includes permitted:

- organization, companies, branches, warehouses, users, roles, and configuration;
- customers, devices, jobs, diagnosis, quotes, repair, parts, tests, release, warranty, and support;
- inventory, supplier, purchasing, invoice, payment, refund, and reconciliation records;
- documents/media references and approved files;
- communications and audit according to visibility/retention policy;
- relationship IDs, statuses, timestamps, versions, currencies, and source references.

Export rules:

- encrypted or access-controlled delivery;
- short-lived download reference;
- step-up authentication for restricted data;
- tenant/company/branch/field filters;
- generated asynchronously with progress;
- checksum/manifest and schema version;
- complete audit;
- automatic deletion after delivery window;
- failure is retryable without duplicate export charges or jobs.

## Closure prerequisites

- verified owner/legal authority;
- outstanding invoice/refund/dispute review;
- active repair, device custody, warranty, and support obligations reviewed;
- tax, accounting, security, legal hold, and retention reviewed;
- export offered/completed/declined with evidence;
- API, webhooks, integrations, sessions, SSO, jobs, notifications, and support access shut down safely;
- deletion plan generated by entity class;
- final confirmation and effective date recorded.

## Data deletion

- Commercial archive expiry does not automatically delete every record.
- Entity retention rules determine eligibility.
- Financial, warranty, custody, dispute, legal, security, and audit records may remain.
- Legal hold blocks deletion.
- Backups expire through their separate secure purge cycle.
- Deletion jobs are idempotent, resumable, verified, and audited.
- De-identified platform analytics may remain only when approved and non-reidentifiable.
- Tenant identifiers are never reassigned.

## User experience requirements

Every warning/restriction screen shows:

- current subscription state and safe plain-language explanation;
- access still available;
- action currently blocked;
- payment/reactivation/export/support choices;
- exact deadline and time zone;
- invoice/payment reference when permitted;
- no raw provider/security error;
- one primary recovery action;
- confirmation after recovery.

Non-owner staff do not see payment-method details. They see `Your account owner needs to update the subscription` plus safe continuation guidance.

## Reconciliation and provider outage

- Daily scheduled reconciliation for active paid subscriptions.
- Immediate reconciliation after payment failure, dispute, plan change, cancellation, and reactivation.
- Provider outage does not mark healthy tenants suspended without trusted evidence.
- When provider status is unavailable, internal state remains unchanged, billing UI shows `status being confirmed`, and high-risk duplicate commands are prevented.
- Mismatch creates owner, status, amount, provider reference, internal version, next action, severity, and audit record.

## Acceptance criteria

1. Payment timeout alone cannot suspend a tenant.
2. Pro and Premium grace periods apply the exact plan policy.
3. Active repair completion, payment, release, warranty, export, billing, and security paths remain available in defined continuity modes.
4. Security suspension overrides ordinary grace only with authority and audit.
5. Reactivation is idempotent and cannot duplicate subscription/provider objects.
6. Closure does not delete records still required by custody, finance, warranty, dispute, legal, security, or retention.
7. Export is permission-filtered, encrypted/access-controlled, time-limited, checksummed, versioned, and audited.
8. Provider/internal mismatches enter reconciliation rather than silent state change.

## Status

`PAST_DUE_SUSPENSION_REACTIVATION_CLOSURE_ARCHITECTURE_COMPLETE`
