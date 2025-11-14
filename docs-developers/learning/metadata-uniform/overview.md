---
sidebar_position: 3
---

# Metadata Uniform

Learn how to create a metadata uniform pipeline using Synstream.

## Overview

This tutorial demonstrates how to build a workflow that:

- Extracts metadata from multiple sources (files, databases, APIs)
- Validates metadata against predefined schemas
- Transforms metadata to a uniform format
- Stores metadata in a centralized repository

## Prerequisites

- Synstream Console access
- Multiple data sources with metadata
- Schema definitions for metadata validation
- Storage repository for uniform metadata
- Basic knowledge of workflow design

## Step 1: Metadata Extraction

### Extract from File Systems

1. Add **File System Node** to workflow
2. Configure file extraction:
   - Path: file system path
   - Pattern: file pattern (e.g., `*.csv`)
   - Recursive: true/false
3. Configure metadata extraction:
   - Extract file metadata
   - Extract schema information
   - Extract data types

### Extract from Databases

1. Add **Database Node** to workflow
2. Configure database connection:
   - Host: database host
   - Database: database name
   - User: database user
   - Password: database password
3. Configure metadata extraction:
   - Extract table metadata
   - Extract column metadata
   - Extract constraint information

### Extract from APIs

1. Add **API Node** to workflow
2. Configure API connection:
   - Endpoint: API endpoint
   - Authentication: API credentials
   - Method: GET
3. Configure metadata extraction:
   - Extract API schema
   - Extract field definitions
   - Extract data types

## Step 2: Schema Validation

### Define Schema

1. Create schema definition file
2. Define schema structure:
   - Field names
   - Data types
   - Constraints
   - Required fields
3. Store schema in repository

### Validate Metadata

1. Add **Validation Node** to workflow
2. Configure validation:
   - Load schema definition
   - Validate metadata against schema
   - Handle validation errors
3. Configure error handling:
   - Log validation errors
   - Skip invalid records
   - Report validation issues

## Step 3: Metadata Transformation

### Normalize Field Names

1. Add **Function Node** to workflow
2. Configure field name normalization:
   - Convert to standard naming convention
   - Map source fields to target fields
   - Handle field aliases

### Standardize Data Types

1. Add **Function Node** to workflow
2. Configure data type standardization:
   - Convert data types to uniform format
   - Standardize date formats
   - Normalize number formats

### Enrich Metadata

1. Add **Function Node** to workflow
2. Configure metadata enrichment:
   - Add source information
   - Add timestamp information
   - Add version information
   - Add quality metrics

## Step 4: Metadata Storage

### Store in Database

1. Add **Database Node** to workflow
2. Configure database connection:
   - Host: metadata repository
   - Database: metadata database
   - Table: uniform_metadata
3. Configure data storage:
   - Store uniform metadata
   - Handle duplicates
   - Update existing records

### Store in File System

1. Add **File System Node** to workflow
2. Configure file storage:
   - Path: metadata repository path
   - Format: JSON or Parquet
   - Compression: gzip or none
3. Configure data storage:
   - Store uniform metadata
   - Organize by source
   - Version metadata files

## Step 5: Workflow Scheduling

### Schedule Metadata Extraction

1. Configure **Start Node** with cron schedule:
   - Schedule: `0 2 * * *` (daily at 2 AM)
   - Timezone: UTC
   - Retry: on failure
2. Configure error handling:
   - Catch errors
   - Log errors
   - Send notifications

## Configuration Examples

### File System Node Configuration

```json
{
  "type": "filesystem",
  "operation": "extract",
  "path": "/data/sources",
  "pattern": "*.csv",
  "metadata": {
    "extract": ["filename", "columns", "row_count", "file_size"]
  }
}
```

### Validation Node Configuration

```json
{
  "type": "validation",
  "schema": {
    "type": "object",
    "required": ["name", "type", "source"],
    "properties": {
      "name": { "type": "string" },
      "type": { "type": "string", "enum": ["table", "file", "api"] },
      "source": { "type": "string" }
    }
  }
}
```

### Function Node Configuration

```json
{
  "type": "function",
  "code": "function normalize(data) { return data.map(item => { return { ...item, name: item.name.toLowerCase().replace(/[^a-z0-9]/g, '_') }; }); }"
}
```

## Best Practices

- **Schema Versioning** — version schemas to track changes
- **Error Handling** — implement comprehensive error handling
- **Data Quality** — validate metadata quality
- **Performance** — optimize for large datasets
- **Monitoring** — monitor metadata extraction and storage

## Troubleshooting

### Common Issues

- **Schema Mismatches** — update schemas to match source metadata
- **Validation Errors** — review validation rules and data formats
- **Storage Errors** — check storage connections and permissions
- **Performance Issues** — optimize workflow for large datasets

## Next Steps

- [Solution](./solution) — detailed implementation guide
- [E-Commerce Store Daily Data Processing](../ecommerce-store-daily/overview) — learn about e-commerce pipeline
- [Examples Overview](/docs/examples/overview) — review examples
- [Nodes Overview](../../nodes/overview) — learn about nodes

