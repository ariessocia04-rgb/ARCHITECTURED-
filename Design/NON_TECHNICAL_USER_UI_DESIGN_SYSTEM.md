# NON-TECHNICAL USER UI DESIGN SYSTEM — TECHNICIAN REPAIR SAAS

## PURPOSE

This is the single canonical user-interface design system for ARCHITECTURED.

The primary design goal is to help non-technical users complete repair-business work correctly without needing to understand software, database, API, workflow-engine, synchronization, or system-administration terminology.

The UI design must preserve every approved workflow, permission, status, approval, audit, financial, inventory, security, and tenant-isolation rule.

## RESEARCH BASELINES

The design direction is informed by:

- WCAG 2.2 predictable navigation, consistent identification, consistent help, redundant-entry reduction, accessible authentication, non-drag alternatives, target sizing, status messages, and error prevention.
- GOV.UK service-design patterns for one focused question at a time, step-by-step journeys, task lists, check answers, confirmation pages, retained form values, clear error summaries, and specific correction guidance.
- Established repair and field-service operating patterns already recorded in `1plan.md`.

These are design references only. ARCHITECTURED retains its own application structure and workflow.

# 1. CORE EXPERIENCE PRINCIPLES

## 1.1 One Clear Job at a Time

- Each page has one primary user goal.
- Each guided step asks for one coherent group of information.
- Secondary actions are visually quieter than the primary action.
- Users are not shown advanced settings unless needed.

## 1.2 Plain Language First

Use words staff and customers already use.

Preferred:

- Repair status
- Customer approval needed
- Waiting for parts
- Ready for pickup
- Save and continue
- Try again
- Ask for help

Avoid as primary labels:

- Aggregate state
- Domain event
- Idempotency
- Entitlement violation
- Serialization error
- Tenant context mismatch
- Mutation failed

Technical details may appear only in protected diagnostics for authorized users.

## 1.3 Show the Next Required Action

Every operational record page displays:

- current status
- what has been completed
- what is blocked
- the next permitted action
- who is responsible
- due date or SLA when relevant

## 1.4 Prevent Errors Before They Happen

- Use safe defaults.
- Disable or hide actions that are genuinely unavailable, with an explanation when the user needs to understand why.
- Validate eligibility, permission, and workflow state before showing irreversible actions.
- Use review screens before legal, financial, release, refund, deletion, permission, or configuration actions.

## 1.5 Preserve User Work

- Auto-save drafts where safe.
- Keep entered values after validation errors.
- Show saved, pending, offline, and synchronization states.
- Warn before leaving only when unsaved work would actually be lost.

## 1.6 Never Ask Twice Without a Reason

- Reuse customer, device, branch, job, address, contact, and payment context already provided.
- Pre-fill or offer previously entered information.
- Request re-entry only for security, expired data, legal confirmation, or a changed authoritative value.

## 1.7 Consistency Over Cleverness

- The same action uses the same name, icon, position, and behavior across applications.
- Help appears in a consistent location.
- Status badges and workflow language remain consistent.
- Do not redesign a completed flow differently in another application.

# 2. INFORMATION HIERARCHY

Every page follows this order:

1. Application and tenant/branch context.
2. Breadcrumb or safe back path.
3. Page title.
4. Current status.
5. Plain-language purpose.
6. Important warning or blocked requirement.
7. Primary task content.
8. Supporting context.
9. Secondary actions.
10. History, documents, and audit-visible details.

## Page Heading Rule

A heading describes the current task, not only the module.

Good:

- Add the customer's device
- Record the reported issue
- Review the quotation
- Confirm the parts used
- Check the device before release

Weak:

- Form
- Details
- Information
- Step 3

# 3. NAVIGATION DESIGN

## 3.1 Repeated-Use Staff Applications

Technician, Front Desk, Owner, and Platform Administration use role-based navigation because trained users perform several recurring tasks.

Navigation rules:

- Show only permitted modules.
- Keep order stable.
- Highlight the current module.
- Preserve filters and list position when returning from a record.
- Show tenant and branch clearly.
- Do not mix platform settings with tenant operations.

## 3.2 Guided Transactional Journeys

Use guided steps for:

- customer and device intake
- quotation approval
- payment
- release
- warranty return
- user invitation and onboarding
- tenant setup
- subscription changes
- integration setup
- protected configuration publishing
- support-access approval
- tenant closure

Each journey shows:

- current step
- completed steps
- remaining steps
- safe back action
- save and exit when appropriate
- final review
- confirmation and what happens next

## 3.3 Task Lists

Use task lists when several required tasks can be completed in a flexible order.

Allowed status labels:

- Not started
- In progress
- Ready to complete
- Completed
- Waiting for approval
- Waiting for customer
- Waiting for parts
- There is a problem
- Not available

Do not use color alone to communicate status.

# 4. VISUAL FOUNDATION

## 4.1 Typography

- Use a highly readable sans-serif interface font selected during implementation planning.
- Body text uses a comfortable size and line height.
- Do not use all-caps for paragraphs, instructions, buttons, or errors.
- Headings use a clear size hierarchy.
- Long technical identifiers use a distinct code style only where necessary.

## 4.2 Spacing

- Use a consistent spacing scale.
- Separate unrelated groups clearly.
- Keep labels close to their fields.
- Avoid dense walls of controls.
- Important actions must not be placed too close to destructive actions.

## 4.3 Color

- Brand color does not override readability.
- Text and interactive contrast must meet the approved accessibility target.
- Status uses text plus shape or icon, not color alone.
- Red is reserved for errors, destructive actions, or critical risk.
- Success styling confirms completion but does not hide the reference number or next step.

## 4.4 Icons

- Icons support labels; they do not replace important text.
- Repeated functions use the same icon.
- Unfamiliar icons include visible labels.
- Tooltips are supplemental and never the only instruction.

# 5. INTERACTION TARGETS

- All controls meet at least the approved WCAG target-size and spacing requirements.
- Important mobile and touch controls should target the stronger 44 by 44 CSS pixel design goal where practical.
- Drag-and-drop always has a button, menu, keyboard, or selection alternative.
- Primary actions are not placed beside destructive actions without spacing and visual separation.
- Full task-list rows may be clickable when the accessible name is clear.

# 6. FORMS

## 6.1 Form Structure

- One visible label per field.
- Optional fields are marked optional when most fields are required.
- Hints explain format or why information is needed.
- Examples appear before an error occurs.
- Related controls are grouped with a clear legend.
- Do not use placeholder text as the only label.

## 6.2 Smart Defaults and Reuse

- Default tenant, branch, currency, tax, time zone, and service options from authorized configuration.
- Pre-fill known customer and device information.
- Offer recent or approved reusable values.
- Show the source of protected pre-filled information when helpful.

## 6.3 Progressive Disclosure

Initially show only information needed for the common path.

Reveal advanced areas when selected:

- business account billing
- warranty exception
- manual priority override
- protected discount
- alternate representative
- delivery
- custom tax treatment
- inventory substitution
- advanced integration mapping

Hidden content must not contain a required error without revealing and focusing it.

## 6.4 Review Before Submit

Required before:

- job-order creation
- quotation sending or approval
- payment submission
- refund or write-off
- device release
- warranty decision
- role elevation
- workflow publication
- integration activation
- subscription cancellation
- tenant closure

Review pages support correction without losing work.

# 7. ERROR DESIGN

## 7.1 Validation Errors

Show:

1. A top-page error summary.
2. A specific message next to each affected field.
3. The user's original input.
4. A direct link or focus path to each error.
5. Clear instruction describing how to fix it.

Good:

- Enter the customer's phone number.
- Select the device brand.
- The completion date must be today or later.
- Upload a JPG, PNG, or WEBP file smaller than the configured limit.

Avoid:

- Invalid input.
- Something went wrong.
- Error 422.
- Required field.

## 7.2 Permission or Eligibility Problems

Do not present these as form errors.

Show a dedicated explanation:

- what action is unavailable
- why it is unavailable in plain language
- required role, approval, plan, state, or owner
- safe next action

Do not reveal protected record existence.

## 7.3 Service or Integration Failures

Show:

- what the user attempted
- whether the action was saved, pending, or not completed
- safe retry behavior
- another permitted method
- support reference

Never show raw stack traces, secrets, provider credentials, or database errors.

# 8. SUCCESS AND CONFIRMATION DESIGN

After a completed transaction show:

- clear completion heading
- record or reference number
- concise summary of what happened
- receipt or document link when authorized
- what happens next
- expected owner and time frame
- one logical next action

Examples:

- Job order created
- Quotation sent
- Customer approval recorded
- Payment confirmed
- Device released
- Warranty request submitted
- User invited
- Configuration published

A temporary toast is not enough for final legal, financial, release, or configuration completion.

# 9. STATUS LANGUAGE SYSTEM

## 9.1 Internal Operational Status

Use canonical lifecycle status for trained staff and records.

## 9.2 Customer-Friendly Status

| Internal Status | Customer-Friendly Label | Customer Explanation |
|---|---|---|
| Received | Device received | We have received your device and recorded its condition. |
| Awaiting Assignment | Waiting for a technician | Your repair is waiting to be assigned. |
| Assigned / Accepted | Technician assigned | A technician has accepted your repair. |
| Inspection / Diagnosis In Progress | Checking your device | We are inspecting the device and identifying the problem. |
| Awaiting Quotation | Preparing your quote | We are preparing the recommended repair and cost. |
| Awaiting Customer Approval | Your approval is needed | Review the quotation to continue. |
| Awaiting Parts | Waiting for parts | We are waiting for the required part or approved alternative. |
| Repair In Progress | Repair in progress | The approved repair is being performed. |
| Testing In Progress | Testing your device | We are checking that the repair works correctly. |
| Quality Review | Final quality check | A final review is being completed before release. |
| Ready For Release | Ready for pickup or delivery | Your device has passed the required checks. |
| Awaiting Payment | Payment is needed | Complete the outstanding payment or contact the shop. |
| Released | Device released | The device has been handed over or dispatched. |
| Completed / Closed | Repair completed | The repair record is complete. |
| On Hold | Repair temporarily on hold | We will explain what is needed before work can continue. |
| Rework Required | Additional work required | Testing found an issue that requires more work. |
| Cancelled | Repair cancelled | The repair has been cancelled. Contact support for details. |

Customer labels never expose internal notes, staff identity details, cost margin, security findings, or unrelated tenant information.

# 10. COMPONENT SYSTEM

## 10.1 Buttons

Primary:

- Continue
- Save and continue
- Approve and continue
- Complete diagnosis
- Submit for testing
- Confirm payment
- Release device

Secondary:

- Back
- Save and exit
- Ask for help
- View details
- Print
- Download

Destructive:

- Cancel repair
- Reject quotation
- Revoke access
- Remove assignment
- Disable integration
- Close tenant

Destructive actions require clear consequence text and configured confirmation/approval.

## 10.2 Status Badge

Badge includes:

- text label
- semantic state
- accessible name
- optional icon
- no color-only meaning

## 10.3 Summary Card

Use for:

- customer
- device
- job
- quotation
- invoice
- payment
- assignment
- warranty
- subscription
- approval request

Summary cards display the smallest useful context and link to the canonical record.

## 10.4 Timeline

Timeline displays:

- meaningful event title
- date and time
- actor category when permitted
- customer-safe or internal description according to audience
- evidence/document link when permitted
- correction or supersession relationship

Do not delete historical events from the visible authorized history.

## 10.5 Table

- Use for comparison, not simple reading.
- Keep important columns first.
- Allow column choices only for trained staff.
- Preserve column meaning across pages.
- Provide card alternative on narrow screens.
- Bulk actions require selection eligibility validation.

## 10.6 Modal and Drawer

Use modal only for a short decision or confirmation.

Use drawer for supporting context that does not replace the main task.

Do not place long multi-step forms, complex configuration, or required recovery inside a modal.

## 10.7 Toast

Use for temporary non-final feedback:

- draft saved
- filter saved
- copied
- background export started
- synchronization completed

Do not use a toast as the only confirmation for payment, release, approval, account, or configuration changes.

# 11. APPLICATION-SPECIFIC DESIGN

## 11.1 Technician Application

- Prioritize current job, next task, SLA, safety, parts, and evidence.
- Protect intake and financial fields as read-only.
- Use checklists for diagnosis, repair, and testing.
- Make photo, video, QR, barcode, and manual entry easy on touch devices.
- Do not show business-wide owner analytics by default.

## 11.2 Front Desk Application

- Prioritize customer search, intake, communication, payment, and release.
- Use guided intake with duplicate detection.
- Separate customer words, staff notes, and technician findings.
- Present quotation and payment language clearly.
- Make ready-for-release requirements visible before handover.

## 11.3 Owner Application

- Prioritize exceptions and decisions before analytics detail.
- Use comparison, drill-down, saved views, and approval center.
- Show impact before publishing configuration.
- Separate operational, financial, security, and subscription controls.
- Advanced settings use progressive disclosure and role protection.

## 11.4 Customer Portal

- Use the simplest language in the system.
- Focus on current repair, required action, payment, pickup, warranty, and support.
- Avoid internal module names.
- Show one primary action.
- Provide tracking access without revealing sequential identifiers or internal data.

## 11.5 Platform Administration

- Keep tenant metadata separate from operational data.
- Support access is disabled by default and visibly time-limited when active.
- Platform billing, security, support, and tenant administration are separated by role.

# 12. RESPONSIVE DESIGN

## Desktop

- Supports persistent role navigation and comparison views.
- Detail screens may use two columns.
- Preserve a readable maximum content width for forms.

## Tablet

- Collapsible navigation.
- Touch-friendly controls.
- Context panels become drawers or stacked cards.

## Mobile

- One primary task per screen.
- Bottom action area may be used when it does not cover content.
- Tables become cards or prioritized rows.
- Camera and scanning actions include manual alternatives.
- Do not require precision dragging.
- Critical actions require enough spacing to prevent accidental taps.

# 13. ACCESSIBILITY REQUIREMENTS

- Target WCAG 2.2 AA unless a stricter approved target applies.
- Keyboard operation for every function.
- Visible focus not hidden by sticky headers, footers, dialogs, or action bars.
- Logical heading and focus order.
- Programmatic labels, instructions, names, roles, values, errors, and status messages.
- Text alternatives for meaningful images and evidence previews.
- Captions or alternatives for required media.
- Zoom and text resizing without loss of required content or action.
- Sufficient contrast.
- No flashing or motion that creates risk.
- Reduced-motion support.
- Consistent help placement.
- Authentication supports password managers, paste, and accessible alternatives.
- Do not require memory tests, transcription puzzles, or drag-only actions.

# 14. FRIENDLY HELP SYSTEM

The help entry remains in the same relative place across an application.

Help may include:

- short task-specific guidance
- examples
- explain-this-field content
- troubleshooting
- secure staff or customer support
- accessibility help

Help content must not expose secrets, internal security controls, unrelated customer data, or another tenant's configuration.

# 15. USER TESTING PERSONAS

Every major flow must be tested with representative users:

- non-technical Front Desk staff
- technician working with gloves, tools, or mobile device
- manager handling several branches
- cashier performing financial confirmation
- customer using a phone and tracking link
- older user or user with low digital confidence
- keyboard-only user
- screen-reader user
- user with low vision
- user with limited dexterity or tremor
- user on slow or unstable internet

Testing must confirm successful completion, comprehension, error recovery, and preserved workflow integrity.

# 16. DESIGN ACCEPTANCE CHECKLIST

A screen is not ready for implementation unless:

- its purpose is clear without training
- it has one dominant next action
- labels use plain language
- current status and responsible user are visible
- the approved workflow and permission gates are preserved
- entered data survives errors
- repeated information is reused
- errors explain how to fix the problem
- final actions have review and confirmation
- help is consistent
- mobile and keyboard use are defined
- loading, empty, offline, conflict, restricted, and error states are defined
- customer-visible and internal data are separated
- accessibility requirements are documented
- no completed application flow is replaced or bypassed
- no duplicate canonical design document is created

## STATUS

- Experience principles: COMPLETE.
- Information hierarchy and navigation: COMPLETE.
- Visual and interaction foundation: COMPLETE.
- Forms, validation, success, and status language: COMPLETE.
- Shared components: COMPLETE.
- Application-specific UI rules: COMPLETE.
- Responsive design: COMPLETE.
- Accessibility and friendly-help rules: COMPLETE.
- User-testing personas and acceptance checklist: COMPLETE.

**NON-TECHNICAL USER UI DESIGN SYSTEM COMPLETE (100%)**
