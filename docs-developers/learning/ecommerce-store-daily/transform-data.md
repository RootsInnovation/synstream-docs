---
sidebar_position: 4
---

# Transform Data

Learn how to transform and standardize data from different sources.

## Overview

After extracting data from three sources, each data stream needs to be transformed to a unified format before consolidation.

## Transformation Strategy

### Step 1: Individual Path Transformations

Each parallel path has a Function node that transforms its specific data format:

#### Path 1: Inventory XLSX Transformation

Transform inventory data to standard format:

```javascript
function transformInventory(data) {
  return data.map(item => ({
    product_id: item.product_id,
    product_name: item.product_name,
    category: item.category,
    stock: parseInt(item.stock),
    cost_twd: parseFloat(item.cost_twd),
    supplier: item.supplier,
    last_update: new Date(item.last_update).toISOString()
  }));
}
```

#### Path 2: Online Sales JSON Transformation

Transform online sales data to standard format:

```javascript
function transformOnlineSales(data) {
  return data.map(item => ({
    product_id: item.product_id,
    channel: item.channel,
    quantity: parseInt(item.qty),
    price: parseFloat(item.price_twd),
    date: new Date(item.date).toISOString(),
    source: 'online'
  }));
}
```

#### Path 3: POS CSV Transformation

Transform POS data to standard format:

```javascript
function transformPOS(data) {
  return data.map(item => ({
    product_id: item.product_id,
    store_id: item.store_id,
    quantity: parseInt(item.quantity),
    price: parseFloat(item.price_usd) * 32, // Convert USD to TWD
    date: new Date(item.date).toISOString(),
    source: 'pos'
  }));
}
```

### Step 2: Join and Consolidate

After the MultiTask (Join) node combines all three paths, add a Function node for final consolidation:

```javascript
function consolidateData(joinedData) {
  // joinedData contains arrays from all three paths
  const [inventory, onlineSales, posSales] = joinedData;
  
  // Create a map of products with inventory info
  const productMap = {};
  inventory.forEach(item => {
    productMap[item.product_id] = {
      product_name: item.product_name,
      category: item.category,
      stock: item.stock,
      supplier: item.supplier
    };
  });
  
  // Combine sales from online and POS
  const allSales = [...onlineSales, ...posSales];
  
  // Aggregate sales by product
  const salesByProduct = {};
  allSales.forEach(sale => {
    if (!salesByProduct[sale.product_id]) {
      salesByProduct[sale.product_id] = {
        product_id: sale.product_id,
        total_quantity: 0,
        total_revenue: 0
      };
    }
    salesByProduct[sale.product_id].total_quantity += sale.quantity;
    salesByProduct[sale.product_id].total_revenue += sale.quantity * sale.price;
  });
  
  // Merge inventory and sales data
  return Object.keys(salesByProduct).map(productId => ({
    product_id: productId,
    product_name: productMap[productId]?.product_name || 'Unknown',
    total_quantity: salesByProduct[productId].total_quantity,
    total_revenue: salesByProduct[productId].total_revenue,
    stock: productMap[productId]?.stock || 0,
    supplier: productMap[productId]?.supplier || 'Unknown',
    extract_at: new Date().toISOString()
  }));
}
```

## Data Standardization

### Common Transformations

1. **Date Format** — convert all dates to ISO 8601 format
2. **Currency Conversion** — normalize all prices to TWD
3. **Data Types** — ensure consistent data types (integers, floats, strings)
4. **Field Names** — standardize field names across sources
5. **Data Validation** — validate required fields and data ranges

### Validation Rules

Add validation in transformation functions:

```javascript
function validateData(item) {
  if (!item.product_id) {
    throw new Error('Missing product_id');
  }
  if (item.quantity < 0) {
    throw new Error('Invalid quantity');
  }
  return item;
}
```

## Best Practices

- **Standardize Early** — transform data as early as possible in the pipeline
- **Validate Data** — validate data at each transformation step
- **Handle Errors** — gracefully handle transformation errors
- **Log Transformations** — log transformation steps for debugging
- **Optimize Performance** — use efficient transformation algorithms

## Next Steps

- [Load Data](./load-data) — learn how to load transformed data
- [Extract Data](./extract-data) — review data extraction

