---
sidebar_position: 1
---

# XLSX Node

The XLSX node extracts and loads Excel files. It supports both reading from and writing to Excel files.

## Extract Configuration

```json
{
  "type": "xlsx",
  "operation": "extract",
  "file": "/path/to/file.xlsx",
  "sheet": "Sheet1",
  "range": "A1:Z100"
}
```

## Load Configuration

```json
{
  "type": "xlsx",
  "operation": "load",
  "file": "/path/to/output.xlsx",
  "sheet": "Sheet1",
  "data": "$.data"
}
```

## Use Cases

- Extract data from Excel files
- Load data to Excel files
- Process spreadsheet data

## Example

An XLSX node can extract inventory data from `inventory.xlsx` and load processed results to `summary.xlsx`.

