# AI ASSISTANT — VOLUME 4: SECURITY, QUALITY, AND DELIVERY

## Security/safety
Tenant isolation, least privilege, tool sandboxing, prompt-injection defenses, retrieval filtering, data-loss prevention, output validation, model/provider allowlist, secret isolation, rate/cost limits, abuse monitoring, MFA/step-up for admin/tools, signed commands, human approval, and kill switch.

## Audit/recovery
Audit request purpose, sources, model/prompt version, tools, outputs/hash, safety results, human decisions, cost, incidents, and admin changes. Retention is use-case specific. Recovery verifies source isolation, prompt/model versions, grants, pending actions, evaluation state, and kill switch.

## Architecture targets
99.9% management availability; first visible response target ≤3s for supported streaming use cases; full response/use-case SLO separately defined; safety/policy check before provider call; RPO ≤15m; RTO ≤4h; WCAG 2.2 AA; zero accepted unauthorized tool action or cross-tenant context.

## Reports/evaluation
Usage, latency, cost, acceptance/edit/rejection, citation coverage, groundedness, task success, error rate, unsafe-output rate, prompt injection, tool denial/failure, drift, incidents, and business impact. Quality thresholds are use-case specific and block promotion when unmet.

## Risks
Hallucination, prompt injection, data leakage, biased output, unsafe advice, tool overreach, model drift, hidden cost, provider outage, and automation complacency require evidence, human review, deterministic gates, red-team/evaluation, monitoring, rate limits, fallback, and kill switch.

## Tests/status
Permission/source/tool matrix, tenant isolation, injection/redaction, citation/grounding, unsafe-output, tool validation/idempotency, provider failure, cost limits, evaluation regression, accessibility, performance, incident/kill switch, backup/restore. `ARCHITECTURE_AND_DESIGN_SPECIFICATION_COMPLETE`; models/evaluations not executed and deployment not performed.