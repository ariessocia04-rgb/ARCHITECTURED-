# BUSINESS INTELLIGENCE — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
DataSource, SourceContract, DataLoad, DataQualityRule, DataQualityResult, SemanticModel, MetricDefinition, DimensionDefinition, Measure, Aggregate, Snapshot, Dashboard, DashboardVersion, Report, ReportVersion, FilterDefinition, DrillPath, Schedule, Subscription, AlertRule, AlertInstance, ExportJob, LineageEdge, ForecastResult.

## Rules
Source contract, tenant/company/branch scope, event time, processing time, schema version, lineage, freshness, quality, retention, and owner are mandatory. Metrics are uniquely named/versioned and cannot silently change historical definition. Row/column security applies before aggregation/export.

## APIs
Register source; ingest event/snapshot; validate/quarantine/replay load; define/review/publish metric/model/dashboard/report; query governed data; drill; schedule; alert; export; inspect freshness/quality/lineage; deprecate/supersede definition.

## Events
`data_load.started`, `data_load.completed`, `data_load.failed`, `data_quality.failed`, `metric.published`, `metric.superseded`, `dashboard.published`, `report.generated`, `alert.triggered`, `export.completed`, `forecast.generated`.

## Integrations
All domains publish versioned events/read models; no BI reads private tables without an approved data contract. Outbox/stream/batch adapters, idempotent loads, watermarking, late-event handling, deduplication, reconciliation, lineage, and replay are required.

## Data privacy
Pseudonymization, aggregation thresholds, field masking, purpose limitation, retention, deletion propagation where legally applicable, and controlled re-identification. Large exports are encrypted, expiring, audited, and asynchronous.

## Migration
Backfill by source/version/period, reconcile totals to source, document exclusions, preserve metric versions, run shadow comparisons, and rollback published models when thresholds fail.