# IOT INTEGRATION — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
IoTDevice, DeviceClass, HardwareIdentity, DeviceCertificateReference, DeviceCapability, SiteAssignment, ConnectivityState, TelemetrySchema, TelemetryRecord, DeviceState, AlertRule, Alert, CommandDefinition, CommandRequest, CommandAttempt, CommandResult, MaintenancePlan, CalibrationRecord, FirmwareArtifactReference, FirmwareDeployment, Adapter, ProtocolProfile, EdgeGateway, IoTIncident.

## Rules
Tenant/company/branch/site/device scope, immutable hardware identity, certificate status, schema/unit/version, event/device time, ingestion time, sequence, quality flag, retention, and audit are mandatory. Telemetry is append-only or time-series governed. Commands require capability, expected state/version, idempotency, expiry, authorization, safety result, and verification.

## APIs/protocols
Register/provision/activate/revoke device; rotate certificate; publish telemetry through approved MQTT/HTTP/adapter; query state/history; manage alerts; propose/approve/cancel command; acknowledge/result; schedule maintenance/calibration; plan/approve/rollback firmware; manage adapters/incidents.

## Events
`iot.device_registered`, `iot.device_activated`, `iot.device_offline`, `iot.telemetry_received`, `iot.alert_triggered`, `iot.command_requested`, `iot.command_completed`, `iot.command_failed`, `iot.certificate_revoked`, `iot.maintenance_due`, `iot.firmware_rolled_back`, `iot.incident_recorded`.

## Integrations
Devices, Remote Diagnostics, Repair/Jobs, Warehouse, Notifications, AI/BI, Public API through gateways/adapters. Mutual authentication, signed messages, schema registry, replay protection, rate limits, deduplication, outbox/inbox, quarantine, and no private-table writes.

## Data lifecycle
High-volume telemetry uses tiered retention/aggregation, encryption, tenant-separated partitions, device-owner consent where applicable, deletion/legal hold policy, and privacy-safe export.

## Migration/compatibility
Protocol/capability registry, schema versions, adapter abstraction, device shadow compatibility, canary firmware, backward-compatible commands, and rollback/revocation.