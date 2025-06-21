# 营业额查询

**注： 当日营业额>0，计为营业天数1天。**

---

涉及营业额查询的表比较多：

- **[ads_dbs_trade_shop_di](data-dictionary/ads_dbs_trade_shop_di)**

> `SELECT DISTINCT platform FROM ads_dbs_trade_shop_di`

| platform |
| -------- |
| pos      |
| 美团     |
| 小程序   |
| 饿了么   |
| 其它     |


仅展示 pos、美团、小程序、饿了么 汇总后的渠道。团购等归于pos。

- **[ads_dbs_trade_shop_pay_channel_di](data-dictionary/ads_dbs_trade_shop_pay_channel_di)**

> `SELECT DISTINCT source_name FROM dws_trd_mtpos_order_pay_channel_details_di`

| payment_channels    |
| ------------------- |
| pos                 |
| 甜啦啦小程序        |
| 快手团购            |
| 抖音团购            |
| 美团/大众点评小程序 |
| 美团外卖            |
| 饿了么外卖          |
| 美团/大众点评团购   |
| 抖音小程序          |

这张表细分到了订单维度，渠道划分的更加详细。**为避免出现新渠道中台未记录，导致数据缺失。需要偶尔检查下是否存在渠道为空白的记录。**

```sql
SELECT DISTINCT
	payment_channels 
FROM
	dws_trd_mtpos_order_pay_channel_details_di 
WHERE
	pay_way_created_time LIKE '2025%'
```

- **[ads_dbs_trade_shop_pay_channel_di](data-dictionary/ads_dbs_trade_shop_pay_channel_di)**


这张表是上一张表的日汇总表（此表为日维度，上一张表为订单维度）。



- **[imp_online_new_channel_supplement](data-dictionary/imp_online_new_channel_supplement)**

> SELECT DISTINCT payment_channel FROM imp_online_new_channel_supplement 

| payment_channel  |
| ---------------- |
| 线上新增快手团购 |
| 线上新增美团团购 |
| 线上新增抖音团购 |

这张表是团购的补充表，用于补充团购渠道。一般汇总营业额为这张表与上一张表之和。
