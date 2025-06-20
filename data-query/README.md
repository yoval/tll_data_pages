# 数据查询说明

---

因有大量数据查询需求，查询时推荐使用时段查询，以避免数据混淆。

```sql
WITH period_table AS (
    SELECT '20240101' AS start_date, '20240229' AS end_date UNION ALL
    SELECT '20250101' AS start_date, '20250229' AS end_date 
)
```

有时需要对接`python`脚本，常用字段需要标准化：

```sql
WITH day_periods AS (
    SELECT '20230901' AS start_date, '20230910' AS end_date
)
SELECT
    CONCAT(day_periods.start_date, '~', day_periods.end_date) AS 时段,
    business_date as 日期,
    stat_shop_id AS 门店编号,
    platform AS 渠道,
    SUM(total_amount) AS 流水金额,
    SUM(pay_amount) AS 实收金额,
    SUM(order_count) AS 订单数
FROM
    ads_dbs_trade_shop_di, day_periods
WHERE
    business_date BETWEEN day_periods.start_date AND day_periods.end_date
GROUP BY
    时段,
    business_date,
    stat_shop_id,
    platform;
```