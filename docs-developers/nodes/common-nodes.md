---
sidebar_position: 2
---

# Common Nodes

Learn how to use common nodes in Synstream workflows. These nodes provide basic workflow control and debugging capabilities.

## Start Node

The Start node triggers workflow execution. It can be configured with:

- **Cron Schedule** — schedule workflow execution (e.g., "0 9 * * *" for daily at 9 AM)
- **Manual Trigger** — trigger workflow manually
- **Event Trigger** — trigger workflow on events

### Configuration

```json
{
  "type": "start",
  "schedule": "0 9 * * *",
  "trigger": "cron"
}
```

### Use Cases

- Scheduled data processing
- Manual workflow execution
- Event-driven workflows

## Inject Node

The Inject node injects data into the workflow. It's useful for:

- Testing workflows
- Providing initial data
- Debugging workflows

### Configuration

```json
{
  "type": "inject",
  "data": {
    "key": "value"
  }
}
```

### Use Cases

- Workflow testing
- Data injection
- Debugging

## Debug Node

The Debug node outputs data for debugging purposes. It can:

- Display data in the console
- Log data to files
- Send data to debugging tools

### Configuration

```json
{
  "type": "debug",
  "output": "console",
  "format": "json"
}
```

### Use Cases

- Workflow debugging
- Data inspection
- Troubleshooting

## Complete Node

The Complete node marks workflow completion. It:

- Signals workflow completion
- Provides completion status
- Handles cleanup operations

### Configuration

```json
{
  "type": "complete",
  "status": "success",
  "message": "Workflow completed successfully"
}
```

### Use Cases

- Workflow completion
- Status reporting
- Cleanup operations

## Catch Node

The Catch node handles errors in workflows. It can:

- Catch errors from previous nodes
- Handle error conditions
- Provide error recovery

### Configuration

```json
{
  "type": "catch",
  "errorHandler": "log",
  "recovery": "retry"
}
```

### Use Cases

- Error handling
- Error recovery
- Error logging

## Status Node

The Status node checks workflow status. It can:

- Check workflow execution status
- Monitor node status
- Report workflow health

### Configuration

```json
{
  "type": "status",
  "check": "workflow",
  "report": "health"
}
```

### Use Cases

- Status monitoring
- Health checks
- Workflow monitoring

## Link Nodes

Link nodes create workflow links:

- **Link In** — receive data from other workflows
- **Link Out** — send data to other workflows
- **Link Call** — call other workflows

### Configuration

```json
{
  "type": "link",
  "direction": "in",
  "workflow": "other-workflow"
}
```

### Use Cases

- Workflow composition
- Modular workflows
- Workflow reuse

## Comment Node

The Comment node adds comments to workflows. It's useful for:

- Documenting workflows
- Adding notes
- Explaining workflow logic

### Configuration

```json
{
  "type": "comment",
  "text": "This workflow processes daily sales data"
}
```

### Use Cases

- Workflow documentation
- Notes and explanations
- Workflow comments

## Next Steps

- [Extract and Load Nodes](./extract-load-nodes) — learn about data extraction and loading nodes
- [Transform Nodes](./transform-nodes) — understand data transformation nodes
- [Advanced Nodes](./advanced-nodes) — explore advanced node features

