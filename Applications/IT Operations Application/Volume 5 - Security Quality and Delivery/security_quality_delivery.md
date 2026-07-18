# IT OPERATIONS APPLICATION — VOLUME 5: SECURITY, QUALITY, AND DELIVERY

## Purpose

Define threat controls, privacy, access, operational targets, testing, acceptance, rollout, rollback, support, and exact implementation sequencing for the IT Operations Application.

## Threat model

Threats include:

- IT role used as blanket tenant-data access;
- support-session abuse;
- privilege escalation through access requests;
- malicious runbook/automation;
- change without approval/rollback;
- secret leakage in tickets/logs/diagnostics;
- cross-tenant/branch incident or asset visibility;
- vendor/contractor excessive access;
- alert spoofing/noise/suppression abuse;
- false service restoration;
- destructive asset/restore action;
- compromised endpoint, printer, agent, connector, or integration;
- incident evidence tampering;
- unauthorized customer/employee monitoring;
- emergency access not revoked;
- knowledge article publishing sensitive details.

## Security controls

- tenant, company, branch, team, record, and field scope;
- separate IT permissions by service-management function;
- MFA/session/device trust for privileged roles;
- just-in-time/time-limited elevated access;
- approval and separation of duties;
- immutable audit and evidence checksums;
- secret references rather than values;
- diagnostic redaction and short-lived bundles;
- signed/approved runbook and automation versions;
- command allowlists and no direct database mutation;
- vendor/platform support scope and expiry;
- emergency-access review and auto-revocation;
- configuration/change versioning and rollback;
- security incident evidence preservation;
- anomaly/rate detection for access, runbooks, suppression, and exports.

## Privacy

- Ordinary support requests capture minimum context.
- Staff may review/remove optional screenshots/notes before submission.
- IT records reference business entities with safe identifiers.
- Full financial/customer/HR/device evidence is accessed only when separately authorized and necessary.
- Employee performance monitoring is outside IT Operations unless approved in a separate governance domain.
- Raw telemetry retention is bounded.
- Sensitive incidents and diagnostics use restricted audiences.
- Customer-facing status never exposes internal topology or vulnerability detail.

## Operational excellence requirements

- Every service has business and technical owner.
- Every monitored signal maps to a service/configuration item/tenant scope.
- Alerts have owner, severity, runbook, deduplication, and escalation.
- Major incidents have commander, next-update time, communication audiences, and validation.
- Changes have impact, risk, testing, approval, schedule, validation, and rollback.
- Runbooks are versioned, reviewable, pausable, auditable, and reversible when possible.
- Post-incident/change reviews create tracked corrective actions.
- Recurring incidents create problem records rather than repeated unconnected tickets.

## Measurable target registry

No target is claimed met until measured. The implementation must define approved targets for:

- service request response/resolution by priority;
- incident acknowledgement/update/mitigation/recovery;
- alert detection and false-positive rate;
- change success/failure/rollback;
- asset/agent/printer/integration health freshness;
- knowledge deflection and stale-article rate;
- backup/restore evidence freshness;
- audit/search/report latency;
- queue capacity and concurrency;
- accessibility and usability;
- tenant isolation/security test coverage.

Targets are versioned per plan/support policy where commercial differences are allowed, without weakening security/privacy.

## Test strategy

### Unit/component

- priority calculation;
- lifecycle transitions;
- approval matrix;
- dependency mapping;
- correlation/deduplication;
- access expiry;
- risk scoring;
- runbook input validation;
- notification audience mapping.

### Contract/integration

- identity/RBAC;
- application contextual help;
- monitoring ingestion;
- print events;
- integration/provider health;
- email/SMS/in-app delivery;
- platform support grants;
- vendor cases;
- backup/restore requests;
- event/realtime contracts.

### Security

- cross-tenant/branch/field negative tests;
- privileged-role escalation;
- support/vendor grant expiration;
- secret/log/diagnostic scanning;
- runbook/automation command restrictions;
- alert/maintenance suppression abuse;
- emergency change/access review;
- export and evidence protection.

### End-to-end

- contextual staff issue → ticket → resolution → validation;
- monitoring alert → incident → mitigation → review → problem/change;
- printer outage → staff fallback → IT incident → recovery/reconciliation;
- access request → approval → fulfilment → expiry;
- normal/emergency change → validation/rollback;
- vendor/platform escalation → scoped support → findings;
- restore request → approval → execution → reconciliation;
- cross-department blocker → linked IT and business tasks → shared closure.

### Accessibility/usability

- staff mobile help/request/status;
- service desk analyst queue;
- major incident command;
- change approval;
- owner business-impact dashboard;
- IT fleet/monitoring tables;
- keyboard, screen reader, focus, error summary, responsive states;
- user tests with ordinary staff, branch manager, IT analyst, IT manager, owner, and auditor.

### Reliability/recovery

- duplicate/out-of-order events;
- monitoring outage;
- notification outage;
- provider/vendor timeout;
- stale configuration graph;
- queue overload;
- partial task completion;
- database/cache/realtime failures;
- backup/restore and disaster-recovery rehearsal;
- reconciliation after outage.

## Acceptance criteria

- All 26 screens and 20 flows are traceable.
- Staff support is available from every authorized application module.
- Owner sees cross-department business impact and approvals.
- IT access is least-privilege, not blanket access.
- Incident/problem/change/asset/printer/integration/knowledge records are connected.
- Platform support access is scoped, approved, time-limited, visible, and audited.
- All protected changes and runbooks have evidence and rollback/stop behavior.
- No critical unresolved security/accessibility/data-integrity issue.
- All major failure paths preserve domain business records.

## Rollout

```text
1. Architecture/role/service catalog approval
2. Database/API/event foundation
3. Staff Get Help and My Requests
4. Service Desk and knowledge
5. Incident/alert management
6. Assets/configuration items
7. Printer/integration operations
8. Problem/change/release
9. Access/support/vendor workflows
10. Backup/recovery and owner governance
11. Pilot branch/team
12. Progressive tenant rollout
13. General availability after evidence
```

Feature flags are per tenant/plan/application/module. Core staff support and security response remain available according to product policy.

## Rollback

- disable new module/automation through feature flag;
- preserve all records/audit;
- revert policy/runbook/change version;
- pause alert automation while retaining telemetry;
- return staff to manual support entry;
- revoke support/vendor/elevated access;
- roll back local agents/connectors via controlled change;
- reconcile events/tasks after rollback.

## Exact implementation sequence

```text
ITO-00 Authorization and repo/worker verification
ITO-01 Stack, service catalog, roles, permissions, target lock
ITO-02 Traceability and physical schema/API/event lock
ITO-03 IT services/configuration-item/asset foundation
ITO-04 Service request/task/approval foundation
ITO-05 Staff contextual help and My Requests vertical slice
ITO-06 Knowledge/runbook foundation
ITO-07 Incident/alert/communication foundation
ITO-08 Problem/known-error/permanent-fix foundation
ITO-09 Change/calendar/release/rollback foundation
ITO-10 Asset/workstation/device lifecycle
ITO-11 Printing package integration
ITO-12 Integration/credential-reference/health/reconciliation
ITO-13 Identity/access request and expiry
ITO-14 Vendor/platform support access and diagnostics
ITO-15 Backup/restore/continuity coordination
ITO-16 Owner governance/reports/audit
ITO-17 Security/accessibility/performance/recovery tests
ITO-18 Pilot, rollout, support, and operations evidence
```

## Coding restrictions

- Implementation requires exact `implementation_authorized=true` slice.
- Do not invent a competing ticket, incident, change, printer, identity, audit, or notification model.
- Do not store secret values in IT records.
- Do not grant IT blanket business-data access.
- Do not allow runbooks/automation to bypass domain APIs/commands.
- Do not close business work merely because an IT ticket closes.
- Do not claim service/SLA/availability without measured evidence.
