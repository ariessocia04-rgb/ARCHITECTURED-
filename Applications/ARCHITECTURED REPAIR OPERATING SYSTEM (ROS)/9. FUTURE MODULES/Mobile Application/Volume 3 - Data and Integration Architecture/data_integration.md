# MOBILE APPLICATION — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
MobileAppVersion, DeviceRegistration, DeviceTrustState, MobileSession, PersonaScope, LocalRecordCache, OfflineCommand, SyncBatch, SyncCursor, Conflict, ConflictResolution, UploadSession, MediaReference, ScanEvent, SignatureReference, PushTokenReference, NotificationReceipt, PermissionGrantMetadata, CrashReportReference, MobileFeatureFlag.

## Rules
Local data is tenant/user/device scoped, encrypted, minimal, TTL-bound, and remotely revocable. Offline commands carry command type, payload version, expected record version, device sequence, idempotency key, correlation, created/expiry time, and evidence. Server remains authoritative.

## APIs
Register/verify/revoke device; authenticate/refresh/lock session; get persona/entitlements; sync pull/push; submit offline command; resolve conflict; start/resume upload; scan/attach/sign; manage push token/preferences; get feature/config/version policy; report health/crash; remote sign-out/wipe metadata.

## Events
`mobile.device_registered`, `mobile.device_revoked`, `mobile.session_started`, `offline.command_queued`, `sync.started`, `sync.completed`, `sync.conflict_detected`, `upload.completed`, `push.delivered`, `mobile.security_event_recorded`, `app_version.deprecated`.

## Integrations
API Gateway/Public API, Authentication/Authorization, application services, Files/Media, Notifications, QR/Barcode, Payments, Remote Diagnostics, IoT. Versioned APIs, certificate pinning policy where appropriate, idempotency, pagination, delta sync, resumable upload, no direct databases.

## Storage/privacy
Keychain/keystore-backed secrets, encrypted database/files, screenshot/backup restrictions for sensitive screens where supported, privacy-safe diagnostics, user-visible permissions, cache purge, legal retention at server, and remote revocation.

## Compatibility/release
Minimum OS/device matrix, API compatibility window, feature flags, remote config, schema migrations, staged rollout, crash/performance gates, rollback, and forced update only for approved critical security reasons.