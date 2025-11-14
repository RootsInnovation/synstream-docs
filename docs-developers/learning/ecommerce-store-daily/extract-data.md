---
sidebar_position: 3
---

# Extract Data

Learn how to configure data extraction from multiple sources in parallel.

## Overview

The workflow extracts data from three different sources simultaneously:

- **XLSX** — `inventory.xlsx` from supplier updates
- **JSON** — `online_sales.json` from e-commerce API
- **CSV** — `POS.csv` from store POS systems

## Parallel Extraction Setup

### Step 1: Configure MultiTask Fork Node

After the Start node, add a MultiTask (Fork) node:

```json
{
  "type": "multitask",
  "operation": "fork",
  "count": 3
}
```

This splits the workflow into three parallel paths.

### Step 2: Configure XLSX Extraction (Path 1)

Add an XLSX (extract) node in the first path:

```json
{
  "type": "xlsx",
  "operation": "extract",
  "file": "/data/supplier/inventory.xlsx",
  "sheet": "Sheet1",
  "range": "A1:Z1000"
}
```

**Configuration Details:**
- **File Path**: Location of the inventory Excel file
- **Sheet**: Specify which sheet to read
- **Range**: Define the data range (optional)

### Step 3: Configure JSON Extraction (Path 2)

Add a JSON (extract/file) node in the second path:

```json
{
  "type": "json",
  "operation": "extract",
  "file": "/data/api/online_sales.json",
  "path": "$.data.items"
}
```

**Configuration Details:**
- **File Path**: Location of the JSON file
- **Path**: JSONPath expression to extract specific data
- **Format**: JSON structure handling

### Step 4: Configure CSV Extraction (Path 3)

Add a CSV (extract/file) node in the third path:

```json
{
  "type": "csv",
  "operation": "extract",
  "file": "/data/pos/POS.csv",
  "delimiter": ",",
  "headers": true
}
```

**Configuration Details:**
- **File Path**: Location of the CSV file
- **Delimiter**: CSV delimiter (comma, semicolon, etc.)
- **Headers**: Whether the file has headers

## Data Source Details

### Inventory XLSX

**Columns:**
- `product_id` — Product identifier
- `product_name` — Product name
- `category` — Product category
- `stock` — Current stock level
- `cost_twd` — Cost in TWD
- `supplier` — Supplier name
- `last_update` — Last update timestamp

### Online Sales JSON

**Structure:**
```json
{
  "product_id": "A001",
  "channel": "web",
  "qty": 4,
  "price_twd": 480,
  "date": "2025-11-10"
}
```

### POS CSV

**Columns:**
- `product_id` — Product identifier
- `store_id` — Store identifier
- `quantity` — Quantity sold
- `price_usd` — Price in USD
- `date` — Sale date

## Error Handling

Configure error handling for each extraction node:

- **Retry Policy**: Set retry attempts for failed extractions
- **Error Logging**: Log extraction errors for debugging
- **Fallback**: Handle missing files gracefully

## Best Practices

- **Validate File Existence** — check if files exist before extraction
- **Handle Missing Data** — gracefully handle missing or empty files
- **Monitor Extraction** — log extraction progress and errors
- **Optimize Performance** — use appropriate file reading methods

## Next Steps

- [Transform Data](./transform-data) — learn how to transform extracted data
- [Flow Design Pattern](./flow-design-pattern) — review workflow architecture

