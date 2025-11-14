---
sidebar_position: 5
---

# Enter Product

Learn how to access your product's Pipeline Studio from the Synstream Console. The Pipeline Studio is where you design and manage your automation workflows.

## Prerequisites

- Logged into the Synstream Console
- A product must be created (see [Create Product](./create-product))

## Step 1: Access Products in Console

1. In the Console, navigate to **Products** section
2. You'll see a list of all products in your workspace

## Step 2: Enter a Product

1. Find the product you want to access
2. Click on the product name or the **Enter** button
3. You'll be redirected to the product's Pipeline Studio interface

## Step 3: Navigate the Pipeline Studio Interface

The Pipeline Studio consists of several key areas:

### Top Navigation Bar

- **Product Name** — displays the current product
- **Tabs** — switch between different pipeline flows (Usecase 5, Usecase 6, Firebase, etc.)
- **Deploy** — deploy your pipeline to the target environment
- **Menu** — access settings and additional options
- **Back to Console** — return to the Console

### Left Sidebar

- **Node Library** — browse available nodes and connectors
- **Filter Nodes** — search for specific nodes by name or category
- **Node Categories**:
  - Common (inject, debug, complete, catch, status, etc.)
  - Extract and Load (XLSX, JSON, CSV, etc.)
  - Transform (MultiTask, Function, Hash, etc.)
  - And more...

### Main Canvas

- **Grid Background** — drag-and-drop area for building flows
- **Node Connections** — connect nodes to create workflow logic
- **Node Status** — view execution status (ready, running, error, etc.)

### Right Sidebar

- **Git Integration** — view Git status, stage changes, commit, and push
- **Git History** — browse commit history and reset to previous versions
- **Node Properties** — configure selected node settings

## Step 4: Create Your First Flow

1. **Add a Start Node**
   - Drag a **Start (cron)** node from the node library to the canvas
   - Configure the cron schedule (e.g., "0 9 * * *" for daily at 9 AM)

2. **Add Processing Nodes**
   - Drag nodes from the library to the canvas
   - Connect nodes by dragging from one node's output to another's input
   - Configure each node's properties in the right sidebar

3. **Add an End Node**
   - Add a **Complete** node to mark the end of your flow
   - Connect the final processing node to the Complete node

4. **Save Your Flow**
   - Click **Save** or use Git to commit your changes
   - Your flow is automatically saved to the studio

## Step 5: Deploy Your Pipeline

1. Click the **Deploy** button in the top navigation
2. Select the target environment
3. Review the deployment configuration
4. Click **Deploy** to publish your pipeline

## Tips for Using Pipeline Studio

- **Use Keyboard Shortcuts** — press `?` to view available shortcuts
- **Zoom and Pan** — use mouse wheel to zoom, drag to pan the canvas
- **Node Search** — use the filter bar to quickly find nodes
- **Version Control** — commit frequently to track changes in Git
- **Test Before Deploy** — use the debug node to test individual components

## Next Steps

- Review [Concepts](https://rootsinnovation.github.io/synstream-docs/developers/architecture/architecture) to understand flow design principles
- Check [Troubleshooting](../troubleshooting/common-issues) for common issues

## Troubleshooting

### Cannot Access Product

- Verify you have the necessary permissions in the Console
- Check that the product is in an "Active" state
- Contact your workspace admin if access is denied

### Pipeline Studio Loads Slowly

- Check your network connection
- Clear browser cache and reload
- Try a different browser if issues persist

### Git Integration Not Working

- Verify Git credentials are configured in product settings
- Check repository permissions
- Ensure network connectivity to Git provider

