# ADMIN PORTAL — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security
Phishing-resistant MFA target for platform admins, step-up for protected actions, least privilege, just-in-time grants, IP/device policy where approved, environment/tenant isolation, secret non-disclosure, rate limits, signed admin commands, break-glass review, and session recording metadata.

## Audit/recovery
Audit every privileged view/action, approval, support session, export, configuration, flag, integration, job control, incident, and recovery. Tamper-evident retention and legal hold apply. Recovery verifies tenant isolation, entitlement/config versions, access expiry, secret references, job state, and audit continuity.

## Targets
99.95% monthly availability for critical control plane; p95 reads ≤2s; protected command acknowledgement ≤3s; security event visibility ≤1m; RPO ≤15m; RTO ≤2h for critical control plane; WCAG 2.2 AA; zero accepted unauthorized cross-tenant/platform action.

## Reports
Tenant health/lifecycle, plan/usage, support access, privileged activity, configuration/flags, integrations, job failures, incidents, backups/recovery, security posture, audit exports, and operational SLA.

## Risks
Privilege escalation, tenant crossover, secret exposure, support abuse, destructive misconfiguration, job replay, audit tampering, and break-glass misuse require JIT/JEA, MFA, approvals, policy engine, immutable logs, idempotency, monitoring, kill switches, and rollback.

## Tests/status
Privilege matrix, platform/tenant isolation, support expiry, secret handling, config version/rollback, destructive confirmation, idempotency, incident/recovery, audit tamper evidence, accessibility, performance, backup/restore, and disaster recovery. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; privileged implementation separately authorized.