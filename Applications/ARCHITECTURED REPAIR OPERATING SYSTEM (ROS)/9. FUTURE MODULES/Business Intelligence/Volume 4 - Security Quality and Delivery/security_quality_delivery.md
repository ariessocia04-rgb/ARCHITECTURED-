# BUSINESS INTELLIGENCE — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/privacy
Tenant/company/branch/row/column/metric/report/export authorization; aggregation thresholds; encryption; MFA/step-up for sensitive export/sharing; signed embedded tokens; query limits; secure caches; approved support access; privacy-safe telemetry.

## Audit/recovery
Audit access, query, dashboard/report/metric changes, sharing, schedule, alert, export, source/model configuration, and admin actions. Restore verifies model versions, lineage, row security, schedules, freshness, quality results, and audit continuity.

## Targets
99.9% monthly dashboard availability; common dashboard p95 ≤3s with approved cache/model; scheduled report completion SLO by size; freshness SLO defined per source; RPO ≤15m for metadata and recoverable source replay for analytics; RTO ≤4h; WCAG 2.2 AA; zero accepted cross-tenant/unauthorized row disclosure.

## Reports/quality
Pipeline freshness, load duration/failure, quality-rule results, source reconciliation, metric usage, dashboard performance, export activity, alerts, forecast accuracy, access, and cost.

## Risks
Misleading metric, stale data, schema drift, source mismatch, privacy leakage, unauthorized export, double counting, late events, biased forecast, and expensive query require governed definitions, lineage, reconciliation, quality gates, row security, monitoring, budgets, and publication rollback.

## Tests/status
Metric formulas, source reconciliation, row/column security, late/duplicate events, schema evolution, quality quarantine, schedules/alerts, export, accessibility, performance, backup/restore, replay, and tenant isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; pipelines/tests/deployment separately gated.