---
sidebar_position: 2
---

# Solution

## How Synstream Solves the Problem

Synstream provides a bidirectional metadata transformation pipeline that solves the inter-module format incompatibility problem. The solution establishes a unified metadata format as the central repository, while automatically converting metadata in both directions: from module-specific formats to the uniform format for storage, and from the uniform format back to module-specific formats when modules need to consume the data.

## Solution Overview

The metadata uniform pipeline enables seamless data exchange between modules by providing bidirectional format transformation.

### Bidirectional Metadata Transformation Pipeline

The solution processes metadata through a streamlined pipeline that handles both ingestion and distribution:

**Ingestion Flow (Module → Uniform Format):**
1. **Module Metadata Input** — receive metadata from any module in its native format (Module A format, Module B format, etc.)
2. **Format Detection** — automatically detect the source module's metadata format
3. **Schema Validation** — validate metadata against the source module's schema
4. **Transformation to Uniform Format** — convert module-specific metadata to the unified standard format
5. **Uniform Storage** — store metadata in the centralized repository using the uniform format

**Distribution Flow (Uniform Format → Module):**
1. **Metadata Retrieval** — retrieve metadata from the uniform repository
2. **Target Module Identification** — identify which module needs the metadata
3. **Transformation to Module Format** — convert from uniform format to the target module's specific format
4. **Schema Validation** — validate the converted metadata against the target module's schema
5. **Module Delivery** — deliver metadata in the format expected by the consuming module

### Key Features

- **N-to-1 Ingestion** — any number of modules can contribute metadata, all converted to one uniform format
- **1-to-N Distribution** — uniform metadata can be converted to any module's format on demand
- **Automatic Format Detection** — system automatically identifies module formats without manual configuration
- **Schema Versioning** — handles schema changes gracefully, maintaining backward compatibility
- **Data Integrity** — ensures no data loss during format conversions through comprehensive mapping rules

### Results

- **Eliminated N×N Problem** — reduced from N×(N-1) conversion paths to just N paths (each module ↔ uniform format)
- **Faster Module Integration** — new modules integrate in days instead of weeks
- **Single Source of Truth** — all metadata stored in one format, eliminating duplication
- **Reduced Maintenance** — when a module updates its schema, only one conversion path needs updating
- **Improved Data Quality** — automated validation ensures metadata integrity across all conversions

## Implementation

For detailed implementation guides, architecture documentation, and technical specifications, see the [Developer Documentation](/developers/intro).

### Benefits

By implementing this metadata uniform pipeline, organizations achieve:

- **Simplified Architecture** — modules only need to integrate with the uniform format, not with each other
- **Reduced Development Time** — developers focus on core functionality instead of format conversion
- **Scalable Solution** — adding new modules requires only one new conversion path, not N-1 paths
- **Centralized Storage** — all metadata stored in one format, reducing storage costs and complexity
- **Easy Maintenance** — schema updates in one module only affect one conversion path
- **Data Reusability** — metadata processed by any module can be easily consumed by any other module
- **Version Control** — track metadata changes and schema evolution in a centralized location
- **Quality Assurance** — automated validation ensures data integrity across all format conversions

## Next Steps

- [Developer Documentation](/developers/intro) — learn about detailed implementation and architecture
- [Overview](./overview) — review the background and challenges

