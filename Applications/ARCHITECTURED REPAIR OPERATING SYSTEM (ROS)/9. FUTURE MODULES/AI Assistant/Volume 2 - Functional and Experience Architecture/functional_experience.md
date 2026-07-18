# AI ASSISTANT — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
Assistant workspace; use-case selector; context/source panel; conversation; generated draft; comparison/diff; confidence/limitations; accept/edit/reject; tool-action review; feedback; prompt/template library; knowledge sources; model profiles; evaluation dashboard; usage/cost; incidents; permissions/settings/audit.

## Lifecycle
`Requested → Policy Checked → Context Prepared → Executed → Evaluated → Human Reviewed → Accepted / Edited / Rejected → Audited`.
Tool action: Proposed → Deterministic Validation → Human Approval when required → Executed by owning service → Result Verified / Rolled Back.

## Workflow
User selects approved task → policy checks permission/data/tool/cost → retrieve minimum authorized context → run model → validate output/safety → show sources, confidence, limitations, and editable draft → human decision → approved command routed to owning module → audit and feedback.

## Exceptions
Prompt injection, unauthorized source/tool, missing evidence, unsafe output, hallucination risk, model/provider outage, cost limit, context overflow, low confidence, stale source, action failure, or privacy incident blocks or degrades safely and preserves user work.

## UI/UX
Always label AI content; show sources and timestamps; distinguish fact, inference, and suggestion; provide edit/reject/manual path; never use deceptive certainty; accessible explanation; visible data/tool scope; confirmation before action; responsive and keyboard-accessible; loading, blocked, unsafe, degraded, offline/manual-fallback states.

## Wireframes/wireflows
Assistant, source panel, draft/review, tool approval, feedback, admin, evaluation, cost, incident, and audit. Prototype covers cited answer, low-confidence refusal, prompt-injection block, human-edited draft, protected-action approval, provider failure, and kill switch.