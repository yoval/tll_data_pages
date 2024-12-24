## 中台`tll_bi_dw`
### 数据库说明

中台采用的是Mysql 数据库，版本`5.7.99`，数据库名`tll_bi_dw`。

表说明在 见 `doris表`。


```sql
SELECT VERSION();
>>VERSION() 5.7.99
```

查看数据类型

```sql
DESCRIBE dwd_rps_dt_presale_order_df;
```

-  报货中的订单状态：

| 1    | 待支付             |
| ---- | ------------------ |
| 2    | 已取消（支付超时） |
| 3    | 待确认             |
| 5    | 已取消（驳回）     |
| 6    | 待确认（部分取消） |
| 7    | 备货中             |
| 8    | 配送中             |
| 9    | 已完成（确认收货） |
| 10   | 待递交             |
| 11   | 待推送             |
| 13   | 备货中（部分取消） |

通常限制语序写

```sql
order_status >=3 and order_status != 5
```


```sql
select sqlite
```

## `mendian_info` 数据库

记录每个工作日的“门店管理表”信息，自增字段为“更新日期”，即插入数据库日期。

###  `info` 表字段
| 字段                              | 类型 | 示例                                             |
| --------------------------------- | ---- | ------------------------------------------------ |
| $                                 | TEXT | 2153176725093174174                              |
| 门店编号                          | TEXT | TLL09063                                         |
| 门店详细地址                      | TEXT | 云南大理州大理市凤仪镇凤仪庄园S8-101室           |
| 法人                              | TEXT | 刘文军                                           |
| 法人电话                          | TEXT | 136587                                           |
| 门店名称                          | TEXT | 云南省大理白族自治州大理市凤仪镇凤仪庄园S8-101室 |
| 门店简称                          | TEXT | 云南省大理白族自治州大理市凤仪镇凤仪庄园S8-101室 |
| 门店类型                          | TEXT | 加盟店                                           |
| 区域经理                          | TEXT | 周文君                                           |
| 省经理                            | TEXT | 周文君                                           |
| 大区经理                          | TEXT | 赵磊                                             |
| 南北战区                          | TEXT |                                                  |
| 运营状态                          | TEXT | 签约                                             |
| 开业日期                          | TEXT |                                                  |
| 收银机ID                          | TEXT |                                                  |
| 收货地址省                        | TEXT | 云南                                             |
| 收货地址市                        | TEXT | 大理州                                           |
| 收货地址区                        | TEXT | 大理市                                           |
| 收货地址                          | TEXT | 凤仪镇凤仪庄园S8-101室                           |
| 收货人                            | TEXT | 刘文军                                           |
| 收货人联系方式                    | TEXT | 136                                              |
| 省                                | TEXT | 云南                                             |
| 市                                | TEXT | 大理州                                           |
| 区                                | TEXT | 大理市                                           |
| U8C客商编码                       | TEXT |                                                  |
| 门头类型                          | TEXT | 无                                               |
| 门头尺寸                          | TEXT |                                                  |
| 吧台尺寸                          | TEXT |                                                  |
| 需要封口机贴                      | TEXT |                                                  |
| 需要二门头横幅                    | TEXT |                                                  |
| 需要大展架展画                    | TEXT |                                                  |
| 发货仓库                          | TEXT |                                                  |
| 是否提价                          | TEXT |                                                  |
| 是否为学校店铺                    | TEXT | 否                                               |
| 是否补贴                          | TEXT | 否                                               |
| 补贴                              | TEXT |                                                  |
| 报货负责人                        | TEXT |                                                  |
| 地毯尺寸                          | TEXT |                                                  |
| 抖音名称                          | TEXT |                                                  |
| 抖音账号                          | TEXT |                                                  |
| 美团团购ID                        | TEXT |                                                  |
| 登记日期                          | TEXT | 2024-09-07                                       |
| 是否上传营业执照                  | TEXT |                                                  |
| 是否上传食品经营许可证            | TEXT |                                                  |
| 是否上传营业执照法人身份证正面    | TEXT |                                                  |
| 是否上传营业执照法人身份证反面    | TEXT |                                                  |
| 最近一次巡店时间                  | TEXT |                                                  |
| 门帘是否为标准尺寸                | TEXT |                                                  |
| 是否有收银机                      | TEXT | 有                                               |
| 货物补贴状态                      | TEXT |                                                  |
| 是否已解约退款                    | TEXT |                                                  |
| 门店预售推广费是否已收取          | TEXT | 否                                               |
| 营业执照法人姓名                  | TEXT |                                                  |
| 营业执照名称                      | TEXT |                                                  |
| 营业执照地址                      | TEXT |                                                  |
| 营业执照法人对公_法人实名银行卡号 | TEXT |                                                  |
| 营业执照法人在银行预留手机号      | TEXT |                                                  |
| 开户支行                          | TEXT |                                                  |
| 开户行                            | TEXT |                                                  |
| 所属城市等级                      | TEXT |                                                  |
| 所属行政区划                      | TEXT |                                                  |
| 所属商圈                          | TEXT |                                                  |
| 商圈等级                          | TEXT |                                                  |
| 店铺营业额等级                    | TEXT | C                                                |
| 证件信息缺少原因                  | TEXT |                                                  |
| 注册快手的手机号                  | TEXT |                                                  |
| 物流公司名称                      | TEXT |                                                  |
| 抖音唯一POI                       | TEXT |                                                  |
| 快手唯一POI                       | TEXT |                                                  |
| 房租                              | TEXT |                                                  |
| 是否做团购                        | TEXT |                                                  |
| 门店营业时间                      | TEXT |                                                  |
| 是否上传门头照                    | TEXT |                                                  |
| 抖音授权手机号                    | TEXT |                                                  |
| 快手号ID                          | TEXT |                                                  |
| 持卡人姓名                        | TEXT |                                                  |
| 老店复签                          | TEXT | 否                                               |
| 创建人                            | TEXT | 钱立鹏                                           |
| 创建时间                          | TEXT | 2024-09-07 14:27                                 |
| 修改时间                          | TEXT | 2024-09-07 16:18                                 |
| SAP客户编码                       | TEXT | 0008008539                                       |
| 报货折扣                          | TEXT | 100                                              |
| 是否报货折扣                      | TEXT | 否                                               |
| 登记人                            | TEXT | 钱立鹏(9723394078621786907)                      |
| 更新日期                          | TEXT | 2024/09/09                                       |
| 备注                              | TEXT |                                                  |

### 使用

#### 查询当日门店管理表

```sql
SELECT * FROM info
WHERE "更新日期" = '2024/09/09'
```

#### 查询当月全量门店管理表

```sql
SELECT *
FROM (
		SELECT *,
					 ROW_NUMBER() OVER (PARTITION BY "门店编号" ORDER BY "更新日期" DESC) AS rn
		FROM info
		WHERE "更新日期" LIKE '2024/09/%'
) t
WHERE rn = 1;
```

#### 查询记录的所有门店管理表

```sql
SELECT *
FROM (
		SELECT *,
					 ROW_NUMBER() OVER (PARTITION BY "门店编号" ORDER BY "更新日期" DESC) AS rn
		FROM info
) t
WHERE rn = 1;
```

### 维护

放到了`自动化脚本库`中，通常不用特地维护，维护代码是：

```python
# 插入门店数据库数据
def update_db_with_file(file, formatted_date = None,db_path=r"C:\Users\Administrator\OneDrive\数据库\mendian_info.db"):
    """
    更新数据库中的表info，如果表中不存在当前日期的数据则追加文件中数据表的数据。
    
    :param file: 包含要更新数据的Excel文件路径
    :param db_path: SQLite数据库的路径
    """
    if formatted_date is None:
        now = datetime.datetime.now()
        formatted_date = now.strftime("%Y/%m/%d")
    
    with sqlite3.connect(db_path) as conn:
        # 查询表info中的最大更新日期
        sql = 'SELECT MAX("更新日期") FROM info'
        result = pd.read_sql_query(sql, conn)
        max_date = result.iloc[0, 0]
        
        # 如果数据库中的最大更新日期与当前日期不同
        if max_date != formatted_date:
            # 从Excel文件中读取数据
            df = pd.read_excel(file, header=1, dtype=str, sheet_name='门店信息表')
            df = df.drop(columns=['是否属于代理区域','代理商编码','代理商姓名','代理返点比例','代理级别','收货人备用联系方式'])
            # 添加更新日期和备注列
            df['更新日期'] = formatted_date
            df['备注'] = None
            
            # 将数据写入SQLite数据库的info表中
            df.to_sql(name='info', con=conn, if_exists='append', index=False)
```



有时候有门店各级经理可能是空白，需要手动修改

```sql
SELECT "门店编号","大区经理","省经理",区域经理,"运营状态" ,"更新日期","收银机ID" ,"U8C客商编码"
FROM "info"
WHERE "门店编号" = 'TLL06946'
ORDER BY "更新日期"

```



## daily_sales 数据库

查询每个门店的单日销售情况

### `detailed` 表字段
`detailed`表字段如下

| 字段     | 类型 | 示例       |
| -------- | ---- | ---------- |
| 日期     | TEXT | 2024-09-28 |
| 门店编码 | TEXT | TLL06639   |
| 店铺名称 | TEXT |            |
| 收银机ID | TEXT |            |
| 渠道     | TEXT | 小程序     |
| 流水金额 | TEXT | 88.0       |
| 实收金额 | TEXT | 86.0       |
| 订单数   | TEXT | 8          |
| 备注     | TEXT |            |

### 使用

#### 查询2022年各店营业额及营业天数。

```sql
-- 创建一个名为 day_table 的临时表，用于汇总每日的流水金额和实收金额，并标记营业天数
WITH day_table AS (
    -- 选择门店编码、日期、流水金额、实收金额等字段，并进行必要的计算
    SELECT
        门店编码,   -- 选择门店编码字段
        日期,      -- 选择日期字段
        SUM(COALESCE(流水金额, 0)) AS 流水金额,       -- 计算总流水金额，并将 NULL 值替换为 0
        SUM(COALESCE(实收金额, 0)) AS 实收金额,       -- 计算总实收金额，并将 NULL 值替换为 0
        CASE 
            WHEN SUM(COALESCE(流水金额, 0)) > 0 THEN 1  -- 如果流水金额大于 0，则标记为营业天数
            ELSE 0                                        -- 否则标记为非营业天数
        END AS 营业天数 
    FROM 
        detailed  -- 从 detailed 表中获取数据
    WHERE 
        -- 使用 STRFTIME 函数将日期格式转换为 YYYYMMDD，并与给定的日期范围进行比较
        SUBSTR(日期, 1, 4) IN ('2022', '2023', '2024')
    GROUP BY 
        门店编码,  -- 按门店编码分组
        日期      -- 按日期分组
)
-- 从 day_table 筛选数据
SELECT
    门店编码,         
    strftime( '%Y-%m', "日期" ) AS "月份", 
    SUM(流水金额) AS 流水金额,
    SUM(实收金额) AS 实收金额,
    SUM(营业天数) AS 营业天数 

FROM day_table

GROUP BY
    月份,
    门店编码;
```

可以还详细一些

```sql
-- 创建一个名为 day_table 的临时表，用于汇总每日的流水金额和实收金额，并标记营业天数
WITH day_table AS (
    -- 选择门店编码、日期、流水金额、实收金额等字段，并进行必要的计算
    SELECT
        门店编码,   -- 选择门店编码字段
        日期,      -- 选择日期字段
        SUM(COALESCE(流水金额, 0)) AS 流水金额,       -- 计算总流水金额，并将 NULL 值替换为 0
        SUM(COALESCE(实收金额, 0)) AS 实收金额,       -- 计算总实收金额，并将 NULL 值替换为 0
				SUM(CASE WHEN 渠道 = 'pos' THEN 流水金额 ELSE 0 END) AS pos流水,
				SUM(CASE WHEN 渠道 = '外卖' THEN 流水金额 ELSE 0 END) AS 外卖流水,
				SUM(CASE WHEN 渠道 = '美团' THEN 流水金额 ELSE 0 END) AS 美团流水,
				SUM(CASE WHEN 渠道 = '饿了么' THEN 流水金额 ELSE 0 END) AS 饿了么流水,
				SUM(CASE WHEN 渠道 = '其它' THEN 流水金额 ELSE 0 END) AS 其它流水,
				SUM(CASE WHEN 渠道 = '小程序' THEN 流水金额 ELSE 0 END) AS 小程序流水,
        CASE 
            WHEN SUM(COALESCE(流水金额, 0)) > 0 THEN 1  -- 如果流水金额大于 0，则标记为营业天数
            ELSE 0                                        -- 否则标记为非营业天数
        END AS 营业天数 
    FROM 
        detailed  -- 从 detailed 表中获取数据
    WHERE 
        -- 使用 STRFTIME 函数将日期格式转换为 YYYYMMDD，并与给定的日期范围进行比较
        SUBSTR(日期, 1, 4) IN ('2022', '2023', '2024')
    GROUP BY 
        门店编码,  -- 按门店编码分组
        日期      -- 按日期分组
)
-- 从 day_table 筛选数据
SELECT
    门店编码,         
    strftime( '%Y-%m', "日期" ) AS "月份", 
    SUM(流水金额) AS 流水金额,
		sum(pos流水) as pos流水,
		sum(外卖流水) as 外卖流水,
		sum(小程序流水) as 小程序流水,
    SUM(实收金额) AS 实收金额,
    SUM(营业天数) AS 营业天数 

FROM day_table

GROUP BY
    月份,
    门店编码;

```



将美团、饿了么也聚合到外卖里（历史数据没分美团、饿了么）

```sql
WITH day_table AS (
    -- 选择门店编码、日期、流水金额、实收金额等字段，并进行必要的计算
    SELECT
        门店编码,   -- 选择门店编码字段
        日期,      -- 选择日期字段
        SUM(COALESCE(流水金额, 0)) AS 流水金额,       -- 计算总流水金额，并将 NULL 值替换为 0
        SUM(COALESCE(实收金额, 0)) AS 实收金额,       -- 计算总实收金额，并将 NULL 值替换为 0
        SUM(CASE WHEN 渠道 = 'pos' THEN 流水金额 ELSE 0 END) AS pos流水,
        -- 计算所有属于外卖类别的流水金额
        SUM(
            CASE WHEN 渠道 IN ('外卖', '美团', '饿了么', '其它') THEN 流水金额 ELSE 0 END
        ) AS 外卖流水,
        SUM(CASE WHEN 渠道 = '小程序' THEN 流水金额 ELSE 0 END) AS 小程序流水,
        CASE 
            WHEN SUM(COALESCE(流水金额, 0)) > 0 THEN 1  -- 如果流水金额大于 0，则标记为营业天数
            ELSE 0                                        -- 否则标记为非营业天数
        END AS 营业天数 
    FROM 
        detailed  -- 从 detailed 表中获取数据
    WHERE 
        -- 使用 SUBSTR 函数提取年份，并与给定的年份列表进行比较
        SUBSTR(日期, 1, 4) IN ('2022', '2023', '2024')
    GROUP BY 
        门店编码,  -- 按门店编码分组
        日期      -- 按日期分组
)
-- 从 day_table 中选择前 10 条记录
SELECT * FROM day_table
LIMIT 10;
```



#### 查询门店上次收银日期及金额

```sql
WITH DailySummary AS (
    SELECT "门店编码", "日期", SUM("流水金额") AS 总流水金额
    FROM "detailed"
    GROUP BY "门店编码", "日期"
),
LastPositiveFlow AS (
    SELECT "门店编码", "日期", 总流水金额,
           ROW_NUMBER() OVER (PARTITION BY "门店编码" ORDER BY "日期" DESC) AS rn
    FROM DailySummary
    WHERE 总流水金额 > 0
)
SELECT "门店编码", "日期" AS 上次流水大于0日期, 总流水金额 AS 上次总流水
FROM LastPositiveFlow
WHERE rn = 1;
```



### 维护

2024年前数据备份自哗啦啦，之后数据来着中台。

因中台数据会刷新前10日数据，为与中台数据保持一致，同样采用此种策略。

1、删除前10日数据

```sql
DELETE FROM detailed 
WHERE 日期 > (SELECT DATE(MAX(日期), '-10 days') 
              FROM detailed);
```

2、更新数据

```sql
UPDATE "detailed"
SET "流水金额" = 212.5, "实收金额" = 212.5,"备注" = '@芮翔 提交17000 pos刷单'
WHERE "门店编码" = 'TLL06671'
AND 日期 = '2023-11-07'
AND 渠道 = 'pos';
```



3、中台查询至今数据

```sql
SELECT
    business_date as 日期,
    stat_shop_id AS 门店编码,
    platform AS 渠道,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额,
    SUM(order_count) AS 订单数
FROM
    ads_dbs_trade_shop_di
WHERE
    business_date > 20240917
GROUP BY
    business_date,
    stat_shop_id,
    platform;
ORDER BY 日期 
```

4、同步数据至备份表

```python
import pandas as pd
import sqlite3

conn = sqlite3.connect(r"C:\Users\Administrator\OneDrive\数据库\daily_sales.sqlite")
file = r"C:\Users\Administrator\Desktop\单日各店各渠道.csv"
df = pd.read_csv(file)
df['日期'] = pd.to_datetime(df['日期'], format='%Y%m%d').dt.strftime('%Y-%m-%d')
df = df.loc[:,['日期','门店编码','渠道','流水金额','实收金额','订单数']]
df.to_sql(name='detailed', con=conn, if_exists='append', index=False)
```

## report_detailed_order 数据库

报货详表
### `detailed` 表字段

### 使用

#### 查询各店各月报货

```sql
SELECT
	"客商编码",
	strftime( '%Y-%m', "单据日期" ) AS "月份",
	sum( "价税合计" ) / 0.8 AS 报货金额 
FROM
	"detailed" 
GROUP BY
	客商编码,月份
```

#### 查询上次报货日期

```sql
SELECT 客商编码, MAX(单据日期) AS 最大日期
FROM detailed
GROUP BY 客商编码;
```

#### 查询各店近两月咖啡液的报货情况

```sql
SELECT 单据日期 , 存货名称, 客商编码 , sum("数量") as 数量 
FROM "detailed"
WHERE "单据日期" > '2024-08-27'
and 存货名称 like '%咖啡液%'
GROUP BY 单据日期 , 存货名称, 客商编码
ORDER BY "单据日期" DESC


```



### 维护

2021.10.08~2024.08.28 使用的是u8c报货系统，后面转成了自建系统。

查询更新日期

```sql
SELECT * FROM "detailed"
ORDER BY "单据日期" DESC
LIMIT 10
```

