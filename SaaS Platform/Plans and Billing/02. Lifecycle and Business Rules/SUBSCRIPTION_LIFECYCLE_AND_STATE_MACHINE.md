# SUBSCRIPTION LIFECYCLE AND STATE MACHINE

## Canonical subscription states

This package preserves the parent contract states and adds machine codes and independent access modes.

| Machine code | Display state | Meaning |
|---|---|---|
| `TRIAL` | Trial | Time-limited trial entitlement snapshot is active. |
| `PENDING_ACTIVATION` | Pending activation | Tenant exists but required provisioning/payment is incomplete. |
| `ACTIVE` | Active | Current plan/version is valid and normal access applies. |
| `RENEWAL_DUE` | Renewal due | Renewal is approaching or invoice is open but not late. |
| `PAST_DUE` | Past due | Required payment failed or remains unpaid. |
| `GRACE_PERIOD` | Grace period | Time-limited continuity window after past due. |
| `SUSPENDED` | Suspended | Access is restricted by non-payment, security, legal, abuse, or tenant request. |
| `CANCELLATION_SCHEDULED` | Cancellation scheduled | Subscription remains effective until declared cancellation time. |
| `CANCELLED` | Cancelled | Paid/trial plan access ended; export/closure policy applies. |
| `ARCHIVED` | Archived | Operational access ended; retained records remain protected. |
| `CLOSED` | Closed | Tenant closure completed; only retention/legal/audit controls remain. |

## Independent access modes

Subscription state alone does not describe safe operational access.

| Access mode | Allowed behavior |
|---|---|
| `FULL` | Normal entitled use. |
| `FULL_WITH_WARNING` | Normal use plus renewal, usage, or payment warnings. |
| `CORE_CONTINUITY` | Active repair completion, quote decisions, payment, release, warranty, security, billing, support, and authorized export; block routine new/high-cost actions. |
| `READ_ONLY_REMEDIATION` | Read and export; owners can select resources, fix billing, downgrade, reactivate, or close. |
| `BILLING_SUPPORT_EXPORT_ONLY` | Owner/billing/support/export access only. |
| `SECURITY_LOCK` | Access determined by incident/legal authority; may override ordinary continuity. |
| `NO_INTERACTIVE_ACCESS` | Retained/archive state; platform retention jobs only. |

Every state transition creates an access-mode decision from reason, plan, tenant policy, security policy, and current operational risk.

## Normal lifecycle

```text
Prospect
→ Tenant Provisioning
→ Trial or Free/Paid Selection
→ Pending Activation when required
→ Active
→ Renewal Due
→ Active/Renewed
```

## Trial lifecycle

```text
Trial Requested
→ Eligibility Check
→ Tenant Provisioning
→ Trial
→ Day-10 Reminder
→ Day-13 Final Reminder
→ Plan Selected?
   ├─ Paid selected → Checkout/Payment → Active Paid Plan
   ├─ No selection + Free compatible → Active Free
   └─ No selection + incompatible → Read-Only Remediation (7 days)
       ├─ Upgrade → Active Paid Plan
       ├─ Complete remediation → Active Free
       └─ No resolution → Cancelled / Export Window
```

Trial provisioning is idempotent. Partial provisioning remains `PENDING_ACTIVATION` and cannot present a fully active tenant.

## Paid lifecycle

```text
Plan Selected
→ Price/Tax/Eligibility Preview
→ Billing Authorization
→ Payment Pending
→ Trusted Payment Confirmation
→ Internal Subscription Activated
→ Entitlement Snapshot Published
→ Usage Period Opened
→ Active
```

A provider callback alone does not bypass internal validation. Provider events enter verified processing, mapping, idempotency, and reconciliation.

## State-transition contract

Every transition defines:

- transition ID and version;
- current state and required access mode;
- requested next state;
- triggering command/event;
- actor/source/provider;
- eligibility and permission;
- required payment or issue resolution;
- effective time;
- entitlement snapshot effect;
- usage-period effect;
- notification effect;
- integration/API/webhook effect;
- audit event;
- compensation/retry/rollback;
- reconciliation result.

## Allowed transition matrix

| From | To | Conditions |
|---|---|---|
| Prospect | Pending Activation | Verified signup begins provisioning. |
| Pending Activation | Trial | Trial eligible and mandatory resources ready. |
| Pending Activation | Active | Free assignment or trusted paid activation succeeds. |
| Trial | Active | Paid plan succeeds or Free compatibility passes. |
| Trial | Cancelled | Trial ends and tenant declines/remains unresolved. |
| Active | Renewal Due | Renewal notification/invoice window begins. |
| Renewal Due | Active | Renewal succeeds or Free requires no charge. |
| Active/Renewal Due | Past Due | Required payment fails/remains unpaid. |
| Past Due | Active | Trusted payment/reconciliation resolves before grace. |
| Past Due | Grace Period | Plan grace policy begins. |
| Grace Period | Active | Payment/issue resolved. |
| Grace Period | Suspended | Grace expires or risk policy requires suspension. |
| Active | Cancellation Scheduled | Owner-authorized end-of-term cancellation accepted. |
| Cancellation Scheduled | Active | Cancellation revoked before effective time when allowed. |
| Cancellation Scheduled | Cancelled | Effective time reached. |
| Active/Past Due/Grace | Suspended | Security, abuse, legal, tenant request, or prolonged non-payment. |
| Suspended | Active | Reactivation conditions pass. |
| Suspended | Cancelled | Closure/cancellation decision completes. |
| Cancelled | Active | Reactivation within allowed window and plan available. |
| Cancelled | Archived | Export/reactivation window ends. |
| Archived | Closed | Retention and closure requirements pass. |

Any unlisted transition is prohibited unless a new version of this architecture is approved.

## Concurrency rules

- One active subscription-change workflow per tenant and commercial family unless explicitly composable.
- Commands use tenant-scoped idempotency keys.
- Transition compares expected subscription version.
- Provider events arriving out of order are stored but cannot replace a newer internal version.
- Cancellation, upgrade, downgrade, renewal, refund, and reactivation conflicts produce a dedicated resolution queue.
- A plan change cannot apply while tenant deletion is executing.

## Access resolution examples

| Subscription state | Reason | Access mode |
|---|---|---|
| Active | Healthy | Full |
| Active | 90% usage | Full with warning |
| Past Due | First failed renewal | Full with warning |
| Grace Period | Within grace | Core continuity or full-with-warning by plan policy |
| Suspended | Non-payment after grace | Billing/support/export only, with active-repair continuity if configured and lawful |
| Suspended | Security incident | Security lock |
| Cancelled | Export window | Read-only remediation/export |
| Archived | Retention only | No interactive access |

## Notifications

Minimum lifecycle notifications:

- trial started and expiry reminders;
- successful activation;
- renewal 30/14/7/1 days before when applicable;
- payment failed and retry schedule;
- grace started and ending;
- suspension effective and recovery path;
- plan change scheduled/applied/failed;
- cancellation scheduled/effective/revoked;
- export window and archive date;
- reactivation success/failure;
- closure and deletion eligibility status.

Notifications include plan, state, effective date, safe next action, billing/support route, and tenant reference. They never include full payment secrets.

## Audit events

- `TrialStarted`
- `TrialExpiryWarningSent`
- `TrialExpired`
- `SubscriptionActivationRequested`
- `SubscriptionActivated`
- `RenewalDue`
- `RenewalPaid`
- `PaymentFailed`
- `GracePeriodStarted`
- `AccessModeChanged`
- `TenantSuspended`
- `TenantReactivated`
- `CancellationScheduled`
- `CancellationRevoked`
- `SubscriptionCancelled`
- `TenantArchived`
- `TenantClosed`

## Acceptance criteria

- Illegal transitions are rejected server-side.
- Subscription state and access mode are always recorded separately.
- Active tenant operations do not depend on a live provider API call for every request.
- Out-of-order and duplicate provider events cannot roll back newer state.
- Every transition publishes one effective entitlement snapshot or explicitly none.
- Failure leaves a truthful state and a recoverable/reconcilable workflow.
- Customer-facing status uses plain language while retaining canonical machine state internally.

## Status

`SUBSCRIPTION_LIFECYCLE_STATE_MACHINE_COMPLETE`
