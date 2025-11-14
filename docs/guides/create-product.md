---
sidebar_position: 4
---

# Create Product

This guide shows you how to create a new product in the Synstream Console. Each product contains its own Pipeline Studio where you can design and manage automation flows.

## Prerequisites

- Logged into the Synstream Console
- Appropriate permissions to create products

## Step 1: Navigate to Products

1. In the Console, navigate to **Products** section
2. You'll see a list of your existing products (if any)

## Step 2: Create a New Product

1. Click **Create Product** button
2. Fill in the product configuration:

   **Product Name**
   - Enter a descriptive name for your product
   - Example: "Customer Onboarding", "Data Processing", "Daily ETL"

   **Description** (optional)
   - Provide a brief description of the product's purpose

   **Environment**
   - Select the target environment (Development, Staging, Production)

   **Namespace** (optional)
   - Specify a Kubernetes namespace if deploying to a cluster
   - Leave blank to use the default namespace

3. Click **Create**

## Step 3: Configure Product Settings

After creating the product, configure additional settings:

### Git Integration

1. In the product settings, go to **Git** section
2. Connect your Git repository:
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Authenticate with your Git credentials
   - Select the repository and branch
3. Click **Save**

This enables version control for your pipeline flows.

### Storage Configuration

1. In the product settings, navigate to **Storage** section
2. Configure persistent storage:
   - Select a StorageClass (if using Kubernetes)
   - Set storage size and retention policies
3. Click **Save**

### Access Control

1. In the product settings, go to **Permissions** section
2. Assign team members to the product:
   - Select users from your workspace
   - Assign roles (Admin, Developer, Viewer)
3. Click **Save**

## Step 4: Verify Product Creation

1. Return to the **Products** list in the Console
2. Confirm your new product appears in the list
3. Check that the status shows as **Active**

## Next Steps

- [Enter Product](./enter-product) — access your product's Pipeline Studio from the Console to start designing flows
- Review [Concepts](https://rootsinnovation.github.io/synstream-docs/developers/architecture/architecture) to understand pipeline architecture

## Troubleshooting

### Product Creation Fails

- Verify you have the necessary permissions in the Console
- Check that your workspace has available resources
- Contact support if the issue persists

### Git Integration Issues

- Ensure your Git credentials are valid
- Verify repository access permissions
- Check network connectivity to your Git provider

