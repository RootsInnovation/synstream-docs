---
sidebar_position: 2
---

# Quickstart

Get Synstream up and running on Kubernetes in minutes.

## Step 1: Add the Helm Repository

```bash
helm repo add roots-innovation https://rootsinnovation.github.io/helm-charts
helm repo update
```

## Step 2: Install Synstream Components

Install both the Synstream Operator and Manager into your cluster:

```bash
# Install Synstream Operator
helm install synstream-operator roots-innovation/synstream-operator \
  --namespace synstream-operator \
  --create-namespace

# Install Synstream Manager
helm install synstream-manager roots-innovation/synstream-manager \
  --namespace synstream-operator

# Install Synstream Console
helm install synstream-console roots-innovation/synstream-console \
  --namespace synstream \
  --create-namespace \
  --set 'global.imagePullSecrets[0].name=ghcr-imagepullsecret'
```

Review the full list of configuration values in the [Helm chart reference](https://rootsinnovation.github.io/helm-charts/).

Next steps:

- Configure ingress and TLS for your environment.
- Connect the Synstream Manager to your identity provider.
- Follow the Guides section to publish your first automated flow.

