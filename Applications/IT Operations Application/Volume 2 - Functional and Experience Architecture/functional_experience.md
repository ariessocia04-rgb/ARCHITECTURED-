# IT OPERATIONS APPLICATION — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Purpose

Define all IT Operations modules, staff/owner experiences, navigation, search, dashboards, workflows, communications, knowledge, failure states, and service handoffs.

## Global shell

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Brand | Tenant/Branch | Environment | Search | P1 Incident | On-call │
├───────────────────┬──────────────────────────────────────────────────┤
│ IT Dashboard      │ Breadcrumb / Title / Status / Primary action    │
│ Service Desk      ├──────────────────────────────────────────────────┤
│ Incidents         │ Impact / next action / owner / due target       │
│ Problems          ├──────────────────────────────────────────────────┤
│ Changes           │ Main workspace                                  │
│ Assets            │                                                  │
│ Printers          │ Timeline / evidence / diagnostics / approvals   │
│ Access            │                                                  │
│ Integrations      │                                                  │
│ Monitoring        │                                                  │
│ Releases          │                                                  │
│ Recovery          │                                                  │
│ Knowledge         │                                                  │
│ Vendors           │                                                  │
│ Reports           │                                                  │
│ Settings          │                                                  │
└───────────────────┴──────────────────────────────────────────────────┘
```

## 1. IT Operations Dashboard

Business-oriented summary:

- active P1/P2 incidents;
- services degraded/unavailable;
- branches/users affected;
- open service requests by age/priority;
- printers/agents/integrations offline;
- monitoring alerts awaiting triage;
- changes today and maintenance windows;
- backup/restore risks;
- security alerts;
- vendor/platform escalations;
- target/SLA risk;
- on-call owner;
- recent resolutions and repeat issues.

Role views:

- Service Desk sees assigned queue and knowledge suggestions.
- IT Manager sees capacity, risk, trends, approvals, and major incidents.
- Owner sees business impact, downtime, cost, unresolved risk, and approvals.
- Branch Manager sees branch-only health and workarounds.

## 2. Service Desk

Functions:

- receive requests from contextual `Get help`, portal form, email ingestion, approved chat/integration, or manual logging;
- identify requester and branch;
- classify service/category/affected asset;
- impact and urgency assessment;
- duplicate/related-ticket suggestions;
- knowledge/runbook recommendations;
- assignment and escalation;
- user communication;
- work notes vs customer/staff-visible updates;
- approvals and fulfilment tasks;
- requester validation and closure;
- reopen with policy.

Staff request experience:

```text
What do you need help with?
→ choose affected work: Printing / Login / Payment screen / Integration / Other
→ system pre-fills page, record reference, printer/device, error code, branch
→ describe impact
→ attach safe screenshot/log when permitted
→ show immediate guided fix/knowledge
→ submit
→ receive ticket number, owner, update expectations, and workaround
```

## 3. Incidents

Functions:

- detection from monitoring or staff report;
- severity/priority;
- impacted services, branches, roles, workflows, printers, agents, integrations, and providers;
- incident commander/owner;
- investigation tasks;
- timeline and evidence;
- mitigation/workaround;
- status-page/staff/owner communications;
- vendor/platform escalation;
- recovery validation;
- linked changes/problems;
- post-incident review and corrective actions.

Major incident workspace shows:

```text
Impact: what users/business cannot do
Current status
Incident commander
Technical leads
Business owner
Timeline
Mitigation tasks
Communication updates
Affected services/dependencies
Next update time
Decision log
Recovery checks
```

## 4. Problems and Root Cause

- recurring incident detection;
- known-error database;
- symptom/cause distinction;
- contributing factors;
- workaround;
- root-cause analysis;
- permanent-fix proposal;
- linked change/release;
- verification and recurrence monitoring;
- lessons learned and knowledge publication.

A problem is not auto-closed when one incident resolves.

## 5. Changes and Approvals

Change types:

```text
STANDARD — pre-approved repeatable low-risk runbook
NORMAL — assessed and approved
EMERGENCY — urgent restore/protect action with retrospective review
```

Change content:

- objective;
- affected configuration items/services;
- business/technical reason;
- risk and impact;
- security/privacy/financial implications;
- dependencies/conflicts;
- test evidence;
- implementation steps;
- maintenance window;
- owner/approvers;
- user communication;
- validation plan;
- rollback trigger and steps;
- result/post-change review.

Calendar detects overlapping branch/service/provider changes.

## 6. Assets, Workstations, and Devices

Asset types:

- branch workstations;
- laptops/tablets/mobile devices;
- printers/label printers/scanners;
- routers/network equipment when tenant-managed;
- local print agents/connectors;
- approved peripherals;
- software installations/licenses where tracked;
- certificates/keys as references, not secret values.

Functions:

- inventory and ownership;
- location/branch/workstation mapping;
- status and lifecycle;
- hardware/OS/firmware/version;
- warranty/vendor/maintenance;
- configuration baseline;
- compliance/health;
- related incidents/changes;
- disposal and data-clearance evidence.

## 7. Printers and Peripherals

References the canonical Printing package.

IT functions:

- printer fleet and status;
- local print agents;
- discovery/enrollment;
- capabilities and compatibility certification;
- document-profile mappings;
- branch/workstation defaults;
- queue/failure/reconciliation;
- test prints using synthetic data;
- supplies/maintenance;
- driver/IPP/vendor adapter lifecycle;
- incidents/changes/knowledge;
- usage and cost.

Owner experience:

- online/offline fleet by branch;
- business workflows affected;
- failure/reprint trends;
- approvals and replacement needs;
- cost/usage;
- no raw device-command UI.

Staff experience remains contextual and simple:

- printer status;
- recommended action;
- alternative printer/digital output;
- create prefilled IT ticket.

## 8. Identity and Access Requests

Requests:

- new user/app/branch access;
- role change;
- temporary access;
- contractor/vendor access;
- MFA reset;
- account recovery;
- SSO/group mapping;
- access removal;
- emergency access.

Workflow:

```text
Request → identity/requester verification → policy validation
→ owner/manager/data-owner approval → fulfilment
→ user notification → validation → audit → expiry/review
```

IT fulfils approved access but cannot approve owner-only or high-risk access by itself.

## 9. Integrations and Credentials

- connection inventory;
- provider and business owner;
- OAuth/API/webhook/agent connection type;
- secret reference and rotation status;
- health and last successful exchange;
- rate limits/quotas;
- mappings and versions;
- retries/dead letters;
- reconciliation;
- incidents and planned maintenance;
- enable/disable/change with approval;
- vendor support;
- decommission/export.

Never reveal secret values in ordinary UI/logs.

## 10. Monitoring and Alerts

Monitoring domains:

- application/business workflow health;
- API latency/errors;
- background jobs/queues;
- database/storage/cache;
- files/rendering/printing;
- email/SMS/push;
- payments/provider reconciliation;
- integrations/webhooks;
- authentication/access anomalies;
- agents/printers/workstations;
- backups/restores;
- security signals;
- subscription/resource limits.

Alert lifecycle:

```text
NEW → ACKNOWLEDGED → TRIAGED → LINKED_TO_INCIDENT / SUPPRESSED_WITH_REASON
→ RESOLVED → REVIEWED
```

Alert noise controls include deduplication, grouping, correlation, maintenance suppression, severity, ownership, and runbook links.

## 11. Releases, Deployments, and Maintenance

Tenant-visible technical operations:

- upcoming platform release/maintenance notices;
- tenant configuration release;
- agent/connector update;
- integration mapping/version rollout;
- printer/profile update;
- feature enablement;
- staged deployment status;
- validation/rollback;
- release notes and user impact;
- training/knowledge readiness.

Tenant IT cannot deploy platform source code but can coordinate tenant-side readiness and approved local components.

## 12. Backup, Recovery, and Continuity

- backup policy visibility;
- backup job/health summary when tenant-visible;
- authorized restore request;
- restore scope/point preview;
- identity/authority verification;
- business/financial/legal hold checks;
- restore test and evidence;
- branch offline/continuity procedures;
- disaster recovery communications;
- post-recovery reconciliation.

A restore never bypasses platform data-integrity procedures.

## 13. Knowledge Base and Runbooks

Content types:

- staff how-to;
- IT diagnostic article;
- standard operating procedure;
- incident runbook;
- change runbook;
- printer setup/troubleshooting;
- integration recovery;
- access recovery;
- maintenance checklist;
- known error/workaround;
- post-incident lesson.

Lifecycle:

```text
DRAFT → TECHNICAL REVIEW → SECURITY/OWNER REVIEW when required
→ PUBLISHED → REVIEW DUE → UPDATED / RETIRED → ARCHIVED
```

Staff-facing articles use plain language and screenshots/steps without secrets.

## 14. Vendors and Platform Support

- vendor contracts/support contacts;
- service/product/assets covered;
- support level and hours;
- ticket/reference history;
- maintenance and known issues;
- data/access/security requirements;
- escalation contacts;
- platform support-access request;
- scoped diagnostic bundle;
- tenant-visible support session timeline;
- findings and follow-up actions.

## 15. Reports, Audit, and Compliance

Reports:

- ticket volume/age/resolution;
- incident severity/downtime/business impact;
- recurring problems;
- change success/failure/rollback;
- asset and software lifecycle;
- printer/agent fleet and usage;
- integration health;
- access request/privilege review;
- alert quality/noise;
- backup/recovery readiness;
- vendor performance;
- knowledge usage/gaps;
- audit and policy exceptions;
- IT cost/capacity.

Reports preserve role, branch, record, and field scope.

## 16. IT Policies and Settings

Versioned settings:

- service catalog and categories;
- priority matrix;
- assignment/escalation;
- on-call/notification;
- approval matrix;
- change types/risk;
- maintenance calendar;
- asset classes/baselines;
- printer/agent policies;
- monitoring/alert rules;
- access request rules;
- knowledge review;
- vendor/support rules;
- retention;
- automation/runbook permissions.

Protected changes require impact preview, approval, publication, monitoring, and rollback.

## 17. Profile and On-Call

- profile/skills/certifications;
- assigned teams/services/branches;
- shift/on-call status;
- escalation contact;
- notification preference;
- workload/assigned tickets;
- recent activity;
- delegated backup;
- session/device security.

## Cross-application UX

### Front Desk

- contextual `Get help` from intake/payment/release/printing;
- prefilled customer-safe record references;
- branch printer status;
- ticket status/workaround notifications.

### Technician

- help from job/diagnosis/testing/parts screens;
- device/app sync/QR/printer issues;
- no need to understand integration or infrastructure terms.

### Finance/Cashier

- payment/receipt/invoice/provider technical issue path;
- clearly states whether payment succeeded independently of print/provider UI;
- protected financial content remains restricted.

### Inventory

- label printer/scanner/stock integration help;
- batch print failure context;
- hardware maintenance status.

### Owner

- executive IT health;
- incident impact and communication;
- risk/cost/approvals;
- change calendar;
- branch comparison;
- vendor/platform performance.

### Customer Portal

- only customer support/service status appropriate to customer records;
- no internal IT diagnostics.

## Search

Global IT search supports:

- ticket/incident/problem/change number;
- asset/printer/agent;
- service/integration;
- branch/user by authorized scope;
- knowledge/runbook;
- vendor reference;
- support reference/error code.

Search applies field-level restrictions and does not reveal protected record existence.

## Automation

Allowed examples:

- route printer-offline alerts;
- suggest knowledge articles;
- group duplicate alerts/incidents;
- create recurring maintenance tasks;
- expire temporary access;
- notify change conflicts;
- open incident from critical monitored condition;
- request owner approval;
- run approved read-only diagnostics;
- reconcile printer/integration/provider status.

Protected or destructive automation requires explicit scope, approval, dry run, audit, stop control, and rollback.

## Error and recovery UX

Every staff-facing error states:

1. what they attempted;
2. whether their business work was saved/completed;
3. what is affected;
4. safe next action or workaround;
5. IT ticket/support reference.

IT-facing diagnostics add:

- component/dependency;
- normalized code;
- correlation ID;
- timeline;
- recent changes;
- health signals;
- suggested runbook;
- escalation path.

Raw secrets, stack traces, and unrelated tenant data are prohibited.

## Acceptance criteria

- Full IT lifecycle exists, not only ticket notes.
- All staff applications have simple help/status paths.
- Owner UX focuses on business impact and decisions.
- IT UX provides detail, evidence, dependencies, and runbooks.
- Printing is fully integrated through the canonical package.
- Identity, monitoring, changes, incidents, assets, vendors, and recovery are connected through links/timelines.
