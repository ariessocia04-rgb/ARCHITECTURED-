# ADMIN PORTAL — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
PlatformUserReference, TenantReference, TenantLifecycleCase, PlanReference, EntitlementOverride, UsageSnapshot, LimitException, DelegatedAdminGrant, SupportAccessRequest, SupportSession, FeatureFlag, ConfigurationVersion, IntegrationConnectionReference, SecretReference, JobQueueView, JobControlRequest, Incident, RecoveryAction, AuditQuery, ExportRequest, AdminApproval.

## Rules
Admin Portal stores control-plane references and requests, not duplicate business data. Every action includes environment, tenant/company/branch scope, actor, reason, expected version, approval, idempotency, correlation, expiry, and audit. Secret values are never returned after creation and are stored only by approved secret systems.

## APIs
Provision/update/suspend/reactivate/close tenant; manage entitlement override; delegate admin; request/approve/revoke support access; configure/publish/rollback version; manage feature flag; connect/disconnect integration; rotate secret reference; retry/quarantine job; create/update incident; trigger approved recovery; query/export audit.

## Events
`tenant.provisioning_requested`, `tenant.activated`, `tenant.suspended`, `tenant.reactivated`, `tenant.closure_requested`, `entitlement.changed`, `support_access.approved`, `support_access.revoked`, `configuration.published`, `configuration.rolled_back`, `feature_flag.changed`, `job.quarantined`, `incident.declared`, `recovery.completed`.

## Integrations
All control-plane engines through versioned administrative APIs/events; no direct service databases. Signed commands, outbox/inbox, idempotency, policy evaluation, reconciliation, and immutable audit are mandatory.

## Export/migration
Large exports are asynchronous, encrypted, expiring, scope-filtered, and audited. Tenant lifecycle migration preserves IDs, entitlements, region, retention, support history, and closure evidence. Configuration migration requires schema compatibility and rollback.