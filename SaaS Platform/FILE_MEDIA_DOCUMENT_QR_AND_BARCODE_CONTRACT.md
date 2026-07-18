# FILE, MEDIA, DOCUMENT, QR, AND BARCODE CONTRACT

## PURPOSE

This document defines architecture for uploaded files, photos, videos, signatures, generated documents, exports, QR codes, barcodes, storage, access, validation, retention, and audit.

## CONTENT TYPES

- Customer identity evidence
- Device intake photos and videos
- Device condition evidence
- Diagnosis evidence
- Repair evidence
- Parts and inventory evidence
- Testing evidence
- Quality-control evidence
- Proof of purchase
- Warranty evidence
- Quotation
- Invoice
- Receipt
- Release document
- Warranty certificate
- Customer signature
- Staff signature
- Reports and exports
- QR codes and barcodes
- Support and incident attachments

## FILE RECORD

Every stored file or media asset records:

- document_id or media_asset_id
- tenant_id
- branch_id when applicable
- related entity type and ID
- category
- visibility classification
- original file name
- generated safe file name or storage key
- content type
- size
- checksum
- width, height, duration, or page count when applicable
- uploaded_by or generated_by
- uploaded_at or generated_at
- validation status
- malware-scan status
- processing status
- version
- retention class
- archived_at or deleted_at when applicable

## STORAGE PRINCIPLES

- File bytes are stored separately from ordinary relational record fields.
- Storage paths and object keys are opaque and tenant-scoped.
- Public buckets or unrestricted URLs are prohibited for protected content.
- Access is granted through authenticated authorization or short-lived signed access.
- Storage encryption and transport encryption are mandatory for confidential and restricted content.
- Backups preserve file-to-record integrity.

## UPLOAD WORKFLOW

```text
Upload Requested
→ Permission and Entitlement Check
→ Upload Session Created
→ File Received
→ Size and Type Validation
→ Integrity Check
→ Malware / Safety Scan
→ Metadata Extraction
→ Optional Processing
→ Finalize Record Link
→ Available / Quarantined / Rejected
→ Audit Event
```

## VALIDATION RULES

Validation includes:

- allowed file type
- verified content type, not extension alone
- maximum and minimum size
- image dimensions
- video duration
- document page limit
- filename sanitization
- malware and unsafe-content checks
- checksum
- tenant storage allowance
- entity state and permission
- duplicate upload detection when appropriate

Rejected uploads do not become active record evidence.

## FILE STATES

- Requested
- Uploading
- Uploaded
- Scanning
- Processing
- Available
- Quarantined
- Rejected
- Failed
- Archived
- Deletion Scheduled
- Deleted

## EVIDENCE IMMUTABILITY

Finalized evidence linked to:

- intake signature
- approved quotation
- completed diagnosis
- repair completion
- testing completion
- quality approval
- payment receipt
- release
- warranty
- incident

cannot be silently replaced. A correction creates a new version and preserves prior evidence according to retention rules.

## VERSIONING

Every document family supports:

- document family ID
- version number
- status
- previous version reference
- superseding version reference
- created reason
- actor
- effective time

Only one active current version is displayed by default, while authorized users can review history.

## ACCESS CLASSIFICATION

### Customer Visible

- approved quotations
- invoices and receipts
- customer-safe status reports
- release documents
- warranty certificates
- approved testing summary
- customer-submitted evidence

### Staff Internal

- internal notes
- technician evidence
- inventory documents
- staff-only reports

### Restricted

- identity documents
- security evidence
- integration or incident files
- protected financial evidence
- sensitive device or customer information

Visibility is evaluated at every download, preview, share, export, and notification action.

## SIGNATURE CONTRACT

A signature record includes:

- signature_id
- signer identity or verified representative
- signer role or relationship
- related document ID and exact version
- purpose
- signed_at
- consent text/version
- method
- device/session context where allowed
- integrity checksum
- revocation or dispute status

A signature image alone is not sufficient without signing context.

## GENERATED DOCUMENT CONTRACT

Generated documents define:

- template ID and version
- source snapshot references
- generation time
- tenant branding and locale
- document number
- generated_by
- checksum
- version
- visibility

Regeneration after source changes creates a new version unless the document is an unfinalized draft.

## EXPORT CONTRACT

Export jobs include:

- export_job_id
- tenant and branch scope
- requester
- permission snapshot
- filter and date range
- selected fields
- format
- created_at
- completed_at
- expiry
- download count
- checksum
- status and safe error

Exports are time-limited, access-controlled, encrypted when required, and audited.

## DOWNLOAD AND PREVIEW

- Authorization is evaluated at access time.
- Signed URLs are short-lived and scoped to one object/action.
- Browser caching for restricted files is controlled.
- Preview generation does not make the original file public.
- Download events are audited for sensitive content.

## PHOTO AND VIDEO RULES

- Preserve original evidence where policy requires.
- Create optimized preview versions separately.
- Retain orientation and capture metadata only when allowed.
- Remove unnecessary sensitive metadata from customer-facing copies.
- Annotated copies do not overwrite original evidence.
- Before/after evidence links to repair stage and timestamp.

## DOCUMENT TEMPLATES

Templates may include:

- intake receipt
- job order
- inspection report
- diagnosis report
- quotation
- invoice
- receipt
- testing report
- quality approval
- release form
- warranty certificate
- inventory report
- audit report

Template changes are versioned and do not change previously finalized documents.

## QR CODE CONTRACT

QR codes may identify or link to:

- job order
- device
- customer-safe tracking
- technician or employee verification
- part or inventory item
- repair ticket
- release verification
- document verification

QR payloads use opaque IDs or signed tokens. They do not expose sensitive raw fields.

## BARCODE CONTRACT

Barcodes may identify:

- job order
- device label
- inventory item
- serialized part
- purchase or receiving record
- warehouse location

Barcode values are unique within declared scope and retain mapping history.

## QR AND BARCODE MAPPING

Every mapping records:

- mapping_id
- tenant_id
- code type
- encoded token or value reference
- target entity type and ID
- created_by
- created_at
- active status
- expiry when applicable
- revoked_at and reason
- replacement mapping
- scan history policy

Codes are not reassigned to unrelated records.

## SCAN CONTRACT

```text
Scan Captured
→ Format Validation
→ Mapping Resolution
→ Tenant and Permission Validation
→ Expiry / Revocation Check
→ Target Action Resolution
→ Result Displayed
→ Audit Event
```

Failed scans return safe errors without revealing whether unauthorized records exist.

## PUBLIC DOCUMENT VERIFICATION

Public verification may confirm limited facts such as document validity, number, tenant/business name, issue date, and status. It uses opaque verification tokens and never exposes full customer, device, payment, or repair data.

## DUPLICATE CONTROL

- Repeated upload finalization with the same upload ID is idempotent.
- Checksums may detect duplicates but do not automatically merge evidence with different legal context.
- Duplicate QR or barcode mappings are rejected.
- Reprinted labels preserve original mapping and log reprint history.

## RETENTION AND DELETION

Retention is based on category and related record:

- financial documents follow financial retention
- warranty evidence follows warranty and dispute retention
- audit and incident evidence follows security retention
- temporary upload fragments expire quickly
- exports expire after delivery window
- customer profile photos and optional files follow account policy

Deletion requires relationship, retention, legal-hold, backup, and audit checks.

## FILE SECURITY EVENTS

- FileUploadRequested
- FileUploaded
- FileRejected
- FileQuarantined
- FileDownloaded
- SensitiveFileAccessed
- DocumentGenerated
- DocumentSuperseded
- SignatureCaptured
- ExportCreated
- ExportDownloaded
- QRGenerated
- QRRevoked
- BarcodePrinted
- CodeScanned
- UnauthorizedFileAccessBlocked

## STATUS

- Upload, validation, storage, states, evidence immutability, versioning, access, signatures, generated documents, exports, preview, media, templates, QR, barcode, scanning, verification, duplicate control, retention, and security events: COMPLETE.

**FILE, MEDIA, DOCUMENT, QR, AND BARCODE CONTRACT COMPLETE (100%)**
