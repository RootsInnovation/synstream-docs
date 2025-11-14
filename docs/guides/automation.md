---
sidebar_position: 2
---

# Automate Customer Onboarding

This guide shows how to build a Synstream flow that automates customer onboarding by coordinating CRM updates, welcome emails, and internal alerts.

## Prerequisites

- Access to the Synstream dashboard with editor permissions
- Connected integrations: CRM, email provider, chat tool
- Completed the Quickstart guide

## Steps

1. **Model the flow** — create a new flow named `customer-onboarding` and add the CRM trigger.
2. **Add tasks** — configure actions for welcome email, account provisioning, and Slack notification.
3. **Define branching logic** — use conditions to handle enterprise customers differently.
4. **Test in staging** — trigger the flow with sample payloads and verify downstream effects.
5. **Promote to production** — use deployment policies to require review before publishing.

## Validation Checklist

- CRM records reflect the correct onboarding stage
- Welcome email is sent with personalized content
- Slack notification posts to the correct channel

For extensions such as billing integration or analytics instrumentation, see the related guides.

