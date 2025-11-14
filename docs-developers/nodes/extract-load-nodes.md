---
sidebar_position: 3
---

# Extract and Load Nodes

Learn how to use extract and load nodes in Synstream workflows. These nodes handle data extraction from sources and loading data to destinations.

## XLSX Node

The XLSX node extracts and loads Excel files.

### Extract Configuration

```json
{
  "type": "xlsx",
  "operation": "extract",
  "file": "/path/to/file.xlsx",
  "sheet": "Sheet1",
  "range": "A1:Z100"
}
```

### Load Configuration

```json
{
  "type": "xlsx",
  "operation": "load",
  "file": "/path/to/output.xlsx",
  "sheet": "Sheet1",
  "data": "$.data"
}
```

### Use Cases

- Extract data from Excel files
- Load data to Excel files
- Process spreadsheet data

## JSON Node

The JSON node extracts and loads JSON files.

### Extract Configuration

```json
{
  "type": "json",
  "operation": "extract",
  "file": "/path/to/file.json",
  "path": "$.data.items"
}
```

### Load Configuration

```json
{
  "type": "json",
  "operation": "load",
  "file": "/path/to/output.json",
  "data": "$.data",
  "format": "pretty"
}
```

### Use Cases

- Extract data from JSON files
- Load data to JSON files
- Process JSON data

## CSV Node

The CSV node extracts and loads CSV files.

### Extract Configuration

```json
{
  "type": "csv",
  "operation": "extract",
  "file": "/path/to/file.csv",
  "delimiter": ",",
  "headers": true
}
```

### Load Configuration

```json
{
  "type": "csv",
  "operation": "load",
  "file": "/path/to/output.csv",
  "data": "$.data",
  "delimiter": ",",
  "headers": true
}
```

### Use Cases

- Extract data from CSV files
- Load data to CSV files
- Process CSV data

## Database Node

The Database node extracts and loads data from databases.

### Extract Configuration

```json
{
  "type": "database",
  "operation": "extract",
  "connection": {
    "host": "localhost",
    "database": "mydb",
    "user": "user",
    "password": "password"
  },
  "query": "SELECT * FROM table WHERE date = ?"
}
```

### Load Configuration

```json
{
  "type": "database",
  "operation": "load",
  "connection": {
    "host": "localhost",
    "database": "mydb",
    "user": "user",
    "password": "password"
  },
  "table": "target_table",
  "data": "$.data"
}
```

### Use Cases

- Extract data from databases
- Load data to databases
- Process database data

## API Node

The API node extracts and loads data via API calls.

### Extract Configuration

```json
{
  "type": "api",
  "operation": "extract",
  "url": "https://api.example.com/data",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer token"
  }
}
```

### Load Configuration

```json
{
  "type": "api",
  "operation": "load",
  "url": "https://api.example.com/data",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer token"
  },
  "data": "$.data"
}
```

### Use Cases

- Extract data from APIs
- Load data to APIs
- Process API data

## File System Node

The File System node extracts and loads data from file systems.

### Extract Configuration

```json
{
  "type": "filesystem",
  "operation": "extract",
  "path": "/path/to/files",
  "pattern": "*.csv",
  "recursive": true
}
```

### Load Configuration

```json
{
  "type": "filesystem",
  "operation": "load",
  "path": "/path/to/output",
  "filename": "output.csv",
  "data": "$.data"
}
```

### Use Cases

- Extract data from file systems
- Load data to file systems
- Process file system data

## Next Steps

- [Transform Nodes](./transform-nodes) — learn about data transformation nodes
- [Advanced Nodes](./advanced-nodes) — explore advanced node features
- [Common Nodes](./common-nodes) — review common nodes

