# RELEASE 1 MVP — RESEARCH AND DECISION REGISTRY

## Purpose

Record the official-source and repository evidence used to lock the Release 1 boundary and technology direction. External sources support decisions but become project truth only through this published package.

## Repository authorities reused

- `1plan.md` — governance, completion, duplicate control, and implementation gates.
- `TECA/IMPLEMENTATION_BUILD_PLAN.md` — foundation-first vertical slices and BUILD-00 through release gates.
- `SaaS Platform/Plans and Billing/INDEX.md` — Free/Pro/Premium, entitlement, quota, and lifecycle rules.
- `SaaS Platform/Printing and Peripheral Operations/INDEX.md` — print profiles, adapters, queue, local agent, and hardware evidence.
- `Applications/IT Operations Application/INDEX.md` — service desk, incidents, assets, printers, integrations, and support boundaries.
- `SaaS Platform/Cross-Department Operating Fabric/INDEX.md` — shared process, task, handoff, approval, blocker, timeline, and event coordination.
- Core application and Design indexes — staff/customer workflows and UX rules.

## Official technology references

### Node.js

- Source: Node.js release archive and release schedule.
- Decision: Node.js 24 LTS is the Release 1 server/build runtime. Node 26 remains Current until October 2026 and is not selected for the pilot.
- Locked baseline: `24.14.1`.
- Upgrade policy: security patches within Node 24 require CI validation; major upgrade requires ADR and full regression.

### Next.js and React

- Source: official Next.js 16 and 16.1 release notes; official React 19.2 release.
- Decision: Next.js 16.1 with React 19.2, App Router, server components, route handlers, and explicit cache behavior.
- Boundary: do not rely on experimental framework features for protected business actions.

### TypeScript

- Source: official TypeScript 5.9, 6.0, and 7.0 release announcements.
- Decision: TypeScript 5.9 is selected for the initial pilot because TypeScript 7 is newly released and requires a separate ecosystem-compatibility pass.
- Upgrade policy: TypeScript 6/7 adoption requires Next.js, Supabase SDK, test tools, generated types, and editor/CI compatibility evidence.

### Supabase and PostgreSQL

- Sources: Supabase local-development, Auth, Storage, Realtime, Queues, Cron, pricing, security guidance, and 2026 breaking-change changelog.
- Decision: Supabase is the integrated platform layer for PostgreSQL 17, Auth, Storage, Realtime Broadcast, Queues, Cron, and local development.
- Security decisions:
  - new tables are not assumed to be exposed automatically;
  - explicit grants and RLS are separate required controls;
  - every exposed table uses tenant-aware RLS;
  - private Realtime channels are required;
  - service-role/secret keys never enter browser code;
  - authorization data is not trusted from user-editable metadata;
  - SQL migrations and generated database types are version controlled.
- Cost decision: local Supabase is the default development environment. The hosted Free plan may support development/pilot evaluation but is not production evidence because it can pause after inactivity and lacks production backup guarantees.

### Realtime, queues, and scheduling

- Decision: private Supabase Realtime Broadcast is used for UI notifications and status projections. Raw Postgres Changes is limited to development or low-volume cases.
- Decision: durable `pgmq` queues are used for print jobs, document generation, notifications, outbox processing, and reconciliation. Unlogged queues are prohibited for financial, release, audit, or printer-delivery work.
- Decision: Supabase Cron/`pg_cron` schedules maintenance and queue consumers within published concurrency/runtime limits.

### Printer standards and operating systems

- Sources: Printer Working Group IPP Everywhere, Apple AirPrint, Android Print Framework, Microsoft Modern Print Platform/Print Support Apps, and the canonical Printing package.
- Decisions:
  - IPP Everywhere is the preferred driverless network-printer path;
  - browser/OS printing is broad fallback but is not physical completion confirmation;
  - Windows 11 is the primary staff workstation pilot target;
  - Android/iOS/macOS use native/OS printing for generated PDFs where supported;
  - silent USB/LAN thermal printing requires the approved local agent;
  - exact physical models remain uncertified until laboratory and branch-pilot tests pass.

### Local print agent

- Source: Tauri 2 stable/release documentation and security model.
- Decision: Tauri 2 with Rust is selected for the local print agent/tray application.
- Locked framework baseline: Tauri `2.11.2`.
- Boundary: the agent accepts only signed, tenant/branch/workstation-scoped print jobs through a loopback or mutually authenticated channel. It is not a general remote-command agent.

## Rejected alternatives for Release 1

### Premature microservices

Rejected because they multiply deployment, networking, observability, security, and cost before domain and traffic evidence exists. Domain packages and outbox/event contracts preserve later extraction options.

### Separate copied business logic per application

Rejected. Owner, Front Desk, Technician, Customer, IT, and platform views use the same domain services and data authority.

### Frontend-only authorization

Rejected. UI visibility is convenience only; database, server, queue, file, realtime, export, and print operations enforce the same tenant/permission/entitlement rules.

### Universal direct-browser silent printing

Rejected because browsers do not provide one safe universal API for silently controlling every physical printer.

### Free-tier production guarantee

Rejected. Local development can be free; public production reliability, backups, support, email/SMS, payment processing, and hardware certification may require paid infrastructure.

### TypeScript 7 for the first pilot

Deferred because it was newly released in July 2026. A later upgrade can be approved after ecosystem and generated-type validation.

## Decision status

```text
REPOSITORY SOURCE REVIEW: COMPLETE
OFFICIAL SOURCE REVIEW: COMPLETE
RELEASE-1 ARCHITECTURE STYLE: LOCKED
CORE RUNTIME/FRAMEWORK DIRECTION: LOCKED
DATABASE/PLATFORM DIRECTION: LOCKED
PRINTER STRATEGY: LOCKED BY CAPABILITY TIER
PHYSICAL MODEL CERTIFICATION: PENDING TEST EVIDENCE
LIVE PRODUCTION PROVIDERS: OWNER/RELEASE APPROVAL REQUIRED
```