# RELEASE MANIFEST — ROS-R1-MVP-2026-01

## Release objective

Deliver one controlled pilot that proves the complete repair-service journey, essential staff coordination, safe tenant isolation, Free/Pro Trial entitlement behavior, document/receipt printing, customer tracking, and basic IT support on a single branch without claiming public-production readiness.

## Release identity

```text
release_id: ROS-R1-MVP-2026-01
release_name: Connected Repair Operations Pilot
release_class: Controlled Pilot MVP
primary_market: Philippines pilot configuration
primary_currency: PHP
primary_timezone: Asia/Manila
primary_staff_environment: Windows 11 desktop/laptop
customer_environment: responsive web/PWA-capable browser
subscription_mode: Free + Pro Trial + platform-admin test overrides
public_paid_checkout: disabled
premium_sales: closed_to_new_sales
implementation_authorized: false
```

## Pilot tenant boundary

- One verified repair business.
- One active company.
- One active operating branch.
- One stock location/warehouse.
- Up to five pilot staff accounts under Pro Trial or approved internal override.
- Test customer accounts and approved real pilot records only after privacy/UAT approval.
- No cross-company production data.

## Included user roles

### Required operational roles

- Tenant Owner / Business Owner.
- Tenant Administrator.
- Branch Manager / Service Manager.
- Front Desk / Customer Service Agent.
- Dispatcher / Queue Coordinator.
- Technician.
- Quality Control Supervisor.
- Inventory and Purchasing Officer.
- Finance / Cashier.
- IT Manager or Service Desk/Endpoint Administrator.
- Customer.
- Platform Super Administrator and Platform Support Administrator through audited support access.

### Supported but combined in small-pilot staffing

One person may hold multiple roles only when separation-of-duty rules allow it. Protected payment/refund, inventory adjustment, permission administration, support impersonation, and final release overrides require configured approvals or a different approver.

## Included application surfaces

### Shared shell

- Authentication and session recovery.
- Tenant/branch context.
- Role-aware navigation.
- Global search limited by permission.
- Notifications.
- My Cross-Department Work.
- Process header, next action, blocker, handoff, approval, and timeline.
- Contextual Get Help.
- Loading, empty, error, permission, subscription, offline, conflict, and retry states.

### Owner workspace

- Pilot dashboard.
- Company/branch/workstation/warehouse setup.
- User invitation and role assignment.
- Service catalog and basic workflow settings.
- Queue/operations overview.
- Basic inventory, finance, quality, subscription usage, printing, IT status, audit, and reports.

### Front Desk workspace

- Customer search-before-create.
- Customer registration.
- Device registration and duplicate warning.
- Device intake, accessories, condition, photos, consent, signature.
- Job-order creation and receipt.
- Queue qualification/dispatch.
- Quotation communication and approval status.
- Payment recording.
- Receipt/release document printing and digital delivery.
- Release, warranty intake, and customer communication.

### Technician/QC workspace

- Assigned repair queue.
- Job detail with protected intake snapshot.
- Acceptance/decline.
- Inspection and diagnosis.
- Parts request/reservation visibility.
- Repair execution, evidence, notes, pause, and exception.
- Testing and results.
- QC review, rework, and approval.
- Completion history.

### Customer portal

- Secure sign-in or approved tracking link.
- Device/job status.
- Audience-safe timeline.
- Quotation view/approve/reject/ask question.
- Receipt, invoice, release, and warranty documents.
- Support/feedback.

### IT Operations Lite

- Staff Get Help entry.
- Service request/ticket queue.
- Incident classification and assignment.
- Workstation and printer registry.
- Printer/local-agent status.
- Basic integration health.
- Resolution, verification by requester, knowledge note, and audit.

### Platform administration minimum

- Create/verify pilot tenant.
- Assign plan/trial and test entitlements.
- View tenant usage and health.
- Approve scoped support access.
- Suspend/revoke support sessions.
- Audit platform actions.

## Included shared business capabilities

- Tenant/company/branch/workstation/warehouse identities.
- Users, memberships, roles, permissions, scopes, and approvals.
- Free and Pro Trial plan versions and entitlement snapshots.
- Premium catalog record present but not purchasable.
- Customer, business account baseline, device, service request, job order.
- Assignment, status history, diagnosis, quotation, approval.
- Parts catalog, stock balance, reservation, issue/use/return, basic purchase request and receiving.
- Repair, testing, QC, invoice, payment record, receipt, release, warranty.
- Files, evidence, document templates, signatures, QR/barcode identifiers.
- Notification, audit, outbox/inbox, idempotency, jobs, realtime projections.
- Cross-department process instance, task, handoff, blocker, approval reference, and audience-safe timeline.
- IT ticket and printer linkage to affected business process.

## Included printing scope

### Mandatory

- Digital PDF generation and secure download/email-ready delivery.
- A4 and Letter page document profiles.
- Browser/OS print dialog for installed page printers.
- Windows local print agent enrollment and health.
- 80 mm ESC/POS thermal receipt profile over approved Windows print queue or tested LAN adapter.
- Reprint history without repeating payment or business transaction.
- Printer failure fallback to PDF, another eligible printer, queue for later, or IT ticket.

### Conditional pilot

- 58 mm thermal profile after layout and hardware test.
- IPP Everywhere direct/network path after capability discovery and certification.
- QR/barcode labels through an OS-installed label queue after exact media test.

## Included plan behavior

### Free

- Free entitlement snapshot and limits are implemented.
- Core repair records remain accessible under safe continuity rules.
- Upgrade prompts and limit warnings are implemented.

### Pro Trial

- Fourteen-day trial policy and pilot caps are implemented.
- No silent paid conversion.
- Trial expiry produces Free conversion or remediation/read-only continuity according to canonical rules.

### Pro paid

- Plan catalog and price-book records may exist in draft/test state.
- Public paid checkout, automated tax, recurring provider subscription, and live renewal charging are excluded from R1.

### Premium

- Stable plan code and entitlement definitions exist.
- Premium is `CLOSED_TO_NEW_SALES` in R1.
- Premium-only AI/BI/SSO/Public API/multi-company functions are not exposed as completed features.

## Explicit exclusions

- Public production launch.
- Automated SaaS subscription checkout or recurring billing provider.
- Live SMS/push provider.
- Full accounting/general ledger.
- Payroll and benefits.
- Full CRM campaign automation and marketing execution.
- Supplier/Vendor portals.
- Multi-company production operation.
- Advanced multi-branch routing.
- AI Assistant autonomous actions.
- Business Intelligence warehouse.
- Remote diagnostics, IoT, native mobile application, and public API.
- Universal printer support.
- macOS/Linux local print agent certification.
- Full label-printer family support.
- Cash drawer control unless certified with the selected thermal device.
- Offline-first full transaction processing; only safe drafts/retry/resume where explicitly approved.

## Mandatory cross-department workflow

```text
Customer/Front Desk
→ Intake and Job Order
→ Dispatch
→ Technician Diagnosis
→ Quotation
→ Customer Approval
→ Inventory/Purchasing
→ Repair
→ Testing/QC
→ Finance/Payment
→ Printing/Digital Delivery
→ Release
→ Warranty/Support
→ Owner Reporting/Audit
```

IT tickets, incidents, printer failures, or integration failures attach to the same process and block only the affected stage. IT resolution does not complete the business department's authoritative task.

## Release success criteria

1. One tenant and branch can be provisioned from an empty database.
2. At least one user per required operational workspace can authenticate and see only authorized data/actions.
3. Cross-tenant negative tests pass.
4. One complete repair can move from intake through warranty activation with immutable status/audit history.
5. Customer quotation approval is linked to the exact quotation version.
6. Stock reservation/use and financial records cannot be silently overwritten.
7. Payment recording and receipt reprint are idempotent and separate.
8. An 80 mm receipt and an A4/Letter release document pass layout tests and one certified hardware path.
9. Printer failure offers safe fallback and creates no duplicate business transaction.
10. Staff can open an IT ticket from the affected record and verify resolution.
11. Owner can see operational, printer, IT, entitlement, and audit summaries without cross-tenant leakage.
12. Required unit, RLS, integration, E2E, accessibility, security, migration, backup/restore, and pilot rollback tests pass.
13. UAT is signed by Owner, Front Desk, Technician/QC, Finance, Inventory, IT, and one customer representative.

## Release gates

```text
GATE R1-0: architecture and this manifest approved
GATE R1-1: stack/version and support matrix approved
GATE R1-2: high-fidelity critical-path prototype approved
GATE R1-3: exact task authorization granted
GATE R1-4: foundation/CI/database/security pass
GATE R1-5: vertical-slice modules pass
GATE R1-6: printer lab certification pass
GATE R1-7: full UAT and recovery rehearsal pass
GATE R1-8: controlled pilot approval
```

No later gate can be inferred from completion of an earlier gate.