---
sidebar_position: 4
---

# Transform Nodes

Learn how to use transform nodes in Synstream workflows. These nodes transform and process data in various ways.

## Function Node

The Function node executes custom functions to transform data.

### Configuration

```json
{
  "type": "function",
  "code": "function transform(data) { return data.map(item => item * 2); }",
  "input": "$.data",
  "output": "$.result"
}
```

### Use Cases

- Custom data transformation
- Data calculations
- Data filtering

## MultiTask Node

The MultiTask node forks and joins parallel tasks.

### Fork Configuration

```json
{
  "type": "multitask",
  "operation": "fork",
  "count": 3,
  "tasks": ["task1", "task2", "task3"]
}
```

### Join Configuration

```json
{
  "type": "multitask",
  "operation": "join",
  "tasks": ["task1", "task2", "task3"],
  "merge": "concat"
}
```

### Use Cases

- Parallel processing
- Task forking
- Task joining

## Hash Node

The Hash node hashes data values.

### Configuration

```json
{
  "type": "hash",
  "algorithm": "sha256",
  "input": "$.data",
  "output": "$.hash"
}
```

### Use Cases

- Data hashing
- Data encryption
- Data validation

## Filter Node

The Filter node filters data based on conditions.

### Configuration

```json
{
  "type": "filter",
  "condition": "$.data.value > 100",
  "input": "$.data",
  "output": "$.filtered"
}
```

### Use Cases

- Data filtering
- Condition-based filtering
- Data selection

## Sort Node

The Sort node sorts data.

### Configuration

```json
{
  "type": "sort",
  "key": "date",
  "order": "asc",
  "input": "$.data",
  "output": "$.sorted"
}
```

### Use Cases

- Data sorting
- Ordering data
- Data organization

## Aggregate Node

The Aggregate node aggregates data.

### Configuration

```json
{
  "type": "aggregate",
  "operation": "sum",
  "key": "amount",
  "input": "$.data",
  "output": "$.aggregated"
}
```

### Use Cases

- Data aggregation
- Data summarization
- Data analysis

## Map Node

The Map node transforms data structures.

### Configuration

```json
{
  "type": "map",
  "mapping": {
    "oldKey": "newKey",
    "oldValue": "newValue"
  },
  "input": "$.data",
  "output": "$.mapped"
}
```

### Use Cases

- Data structure transformation
- Key mapping
- Value transformation

## Next Steps

- [Advanced Nodes](./advanced-nodes) — explore advanced node features
- [Common Nodes](./common-nodes) — review common nodes
- [Extract and Load Nodes](./extract-load-nodes) — understand data extraction and loading

