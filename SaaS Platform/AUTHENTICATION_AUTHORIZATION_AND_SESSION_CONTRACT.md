# AUTHENTICATION, AUTHORIZATION, AND SESSION CONTRACT

## PURPOSE

This document defines identity, login, authentication, authorization, permission evaluation, session management, support access, customer access, contractor access, and security-event requirements.

## IDENTITY CLASSES

```text
PLATFORM IDENTITIES
├── Platform Super Administrator
├── Platform Support Administrator
├── Platform Billing Administrator
├── Platform Security Auditor
└── Approved System Service Identity

TENANT WORKFORCE IDENTITIES
├── Tenant Owner
├── Tenant Administrator
├── Branch Manager
├── Front Desk Agent
├── Dispatcher
├── Technician
├── Quality Supervisor
├── Inventory Officer
├── Finance User
├── Auditor
└── Contractor

CUSTOMER IDENTITIES
├── Individual Customer
├── Business Account Representative
├── Authorized Device Representative
└── Authorized Pickup Representative
```

## IDENTITY PRINCIPLES

- One platform identity may receive access to multiple tenants only through explicit assignments.
- Tenant membership, role, branch, and application access are separate assignments.
- Historical records retain the user ID after suspension or deactivation.
- Shared workforce accounts are prohibited.
- System identities use least privilege and cannot perform interactive user actions.
- Customer and workforce identities remain logically separated even when the same email is used.

## REGISTRATION AND INVITATION

### Tenant Workforce

```text
Invitation Created
→ Invitation Delivered
→ Identity Verified
→ Account Activated
→ Tenant Assigned
→ Branch Assigned
→ Role Assigned
→ Optional Approval
→ Access Enabled
```

- Invitation tokens are single-use, time-limited, and revocable.
- An invitation specifies tenant, intended email/contact, role request, branch scope, inviter, and expiry.
- High-privilege roles require owner or authorized administrator approval.
- Contractor invitations require effective dates and allowed record scope.

### Customer

- Customers can register directly or accept an invitation linked to an existing customer record.
- Linking a portal account to an existing customer or business account requires verification.
- Duplicate portal accounts are detected and resolved without exposing whether unrelated records exist.

## AUTHENTICATION METHODS

Supported architecture may include:

- Password authentication.
- Email or mobile one-time verification.
- Multi-factor authentication.
- Enterprise single sign-on for eligible plans.
- Approved social identity for customers when enabled.
- Passkey or stronger passwordless authentication when supported.
- Recovery codes for approved high-security accounts.

High-privilege platform and tenant roles require stronger authentication policy than ordinary customer access.

## PASSWORD CONTRACT

- Passwords are never stored or logged in readable form.
- Password policy is configurable within platform security minimums.
- Known compromised and weak passwords are rejected when supported.
- Password reset tokens are time-limited, single-use, and invalidated after successful use.
- Password change can revoke other active sessions according to policy.
- Support staff cannot view or set a user's permanent password.

## MULTI-FACTOR AUTHENTICATION

- MFA can be mandatory by platform, tenant, role, risk, or protected action.
- Recovery and factor changes require identity verification.
- MFA enrollment, change, disable, and recovery are audited.
- Payment refund, role elevation, integration secret change, tenant closure, and support access may require step-up authentication.

## AUTHORIZATION EVALUATION

Every protected request evaluates:

1. Identity is authenticated.
2. Account is active.
3. Tenant membership is active.
4. Subscription permits the application and feature.
5. Role assignment is active.
6. Required permission is granted.
7. Branch and department scope allow access.
8. Record assignment, ownership, or sharing allows access.
9. Field-level rule allows requested fields.
10. Workflow state allows the action.
11. Required approval or step-up authentication is satisfied.
12. Session and risk policy allow the operation.

Deny takes precedence over allow when policies conflict.

## PERMISSION MODEL

Permission naming follows stable capability actions:

```text
resource.action
```

Examples:

- customer.read
- customer.create
- device.update
- job_order.assign
- diagnosis.finalize
- quotation.approve_discount
- inventory.adjust
- payment.confirm
- refund.approve
- release.authorize
- user.manage_roles
- integration.manage
- audit.export

Permissions do not depend solely on page visibility.

## FIELD-LEVEL SECURITY

Field-level rules apply to:

- identity evidence
- personal information
- device identifiers
- internal technical notes
- labor and parts cost
- profit and margin
- payment details
- integration secrets
- security events
- owner-only approvals

A user who can read a record may still be unable to read or change protected fields.

## RECORD-SCOPE MODEL

Supported scopes:

- platform
- tenant
- assigned branches
- assigned department
- team
- assigned records
- created records
- customer-owned records
- business-account records
- explicit temporary share
- read-only audit scope

Scope is resolved server-side and added to queries before records are returned.

## ROLE ASSIGNMENT CONTRACT

Every assignment records:

- user_id
- tenant_id
- role_id
- branch or department scope
- effective_from
- effective_to
- assigned_by
- approved_by when required
- reason
- status

Role changes are audited and can invalidate sessions or cached permissions.

## SEPARATION OF DUTIES

The architecture supports separation between:

- intake and technical diagnosis
- diagnosis and quality approval
- quotation creation and protected discount approval
- payment entry and refund approval
- inventory adjustment and reconciliation approval
- user role request and role approval
- integration configuration and security review
- tenant closure request and final approval

Small tenants may combine roles only through explicit policy and audit.

## SESSION CONTRACT

Every session records:

- session_id
- user_id
- tenant context
- application
- authentication method and strength
- created_at
- last_activity_at
- expires_at
- device and browser summary
- IP and location risk context when allowed
- status
- revocation reason

## SESSION RULES

- Sessions expire after configured inactivity and maximum lifetime.
- High-privilege sessions have stricter limits.
- Role, tenant, suspension, password, MFA, and risk changes can revoke sessions.
- Users can view and revoke their active sessions.
- Administrators can revoke tenant workforce sessions with permission.
- Customer sessions cannot subscribe to internal staff channels.

## TENANT SWITCHING

Users assigned to multiple tenants must explicitly switch tenant context. The application clears tenant-scoped caches, selections, subscriptions, and unsaved state during switching.

A tenant identifier supplied by the client never authorizes access without an active assignment.

## SUPPORT ACCESS CONTRACT

Platform support access is:

- disabled by default
- requested for a specific tenant and reason
- approved by tenant owner or emergency policy
- time-limited
- restricted to required capabilities
- visibly indicated when active
- fully audited
- revocable immediately

Support users cannot export tenant data, change financial records, or perform business operations unless the approved scope explicitly permits it.

## CONTRACTOR ACCESS

- Contractor access has start and end dates.
- Access is limited to assigned jobs, tasks, documents, and communication.
- Contractor users cannot browse customer lists, tenant reports, unrelated inventory, pricing, or other jobs.
- Contractor access expires automatically and retains audit history.

## CUSTOMER ACCESS

- Customers access only their own or authorized records.
- Business representatives access approved company-account records.
- Pickup representatives receive only the release verification required for a specific job.
- Public tracking tokens are opaque, limited, revocable, and time-bound.
- Customer-visible data is separated from internal notes and staff-only details.

## ACCOUNT STATES

- Invited
- Pending Verification
- Active
- Locked
- Suspended
- Deactivated
- Archived

State changes define login, session, notification, retention, and recovery behavior.

## RISK AND SECURITY EVENTS

Security evaluation may consider:

- repeated failed login
- unusual location or device
- impossible travel
- credential recovery
- privilege elevation
- bulk export
- refund or financial override
- integration credential change
- support access
- suspicious API or webhook behavior

Risk actions include step-up authentication, temporary block, session revocation, notification, and incident creation.

## AUTHENTICATION AUDIT EVENTS

- InvitationCreated
- InvitationAccepted
- LoginSucceeded
- LoginFailed
- MFAEnrolled
- MFAChallengeFailed
- PasswordChanged
- RecoveryStarted
- RecoveryCompleted
- SessionCreated
- SessionRevoked
- TenantSwitched
- RoleAssigned
- RoleRemoved
- SupportAccessGranted
- SupportAccessEnded
- AccountSuspended
- AccountDeactivated

## PRIVACY RULES

- Authentication logs retain only approved security context.
- Secret values, passwords, MFA codes, tokens, and recovery codes are never logged.
- IP, device, and location context follows policy, notice, access, and retention controls.

## STATUS

- Identity classes, invitation, registration, authentication, MFA, authorization, permissions, field and record scope, separation of duties, sessions, support, contractor, customer access, risk, audit, and privacy: COMPLETE.

**AUTHENTICATION, AUTHORIZATION, AND SESSION CONTRACT COMPLETE (100%)**
