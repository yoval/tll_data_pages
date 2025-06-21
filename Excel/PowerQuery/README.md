# POWER QUERY

---

 - **常用源**

- 连接 [monthly_stores_sales](/data-query/common-query/monthly_stores_sales)表。

 `ODBC (driver={SQLite3 ODBC Driver};database=C:\Users\Administrator\OneDrive\Database\product_sales.db;dsn=SQLite3 Datasource)`

 - 连接 门店管理表 。

 `ODBC (odbc (driver=SQLite3 ODBC Driver;database=C:\Users\Administrator\OneDrive\database\mendian_info.db;dsn=SQLite3 Datasource SELECT "门店编号","门店名称","大区经理" as 省区经理,"省区经理" as 区域经理,"区域经理" as 督导,"南北战区" as 战区,"运营状态","收银机ID","省","市","区"
FROM "current")`

- 连接 [multi_period_channel_summary](/data-query/common-query/multi_period_channel_summary)表。

`ODBC (odbc (driver=SQLite3 ODBC Driver;database=C:\Users\Administrator\OneDrive\database\multi_period_channel_summary.db;dsn=SQLite3 Datasource)`

