# REMOTE DIAGNOSTICS — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
RemoteDiagnosticRequest, AuthorizationProof, DeviceReference, ConsentGrant, ConsentScope, Session, SessionParticipant, DiagnosticTestDefinition, TestRun, CollectorProfile, CollectorRun, TelemetryRecord, LogReference, EvidenceReference, FindingDraft, TechnicianReview, CustomerSummary, Escalation, RemoteActionProposal, SessionIncident.

## Rules
Session/data/test scope, purpose, retention, device, actor, consent version, start/end, provider, encryption, and audit are mandatory. Data minimization and redaction apply before storage. Preliminary findings cannot set final Diagnosis status. Remote actions are deny-by-default and executed only through approved platform mechanisms.

## APIs
Request/schedule/cancel session; verify authorization; grant/withdraw consent; start/end session; run approved test; upload telemetry/log/evidence; redact/classify; submit/review finding; generate customer summary; escalate/create job; propose/approve remote action; report incident; delete/export permitted data.

## Events
`remote_diagnostic.requested`, `remote_diagnostic.consent_granted`, `remote_diagnostic.consent_withdrawn`, `session.started`, `test.completed`, `collector.failed`, `finding.review_required`, `remote_diagnostic.escalated`, `session.ended`, `session.incident_recorded`.

## Integrations
Customer/Devices/Jobs/Diagnosis, Files/Media, Notifications, IoT/OEM adapters, AI Assistant for optional draft support, Public API. Signed session tokens, scoped collectors, versioned test definitions, idempotency, no direct private-table writes.

## Data lifecycle
Short default retention for raw telemetry/logs, longer governed retention for consent/result/audit, legal hold, encryption, redaction, customer access/export/deletion where applicable, and provider deletion verification.

## Compatibility
Device/OS capability registry, test/version negotiation, manual fallback, provider abstraction, signed collector updates, canary rollout, rollback/revocation.