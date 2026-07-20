# GOV-CX-001 Review Handoff

## Review state

```text
FIX_REQUIRED
```

## Scope reviewed

- Active task: `GOV-CX-001`
- Branch: `governance/codex-execution-modes`
- Pull request: `#19`
- Live PR head at review: `2d584b958f10401e15a832bc9615047412b0fdf1`
- Review basis: `1plan.md`, applicable plan extensions, `AGENTS.md`, completion law, active prompt, task contract, checkpoint, evidence records, and live PR state.

## Finding 1 — owner inactivity threshold conflicts with the latest owner instruction

**File:** `Codex Code/Prompts/EXECUTION_MODE.md`

**Problem:** The canonical policy currently sets `auto_sleep_after_owner_inactivity_minutes: 60` and permits automatic re-arming after at least 60 minutes. The latest explicit owner instruction requires Sleep Mode to be treated as active only when a canonical flag/state is active, or when verifiable owner inactivity is at least two hours. The current 60-minute threshold can therefore activate unattended behavior earlier than the owner authorized.

**Required correction:** Replace the 60-minute inactivity threshold with 120 minutes everywhere this policy and its connected records describe automatic re-arming. Preserve hourly polling truthfully: with a 120-minute threshold and hourly checks, the practical activation window should be documented as 120 to 180 minutes unless exact scheduler evidence proves otherwise. Update every connected reference, task record, prompt, checkpoint timestamp/eligibility field, completion statement, and validation that still encodes the old 60-minute rule. Do not alter explicit owner-command activation of `sleep mode`.

**Reason:** Owner instructions take precedence over earlier draft assumptions, and unattended execution must not begin before the exact authorized inactivity threshold.

**Required validation:** Search the full repository for `60`, `60_to_120`, `at least 60 minutes`, and equivalent automatic re-arm wording; verify no conflicting auto-rearm threshold remains. Re-run formatting, structural/path/link/duplicate validations, secret scanning, and all affected repository checks.

## Finding 2 — canonical validated-head evidence is stale relative to the live PR head

**Files:**

- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** The live PR head at review is `2d584b958f10401e15a832bc9615047412b0fdf1`, one commit ahead of `48d2991e980cf28df5228369e808ca17470d76cf`. The checkpoint still records `validated_correction_head_sha: 48d2991e...`, and the completion report summarizes checks only for that older commit. `TEST_EVIDENCE.md` says the follow-up handoff commit's live checks were verified but does not record its exact SHA or named check results. This leaves the canonical checkpoint and completion evidence behind the actual reviewed PR head.

**Required correction:** Update the same checkpoint and evidence package to record the exact current correction head after all fixes, including the final head SHA, live PR merge state, and every required check result at that exact SHA. Ensure the completion report references the same final validated head. Do not claim a pass for a superseded head as the final review state.

**Reason:** The task contract requires exact factual commands and results. Review and owner decisions must be anchored to the same immutable commit that passed validation.

**Required validation:** After applying all corrections, push once to the same branch, wait/recheck within the bounded policy, verify all required GitHub checks on the new final head, and confirm checkpoint, test evidence, completion report, PR metadata, and live head all agree.

## Exact next action

Codex must remain on task `GOV-CX-001`, branch `governance/codex-execution-modes`, and PR `#19`. Read this handoff, correct only the two findings above within the existing allowed paths, re-run all affected validations, update the same checkpoint and evidence, and stop again at `READY_FOR_REVIEW`. Do not merge, activate `CX-R1-003`, create another task, branch, PR, policy, checkpoint, or review handoff.
