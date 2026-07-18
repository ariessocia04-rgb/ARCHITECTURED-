# CUSTOMER PORTAL ARCHITECTURE

## PURPOSE

The Customer Portal gives customers and authorized business-account representatives secure access to service requests, repair tracking, quotations, payments, documents, release information, warranty, support, and feedback.

Canonical shared user and permission definitions are stored in:

`SaaS Platform/USER_ROLE_AND_WORKFLOW_ARCHITECTURE.md`

## PRIMARY USERS

- Individual Customer
- Business Account Representative
- Authorized Device Owner
- Authorized Pickup Representative

## NAVIGATION FLOW

```text
Register or Login
↓
Customer Dashboard
↓
Create Service Request or View Existing Repair
↓
Device and Issue Details
↓
Appointment / Drop-Off / Collection
↓
Repair Status Tracking
↓
Quotation Review and Approval
↓
Payment
↓
Release or Delivery
↓
Warranty and Support
↓
Feedback and Repair History
```

## APPLICATION ARCHITECTURE

```text
CUSTOMER PORTAL
├── 1. Registration, Login, and Identity
├── 2. Customer Dashboard
├── 3. Customer and Business Profile
├── 4. Device Registry
├── 5. Service Request and Appointment
├── 6. Repair Tracking and Timeline
├── 7. Quotation and Approval
├── 8. Payments and Documents
├── 9. Release, Pickup, and Delivery
├── 10. Warranty, Return, and Support
├── 11. Messages and Notifications
├── 12. Feedback and Service History
└── 13. Privacy, Security, and Account Settings
```

## 1. REGISTRATION, LOGIN, AND IDENTITY

- Individual and business-account registration.
- Email or mobile verification.
- Secure login, password recovery, session history, and optional multi-factor authentication.
- Customer identity and authorized-representative verification.
- Invitation acceptance for existing customer records.
- Duplicate-account detection and controlled account linking.
- Terms, privacy, communication consent, and audit history.

## 2. CUSTOMER DASHBOARD

- Active repairs.
- Waiting quotation approval.
- Waiting payment.
- Ready for pickup or delivery.
- Warranty coverage and expiry.
- Upcoming appointment.
- Recent messages, documents, and activity.
- Quick actions for new request, payment, approval, support, and history.

## 3. CUSTOMER AND BUSINESS PROFILE

- Personal or company information.
- Contact details and communication preferences.
- Billing and service addresses.
- Authorized representatives and pickup persons.
- Business-account departments, contacts, and purchase-order references.
- Profile verification, changes, history, and account closure request.

## 4. DEVICE REGISTRY

- Registered devices and service history.
- Device category, brand, model, color, serial number, IMEI, and asset tag.
- Proof of purchase and warranty documents.
- Ownership and authorized-use confirmation.
- Device nickname and business assignment.
- Lost, sold, transferred, or archived device status.
- Sensitive device identifiers are masked according to permission and context.

## 5. SERVICE REQUEST AND APPOINTMENT

- Select registered device or add a new device.
- Describe issue, symptoms, urgency, and preferred service.
- Upload supporting photos, videos, and documents.
- Select walk-in, drop-off, pickup, courier, or approved on-site option.
- Choose branch, date, and time when scheduling is enabled.
- Review estimated inspection terms, consent, data-risk notice, and service conditions.
- Submit, edit before acceptance, cancel, and view request history.

## 6. REPAIR TRACKING AND TIMELINE

- Request received.
- Device intake completed.
- Job order created.
- Assigned to technician.
- Inspection and diagnosis in progress.
- Quotation prepared.
- Waiting customer approval.
- Waiting parts.
- Repair in progress.
- Testing and quality review.
- Ready for release.
- Released, delivered, completed, or closed.
- Timeline shows customer-safe updates without exposing internal-only notes.

## 7. QUOTATION AND APPROVAL

- View diagnosis summary, recommended repair, parts, labor, fees, taxes, discounts, warranty, and estimated completion.
- Approve, reject, request clarification, or request an allowed alternative.
- Quotation expiry and reminder.
- Version history and approved-version lock.
- Electronic acknowledgement and timestamp.
- Business-account approval routing for authorized representatives.

## 8. PAYMENTS AND DOCUMENTS

- View inspection fee, deposit, invoice, balance, refund, and payment status.
- Pay through enabled payment channels.
- Upload proof of payment where manual verification is allowed.
- Download quotation, invoice, receipt, job-order summary, testing report, release document, and warranty certificate.
- Payment retry, failure notice, and support request.
- Financial documents follow tenant and account permissions.

## 9. RELEASE, PICKUP, AND DELIVERY

- Ready-for-release notice.
- Select pickup or approved delivery option.
- Nominate and verify an authorized pickup representative.
- View release requirements, outstanding balance, branch hours, location, and instructions.
- Confirm appointment or delivery schedule.
- Review repaired condition, testing summary, warranty, and care instructions.
- Release confirmation and document history.

## 10. WARRANTY, RETURN, AND SUPPORT

- View warranty coverage, covered repair, covered parts, start date, expiry, and exclusions.
- Submit warranty concern linked to the original repair.
- Upload evidence and describe repeat symptoms.
- Track warranty inspection, decision, repair, replacement, or rejection.
- Request support, escalation, complaint review, or account assistance.
- Support history and resolution record.

## 11. MESSAGES AND NOTIFICATIONS

- In-app, email, SMS, and push notifications based on tenant configuration and customer consent.
- Quotation, approval, parts delay, repair progress, payment, release, warranty, and support updates.
- Secure conversation linked to the correct service record.
- Delivery status, read state, retry, preference, and history.
- Internal staff notes are never shown to customers.

## 12. FEEDBACK AND SERVICE HISTORY

- Completed repair history.
- Device, branch, service, quotation, payment, warranty, and document history.
- Customer satisfaction rating and feedback.
- Complaint, compliment, and follow-up status.
- Repeat-repair and warranty history.
- Download authorized service records.

## 13. PRIVACY, SECURITY, AND ACCOUNT SETTINGS

- Customer access is restricted to owned or explicitly authorized records.
- Business representatives access only their approved company account and assigned records.
- Sensitive fields are masked or hidden.
- Session, device, login, consent, download, approval, payment, and account-change events are logged.
- Customers can manage notification preferences, active sessions, password, MFA, data request, and account closure.
- Tenant isolation applies to every portal request and export.

## STATUS

- Identity and customer access architecture: COMPLETE.
- Service request and repair tracking architecture: COMPLETE.
- Quotation, payment, and document architecture: COMPLETE.
- Release, warranty, and support architecture: COMPLETE.
- Privacy, security, and audit architecture: COMPLETE.

**CUSTOMER PORTAL ARCHITECTURE COMPLETE (100%)**
