---
sidebar_position: 2
---

# Quickstart: Launch Your First Flow

Follow these steps to publish a basic Synstream flow in under 10 minutes.

## 1. Install the CLI

```bash
npm install -g @synstream/cli
```

Log in with your Synstream credentials:

```bash
synstream login
```

## 2. Scaffold a Project

```bash
synstream init my-flow
cd my-flow
npm install
```

The template includes a sample flow, environment configuration, and deploy script.

## 3. Configure Secrets

Update `.synstream/config.json` with the API keys for your connected services. Use `synstream secrets set` to store sensitive values securely.

## 4. Deploy

```bash
npm run deploy
```

The CLI uploads the flow, runs validation, and publishes it to your selected environment. Verify the deployment in the Synstream dashboard.

Next steps: explore the Guides section for deeper scenarios and customization patterns.

