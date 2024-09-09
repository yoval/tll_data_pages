# 基础概念

- 同比

  和历史同期对比，即强调和过去的时期比。同比增长率=（当前统计周期值-历史同期值）/历史同期值。

  **一般同比是指年同比，除年同比之外，还可以计算周同比，月同比，**节假日年同比。

- 环比

  和上一周期对比，即强调是**相邻**的统计周期。

- 大盘

  统计周期内，所有的数据，包含**已解约门店**。

- 全量

  门店管理表中的所有门店。

- 存量

  统计周期内，门店营业额均>0的门店。**数据部统计存量，限定“门店状态”为“营业中”。**

- 营业中

  当前“营业状态”为“营业中”的门店。

- 时间进度

  统计日期/当月天数 *100%。

- 维度

  所谓“颗粒度”，

# 数据规则

### 关于报货

U8Cloud 中报货为全纪录，“价税合计”**需除以0.**8，2024年起首批大机器/报货有明确注释。

数据库表`ads_dbs_report_food_di`中的 `report_amount ` 直接拉取的U8Cloud数据，同样**需除以0.8**。2024年起以过滤首批。

中台前端，`加盟商经营月度报表`中的报货金额**已除以0.8**。



# u8 cloud 报货信息

u8c常用数据源表为**销售订单**与**销售订单明细**。

## 销售订单

- 选项位置：“供应链”→“销售管理”→“销售订单”→“销售订单”。

  *已添加至“我的工作”快捷方式。*

- 查询：点击“查询”按钮，打开“查询条件输入”框，选择自定义条件框。订单类型通常选择“全部”。

- 数据导出：`ctrl+a`，`ctrl+v` 。


## 销售订单明细

- 选项位置：“供应链”→“销售管理”→“销售订单查询”→“销售订单明细”。

  *已添加至“我的工作”快捷方式。*

- 查询：点击“查询”按钮，查询单品报货最好使用“存货编码”更加准确。

- 数据导出：`ctrl+a`，`ctrl+v` ，或“预览”→“输出excel”。


## 库存

- 选项位置：“供应链”→“库存管理”→“查询统计”→“收发存汇总表”。

  *已添加至“我的工作”快捷方式。*

- 查询：点击“查询”按钮查询。

- 数据导出：Excel输出，直接打印输出。

  

# 中台的使用

中台的地址为：https://data.tianlala.com/ 

**注：**

1. 中台数据**每天凌晨更新，非即时数据**。即时数据应到相应平台提取。
2. 中台单次最多导出30万条数据。
3. **导出**的数据中，单元格最后一个字符是是制表符。可使用“分列”或“替换”转换为常规格式。
4. 中台采用Mysql数据库，因此使用mysql语句。
5. 中台日期格式是`YYYYMMDD`格式

## 数据库说明

中台采用的是Mysql 数据库，版本`5.7.99`，数据库名`tll_bi_dw`。

```mysql
SELECT VERSION();
>>VERSION() 5.7.99
```

### 表`ads_dbs_report_food_di`

*ads表采用T+1 数据更新模式，无法查询即时数据。受api限制，会回刷10日数据。*

主要用于查询门店报货信息。

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




### 表`ads_dbs_trade_shop_di`

用于查询各店铺日销售

**注：**

- 数据逻辑

  > POS = AI点餐系统 + POS点餐 + 快应用-VIVO
  >
  > 小程序 = 三方对接 + 微信小程序 +支付宝小程序


包含字段如下：

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



### 表`ads_dbs_trade_food_di`

主要用于查询单店单日单品销售情况

包含字段如下：

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





### 表`dwd_rps_tll_order_di`

订单表

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



### 表`dwd_rps_tll_order_details_di`

详单表

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



```mysql
WITH day_period AS (
    SELECT '20240801' AS start_date,  -- 开始日期
           '20240909' AS end_date     -- 结束日期
),
details_table AS (
    SELECT
        CONCAT(day_period.start_date, '~', day_period.end_date) AS 查询时段,
        d1.order_id AS 订单ID,
				d1.create_time as 创建时间,
        d1.product_info AS 存货名称,
        d1.sku_code AS 存货编码,
        d1.product_specification AS 存货规格,
        d1.quantity AS 数量,
        d1.status AS 详单状态,
        o.order_status as 订单状态,
        o.order_num as 订单编号,
        o.tll_user_id as 客商编码,
        o.store_code as 门店编码
    FROM dwd_rps_tll_order_details_di d1
    JOIN dwd_rps_tll_order_di o ON d1.order_id = o.id
    CROSS JOIN day_period
    WHERE d1.pt BETWEEN day_period.start_date AND day_period.end_date
    AND d1.sku_code IN ('060001351', '050001521', '060001350')  -- 直接列出所有值
)
SELECT * FROM details_table;

```













### 表`flink_rps_pt_xc_dt_orders_now_day_df` 

*rps表支付状态：1 未支付，2 待审核，3 已审核，17 已退单，-1 关闭订单*

用于查询当日报货订单，每10分钟更新一次。

报货字段如下

| 字段                   | 类型         | 说明     | 示例                             |
| ---------------------- | ------------ | -------- | -------------------------------- |
| billno                 | VARCHAR(255) |          | 614570                           |
| order_no               | VARCHAR(255) | 订单号   | BDD00000516970                   |
| PD_No                  | VARCHAR(255) |          |                                  |
| user_id                | VARCHAR(255) | 用户ID   | 2001328                          |
| businessId             | VARCHAR(255) | 支持ID   | 2001328                          |
| payment_id             | VARCHAR(255) |          | 100017                           |
| payment_fee            | VARCHAR(255) |          | 0                                |
| refund_fee             | VARCHAR(255) |          | 0                                |
| payment_status         | VARCHAR(255) |          | 2                                |
| payment_initiationtime | VARCHAR(255) |          |                                  |
| payment_time           | VARCHAR(255) | 支持时间 | 2024/7/20 9:00                   |
| accept_name            | VARCHAR(255) | 收货名字 | 张三                             |
| post_code              | VARCHAR(255) |          |                                  |
| telphone               | VARCHAR(255) | 电话     | 138888888888                     |
| area                   | VARCHAR(255) |          |                                  |
| address                | VARCHAR(255) | 地址     | 河北省邢台市临城县               |
| message                | VARCHAR(255) | 留言     |                                  |
| remark                 | VARCHAR(255) |          |                                  |
| is_invoice             | VARCHAR(255) |          | 0                                |
| invoice_title          | VARCHAR(255) |          |                                  |
| invoice_taxes          | VARCHAR(255) |          | 0                                |
| discount_amount        | VARCHAR(255) |          | 0                                |
| real_amount            | VARCHAR(255) |          | 1069                             |
| order_amount           | VARCHAR(255) |          | 1069                             |
| OnlineAmount           | VARCHAR(255) |          | 1069                             |
| BonusAmount            | VARCHAR(255) |          | 0                                |
| DiscountApportion      | VARCHAR(255) |          | 0                                |
| point                  | VARCHAR(255) |          | 0                                |
| add_time               | VARCHAR(255) | 添加时间 | 2024/7/20 9:00                   |
| Source                 | VARCHAR(255) |          | PC                               |
| decaribe               | VARCHAR(255) |          |                                  |
| login_id               | VARCHAR(255) |          | 0                                |
| is_Integral            | VARCHAR(255) |          | N                                |
| entid                  | VARCHAR(255) |          | E26FMM0XNYQ                      |
| postage                | VARCHAR(255) |          | 0                                |
| free                   | VARCHAR(255) |          | N                                |
| upstatustime           | VARCHAR(255) |          | 2024/7/20 9:00                   |
| date                   | VARCHAR(255) |          | 2024/7/20                        |
| time                   | VARCHAR(255) |          | 9:00:12                          |
| IsCriticism            | VARCHAR(255) |          | N                                |
| ExpressName            | VARCHAR(255) |          |                                  |
| ExpressNum             | VARCHAR(255) |          |                                  |
| ShipmentsTime          | VARCHAR(255) |          |                                  |
| ywyId                  | VARCHAR(255) |          |                                  |
| fpshtx                 | VARCHAR(255) |          |                                  |
| psfs                   | VARCHAR(255) |          | 自提                             |
| fhfs                   | VARCHAR(255) |          | 银行卡支付                       |
| lineAmount             | VARCHAR(255) |          | 0                                |
| payId                  | VARCHAR(255) |          |                                  |
| is_pt                  | VARCHAR(255) |          |                                  |
| Producer               | VARCHAR(255) |          | 138888888888                     |
| areacode               | VARCHAR(255) |          | 2050308                          |
| audit_time             | VARCHAR(255) |          |                                  |
| use_balance            | VARCHAR(255) |          | 0                                |
| use_fanli              | VARCHAR(255) |          | 0                                |
| cancel_time            | VARCHAR(255) |          | 2024/7/20 9:30                   |
| is_chaizhang           | VARCHAR(255) |          | 0                                |
| generate               | VARCHAR(255) |          |                                  |
| thirdparty             | VARCHAR(255) |          |                                  |
| storcode               | VARCHAR(255) |          |                                  |
| storname               | VARCHAR(255) |          |                                  |
| is_refund              | VARCHAR(255) |          |                                  |
| agent_id               | VARCHAR(255) |          | 50000016                         |
| agent_name             | VARCHAR(255) |          | 郭凯峰（邢台）                   |
| agent_ratio            | VARCHAR(255) |          | 0.05                             |
| status                 | VARCHAR(255) |          | 2                                |
| area_manager           | VARCHAR(255) | 大区经理 | 桓许辉                           |
| province_manager       | VARCHAR(255) | 省区经理 | 韩善武                           |
| big_area_manager       | VARCHAR(255) | 区域经理 | 王枫涛                           |
| legalbody              | VARCHAR(255) |          |                                  |
| business_name          | VARCHAR(255) |          | 临城县临泉路与文化街交叉口东南角 |
| business_level         | VARCHAR(255) |          | C                                |
| business_type          | VARCHAR(255) |          | 1                                |
| business_package       | VARCHAR(255) |          |                                  |
| is_Received            | VARCHAR(255) |          | 0                                |
| order_type             | VARCHAR(255) |          | 正常                             |
| update_time            | VARCHAR(255) |          |                                  |

### 表`dwd_rps_dt_orders_di`

查询截至昨日的历史订单

| 字段                   | 类型          | 说明     | 示例                                 |
| ---------------------- | ------------- | -------- | ------------------------------------ |
| uuid                   | VARCHAR(255)  |          | 000650ed-1f4f-435b-8782-a9d6ea6d00b5 |
| billno                 | INT           | 订单号   | 539138                               |
| order_no               | VARCHAR(255)  |          | BDD00000439872                       |
| pd_no                  | VARCHAR(255)  |          |                                      |
| user_id                | VARCHAR(255)  |          | 2000990                              |
| businessid             | VARCHAR(255)  |          | 2000990                              |
| payment_id             | INT           |          | 100017                               |
| payment_fee            | DECIMAL(9,3)  |          | 0                                    |
| refund_fee             | DECIMAL(14,2) |          | 0                                    |
| payment_status         | INT           |          | 2                                    |
| payment_initiationtime | VARCHAR(255)  |          |                                      |
| payment_time           | VARCHAR(255)  |          | 2024/3/12 11:32                      |
| accept_name            | VARCHAR(255)  |          | 张立杰                               |
| post_code              | VARCHAR(255)  |          |                                      |
| telphone               | VARCHAR(255)  |          | 13999999999                          |
| area                   | VARCHAR(255)  |          |                                      |
| address                | VARCHAR(255)  |          | 河北省邢台市信都区                   |
| message                | VARCHAR(255)  |          |                                      |
| remark                 | VARCHAR(255)  |          |                                      |
| is_invoice             | INT           |          | 0                                    |
| invoice_title          | VARCHAR(255)  |          |                                      |
| invoice_taxes          | DECIMAL(9,3)  |          | 0                                    |
| discount_amount        | DECIMAL(14,3) |          | 0                                    |
| real_amount            | DECIMAL(14,3) |          | 12048                                |
| order_amount           | DECIMAL(14,3) |          | 12048                                |
| onlineamount           | DECIMAL(14,3) |          | 12045.7                              |
| bonusamount            | DECIMAL(14,3) |          | 0                                    |
| discountapportion      | DECIMAL(14,3) |          | 0                                    |
| point                  | INT           |          | 0                                    |
| status                 | INT           |          | 3                                    |
| add_time               | VARCHAR(255)  | 添加日期 | 2024/3/12 11:31                      |
| source                 | VARCHAR(255)  |          | PC                                   |
| decaribe               | VARCHAR(255)  |          |                                      |
| login_id               | INT           |          | 0                                    |
| is_integral            | VARCHAR(255)  |          | N                                    |
| entid                  | VARCHAR(255)  |          | E26FMM0XNYQ                          |
| postage                | DECIMAL(14,2) |          | 0                                    |
| free                   | VARCHAR(255)  |          | N                                    |
| upstatustime           | VARCHAR(255)  |          | 2024/3/12 11:31                      |
| order_date             | VARCHAR(255)  |          | 2024/3/12                            |
| order_time             | VARCHAR(255)  |          | 11:31:25                             |
| iscriticism            | VARCHAR(255)  |          | N                                    |
| expressname            | VARCHAR(255)  |          |                                      |
| expressnum             | VARCHAR(255)  |          |                                      |
| shipmentstime          | VARCHAR(255)  |          |                                      |
| ywyid                  | VARCHAR(255)  |          |                                      |
| fpshtx                 | VARCHAR(255)  |          |                                      |
| psfs                   | VARCHAR(255)  |          | 物流                                 |
| fhfs                   | VARCHAR(255)  |          | 银行卡支付                           |
| lineamount             | DECIMAL(14,2) |          | 0                                    |
| payid                  | VARCHAR(255)  |          |                                      |
| is_pt                  | VARCHAR(255)  |          |                                      |
| producer               | VARCHAR(255)  |          | 13999999999                          |
| areacode               | VARCHAR(255)  |          | 2050318                              |
| audit_time             | VARCHAR(255)  |          | 2024/3/12 11:37                      |
| use_balance            | DECIMAL(14,2) |          | 2.3                                  |
| use_fanli              | DECIMAL(14,2) |          | 0                                    |
| cancel_time            | VARCHAR(255)  |          | 2024/3/12 12:01                      |
| is_chaizhang           | INT           |          | 1                                    |
| is_received            | INT           |          | 1                                    |
| order_type             | VARCHAR(255)  |          | 正常                                 |
| generate               | VARCHAR(255)  |          |                                      |
| thirdparty             | VARCHAR(255)  |          |                                      |
| storcode               | VARCHAR(255)  |          |                                      |
| storname               | VARCHAR(255)  |          |                                      |
| is_refund              | INT           |          |                                      |
| agent_id               | VARCHAR(255)  |          | 50000016                             |
| agent_name             | VARCHAR(255)  |          | 张三（邢台）                         |
| agent_ratio            | DECIMAL(8,2)  |          | 0.05                                 |
| data_source            | VARCHAR(255)  |          | 1                                    |
| pt                     | VARCHAR(255)  |          | 20240312                             |

### 表`flink_rps_pt_xc_dt_order_goods_now_day_df`

用于查询当日报货详单，每10分钟更新一次。

| 字段               | 类型         | 说明     | 示例                 |
| ------------------ | ------------ | -------- | -------------------- |
| id                 | VARCHAR(255) |          | 7584718              |
| order_id           | VARCHAR(255) |          | 614566               |
| order_no           | VARCHAR(255) | 订单号   | BDD00000516966       |
| sortId             | VARCHAR(255) |          | 11                   |
| article_id         | VARCHAR(255) |          | 100737               |
| goods_no           | VARCHAR(255) | 产品编码 | 20000013             |
| goods_title        | VARCHAR(255) | 产品名称 | 橙果粒酱             |
| goods_price        | VARCHAR(255) |          | 247                  |
| real_price         | VARCHAR(255) |          | 247                  |
| quantity           | VARCHAR(255) | 数量     | 1                    |
| taxAmount          | VARCHAR(255) |          | 247                  |
| point              | VARCHAR(255) |          | 0                    |
| discount           | VARCHAR(255) |          | 100                  |
| derate             | VARCHAR(255) |          | 0                    |
| fabh               | VARCHAR(255) |          |                      |
| cxbs               | VARCHAR(255) |          | SP                   |
| decaribe           | VARCHAR(255) |          | 普通                 |
| entid              | VARCHAR(255) |          | E26FMM0XNYQ          |
| IsCriticism        | VARCHAR(255) |          | N                    |
| PromScenario       | VARCHAR(255) |          |                      |
| Status             | VARCHAR(255) |          | 0                    |
| ReturnNum          | VARCHAR(255) |          | 0                    |
| PiHao              | VARCHAR(255) |          |                      |
| timestamp          | VARCHAR(255) |          | 45493.34691          |
| erp_orderno        | VARCHAR(255) |          | SO24072000008        |
| erp_orderno_return | VARCHAR(255) |          |                      |
| storcode           | VARCHAR(255) |          | 1001F8100000000QSCF1 |
| storname           | VARCHAR(255) |          | 哈尔滨仓             |
| update_time        | VARCHAR(255) |          | 45493.34807          |
| storid             | VARCHAR(255) |          |                      |

### 表`dwd_rps_dt_order_goods_di`

用于查询截至至昨日的报货箱单。

| 字段               | 类型          | 说明 | 示例                   |
| ------------------ | ------------- | ---- | ---------------------- |
| id                 | INT           |      | 76200                  |
| order_id           | INT           |      | 175409                 |
| order_no           | VARCHAR(255)  |      | XCD00000074690         |
| sortId             | INT           |      | 1                      |
| article_id         | INT           |      |                        |
| goods_no           | VARCHAR(255)  |      | 120001724              |
| goods_title        | VARCHAR(255)  |      | 联名宣传物料包         |
| goods_price        | DECIMAL(14,3) |      | 15                     |
| real_price         | DECIMAL(14,3) |      | 15                     |
| quantity           | DECIMAL(14,2) |      | 1                      |
| taxAmount          | DECIMAL(14,3) |      | 15                     |
| point              | INT           |      | 0                      |
| discount           | INT           |      | 100                    |
| derate             | DECIMAL(14,2) |      | 0                      |
| fabh               | VARCHAR(255)  |      |                        |
| cxbs               | VARCHAR(255)  |      |                        |
| decaribe           | VARCHAR(255)  |      |                        |
| entid              | VARCHAR(255)  |      | E26FMM0XNYQ            |
| IsCriticism        | VARCHAR(255)  |      | N                      |
| PromScenario       | VARCHAR(255)  |      |                        |
| Status             | INT           |      | 0                      |
| ReturnNum          | DECIMAL(14,2) |      | 0                      |
| PiHao              | VARCHAR(255)  |      |                        |
| timestamps         | VARCHAR(255)  |      | 2024/7/3 8:35          |
| erp_orderno        | VARCHAR(255)  |      |                        |
| erp_orderno_return | VARCHAR(255)  |      |                        |
| storcode           | VARCHAR(255)  |      | 1001F8100000000001IZ   |
| storname           | VARCHAR(255)  |      | 蚌埠快递仓（原天津仓） |
| updatetime         | VARCHAR(255)  |      | 2024/7/3 8:44          |
| data_source        | INT           |      | 2                      |
| pt                 | VARCHAR(255)  |      | 20240703               |


### ☆ 数据库使用注意事项：

​	1、`ads_dbs_report_food_di`、`ads_dbs_trade_shop_di`、`ads_dbs_trade_food_di` 三张表的逻辑各不相同。

- `ads_dbs_report_food_di` 仅统计当日有报货门店的各项信息，计算报货应用此表。
- `ads_dbs_trade_food_di` 产品维度统计，计算产品销量应用此表。
- `ads_dbs_trade_shop_di` 门店维度统计，计算营业额应用此表。

2、`flink_rps_pt_xc_dt_orders_now_day_df`、`dwd_rps_dt_orders_di`、`flink_rps_pt_xc_dt_order_goods_now_day_df`、`dwd_rps_dt_order_goods_di` 会出现重复值。查询时，orders 表需要`DISTINCT order_no` ，goods 表需要`DISTINCT id `

## 数据库使用实例

### 1. 拉取时间段内，各店单日营业额、营业天数

```sql
-- 设置查询的开始和结束日期
WITH day_period AS (
    SELECT '20240401' AS start_date,  -- 开始日期
           '20240427' AS end_date     -- 结束日期
),

-- day_table，用于生成每天每店的流水金额、实收金额和营业天数
day_table AS (
    SELECT
        CONCAT(day_period.start_date, '~', day_period.end_date) AS 查询时段, -- 构建查询时段的显示格式
        business_date AS 日期,                                        -- 业务日期
        stat_shop_id AS 门店编码,                                     -- 统计的门店编码
        SUM(total_amount) AS 流水金额,                                -- 汇总流水金额
        SUM(pay_amount) AS 实收金额,                                  -- 汇总结算金额
        CASE 
            WHEN SUM(total_amount) > 0 THEN 1                          -- 如果总金额大于0，营业天数为1
            ELSE 0                                                     -- 否则营业天数为0
        END AS 营业天数                                                -- 结果集中的营业天数列
    FROM 
        ads_dbs_trade_shop_di,
        day_period 
    WHERE 
        business_date BETWEEN day_period.start_date AND day_period.end_date
    GROUP BY 
        查询时段,
        门店编码,                                                        
        日期
)

SELECT * FROM day_table;
```

查询结果

| 查询时段          | 日期     | 门店编码 | 流水金额 | 实收金额 | 营业天数 |
| ----------------- | -------- | -------- | -------- | -------- | -------- |
| 20240401~20240427 | 20240412 | TLL04998 | 688      | 688      | 1        |
| 20240401~20240427 | 20240412 | TLL06223 | 1349     | 1270.52  | 1        |
| 20240401~20240427 | 20240412 | TLL03864 | 1281.5   | 1084.9   | 1        |
| 20240401~20240427 | 20240412 | TLL03680 | 0        | 0        | 0        |
| 20240401~20240427 | 20240412 | TLL06506 | 1439     | 1334.18  | 1        |
| 20240401~20240427 | 20240412 | TLL04785 | 2162.14  | 1805.36  | 1        |
| 20240401~20240427 | 20240412 | TLL06007 | 1590     | 1343.99  | 1        |
| 20240401~20240427 | 20240412 | TLL04644 | 443      | 336.67   | 1        |
| 20240401~20240427 | 20240412 | TLL04377 | 0        | 0        | 0        |
| 20240401~20240427 | 20240412 | TLL04664 | 1290     | 1262.73  | 1        |



### 2. 拉取时间段内，各店单月营业额、营业天数

```sql
-- 设置查询的开始和结束日期
WITH day_period AS (
    SELECT '20240401' AS start_date,  -- 开始日期
           '20240630' AS end_date     -- 结束日期
),

-- day_table，用于生成每天每店的流水金额、实收金额和营业天数
day_table AS (
    SELECT
        CONCAT(day_period.start_date, '~', day_period.end_date) AS 查询时段, -- 构建查询时段的显示格式
        business_date AS 日期,                                        -- 业务日期
        stat_shop_id AS 门店编码,                                     -- 统计的门店编码
        SUM(total_amount) AS 流水金额,                                -- 汇总流水金额
        SUM(pay_amount) AS 实收金额,                                  -- 汇总结算金额
        CASE 
            WHEN SUM(total_amount) > 0 THEN 1                          -- 如果总金额大于0，营业天数为1
            ELSE 0                                                     -- 否则营业天数为0
        END AS 营业天数                                                -- 结果集中的营业天数列
    FROM 
        ads_dbs_trade_shop_di,
        day_period 
    WHERE 
        business_date BETWEEN day_period.start_date AND day_period.end_date
    GROUP BY 
        查询时段,
        门店编码,                                                        
        日期
)

-- 选择聚合后的数据，包括查询时段、门店编码、月份、流水金额总和、实收金额总和以及营业天数总和
SELECT
    查询时段,                  -- 显示查询的时间段
    门店编码,                  -- 显示门店的编码
    LEFT(日期, 6) AS 月份,      -- 从日期字段提取月份（格式：YYYYMM）
    SUM(流水金额) AS 流水金额, -- 计算流水金额的总和
    SUM(实收金额) AS 实收金额, -- 计算实收金额的总和
    SUM(营业天数) AS 营业天数  -- 计算营业天数的总和

FROM day_table

GROUP BY
    查询时段,
    月份,
    门店编码;

```

查询结果

| 查询时段          | 门店编码 | 月份   | 流水金额 | 实收金额 | 营业天数 |
| ----------------- | -------- | ------ | -------- | -------- | -------- |
| 20240401~20240630 | TLL06250 | 202404 | 61337.5  | 51997.75 | 29       |
| 20240401~20240630 | TLL07290 | 202404 | 53569.5  | 39895.55 | 30       |
| 20240401~20240630 | TLL07201 | 202404 | 37151.91 | 36828.19 | 30       |
| 20240401~20240630 | TLL05320 | 202404 | 50584    | 50101.97 | 30       |
| 20240401~20240630 | TLL05008 | 202404 | 25773    | 20727.31 | 28       |
| 20240401~20240630 | TLL03621 | 202404 | 49650    | 47933.27 | 30       |
| 20240401~20240630 | TLL07449 | 202404 | 26976.2  | 23089.79 | 30       |
| 20240401~20240630 | TLL05087 | 202404 | 0        | 0        | 0        |
| 20240401~20240630 | TLL04202 | 202404 | 74172.6  | 63688.82 | 30       |
| 20240401~20240630 | TLL04338 | 202404 | 55287.5  | 53347.62 | 25       |

### 拉取单店各月营业额

拉取`TLL02973`各月的流水金额、实收金额。

```mysql
-- 修改门店编号即可
SELECT
    LEFT(business_date, 6) AS 月份,
    stat_shop_id AS 门店编号,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额
FROM
    ads_dbs_trade_shop_di
WHERE
    stat_shop_id = 'TLL02973'
GROUP BY
    门店编号,
    月份
```

运行结果

| 月份   | 门店编号 | 流水金额  | 实收金额  |
| ------ | -------- | --------- | --------- |
| 202301 | TLL02973 | 46960.4   | 43342.93  |
| 202305 | TLL02973 | 93020.85  | 83472     |
| 202309 | TLL02973 | 67918     | 60534.88  |
| 202401 | TLL02973 | 54866.7   | 44790.72  |
| 202402 | TLL02973 | 45488.8   | 40292.12  |
| 202406 | TLL02973 | 124715.7  | 116948.22 |
| 202304 | TLL02973 | 55028.98  | 50080.69  |
| 202303 | TLL02973 | 48412.96  | 44104.99  |
| 202306 | TLL02973 | 102576.02 | 93996.28  |
| 202308 | TLL02973 | 94389.63  | 84791.45  |

### 拉取单店时间段内的营业额、报货金额

```mysql
-- 设定门店ID和查询的时间范围
WITH variables AS (
    SELECT 'TLL05903' AS shop_id,  -- 门店ID
           20230426 AS start_date, -- 查询开始日期
           20230626 AS end_date    -- 查询结束日期
),

-- 报货数据的汇总表
report_table AS (
    SELECT 
        stat_shop_id AS 门店编号, 
        SUM(report_amount) AS 报货金额 -- 报货金额总和
    FROM 
        ads_dbs_report_food_di,
        variables
    WHERE 
        stat_shop_id = variables.shop_id 
        AND business_date BETWEEN variables.start_date AND variables.end_date
    GROUP BY 
        门店编号
),

-- 交易数据的汇总表
amount_table AS (
    SELECT 
        stat_shop_id AS 门店编号, 
        SUM(total_amount) AS 流水金额, 
        SUM(pay_amount) AS 实收金额
    FROM 
        ads_dbs_trade_shop_di,
        variables
    WHERE
        stat_shop_id = variables.shop_id
        AND business_date BETWEEN variables.start_date AND variables.end_date
    GROUP BY 
        门店编号
)

SELECT 
    ret.门店编号, 
    ret.报货金额, 
    amt.流水金额, 
    amt.实收金额
FROM 
    report_table ret -- 左表：报货数据
LEFT JOIN 
    amount_table amt ON ret.门店编号 = amt.门店编号; -- 右表：交易数据，按门店编号连接
```

查询结果

| 门店编号 | 报货金额 | 流水金额  | 实收金额 |
| -------- | -------- | --------- | -------- |
| TLL05903 | 53345.6  | 101337.48 | 85836.23 |

### 拉取各店时间段内的营业额、报货金额

```mysql
WITH day_period AS (
    SELECT '20230426' AS start_date, -- 查询开始日期
           '20230626' AS end_date    -- 查询结束日期
),

-- 报货数据的汇总表，针对所有门店
report_table AS (
    SELECT 
        stat_shop_id AS 门店编号, 
        SUM(report_amount) AS 报货金额 -- 报货金额总和
    FROM 
        ads_dbs_report_food_di,
        day_period
    WHERE 
        business_date BETWEEN day_period.start_date AND day_period.end_date 
    GROUP BY 
        stat_shop_id 
),

-- 交易数据的汇总表，针对所有门店
amount_table AS (
    SELECT 
        stat_shop_id AS 门店编号, 
        SUM(total_amount) AS 流水金额, 
        SUM(pay_amount) AS 实收金额
    FROM 
        ads_dbs_trade_shop_di,
        day_period
    WHERE 
        business_date BETWEEN day_period.start_date AND day_period.end_date 
    GROUP BY 
        stat_shop_id -- 按门店编号分组
)

-- 主查询，将报货数据和交易数据进行左连接
SELECT 
    ret.门店编号, 
    ret.报货金额, 
    amt.流水金额, 
    amt.实收金额
FROM 
    report_table ret -- 左表：报货数据
LEFT JOIN 
    amount_table amt ON ret.门店编号 = amt.门店编号;
```

查询结果

| 门店编号 | 报货金额 | 流水金额  | 实收金额  |
| -------- | -------- | --------- | --------- |
| ZYD00076 | 63015.6  | 254145.9  | 234782.07 |
| TLLBL016 | 26564.8  | 99683.08  | 98924.41  |
| TLL06137 | 95294.8  | 91326.23  | 84757.75  |
| TLL06106 | 81203.28 | 57967.46  | 48446.85  |
| TLL06075 | 41369.2  | 112186.35 | 109962.91 |
| TLL06067 | 66448.4  | 66980.66  | 50570.47  |
| TLL06051 | 22512.56 | 104332.19 | 95276.08  |
| TLL06039 | 33102.4  | 63770.9   | 63597.2   |
| TLL06024 | 51311.2  | 104589.8  | 93716.15  |
| TLL06020 | 17050.4  | 77413.02  | 70578.06  |



### 拉取各店最新销售日期

```mysql
SELECT
  stat_shop_id as 门店编码,                -- 选择门店编码
  MAX(business_date) as 上次收银日期  
FROM
  ads_dbs_trade_shop_di

WHERE
  total_amount > 0
GROUP BY
  stat_shop_id;
```

运行结果

| 门店编码 | 上次收银日期 |
| -------- | ------------ |
| TLL02135 | 20240423     |
| TLL03533 | 20240426     |
| TLL04785 | 20240426     |
| TLL04377 | 20230718     |
| TLL04664 | 20240426     |
| TLL02938 | 20240426     |
| TLL03752 | 20230306     |
| TLL04641 | 20231210     |
| TLL04881 | 20230130     |
| TLL05438 | 20240426     |

### 拉取各店最新报货日期

```mysql
-- 直接运行即可
SELECT
  stat_shop_id as 门店编码,
  MAX(business_date) as 上次报货日期
FROM
  ads_dbs_report_food_di
WHERE
  report_amount > 0
GROUP BY
  stat_shop_id;
```

运行结果

| 门店编码 | 上次报货日期 |
| -------- | ------------ |
| ZYD00063 | 20240318     |
| ZYD00041 | 20240426     |
| ZYD00033 | 20230414     |
| TLL05641 | 20240417     |
| TLL05602 | 20240326     |
| TLL05600 | 20240409     |
| TLL05560 | 20240426     |
| TLL05532 | 20240410     |
| TLL05416 | 20240315     |
| TLL05330 | 20240425     |



### 拉取各级经理的报货数据

```mysql
-- 设定查询的时间范围
WITH day_period AS (
    SELECT '20230426' AS start_date,  -- 查询开始日期
           '20230626' AS end_date     -- 查询结束日期
)

SELECT 
    CONCAT(day_period.start_date, '~', day_period.end_date) AS 时段,
    region_manager_name AS '大区经理', 
    prov_manager_name AS '省区经理', 
    district_manager_name AS '区域经理', 
    ROUND(SUM(report_amount), 2) AS '报货金额'

FROM 
    ads_dbs_report_food_di, 
    day_period
WHERE 
    business_date BETWEEN day_period.start_date AND day_period.end_date
GROUP BY 
    时段,
    大区经理,
    省区经理,
    区域经理;
```

运行结果

| 时段              | 大区经理 | 省区经理 | 区域经理 | 报货金额  |
| ----------------- | -------- | -------- | -------- | --------- |
| 20240401~20240426 | 刘成龙   | 朱迎澳   | 贺横     | 487580.8  |
| 20240401~20240426 | 杨硕     | 裴俊杰   | 丁成龙   | 492261.44 |
| 20240401~20240426 | 胡冰雪   | 刘昊彬   | 毛念秋   | 667283.2  |
| 20240401~20240426 | 杨硕     | 裴俊杰   | 姜生耀   | 585450.4  |
| 20240401~20240426 | 杨硕     | 庞孝笑   | 程博文   | 706845.92 |
| 20240401~20240426 | 赵磊     | 周文君   | 王璐     | 652319.6  |
| 20240401~20240426 | 王枫涛   | 付聪辉   | 陈迪     | 544315.28 |
| 20240401~20240426 | 胡冰雪   | 吴大印   | 吴大印   | 259022.4  |
| 20240401~20240426 | 王枫涛   | 刘紫阳   | 时允诺   | 681536.08 |
| 20240401~20240426 | 刘成龙   | 李何     | 赵杰     | 723976.4  |

### 查询时间段内，各店各月的报货金额

```mysql
-- 查询时间段内各店各月的报货金额
WITH day_period AS (
    SELECT '20230426' AS start_date, 
           '20230626' AS end_date  
)
SELECT 
	CONCAT(day_period.start_date, '~', day_period.end_date) AS 查询时段,
    LEFT(business_date, 6) AS 月份,  
    stat_shop_id AS 门店编码, 
    ROUND(SUM(report_amount), 2) AS 报货金额 
FROM 
    ads_dbs_report_food_di, day_period
WHERE  
    business_date BETWEEN day_period.start_date AND day_period.end_date
GROUP BY 
	查询时段,
    门店编码, 
    月份;  
```







### 拉取柠檬橙子的报货周期（基本废弃，90天单品报货脚本处理）

- 注：当前仅有柠檬橙子权限，无其它产品权限。

```mysql
-- 直接运行即可
WITH lemon_table AS (
  SELECT
    t1.stat_shop_id,
    t1.lemon_report_cnt,
    t1.business_date AS last_lemon_report_day
  FROM
    ads_dbs_report_food_di t1
    JOIN (
      SELECT
        stat_shop_id,
        MAX(business_date) AS business_date
      FROM
        ads_dbs_report_food_di
      WHERE
        lemon_report_cnt > 0
      GROUP BY
        stat_shop_id
    ) t2 ON t1.stat_shop_id = t2.stat_shop_id
    AND t1.business_date = t2.business_date
  WHERE
    t1.lemon_report_cnt > 0
),
orange_table AS (
  SELECT
    t1.stat_shop_id,
    t1.orange_report_cnt,
    t1.business_date AS last_orange_report_day
  FROM
    ads_dbs_report_food_di t1
    JOIN (
      SELECT
        stat_shop_id,
        MAX(business_date) AS business_date
      FROM
        ads_dbs_report_food_di
      WHERE
        orange_report_cnt > 0
      GROUP BY
        stat_shop_id
    ) t2 ON t1.stat_shop_id = t2.stat_shop_id
    AND t1.business_date = t2.business_date
  WHERE
    t1.orange_report_cnt > 0
)
SELECT
  -- 门店ID
  l.stat_shop_id as 门店编号,
  -- 上次柠檬报货时间
  l.last_lemon_report_day as 上次柠檬报货时间,
  -- 上次柠檬报货数量
  l.lemon_report_cnt as 上次柠檬报货数量,
  -- 上次橙子报货时间
  o.last_orange_report_day as 上次橙子报货时间,
  -- 上次橙子报货数量
  o.orange_report_cnt as 上次橙子报货数量,
  DATEDIFF(CURDATE(), l.last_lemon_report_day) AS 上次柠檬报货距今,
  CASE
    WHEN DATEDIFF(CURDATE(), l.last_lemon_report_day) < 30 THEN '30日内有报货'
    WHEN DATEDIFF(CURDATE(), l.last_lemon_report_day) < 60 THEN '60日内有报货'
    WHEN DATEDIFF(CURDATE(), l.last_lemon_report_day) < 90 THEN '90日内有报货'
    ELSE '90日内无报货'
  END AS 柠檬报货周期,
  DATEDIFF(CURDATE(), o.last_orange_report_day) AS 上次橙子报货距今,
  CASE
    WHEN DATEDIFF(CURDATE(), o.last_orange_report_day) < 30 THEN '30日内有报货'
    WHEN DATEDIFF(CURDATE(), o.last_orange_report_day) < 60 THEN '60日内有报货'
    WHEN DATEDIFF(CURDATE(), o.last_orange_report_day) < 90 THEN '90日内有报货'
    ELSE '90日内无报货'
  END AS 橙子报货周期
FROM
  lemon_table l
  JOIN orange_table o ON l.stat_shop_id = o.stat_shop_id;
```

运行结果

| 门店编号 | 上次柠檬报货时间 | 上次柠檬报货数量 | 上次橙子报货时间 | 上次橙子报货数量 | 上次柠檬报货距今 | 柠檬报货周期 | 上次橙子报货距今 | 橙子报货周期 |
| -------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- | ------------ | ---------------- | ------------ |
| TLL04437 | 20230315         | 3                | 20230315         | 2                | 406              | 90日内无报货 | 406              | 90日内无报货 |
| TLL04234 | 20230321         | 2                | 20230321         | 2                | 400              | 90日内无报货 | 400              | 90日内无报货 |
| TLL03600 | 20230407         | 1                | 20230424         | 1                | 383              | 90日内无报货 | 366              | 90日内无报货 |
| TLL03956 | 20230605         | 1                | 20230605         | 1                | 324              | 90日内无报货 | 324              | 90日内无报货 |
| TLL03827 | 20230626         | 1                | 20230626         | 1                | 303              | 90日内无报货 | 303              | 90日内无报货 |
| TLL04940 | 20230804         | 2                | 20230804         | 2                | 264              | 90日内无报货 | 264              | 90日内无报货 |
| TLL03673 | 20230804         | 2                | 20230710         | 3                | 264              | 90日内无报货 | 289              | 90日内无报货 |
| TLL04600 | 20230807         | 3                | 20230807         | 3                | 261              | 90日内无报货 | 261              | 90日内无报货 |
| TLL01918 | 20230807         | 3                | 20230807         | 2                | 261              | 90日内无报货 | 261              | 90日内无报货 |
| TLL01039 | 20230807         | 4                | 20230712         | 4                | 261              | 90日内无报货 | 287              | 90日内无报货 |

### 拉取时间段内，各商品销量及营业额

```mysql
-- 修改日期即可
SELECT
  item_name as 商品名称,
  sum(dp_item_count) as 销售数量,
  sum(dp_total_amount) as 流水金额,
  sum(dp_pay_amount) as 实收金额
FROM
  ads_dbs_trade_food_di
where
  business_date BETWEEN 20240418 AND 20240424
group by
  item_name
```

运行结果

| 商品名称       | 销售数量 | 流水金额   | 实收金额   |
| -------------- | -------- | ---------- | ---------- |
| 原味冰淇淋     | 595027   | 1191220    | 1174023.77 |
| 冰鲜柠檬水     | 587192   | 2421309.34 | 2243327.64 |
| 清风茉白鲜奶茶 | 565192   | 4610631.16 | 4061573.32 |
| 一桶水果茶     | 527273   | 5412502.94 | 4764987.3  |
| 酸奶冰淇淋     | 520341   | 1046891.3  | 972233.72  |
| 其它           | 332417   | 2759822.69 | 1590770.39 |
| 一桶全家福     | 311982   | 3180308.15 | 2938314.28 |
| 葡萄摇摇杯     | 264788   | 2428504.69 | 2292309.86 |
| 葡萄晶球       | 219044   | 1601428.04 | 1404084.73 |
| 黑糖珍珠奶茶   | 198642   | 1425232.52 | 1326560.25 |



### 拉取时间段内，各店的单日营业额

```mysql
-- 修改日期即可
WITH variables AS (
    SELECT '20240401' AS start_date, '20240426' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    stat_shop_id AS 门店编号,
    business_date AS 日期,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额
FROM
    ads_dbs_trade_shop_di,
    variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date
GROUP BY
    时段,
    门店编号,
    日期;
```

运行结果

| 时段              | 门店编号 | 日期     | 流水金额 | 实收金额 |
| ----------------- | -------- | -------- | -------- | -------- |
| 20240401~20240426 | TLL04998 | 20240413 | 885      | 885      |
| 20240401~20240426 | TLL07415 | 20240413 | 2382     | 2031.66  |
| 20240401~20240426 | TLL06157 | 20240413 | 1482     | 1232.8   |
| 20240401~20240426 | TLL07029 | 20240413 | 3301.5   | 2499.88  |
| 20240401~20240426 | TLL02114 | 20240413 | 1506.7   | 1053.28  |
| 20240401~20240426 | TLL06241 | 20240413 | 962.5    | 825.06   |
| 20240401~20240426 | TLL04785 | 20240413 | 2826     | 2481.93  |
| 20240401~20240426 | TLL07350 | 20240413 | 3294.5   | 2894.29  |
| 20240401~20240426 | TLL07499 | 20240413 | 2168.2   | 1877.74  |
| 20240401~20240426 | TLL02938 | 20240413 | 1333.5   | 1074.61  |

#### 拉取各店单月营业额

```sql
-- 修改日期即可
WITH variables AS (
    SELECT '20230101' AS start_date, '20231231' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    stat_shop_id AS 门店编号,
    LEFT(business_date, 6) AS 月份,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额
FROM
    ads_dbs_trade_shop_di,
    variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date
GROUP BY
    时段,
    门店编号,
    月份;
```

| 时段              | 门店编号 | 月份   | 流水金额 | 实收金额  |
| ----------------- | -------- | ------ | -------- | --------- |
| 20230101~20231231 | TLL03864 | 202301 | 67141.8  | 58669.87  |
| 20230101~20231231 | TLL03533 | 202301 | 40808    | 40686.9   |
| 20230101~20231231 | TLL04377 | 202301 | 6280.99  | 5979.11   |
| 20230101~20231231 | TLL01934 | 202301 | 0.00E+00 | 0.00E+00  |
| 20230101~20231231 | TLL02938 | 202301 | 50274.1  | 38412.9   |
| 20230101~20231231 | TLL03750 | 202301 | 0.00E+00 | 0.00E+00  |
| 20230101~20231231 | TLL03567 | 202301 | 74992.05 | 72497.1   |
| 20230101~20231231 | TLL05087 | 202301 | 11607    | 10848.89  |
| 20230101~20231231 | TLL05535 | 202301 | 9804     | 8563      |
| 20230101~20231231 | TLL03329 | 202301 | 133619   | 112745.67 |



### 拉取时间段内，各店流水、实收

```mysql
-- 修改日期即可
WITH variables AS (
    SELECT '20240101' AS start_date, '20240323' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    stat_shop_id AS 门店编号,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额
FROM
    ads_dbs_trade_shop_di,
    variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date
GROUP BY
    时段,
    门店编号;
```

运行结果

| 时段              | 门店编号 | 流水金额  | 实收金额  |
| ----------------- | -------- | --------- | --------- |
| 20240101~20240323 | TLL03864 | 155528.42 | 129338.4  |
| 20240101~20240323 | TLL02114 | 50006.1   | 36014.03  |
| 20240101~20240323 | TLL04785 | 191816.3  | 162131.46 |
| 20240101~20240323 | TLL04644 | 39255.7   | 32080.25  |
| 20240101~20240323 | TLL06250 | 145941.74 | 118885.1  |
| 20240101~20240323 | TLL07350 | 194716.04 | 164296.79 |
| 20240101~20240323 | TLL04664 | 98885.91  | 87927.64  |
| 20240101~20240323 | TLL06568 | 26082     | 26082     |
| 20240101~20240323 | TLL07499 | 140604.8  | 113842.14 |
| 20240101~20240323 | TLL05338 | 185029.1  | 164060.9  |

增加**营业天数**就比较麻烦

### 拉取时间段内，各店流水、实收、营业天数

```mysql
-- 修改日期即可
WITH time_period AS (
    SELECT '20240401' AS start_date, '20240427' AS end_date
)
SELECT
    CONCAT(time_period.start_date, '~', time_period.end_date) AS 时段,
    门店编码,
    SUM(流水金额) AS 总流水金额,
    SUM(实收金额) AS 总实收金额,
    SUM(营业天数) AS 总营业天数
FROM
    (SELECT
        business_date AS 日期,
        stat_shop_id AS 门店编码,
        SUM(total_amount) AS 流水金额,
        SUM(pay_amount) AS 实收金额,
        CASE
            WHEN SUM(total_amount) > 0 THEN 1
            ELSE 0
        END AS 营业天数
    FROM
        ads_dbs_trade_shop_di,time_period
    WHERE
        business_date BETWEEN time_period.start_date AND time_period.end_date
    GROUP BY
        门店编码,
        business_date) AS day_table,
    time_period
GROUP BY
    时段,
    门店编码;
```



| 时段              | 门店编码 | 总流水金额 | 总实收金额 | 总营业天数 |
| ----------------- | -------- | ---------- | ---------- | ---------- |
| 20240401~20240427 | TLL06506 | 32293.4    | 28590.1    | 27         |
| 20240401~20240427 | TLL04644 | 26897.04   | 20725.56   | 27         |
| 20240401~20240427 | TLL07350 | 81876      | 73637.87   | 26         |
| 20240401~20240427 | TLL07213 | 34614.08   | 29555.21   | 26         |
| 20240401~20240427 | TLL07449 | 24218      | 20767.49   | 26         |
| 20240401~20240427 | TLL06271 | 27056.9    | 22723.46   | 25         |
| 20240401~20240427 | TLL05438 | 16803.8    | 14341.17   | 26         |
| 20240401~20240427 | TLL04202 | 66291.1    | 56733.79   | 27         |
| 20240401~20240427 | TLL04939 | 0.00E+00   | 0.00E+00   | 0          |
| 20240401~20240427 | TLL05504 | 44977.5    | 41269.79   | 27         |

###  拉取时间段内，各店各渠道收银

```mysql
WITH variables AS (
    SELECT '20240101' AS start_date, '20240426' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    stat_shop_id AS 门店编码,
    platform AS 渠道,
    SUM(total_amount) AS 流水金额
FROM
    ads_dbs_trade_shop_di, variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date
GROUP BY
    时段,
    stat_shop_id,
    platform;
```

运行结果

| 时段              | 门店编码 | 渠道   | 流水金额  |
| ----------------- | -------- | ------ | --------- |
| 20240101~20240426 | TLL06223 | 美团   | 27425.8   |
| 20240101~20240426 | TLL04998 | 美团   | 41        |
| 20240101~20240426 | TLL07415 | 小程序 | 6192.5    |
| 20240101~20240426 | TLL07415 | pos    | 94793.3   |
| 20240101~20240426 | TLL07029 | 饿了么 | 11486.8   |
| 20240101~20240426 | TLL03864 | pos    | 119806.62 |
| 20240101~20240426 | TLL03864 | 饿了么 | 10468.4   |
| 20240101~20240426 | TLL03680 | 美团   | 0.00E+00  |
| 20240101~20240426 | TLL03680 | pos    | 0.00E+00  |
| 20240101~20240426 | TLL02135 | pos    | 137327.2  |

透视一下即可

| 门店编码 | pos       | 饿了么   | 美团      | 其它 | 小程序  | 总计      |
| -------- | --------- | -------- | --------- | ---- | ------- | --------- |
| TLL00001 | 153089    | 0        | 0         | 0    | 5469    | 158558    |
| TLL00004 | 237490.6  | 0        | 0         | 0    | 9336.4  | 246827    |
| TLL00006 | 270954.45 | 35590.2  | 135377.35 | 0    | 10723.2 | 452645.2  |
| TLL00007 | 53208.4   | 0        | 34377     | 0    | 3287    | 90872.4   |
| TLL00008 | 62936.8   | 9625.49  | 20738.29  | 0    | 2362    | 95662.58  |
| TLL00009 | 291771.44 | 130      | 3741.01   | 0    | 10047   | 305689.45 |
| TLL00010 | 118816.7  | 14058.44 | 16620.8   | 0    | 4561    | 154056.94 |
| TLL00012 | 151120.06 | 12120.97 | 0         | 0    | 7589.5  | 170830.53 |
| TLL00013 | 167357.6  | 0        | 8017      | 0    | 23877   | 199251.6  |
| TLL00014 | 314589.9  | 0        | 0         | 0    | 45652.5 | 360242.4  |
#### 拉取时间段内，制定门店各渠道收银

```sql
WITH variables AS (
    SELECT '20230101' AS start_date, '20230331' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    business_date as 日期,
    stat_shop_id AS 门店编码,
    platform AS 渠道,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额,
    SUM(order_count) AS 订单数
FROM
    ads_dbs_trade_shop_di, variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date 
    AND stat_shop_id IN ('ZYD00049', 'ZYD00047')
GROUP BY
    时段,
    business_date,
    stat_shop_id,
    platform;
```

| 时段              | 门店编码 | 渠道   | 流水金额  | 实收金额  | 订单数 |
| ----------------- | -------- | ------ | --------- | --------- | ------ |
| 20230101~20230331 | ZYD00049 | 小程序 | 40712.26  | 37956.66  | 3428   |
| 20230101~20230331 | ZYD00049 | pos    | 304978.63 | 281157.09 | 25399  |
| 20230101~20230331 | ZYD00047 | 小程序 | 30996.75  | 28722.65  | 2501   |
| 20230101~20230331 | ZYD00049 | 美团   | 139090.5  | 77783.99  | 8242   |
| 20230101~20230331 | ZYD00047 | pos    | 307893.57 | 279008.83 | 23677  |

#### 拉取时间段内，各店各渠道单日收银

渠道表：获取时间段内，各店营业天数、营业额、 营业收入、各渠道流水、实收、单量。

STEP1:

```sql
WITH variables AS (
    SELECT '20230501' AS start_date, '20230517' AS end_date
)
SELECT
    CONCAT(variables.start_date, '~', variables.end_date) AS 时段,
    business_date as 日期,
    stat_shop_id AS 门店编码,
    platform AS 渠道,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额,
    SUM(order_count) AS 订单数

FROM
    ads_dbs_trade_shop_di, variables
WHERE
    business_date BETWEEN variables.start_date AND variables.end_date
GROUP BY
    时段,
    business_date,
    stat_shop_id,
    platform;
```

### 拉取时间段内，各店各月营业额、营业天数

```sql
WITH time_period AS (
    SELECT '20240401' AS start_date,
           '20240801' AS end_date
)
SELECT CONCAT(time_period.start_date, '~', time_period.end_date) AS 时段,
       LEFT(day_table.日期, 6) AS 月份,
       day_table.门店编码,
       SUM(day_table.流水金额) AS 总流水金额,
       SUM(day_table.实收金额) AS 总实收金额,
       SUM(day_table.营业天数) AS 总营业天数
FROM (SELECT business_date AS 日期,
             stat_shop_id AS 门店编码,
             SUM(total_amount) AS 流水金额,
             SUM(pay_amount) AS 实收金额,
             CASE
                 WHEN SUM(total_amount) > 0 THEN 1
                 ELSE 0
             END AS 营业天数
      FROM ads_dbs_trade_shop_di,
           time_period
      WHERE business_date BETWEEN time_period.start_date AND time_period.end_date
      GROUP BY 门店编码,
               business_date) AS day_table,
     time_period
GROUP BY 时段,
         月份,
         门店编码;

```



| 时段              | 月份   | 门店编码 | 总流水金额 | 总实收金额 | 总营业天数 |
| ----------------- | ------ | -------- | ---------- | ---------- | ---------- |
| 20240401~20240801 | 202404 | TLL04377 | 0          | 0          | 0          |
| 20240401~20240801 | 202404 | TLL07350 | 90278.51   | 81455.78   | 30         |
| 20240401~20240801 | 202404 | TLL06877 | 37416.01   | 35573.46   | 30         |
| 20240401~20240801 | 202404 | TLL05338 | 52879.8    | 46362.39   | 30         |
| 20240401~20240801 | 202404 | TLL04202 | 74172.6    | 63688.82   | 30         |
| 20240401~20240801 | 202404 | TLL04338 | 55287.5    | 53347.62   | 25         |
| 20240401~20240801 | 202404 | TLL06025 | 15090.7    | 13439.15   | 30         |
| 20240401~20240801 | 202404 | TLL07017 | 45611.5    | 45385.61   | 28         |
| 20240401~20240801 | 202404 | TLL05293 | 56675.2    | 52295.46   | 30         |
| 20240401~20240801 | 202404 | TLL04608 | 101731.4   | 91850.44   | 30         |



### 拉取指定时间到当前，所有/单个门店报货订单。

```mysql
WITH CombinedOrders AS (
    -- 从实时流处理的当日订单数据中选择订单信息
    SELECT DISTINCT
        businessId AS 客商编码,
        order_no AS 订单编号,
        add_time AS 添加时间,
        order_amount AS 订单金额,
        STATUS AS 订单状态
    FROM
        flink_rps_pt_xc_dt_orders_now_day_df

    UNION ALL

    -- 从离线数据仓库中选择订单信息
    SELECT DISTINCT
        businessId,
        order_no,
        add_time,
        order_amount,
        STATUS
    FROM
        dwd_rps_dt_orders_di
    WHERE
        add_time >= '2024-07-17 00:00:00' -- 筛选在指定日期之后的订单
)

-- 选取CombinedOrders的前10条记录
SELECT
    *
FROM
    CombinedOrders
WHERE
		订单状态 = 3
LIMIT 10;
```



### 拉取指定时间到当前，所有/单个产品报货详表。

```mysql
WITH CombinedOrders AS (
    -- 从实时流处理的当日订单数据中选择订单信息
    SELECT DISTINCT
        businessId AS 客商编码, 
        order_no AS 订单编号, 
        add_time AS 添加时间,  
        status AS 订单状态   
    FROM 
        flink_rps_pt_xc_dt_orders_now_day_df
    
    UNION ALL
    
    -- 从离线数据仓库中选择订单信息
    SELECT DISTINCT
        businessId, 
        order_no, 
        add_time,
        status   
    FROM 
        dwd_rps_dt_orders_di
),

MergedGoods AS (
    -- 从实时流处理的当日订单商品数据中选择商品信息
    SELECT 
		id as 产品序号,
        order_no AS 订单编号,      -- 订单号
        goods_no AS 存货编码,      -- 商品编码
        goods_title AS 存货名称,   -- 商品名称
        quantity AS 数量           -- 数量
        
    FROM 
        flink_rps_pt_xc_dt_order_goods_now_day_df
    
    UNION ALL
    
    -- 从离线数据仓库中选择商品信息
    SELECT DISTINCT
		id,
        order_no, 
        goods_no, 
        goods_title, 
        quantity
    FROM 
        dwd_rps_dt_order_goods_di
),

SummaryTable AS (
    -- 主查询，选择所需字段并进行联接和过滤
    SELECT 
        co.客商编码,  
        co.订单编号, 
        co.添加时间, 
        mg.存货编码, 
        mg.产品序号,
        mg.存货名称,  
        mg.数量, 
        co.订单状态 
    FROM 
        CombinedOrders co          -- 使用CombinedOrders CTE
    LEFT JOIN 
        MergedGoods mg             -- 使用MergedGoods CTE
    ON 
        co.订单编号 = mg.订单编号  -- 基于订单号进行左连接
)

-- 从SummaryTable中选取前10条记录
SELECT * 
FROM SummaryTable
ORDER BY 
    添加时间 DESC                -- 按添加时间升序排序结果
LIMIT 100;
```

查询结果

| 客商编码 | 订单编号       | 添加时间        | 存货编码 | 产品序号 | 存货名称             | 数量 | 订单状态 |
| -------- | -------------- | --------------- | -------- | -------- | -------------------- | ---- | -------- |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 40001004 | 7592383  | 菠萝果酱             | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 60001545 | 7592395  | PE单杯袋-三色        | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 50001350 | 7592389  | 清风茉白（500纸杯）  | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 10000002 | 7592372  | 果汁伴侣             | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 50001493 | 7592391  | 2024版水桶杯         | 2    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 40000045 | 7592379  | 柠檬                 | 5    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 50001021 | 7592385  | 摇摇杯套装           | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 10000018 | 7592374  | 焦糖QQ粉             | 1    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 40001308 | 7592388  | 鲜牛奶乳基底（新）   | 3    | 1        |
| 2009665  | BDD00000517388 | 2024/7/20 14:14 | 30001534 | 7592394  | 茉莉初露（茉莉花茶） | 1    | 1        |

## Excel公式解析

### 计算某家门店，营业前7天（当日未营业则跳过），平均营业额。

表格：

| 门店名称 | 5.1  | 5.2  | 5.3  | 5.4   | 5.5  | 5.6     | 5.7    | 5.8    | 5.3   | 5.10 | 5.11   | 5.12   | 5.13   | 5.14   |
| -------- | ---- | ---- | ---- | ----- | ---- | ------- | ------ | ------ | ----- | ---- | ------ | ------ | ------ | ------ |
| 门店1    | 453  |      |      | 245   |      |         | 2434.5 | 1252   | 1276  | 2674 | 3488.5 | 3326   | 3451.5 | 1833   |
| 门店2    |      | 5800 |      |       |      | 56      | 10     | 10     |       | 147  | 2203   | 2158   | 2789   | 1301   |
| 门店3    |      |      |      | 150   |      | 45.0    |        |        | 544   |      |        | 1547   | 1562   | 1438   |
| 门店4    | 1181 | 860  | 597  | 478.5 | 576  | 784     | 1447   | 579    | 592.5 | 818  | 3480   | 2797.5 | 2193   | 1211   |
| 门店5    |      |      |      |       | 5    |         | 6      |        | 394   |      | 782    | 852    | 699    | 634    |
| 门店6    |      | 456  |      |       | 752  |         | 12     | 7      | 8     | 175  | 5100   | 4019   | 4245   | 1026   |
| 门店7    |      | 4588 |      | 3654  |      | 1320.02 | 1221   | 757    | 905   | 2068 | 3727.5 | 3116   | 2758   | 1739.5 |
| 门店8    |      | 666  |      | 4557  |      | 17.45   |        |        |       | 5427 |        | 888    | 453    |        |
| 门店9    |      |      | 28   | 276   | 440  | 933.01  | 473    | 503    | 458   | 799  | 359    | 648    | 103    | 111    |
| 门店10   |      | 4574 |      |       |      | 7       | 1179   | 1078.5 | 1037  | 1717 | 1502.5 | 1250   | 1036   | 955.5  |

`=AVERAGE(LET(x,C3:CO3,z,FILTER(x,x>0),INDEX(z,SEQUENCE(7))))`

它的本质是：`=AVERAGE(INDEX(FILTER(C3:CO3,C3:CO3>0),SEQUENCE(7)))`



用到的函数：

- `AVERAGE`

  AVERAGE 函数返回一组数据的平均值。

  ```css
  =AVERAGE(number1, [number2], ...)
  =AVERAGE(数字1, [数字2], ...)
  ```

- `LET`

  LET函数 将计算结果分配给名称，可以通过定义的名称来计算结果。

  ```css
  =LET(name1,name_value1,name2,name_value2…..,calculation)
  =LET（变量1，赋值1，变量2，赋值2…..,计算式）
  ```

- `SEQUENCE`

  SEQUENCE函数 用于生成一系列连续的数字，这些数字可以构成等差序列。

  ```css
  =SEQUENCE(rows, [columns], [start], [step])
  =SEQUENCE(行数, [列数，默认1], [起始值，默认1], [步长，默认1])
  ```

- `COLUMNS`

  COLUMNS函数 用于返回一个数组的列数。

  ```
  =COLUMNS(Table)
  =COLUMNS(范围)
  ```

- `FILTER`

  FILTER函数 用于根据指定的条件从一个数组或表格中筛选出符合条件的数据。

  ```css
  =FILTER(array, include, [if_empty])
  =FILTER(筛选范围, 筛选表达式, [如果为空])
  ```

- `INDEX`

  INDEX 函数 返回指定的行与列交叉处的单元格引用。

  ```css
  =INDEX(reference, row_num, [column_num], [area_num])
  =INDEX(引用, 行号, [列号,默认0，所有列], [区域序号，默认1，第一个区域])
  ```

  INDEX 函数 根据指定的行号与列号返回表格或数组中的元素。

  ```css
  =INDEX(array, row_num, [column_num])
  =INDEX(数组, 行号, [列号])
  ```
### 判断一个数在哪个区间的各种方式

| A    | B      | C    | D    | E    | F    | G    |
| ---- | ------ | ---- | ---- | ---- | ---- | ---- |
| 得分 | 等级   |      |      | 姓名 | 得分 | 等级 |
| 0    | 不及格 |      |      | 张三 | 40   |      |
| 60   | 及格   |      |      | 李四 | 60   |      |
| 80   | 良好   |      |      | 王五 | 80   |      |
| 100  | 优秀   |      |      | 刘六 | 90   |      |

- if函数

  ```css
  =IF(F3<60, "不及格", IF(F3<=80, "及格", IF(F3<90, "良好", "优秀")))
  ```

- ifs函数

  ```css
  =IFS(F3<60, "不及格", F3<=80, "及格", F3<90, "良好", TRUE(), "优秀")
  ```

- lookup函数

  ```css
  =LOOKUP(F3,{0,"不及格";60,"及格";80,"良好";90,"优秀"})
  ```

  ```css
  =LOOKUP(F3, A$3:A$6, B$3:B$6)
  ```
  
  lookup是向量形式，得分列必须是递增形式。

- xlookup函数

  ```css
  =XLOOKUP(F3, A$3:A$6, B$3:B$6,,-1)
  ```

  xlookup对得分列并无特殊要求。


- vlookup函数

  ```css
  =VLOOKUP(A2, B$2:C$5, 2, 1)
  ```

  vlookup函数过时了，近似匹配指的是返回小于或等于查找值的最大元素。

- INDEX+MATCH

  ```css
  =INDEX($B$3:$B$6, MATCH(F3, A$3:A$6, 1))
  ```

  MATCH寻找的也是小于等于F3的最大元素（位置）

# 美团收银系统

当前收银系统为美团管家，https://pos.meituan.com/  。

# 哗啦啦收银系统

2023年及以前，收银系统为[https://passport.hualala.com](https://passport.hualala.com/login?redirectURL=http%3A%2F%2Fshop.hualala.com)

# 自动化脚本

https://data.jello.top/tianlala_script_url









# 其它

- [甜啦啦蚌埠地区直营店分布](http://tll.bizha.top/tll_zhiyin.html)

# TODO

- [x] 新品报货 脚本制作

- [x] 单品报货 脚本制作
- [x] 单品销售统计 脚本制作
- [x] 套餐菜品名称还原 脚本制作
- [x] 中台mysql使用示例
- [ ] 报表格式规则 编写

