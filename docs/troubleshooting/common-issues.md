---
sidebar_position: 1
---

# Troubleshooting

Use this checklist when something isn’t working as expected.

## Flows Fail to Deploy

- Confirm you are targeting the correct environment.
- Check that required secrets are configured.
- **Authentication Issues** — If deployment fails due to authentication errors:
  - Try logging out and logging back in to refresh your session.
  - Verify your current user permissions and role assignments.
  - Confirm that your account has the necessary permissions to deploy flows in the target environment.
  - If permission issues persist, contact the workspace owner or administrator to grant the required access.

## Tasks Timeout

- Inspect retry configuration and provider rate limits.
- Use the execution timeline to identify the slow step.
- Consider adding circuit breakers or fallback handlers.

## Missing Notifications

- Verify subscription settings in the dashboard.
- Ensure the downstream channel (email, chat, webhook) is authorized.
- Check the event bus status page for incidents.

## Error Handling

Synstream provides comprehensive error handling capabilities through node configuration:

- **Error Propagation** — Nodes can be configured to throw errors or pass error information through message payloads, allowing downstream nodes to handle errors appropriately.
- **Retry Mechanisms** — Configure retry strategies at the node level:
  - Set the number of retry attempts
  - Define retry delay intervals
  - Choose between different retry strategies (exponential backoff, linear, fixed interval)
- **Error Handling Strategies** — Nodes support various error handling approaches:
  - **Fail Fast** — Stop execution immediately on error
  - **Continue on Error** — Log the error but continue processing
  - **Fallback Handler** — Execute alternative logic when errors occur
  - **Error Routing** — Route error messages to dedicated error handling nodes
- **Custom Error Messages** — Configure custom error messages and metadata to aid in debugging and monitoring.

For detailed configuration options, see the node-specific documentation in the [Node Library](/developers/nodes/overview).

## Docker Deployment

Yes, Synstream can be deployed on Docker. Docker deployment requires special configuration and setup considerations:

- **Container Configuration** — Proper container setup with required dependencies and environment variables
- **Network Configuration** — Network settings for inter-container communication
- **Volume Management** — Persistent storage configuration for data and logs
- **Resource Limits** — CPU and memory allocation for optimal performance
- **Orchestration** — Integration with container orchestration platforms (Docker Compose, Kubernetes, etc.)

For Docker deployment guidance and best practices, please contact our support team or refer to the deployment documentation for detailed setup instructions.

## AI Model Support

Synstream supports a wide range of AI models and frameworks:

- **OpenAI** — Full compatibility with OpenAI's API and models (GPT-3.5, GPT-4, etc.)
- **Google Gemini** — Support for Google's Gemini models
- **Anthropic Claude** — Integration with Anthropic's Claude models
- **OpenAI-Compatible APIs** — Support for OpenAI-compatible endpoints, including:
  - **LM Studio** — Local LLM hosting and management
  - **Ollama** — Local model deployment and inference
  - Other OpenAI-compatible services and self-hosted LLM solutions
- **Custom Models** — Deploy and use your own models:
  - Self-hosted LLM instances
  - Custom model endpoints
  - Private model deployments

You can configure AI nodes to use any of these models by specifying the appropriate API endpoint and authentication credentials. For detailed configuration instructions, see the [AI Nodes documentation](/developers/nodes/overview).

Still stuck? Capture the flow execution ID and contact support with logs and relevant timestamps.

