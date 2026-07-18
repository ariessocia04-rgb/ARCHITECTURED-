# CRM — VOLUME 2: FUNCTIONAL AND EXPERIENCE ARCHITECTURE

## Screens
CRM dashboard; lead inbox; lead detail/qualification; opportunity board/list; account/contact profile; business-account workspace; interaction timeline; tasks/follow-ups; proposal/contract; segmentation; loyalty/retention; renewal/reminder queue; complaint/escalation handoff; reports; consent/settings; audit.

## Lifecycle
`Lead → Qualified → Opportunity → Proposal → Won / Lost → Customer Relationship → Renewal / Dormant / Closed`.

Activities, contracts, consent, tasks, loyalty, and escalations have their own versioned states. Lead conversion creates or links a verified Customer through controlled duplicate review; it does not directly overwrite identity.

## Workflows
Capture → deduplicate → qualify → assign owner → create opportunity → record needs/interactions → prepare proposal → approval where required → won/lost → controlled customer/account link → follow-up/renewal. Consent change immediately affects eligible communication and segmentation.

## Exceptions
Duplicate lead/customer, missing consent, invalid owner/scope, stale opportunity stage, expired proposal, contract-signature failure, unauthorized export, integration outage, merge conflict, and customer objection route to explicit queues and preserve history.

## UI/UX
Pipeline has accessible list alternative to drag-and-drop. Customer timeline separates marketing/commercial activity from repair and private internal notes. Visible consent and communication preference, plain stage guidance, quick actions, saved filters, responsive mobile follow-up, loading/empty/error/permission/conflict states.

## Wireframes/wireflows
Dashboard, lead list/detail, opportunity list/board, account, timeline, task, proposal, contract, segment, consent, reports, audit, duplicate resolution, conversion, and exception recovery. Prototype covers capture-to-conversion, proposal rejection/revision, consent withdrawal, and duplicate-account review.