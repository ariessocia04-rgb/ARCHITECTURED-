# IMPLEMENTATION SPECIFICATIONS — TECAMemoryWriteTool

## 1. ROOT CAUSE ANALYSIS
The previous implementation encountered `HTTP 409 Conflict` errors when updating `.teca/memory/index.json`. This was caused by reusing outdated GitHub file SHAs during sequential write operations. GitHub assigns a new SHA after every successful update; subsequent writes using the old SHA fail due to optimistic concurrency control.

## 2. INFRASTRUCTURE REQUIREMENTS

### A. Fresh SHA Retrieval
- **Rule**: Never reuse a cached SHA for `index.json`.
- **Action**: Before EVERY update, the tool must perform a `GET` request to retrieve the latest content and the current SHA from the GitHub API.

### B. Automatic Conflict Recovery
- **Trigger**: HTTP 409 Error.
- **Retry Logic**:
  1. Fetch the latest `index.json` and its newest SHA.
  2. Merge the pending memory entry into the freshly retrieved content.
  3. Retry the `PUT` request.
  4. Maximum of **3 retries**.
  5. Implementation of exponential backoff between retry attempts.

### C. Transactional Memory Writes
- **Current Pattern (Legacy)**: Update index after every single memory file write.
- **Target Pattern (Transactional)**:
  1. Collect every memory entry to be written during the Crew run.
  2. Write each memory JSON file individually.
  3. Reload the latest `index.json` once.
  4. Append all new entries to the index.
  5. Update `index.json` via a SINGLE GitHub API call.

### D. Data Integrity & Deduplication
- **Merge Policy**: Always merge new entries; never overwrite the entire index.
- **Preservation**: Maintain existing memories, ordering, metadata, timestamps, and categories.
- **Deduplication**: Prevent duplicate entries in `index.json`.

## 3. DIAGNOSTIC LOGGING
Every write operation must log the following metadata:
- Current SHA used.
- Latest SHA retrieved.
- Retry count.
- Merge status.
- Final operation status (SUCCESS/FAIL).

**Example Log Pattern**:
```text
[MemoryWrite]
GET latest index.json
SHA=xxxxxxxx
Appending 4 memories
PUT index.json
SUCCESS
Final SHA=yyyyyyyy
```

## 4. ARCHITECTURAL BOUNDARIES
This is a **TOOL IMPLEMENTATION REFACTOR** only. The following architectural elements are FROZEN and must remain unchanged:
- TECA Long-Term Memory Manager (Agent).
- Memory Retrieval/Storage Tasks.
- Stage numbering and ordering.
- CrewAI Context Chains and Workflows.
