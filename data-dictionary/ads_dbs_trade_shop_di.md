# `ads_dbs_trade_shop_di`

---

- 门店维度的销售数据


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

- 备注：大渠道汇总数据，与小渠道汇总数据有差异。