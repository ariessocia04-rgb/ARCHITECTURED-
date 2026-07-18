# REMOTE DIAGNOSTICS — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Remote diagnostics dashboard; request/schedule; customer verification; device selection; consent/data disclosure; session lobby; guided test checklist; diagnostic collector status; live support; log/evidence review; preliminary findings; escalation/job creation; customer summary; session history; settings/integrations/audit.

## Lifecycle
`Requested → Identity/Device Verified → Consent Granted → Scheduled / Ready → Session Active → Data Collection → Technician Review → Preliminary Result → Resolved Remotely / Physical Inspection Required / Cancelled → Closed`.

## Workflow
Request → verify customer/device authorization → explain data/tests → capture granular consent → establish encrypted session → run approved tests/collect minimum data → technician reviews → issue customer-safe preliminary summary → create/link job if physical inspection is required → end session and revoke access.

## Exceptions
Consent denied/withdrawn, unsupported device, network loss, collector failure, excessive permissions, sensitive data detected, malware alert, remote-control rejection, inconclusive result, session timeout, or provider outage stops safely and preserves permitted evidence.

## UI/UX
Consent is specific and revocable; customer always sees what is shared and when access is active. Large stop-session control, no dark patterns, plain preliminary-result wording, accessible guided steps, low-bandwidth mode, resumable uploads, loading/error/permission/offline/degraded states.

## Wireframes/wireflows
Request, verification, consent, lobby, tests, collector, live support, review, result, escalation, history, audit, and recovery. Prototype covers successful guided test, consent withdrawal, network resume, sensitive-data block, and physical-inspection escalation.