# MOBILE APPLICATION — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/privacy
OAuth/OIDC or approved auth, MFA/biometrics as local unlock not sole identity proof, secure key storage, encrypted local data, TLS, device/session revocation, integrity/risk signals, least privilege, permission minimization, safe deep links, input/file validation, screenshot/log controls, privacy disclosures, and incident kill switch.

## Audit/recovery
Audit device/session registration, scope/persona, protected action, offline queue/result/conflict, scan/media/signature, export/share, permission, push, update, and security events. Recovery verifies revocation, cache/sync integrity, queued commands, uploads, conflicts, and audit continuity.

## Targets
Crash-free sessions target ≥99.5% after production validation; app launch target ≤3s on supported baseline device excluding authentication/network; interactive response ≤100ms local and API SLO displayed; sync progress within 2s; RPO governed by queued local durability/server acceptance; WCAG/mobile platform accessibility target; zero accepted cross-tenant cache or duplicate protected command.

## Reports
Versions/adoption, active devices/sessions, crash/ANR, performance, sync success/conflict, offline queue age, upload, push delivery, permission denial, security events, network quality, battery/data use, and feature usage.

## Risks
Lost/stolen device, insecure storage, stale cache, duplicate offline command, conflict data loss, malicious deep link/file, excessive permissions, rooted-device risk, push leakage, and release regression require encryption, revocation, idempotency, validation, staged rollout, monitoring, and rollback.

## Tests/status
Platform/OS/device matrix, auth/session/revocation, encrypted storage, permission/field access, offline/retry/conflict, upload resume, scan/signature, deep link, accessibility, performance, crash, network degradation, backup/restore, release rollback, and tenant isolation. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; native code/tests/store deployment separately gated.