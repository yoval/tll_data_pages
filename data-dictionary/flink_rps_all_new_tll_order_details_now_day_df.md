# `flink_rps_all_new_tll_order_details_now_day_df`

---

报货详单，订单与详单通过id联结。

表字段：

| 字段                            | 类型          | 说明     | 示例                   |
| ------------------------------- | ------------- | -------- | ---------------------- |
| id                              | VARCHAR(255)  | 流水号   | 442119                 |
| order_id                        | VARCHAR(255)  | 详单ID   | 497577508691525632     |
| product_info                    | VARCHAR(255)  | 产品名称 | 甄选奶茶粉-2kg*12包/件 |
| product_specification           | VARCHAR(255)  |          | 2kg*12包/件            |
| product_id                      | VARCHAR(255)  | 产品ID   | 483962582202454016     |
| sku_code                        | VARCHAR(255)  |          | 010000445              |
| supplier                        | VARCHAR(255)  |          | 未知                   |
| unit_price                      | DECIMAL(10,2) |          | 508                    |
| quantity                        | INT           |          | 1                      |
| cancel_quantity                 | INT           |          | 0                      |
| payable_amount                  | DECIMAL(10,2) |          | 508                    |
| discount_amount                 | DECIMAL(10,2) |          | 0                      |
| actual_amount                   | DECIMAL(10,2) |          | 508                    |
| status                          | INT           | 订单状态 | 1                      |
| tenant_id                       | VARCHAR(255)  |          | tll                    |
| create_time                     | VARCHAR(255)  |          | 2024-10-05 09:15:31    |
| product_type                    | VARCHAR(255)  |          | PT                     |
| warehouse_id                    | INT           |          | 458282                 |
| warehouse_batch_no              | VARCHAR(255)  |          | 0                      |
| discount_unit_price             | DECIMAL(10,2) |          | 508                    |
| category_id                     | INT           |          | 0                      |
| tax_rate                        | DECIMAL(10,2) |          | 0.13                   |
| is_freebies                     | INT           |          | 0                      |
| packaging_unit                  | VARCHAR(255)  |          | 件                     |
| unit_code                       | VARCHAR(255)  |          | JAN                    |
| serial_no                       | VARCHAR(255)  |          | 165910                 |
| out_quantity                    | INT           |          | 1                      |
| customer_discount_amount        | DECIMAL(10,2) |          | 0                      |
| rent_subsidy_amount             | DECIMAL(10,2) |          | 0                      |
| agent_amount                    | DECIMAL(10,2) |          | 0                      |
| bank_actual_amount              | DECIMAL(10,2) |          | 508                    |
| pt_discount_amount              | DECIMAL(10,2) |          | 0                      |
| is_combination_children_product | INT           |          | 2                      |
| final_pay_amount                | DECIMAL(10,2) |          | 508                    |
| pullstate                       | VARCHAR(255)  |          | 3                      |

