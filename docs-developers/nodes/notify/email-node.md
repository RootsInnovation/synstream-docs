---
sidebar_position: 1
---

# Email Node

The Email node sends email notifications. It can be configured to send emails with custom content, attachments, and recipients.

## Configuration

```json
{
  "type": "email",
  "to": "user@example.com",
  "subject": "Workflow Notification",
  "body": "Your workflow has completed successfully.",
  "attachments": []
}
```

## Use Cases

- Send workflow completion notifications
- Alert on errors or failures
- Send reports and summaries
- Notify stakeholders of important events

## Example

An Email node can send a notification when a daily ETL workflow completes, including a summary report as an attachment.

