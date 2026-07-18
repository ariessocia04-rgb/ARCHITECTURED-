# AI ASSISTANT — VOLUME 3: DATA AND INTEGRATION ARCHITECTURE

## Entities
AIUseCase, AIRequest, AIResponse, Conversation, Message, PromptTemplate, PromptVersion, ModelProfile, ProviderProfile, ToolDefinition, ToolGrant, KnowledgeSource, RetrievalQuery, EvidenceReference, ConfidenceAssessment, SafetyCheck, HumanDecision, EvaluationSet, EvaluationRun, Feedback, CostRecord, AIIncident, KillSwitchState.

## Rules
Every request carries tenant/scope, purpose, use case, actor, authorized sources/tools, retention, model/version, prompt/version, correlation, cost budget, and audit. Training use is opt-in/contract-governed. Secrets and raw restricted data are not placed in prompts unless explicitly permitted. Outputs never become facts without owning-module validation.

## APIs
Create conversation/request; retrieve governed context; execute approved model; stream response; validate/cite; submit feedback; accept/edit/reject; propose tool command; approve/execute through owning service; manage prompts/models/sources/tools/evaluations/incidents/kill switch; report usage/cost.

## Events
`ai.requested`, `ai.policy_blocked`, `ai.completed`, `ai.failed`, `ai.review_required`, `ai.accepted`, `ai.edited`, `ai.rejected`, `ai.tool_proposed`, `ai.tool_executed`, `ai.evaluation_completed`, `ai.safety_incident_recorded`, `ai.kill_switch_changed`.

## Integrations
Search/knowledge, Repair/Diagnosis/Quotation, CRM/Marketing, Warehouse/Inventory, Finance/BI, Notifications, TECA, Public API through controlled adapters. Tool execution uses versioned commands, deterministic validation, idempotency, least-privilege grants, and no direct private-table writes.

## Data lifecycle
Minimize context, redact/mask fields, encrypt, classify retention, support deletion/legal hold, separate tenant indexes, record source lineage, prevent provider training unless approved, and retain evaluation/safety evidence.

## Migration/compatibility
Provider/model abstraction, prompt versioning, evaluation gates, shadow/canary rollout, backward-compatible tool schemas, fallback model/manual workflow, and rollback/kill switch.