# IOT INTEGRATION — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/safety
Unique device identity, mutual authentication, certificate rotation/revocation, secure boot/firmware-signature requirements where supported, least privilege, network segmentation, command allowlists, safety interlocks, replay protection, rate limits, encrypted telemetry, tamper alerts, secret isolation, incident kill switch.

## Audit/recovery
Audit provisioning, identity/certificate, capability, assignment, telemetry schema, alert, command, firmware, maintenance, export, adapter, and incident action. Recovery verifies device identity, sequence/deduplication, command state, certificate revocation, firmware version, telemetry lineage, and audit continuity.

## Targets
99.9% management/control-plane availability; telemetry ingestion availability/SLO defined per device class; alert visibility target ≤10s for supported online devices; command acknowledgement/timeout per capability; RPO ≤15m for metadata and replayable telemetry policy; RTO ≤4h; WCAG 2.2 AA; zero accepted unauthorized/cross-tenant command.

## Reports
Fleet/connectivity, telemetry quality/latency, alerts, command success/failure, device health, maintenance/calibration, firmware coverage, certificate expiry, adapter health, incidents, data volume/cost, access, and audit.

## Risks
Device spoofing, replay, unsafe command, compromised firmware, telemetry poisoning, denial of service, privacy leakage, certificate failure, and orphaned device require mutual auth, signatures, capability policy, human approval, rate limits, anomaly detection, segmentation, revocation, monitoring, and rollback.

## Tests/status
Device identity/certificate, tenant/site isolation, telemetry schema/sequence/deduplication, rate limit, alert, command safety/idempotency/timeout, firmware canary/rollback, adapter failure, accessibility, performance/load, backup/restore, incident response. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; firmware/code/tests/deployment separately gated.