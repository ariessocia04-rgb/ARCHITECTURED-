# CROSS-DEPARTMENT OPERATING FABRIC — TRACEABILITY, SECURITY, QUALITY, AND DELIVERY

## Purpose

Define screen/process/department traceability, security/privacy, test coverage, rollout, rollback, and exact implementation sequence for the shared operating fabric.

## Surface traceability

| Surface | Primary users | Core authority | Entities | Key actions | Connected flows |
|---|---|---|---|---|---|
| CDF-01 My Work | all staff | assigned/participant scope | SharedTaskRef, Handoff, Approval | open/accept/respond | 1,2,9 |
| CDF-02 Process Header | domain staff | linked-record scope | ProcessInstance/Stage/Blocker | view process/context | all domain flows |
| CDF-03 Command Center | owner/manager/participants | process + domain permission | Process, Links, Tasks, Timeline | coordinate/drilldown | 3–16 |
| CDF-04 Department Queue | department staff/manager | department/team scope | Handoff/Task/Stage | assign/accept/escalate | 2 |
| CDF-05 Handoff Composer | source department | source record + handoff permission | Handoff | validate/send | 2 |
| CDF-06 Handoff Detail | destination | destination scope | Handoff | accept/return/reject/complete | 2 |
| CDF-07 Task Workspace | responsible staff | domain task permission | TaskRef/DomainTask | perform/result | all E2E |
| CDF-08 Timeline | participant/customer/auditor variants | audience-safe projection | TimelineEntry | view/filter/source | all |
| CDF-09 Blockers | participants/managers | blocker/process scope | Blocker/Dependencies | resolve/escalate | 9,15 |
| CDF-10 Approval Inbox | approvers | approval policy | ApprovalRef/DomainDecision | approve/reject/more info | 11,16 |
| CDF-11 Communication | authorized communication roles | audience/channel policy | Communication/Notification | draft/review/publish | 12 |
| CDF-12 Owner Dashboard | owner/executives | tenant/company scope | metrics/risks/approvals | decide/drilldown | 16 |
| CDF-13 Branch Board | branch manager | branch scope | process/queue/health | prioritize/escalate | 3,9,10 |
| CDF-14 Customer Timeline | customer/representative | owned records | customer-safe projection | act/view/pay/approve | 3,8,12 |
| CDF-15 External Task Portal | supplier/vendor | assigned external task | external task/docs | respond/submit | 4,8 |
| CDF-16 Process Designer | authorized architects/admin | process governance | ProcessDefinition | draft/validate/publish | 1 |
| CDF-17 Responsibility Matrix | owner/admin/process owner | governance | ParticipantRule | assign/validate | all |
| CDF-18 Analytics | owner/managers/BI | aggregate scope | process metrics | analyze/drilldown | all |
| CDF-19 Linked Records | participants | per-domain permission | LinkedDomainRecord | open source | all |
| CDF-20 Recovery Panel | participants/IT | failure scope | finding/blocker | retry/reconcile/escalate | 15 |

## Security threat model

Threats:

- cross-tenant/company/branch/department visibility;
- shared process used to bypass domain permissions;
- unauthorized cross-department task/approval creation;
- stale summary applied as authoritative state;
- forged/replayed events or handoffs;
- conflicting customer communication;
- AI/automation bypass;
- sensitive HR/finance/security/customer data in timeline;
- supplier/vendor overreach;
- owner dashboard exposing restricted records;
- self-approval/separation-of-duties violation;
- cancellation/compensation duplicating domain effects;
- notification spam or suppressed critical action;
- process definition changed after publication.

Controls:

- domain authority and server-side permission revalidation;
- tenant/company/branch/record/field/audience scope;
- immutable process/policy/template versions;
- outbox/inbox, idempotency, version and correlation checks;
- signed external webhooks/tokens;
- safe projections rather than copied payloads;
- separation of duties and approval snapshots;
- explicit communication owner and audience templates;
- AI recommendations only through reviewed domain commands;
- external portal assignment scope;
- audit, retention, legal hold, incident/reconciliation;
- rate/volume/abuse controls.

## Privacy

- Timeline and process summaries use minimum necessary fields.
- HR, finance, security, identity, customer, and device details retain domain field restrictions.
- Department participation does not imply full-record access.
- Customer timeline is separately projected.
- Supplier/vendor records exclude internal alternatives, margins, other suppliers, customers, and unrelated processes.
- Analytics defaults to aggregate data with authorized drilldown.

## Required tests

### Domain integrity

- shared task cannot mutate domain-owned status;
- domain event advances only valid process stage/version;
- cancellation uses domain compensation;
- stale approval/source version is superseded;
- IT blocker resolves only after business validation where required.

### Access/security

- cross-tenant/company/branch/department negative tests;
- field/audience timeline tests;
- customer/supplier/vendor isolation;
- owner/auditor scope;
- self-approval/role conflict;
- event/handoff replay/tamper;
- AI/automation command restrictions.

### End-to-end

- E2E-01 repair closure with parts, payment, printing, IT blocker;
- E2E-02 warranty/complaint with supplier/finance/QC;
- E2E-03 source-to-pay;
- E2E-05 quote-to-cash/accounting;
- E2E-06 hire/onboard/access/device/offboard;
- E2E-08 issue-to-resolution;
- E2E-09 change-to-release;
- E2E-11 cross-branch transfer;
- E2E-12 AI recommendation to controlled action.

### Failure/recovery

- duplicate/out-of-order/missing events;
- stale projections;
- unavailable destination department;
- rejected/returned handoff;
- notification/provider failure;
- IT/platform outage;
- partial compensation;
- reconciliation and audit.

### Accessibility/usability

- staff My Work and handoff;
- owner dashboard/approval;
- customer timeline;
- external portal;
- keyboard/screen reader/status/error summaries;
- mobile/tablet/desktop;
- user tests across all represented departments.

## Completion/acceptance

- 12 end-to-end process families cover all current and planned department groups.
- 20 shared screens and 16 detailed flows are defined.
- Every process stage has owner, participants, readiness, output, exception, communication, and metrics.
- All applications expose shared context without duplicating domain records.
- All departments can create/receive linked work through permission-scoped queues.
- Owner can see outcome, bottleneck, department owner, risk, approval, and next action.
- Customer/supplier/vendor/platform support are connected through scoped portals/handoffs.
- IT and printing are connected to every affected process.

## Rollout

```text
CDF-00 approve process catalog/departments/roles
CDF-01 schema/event/permission foundation
CDF-02 process instance/stage/link/timeline projection
CDF-03 shared task/handoff/blocker APIs
CDF-04 notification/approval/communication integration
CDF-05 My Work/process header/linked-record panel
CDF-06 E2E-01 repair process pilot
CDF-07 source-to-pay/inventory/accounting
CDF-08 HR/access/IT onboarding-offboarding
CDF-09 CRM/marketing/customer/warranty
CDF-10 IT/change/incident/printing connections
CDF-11 owner/branch/customer/external dashboards
CDF-12 BI/AI/public API projections
CDF-13 security/accessibility/reliability tests
CDF-14 branch/tenant pilot
CDF-15 progressive rollout and process recertification
```

## Rollback

- disable process version/feature flag for new instances;
- let existing instances finish under pinned version or migrate through approved plan;
- revert projection/UI while preserving domain operations;
- pause automation and use manual linked tasks/handoffs;
- replay/rebuild shared projections from domain events;
- preserve all audit/history;
- reconcile blockers/tasks/notifications after restore.

## Coding restrictions

- Exact `implementation_authorized=true` required per slice.
- Do not create a shared mega-table containing all domain data.
- Do not replace domain APIs/statuses with generic workflow state.
- Do not allow departments to edit another domain's records through the fabric.
- Do not implement AI auto-approval/protected execution.
- Do not publish a process definition without traceability and tests.
- Each vertical slice includes schema, backend, API/events, UI, permissions, failures, tests, documentation, and evidence.
