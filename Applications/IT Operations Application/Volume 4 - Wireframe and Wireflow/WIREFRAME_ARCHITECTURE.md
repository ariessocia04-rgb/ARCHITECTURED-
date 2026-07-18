# IT OPERATIONS APPLICATION — WIREFRAME ARCHITECTURE

## Purpose

Define low-fidelity screens for ordinary staff, IT specialists, managers, owners, auditors, vendors, and approved platform support. The design separates simple help experiences from technical workspaces while keeping every record connected through shared service, asset, incident, change, and audit context.

## Screen IT-01 — Staff Get Help Panel

Available contextually from every staff application.

```text
┌───────────────────────────────────────────────────────────────┐
│ Get help                                                      │
├───────────────────────────────────────────────────────────────┤
│ We detected: Receipt printer is offline                       │
│ Your payment is safely recorded.                              │
│                                                               │
│ Try now                                                       │
│ 1. Choose another approved printer                            │
│ 2. Email or download the receipt                              │
│ 3. Check power/paper if safe                                  │
│                                                               │
│ Need IT help?                                                 │
│ Impact [Customer waiting ▼]                                   │
│ Details [prefilled page, branch, printer, error reference]    │
│ [Create support ticket]                                       │
└───────────────────────────────────────────────────────────────┘
```

Rules:

- states whether the business action succeeded;
- pre-fills safe context;
- does not expose logs/secrets;
- suggests a verified workaround/knowledge item;
- returns ticket number, owner, status, and update expectation.

## Screen IT-02 — My Requests and IT Status

Ordinary staff see:

- open/closed requests;
- current owner/team;
- status in plain language;
- latest update and next action;
- workaround;
- requested information/approval;
- planned maintenance relevant to branch/application;
- current service-health banner.

## Screen IT-03 — IT Operations Dashboard

```text
┌──────────────────────────────────────────────────────────────────────┐
│ IT Operations                  Tenant: ABC Repairs  Branch: All      │
├─────────────┬─────────────┬─────────────┬─────────────┬──────────────┤
│ P1/P2       │ Requests    │ Offline     │ Failed      │ Changes      │
│ 1 / 3       │ 42 open     │ 4 printers  │ 2 connects  │ 3 today      │
├──────────────────────────────────────────────────────────────────────┤
│ Service health: Authentication | Front Desk | Printing | Payments   │
├──────────────────────────────────────────────────────────────────────┤
│ Priority queue                  │ Branch/business impact             │
│ On-call / escalations           │ Approvals and risks                │
│ Monitoring alerts               │ Upcoming maintenance               │
└──────────────────────────────────────────────────────────────────────┘
```

Role variations:

- analyst: assigned work;
- manager: capacity/risk;
- owner: business impact/cost/decision;
- branch manager: branch-only status.

## Screen IT-04 — Service Desk Queue

Columns/cards:

- ticket number;
- type/category;
- requester/branch;
- affected service/asset;
- impact/urgency/priority;
- status and wait reason;
- assigned team/person;
- target risk;
- latest update;
- suggested knowledge/duplicate incident.

Filters remain shareable and permission-scoped.

## Screen IT-05 — Service Request Workspace

Header:

```text
REQ-000245 • Printer access/setup • P3 • In progress
Requester: Maria • Branch: Boroko • Owner: Endpoint Team
```

Workspace sections:

- user-visible summary/status;
- request details;
- related service/asset/application;
- fulfilment tasks;
- approvals;
- knowledge/runbook;
- requester communication;
- internal work notes;
- timeline/evidence;
- resolution and user validation.

## Screen IT-06 — Incident Queue

Views:

- active by severity;
- unacknowledged;
- major incidents;
- branch/service/provider;
- awaiting vendor/platform;
- monitoring-created vs user-reported;
- recently resolved awaiting review.

## Screen IT-07 — Major Incident Command Workspace

```text
┌──────────────────────────────────────────────────────────────────────┐
│ INC-000078 • Printing unavailable in 3 branches • P1                │
│ Status: Mitigating • Commander: A. Cruz • Next update: 10:30        │
├──────────────────────┬───────────────────────────────────────────────┤
│ Business impact      │ Timeline / decision log                       │
│ Affected branches    │ Investigation tasks                           │
│ Affected services    │ Mitigation and validation                     │
│ Workaround           │ Vendor/platform support                       │
│ Current communication│ Metrics/log/trace links (restricted)          │
├──────────────────────┴───────────────────────────────────────────────┤
│ [Publish update] [Create emergency change] [Mark mitigated]         │
└──────────────────────────────────────────────────────────────────────┘
```

## Screen IT-08 — Incident Update Composer

Shows audience variants:

- ordinary staff plain-language update;
- branch manager impact/workaround;
- owner executive update;
- IT technical update;
- customer-safe status when approved.

Requires next-update time and avoids unverified root-cause claims.

## Screen IT-09 — Problem / Root Cause Workspace

Sections:

- recurring symptoms and linked incidents;
- affected service/CI graph;
- known error/workaround;
- hypotheses/evidence;
- root cause and contributing factors;
- permanent fix/change;
- recurrence metrics;
- knowledge/lesson;
- verification and closure.

## Screen IT-10 — Change Calendar

Calendar/list displays:

- normal/standard/emergency changes;
- branch/service/environment;
- risk;
- downtime/customer impact;
- owner/implementer;
- approval;
- conflicts/dependencies;
- maintenance window;
- release/platform events.

## Screen IT-11 — Change Request Workspace

```text
Change summary and type
Affected services/CIs/branches
Impact and risk assessment
Security/privacy/finance checks
Implementation plan
Test evidence
Validation plan
Rollback plan
Communications
Approvals
Schedule
Execution timeline and result
```

A protected final action requires review and confirmation.

## Screen IT-12 — Asset and Configuration Inventory

Views:

- assets;
- configuration items;
- workstations;
- printers/peripherals;
- integrations/connectors;
- software/versions;
- warranties/vendors;
- compliance/baseline;
- lifecycle status.

The list supports branch, type, owner, health, warranty, and lifecycle filters.

## Screen IT-13 — Asset / Configuration Item Detail

Shows:

- identity and status;
- business/technical owner;
- branch/location/user assignment;
- hardware/OS/firmware/version;
- approved baseline and drift;
- related services and dependency graph;
- printers/agents/integrations;
- incidents/problems/changes;
- warranty/vendor/maintenance;
- audit and disposal evidence.

## Screen IT-14 — Printers and Peripherals

Uses canonical Printing package screens for fleet, printer detail, enrollment, agent management, queue, compatibility, and policies. IT application adds:

- linked incidents/changes/assets;
- owner/business impact;
- vendor case;
- knowledge/runbook;
- maintenance schedule.

## Screen IT-15 — Identity and Access Request

Steps:

```text
1. Request type and user
2. Application/branch/role/access duration
3. Business reason
4. Policy and conflict preview
5. Required approvals
6. Fulfilment
7. Verification
8. Expiry/review
```

No password or secret is displayed.

## Screen IT-16 — Integration Health Center

```text
Integration       Owner      Status      Last success   Queue  Action
Payment provider  Finance    Degraded    8m             12     Open
Email             IT/CS      Healthy     1m             0      Open
Accounting export Finance    Failed      2h             3      Open
Print agent       Branch IT  Offline     20m            18     Open
```

Detail includes mappings, versions, rate limits, retries, dead letters, reconciliation, incidents, changes, and secret-rotation status without secret values.

## Screen IT-17 — Monitoring and Alert Center

- alert stream/grouping;
- service health model;
- severity and owner;
- deduplicated occurrence count;
- impacted services/branches;
- maintenance suppression;
- suggested runbook;
- acknowledge/link/create incident/suppress with reason.

## Screen IT-18 — Release and Maintenance Center

- upcoming platform notices;
- tenant configuration releases;
- agent/connector updates;
- printer/profile updates;
- feature enablement;
- staged rollout;
- validation/rollback;
- release notes/training readiness;
- branch/user communication.

## Screen IT-19 — Backup, Restore, and Continuity

Owner/IT view:

- backup health summary;
- last successful evidence;
- restore tests;
- approved restore request;
- selected scope/point preview;
- business/legal/financial checks;
- recovery communication;
- post-restore reconciliation;
- branch continuity plans and drills.

## Screen IT-20 — Knowledge and Runbooks

Cards/list:

- staff how-to;
- known issue/workaround;
- IT diagnostic;
- incident/change runbook;
- printer/integration guide;
- owner continuity guide.

Search uses context and permissions. Articles display audience, owner, version, last review, next review, and related services/assets/tickets.

## Screen IT-21 — Runbook Execution

```text
Runbook: Restore branch print-agent service
Risk: Medium • Required role: Endpoint Admin
Scope: Boroko Print Gateway
Inputs: selected approved fields
Approvals: Complete
Steps: 1/8 … evidence per step
[Pause] [Abort safely] [Start rollback]
```

Automation never hides manual steps, evidence, or rollback.

## Screen IT-22 — Vendor and Platform Support Center

- vendor contracts/services/assets;
- open cases and references;
- response/escalation status;
- approved diagnostic bundle;
- platform support-access request;
- access scope/reason/expiry;
- support session timeline;
- findings and action items.

## Screen IT-23 — Owner IT Governance Dashboard

```text
Service availability and business impact
Major incidents and downtime
Support queue and staff productivity impact
Branch technology health
Printer/agent/integration fleet
Change success/failure/rollback
Security/access risk
Backup/recovery readiness
Vendor/platform support performance
IT usage/cost/replacement needs
Approvals and overdue corrective actions
```

The owner can drill down only according to role/field scope and sees business language first.

## Screen IT-24 — IT Reports and Audit

- service/ticket/incident/problem/change metrics;
- asset/printer/integration health;
- access and support sessions;
- alert noise/quality;
- backup/recovery drills;
- vendor performance;
- knowledge/runbook use;
- policy exceptions;
- immutable audit timeline;
- scheduled reports and exports.

## Screen IT-25 — IT Policies and Configuration

Versioned editors for service catalog, priority, assignment, escalation, on-call, approvals, change risk, asset baselines, printer/agent rules, alerts, access, knowledge, retention, vendors, and automation permissions.

## Screen IT-26 — On-Call and Profile

- IT team/service/branch assignments;
- shift/on-call status;
- escalation availability;
- skills/certifications;
- notification preferences;
- current workload;
- delegated backup;
- session/device security.

## Shared record workspace pattern

All IT record workspaces use:

```text
Header: number • type • priority/risk • status • owner
Impact strip: affected service/branch/user/business workflow
Next action strip: action • responsible person • target
Tabs/panels:
- Summary
- Tasks
- Timeline
- Dependencies
- Evidence/Diagnostics
- Approvals
- Communications
- Related Records
- Audit
```

## Responsive and accessibility rules

- Staff help/request/status is mobile-first.
- Analyst/manager dense workspaces are desktop-first but tablet-operable.
- Lists use responsive cards/detail drawers and accessible local horizontal scrolling when necessary.
- Status never uses color alone.
- Timeline, charts, and dependency graphs have textual/table alternatives.
- All protected decisions have visible confirmation, impact, and recovery.
- Loading, empty, offline, permission, stale, conflict, failure, and success states are defined for every screen.
