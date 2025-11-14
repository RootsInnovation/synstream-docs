---
sidebar_position: 1
---

# Concepts Overview

This section provides an overview of key concepts in Synstream, including architecture, message flow, and system design.

## What are Concepts?

Concepts are fundamental ideas and patterns in Synstream that help you understand how the system works. This section covers:

- **System Architecture** — how Synstream is built and organized
- **Node Message Flow** — how data flows between nodes
- **Design Principles** — core principles that guide Synstream's design

## System Architecture

Synstream is built on a microservices architecture with the following key components:

- **Console** — web-based management interface
- **Pipeline Studio** — visual flow designer
- **Execution Engine** — runtime for pipeline execution
- **API Gateway** — RESTful API layer
- **Storage Layer** — persistent data storage

## Design Principles

- **Scalability** — horizontal scaling for high throughput
- **Reliability** — fault tolerance and error recovery
- **Extensibility** — plugin architecture for custom connectors
- **Observability** — comprehensive logging and monitoring

## Node Message Flow

Synstream uses a message-based flow system similar to Node-RED, where data flows between nodes as messages. Each node receives messages, processes them, and sends messages to connected nodes.

## Key Concepts

### Architecture

Learn about Synstream's system architecture and design principles:
- System components and their roles
- Design principles and patterns
- Scalability and reliability features

### Node Message Flow

Understand how data flows between nodes:
- Message-based flow system
- Node connections and message passing
- Parallel and sequential processing

## Next Steps

- [Architecture](./architecture) — learn about system architecture
- [Node Message Flow](./node-message-flow) — understand message flow concepts
- [Nodes Overview](../nodes/overview) — learn about individual nodes

