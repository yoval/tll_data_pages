### `ads_dbs_report_food_di`

*ads表采用T+1 数据更新模式，无法查询即时数据。受api限制，会回刷10日数据。*

主要用于查询门店报货信息。

这张表需要除以0.8。

含字段如下：

| 字段                    | 类型          | 说明                    | 示例                     |
| ----------------------- | ------------- | ----------------------- | ------------------------ |
| business_date           | VARCHAR(255)  | 日期                    | 20230117                 |
| stat_shop_id            | VARCHAR(255)  | 门店编号                | ZYD00057                 |
| stat_shop_name          | VARCHAR(255)  | 门店名称                | 安徽省蚌埠市张公山美食城 |
| license_person          | VARCHAR(255)  | 法人名称                | 直营店                   |
| prov_id                 | VARCHAR(255)  | 省份编码                | 340000                   |
| prov_name               | VARCHAR(255)  | 省份名称                | 安徽                     |
| city_id                 | VARCHAR(255)  | 城市编码                | 340300                   |
| city_name               | VARCHAR(255)  | 城市名称                | 蚌埠市                   |
| city_level              | VARCHAR(255)  | 城市等级                | 三线                     |
| district_id             | VARCHAR(255)  | 区县编码                | 340304                   |
| district_name           | VARCHAR(255)  | 区县名称                | 禹会区                   |
| busi_area_type          | VARCHAR(255)  | 商圈                    |                          |
| region_manager_name     | VARCHAR(255)  | 大区经理                |                          |
| prov_manager_name       | VARCHAR(255)  | 省经理                  |                          |
| district_manager_name   | VARCHAR(255)  | 区域经理                |                          |
| total_amount            | DECIMAL(20,2) | 流水金额                |                          |
| pay_amount              | DECIMAL(20,2) | 实收金额                |                          |
| report_amount           | DECIMAL(20,2) | 报货金额                |                          |
| orange_report_cnt       | BIGINT        | 橙子报货数量（15kg/件） |                          |
| is_orange_report        | INT           | 橙子是否报货            | 0                        |
| lemon_report_cnt        | BIGINT        | 柠檬报货数量（15kg/件） |                          |
| is_lemon_report         | INT           | 柠檬是否报货            | 0                        |
| report_amount_last_day  | DECIMAL(16,2) | 上一天报货金额          |                          |
| report_amount_last_week | DECIMAL(16,2) | 上周同期报货金额        | 8236.56                  |
| report_amount_last_year | DECIMAL(16,2) | 去年同期报货金额        |                          |
| load_time               | VARCHAR(255)  | 数据更新时间            | 2024/6/6 16:38           |



### `ads_dbs_trade_shop_di`

单店销售

**注：**

- 数据逻辑

  > POS = AI点餐系统 + POS点餐 + 快应用-VIVO
  >
  > 小程序 = 三方对接 + 微信小程序 +支付宝小程序

| 字段                          | 类型          | 说明                                                  | 示例            |
| ----------------------------- | ------------- | ----------------------------------------------------- | --------------- |
| business_date                 | BIGINT        | 日期                                                  | 20230104        |
| oper_center_name              | VARCHAR(255)  | 营运中心                                              | 全部            |
| prov_id                       | VARCHAR(255)  | 省份编码                                              | 650000          |
| prov_name                     | VARCHAR(255)  | 省份名称                                              | 新疆            |
| city_id                       | VARCHAR(255)  | 城市编码                                              | 659002          |
| city_name                     | VARCHAR(255)  | 城市名称                                              | 阿拉尔市        |
| city_level                    | VARCHAR(255)  | 城市等级                                              | 五线            |
| district_id                   | VARCHAR(255)  | 区县编码                                              | 659002          |
| district_name                 | VARCHAR(255)  | 区县名称                                              | 659002          |
| busi_area_type                | VARCHAR(255)  | 商圈                                                  | 普通沿街商铺店  |
| bussiness_type                | VARCHAR(255)  | 业务类型                                              | 堂食            |
| anal_type                     | VARCHAR(255)  | 分析类型:到家、到店                                   | 到店            |
| platform                      | VARCHAR(255)  | 平台:到家：美团、饿了么、其它 到店：POS、小程序、其它 | pos             |
| stat_shop_id                  | VARCHAR(255)  | 门店统计id                                            | TLL04998        |
| stat_shop_name                | VARCHAR(255)  | 门店统计名称                                          | 胡杨河商业街店  |
| total_amount                  | DECIMAL(16,2) | 流水金额                                              | 204             |
| total_amount_last_day         | DECIMAL(16,2) | 上一天流水金额                                        | 182             |
| total_amount_last_week        | DECIMAL(16,2) | 上一周流水金额                                        | 390             |
| total_amount_last_year        | DECIMAL(16,2) | 去年同期流水金额                                      | 0               |
| pay_amount                    | DECIMAL(16,2) | 实收金额                                              | 204             |
| pay_amount_last_day           | DECIMAL(16,2) | 上一天实收金额                                        | 182             |
| pay_amount_last_week          | DECIMAL(16,2) | 上一周实收金额                                        | 390             |
| pay_amount_last_year          | DECIMAL(16,2) | 去年同期实收金额                                      | 0               |
| order_count                   | BIGINT        | 订单量                                                | 14              |
| order_count_last_day          | BIGINT        | 上一天订单量                                          | 14              |
| order_count_last_week         | BIGINT        | 上一周订单量                                          | 19              |
| order_count_last_year         | BIGINT        | 去年同期订单量                                        | 0               |
| is_trd_shop                   | BIGINT        | 是否交易门店                                          | 1               |
| is_trd_shop_last_day          | BIGINT        | 上一天是否交易门店                                    | 1               |
| is_trd_shop_last_week         | BIGINT        | 上一周是否交易门店                                    | 1               |
| is_trd_shop_last_year         | BIGINT        | 去年同期是否交易门店                                  | 0               |
| discount_amount               | DECIMAL(16,2) | 优惠金额                                              | 0               |
| discount_amount_last_day      | DECIMAL(16,2) | 上一天优惠金额                                        | 0               |
| discount_amount_last_week     | DECIMAL(16,2) | 上一周优惠金额                                        | 0               |
| discount_amount_last_year     | DECIMAL(16,2) | 去年同期优惠金额                                      | 0               |
| dp_item_count                 | BIGINT        | 商品销量                                              | 26              |
| dp_item_count_last_day        | BIGINT        | 上一天商品销量                                        | 26              |
| dp_item_count_last_week       | BIGINT        | 上一周商品销量                                        | 44              |
| dp_item_count_last_year       | BIGINT        | 去年同期商品销量                                      | 0               |
| dp_total_amount               | DECIMAL(16,2) | 商品流水金额                                          | 204             |
| dp_total_amount_last_day      | DECIMAL(16,2) | 上一天商品流水金额                                    | 182             |
| dp_total_amount_last_week     | DECIMAL(16,2) | 上一周商品流水金额                                    | 390             |
| dp_total_amount_last_year     | DECIMAL(16,2) | 去年同期商品流水金额                                  | 0               |
| return_order_count            | BIGINT        | 退款订单量                                            | 0               |
| return_order_count_last_day   | BIGINT        | 上一天退款订单量                                      | 0               |
| return_order_count_last_week  | BIGINT        | 上一周退款订单量                                      | 0               |
| return_order_count_last_year  | BIGINT        | 去年同期退款订单量                                    | 0               |
| return_total_amount           | DECIMAL(16,2) | 退款金额                                              | 0               |
| return_total_amount_last_day  | DECIMAL(16,2) | 上一天退款金额                                        | 0               |
| return_total_amount_last_week | DECIMAL(16,2) | 上一周退款金额                                        | 0               |
| return_total_amount_last_year | DECIMAL(16,2) | 去年同期退款金额                                      | 0               |
| load_time                     | VARCHAR(255)  | 数据更新时间                                          | 2024/6/27 16:48 |
| is_dj_sold_shop               | BIGINT        | 是否有外卖业绩门店                                    | 0               |
| is_dj_sold_shop_last_day      | BIGINT        | 上一天是否有外卖业绩门店                              | 0               |
| is_dj_sold_shop_last_week     | BIGINT        | 上一周是否有外卖业绩门店                              | 0               |
| is_dj_sold_shop_last_year     | BIGINT        | 去年同期是否有外卖业绩门店                            | 0               |
| is_wechat_community           | VARCHAR(100)  | 是否微信社群用户                                      |                 |
| is_sign                       | VARCHAR(100)  | 是否签约                                              |                 |
| franchisee_type               | VARCHAR(255)  | 加盟商类型：直营、加盟                                | 加盟店          |
| is_doubt_shop                 | BIGINT        | 是否存疑门店                                          | 0               |
| up_1_order_count              | BIGINT        | 2杯及以上订单量                                       | 8               |
| up_1_order_count_last_day     | BIGINT        | 上一天2杯及以上订单量                                 | 7               |
| up_1_order_count_last_week    | BIGINT        | 上周同期2杯及以上订单量                               | 12              |
| up_1_order_count_last_year    | BIGINT        | 去年同期2杯及以上订单量                               | 0               |
| time_name                     | VARCHAR(255)  | 时段                                                  |                 |
| channel_name                  | VARCHAR(255)  | 渠道                                                  | pos             |
| report_amount                 | DECIMAL(16,2) | 报货金额                                              |                 |
| report_amount_last_day        | DECIMAL(16,2) | 上一天报货金额                                        |                 |
| report_amount_last_week       | DECIMAL(16,2) | 上周同期报货金额                                      |                 |
| report_amount_last_year       | DECIMAL(16,2) | 去年同期报货金额                                      |                 |

### `ads_dbs_trade_food_di`

单品销售

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



### `dwd_rps_tll_order_di`

报货订单

| 字段                 | 类型          | 说明         | 示例                                                      |
| -------------------- | ------------- | ------------ | --------------------------------------------------------- |
| id                   | VARCHAR(255)  |              | 484324899281190912                                        |
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
| store_code           | VARCHAR(255)  | 门店编码     | ZYD00004                                                  |
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



### `dwd_rps_tll_order_details_di`（已废弃）

报货详单

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



### `flink_rps_all_new_tll_order_now_day_df`

报货订单

| 字段                 | 类型          | 说明     | 示例                                                  |
| -------------------- | ------------- | -------- | ----------------------------------------------------- |
| id                   | BIGINT        | 订单ID   | 4.9765E+17                                            |
| order_status         | INT           | 订单状态 | 8                                                     |
| order_num            | VARCHAR(255)  | 订单编号 | DH100539667459                                        |
| order_type           | INT           | 订单类型 | 1                                                     |
| order_notes          | VARCHAR(1024) | 备注     | 0                                                     |
| order_time           | VARCHAR(255)  | 订单时间 | 45570.58696                                           |
| payment_method       | VARCHAR(255)  | 支付方式 | 3                                                     |
| payable_amount       | DECIMAL(10,2) | 支付金额 | 5017                                                  |
| discount_amount      | DECIMAL(10,2) | 折扣     | 0                                                     |
| actual_amount        | DECIMAL(10,2) | 实际金额 | 5017                                                  |
| cancel_time          | VARCHAR(255)  | 取消时间 | 0                                                     |
| review_time          | VARCHAR(255)  |          | 45573.38157                                           |
| store_id             | BIGINT        | 门店ID   | 3506                                                  |
| delivery_method      | INT           |          | 3                                                     |
| manager_id           | BIGINT        |          | 0                                                     |
| reviewer_name        | VARCHAR(255)  |          | 孙志                                                  |
| reviewer_id          | BIGINT        |          | 8.60515E+17                                           |
| created_time         | VARCHAR(255)  |          | 45570.58696                                           |
| created_by           | VARCHAR(255)  |          | 孙景生                                                |
| updated_time         | VARCHAR(255)  |          | 45573.60443                                           |
| updated_by           | VARCHAR(255)  |          | 8.60515E+17                                           |
| franchisee_rate      | DECIMAL(10,2) |          | 0                                                     |
| recipient_name       | VARCHAR(255)  |          | 孙景生                                                |
| contact_number       | VARCHAR(255)  |          | 13359595111                                           |
| delivery_address     | VARCHAR(1024) |          | 黑龙江省哈尔滨市香坊区剑桥学院校内7号楼内甜啦啦奶茶店 |
| tenant_id            | VARCHAR(255)  |          | tll                                                   |
| order_used_type      | VARCHAR(255)  |          | 0                                                     |
| free_shipping        | INT           |          | 1                                                     |
| cancel_reason        | VARCHAR(1024) |          | 0                                                     |
| region_manager       | VARCHAR(255)  |          | 年进达                                                |
| province_manager     | VARCHAR(255)  |          | 李鹏飞                                                |
| area_manager         | VARCHAR(255)  |          | 陶冬冬                                                |
| need_destruction     | INT           |          | 0                                                     |
| store_code           | VARCHAR(255)  |          | TLL03972                                              |
| store_name           | VARCHAR(1024) |          | 黑龙江哈尔滨市香坊区哈尔滨剑桥学院校内7号楼           |
| user_confirm_time    | VARCHAR(255)  |          | 0                                                     |
| delivery_time        | VARCHAR(255)  |          | 0                                                     |
| store_address        | VARCHAR(1024) |          | 0                                                     |
| has_apply_after_sale | INT           |          | 0                                                     |
| has_cancel           | INT           |          | 0                                                     |
| pay_time             | VARCHAR(255)  |          | 45570.58704                                           |
| order_product_type   | INT           |          | 3                                                     |
| refund_amount        | DECIMAL(10,2) |          | 0                                                     |
| shipping_method      | INT           |          | 0                                                     |
| is_push_sap          | INT           |          | 1                                                     |
| order_source         | VARCHAR(255)  |          | 0                                                     |
| sales_organization   | VARCHAR(255)  |          | 1000-汇旺                                             |
| salesman             | VARCHAR(255)  |          | 0                                                     |
| currency             | VARCHAR(255)  |          | CNY                                                   |
| order_category       | INT           |          | 1                                                     |
| business_type        | INT           |          | 0                                                     |
| expected_time        | VARCHAR(255)  |          | 0                                                     |
| third_order_no       | BIGINT        |          | 0                                                     |
| delivery_fee         | DECIMAL(10,2) |          | 0                                                     |
| packing_fee          | DECIMAL(10,2) |          | 0                                                     |
| pullstate            | VARCHAR(255)  |          | 3                                                     |

### `flink_rps_all_new_tll_order_details_now_day_df`

报货详单，订单与详单通过id联结。

| 字段                            | 类型          | 说明     | 示例                   |
| ------------------------------- | ------------- | -------- | ---------------------- |
| id                              | VARCHAR(255)  | 订货ID   | 442119                 |
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
| status                          | INT           |          | 1                      |
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



### `ods_rps_tll_presale_order_df`

预售订单

| 字段               | 类型          | 说明       | 示例                                           |
| ------------------ | ------------- | ---------- | ---------------------------------------------- |
| id                 | BIGINT        | id         | 1844197604223537154                            |
| activity_id        | BIGINT        | 活动ID     | 1840337065095979010                            |
| presale_order_num  | VARCHAR(255)  | 预售订单号 | YS101050605059                                 |
| order_time         | VARCHAR(255)  | 订单时间   | 2024-10-10 10:05:47                            |
| actual_amount      | DECIMAL(10,2) | 实际金额   | 1182                                           |
| store_id           | BIGINT        | 门店ID     | 51                                             |
| store_code         | VARCHAR(255)  | 门店编码   | TLL06545                                       |
| store_name         | VARCHAR(255)  | 门店名称   | 黑龙江省双鸭山市饶河县八五九农场乌苏里江商城店 |
| store_level        | VARCHAR(255)  | 门店等级   | D                                              |
| warehouse_id       | BIGINT        |            | 711449                                         |
| warehouse_code     | VARCHAR(255)  |            | CKHWHEBCGCTYK01                                |
| warehouse_name     | VARCHAR(255)  | 仓库       | 汇旺哈尔滨仓工厂通用库                         |
| order_status       | INT           | 订单状态   | 0                                              |
| tenant_id          | BIGINT        |            | -1                                             |
| belong_org_id      | BIGINT        |            | 0                                              |
| tenant_org_id      | BIGINT        |            | 0                                              |
| remark             | VARCHAR(255)  |            | 0                                              |
| create_user_id     | BIGINT        |            | 0                                              |
| creator            | VARCHAR(255)  |            | 0                                              |
| create_time        | VARCHAR(255)  |            | 2024-10-10 10:05:47                            |
| modify_user_id     | BIGINT        |            | 0                                              |
| updater            | VARCHAR(255)  |            | 0                                              |
| modify_time        | VARCHAR(255)  |            | 0                                              |
| delete_flag        | INT           |            | 0                                              |
| audit_data_version | INT           |            | 0                                              |
| sec_bu_id          | BIGINT        |            | 0                                              |
| sec_user_id        | BIGINT        |            | 0                                              |
| sec_ou_id          | BIGINT        |            | 0                                              |



### `ods_rps_tll_presale_order_details_df`

预售详单

| 字段                  | 类型          | 说明     | 示例                |
| --------------------- | ------------- | -------- | ------------------- |
| id                    | BIGINT        | id       | 1844196390551343106 |
| presale_order_num     | VARCHAR(255)  | 订单号   | YS101035760335      |
| product_info          | VARCHAR(255)  | 产品名称 | 炖梨套餐            |
| product_specification | VARCHAR(255)  |          | 0                   |
| product_id            | BIGINT        | 产品ID   | 495404036200206336  |
| sku_code              | VARCHAR(255)  |          | 900005              |
| unit_price            | DECIMAL(10,2) |          | 245                 |
| quantity              | INT           | 数量     | 30                  |
| product_type          | VARCHAR(255)  |          | 1                   |
| tenant_id             | BIGINT        |          | -1                  |
| belong_org_id         | BIGINT        |          | 0                   |
| tenant_org_id         | BIGINT        |          | 0                   |
| remark                | VARCHAR(255)  |          | 0                   |
| create_user_id        | BIGINT        |          | 0                   |
| creator               | VARCHAR(255)  |          | 0                   |
| create_time           | VARCHAR(255)  |          | 2024-10-10 10:00:57 |
| modify_user_id        | BIGINT        |          | 0                   |
| updater               | VARCHAR(255)  |          | 0                   |
| modify_time           | VARCHAR(255)  |          | 0                   |
| delete_flag           | INT           |          | 0                   |
| audit_data_version    | INT           |          | 0                   |
| sec_bu_id             | BIGINT        |          | 0                   |
| sec_user_id           | BIGINT        |          | 0                   |
| sec_ou_id             | BIGINT        |          | 0                   |

### flink_rps_tll_presale_order_df

同`ods_rps_tll_presale_order_df`

### flink_rps_tll_presale_order_details_df

同`ods_rps_tll_presale_order_details_df`

