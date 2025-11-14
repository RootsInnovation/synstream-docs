---
sidebar_position: 5
---

# Load Data

Learn how to load processed data into the cloud data warehouse.

## Overview

After data extraction and transformation, the unified dataset needs to be loaded into the cloud data warehouse for business intelligence tools like Power BI.

## Loading Process

### Step 1: Final Processing

Before loading, add a TimeTrace node to monitor processing time:

```json
{
  "type": "timetrace",
  "operation": "log",
  "metric": "processing_time"
}
```

This helps track workflow performance and identify bottlenecks.

### Step 2: Configure XLSX Load Node

Add an XLSX (load) node to save the unified dataset:

```json
{
  "type": "xlsx",
  "operation": "load",
  "file": "/data/warehouse/daily_summary.xlsx",
  "sheet": "Summary",
  "data": "$.data"
}
```

**Configuration Details:**
- **File Path**: Output file location
- **Sheet**: Sheet name in the Excel file
- **Data**: Reference to the transformed data from previous node

### Step 3: Upload to Cloud Data Warehouse

Configure the upload to cloud storage:

```json
{
  "type": "cloud_storage",
  "operation": "upload",
  "provider": "aws_s3",
  "bucket": "synstream-data-warehouse",
  "path": "daily-reports/{{date}}/summary.xlsx",
  "file": "/data/warehouse/daily_summary.xlsx"
}
```

### Step 4: Complete ETL Node

Add a Complete ETL node to mark workflow completion:

```json
{
  "type": "complete_etl",
  "status": "success",
  "message": "Daily ETL process completed successfully"
}
```

## Output Format

The loaded data will have the following structure:

| Column | Description |
|--------|-------------|
| `product_id` | Product identifier |
| `product_name` | Product name |
| `total_quantity` | Total quantity sold (combined from POS and online) |
| `total_revenue` | Total revenue (in TWD) |
| `stock` | Current stock level |
| `supplier` | Supplier name |
| `extract_at` | Timestamp of data extraction |

## Data Warehouse Integration

### Power BI Access

Once data is loaded to the cloud data warehouse:

1. Power BI connects to the data warehouse
2. Refreshes data automatically
3. Displays latest omnichannel sales reports
4. Updates dashboards with new data

### Scheduling

The workflow runs daily at 3 AM, ensuring:

- Data is processed before business hours
- Reports are ready by 6 AM
- Fresh data available for morning meetings

## Best Practices

- **Error Handling** — handle upload failures gracefully
- **Data Validation** — validate data before loading
- **Monitoring** — monitor load performance and success rates
- **Backup** — keep backup copies of loaded data
- **Versioning** — version control for data warehouse schemas

## Next Steps

- [Conclusion](./conclusion) — review best practices and next steps
- [Transform Data](./transform-data) — review data transformation

