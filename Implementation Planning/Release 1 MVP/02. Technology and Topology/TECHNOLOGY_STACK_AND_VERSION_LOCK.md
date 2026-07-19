# RELEASE 1 MVP — TECHNOLOGY STACK AND VERSION LOCK

## Decision summary

Release 1 uses a cost-controlled modular monolith with one responsive web application, one Supabase/PostgreSQL platform layer, and one separately packaged local print agent.

All executable code for this release is stored inside the GitHub repository under the owner-selected canonical root:

```text
Codex Code/Implementation/
```

```text
Browser / PWA-capable Web UI
        ↓
Next.js server boundary and typed domain/application packages
        ↓
Supabase PostgreSQL/Auth/Storage/Realtime/Queues/Cron
        ↓
External provider adapters when approved

Windows Branch Workstation
        ↓
Tauri/Rust Local Print Agent
        ↓
OS Queue / IPP / ESC-POS / tested printer adapter
```

## Locked baseline versions

| Concern | Decision | Release 1 baseline |
|---|---|---|
| JavaScript runtime | Node.js LTS | `24.14.1` |
| Package manager | pnpm, committed lockfile | `10.34.0` |
| Web framework | Next.js App Router | `16.1.0` baseline; exact security patch pinned before bootstrap |
| UI runtime | React / React DOM | `19.2.0` |
| Type system | TypeScript | `5.9.x`; exact patch pinned in lockfile |
| Database/platform | Supabase with PostgreSQL | PostgreSQL `17`; project image/version recorded in release lock |
| Supabase CLI | local stack/migrations/types/functions | `2.101.0` baseline; reverify against current CLI before bootstrap |
| Local agent | Tauri | `2.11.2` baseline |
| Local-agent language | Rust stable | exact toolchain pinned in `rust-toolchain.toml` during authorized bootstrap |
| API contract | HTTP JSON + OpenAPI | OpenAPI `3.1`; typed request/response schemas |
| Async queue | Supabase Queues / pgmq | durable basic queues only for protected work |
| Scheduling | Supabase Cron / pg_cron | database functions or approved Edge Function calls |
| Realtime | Supabase Realtime Broadcast | private authorized channels |
| File storage | Supabase Storage | private buckets with RLS and signed access |
| PDF rendering | deterministic server-side document renderer | version-pinned library chosen in bootstrap ADR after fixture comparison |
| Thermal rendering | canonical ESC/POS command renderer | profile/adapter-driven, not vendor hardcoded |
| CI | GitHub Actions | pinned action SHAs/major versions and required checks |

## Version-lock rule

The versions above are architecture baselines. Before the first code commit, Codex must create and commit under `Codex Code/Implementation/`:

- `.nvmrc` or equivalent Node pin;
- `packageManager` with exact pnpm version;
- `pnpm-lock.yaml`;
- exact package versions, no `latest` or unbounded ranges;
- `supabase/config.toml` and migration baseline;
- local Supabase image/version record;
- `rust-toolchain.toml` and `Cargo.lock`;
- Tauri and plugin exact versions;
- `RELEASE_LOCK.json` containing all runtime, package, OS, browser, provider, and printer-adapter versions;
- dependency-review and upgrade policy.

A package update after lock requires a dedicated dependency PR, changelog/security review, and relevant regression tests.

## Repository implementation shape

```text
ARCHITECTURED-/
└── Codex Code/
    ├── Implementation/
    │   ├── apps/
    │   │   ├── web/
    │   │   │   ├── app/
    │   │   │   │   ├── (auth)/
    │   │   │   │   ├── (owner)/
    │   │   │   │   ├── (front-desk)/
    │   │   │   │   ├── (technician)/
    │   │   │   │   ├── (customer)/
    │   │   │   │   ├── (it-operations)/
    │   │   │   │   └── (platform-admin)/
    │   │   │   ├── server/
    │   │   │   └── tests/
    │   │   └── print-agent/
    │   │       ├── src-tauri/
    │   │       ├── ui/
    │   │       └── tests/
    │   ├── packages/
    │   │   ├── design-system/
    │   │   ├── domain/
    │   │   ├── contracts/
    │   │   ├── authorization/
    │   │   ├── database-types/
    │   │   ├── document-rendering/
    │   │   ├── printing-contracts/
    │   │   ├── observability/
    │   │   ├── configuration/
    │   │   └── testing/
    │   ├── supabase/
    │   │   ├── migrations/
    │   │   ├── functions/
    │   │   ├── tests/
    │   │   ├── seed.sql
    │   │   └── config.toml
    │   ├── tests/
    │   │   ├── contract/
    │   │   ├── integration/
    │   │   ├── e2e/
    │   │   ├── security/
    │   │   ├── accessibility/
    │   │   ├── performance/
    │   │   ├── recovery/
    │   │   └── hardware/
    │   ├── infrastructure/
    │   │   ├── ci/
    │   │   ├── environments/
    │   │   ├── containers/
    │   │   ├── monitoring/
    │   │   └── rollback/
    │   └── docs/
    │       ├── implementation/
    │       ├── runbooks/
    │       └── evidence/
    ├── Tasks/
    ├── Evidence/
    └── Reviews/
```

Root-level `apps/`, `packages/`, `supabase/`, `tests/`, and `infrastructure/` implementation trees are prohibited. If any implementation code is discovered outside `Codex Code/Implementation/`, Codex must stop and request an owner-authorized migration task rather than copy, delete, move, or recreate it.

The role-specific route groups do not create separate business logic. They call shared domain/application services and use one data authority.

## Web application decisions

### Rendering and routing

- Next.js App Router.
- Server Components for read-heavy shells and protected server-side loading.
- Client Components only when interaction, browser APIs, optimistic state, realtime, or offline draft behavior requires them.
- Route Handlers provide controlled HTTP APIs/webhooks/BFF endpoints.
- Server Actions may be used only for same-application form mutations with shared validation, authorization, idempotency, and audit; they are not the only contract for external/mobile/public integrations.
- Explicit cache policy; protected live operational records default to uncached or event-invalidated reads.

### UI and forms

- Tailwind CSS 4 baseline.
- Accessible headless primitives; shadcn/ui components may be copied into the owned design-system package and reviewed rather than consumed as opaque runtime behavior.
- Zod schemas shared at boundaries.
- React Hook Form for complex guided forms.
- TanStack Query only for client-side server state that benefits from retries/realtime/optimistic behavior; do not duplicate Server Component data unnecessarily.
- No Redux in R1 unless a measured cross-screen client-state requirement cannot be solved with URL, server state, or scoped context.

## Backend and domain decisions

### Modular monolith

- Domain modules: identity, tenancy, authorization, subscription, customer/device, jobs, dispatch, diagnosis, quotation, inventory, repair, testing/QC, finance/release, warranty/support, printing, IT, cross-department coordination, audit/notification.
- Controllers/routes never contain authoritative business rules.
- Commands and transactions enforce lifecycle and idempotency.
- Queries apply tenant/branch/role/field filtering.
- Transactional outbox connects domain writes to queues/realtime/notifications.

### API

- Internal web APIs: versioned `/api/v1/...` routes or equivalent typed server boundary.
- OpenAPI 3.1 generated/validated from canonical schemas.
- Standard error envelope, correlation ID, idempotency key, pagination, filtering, and optimistic concurrency version.
- Public API remains disabled in Release 1.

## Supabase/PostgreSQL decisions

### Schema ownership

- Exposed API schemas are minimized.
- Private schemas hold internal functions, outbox, queue helpers, audit internals, and privileged logic.
- Newly created tables are not assumed to have Data API grants.
- Explicit `GRANT` plus RLS is required for every exposed table/view/function.
- Views use security-invoker behavior where supported or remain unexposed.
- `SECURITY DEFINER` is exceptional, stored outside exposed schemas, revokes default PUBLIC execute, validates caller/scope, and receives security review.

### Authorization

- Supabase Auth proves identity.
- Tenant membership, role, permission, branch, record, field, entitlement, and lifecycle authorization come from canonical database records/policies/services.
- User-editable metadata is never authorization authority.
- Browser clients receive publishable keys only; secret/service-role keys remain server/secure-job only.
- RLS tests run for positive and negative cases on every tenant-owned table.

### Realtime

- Private Broadcast channels use topic pattern `tenant:<tenantId>:<scope>:<entity>`.
- Broadcast authorization policies mirror data scope.
- Presence is limited to operationally useful cases.
- Postgres Changes is not the default scalable production pattern.

### Queues and jobs

Durable queues:

- `domain-outbox`
- `document-generation`
- `print-jobs`
- `notifications`
- `reconciliation`
- `audit-projection`
- `it-automation`

Workers use visibility timeouts, attempt limits, idempotency keys, archive/dead-letter behavior, metrics, and replay controls. Financial, release, warranty, audit, and print-delivery work never uses an unlogged queue.

## Search and reporting

- PostgreSQL full-text search and `pg_trgm` for Release 1.
- Search results are permission filtered at query/database boundaries.
- Reports use SQL views/materialized projections with explicit tenant/branch/field policy.
- No external search engine or BI warehouse in Release 1.

## Document and printing stack

- Source data snapshot and template version are stored before rendering.
- PDF and print renderers produce checksums and fixture-test outputs.
- A4/Letter documents use deterministic page templates.
- Thermal receipts use 80 mm ESC/POS profile first; 58 mm after separate test.
- Print orchestration is server-owned; local agent executes only approved device delivery.
- Local agent uses Tauri/Rust tray UI, secure enrollment, loopback/native bridge, signed job tokens, workstation binding, local encrypted queue metadata, and OS/native adapters.

## Testing stack direction

Exact patch versions are pinned during bootstrap.

- Unit/component: Vitest and React Testing Library.
- Browser E2E: Playwright.
- API/contract: OpenAPI/schema tests plus integration fixtures.
- Database: Supabase local, SQL assertions/pgTAP where appropriate, migration reset/upgrade tests, RLS policy suite.
- Accessibility: axe-core automation plus keyboard/screen-reader manual UAT.
- Load/resilience: k6 or equivalent approved tool.
- Rust/Tauri: Cargo tests, clippy, rustfmt, cargo-audit, integration and hardware-adapter fixtures.
- Security: dependency review, secret scan, SAST, RLS/authorization negative tests, threat-case E2E.

## Observability

- Structured JSON logs.
- Request/correlation/process/job/print/ticket IDs.
- OpenTelemetry-compatible traces/metrics where supported.
- Health, readiness, queue depth, dead-letter, realtime, storage, database, print-agent, printer, and provider checks.
- Sensitive content redaction by default.
- No customer/device/financial secrets in logs.

## Deferred technology

- Redis/Valkey cache: not required in R1; add only from measured need.
- Separate API microservice: deferred.
- Kubernetes: deferred.
- Native iOS/Android app: deferred.
- External search engine: deferred.
- Data warehouse/BI stack: deferred.
- AI provider: deferred.
- Public API gateway: deferred.

## Final stack status

```text
ARCHITECTURE STYLE: LOCKED — MODULAR MONOLITH
CANONICAL IMPLEMENTATION ROOT: CODEX CODE/IMPLEMENTATION/
WEB STACK: LOCKED
DATABASE/AUTH/STORAGE/REALTIME/QUEUE STACK: LOCKED
LOCAL PRINT AGENT STACK: LOCKED
EXACT TRANSITIVE PACKAGE PATCHES: PIN DURING AUTHORIZED BOOTSTRAP
PAYMENT/EMAIL/SMS/PRODUCTION HOSTING PROVIDERS: NOT YET APPROVED
APPLICATION CODE: NOT CREATED
```
