# `ads_dbs_trade_food_di`

---

- 菜品维度的销售数据


| 字段                             | 类型          | 说明                                                   | 例子                             |
| -------------------------------- | ------------- | ------------------------------------------------------ | -------------------------------- |
| business_date                    | BIGINT        | 日期                                                   | 20230101                         |
| oper_center_name                 | VARCHAR(255)  | 营运中心                                               | 全部                             |
| prov_id                          | VARCHAR(64)   | 省份编码                                               | 650000                           |
| prov_name                        | VARCHAR(255)  | 省份名称                                               | 新疆                             |
| city_id                          | VARCHAR(64)   | 城市编码                                               | 659001                           |
| city_name                        | VARCHAR(255)  | 城市名称                                               | 石河子市                         |
| city_level                       | VARCHAR(64)   | 城市等级                                               | 四线                             |
| district_id                      | VARCHAR(64)   | 区县编码                                               |                                  |
| district_name                    | VARCHAR(255)  | 区县名称                                               |                                  |
| busi_area_type                   | VARCHAR(64)   | 商圈                                                   | 其它                             |
| bussiness_type                   | VARCHAR(64)   | 业务类型                                               | 外卖                             |
| channel_name                     | VARCHAR(255)  | 订单渠道                                               | 饿了么外卖                       |
| anal_type                        | VARCHAR(64)   | 分析类型(到家、到店)                                   | 到家                             |
| platform                         | VARCHAR(64)   | 平台(到家：美团、饿了么、其它 到店：POS、小程序、其它) | 饿了么                           |
| cust_type                        | VARCHAR(64)   | 用户类型                                               | 其它                             |
| time_name                        | VARCHAR(255)  | 时段                                                   | 其它                             |
| food_category_name               | VARCHAR(255)  | 商品分类                                               | 浓香奶茶                         |
| food_oneid                       | VARCHAR(64)   | 商品oneid                                              | 8dac3ae1abf3b49b80d924e7176a9094 |
| item_name                        | VARCHAR(255)  | 商品名称                                               | 一桶全家福                       |
| new_flag                         | VARCHAR(64)   | 是否新品                                               | 否                               |
| cup_type                         | VARCHAR(64)   | 杯型                                                   | 其它                             |
| ice_type                         | VARCHAR(64)   | 温度                                                   | 热                               |
| sugar_type                       | VARCHAR(64)   | 甜度                                                   | 七分糖                           |
| dp_total_amount                  | DECIMAL(16,2) | 商品流水金额                                           | 0                                |
| dp_total_amount_last_day         | DECIMAL(16,2) | 上一天商品流水金额                                     | 0                                |
| dp_total_amount_last_week        | DECIMAL(16,2) | 上一周商品流水金额                                     | 0                                |
| dp_total_amount_last_year        | DECIMAL(16,2) | 去年同期商品流水金额                                   | 12.18                            |
| dp_item_count                    | BIGINT        | 商品销量                                               | 0                                |
| dp_item_count_last_day           | BIGINT        | 上一天商品销量                                         | 0                                |
| dp_item_count_last_week          | BIGINT        | 上一周商品销量                                         | 0                                |
| dp_item_count_last_year          | BIGINT        | 去年同期商品销量                                       | 2                                |
| dp_pay_amount                    | DECIMAL(16,2) | 商品实收金额                                           | 0                                |
| dp_pay_amount_last_day           | DECIMAL(16,2) | 上一天商品实收金额                                     | 0                                |
| dp_pay_amount_last_week          | DECIMAL(16,2) | 上一周商品实收金额                                     | 0                                |
| dp_pay_amount_last_year          | DECIMAL(16,2) | 去年同期商品实收金额                                   | 12.18                            |
| dp_discount_amount               | DECIMAL(16,2) | 商品优惠金额                                           | 0                                |
| dp_discount_amount_last_day      | DECIMAL(16,2) | 上一天商品优惠金额                                     | 0                                |
| dp_discount_amount_last_week     | DECIMAL(16,2) | 上一周商品优惠金额                                     | 0                                |
| dp_discount_amount_last_year     | DECIMAL(16,2) | 去年同期商品优惠金额                                   | 0                                |
| dp_return_item_count             | BIGINT        | 商品退货量                                             | 0                                |
| dp_return_item_count_last_day    | BIGINT        | 上一天商品退货量                                       | 0                                |
| dp_return_item_count_last_week   | BIGINT        | 上一周商品退货量                                       | 0                                |
| dp_return_item_count_last_year   | BIGINT        | 去年同期商品退货量                                     | 0                                |
| dp_return_total_amount           | DECIMAL(16,2) | 商品退款金额                                           | 0                                |
| dp_return_total_amount_last_day  | DECIMAL(16,2) | 上一天商品退款金额                                     | 0                                |
| dp_return_total_amount_last_week | DECIMAL(16,2) | 上一周商品退款金额                                     | 0                                |
| dp_return_total_amount_last_year | DECIMAL(16,2) | 去年同期商品退款金额                                   | 0                                |
| xl_total_amount                  | DECIMAL(16,2) | 小料流水金额                                           | 0                                |
| xl_total_amount_last_day         | DECIMAL(16,2) | 上一天小料流水金额                                     | 0                                |
| xl_total_amount_last_week        | DECIMAL(16,2) | 上一周小料流水金额                                     | 0                                |
| xl_total_amount_last_year        | DECIMAL(16,2) | 去年同期小料流水金额                                   | 0                                |
| xl_item_count                    | BIGINT        | 小料销量                                               | 0                                |
| xl_item_count_last_day           | BIGINT        | 上一天小料销量                                         | 0                                |
| xl_item_count_last_week          | BIGINT        | 上一周小料销量                                         | 0                                |
| xl_item_count_last_year          | BIGINT        | 去年同期小料销量                                       | 0                                |
| xl_pay_amount                    | DECIMAL(16,2) | 小料实收金额                                           | 0                                |
| xl_pay_amount_last_day           | DECIMAL(16,2) | 上一天小料实收金额                                     | 0                                |
| xl_pay_amount_last_week          | DECIMAL(16,2) | 上一周小料实收金额                                     | 0                                |
| xl_pay_amount_last_year          | DECIMAL(16,2) | 去年同期小料实收金额                                   | 0                                |
| tc_total_amount                  | DECIMAL(16,2) | 套餐流水金额                                           | 0                                |
| tc_total_amount_last_day         | DECIMAL(16,2) | 上一天套餐流水金额                                     | 0                                |
| tc_total_amount_last_week        | DECIMAL(16,2) | 上一周套餐流水金额                                     | 0                                |
| tc_total_amount_last_year        | DECIMAL(16,2) | 去年同期套餐流水金额                                   | 0                                |
| tc_item_count                    | BIGINT        | 套餐销量                                               | 0                                |
| tc_item_count_last_day           | BIGINT        | 上一天套餐销量                                         | 0                                |
| tc_item_count_last_week          | BIGINT        | 上一周套餐销量                                         | 0                                |
| tc_item_count_last_year          | BIGINT        | 去年同期套餐销量                                       | 0                                |
| tc_pay_amount                    | DECIMAL(16,2) | 套餐实收金额                                           | 0                                |
| tc_pay_amount_last_day           | DECIMAL(16,2) | 上一天套餐实收金额                                     | 0                                |
| tc_pay_amount_last_week          | DECIMAL(16,2) | 上一周套餐实收金额                                     | 0                                |
| tc_pay_amount_last_year          | DECIMAL(16,2) | 去年同期套餐实收金额                                   | 0                                |
| tc_discount_amount               | DECIMAL(16,2) | 套餐优惠金额                                           | 0                                |
| tc_discount_amount_last_day      | DECIMAL(16,2) | 上一天套餐优惠金额                                     | 0                                |
| tc_discount_amount_last_week     | DECIMAL(16,2) | 上一周套餐优惠金额                                     | 0                                |
| tc_discount_amount_last_year     | DECIMAL(16,2) | 去年同期套餐优惠金额                                   | 0                                |
| zb_total_amount                  | DECIMAL(16,2) | 周边流水金额                                           | 0                                |
| zb_total_amount_last_day         | DECIMAL(16,2) | 上一天周边流水金额                                     | 0                                |
| zb_total_amount_last_week        | DECIMAL(16,2) | 上一周周边流水金额                                     | 0                                |
| zb_total_amount_last_year        | DECIMAL(16,2) | 去年同期周边流水金额                                   | 0                                |
| zb_item_count                    | BIGINT        | 周边销量                                               | 0                                |
| zb_item_count_last_day           | BIGINT        | 上一天周边销量                                         | 0                                |
| zb_item_count_last_week          | BIGINT        | 上一周周边销量                                         | 0                                |
| zb_item_count_last_year          | BIGINT        | 去年同期周边销量                                       | 0                                |
| zb_pay_amount                    | DECIMAL(16,2) | 周边实收金额                                           | 0                                |
| zb_pay_amount_last_day           | DECIMAL(16,2) | 上一天周边实收金额                                     | 0                                |
| zb_pay_amount_last_week          | DECIMAL(16,2) | 上一周周边实收金额                                     | 0                                |
| zb_pay_amount_last_year          | DECIMAL(16,2) | 去年同期周边实收金额                                   | 0                                |
| load_time                        | VARCHAR(64)   | 数据更新时间                                           | 2024/6/27 16:46                  |
| item_type                        | VARCHAR(64)   | 商品类型（单品、套餐、小料、周边、其它）               | 单品                             |
| item_status                      | VARCHAR(64)   | 饮品状态(在线饮品、不在线饮品)                         | 其它                             |
| up_type                          | VARCHAR(64)   | 升级类型                                               |                                  |
| food_series                      | VARCHAR(64)   | 商品系列                                               | 其它                             |
| release_date                     | VARCHAR(64)   | 上新日期                                               | 其它                             |
| dp_order_count                   | BIGINT        | 商品订单量                                             | 0                                |
| xl_order_count                   | BIGINT        | 小料订单量                                             | 0                                |
| item_name_list                   | VARCHAR(255)  | 套餐下商品/小料明细                                    |                                  |
| other_total_amount               | DECIMAL(16,2) | 其它饮品流水金额                                       | 0                                |
| other_total_amount_last_day      | DECIMAL(16,2) | 昨日其它饮品流水金额                                   | 0                                |
| other_total_amount_last_week     | DECIMAL(16,2) | 上周同期其它饮品流水金额                               | 0                                |
| other_total_amount_last_year     | DECIMAL(16,2) | 去年同期其它饮品流水金额                               | 0                                |
| stat_shop_id                     | VARCHAR(64)   | 门店统计id                                             | TLL02082                         |
| stat_shop_name                   | VARCHAR(255)  | 门店统计名称                                           | 新疆石河子天富康城店             |
| send_whse                        | VARCHAR(64)   | 仓库                                                   | 郑州仓                           |


- 备注：因不包含小料，`sum(dp_total_amount) `略小于营业额。