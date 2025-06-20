# `dwd_rps_tll_order_details_di`

---

- 产品维度的报货数据


| 字段                            | 类型          | 说明     | 示例                  |
| ------------------------------- | ------------- | -------- | --------------------- |
| id                              | VARCHAR(255)  |          | 10007                 |
| order_id                        | VARCHAR(255)  | 订单编号 | 485284445575200768    |
| product_info                    | VARCHAR(255)  | 存货名称 | 黑糖风味粉-5kg*2包/件 |
| product_specification           | VARCHAR(255)  | 存货规格 | 5kg*2包/件            |
| product_id                      | VARCHAR(255)  | 产品id   | 483962582168899584    |
| sku_code                        | VARCHAR(255)  | 存货编码 | 010000017             |
| supplier                        | VARCHAR(255)  |          | 未知                  |
| unit_price                      | DECIMAL(10,2) |          | 180                   |
| quantity                        | INT           | 数量     | 1                     |
| cancel_quantity                 | INT           | 取消数量 | 0                     |
| payable_amount                  | DECIMAL(10,2) |          | 180                   |
| discount_amount                 | DECIMAL(10,2) |          | 0                     |
| actual_amount                   | DECIMAL(10,2) |          | 180                   |
| status                          | INT           | 订单状态 | 1                     |
| tenant_id                       | VARCHAR(255)  |          | tll                   |
| create_time                     | VARCHAR(255)  |          | 2024-09-01 11:07:27   |
| product_type                    | VARCHAR(255)  |          | PT                    |
| warehouse_id                    | INT           |          | 458282                |
| warehouse_batch_no              | VARCHAR(255)  |          |                       |
| discount_unit_price             | DECIMAL(10,2) |          | 180                   |
| category_id                     | BIGINT        |          |                       |
| tax_rate                        | DECIMAL(10,2) |          | 0.13                  |
| is_freebies                     | INT           |          |                       |
| packaging_unit                  | VARCHAR(255)  | 计量单位 | 件                    |
| unit_code                       | VARCHAR(255)  |          | JAN                   |
| serial_no                       | VARCHAR(255)  |          | 349818                |
| out_quantity                    | INT           |          | 1                     |
| customer_discount_amount        | DECIMAL(10,2) |          | 0                     |
| rent_subsidy_amount             | DECIMAL(10,2) |          | 0                     |
| agent_amount                    | DECIMAL(10,2) |          | 0                     |
| bank_actual_amount              | DECIMAL(10,2) |          | 180                   |
| pt_discount_amount              | DECIMAL(10,2) |          | 0                     |
| is_combination_children_product | INT           |          | 2                     |
| final_pay_amount                | DECIMAL(10,2) | 结算金额 | 180                   |
| pt                              | VARCHAR(255)  | 日期     | 20240901              |

- T+1更新模式。数据从2024年08月28日开始记录。当日记录在表`flink_rps_all_new_tll_order_now_day_df`。