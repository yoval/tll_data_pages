### 中台`tll_bi_dw`

中台采用的是Mysql 数据库，版本`5.7.99`，数据库名`tll_bi_dw`。

```mysql
SELECT VERSION();
>>VERSION() 5.7.99
```

查看数据类型

```mysql
DESCRIBE dwd_rps_dt_presale_order_df;
```



#### 报货中的订单状态：

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

```mysql
order_status >=3 and order_status != 5
```

