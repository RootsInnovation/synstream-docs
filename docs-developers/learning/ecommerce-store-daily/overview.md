---
sidebar_position: 1
---

# Overview

## Background Story

Every day at 3 AM, Nebula Retail's ETL process automatically collects data from three sources:

- **POS.csv** — uploaded by store POS systems from all physical locations
- **online_sales.json** — exported from the e-commerce API
- **inventory.xlsx** — updated by suppliers

The system automatically integrates sales and inventory data, unifies field formats, and uploads everything to the cloud data warehouse. By 6 AM, when the marketing department opens Power BI, they can see the latest omnichannel sales reports with all data consolidated and ready for analysis.

## Tutorial Structure

This tutorial will guide you through building the ETL workflow step by step:

1. **Flow Design Pattern** — understand the workflow architecture and design patterns
2. **Extract Data** — learn how to extract data from multiple sources in parallel
3. **Transform Data** — standardize and validate data from different sources
4. **Load Data** — load processed data into the cloud data warehouse
5. **Conclusion** — review best practices and next steps

## Prerequisites

- Synstream Console access
- Understanding of ETL concepts
- Basic knowledge of workflow design
- Access to data sources (POS systems, e-commerce API, supplier files)

## Next Steps

- [Flow Design Pattern](./flow-design-pattern) — understand the workflow architecture
- [Extract Data](./extract-data) — learn data extraction
- [Transform Data](./transform-data) — learn data transformation
- [Load Data](./load-data) — learn data loading
- [Conclusion](./conclusion) — review and best practices

