# `ads_dbs_trade_shop_pay_channel_di`

--- 

- 支付渠道日表


| 字段                 | 类型 | 说明           | 实例       |
| -------------------- | ---- | -------------- | ---------- |
| pt                   |      | 日期           | 20240106   |
| shop_id              |      | 门店编号       | ZYD00216   |
| payment_channels     |      | 支付方式       | 饿了么外卖 |
| order_cnt            |      | 渠道订单数     | 5          |
| income               |      | 实收           | 82.22      |
| discount             |      | 优惠           | 66.78      |
| amount               |      | 流水           | 149        |
| toatl_order_cnt      |      | 所有渠道订单数 | 103        |
| pay_way_created_time |      | 支付日期       | 20240106   |

- 日表由详表（`dws_trd_mtpos_order_pay_channel_details_di`）汇总而来