---
sidebar_position: 1
---

# Start Node

The Start node triggers workflow execution. It can be configured with cron schedules, manual triggers, or event triggers.

## Configuration

```json
{
  "type": "start",
  "schedule": "0 9 * * *",
  "trigger": "cron"
}
```

## Use Cases

- Scheduled data processing
- Manual workflow execution
- Event-driven workflows

## Example

A Start node configured with a cron schedule `0 9 * * *` will trigger the workflow daily at 9 AM.

