# GOV-CX-001 Review Handoff

## Review state

```text
FIX_REQUIRED
```

## Scope reviewed

- Active task: `GOV-CX-001`
- Branch: `governance/codex-execution-modes`
- Pull request: `#19`
- Live PR head at review: `99056182459546113abb313e54762733d43822b4`
- Review basis: `1plan.md`, applicable plan extensions, `AGENTS.md`, completion law, active prompt, task contract, checkpoint, evidence records, exact PR diff, and live workflow state.

## Resolved finding

The owner-inactivity policy is now aligned to the required threshold:

- `auto_sleep_after_owner_inactivity_minutes: 120`
- `actual_auto_sleep_activation_window_minutes: 120_to_180`
- deactivation/re-arm wording uses at least 120 minutes with hourly polling.

No further correction is required for the former 60-minute threshold finding.

## Finding 1 — canonical validated-head evidence remains stale

**Files:**

- `Codex Code/Tasks/GOV-CX-001/CHECKPOINT.md`
- `Codex Code/Tasks/GOV-CX-001/TEST_EVIDENCE.md`
- `Codex Code/Tasks/GOV-CX-001/COMPLETION_REPORT.md`

**Problem:** The live PR head reviewed is `99056182459546113abb313e54762733d43822b4`, and both `CI Quality and Security` and `Dependency Review` completed successfully on that exact head. However, the checkpoint still records `validated_correction_head_sha: 48d2991e980cf28df5228369e808ca17470d76cf`, retains `review_handoff_state: FIX_REQUIRED`, and describes the threshold and evidence corrections as incomplete. The canonical evidence package therefore does not match the exact current PR head or the work already present in the branch.

**Required correction:** Update the same checkpoint and evidence package to record the exact final correction head, current draft/open/mergeable state, exact named workflow results at that head, resolved threshold finding, and the remaining external-review state. Ensure `CHECKPOINT.md`, `TEST_EVIDENCE.md`, and `COMPLETION_REPORT.md` all reference the same immutable head and do not describe already-applied corrections as incomplete.

**Reason:** Owner review and merge decisions must be anchored to the exact commit that contains the reviewed policy and passed the required workflows. Stale evidence creates a contradictory continuation state even when the underlying policy is corrected.

**Required validation:** After the evidence-only correction, rerun all affected structural, formatting, path/link/duplicate, secret, and contract validations; push to the same branch; verify required GitHub checks on the new exact final head; and confirm the checkpoint, evidence, completion report, PR metadata, and live head agree.

## Exact next action

Codex must remain on task `GOV-CX-001`, branch `governance/codex-execution-modes`, and PR `#19`. Correct only the stale final-head evidence finding above within the existing allowed paths, rerun required validations, update the same evidence package, and stop again at `READY_FOR_REVIEW`. Do not merge, activate `CX-R1-003`, create another task, branch, PR, policy, checkpoint, or review handoff.