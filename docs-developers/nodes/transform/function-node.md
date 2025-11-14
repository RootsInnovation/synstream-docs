---
sidebar_position: 1
---

# Function Node

The Function node executes custom functions to transform data. It allows you to write custom JavaScript code to process and transform data.

## Configuration

```json
{
  "type": "function",
  "code": "function transform(data) { return data.map(item => item * 2); }",
  "input": "$.data",
  "output": "$.result"
}
```

## Use Cases

- Custom data transformation
- Data calculations
- Data filtering
- Complex business logic

## Example

A Function node can transform sales data by calculating total revenue from quantity and price, or standardize data formats between different modules.

