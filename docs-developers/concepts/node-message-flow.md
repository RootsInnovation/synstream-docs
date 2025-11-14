---
sidebar_position: 3
---

# Node Message Flow

Learn how data flows between nodes in Synstream workflows, based on the Node-RED concept.

## Overview

Synstream uses a message-based flow system similar to Node-RED, where data flows between nodes as messages. Each node receives messages, processes them, and sends messages to connected nodes.

## Message Flow Concept

### What is a Message?

A message is a data structure that flows between nodes. Each message contains:

- **Payload** — the actual data (can be any type: object, array, string, number, etc.)
- **Topic** — optional topic or subject for the message
- **Properties** — additional metadata (timestamp, source, etc.)
- **Context** — workflow context and state

### Message Structure

```javascript
{
  payload: { /* actual data */ },
  topic: "optional-topic",
  timestamp: 1234567890,
  source: "node-id",
  context: { /* workflow context */ }
}
```

## How Messages Flow

### Message Flow Process

1. **Node Receives Message** — a node receives a message from a previous node
2. **Node Processes Message** — the node processes the message based on its configuration
3. **Node Sends Message** — the node sends one or more messages to connected nodes
4. **Next Node Receives** — the next node receives the message and repeats the process

### Flow Direction

Messages flow in one direction:

- **Input** — messages enter a node from its input connector
- **Processing** — the node processes the message
- **Output** — messages exit a node from its output connector
- **Next Node** — messages flow to the next connected node

## Node Connections

### Connecting Nodes

Nodes are connected by dragging from one node's output to another node's input:

1. **Output Connector** — each node has one or more output connectors
2. **Input Connector** — each node has one or more input connectors
3. **Connection** — a connection links an output to an input
4. **Flow** — messages flow along connections

### Multiple Connections

A node can have:

- **Multiple Outputs** — a node can send messages to multiple nodes
- **Multiple Inputs** — a node can receive messages from multiple nodes
- **Parallel Processing** — messages from different inputs are processed independently

## Message Processing

### Sequential Processing

Messages are processed sequentially:

1. Node receives message 1
2. Node processes message 1
3. Node sends result 1
4. Node receives message 2
5. Node processes message 2
6. Node sends result 2

### Parallel Processing

Multiple nodes can process messages in parallel:

1. Node A receives message 1
2. Node B receives message 2
3. Both nodes process simultaneously
4. Results are sent to next nodes

### Message Cloning

When a node sends messages to multiple nodes:

- **Message Cloning** — the message is cloned for each connection
- **Independent Processing** — each cloned message is processed independently
- **No Interference** — changes to one message don't affect others

## Example: Simple Flow

### Workflow Structure

```
Start → Extract → Transform → Load → Complete
```

### Message Flow

1. **Start Node** — sends initial message: `{ payload: { trigger: "start" } }`
2. **Extract Node** — receives message, extracts data, sends: `{ payload: { data: [...] } }`
3. **Transform Node** — receives message, transforms data, sends: `{ payload: { transformed: [...] } }`
4. **Load Node** — receives message, loads data, sends: `{ payload: { result: "success" } }`
5. **Complete Node** — receives message, marks workflow complete

## Example: Parallel Flow

### Workflow Structure

```
Start → MultiTask (Fork)
  ├─→ Extract 1 → Transform 1
  ├─→ Extract 2 → Transform 2
  └─→ Extract 3 → Transform 3
      ↓
  MultiTask (Join) → Load → Complete
```

### Message Flow

1. **Start Node** — sends initial message
2. **MultiTask (Fork)** — clones message and sends to three paths
3. **Parallel Processing** — three extract nodes process simultaneously
4. **Transform Nodes** — each transform node processes its data
5. **MultiTask (Join)** — combines results from all three paths
6. **Load Node** — loads combined data
7. **Complete Node** — marks workflow complete

## Message Manipulation

### Modifying Messages

Nodes can modify messages:

- **Change Payload** — modify the payload data
- **Add Properties** — add additional properties
- **Change Topic** — change the message topic
- **Filter Messages** — filter messages based on conditions

### Creating New Messages

Nodes can create new messages:

- **Generate Messages** — generate new messages from scratch
- **Clone Messages** — clone existing messages
- **Split Messages** — split one message into multiple messages
- **Merge Messages** — merge multiple messages into one

## Best Practices

### Message Design

- **Keep Payloads Simple** — use simple data structures when possible
- **Use Topics** — use topics to categorize messages
- **Add Metadata** — add metadata for debugging and tracking
- **Preserve Context** — preserve workflow context in messages

### Flow Design

- **Single Responsibility** — each node should have a single responsibility
- **Clear Flow** — design clear message flow paths
- **Error Handling** — handle errors gracefully
- **Performance** — optimize message processing for performance

## Next Steps

- [Architecture](../architecture/architecture) — learn about system architecture
- [Nodes Overview](../nodes/overview) — learn about individual nodes
- [Learning](../learning/overview) — see detailed examples

