# `flink_rps_tll_presale_order_df`

---

- 预售订单，T+1更新模式。


| 字段               | 类型          | 说明       | 示例                                           |
| ------------------ | ------------- | ---------- | ---------------------------------------------- |
| id                 | BIGINT        | id         | 1844197604223537154                            |
| activity_id        | BIGINT        | 活动ID     | 1840337065095979010                            |
| presale_order_num  | VARCHAR(255)  | 预售订单号 | YS101050605059                                 |
| order_time         | VARCHAR(255)  | 订单时间   | 2024-10-10 10:05:47                            |
| actual_amount      | DECIMAL(10,2) | 实际金额   | 1182                                           |
| store_id           | BIGINT        | 门店ID     | 51                                             |
| store_code         | VARCHAR(255)  | 门店编号   | TLL06545                                       |
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
| create_time        | VARCHAR(255)  | 创建时间   | 2024-10-10 10:05:47                            |
| modify_user_id     | BIGINT        |            | 0                                              |
| updater            | VARCHAR(255)  |            | 0                                              |
| modify_time        | VARCHAR(255)  | 修改时间   | 0                                              |
| delete_flag        | INT           |            | 0                                              |
| audit_data_version | INT           | 审计结果   | 0                                              |
| sec_bu_id          | BIGINT        |            | 0                                              |
| sec_user_id        | BIGINT        |            | 0                                              |
| sec_ou_id          | BIGINT        |            | 0                                              |
