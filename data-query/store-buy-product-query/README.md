# 门店报货查询

--- 

门店报货涉及4个表：

- **[dwd_rps_dt_orders_di](/data-dictionary/dwd_rps_dt_orders_di)**

u8c报货订单，已于2024年9月后弃用。

- **[dwd_rps_dt_order_goods_di](/data-dictionary/dwd_rps_dt_order_goods_di)**

u8c报货详单，已于2024年9月后弃用。

- **[dwd_rps_tll_order_di](/data-dictionary/dwd_rps_tll_order_di)**

报货订单，2024年9月后启用。

- **[dwd_rps_tll_order_details_di](/data-dictionary/dwd_rps_tll_order_details_di)**

报货详单，2024年9月后启用。



一般通过详单进行筛选，筛选条件是：

```sql
 WHERE 订单状态 >= 3 AND 订单状态 != 5
```