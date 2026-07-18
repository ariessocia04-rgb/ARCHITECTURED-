# IOT INTEGRATION — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
IoT dashboard; device fleet; provisioning wizard; device detail/current state; telemetry explorer; site/branch assignment; alert rules/incidents; command center; command review/approval; maintenance/calibration; firmware inventory/update plan; credentials/certificates; adapter/protocol health; reports/settings/audit.

## Lifecycles
Device: Registered → Provisioning → Active → Degraded/Offline → Maintenance → Retired/Revoked.
Command: Proposed → Policy/Safety Checked → Approved when required → Queued → Delivered → Acknowledged → Verified / Failed / Cancelled / Timed Out.
Firmware plan: Draft → Validated → Approved → Canary → Expanded → Completed / Paused / Rolled Back.

## Workflow
Register and verify device ownership/class → issue identity → assign site/scope → validate capabilities → activate → ingest normalized telemetry → evaluate alerts → propose command or maintenance → policy/safety/human approval → execute → verify result → audit. Repair findings remain separate from raw telemetry.

## Exceptions
Unknown device, invalid certificate, duplicate hardware ID, clock drift, telemetry flood, schema mismatch, offline device, command timeout, unsafe capability, firmware failure, suspected compromise, or cross-tenant routing enters quarantine/incident queues.

## UI/UX
Persistent physical site/device context; clear live/stale/offline status; units/timestamps; safety warning and review before command; emergency stop/revoke; chart table alternative; responsive technician views; loading/empty/error/permission/degraded states; accessible alerts and controls.

## Wireframes/wireflows
Dashboard, registry, provisioning, device state, telemetry, alert, command, maintenance, firmware, credentials, adapter, incident, audit, and recovery. Prototype covers provisioning, alert-to-work-order, protected command, offline timeout, certificate revocation, and firmware rollback.