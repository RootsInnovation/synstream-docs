---
sidebar_position: 1
---

# Nodes Overview

Learn how to use nodes in the Synstream workflow designer. Nodes are the building blocks of workflows, each performing a specific function in your data processing pipeline.

## What are Nodes?

Nodes are reusable components that perform specific operations in a workflow. They can be connected together to create complex data processing pipelines. Each node has:

- **Inputs** — data or triggers that activate the node
- **Outputs** — data or events produced by the node
- **Configuration** — settings that customize node behavior
- **Status** — current state (ready, running, error, etc.)

## Node Categories

### Common Nodes

Basic nodes for workflow control and debugging:

- **Start** — trigger workflow execution
- **Inject** — inject data into the workflow
- **Debug** — output data for debugging
- **Complete** — mark workflow completion
- **Catch** — handle errors
- **Status** — check workflow status
- **Link In/Out** — create workflow links
- **Comment** — add comments to workflows

### Extract and Load Nodes

Nodes for data extraction and loading:

- **XLSX** — extract/load Excel files
- **JSON** — extract/load JSON files
- **CSV** — extract/load CSV files
- **Database** — extract/load from databases
- **API** — extract/load via API calls
- **File System** — extract/load from file systems

### Transform Nodes

Nodes for data transformation:

- **Function** — execute custom functions
- **MultiTask** — fork and join parallel tasks
- **Hash** — hash data values
- **Filter** — filter data based on conditions
- **Sort** — sort data
- **Aggregate** — aggregate data
- **Map** — transform data structures

### Advanced Nodes

Advanced nodes for complex operations:

- **TimeTrace** — trace execution time
- **Validation** — validate data
- **Encryption** — encrypt/decrypt data
- **Compression** — compress/decompress data
- **Scheduling** — schedule workflow execution

## Using Nodes

### Adding Nodes

1. Open the workflow designer
2. Browse nodes in the left sidebar
3. Drag and drop nodes onto the canvas
4. Connect nodes by dragging from output to input

### Configuring Nodes

1. Click on a node to select it
2. Configure node settings in the right sidebar
3. Set input parameters
4. Configure output settings

### Connecting Nodes

1. Drag from a node's output connector
2. Drop onto another node's input connector
3. Nodes are connected with a line
4. Data flows from output to input

## Next Steps

- [Common Nodes](./common-nodes) — learn about common nodes
- [Extract and Load Nodes](./extract-load-nodes) — understand data extraction and loading
- [Transform Nodes](./transform-nodes) — learn about data transformation
- [Advanced Nodes](./advanced-nodes) — explore advanced node features

