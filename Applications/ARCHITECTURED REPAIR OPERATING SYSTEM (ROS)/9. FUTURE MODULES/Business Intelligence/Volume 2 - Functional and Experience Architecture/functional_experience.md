# BUSINESS INTELLIGENCE — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
BI home; executive dashboard; operational/finance/inventory/workforce/quality/customer dashboards; metric catalog; report library; report builder; filter/drill-down; schedule/subscription; alert rules; export center; data freshness/quality; lineage; semantic model; access/sharing; settings/audit.

## Lifecycles
Metric: Draft → Reviewed → Approved → Published → Deprecated/Superseded.
Dashboard/report: Draft → Validated → Approved → Published → Archived.
Data load: Scheduled → Extracting → Validating → Transforming → Published → Failed/Quarantined → Reconciled.

## Workflow
Select authorized scope → choose governed metric/model → filter/drill → inspect definition, freshness, lineage, and exclusions → save/share/schedule/export according to permission. Report publication requires validation against canonical source totals and metric owner approval.

## Exceptions
Stale data, missing source, schema drift, quality threshold failure, unauthorized dimension, small-group privacy risk, long-running query, export size, conflicting metric definition, or failed schedule show plain status and block misleading publication.

## UI/UX
Every metric shows definition, unit, period, scope, freshness, source, and owner. Charts always have table/text alternative. Accessible color/labels, responsive dashboards, saved views, progressive disclosure, loading/empty/error/permission/stale/degraded states, and clear distinction between actual, estimate, and forecast.

## Wireframes/wireflows
Home, dashboards, metric detail, report builder, drill-down, schedule, alert, export, freshness/quality, lineage, access, audit, and recovery. Prototype covers dashboard-to-source drill, stale-data warning, report publication rejection, scoped export, and alert acknowledgement.