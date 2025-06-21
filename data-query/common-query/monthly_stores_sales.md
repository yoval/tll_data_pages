# 门店各产品月度销售汇总

---

月度汇总，产品维度。

```sql
WITH period_table AS (
    -- 定义两个查询时间段
    SELECT '20250501' AS start_date, '20250531' AS end_date 
    UNION ALL
    SELECT '20240501' AS start_date, '20240531' AS end_date 
)
SELECT 
    CONCAT(p.start_date, '~', p.end_date) AS 查询时段,
    LEFT(t.business_date, 6) AS 月份,
    t.stat_shop_id AS 门店编号,
    t.item_name AS 产品名称,
    SUM(t.dp_item_count) AS 销量,
    SUM(t.dp_total_amount) AS 流水
FROM 
    ads_dbs_trade_food_di t
CROSS JOIN 
    period_table p
WHERE 
    t.business_date BETWEEN p.start_date AND p.end_date
GROUP BY 
        CONCAT(p.start_date, '~', p.end_date),
    LEFT(t.business_date, 6),
    t.stat_shop_id,
    t.item_name
HAVING 
    SUM(t.dp_item_count) > 0;
```