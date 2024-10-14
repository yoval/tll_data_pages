### 拉取时间段内，各店单日营业额、营业天数

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



### 拉取时间段内，各店单月营业额、营业天数

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

### 查询指定产品制定渠道的销量

```mysql
SELECT
	stat_shop_id AS 门店编号,
	platform AS 渠道,
	item_name AS 产品,
	dp_item_count AS 销量 
FROM
	ads_dbs_trade_food_di 
WHERE
	business_date BETWEEN 20241001 
	AND 20241007 
	AND item_name IN ( '清风茉白鲜奶茶', '月桂天香鲜奶茶', '黑糖珍珠奶茶', '红豆奶茶', '芋圆啵啵奶茶', '生椰拿铁' ) 
	AND platform IN (
	'小程序')
```

查询结果

| 门店编号 | 渠道   | 产品           | 销量 |
| -------- | ------ | -------------- | ---- |
| TLL08077 | 小程序 | 清风茉白鲜奶茶 | 0    |
| TLL03000 | 小程序 | 芋圆啵啵奶茶   | 0    |
| TLL05836 | 小程序 | 月桂天香鲜奶茶 | 0    |
| TLL07282 | 小程序 | 芋圆啵啵奶茶   | 0    |
| TLL02878 | 小程序 | 红豆奶茶       | 0    |
| TLL07985 | 小程序 | 清风茉白鲜奶茶 | 1    |
| TLL07981 | 小程序 | 清风茉白鲜奶茶 | 1    |
| TLL04268 | 小程序 | 清风茉白鲜奶茶 | 0    |
| TLL07720 | 小程序 | 清风茉白鲜奶茶 | 0    |
| TLL01140 | 小程序 | 清风茉白鲜奶茶 | 1    |

### 查询各店各日各渠道营业额

```mysql
WITH variables AS (
    SELECT '20230901' AS start_date, '20230930' AS end_date
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
    AND stat_shop_id IN ('TLL03603')
GROUP BY
    时段,
    business_date,
    stat_shop_id,
    platform;

```



查询结果

| 时段              | 日期     | 门店编码 | 渠道 | 流水金额 | 实收金额 | 订单数 |
| ----------------- | -------- | -------- | ---- | -------- | -------- | ------ |
| 20230901~20230930 | 20230930 | TLL03603 | pos  | 387      | 387      | 32     |
| 20230901~20230930 | 20230910 | TLL03603 | 美团 | 64       | 27.76    | 2      |
| 20230901~20230930 | 20230926 | TLL03603 | 美团 | 24       | 15.72    | 1      |
| 20230901~20230930 | 20230919 | TLL03603 | pos  | 121      | 98       | 8      |
| 20230901~20230930 | 20230919 | TLL03603 | 美团 | 167      | 82.34    | 6      |
| 20230901~20230930 | 20230911 | TLL03603 | 美团 | 20       | 11.84    | 1      |
| 20230901~20230930 | 20230913 | TLL03603 | pos  | 308      | 301      | 26     |
| 20230901~20230930 | 20230927 | TLL03603 | 美团 | 36       | 18.43    | 1      |
| 20230901~20230930 | 20230912 | TLL03603 | 美团 | 136      | 63.98    | 5      |
| 20230901~20230930 | 20230922 | TLL03603 | pos  | 242      | 240      | 26     |



### 多时段营业额查询

```mysql
WITH time_periods AS (
		SELECT '20230929' AS start_date, '20230930' AS end_date UNION ALL
		SELECT '20240929' AS start_date, '20240930' AS end_date

)
SELECT
    CONCAT(time_periods.start_date, '~', time_periods.end_date) AS 时段,
    stat_shop_id AS 门店编号,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额
FROM
    ads_dbs_trade_shop_di,
    time_periods
WHERE
    business_date BETWEEN time_periods.start_date AND time_periods.end_date
GROUP BY
    时段,
    门店编号;
```



### 多时段销量查询

```mysql
WITH time_periods AS (
		SELECT '20240920' AS start_date, '20240922' AS end_date UNION ALL
		SELECT '20240927' AS start_date, '20240929' AS end_date UNION ALL
		SELECT '20241004' AS start_date, '20241006' AS end_date

)
SELECT
    CONCAT(time_periods.start_date, '~', time_periods.end_date) AS 时段,
    stat_shop_id AS 门店编号,
    SUM(dp_item_count) AS 销量
FROM
    ads_dbs_trade_food_di,
    time_periods
WHERE
    business_date BETWEEN time_periods.start_date AND time_periods.end_date
		-- and item_name like "%清风%"	
GROUP BY
    时段,
    门店编号;
```



### 专题：基础物料上次报货时间查询



`483962582525415424`，黄柠檬-15kg/箱

`483962582512832512`，鲜橙-15kg/箱

`483962582638661632`，调味糖浆-6kg*4瓶/箱

`483962582672216064`，调味糖浆-4kg*6瓶/箱

`483962584903585792`，PLA粗吸管-2000支/件

`483962584911974400`，PLA细吸管-3000支/件



```mysql
-- 创建一个包含订单信息的临时表
WITH OrderTable AS (
    SELECT DISTINCT  
        order_num AS 订单编号,
                id AS 订单ID,
        order_status AS 订单状态,
        order_time AS 订单时间,
        store_code AS 客商编码
    FROM flink_rps_all_new_tll_order_now_day_df
),

-- 创建一个包含订单详情信息的临时表
DetailsTable AS (
    SELECT DISTINCT 
        product_id AS 产品编号,
				sku_code as 存货编码,
        product_info AS 存货名称,
        quantity AS 数量,
        product_specification AS 存货规格,
        order_id AS 订单ID,
        status AS 详单状态
    FROM flink_rps_all_new_tll_order_details_now_day_df
),

-- 创建一个汇总表，用于展示订单和对应的详情信息
SummaryTable AS (
    -- 主查询，选择所需字段并进行联接
    SELECT 
        ot.客商编码,  
        ot.订单编号, 
        ot.订单时间, 
        dt.存货编码,
				dt.产品编号,
        dt.存货名称,  
        dt.数量, 
        ot.订单状态 
    FROM 
        OrderTable ot      
    LEFT JOIN 
        DetailsTable dt     
    ON 
        ot.订单ID = dt.订单ID 
)


SELECT *
FROM (
    SELECT *,
           RANK() OVER (PARTITION BY 客商编码, 产品编号 ORDER BY 订单时间 DESC) AS rn
    FROM SummaryTable
    WHERE 产品编号 IN (483962582525415424, 483962582512832512, 483962582638661632, 483962582672216064, 483962584903585792, 483962584911974400)
      AND 订单状态 >= 3
      AND 订单状态 != 5
) subquery
WHERE rn = 1;
```

查询结果

| 客商编码 | 订单编号       | 订单时间            | 产品编号           | 存货名称            | 数量 | 订单状态 | rn   |
| -------- | -------------- | ------------------- | ------------------ | ------------------- | ---- | -------- | ---- |
| TLL00001 | DH100976614894 | 2024-10-09 10:27:45 | 483962582638661632 | 调味糖浆-6kg*4瓶/箱 | 3    | 8        | 1    |
| TLL00004 | DH100835699918 | 2024-10-08 15:25:16 | 483962582638661632 | 调味糖浆-6kg*4瓶/箱 | 2    | 8        | 1    |
| TLL00004 | DH100835699918 | 2024-10-08 15:25:16 | 483962584903585792 | PLA粗吸管-2000支/件 | 1    | 8        | 1    |
| TLL00009 | DH100927655134 | 2024-10-09 18:53:23 | 483962582638661632 | 调味糖浆-6kg*4瓶/箱 | 6    | 8        | 1    |
| TLL00009 | DH100927655134 | 2024-10-09 18:53:23 | 483962584903585792 | PLA粗吸管-2000支/件 | 1    | 8        | 1    |
| TLL00014 | DH100984048183 | 2024-10-09 18:30:56 | 483962582638661632 | 调味糖浆-6kg*4瓶/箱 | 5    | 8        | 1    |
| TLL00032 | DH101457535601 | 2024-10-14 09:39:41 | 483962582525415424 | 黄柠檬-15kg/箱      | 1    | 7        | 1    |
| TLL00041 | DH100876366547 | 2024-10-08 16:18:51 | 483962582525415424 | 黄柠檬-15kg/箱      | 2    | 8        | 1    |
| TLL00044 | DH101271222904 | 2024-10-12 14:17:06 | 483962584903585792 | PLA粗吸管-2000支/件 | 1    | 8        | 1    |
| TLL00044 | DH101271222904 | 2024-10-12 14:17:06 | 483962584911974400 | PLA细吸管-3000支/件 | 1    | 8        | 1    |









### 专题：查询柿子的报货情况

```mysql
-- 创建一个包含订单信息的临时表
WITH OrderTable AS (
    SELECT DISTINCT  
        order_num AS 订单编号,
				id as 订单ID,
        order_status AS 订单状态,
        order_time AS 订单时间,
        store_code AS 客商编码
    FROM flink_rps_all_new_tll_order_now_day_df
),

-- 创建一个包含订单详情信息的临时表
DetailsTable AS (
    SELECT DISTINCT 
        product_id AS 存货编码,
        product_info AS 存货名称,
        quantity AS 数量,
        product_specification AS 存货规格,
        order_id AS 订单ID,
        product_id AS 产品编号,
        status AS 详单状态
    FROM flink_rps_all_new_tll_order_details_now_day_df
),

-- 创建一个汇总表，用于展示订单和对应的详情信息
SummaryTable AS (
    -- 主查询，选择所需字段并进行联接
    SELECT 
        ot.客商编码,  
        ot.订单编号, 
        ot.订单时间, 
        dt.存货编码, 
        dt.存货名称,  
        dt.数量, 
        ot.订单状态 
    FROM 
        OrderTable ot      
    LEFT JOIN 
        DetailsTable dt     
    ON 
        ot.订单ID = dt.订单ID 
)

-- 最终查询汇总表中的前10条记录
SELECT * FROM SummaryTable
-- WHERE (存货名称 like '%柿%' or 存货名称 like '%650模内贴注塑杯(橙)%')
WHERE 存货编码 in (483962585633394688,483962582504443904,493311209832058880,483962585461428224,493299043015987200,483962585625006080,493302159912341504)
and 订单状态 >=3 and 订单状态 !=5
-- LIMIT 10;
```



### 专题：查询预售情况

```mysql
-- 创建一个包含订单信息的临时表
WITH OrderTable AS (
    SELECT DISTINCT  
        presale_order_num AS 预售单号,
				activity_id as 预售ID,
        order_time AS 订单时间,
        store_code AS 门店编号
    FROM ods_rps_tll_presale_order_df
),

DetailsTable AS (
    SELECT DISTINCT 
        presale_order_num AS 预售单号,
        product_info AS 产品名称,
        quantity AS 数量
    FROM ods_rps_tll_presale_order_details_df
),
SummaryTable AS (
    -- 主查询，选择所需字段并进行联接
    SELECT 
        ot.门店编号,  
        ot.预售单号, 
        ot.订单时间, 
        ot.预售ID, 
        dt.产品名称,  
        dt.数量
    FROM 
        OrderTable ot      
    LEFT JOIN 
        DetailsTable dt     
    ON 
        ot.预售单号 = dt.预售单号 
)

SELECT * FROM SummaryTable
WHERE 预售ID in ('1840337065095979010')
ORDER BY 订单时间 DESC
```

或者

```mysql
-- 创建一个包含订单信息的临时表
WITH OrderTable AS (
    SELECT DISTINCT  
        presale_order_num AS 预售单号,
				activity_id as 预售ID,
        order_time AS 订单时间,
        store_code AS 门店编号
    FROM flink_rps_tll_presale_order_df
),

DetailsTable AS (
    SELECT DISTINCT 
        presale_order_num AS 预售单号,
        product_info AS 产品名称,
        quantity AS 数量
    FROM flink_rps_tll_presale_order_details_df
),
SummaryTable AS (
    -- 主查询，选择所需字段并进行联接
    SELECT 
        ot.门店编号,  
        ot.预售单号, 
        ot.订单时间, 
        ot.预售ID, 
        dt.产品名称,  
        dt.数量
    FROM 
        OrderTable ot      
    LEFT JOIN 
        DetailsTable dt     
    ON 
        ot.预售单号 = dt.预售单号 
)

SELECT * FROM SummaryTable
WHERE 预售ID in ('1840337065095979010')
ORDER BY 订单时间 DESC
```

