# `flink_rps_all_new_tll_order_now_day_df`

---

订单维度的报货，每天多次更新，视为即时表，**数据仅保留8天**。

表字段：

| 字段                 | 类型          | 说明       | 示例                                                  |
| -------------------- | ------------- | ---------- | ----------------------------------------------------- |
| id                   | BIGINT        | 订单ID     | 505909043056361472                                    |
| order_status         | INT           | 订单状态   | 8                                                     |
| order_num            | VARCHAR(255)  | 订单号     | DH100539667459                                        |
| order_type           | INT           | 订单类型   | 1（普通）                                             |
| order_notes          | VARCHAR(1024) | 备注       | 0                                                     |
| order_time           | VARCHAR(255)  | 订单时间   | 45570.58696                                           |
| payment_method       | VARCHAR(255)  | 支付方式   | 3                                                     |
| payable_amount       | DECIMAL(10,2) | 应付金额   | 5017                                                  |
| discount_amount      | DECIMAL(10,2) | 折扣       | 0                                                     |
| actual_amount        | DECIMAL(10,2) | 实付金额   | 5017                                                  |
| cancel_time          | VARCHAR(255)  | 取消时间   | 0                                                     |
| review_time          | VARCHAR(255)  |            | 45573.38157                                           |
| store_id             | BIGINT        | 门店ID     | 3506                                                  |
| delivery_method      | INT           |            | 3                                                     |
| manager_id           | BIGINT        |            | 0                                                     |
| reviewer_name        | VARCHAR(255)  |            | 孙志                                                  |
| reviewer_id          | BIGINT        |            | 8.60515E+17                                           |
| created_time         | VARCHAR(255)  | 创建时间   | 45570.58696                                           |
| created_by           | VARCHAR(255)  | 创建人     | 孙景生                                                |
| updated_time         | VARCHAR(255)  |            | 45573.60443                                           |
| updated_by           | VARCHAR(255)  |            | 8.60515E+17                                           |
| franchisee_rate      | DECIMAL(10,2) | 折扣率     | 0                                                     |
| recipient_name       | VARCHAR(255)  | 收件人姓名 | 孙景生                                                |
| contact_number       | VARCHAR(255)  | 联系电话   | 133595959999                                          |
| delivery_address     | VARCHAR(1024) | 配送地址   | 黑龙江省哈尔滨市香坊区剑桥学院校内7号楼内甜啦啦奶茶店 |
| tenant_id            | VARCHAR(255)  |            | tll                                                   |
| order_used_type      | VARCHAR(255)  |            | 0                                                     |
| free_shipping        | INT           |            | 1                                                     |
| cancel_reason        | VARCHAR(1024) |            | 0                                                     |
| region_manager       | VARCHAR(255)  |            | 年进达                                                |
| province_manager     | VARCHAR(255)  |            | 李鹏飞                                                |
| area_manager         | VARCHAR(255)  |            | 陶冬冬                                                |
| need_destruction     | INT           |            | 0                                                     |
| store_code           | VARCHAR(255)  | 门店编号   | TLL03972                                              |
| store_name           | VARCHAR(1024) | 门店名称   | 黑龙江哈尔滨市香坊区哈尔滨剑桥学院校内7号楼           |
| user_confirm_time    | VARCHAR(255)  |            | 0                                                     |
| delivery_time        | VARCHAR(255)  |            | 0                                                     |
| store_address        | VARCHAR(1024) |            | 0                                                     |
| has_apply_after_sale | INT           |            | 0                                                     |
| has_cancel           | INT           |            | 0                                                     |
| pay_time             | VARCHAR(255)  |            | 45570.58704                                           |
| order_product_type   | INT           |            | 3                                                     |
| refund_amount        | DECIMAL(10,2) |            | 0                                                     |
| shipping_method      | INT           |            | 0                                                     |
| is_push_sap          | INT           |            | 1                                                     |
| order_source         | VARCHAR(255)  |            | 0                                                     |
| sales_organization   | VARCHAR(255)  |            | 1000-汇旺                                             |
| salesman             | VARCHAR(255)  |            | 0                                                     |
| currency             | VARCHAR(255)  | 结算币种   | CNY                                                   |
| order_category       | INT           |            | 1                                                     |
| business_type        | INT           |            | 0                                                     |
| expected_time        | VARCHAR(255)  |            | 0                                                     |
| third_order_no       | BIGINT        |            | 0                                                     |
| delivery_fee         | DECIMAL(10,2) |            | 0                                                     |
| packing_fee          | DECIMAL(10,2) |            | 0                                                     |
| pullstate            | VARCHAR(255)  |            | 3                                                     |

