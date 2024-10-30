# 常用代码段

### 生成月份列表

```python
from datetime import datetime
from dateutil.relativedelta import relativedelta

# 起始月份
start_date = datetime.strptime('2023-01', '%Y-%m')
# 结束月份
end_date = datetime.strptime('2024-09', '%Y-%m')

# 生成月份列表
month_list = []
current_date = start_date

while current_date <= end_date:
    month_list.append(current_date.strftime('%Y-%m'))
    current_date += relativedelta(months=1)

print(month_list)
```

![](https://images.bizha.top/20241030110025.png)



### 筛选出包含“流水”的列

```python
selected_columns = [col for col in df.columns if '流水' in col] + ['门店名称']
df_selected = df[selected_columns]
```

