## 盈亏平衡点的计算

- 涉及概念

营业额(`turnover`)、营业收入(`revenue`)、毛利润(`Gross Profit,gp`)、毛利率(`Gross Profit Margi,gpm`)，支出金额(`expenditure`)

- 盈亏平衡点的计算

    优惠率 = (流水金额 - 实收金额)/流水金额

    盈亏平衡点 = 支出金额 / (毛利- 优惠率)

    利润 = (流水金额 - 盈亏平衡点) * (毛利- 优惠率) 

- 代码实现（python）

直接计算：

```python
# 计算盈亏平衡点及利润
def vectorized_get_rep(turnover,revenue,expenditure, gross_profit=0.5):
    '''
    turnover: 流水金额
    revenue: 实收金额
    expenditure: 支出金额
    '''
    discount_rate = (turnover - revenue) /turnover
    rep = expenditure/ (gross_profit - discount_rate)
    profit_amount = (turnover - rep) * (gross_profit - discount_rate)
    return rep,profit_amount

```

DataFrame 计算：
```python
# 计算盈亏平衡点及利润
def vectorized_get_rep(df_row, gross_profit=0.5):
    discount_rate = (df_row['流水金额'] - df_row['实收金额']) / df_row['流水金额']
    rep = df_row['支出金额'] / (gross_profit - discount_rate)
    profit_amount = (df_row['流水金额'] - rep) * (gross_profit - discount_rate)
    return pd.Series([rep, profit_amount], index=['rep', 'profit'])

```

