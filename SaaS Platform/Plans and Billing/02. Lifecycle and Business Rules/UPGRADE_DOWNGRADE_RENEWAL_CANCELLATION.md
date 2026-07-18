# UPGRADE, DOWNGRADE, RENEWAL, AND CANCELLATION

## Plan-change preview contract

Every paid plan change starts with an immutable preview:

```text
preview_id
tenant_id
current_subscription_version
current_plan_version
requested_plan_version
current_price_book_entry
requested_price_book_entry
billing_interval
currency
tax_preview
credit_preview
proration_preview
amount_due_now
next_renewal_amount
current_period_end
effective_time
new_entitlements
new_limits
lost_entitlements
usage_compatibility
remediation_items
provider_preview_reference
expires_at
```

Preview is informational until confirmed and can expire if price, tax, usage, subscription, or provider state changes.

## Upgrade workflow

```text
Owner Opens Plan Comparison
→ Select Target Plan/Interval
→ Validate Eligibility and Market
→ Build Entitlement/Limit Difference
→ Request Provider Billing Preview
→ Show Review Page
→ Owner Confirms
→ Create Pending Subscription Change
→ Collect/Confirm Payment when required
→ Verified Provider Event or Trusted Result
→ Apply Internal Subscription Version
→ Publish Entitlement Snapshot
→ Open/Adjust Usage Period
→ Notify Owner and Billing Contacts
→ Reconcile Provider and Internal State
```

### Upgrade rules

- Free → Pro/Premium: immediate after successful required payment.
- Pro → Premium: immediate after successful required payment.
- Monthly → annual: effective immediately or next renewal according to preview; default is immediate with explicit charge/credit.
- Annual → higher annual tier: immediate with previewed proration.
- Seat/add-on increase: immediate after payment when required.
- Upgrade never resets tenant ID, users, branches, data, numbering, jobs, invoices, files, audit, or API identifiers.
- Usage consumed in the current cycle carries forward unless the target plan defines a different meter period and the preview explains it.
- Payment-requiring upgrade uses a pending-update pattern so entitlement does not activate on failed payment.
- If provider succeeds but internal apply fails, no second charge is attempted; create reconciliation and retry internal apply idempotently.

## Downgrade preflight

The server compares current tenant state against target plan entitlements and limits.

Required checks:

- active companies, branches, warehouses, and users;
- current and projected job-order usage;
- stored bytes and pending uploads;
- active roles, permissions, approval authorities, SSO/MFA policies;
- active API clients, webhooks, integrations, AI automations, scheduled reports, BI datasets, custom branding/domains;
- backup/audit/archive retention differences;
- add-ons, credits, contractual support, and deployment class;
- legal, payment, warranty, incident, migration, or support holds.

Each incompatibility becomes a `DowngradeRemediationItem` with type, resource, current value, target value, required owner decision, deadline, consequence, and completion state.

## Downgrade workflow

```text
Owner Selects Lower Plan
→ Build Compatibility Report
→ Show Lost Features and Lower Limits
→ Generate Remediation Task List
→ Owner Selects Active Resources / Exports Data / Disables Features
→ Validate Remediation
→ Show Price/Credit/Effective-Date Review
→ Owner Confirms
→ Schedule Change at Period End by Default
→ Send Reminders
→ Revalidate Before Effective Time
→ Apply New Plan and Entitlement Snapshot
→ Restrict Excess/Unsupported Resources Without Deletion
→ Reconcile and Confirm
```

### Resource treatment on downgrade

| Resource | Treatment |
|---|---|
| Excess staff users | Owner selects allowed active users; others become inactive, retaining actor/audit history. |
| Excess branches/companies | Owner selects operational scopes; others become read-only/inactive with full history and export. |
| Excess warehouses | Stop new movement in inactive warehouse after reconciliation; preserve stock/history and require transfer/export plan. |
| Storage above target | Preserve files; block optional new upload and show cleanup/export/upgrade. |
| Custom roles | Preserve definition as locked; users must be mapped to target-plan roles before effective date. |
| SSO | Require tested local owner/break-glass login before deactivation. |
| API clients | Revoke or suspend credentials at effective date; preserve request/audit history. |
| Webhooks/integrations | Disable delivery/sync at effective date after final reconciliation; preserve configuration/history. |
| AI/BI | Disable new execution/refresh; preserve allowed historical outputs and audit. |
| Advanced reports/schedules | Disable schedules; retain generated reports according to retention. |
| Dedicated deployment | Requires approved migration to pooled/bridge placement with backup, reconciliation, and rollback. |

### Downgrade timing

- Default: end of current paid period.
- Immediate downgrade is allowed only when owner explicitly accepts immediate loss of optional capabilities and billing/credit policy supports it.
- Security/legal downgrade or entitlement removal can be immediate with documented authority.
- Scheduled downgrade can be revoked before effective time if no irreversible provider/migration action has started.
- Effective-time revalidation prevents stale remediation.

## Renewal workflow

```text
Renewal Window Opens
→ Notify 30 / 14 / 7 / 1 Days Before
→ Validate Plan Version and Price Availability
→ Generate Invoice Preview
→ Confirm Tax, Credits, Discounts, Payment Method
→ Renewal Date
→ Payment Attempt
   ├─ Success → Invoice/Payment Confirmed → New Period → Active
   └─ Failure → Past Due → Retry/Grace Workflow
```

### Renewal rules

- Free creates a new usage period without charge.
- Paid renewal references exact plan version, price-book entry, tax snapshot, discounts, credits, invoice, and payment method reference.
- Retries use the same logical renewal attempt/idempotency family and never duplicate invoices or charges.
- Provider invoice/payment state and internal state are reconciled.
- Grandfathered plan renewal follows its approved policy; no silent price migration.
- Annual renewal notice includes the full annual amount and effective date.

## Billing retry defaults

Provider capability can vary, but the internal default schedule is:

- attempt 1: renewal time;
- attempt 2: +1 day;
- attempt 3: +3 days;
- attempt 4: +5 days;
- then remain in grace or suspend according to plan policy.

A trusted provider retry policy may execute attempts, but internal notifications, access mode, and reconciliation remain authoritative.

## Cancellation workflow

```text
Owner Opens Cancel Subscription
→ Explain Effective Date and Consequences
→ Offer Plan Downgrade / Pause Alternative when approved
→ Show Data, Integration, API, User, and Retention Impact
→ Select Reason
→ Review Before Submit
→ Confirm with Step-Up Authentication when required
→ Schedule End-of-Term Cancellation by Default
→ Notify Owner/Billing Contacts
→ Allow Revocation Until Effective Time
→ Effective Time Reached
→ Disable Paid Entitlements
→ Enter Read-Only Export/Reactivation Window
→ Archive and Deletion-Eligibility Workflow
```

### Cancellation policy

- Default effect: end of paid period.
- Immediate effect only for owner request with explicit confirmation, security/legal action, fraud/abuse policy, or approved refund/credit case.
- Cancellation does not refund automatically. Refund/credit follows financial policy and approved provider capability.
- Existing invoices, payments, credits, refunds, disputes, warranties, and audit remain immutable.
- Customer portal behavior is explicitly communicated; completed documents and active-repair continuity follow access-mode policy.
- API/webhooks/integrations receive scheduled shutdown time and final reconciliation.
- Owner receives export and reactivation deadline.

## Cancellation retention defaults

| Plan at cancellation | Interactive read-only/export window | Archive window before general deletion eligibility |
|---|---:|---:|
| Free | 30 days | 30 days |
| Pro | 30 days | 90 days |
| Premium | 60 days | 180 days |

Record-specific financial, tax, warranty, dispute, legal-hold, security, backup, and audit retention overrides these commercial windows.

## Refund and credit behavior

- Proration credit is a billing calculation, not automatically a cash refund.
- Cash/card refund requires original payment, refundable balance, reason, approval, provider support, and reconciliation.
- Credits remain separate immutable records.
- A failed plan change after a successful charge creates reconciliation and approved refund/credit handling; it does not retry charging blindly.

## Confirmation screen requirements

Every completed change shows:

- exact result and reference;
- old and new plan/version;
- effective date;
- amount charged/credited and invoice/receipt link;
- new limits and important feature changes;
- outstanding remediation;
- next renewal date/amount when known;
- cancellation/revocation rule;
- support reference and one logical next action.

## Failure handling

| Failure | Result |
|---|---|
| Preview provider unavailable | Preserve selection; show retry; no change created. |
| Payment fails | Pending change remains failed/expired; old plan stays active according to current state. |
| Provider webhook delayed | Show processing state; poll/reconcile; do not duplicate command. |
| Internal apply fails after payment | Reconciliation finding; retry internal apply using same event/change ID. |
| Entitlement snapshot publish fails | Do not claim change complete; use safe old snapshot/continuity and reconcile. |
| Effective downgrade validation fails | Do not apply; return to remediation with updated findings. |
| Cancellation confirmation interrupted | No cancellation unless final command and audit record succeed. |

## Acceptance criteria

- Every change has preview, confirmation, idempotency, version check, audit, notification, and reconciliation.
- Paid upgrade cannot activate before successful trusted payment when payment is required.
- Downgrade never silently deletes protected or excess records.
- Renewal retries cannot duplicate invoice or charge.
- Cancellation consequences and effective date are explicit before submission.
- Provider and internal failures produce a truthful recoverable state.
- All plan changes are tested across monthly/annual, Free/Pro/Premium, discounts, credits, tax, usage, past-due, and cancellation states.

## Status

`PLAN_CHANGE_RENEWAL_CANCELLATION_ARCHITECTURE_COMPLETE`
