# WIREFRAME ARCHITECTURE — TECHNICIAN REPAIR SAAS

## PURPOSE

This is the single canonical low-fidelity wireframe architecture for the ARCHITECTURED Technician Repair SaaS.

It defines page structure and information placement only. It does not replace application workflows, data contracts, permissions, or business rules.

## GOVERNANCE

- Do not create a competing wireframe document for the same application or page.
- Preserve the canonical workflows and status rules defined in `1plan.md` and `SaaS Platform/`.
- A wireframe may simplify presentation but must not remove required steps, approvals, evidence, or audit behavior.
- Shared components are referenced rather than copied into each page.
- Mobile, tablet, and desktop layouts must preserve the same legal and operational flow.
- Current scope is documentation only; no code.

## 1. GLOBAL APPLICATION SHELL

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Brand | Tenant / Branch | Global Search | Help | Notifications | User Menu │
├───────────────┬──────────────────────────────────────────────────────────────┤
│ Primary Nav   │ Breadcrumb / Page Title / Status / Primary Action          │
│               ├──────────────────────────────────────────────────────────────┤
│ Dashboard     │ Context Summary / Alerts / Required Next Action             │
│ Work Queue    ├──────────────────────────────────────────────────────────────┤
│ Job Orders    │ Main Content Area                                            │
│ Customers     │                                                              │
│ Inventory     │                                                              │
│ Finance       │                                                              │
│ Reports       │                                                              │
│ Settings      │                                                              │
├───────────────┴──────────────────────────────────────────────────────────────┤
│ Save State | Sync State | Support | Version | Privacy / Security Notice     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Shell Rules

- Show only modules permitted for the active role, tenant, branch, and subscription.
- Keep one clear primary action per page.
- Always display current tenant and branch context.
- Protected mode, offline mode, support access, or read-only state must be visible.
- Destructive, financial, release, permission, and integration actions require confirmation and reason where configured.
- Do not hide required errors behind hover-only controls.

## 2. SHARED PAGE FRAME

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Breadcrumbs                                                                │
│ Page Title                         Status Badge          Primary Action      │
│ Plain-language purpose / next step                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ Important alert or blocked requirement                                     │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Summary / Key Information    │ Main Task Area                               │
│                              │                                               │
│ Customer / Device / Job      │ Forms, table, cards, timeline, or checklist  │
│ Assignment / SLA / Balance   │                                               │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ Activity Timeline | Documents | Notes | Audit-visible History               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 3. SHARED LIST AND QUEUE FRAME

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Title | Count | Last Updated | Refresh | Create / Add                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Search | Saved View | Status | Priority | Branch | Assignee | More Filters  │
├──────────────────────────────────────────────────────────────────────────────┤
│ Needs Attention Summary                                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ □ Number | Customer | Device | Status | Priority | Assignee | SLA | Action │
│ □ ...                                                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Pagination / Load More | Visible Count | Export when permitted              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### List Rules

- Default view shows the user's most relevant work, not every record.
- Saved views must be role-scoped.
- Illegal status jumps are not presented as actions.
- Bulk actions appear only when every selected record is eligible.
- Search results apply the same permissions as direct access.

# TECHNICIAN APPLICATION WIREFRAMES

## 4. TECHNICIAN DASHBOARD

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ My Work Today | Shift Status | Start / Resume Shift                         │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Assigned Jobs        │ SLA / Priority       │ Waiting on Customer / Parts    │
│ count + open list    │ warnings             │ blocked work                    │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ Continue Current Repair                                                     │
│ Job | Device | Current Step | Elapsed Time | Continue                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ My Queue                                                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ Required Actions | Recent Updates | Personal Performance Summary            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 5. REPAIR QUEUE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Repair Queue | My Queue / Available / Priority / Waiting / All              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Search | Status | Priority | Warranty | Back Job | SLA | Branch | Reset     │
├──────────────────────────────────────────────────────────────────────────────┤
│ Queue Card                                                                  │
│ Job # | Device | Customer | Issue | Priority | SLA | Assignment             │
│ [Accept] [Open] [Request Reassignment] [More]                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Queue Timeline / Capacity / Bottleneck Summary                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 6. JOB ORDER WORKSPACE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Job # | Device | Current Status | SLA | Assigned Technician | More          │
├──────────────────────────────────────────────────────────────────────────────┤
│ Next Required Step: plain-language instruction                              │
├──────────────────────┬───────────────────────────────────────────────────────┤
│ Customer and Device  │ Stage Tabs                                            │
│ Intake Snapshot      │ Overview | Diagnosis | Quote | Repair | Parts | Test │
│ Accessories          │ Release | Warranty | History                          │
│ Condition Evidence   │                                                       │
│ Protected Read-only  │ Active stage content                                  │
├──────────────────────┴───────────────────────────────────────────────────────┤
│ Notes | Photos / Videos | Documents | Full Timeline                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 7. DIAGNOSIS WORKSPACE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Diagnosis | Not Started / In Progress / Completed                           │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Reported Issue and Intake    │ Guided Diagnostic Checklist                   │
│ Existing Evidence            │ Symptom → Test → Result → Finding             │
│ Device Safety Warning        │                                               │
├──────────────────────────────┼───────────────────────────────────────────────┤
│ Findings Summary             │ Recommended Work / Parts / Risk / ETA         │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ [Save Draft] [Request Help] [Complete Diagnosis]                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 8. QUOTATION REVIEW

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Quotation Version | Customer Approval Status | Expiry                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Diagnosis Summary                                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ Item / Part / Labor | Quantity | Price | Tax | Discount | Total             │
├──────────────────────────────────────────────────────────────────────────────┤
│ Warranty / Deposit / Balance / Terms                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ Technician View: read or propose technical lines only as permitted           │
│ Finance / Front Desk controls protected                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 9. REPAIR EXECUTION

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Repair In Progress | Timer | Pause Reason | Safety Status                   │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Approved Work                │ Repair Checklist                              │
│ Approved Parts               │ Step | Status | Evidence | Note               │
│ Known Risks                  │                                               │
├──────────────────────────────┼───────────────────────────────────────────────┤
│ Parts Used / Removed         │ Before / During / After Evidence              │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ [Save Progress] [Pause] [Request Part] [Send to Testing]                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 10. PARTS WORKSPACE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Required Parts | Availability | Reservation / Issue Status                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ Part | Requested | Reserved | Issued | Used | Returned | Removed / Recycle │
├──────────────────────────────────────────────────────────────────────────────┤
│ Approved Substitution / Shortage / Purchase Status                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Request] [Confirm Usage] [Return Unused]                                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 11. TESTING AND QUALITY HANDOFF

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Testing Session | Required Plan | Completion                                │
├──────────────────────────────────────────────────────────────────────────────┤
│ Test Item | Expected Result | Actual Result | Pass / Fail | Evidence        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Failed Items and Rework Required                                             │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Save] [Return to Repair] [Submit for Quality Review]                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

# FRONT DESK APPLICATION WIREFRAMES

## 12. FRONT DESK DASHBOARD

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Today at Front Desk | New Intake | Customer Search                          │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Waiting Customers    │ Ready for Release    │ Payments / Approvals Needed    │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ Appointment / Walk-in Queue                                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ Follow-ups | Unclaimed Devices | Communication Failures                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 13. GUIDED CUSTOMER AND DEVICE INTAKE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ New Intake — Step 1 of 6                                                    │
│ Customer → Device → Issue → Condition → Service → Review                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ Plain-language instruction and required fields only                         │
│                                                                              │
│ Form content for active step                                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ Saved automatically | [Back] [Save and Exit] [Continue]                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Intake Step Wireframes

1. Customer: search before create; show possible duplicates.
2. Device: brand, model, identifiers, owner relationship.
3. Issue: customer words separated from staff notes.
4. Condition: accessories, physical checklist, photos, consent.
5. Service: priority, appointment, warranty claim, inspection fee.
6. Review: summary, corrections, signatures, job-order creation.

## 14. QUOTATION AND CUSTOMER COMMUNICATION

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Quote # | Version | Sent / Viewed / Approved / Rejected / Expired           │
├──────────────────────────────────────────────────────────────────────────────┤
│ Customer-safe diagnosis and recommended work                                │
├──────────────────────────────────────────────────────────────────────────────┤
│ Cost Summary | Deposit | Balance | Warranty | Terms                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Send Link] [Print] [Record Authorized Decision] [Create Follow-up]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 15. PAYMENT AND RELEASE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Release Readiness                                                            │
│ Quality Approved ✓ | Documents ✓ | Payment / Terms ✓ | Identity Pending     │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ Payment Summary              │ Pickup / Delivery Verification                │
│ Invoice / Balance / Method   │ Customer / Representative / ID / Signature   │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ Accessories and Device Handover Checklist                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Complete Payment] [Print Documents] [Release Device]                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

# OWNER APPLICATION WIREFRAMES

## 16. OWNER EXECUTIVE DASHBOARD

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Organization Overview | Date | Branch | Compare | Export                    │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Jobs / Backlog / SLA │ Revenue / Balance    │ Quality / Warranty / Back Job │
├──────────────────────┴──────────────────────┴────────────────────────────────┤
│ Needs Owner Attention: approvals, incidents, financial and stock exceptions │
├──────────────────────────────────────────────────────────────────────────────┤
│ Branch Comparison | Workforce | Inventory Risk | Customer Trends            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 17. OWNER CONFIGURATION WORKSPACE

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Settings Category | Current Version | Unsaved Changes                       │
├──────────────────┬───────────────────────────────────────────────────────────┤
│ Organization     │ Configuration Form / Rules / Preview                     │
│ Branches         │                                                           │
│ Users and Roles  │                                                           │
│ Workflow         │                                                           │
│ Pricing / Tax    │                                                           │
│ Notifications    │                                                           │
│ Integrations     │                                                           │
├──────────────────┴───────────────────────────────────────────────────────────┤
│ Change Summary | Impact | Approval | [Discard] [Save Draft] [Publish]       │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 18. OWNER APPROVAL CENTER

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Approval Center | Pending | Escalated | Completed                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ Request | Type | Amount / Impact | Requester | Reason | Age | Open          │
├──────────────────────────────────────────────────────────────────────────────┤
│ Selected Request: evidence, policy, risk, related record, audit history      │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Approve] [Reject] [Request Information]                                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

# CUSTOMER PORTAL WIREFRAMES

## 19. CUSTOMER HOME

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Business Brand | Track Repair | Help | Sign In                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Your Repair Needs Attention                                                  │
│ Approve Quote / Complete Payment / Choose Pickup                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ Active Repairs                                                              │
│ Device | Friendly Status | Latest Update | Expected Next Step | Open        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Service History | Warranty | Documents | Messages                           │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 20. CUSTOMER REPAIR TRACKING

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Device | Repair Reference | Support                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ Received ✓ → Diagnosis ✓ → Approval Needed → Repair → Testing → Ready       │
├──────────────────────────────────────────────────────────────────────────────┤
│ Current Update in plain language                                             │
│ What happens next / What the customer must do                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Approved customer-visible timeline and documents                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 21. CUSTOMER QUOTATION APPROVAL

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Review Repair Quote                                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ What we found | What we recommend | Expected result | Warranty              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Parts | Labor | Other | Tax | Deposit | Total                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Terms and important conditions                                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Ask a Question] [Reject] [Approve and Continue]                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 22. CUSTOMER PAYMENT AND PICKUP

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Amount Due | Secure Payment Status                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ Payment method provided by approved provider                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ Pickup / Delivery choice | Authorized representative                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ Receipt, release instructions, warranty summary                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

# PLATFORM ADMINISTRATION WIREFRAMES

## 23. PLATFORM TENANT MANAGEMENT

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Tenants | Plans | Usage | Support | Incidents                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Search | Status | Plan | Region | Risk | Renewal | Open                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ Tenant-safe platform metadata only                                           │
│ Support access requires request, approval, scope, time limit, and audit      │
└──────────────────────────────────────────────────────────────────────────────┘
```

# RESPONSIVE WIREFRAME RULES

## 24. DESKTOP

- Persistent navigation is permitted.
- Two-column detail layouts are preferred for record context plus active work.
- Tables are allowed when they improve comparison.
- Dense information is grouped into clear sections, not shown as one continuous form.

## 25. TABLET

- Collapsible navigation.
- Context summary becomes a drawer or top card.
- Forms remain single-task focused.
- Primary actions remain visible without covering required content.

## 26. MOBILE

```text
┌──────────────────────────────┐
│ Menu | Page | Alerts | User  │
├──────────────────────────────┤
│ Status / Next Required Step  │
├──────────────────────────────┤
│ One task card at a time      │
│                              │
│ Form / Checklist / Detail    │
├──────────────────────────────┤
│ Back | Save | Primary Action │
└──────────────────────────────┘
```

- One primary task per screen.
- Replace wide tables with cards or prioritized columns.
- Never require drag-only interaction.
- Camera, QR, barcode, signature, and evidence capture must have manual alternatives.
- Avoid horizontal scrolling for critical workflow content.

# REQUIRED UI STATES

## 27. LOADING

- Skeleton or progress indicator.
- Preserve entered data.
- Explain long-running background work.

## 28. EMPTY

- Explain why no records appear.
- Provide one safe next action.
- Distinguish no data from no permission and filter-hidden data.

## 29. ERROR

- Plain-language problem.
- What was saved and what was not.
- Safe retry, correction, or support path.
- Correlation reference without internal stack trace.

## 30. OFFLINE AND SYNCHRONIZATION

- Visible offline banner.
- Local pending-action count.
- Record-level synchronization state.
- Conflict screen with authoritative values and permitted choices.
- No hidden duplicate submission.

## 31. PERMISSION AND SUBSCRIPTION RESTRICTION

- Explain that access is restricted without revealing protected data.
- Identify the role, approval, plan, or support path needed.
- Never display disabled actions that look successful.

# WIREFRAME ACCEPTANCE CHECKLIST

Every future high-fidelity screen must confirm:

- correct application and role
- correct tenant and branch context
- current lifecycle status
- one clear next action
- required approvals and separation of duties
- customer-visible versus internal data separation
- desktop, tablet, and mobile behavior
- loading, empty, error, offline, conflict, and permission states
- accessibility labels and keyboard sequence
- audit-visible protected actions
- no workflow step removed
- no duplicate canonical design document created

## STATUS

- Global shell: COMPLETE.
- Shared page, list, form, and state patterns: COMPLETE.
- Technician Application wireframes: COMPLETE.
- Front Desk Application wireframes: COMPLETE.
- Owner Application wireframes: COMPLETE.
- Customer Portal wireframes: COMPLETE.
- Platform administration wireframe: COMPLETE.
- Responsive and exception-state wireframes: COMPLETE.

**WIREFRAME ARCHITECTURE COMPLETE (100%)**
