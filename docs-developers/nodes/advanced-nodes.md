---
sidebar_position: 5
---

# Advanced Nodes

Learn how to use advanced nodes in Synstream workflows. These nodes provide advanced functionality for complex workflows.

## TimeTrace Node

The TimeTrace node traces execution time of workflow components.

### Configuration

```json
{
  "type": "timetrace",
  "start": "$.start",
  "end": "$.end",
  "output": "$.duration"
}
```

### Use Cases

- Performance monitoring
- Execution time tracking
- Performance optimization

## Validation Node

The Validation node validates data against schemas.

### Configuration

```json
{
  "type": "validation",
  "schema": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "age": { "type": "number" }
    }
  },
  "input": "$.data",
  "output": "$.validated"
}
```

### Use Cases

- Data validation
- Schema validation
- Data quality checks

## Encryption Node

The Encryption node encrypts and decrypts data.

### Encryption Configuration

```json
{
  "type": "encryption",
  "operation": "encrypt",
  "algorithm": "aes-256-cbc",
  "key": "$.key",
  "input": "$.data",
  "output": "$.encrypted"
}
```

### Decryption Configuration

```json
{
  "type": "encryption",
  "operation": "decrypt",
  "algorithm": "aes-256-cbc",
  "key": "$.key",
  "input": "$.encrypted",
  "output": "$.decrypted"
}
```

### Use Cases

- Data encryption
- Data decryption
- Data security

## Compression Node

The Compression node compresses and decompresses data.

### Compression Configuration

```json
{
  "type": "compression",
  "operation": "compress",
  "algorithm": "gzip",
  "input": "$.data",
  "output": "$.compressed"
}
```

### Decompression Configuration

```json
{
  "type": "compression",
  "operation": "decompress",
  "algorithm": "gzip",
  "input": "$.compressed",
  "output": "$.decompressed"
}
```

### Use Cases

- Data compression
- Data decompression
- Storage optimization

## Scheduling Node

The Scheduling node schedules workflow execution.

### Configuration

```json
{
  "type": "scheduling",
  "schedule": "0 9 * * *",
  "timezone": "UTC",
  "workflow": "daily-processing"
}
```

### Use Cases

- Workflow scheduling
- Scheduled execution
- Time-based triggers

## Next Steps

- [Common Nodes](./common-nodes) — review common nodes
- [Extract and Load Nodes](./extract-load-nodes) — understand data extraction and loading
- [Transform Nodes](./transform-nodes) — learn about data transformation

