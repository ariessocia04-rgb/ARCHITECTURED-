# VALIDATION SPECIFICATIONS — TECA GATE

## 1. COMPLIANCE CHECKLIST
All engineering contributions must pass the following validation rules before publishing:

### A. CrewAI & Architecture
- 100% adherence to the approved ARCHITECTURED design.
- Stage numbering and ordering preserved.
- Agent and Task definitions match YAML configurations.

### B. Long-Term Memory (LTM) Implementation
- **Transactional Integrity**: Memory writes must be batched to minimize index.json conflicts.
- **SHA Freshness**: index.json updates must always use a freshly retrieved SHA.
- **Conflict Recovery**: Tool must handle HTTP 409 with automatic retry and merge logic.
- **Deduplication**: No duplicate entries allowed in the memory index.

### C. Repository Integrity
- **Technician Gold Standard**: All modules must follow the established folder hierarchy and naming conventions.
- **Cleanliness**: Zero duplicate documents or obsolete plans.
- **Single Source of Truth**: README.md and 1PLAN.md are the authoritative sources.

## 2. BLOCKING FAILURES
The following conditions will trigger a BLOCK at the Validation Gate:
- Reuse of cached SHAs during GitHub API calls.
- Overwriting existing index.json entries instead of merging.
- Failure to log diagnostic metadata (SHA, retries, merge status).
- Any modification to the frozen CrewAI architecture or workflow order.
