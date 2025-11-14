---
sidebar_position: 1
---

# Synstream Architecture

Understanding the core components of Synstream helps you design resilient flows and integrations.

## Core Services

- **Flow Engine** — orchestrates tasks, manages retries, and enforces SLAs.
- **Connector Framework** — standardizes communication with third-party APIs.
- **Event Bus** — streams events between flows and external subscribers.
- **Workspace Manager** — handles identity, roles, and environment isolation.

## Environments

Every workspace includes development, staging, and production environments. Deployments are promoted through these stages to ensure quality.

## Data Model

- **Flows** describe orchestration logic.
- **Tasks** execute discrete actions within a flow.
- **Events** capture state changes and audit trails.
- **Secrets** securely store credentials referenced by tasks.

## Observability

Synstream emits metrics and logs for each flow execution. Integrate with your monitoring stack or consume them directly within the dashboard.

Explore additional concepts such as permissions, rate limiting, and disaster recovery in the subsections of this chapter.

