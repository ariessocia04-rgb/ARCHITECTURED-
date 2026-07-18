# SUBSCRIPTION, ENTITLEMENT, USAGE, AND TENANT LIFECYCLE CONTRACT

## PURPOSE

This document defines tenant onboarding, plans, subscriptions, entitlements, usage limits, billing lifecycle, suspension, reactivation, cancellation, data export, and tenant closure.

## TENANT LIFECYCLE

```text
Prospect
→ Trial Requested
→ Tenant Provisioning
→ Trial Active
→ Subscription Selected
→ Payment Pending
→ Active
→ Renewal Due
→ Renewed

Exception paths:
Active → Past Due → Grace Period → Suspended → Reactivated
Active → Cancellation Scheduled → Cancelled → Data Export Window → Archived → Deletion Eligible
Trial Active → Trial Expired → Read-Only / Suspended → Converted or Archived
```

## TENANT PROVISIONING

Provisioning creates:

- tenant record
- subscription or trial record
- owner identity and membership
- default branch
- default roles and permissions
- default workflow statuses
- default service configuration
- tenant settings
- numbering configuration
- audit and usage records

Provisioning is idempotent and reports partial failure explicitly. A tenant is not marked active until all mandatory resources are ready.

## PLAN MODEL

A plan defines:

- plan_id and version
- name and market availability
- billing interval
- base price and currency
- included users or seats
- included branches
- included storage
- included notifications or message allowance
- included integration allowance
- included support level
- feature entitlements
- overage behavior
- trial eligibility
- upgrade and downgrade rules
- effective dates

Plan definitions are versioned. Existing subscriptions retain their agreed version until migrated or renewed according to policy.

## FEATURE ENTITLEMENTS

Entitlements can control:

- Owner Application
- Front Desk Application
- Technician Application
- Customer Portal
- multi-branch operation
- advanced roles and custom permissions
- inventory and purchasing
- finance and accounting exports
- advanced analytics and forecasting
- API access
- webhooks
- integrations
- SMS or push channels
- business accounts
- contractors
- custom branding
- SSO and mandatory MFA
- audit export and extended retention
- premium support

Entitlement checks occur server-side and do not replace role and permission checks.

## USAGE METERS

Supported usage dimensions:

- active workforce users
- customer portal accounts when plan-controlled
- branches
- warehouses
- active jobs
- stored files and media
- outbound messages
- API calls
- webhook deliveries
- report and export jobs
- integration connections
- backup retention
- AI or advanced automation usage when introduced

Every meter defines source, unit, reset period, calculation delay, included limit, warning threshold, overage rule, and dispute process.

## USAGE ENFORCEMENT

Enforcement modes:

- informational only
- warning
- soft limit with grace
- block new creation while allowing read access
- feature degradation
- hard suspension for security or prolonged non-payment

Existing operational records remain readable according to policy when new creation is blocked. Critical customer, warranty, payment, export, and closure actions require defined safe behavior.

## BILLING ACCOUNT

A tenant billing account includes:

- legal or business name
- billing contacts
- billing address
- tax identifiers
- currency
- invoice delivery preference
- payment method reference
- purchase-order requirement
- billing history
- credit or adjustment history

Sensitive payment details are stored by an approved payment provider; the SaaS stores only permitted references and status.

## SUBSCRIPTION STATES

- Trial
- Pending Activation
- Active
- Renewal Due
- Past Due
- Grace Period
- Suspended
- Cancellation Scheduled
- Cancelled
- Archived
- Closed

Every transition defines actor, trigger, notification, access effect, effective time, recovery path, and audit event.

## UPGRADE CONTRACT

- Validate target plan and market availability.
- Preview price, proration, entitlements, limits, and effective date.
- Require billing authorization.
- Apply entitlements idempotently.
- Preserve data and configuration.
- Record previous and new plan versions.
- Notify tenant owner and billing contacts.

## DOWNGRADE CONTRACT

Before downgrade, evaluate:

- active users above target limit
- branches above target limit
- storage above target limit
- active integrations or features not included
- retention differences
- custom roles or functions that require a higher plan

Downgrade produces a remediation plan and does not silently delete or corrupt data. Unsupported features may enter read-only, disabled, or scheduled-removal states according to policy.

## RENEWAL CONTRACT

- Notify before renewal.
- Present plan version, price, billing period, taxes, and payment method.
- Attempt payment using approved provider rules.
- Record invoice and payment result.
- Apply grace period only according to plan and tenant policy.
- Never create duplicate renewal charges from retries.

## PAST-DUE AND GRACE PERIOD

During past-due or grace states:

- owners receive clear notifications.
- new high-cost actions may be limited.
- existing repair operations follow defined continuity rules.
- customer access and urgent release/payment workflows are not silently broken.
- platform support and audit remain available according to policy.

## SUSPENSION CONTRACT

Suspension can result from:

- prolonged non-payment
- security risk
- abuse or prohibited use
- legal requirement
- tenant request

Suspension defines:

- which users can log in
- read-only access
- payment and reactivation access
- customer portal behavior
- API and webhook behavior
- notification behavior
- data retention
- export eligibility
- support path

Security suspension may override ordinary grace rules.

## REACTIVATION

Reactivation validates:

- authorization
- payment or issue resolution
- tenant status
- plan availability
- usage and data compatibility
- security review when required

Reactivation restores entitlements safely and creates a complete audit record.

## CANCELLATION

Cancellation supports:

- immediate or end-of-term effect
- reason
- retention and export notice
- invoice and refund policy
- integration shutdown
- customer portal notice policy
- scheduled closure date
- owner confirmation
- revocation before effective date when allowed

## TENANT DATA EXPORT

A tenant owner can request an authorized export containing permitted:

- organization configuration
- users and roles
- customers and devices
- service and job records
- technical reports
- inventory records
- financial records
- releases and warranties
- communications
- documents and media references
- audit records according to plan and law

Exports are encrypted or access-controlled, time-limited, audited, and deleted after the delivery window.

## TENANT CLOSURE

Closure sequence:

```text
Closure Requested
→ Ownership and Authority Verified
→ Outstanding Financial and Legal Checks
→ Export Offered or Completed
→ Integrations Disabled
→ Users and Sessions Revoked
→ Tenant Set Read-Only
→ Retention Window
→ Archive
→ Deletion Eligibility Review
→ Approved Deletion / Extended Hold
```

Closure never deletes records still required for payment, warranty, dispute, tax, security, legal hold, or retention.

## DATA DELETION CONTRACT

- Deletion eligibility is calculated by entity retention rules.
- Legal hold blocks deletion.
- Backups follow their own expiry and secure purge cycle.
- Deletion is verified and audited.
- Platform aggregate analytics retain only allowed de-identified data.
- Tenant identifiers are not reassigned.

## PLAN AND ENTITLEMENT ADMINISTRATION

Only authorized platform roles can:

- create or retire plans
- change global feature definitions
- change plan limits
- grant exceptional entitlements
- apply credits or commercial overrides

Exceptional grants include reason, approver, effective dates, and tenant-visible or internal audit according to policy.

## BILLING EVENTS

- TrialStarted
- SubscriptionActivated
- PlanUpgradeScheduled
- PlanUpgraded
- PlanDowngradeScheduled
- PlanDowngraded
- RenewalDue
- RenewalPaid
- PaymentFailed
- GracePeriodStarted
- TenantSuspended
- TenantReactivated
- CancellationScheduled
- SubscriptionCancelled
- DataExportRequested
- TenantArchived
- TenantDeletionApproved

## STATUS

- Tenant provisioning and lifecycle: COMPLETE.
- Plans, entitlements, usage, billing, upgrade, downgrade, renewal, past-due, suspension, reactivation, cancellation, export, closure, and deletion: COMPLETE.

**SUBSCRIPTION, ENTITLEMENT, USAGE, AND TENANT LIFECYCLE CONTRACT COMPLETE (100%)**
