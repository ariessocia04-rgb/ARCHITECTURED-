# ADMIN PORTAL — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Platform dashboard; tenant list/detail; tenant lifecycle wizard; plans/entitlements; usage/limits; platform users/roles; tenant admin delegation; support-access requests/sessions; integrations/credential references; feature flags; configuration versions; job queues; incidents; backup/recovery status; security center; audit/search/export; reports.

## Lifecycles
Tenant: Trial/Provisioning → Active → Grace → Restricted → Suspended → Reactivated / Closing → Export/Retention → Closed.
Support access: Requested → Approved → Active → Expired/Revoked → Reviewed.
Config: Draft → Validated → Approved → Scheduled → Published → Monitored → Rolled Back/Superseded.
Incident: Detected → Triaged → Contained → Resolved → Recovered → Reviewed → Closed.

## Workflow
Select authorized scope → inspect current state/dependencies → guided change → validation and impact preview → approval/step-up → execute through owning service → monitor → confirm or rollback → audit. No raw database editing from UI.

## Exceptions
Tenant conflict, plan limit, dependency failure, stale version, support approval expiry, integration secret failure, job retry storm, regional outage, backup failure, or permission denial retains context and provides safe next action/escalation.

## UI/UX
Strong platform-versus-tenant visual context, destructive-action friction, plain impact summary, review/confirmation, change diff, visible rollback, session countdown, keyboard-accessible data tables, responsive incident use, loading/empty/error/permission/degraded states.

## Wireframes/wireflows
Dashboard, tenant, subscription, access, configuration, flags, integrations, jobs, incidents, recovery, security, audit, and reports. Prototype covers tenant suspension/reactivation, time-bound support access, config rollback, failed job quarantine, and incident containment.