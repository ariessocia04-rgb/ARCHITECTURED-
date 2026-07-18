# LOCAL PRINT AGENT AND BROWSER BRIDGE ARCHITECTURE

## Purpose

Define the secure native component used when the web application must access local USB/LAN/serial/Bluetooth printers, retrieve printer status, queue jobs offline, or perform approved silent printing that browsers cannot provide reliably.

## Product boundary

The Local Print Agent is an optional separately installed component for managed tenant workstations. It is not required for ordinary PDF/browser-dialog printing.

Supported deployment modes:

```text
WORKSTATION AGENT
└── one staff workstation, local/nearby printers

BRANCH PRINT GATEWAY
└── always-on branch computer/server, multiple network/USB printers

MANAGED MOBILE/DEVICE ADAPTER
└── approved native mobile shell or hardware-specific service
```

## Trust model

```text
ARCHITECTURED SaaS
├── authenticates tenant/user
├── authorizes document and printer
├── generates signed job envelope
└── maintains authoritative job/audit state

LOCAL PRINT AGENT
├── enrolled to tenant + branch + device/workstation
├── verifies job signature, expiry, binding, and checksum
├── controls enrolled local printers only
├── returns normalized status
└── cannot query arbitrary SaaS records
```

The agent is not a privileged backdoor into tenant data.

## Enrollment workflow

```text
IT Administrator creates agent enrollment
→ tenant/branch/workstation selected
→ one-time enrollment code generated
→ agent installed from verified package
→ agent presents device identity/public key
→ user/IT verifies code and device details
→ platform issues scoped agent credential/certificate
→ printer discovery begins
→ IT approves printer mappings
→ test print and capability validation
→ agent status ACTIVE
```

One-time codes expire and cannot be reused.

## Agent identity record

```text
print_agent_id
tenant_id
branch_id
workstation_id optional
display_name
installation_id
device_public_key
credential_reference
operating_system
architecture
agent_version
update_channel
status
last_heartbeat_at
last_ip_metadata when allowed
capabilities
approved_by
enrolled_at
revoked_at
```

## Agent states

```text
PENDING_ENROLLMENT
ENROLLING
ACTIVE
DEGRADED
OFFLINE
UPDATE_REQUIRED
QUARANTINED
REVOKED
RETIRED
```

## Communication patterns

### Preferred cloud polling / outbound connection

```text
Agent opens authenticated outbound TLS connection
→ heartbeat and job claim
→ server returns signed jobs assigned to agent
→ agent acknowledges
→ prints
→ posts normalized status/evidence
```

Advantages:

- no inbound branch firewall port;
- simpler NAT/proxy behavior;
- centralized job assignment;
- safe branch isolation.

### Local browser bridge

When same-workstation direct UX is required:

```text
Web application
→ authenticated local bridge request on loopback
→ agent validates origin, nonce, user session proof, job reference
→ agent claims authoritative job from SaaS
→ prints
```

Rules:

- listen on loopback only by default;
- HTTPS/mTLS or an equivalent authenticated local channel;
- strict origin allowlist;
- random per-installation endpoint/nonce where appropriate;
- never accept full uncontrolled print bytes from arbitrary websites;
- browser supplies a job reference, not authority;
- agent retrieves/verifies the signed job envelope.

### Local branch gateway

A gateway may serve multiple workstations but must use authenticated SaaS-issued job assignments and printer mappings. It does not expose an unauthenticated LAN print API.

## Local printer discovery

The agent may discover through:

- operating-system installed queues;
- Windows modern print/IPP queues;
- CUPS/IPP;
- USB device enumeration;
- serial/virtual COM enumeration;
- network IPP/DNS-SD;
- approved vendor SDK discovery;
- approved Bluetooth OS discovery.

Discovered devices remain `UNAPPROVED` until an IT role maps them to a printer record and document profiles.

## Printer driver strategy

Preferred order:

1. driverless IPP/AirPrint/modern Windows class path;
2. operating-system supported queue;
3. vendor-supported current driver/Print Support App;
4. approved vendor SDK;
5. validated ESC/POS/raw adapter for thermal devices;
6. legacy driver only under documented exception and support plan.

The SaaS never downloads arbitrary drivers automatically.

## Agent adapter plugins

```text
AgentAdapter
├── WINDOWS_SPOOLER
├── CUPS_IPP
├── DIRECT_IPP
├── ESC_POS_USB
├── ESC_POS_NETWORK
├── ESC_POS_SERIAL
├── APPROVED_BLUETOOTH
├── VENDOR_SDK_<CODE>
└── FILE_PDF_FALLBACK
```

Plugins are signed, versioned, allowlisted, and disabled independently.

## Job handling

```text
Job available
→ agent validates tenant/branch/agent assignment
→ validate signature and expiry
→ validate artifact checksum
→ validate printer enrollment/status
→ validate profile/capability match
→ reserve local queue slot
→ acknowledge claim
→ submit to adapter
→ collect status
→ report result
→ retain minimal replay record
→ securely purge payload according to policy
```

## Local queue

The encrypted local queue stores only:

- signed job envelope;
- encrypted artifact/payload;
- printer/profile references;
- expiry;
- attempt state;
- minimal status history.

Rules:

- per-tenant/branch isolation;
- bounded disk size;
- short retention;
- automatic expiry;
- secure deletion best effort;
- no indefinite archive;
- no customer search/index;
- jobs cannot be reassigned to an unrelated printer without SaaS authorization.

## Offline mode

When cloud connectivity is lost:

- already claimed and unexpired jobs may continue if policy allows;
- new browser actions cannot create authoritative jobs solely through the agent;
- local status queues for later upload;
- replay IDs prevent duplicate printing after reconnect;
- protected payment/release documents use the finalized artifact and local policy;
- agent shows `OFFLINE — LIMITED PRINTING` to IT and staff.

## Updates

- Agent packages are code-signed.
- Update channels: stable, pilot, emergency.
- Tenant IT can schedule ordinary updates within platform policy.
- Critical security updates can become mandatory after notice.
- Rollback is supported to the last trusted compatible version.
- Agent compatibility with server contracts is versioned.
- Outdated agents may enter read-only/print-disabled mode rather than receive unsafe jobs.

## Permissions

Staff users can:

- print authorized documents to approved printers;
- view plain-language status;
- retry safe attempts;
- request IT support.

IT users can:

- enroll/revoke agents;
- discover/approve printers;
- run test prints;
- map defaults;
- view diagnostics;
- update/restart agent;
- clear a failed local queue with approval and evidence.

Platform support can access diagnostics only through approved, time-limited tenant support access.

## Security controls

- TLS for cloud communication.
- Scoped agent credential or mutual certificate.
- Signed jobs and signed plugin/update packages.
- Artifact checksum validation.
- Least-privilege OS service account.
- No arbitrary command execution.
- No generic file-system access.
- No secret logging.
- Strict local API origin/authentication.
- Process sandboxing where supported.
- Dependency and vulnerability scanning.
- Device/agent revocation.
- Heartbeat anomaly detection.
- Audit for enrollment, printer approval, test, update, revocation, and queue administration.

## Health data

Agent heartbeat may report:

```text
agent version
OS version and architecture
uptime
queue depth
oldest job age
adapter/plugin health
printer status summaries
last successful job
last failed job code
clock drift
storage availability
update status
```

It must not report unrestricted document content or customer data.

## Diagnostic bundle

Authorized IT can generate a time-limited diagnostic bundle containing:

- agent configuration identifiers;
- version and plugin inventory;
- sanitized logs;
- printer capability/status snapshots;
- recent job references and normalized errors;
- network endpoint test results;
- OS spooler/CUPS state summary;
- checksum/signature verification results.

The bundle excludes secrets, full document payloads, device passcodes, card data, and unrelated tenant records.

## Failure handling

| Failure | User result | IT result |
|---|---|---|
| Agent offline | choose browser/PDF/another printer or queue later | heartbeat alert and runbook |
| Signature invalid | job blocked | security incident candidate |
| Printer offline | alternate printer/digital delivery | device incident |
| Driver/spooler error | retry only when safe | diagnostic code and service action |
| Unsupported capability | choose compatible printer/profile | update mapping/profile |
| Agent version obsolete | fallback or update required | controlled update/change |
| Local queue full | no new local jobs | clear safely after evidence/export |

## Acceptance rules

- Agent cannot print a job for another tenant/branch.
- Agent cannot be commanded by an arbitrary website.
- Job replay is rejected.
- Offline queue is encrypted, bounded, and expiring.
- Unapproved discovered printers cannot receive production jobs.
- Agent update and plugin lifecycle are auditable and reversible.
- Staff always have a documented fallback when the agent is unavailable.
