---
sidebar_position: 3
---

# Data Transformation

This guide explains how to clean, validate, and transform data from e-commerce platforms and physical stores into a unified format.

## Transformation Steps

### 1. Data Cleaning
- **Remove Duplicates** — eliminate duplicate records
- **Handle Missing Values** — fill or remove missing data
- **Standardize Formats** — normalize date formats, currency, etc.

### 2. Data Validation
- **Schema Validation** — verify data matches expected schema
- **Business Rules** — validate against business logic
- **Data Quality Checks** — ensure data completeness and accuracy

### 3. Data Transformation
- **Data Mapping** — map fields from different sources to common schema
- **Data Enrichment** — add calculated fields and derived data
- **Data Aggregation** — aggregate data at different levels

## Example Transformation

### Clean and Standardize Sales Data

```javascript
// Clean sales data
function cleanSalesData(rawData) {
  return rawData.map(sale => ({
    saleId: sale.id,
    date: normalizeDate(sale.date),
    amount: parseFloat(sale.amount),
    currency: 'USD',
    customerId: sale.customer_id,
    storeId: sale.store_id,
    items: sale.items.map(item => ({
      productId: item.product_id,
      quantity: parseInt(item.quantity),
      price: parseFloat(item.price),
    })),
  }));
}
```

### Merge Data from Multiple Sources

```javascript
// Merge e-commerce and store data
function mergeSalesData(ecommerceData, storeData) {
  const merged = [...ecommerceData, ...storeData];
  return merged.sort((a, b) => new Date(a.date) - new Date(b.date));
}
```

## Validation Rules

- **Required Fields** — ensure all required fields are present
- **Data Types** — validate data types match expected types
- **Value Ranges** — check values are within acceptable ranges
- **Business Logic** — validate against business rules

## Error Handling

- **Invalid Data** — log and handle invalid data records
- **Transformation Errors** — catch and handle transformation errors
- **Data Quality Issues** — flag data quality issues for review

## Next Steps

- [Data Loading](./data-loading) — learn how to load transformed data
- Return to [Overview](./overview) for the complete pipeline

