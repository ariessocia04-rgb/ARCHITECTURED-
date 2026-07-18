# PLANS AND BILLING — WIREFRAME ARCHITECTURE

## Purpose

This is the canonical low-fidelity screen architecture for Free, Pro, Premium, subscription, billing, usage, plan administration, and reconciliation. It extends the shared shell and design system without creating a competing global wireframe source.

## Global rules

- One primary task per page.
- Tenant and branch/company context remain visible.
- Show plan state, access mode, and important deadline.
- Only authorized Owner/Billing or Platform roles see commercial controls.
- Non-owner users receive a plain-language explanation and contact-owner action.
- Review page is required before paid plan change, downgrade, cancellation, suspension, override, or plan publication.
- Final financial/configuration completion uses a full confirmation page, not toast alone.
- All screens define loading, empty, error, permission, processing, retry, and success states.
- WCAG 2.2 AA applies across desktop, tablet, mobile, keyboard, zoom, reflow, and assistive technology.

# 1. OWNER BILLING SHELL

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Brand | Tenant / Company / Branch | Search | Help | Notifications | User   │
├──────────────────┬───────────────────────────────────────────────────────────┤
│ Owner Navigation │ Breadcrumb / Page Title / Subscription Status / Action   │
│                  ├───────────────────────────────────────────────────────────┤
│ Dashboard        │ Billing / usage warning or access restriction            │
│ Operations       ├───────────────────────────────────────────────────────────┤
│ Staff            │ Main billing task                                        │
│ Inventory        │                                                           │
│ Reports          │                                                           │
│ Subscription     │                                                           │
│ Usage            │                                                           │
│ Billing          │                                                           │
│ Settings         │                                                           │
├──────────────────┴───────────────────────────────────────────────────────────┤
│ Save/processing state | Support reference | Privacy/Security notice         │
└──────────────────────────────────────────────────────────────────────────────┘
```

Navigation items appear only when role and entitlement allow. Subscription entry remains available to authorized owners even when other modules are restricted.

# 2. PUBLIC PRICING AND PLAN COMPARISON — `PB-WF-01`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ ARCHITECTURED | Product | Pricing | Sign in                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ Choose the plan for your repair business                                    │
│ Monthly ○   Annual ○       Market/Currency [Philippines / PHP ▼]            │
├───────────────────────┬───────────────────────┬──────────────────────────────┤
│ FREE                  │ PRO                   │ PREMIUM                      │
│ PHP 0                 │ PHP 1,499 / month     │ PHP 4,999 / month            │
│ 1 branch              │ 3 branches            │ 20 branches / 3 companies    │
│ 2 staff               │ 15 staff              │ 100 staff                     │
│ 100 jobs/month        │ 2,000 jobs/month      │ 10,000 jobs/month             │
│ Core repair workflow  │ Full operations       │ BI, AI, API, SSO              │
│ [Start Free]          │ [Start Pro Trial]     │ [Start Premium Trial]         │
├───────────────────────┴───────────────────────┴──────────────────────────────┤
│ Compare all features | Taxes and billing explanation | Contact support       │
└──────────────────────────────────────────────────────────────────────────────┘
```

Logic:

- Currency/price book resolved server-side from market; user can choose supported market when permitted.
- Annual toggle changes to exact annual price-book entry.
- Feature rows link to accessible detailed comparison.
- Do not display false unlimited labels; state fair-use/configured limits.
- CTA preserves selected plan, interval, market, and referral without trusting client price.

# 3. TENANT SIGN-UP AND TRIAL SETUP — `PB-WF-02`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Start your repair-business account — Step 1 of 5                            │
│ Account → Business → Location → Plan → Review                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Plain-language instruction                                                   │
│                                                                              │
│ Active-step form                                                             │
│ [fields, hints, validation, duplicate/eligibility notice]                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ Saved securely | [Back] [Save and exit] [Continue]                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

Steps:

1. Account owner identity and authentication.
2. Business/tenant identity and trial eligibility.
3. Default company, branch, time zone, currency, tax display, contact.
4. Free/Pro/Premium trial or direct paid selection.
5. Check answers, terms/privacy/communications, and create tenant.

Error behavior retains values and links error summary to fields. Duplicate business/trial risk uses safe explanation and support route.

# 4. SIGN-UP REVIEW / CHECK ANSWERS — `PB-WF-03`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Check your account before creating it                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Owner details                                      [Change]                  │
│ Business and branch                                [Change]                  │
│ Selected plan / trial / price / billing interval  [Change]                  │
│ Tax and currency                                   [Change]                  │
│ Terms, privacy, notifications                      [Change]                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ What happens next: provisioning, sign-in, trial expiry, payment if required │
│ [Create account]                                                             │
└──────────────────────────────────────────────────────────────────────────────┘
```

Final submit uses idempotency. A processing page prevents duplicate clicks and survives refresh.

# 5. TENANT PROVISIONING / PROCESSING — `PB-WF-04`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ We are setting up your account                                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ ✓ Tenant record                                                              │
│ ✓ Owner membership                                                           │
│ ● Default company and branch                                                 │
│ ○ Roles and workflow                                                         │
│ ○ Plan entitlements and usage                                                │
│ ○ Final verification                                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ You can safely leave this page. Reference: SETUP-XXXX                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

If partial failure occurs, show completed and failed steps, support reference, retry state, and no false activation.

# 6. SUBSCRIPTION OVERVIEW — `PB-WF-05`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Subscription                         ACTIVE                                  │
│ Pro • Monthly • Renews 19 Aug 2026        [Change plan]                     │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Current price        │ Payment status       │ Billing contact                │
│ PHP 1,499 + tax      │ Paid / Past due      │ owner@example.com              │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ Usage needing attention                                                      │
│ Jobs 1,820 / 2,000 | Storage 8.4 / 10 GB | API 8,900 / 10,000              │
│ [View all usage]                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Included features / active add-ons / overrides                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Upcoming invoice / recent invoice / pending plan change                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Manage payment method] [Invoices] [Cancel subscription]                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

During Free, show `PHP 0`, monthly reset, and upgrade. During past due/suspension, warning and primary recovery action move above summary.

# 7. AUTHORIZED PLAN COMPARISON — `PB-WF-06`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Compare plans                                                                │
│ Current: Pro      Monthly ○ Annual ○                                         │
├───────────────────────────────┬───────────────────────────────┬──────────────┤
│ Feature / Limit               │ Pro                           │ Premium      │
├───────────────────────────────┼───────────────────────────────┼──────────────┤
│ Companies                     │ 1                             │ 3            │
│ Branches                      │ 3                             │ 20           │
│ Staff                         │ 15                            │ 100          │
│ Jobs/month                    │ 2,000                         │ 10,000       │
│ BI / SSO / Full API           │ Not included                  │ Included     │
│ Current usage compatibility   │ Fits                           │ Fits         │
├───────────────────────────────┴───────────────────────────────┴──────────────┤
│ [Choose Premium]                                                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

Current plan, differences, lost/gained features, usage fit, and estimated amount must be explicit. Non-owner users cannot choose plan.

# 8. UPGRADE PREVIEW AND REVIEW — `PB-WF-07`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Review your upgrade: Pro → Premium                                           │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Effective                    │ Immediately after successful payment           │
│ Charge today                 │ PHP X,XXX + tax                                │
│ Credit                       │ -PHP XXX unused Pro time                       │
│ Next renewal                 │ 19 Aug 2026 • PHP 4,999 + tax                 │
│ Payment method               │ Card ending 4242 [Change]                     │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ New limits and features                                                     │
│ + Multi-company + BI + AI + SSO + Full API                                 │
│ Branch 3 → 20 | Staff 15 → 100 | Storage 10 → 100 GB                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Back]                                              [Pay and upgrade]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

Expired/changed preview returns to plan comparison with preserved selection and clear explanation.

# 9. PLAN CHANGE PROCESSING / CONFIRMATION — `PB-WF-08`

Processing:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Your payment is being confirmed                                              │
│ Do not submit again. Reference: CHANGE-XXXX                                  │
│ [Check status]                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

Confirmation:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Your Premium plan is active                                                  │
│ Change reference / invoice / receipt                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ Effective now • New renewal date/amount • New limits                        │
│ Setup tasks: Configure SSO | Review API | Invite staff                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Go to subscription]                                                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

# 10. DOWNGRADE PREFLIGHT — `PB-WF-09`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Before you downgrade to Free                                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ Your account does not yet fit Free                                           │
│                                                                              │
│ 3 branches → choose 1                                      [Resolve]         │
│ 10 staff → choose 2                                         [Resolve]         │
│ 8.4 GB storage → Free includes 500 MB                       [Review files]    │
│ 2 custom roles                                               [Map roles]      │
│ 3 integrations / 2 webhooks / API clients                    [Disable]        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Effective at period end after all required tasks pass                        │
│ [Save and exit] [Continue remediation]                                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

No destructive bulk action appears by default. Each item explains exact consequence.

# 11. DOWNGRADE RESOURCE SELECTION — `PB-WF-10`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Choose the branch that stays active                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ ○ Boroko     Active jobs 18 | Staff 6 | Stock ...                           │
│ ○ Lae        Active jobs 8  | Staff 2 | Stock ...                           │
│ ○ Mt Hagen   Active jobs 4  | Staff 2 | Stock ...                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ Other branches become read-only. No history is deleted.                     │
│ [Back] [Save selection]                                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

Equivalent screens exist for companies, staff seats, warehouses, roles, SSO fallback, API/webhook/integration shutdown, storage, and retention.

# 12. DOWNGRADE REVIEW / SCHEDULE CONFIRMATION — `PB-WF-11`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Review downgrade to Free                                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ Effective: 19 Aug 2026                                                       │
│ Price after change: PHP 0                                                    │
│ Selected active branch/users                                                 │
│ Features disabled and read-only resources                                    │
│ Storage action and export links                                               │
│ Cancellation/revoke-before-effective rule                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ □ I understand no records are automatically deleted                          │
│ [Back] [Schedule downgrade]                                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

# 13. USAGE DASHBOARD — `PB-WF-12`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Usage                                 Period: 19 Jul–19 Aug 2026             │
│ Last updated 2 minutes ago                    [Download statement]           │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Jobs                 │ Storage              │ API calls                      │
│ 1,820 / 2,000 • 91%  │ 8.4 / 10 GB • 84%   │ 8,900 / 10,000 • 89%          │
│ Reset 19 Aug         │ No monthly reset     │ Reset 19 Aug                   │
│ [View details]       │ [Review files]       │ [View details]                 │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ All meters table: Used | Included | Add-on | Override | Status | Updated    │
├──────────────────────────────────────────────────────────────────────────────┤
│ What happens at the limit | Upgrade/add-on for authorized owner             │
└──────────────────────────────────────────────────────────────────────────────┘
```

Meters use text and icons, not color only. Delayed data is labeled.

# 14. USAGE DETAIL / DISPUTE — `PB-WF-13`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Job orders created                                                           │
│ 1,820 of 2,000 • Updated 2 minutes ago                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Daily usage trend / accessible data table                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ Date | Source | Quantity | Branch | Reference | Correction                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Report a usage problem]                                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

Dispute form asks period, issue, affected references, explanation, and evidence; review page required before submit.

# 15. PAYMENT METHOD AND BILLING ACCOUNT — `PB-WF-14`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Billing account                                                              │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Legal name / billing contact │ Payment method                                │
│ Address / tax ID / currency  │ Provider-hosted masked method                │
│ Invoice delivery / PO rule   │ [Manage securely]                            │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ Changes to legal/tax fields may require review                              │
│ [Save billing details]                                                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

No full card/bank data is entered into ordinary app fields when provider-hosted collection is used.

# 16. SUBSCRIPTION INVOICES — `PB-WF-15`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Subscription invoices                                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Search | Status | Date range | Currency                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ Invoice | Period | Plan | Amount | Status | Paid/credit/refund | Action     │
├──────────────────────────────────────────────────────────────────────────────┤
│ [View] [Download permitted document]                                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

Detail shows immutable invoice lines, tax, discounts, credits, payment/refund references, and reconciliation status.

# 17. PAST-DUE / GRACE RECOVERY — `PB-WF-16`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Payment needs attention                         Grace ends 26 Jul 2026       │
├──────────────────────────────────────────────────────────────────────────────┤
│ What happened / invoice / amount / retry status                              │
│ What still works / what may be restricted                                    │
│                                                                              │
│ [Pay now / Update payment method]                                            │
│ [View invoice] [Contact support]                                             │
└──────────────────────────────────────────────────────────────────────────────┘
```

No countdown-only pressure. Date/time is exact and accessible. Processing/unknown provider state says it is being confirmed.

# 18. SUSPENDED ACCOUNT OWNER VIEW — `PB-WF-17`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Account access is restricted                                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ Reason category and safe explanation                                         │
│ Available: Billing | Reactivation | Export | Support                         │
│ Active repair continuity status                                              │
│                                                                              │
│ [Resolve and reactivate]                                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

Security/legal suspension can hide sensitive reason details and show incident/support reference only.

# 19. CANCEL SUBSCRIPTION REVIEW — `PB-WF-18`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Cancel your subscription                                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ Effective date / final charge or credit policy                               │
│ Features and integrations that stop                                          │
│ Staff/customer access impact                                                  │
│ Export and archive deadlines                                                  │
│ Active repair and warranty continuity                                        │
│ Reason [select]                                                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Keep subscription] [Continue to final review]                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

Final check-answers page and step-up confirmation are separate. Confirmation shows cancellation reference and revoke deadline.

# 20. REACTIVATION REVIEW — `PB-WF-19`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Reactivate your account                                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ Plan available / price / payment due                                         │
│ Current data compatibility                                                   │
│ Credentials/integrations requiring revalidation                              │
│ Access restored after confirmation                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Back] [Pay and reactivate / Confirm reactivation]                           │
└──────────────────────────────────────────────────────────────────────────────┘
```

# 21. PLATFORM PLAN CATALOG — `PB-WF-20`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Platform Administration > Plans                                              │
│ [Create plan version]                                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Plan | Version | Markets | Status | Active tenants | Effective | Action     │
│ Free | 2026-01 | PH/INTL | Available | ... | ... | Open                    │
│ Pro  | 2026-01 | PH/INTL | Draft/Available | ... | ... | Open              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Filters | Migration risk | Reconciliation warnings                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

# 22. PLAN VERSION EDITOR / PUBLISH TASK LIST — `PB-WF-21`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Pro 2026-02 — Draft                                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ Plan details                         Completed                               │
│ Market price books                  In progress                              │
│ Feature entitlements                Completed                               │
│ Usage limits/overage                Completed                               │
│ Trial/support/retention             Waiting for review                      │
│ Security/privacy/operations         Waiting for approval                    │
│ Migration and tenant impact         Not started                             │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Preview tenant impact] [Submit for review]                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

Each task opens a dedicated form. Publishing requires check-answers and approvals.

# 23. ENTITLEMENT AND LIMIT MATRIX EDITOR — `PB-WF-22`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Plan version entitlement matrix                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Search feature/meter | Show differences | Validate                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ Key | Type | Free | Pro | Premium | Dependency | Validation                │
├──────────────────────────────────────────────────────────────────────────────┤
│ feature.public_api | Boolean/level | Off | Limited | Full | scopes | Valid  │
│ limit.api.calls    | Number        | 0   | 10k     | 250k | meter  | Valid  │
└──────────────────────────────────────────────────────────────────────────────┘
```

Editor never uses a blank key typed without feature registry validation. Changes create draft version only.

# 24. TENANT SUBSCRIPTION ADMIN / OVERRIDE — `PB-WF-23`

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Tenant subscription detail                                                   │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Plan/state/access    │ Usage/limits         │ Provider/reconciliation        │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ Entitlement snapshot | Add-ons | Active overrides | Pending changes        │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Grant temporary override] [Suspend] [Reconcile] [View audit]                │
└──────────────────────────────────────────────────────────────────────────────┘
```

Protected actions require reason, expiry, approval, tenant-visible setting, and review page.

# 25. RECONCILIATION QUEUE / FINDING — `PB-WF-24`

Queue:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Billing reconciliation                                                       │
│ Severity | Type | Tenant | Internal | Provider | Age | Owner | Status       │
└──────────────────────────────────────────────────────────────────────────────┘
```

Finding detail:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Finding REC-XXXX • High                                                      │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Internal subscription        │ Provider subscription                         │
│ status/version/amount        │ status/version/amount                         │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ Timeline / events / attempts / safe payload metadata                         │
│ Recommended deterministic actions                                            │
│ [Retry] [Rebuild] [Request review] [Resolve with reason]                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

No raw secrets or full provider payload for ordinary support roles.

# Shared states

## Loading

- Skeleton retains page structure and accessible status message.
- Do not show zero usage as a loading placeholder.

## Empty

- Explain why no invoice, usage, change, or finding exists.
- Provide one safe next action.

## Permission

- Explain unavailable action without revealing protected billing data.
- Non-owner: contact owner.
- Owner lacking step-up: verify identity.

## Processing

- Show reference, known saved state, expected next update method, refresh/retry guidance.
- Prevent duplicate submission.

## Error

- Error summary at top plus field messages.
- Preserve inputs and plan selection.
- Provider/internal technical details remain in protected diagnostics only.

## Limit reached

- Show meter, used, limit, reset, actions still available, upgrade/add-on/cleanup/remediation.
- Do not discard the user's unsaved operational work.

# Responsive architecture

## Desktop

- Two-column summary/task layout where useful.
- Comparison tables may use sticky feature column.

## Tablet

- Navigation collapses; cards wrap; tables simplify to priority columns with details drawer.

## Mobile

- One column.
- Plan cards and differences become stacked sections.
- Review pages use summary rows with visible Change links.
- Data tables have accessible card/list alternative.
- Primary action is not fixed over content and remains reachable with zoom/reflow.

# Accessibility acceptance

- Full keyboard operation and logical focus.
- Visible focus not obscured.
- Target size meets WCAG 2.2 AA minimum; important touch actions aim for 44×44 CSS pixels.
- No drag-only resource selection.
- Labels, descriptions, error associations, status messages, confirmation, and processing updates are programmatically exposed.
- Color is never the only indicator.
- Charts have tables/text alternatives.
- Authentication and payment journeys do not require inaccessible cognitive tests.
- Responsive variations conform as complete pages.

## Status

`PLANS_BILLING_LOW_FIDELITY_WIREFRAME_ARCHITECTURE_COMPLETE`
