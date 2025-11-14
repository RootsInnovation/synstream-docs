---
sidebar_position: 1
---

# Troubleshooting

Use this checklist when something isn’t working as expected.

## Flows Fail to Deploy

- Confirm you are targeting the correct environment.
- Run `synstream validate` to surface schema issues.
- Check that required secrets are configured.

## Tasks Timeout

- Inspect retry configuration and provider rate limits.
- Use the execution timeline to identify the slow step.
- Consider adding circuit breakers or fallback handlers.

## Missing Notifications

- Verify subscription settings in the dashboard.
- Ensure the downstream channel (email, chat, webhook) is authorized.
- Check the event bus status page for incidents.

Still stuck? Capture the flow execution ID and contact support with logs and relevant timestamps.

