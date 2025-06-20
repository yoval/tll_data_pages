# `dwd_rps_tll_order_di`

---

- 订单维度的报货


| 字段                 | 类型          | 说明         | 示例                                                      |
| -------------------- | ------------- | ------------ | --------------------------------------------------------- |
| id                   | VARCHAR(255)  | 订单ID       | 484324899281190912                                        |
| order_status         | INT           | 订单状态     | 9                                                         |
| order_num            | VARCHAR(255)  | 订单编号     | DH082963120839                                            |
| order_type           | INT           | 订单类型     | 1                                                         |
| order_notes          | VARCHAR(255)  |              |                                                           |
| order_time           | VARCHAR(255)  | 订单时间     | 2024-08-29 19:34:19                                       |
| payment_method       | VARCHAR(255)  | 付款方式     | 3                                                         |
| payable_amount       | DECIMAL(10,2) | 付款金额     | 835                                                       |
| discount_amount      | DECIMAL(10,2) | 优惠金额     | 0                                                         |
| actual_amount        | DECIMAL(10,2) | 真实金额     | 835                                                       |
| cancel_time          | VARCHAR(255)  | 取消时间     |                                                           |
| review_time          | VARCHAR(255)  | 更新时间     | 2024-08-29 19:45:44                                       |
| store_id             | BIGINT        | 门店id       | 2917                                                      |
| delivery_method      | INT           |              | 2                                                         |
| manager_id           | BIGINT        |              |                                                           |
| reviewer_name        | VARCHAR(255)  |              | 17321265766                                               |
| reviewer_id          | BIGINT        |              | 860244217300003908                                        |
| created_time         | VARCHAR(255)  |              | 2024-08-29 19:34:19                                       |
| created_by           | VARCHAR(255)  |              | 1446                                                      |
| updated_time         | VARCHAR(255)  |              | 2024-08-29 19:57:02                                       |
| updated_by           | VARCHAR(255)  |              | 860244217300003908                                        |
| franchisee_rate      | DECIMAL(10,2) |              | 0                                                         |
| recipient_name       | VARCHAR(255)  |              | 安徽汇旺餐饮管理有限公司                                  |
| contact_number       | VARCHAR(255)  | 联系电话     | 1990                                                      |
| delivery_address     | VARCHAR(255)  |              | 安徽省蚌埠市禹会区安徽省蚌埠市禹会区兴和路喜迎门小区181号 |
| tenant_id            | VARCHAR(255)  |              | tll                                                       |
| order_used_type      | VARCHAR(255)  |              |                                                           |
| free_shipping        | INT           |              | 1                                                         |
| cancel_reason        | VARCHAR(255)  | 订单取消原因 |                                                           |
| region_manager       | VARCHAR(255)  | 大区经理     |                                                           |
| province_manager     | VARCHAR(255)  | 省区经理     |                                                           |
| area_manager         | VARCHAR(255)  | 区域经理     |                                                           |
| agent_code           | INT           | 代理编号     |                                                           |
| ratio                | DECIMAL(10,2) | 折扣率       |                                                           |
| tll_user_id          | VARCHAR(255)  | 客商编码     | 2006371                                                   |
| need_destruction     | INT           |              | 0                                                         |
| store_code           | VARCHAR(255)  | 门店编号     | ZYD00004                                                  |
| store_name           | VARCHAR(255)  | 门店名称     | 甜啦啦喜迎门店                                            |
| user_confirm_time    | VARCHAR(255)  | 确认时间     | 2024-09-06 10:16:01                                       |
| delivery_time        | VARCHAR(255)  |              |                                                           |
| store_address        | VARCHAR(255)  |              |                                                           |
| has_apply_after_sale | INT           |              | 0                                                         |
| has_cancel           | INT           |              | 0                                                         |
| pay_time             | VARCHAR(255)  |              | 2024-08-29 19:34:23                                       |
| order_product_type   | INT           |              | 3                                                         |
| refund_amount        | DECIMAL(10,2) |              |                                                           |
| shipping_method      | INT           |              | 0                                                         |
| is_push_sap          | INT           |              |                                                           |
| order_source         | VARCHAR(255)  |              |                                                           |
| sales_organization   | VARCHAR(255)  |              | 1000-汇旺                                                 |
| salesman             | VARCHAR(255)  |              |                                                           |
| currency             | VARCHAR(255)  |              | CNY                                                       |
| order_category       | INT           |              | 1                                                         |
| business_type        | INT           |              |                                                           |
| expected_time        | VARCHAR(255)  |              |                                                           |
| third_order_no       | BIGINT        |              |                                                           |
| delivery_fee         | DECIMAL(10,2) |              |                                                           |
| packing_fee          | DECIMAL(10,2) |              |                                                           |
| cancel_type          | VARCHAR(255)  |              |                                                           |
| agent_name           | VARCHAR(255)  | 代理名称     |                                                           |
| pt                   | VARCHAR(255)  | 日期         | 20240829                                                  |

备注：T+1更新模式，