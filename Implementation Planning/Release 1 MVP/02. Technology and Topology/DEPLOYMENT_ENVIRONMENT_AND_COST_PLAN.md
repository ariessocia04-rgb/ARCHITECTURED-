# RELEASE 1 MVP — DEPLOYMENT, ENVIRONMENT, AND COST PLAN

## Goal

Keep development and architecture validation near zero cost while refusing to claim that a reliable public production SaaS can operate permanently without infrastructure, backup, email/SMS, payment, domain, support, and hardware costs.

## Environment model

```text
LOCAL
→ CI TEST
→ SHARED DEVELOPMENT
→ UAT / PILOT STAGING
→ CONTROLLED PILOT
→ PUBLIC PRODUCTION — separate release
```

## Local environment

### Required services

- Node.js/pnpm workspace.
- Local Supabase stack through Supabase CLI and a container runtime.
- Local Postgres/Auth/Storage/Realtime/Functions services.
- Mailpit or equivalent local email catcher.
- Mock payment/subscription provider adapter.
- Mock print adapter and virtual printer fixtures.
- Optional Windows local print-agent test workstation.

### Cost posture

Local development is the default and does not consume hosted project quotas. No local service is exposed directly to the public internet.

## CI test environment

### GitHub Actions responsibilities

- deterministic install using frozen lockfiles;
- format, lint, TypeScript, build;
- unit/component tests;
- database migration reset and upgrade tests;
- RLS and tenant-isolation tests;
- API/contract tests;
- Playwright critical-path tests;
- Rust/Tauri format, clippy, tests, audit;
- dependency, secret, license, and static-security checks;
- document golden-file tests;
- mock printer-agent protocol tests;
- artifact and evidence upload.

CI never receives production secrets or production customer data.

## Shared development

### Recommended low-cost arrangement

- One hosted Supabase Free project may be used for shared development/integration while quotas and pause behavior are acceptable.
- Local environments remain the authoritative migration-development path.
- Shared development data is synthetic.
- Free hosted projects are not production and may pause after inactivity.
- A second Free project may be reserved for UAT only if current account limits allow it; otherwise UAT uses a resettable self-hosted or paid environment.

### Spend control

- Spend cap enabled where supported.
- No automatic overage approval.
- Alerts at 50%, 75%, 90%, and 100% of database, storage, egress, realtime, function, email, and other provider quotas.
- Owner approval required before any paid upgrade.

## UAT / pilot staging

Must be isolated from shared development.

Required:

- production-like configuration and migrations;
- synthetic or explicitly approved pilot data;
- exact release candidate build;
- exact browser/OS/printer test matrix;
- backup and restore rehearsal;
- queue/dead-letter/replay rehearsal;
- local print-agent signed package;
- test email domain or safe delivery sandbox;
- incident and rollback runbooks;
- named UAT users for every required role.

A free-tier project may be used only when its limitations do not invalidate UAT objectives. Otherwise the owner must approve temporary paid staging or self-hosted infrastructure.

## Controlled pilot

### Allowed use

- One approved business/branch.
- Named users.
- Limited customer/job volume.
- Explicit support window.
- Daily monitoring and issue review.
- Manual approval before enabling real customer records.
- Immediate rollback/disable path.

### Required reliability controls

- Automated backups appropriate to the chosen provider, or verified external backup process.
- Daily export of critical schema/configuration and backup evidence.
- Queue and print-job monitoring.
- Local-agent/printer health dashboard.
- Owner/IT incident contact.
- Data retention and deletion policy.
- Tested restore and rollback.

Supabase Free lacks automatic production backup guarantees and can pause; therefore it is not approved as the final public-production database.

## Public production — out of Release 1

Requires a separate release and owner approval for:

- paid or self-hosted database with backup/restore/SLA evidence;
- web/container hosting and region;
- custom domain and TLS;
- transactional email provider and domain reputation;
- SMS/push provider when enabled;
- payment/subscription provider and compliance controls;
- monitoring/error/trace retention;
- object storage/egress capacity;
- support staffing and incident response;
- security assessment and production penetration testing;
- printer support/certification program;
- disaster recovery objectives.

## Provider-neutral deployment topology

```text
Internet
→ CDN/WAF/TLS endpoint
→ Next.js web container/runtime
→ Supabase-managed or approved self-hosted services
   ├── PostgreSQL 17
   ├── Auth
   ├── Storage
   ├── Realtime
   ├── Queues
   └── Cron/Functions

Branch LAN
→ Windows workstation
→ Tauri local print agent
→ OS print queue / IPP / ESC-POS printer
```

The web application must be deployable as a container/standalone Node build and must not depend on a single web host's proprietary runtime for core domain behavior.

## Data environment rules

| Environment | Data class |
|---|---|
| Local | synthetic only |
| CI | generated fixtures only |
| Shared development | synthetic only |
| UAT | synthetic or approved masked pilot data |
| Controlled pilot | approved limited business/customer data |
| Public production | separately authorized |

Production snapshots cannot be copied into development without approved masking, minimization, access, retention, and audit.

## Environment configuration

Each environment has:

- separate project/database/storage/auth realm;
- separate URLs and publishable keys;
- separate secret store;
- separate local-agent enrollment authority;
- separate email/payment/provider modes;
- separate telemetry destination;
- environment banner and release SHA;
- validated configuration schema;
- no implicit fallback to another environment.

## Cost ledger categories

The Owner dashboard and implementation runbook track:

- database compute/storage/backups;
- web hosting/build/egress;
- object storage/egress;
- realtime messages/connections;
- functions/queue/cron usage;
- email/SMS/push;
- payment-provider fees;
- domains/TLS when applicable;
- monitoring/log retention;
- local print-agent signing/distribution;
- printer hardware, paper, labels, cables, network setup;
- support and security testing.

## Free/low-cost guardrails

- Use local Supabase for ordinary development.
- Use synthetic fixtures instead of hosted manual records.
- Do not create multiple unused hosted projects.
- Pause/delete disposable environments after evidence export.
- Prefer PostgreSQL search/queues/realtime before adding external paid services.
- Do not enable AI, SMS, high-volume email, BI warehouse, or public API in R1.
- Do not buy hardware before the printer candidate matrix and test procedure are approved.
- Never hide expected production costs behind a false free-tier promise.

## Decision status

```text
LOCAL ZERO/LOW-COST DEVELOPMENT PLAN: LOCKED
SHARED FREE-TIER DEVELOPMENT OPTION: APPROVED WITH LIMITATIONS
FREE-TIER PUBLIC PRODUCTION: NOT APPROVED
CONTROLLED PILOT INFRASTRUCTURE: PROVIDER/OWNER APPROVAL REQUIRED
PUBLIC PRODUCTION INFRASTRUCTURE: SEPARATE RELEASE
```