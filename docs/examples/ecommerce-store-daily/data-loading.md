---
sidebar_position: 4
---

# Data Loading

This guide shows you how to load processed data into data warehouses, reporting systems, or other target systems.

## Loading Targets

### Data Warehouse
- **Cloud Data Warehouses** — load data into Snowflake, BigQuery, Redshift, etc.
- **On-Premises Data Warehouses** — load data into SQL Server, PostgreSQL, etc.

### Reporting Systems
- **Business Intelligence Tools** — load data into Tableau, Power BI, etc.
- **Analytics Platforms** — load data into Google Analytics, etc.

### Other Systems
- **CRM Systems** — sync customer data to CRM systems
- **Inventory Systems** — update inventory levels in inventory systems

## Loading Strategies

### Full Load
- Replace all existing data with new data
- Suitable for small datasets or when complete refresh is needed

### Incremental Load
- Load only new or changed data
- More efficient for large datasets
- Requires tracking of last load timestamp

### Upsert (Update or Insert)
- Update existing records or insert new records
- Maintains data consistency
- Requires unique key identification

## Configuration

### Data Warehouse Configuration

```javascript
// Configure data warehouse connection
const warehouseConfig = {
  host: process.env.WAREHOUSE_HOST,
  database: process.env.WAREHOUSE_DB,
  username: process.env.WAREHOUSE_USER,
  password: process.env.WAREHOUSE_PASSWORD,
  schema: 'daily_sales',
};
```

### Loading Example

```javascript
// Load data into data warehouse
async function loadData(transformedData, config) {
  const connection = await createConnection(config);
  
  for (const record of transformedData) {
    await connection.upsert('sales', record, {
      key: 'saleId',
      updateFields: ['date', 'amount', 'items'],
    });
  }
  
  await connection.close();
}
```

## Data Quality Checks

- **Row Count Validation** — verify expected number of records loaded
- **Data Integrity Checks** — ensure data integrity after loading
- **Error Handling** — handle loading errors and retries

## Scheduling

- **Daily Schedule** — run pipeline daily at a specific time
- **Error Notifications** — send notifications on loading failures
- **Monitoring** — monitor loading performance and success rates

## Next Steps

- Return to [Overview](./overview) for the complete pipeline
- Explore other [Examples](../overview) for more use cases

