---
sidebar_position: 2
---

# FAQ

Frequently asked questions about Synstream.

## General Questions

### What is Synstream?

Synstream is an enterprise-grade workflow automation platform that helps teams orchestrate customer journeys, back-office operations, and AI-driven experiences with reliability, auditability, and speed.

### What are the key features of Synstream?

- **Resilient execution** — advanced retry policies, circuit breakers, and observability
- **Versioned flow design** — native Git history for every flow
- **Connector ecosystem** — integrate dozens of SaaS and on-premises systems
- **AI-first tooling** — built-in assistants for flow logic and code generation
- **Cloud and on-premises deployment** — flexible deployment options

### Who is Synstream for?

Synstream is designed for teams that need:
- Reliable workflow automation
- Enterprise-grade error handling
- Version control for workflows
- Integration with multiple systems
- AI-assisted development

## Installation and Setup

### What are the system requirements?

- Kubernetes cluster v1.21.x or later on Linux
- `kubectl` configured to access your cluster
- Helm 3.x or later
- (Optional) StorageClass for persistent volumes
- (Optional) Ingress controller for external access

### How do I install Synstream?

Follow the [Quickstart Guide](/docs/getting-started/quickstart) for installation instructions using Helm.

### Can I deploy Synstream on-premises?

Yes, Synstream supports both cloud and on-premises deployment. See the [Installation Guide](/docs/getting-started/quickstart) for details.

## Usage Questions

### How do I create my first pipeline?

1. Register and log into the Console
2. Create a product in the Console
3. Enter the product to access Pipeline Studio
4. Design your pipeline using the visual flow designer
5. Deploy your pipeline

See the [Guides](/docs/guides/overview) for detailed instructions.

### How do I integrate with external systems?

Synstream provides a connector ecosystem that supports integration with dozens of SaaS and on-premises systems. See the [Nodes](/developers/nodes/overview) section to learn about available nodes and connectors.

### How do I handle errors in my pipeline?

Synstream includes advanced error handling features:
- Retry policies with exponential backoff
- Circuit breakers
- Error logging and monitoring
- Fallback mechanisms

See the [Troubleshooting Guide](/docs/troubleshooting/common-issues) for more information.

## Support and Contact

### How do I get support?

Contact us at [contact.us@rtsinv.com](mailto:contact.us@rtsinv.com) for support.

### Where can I find more resources?

- [Documentation](/docs/intro) — comprehensive documentation
- [Examples](/docs/examples/overview) — real-world examples
- [GitHub](https://github.com/RootsInnovation/synstream-docs) — source code and issues

