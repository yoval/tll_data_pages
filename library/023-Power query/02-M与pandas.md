# 数据处理操作对比

## 1. 筛选

### 行筛选

- **Pandas**: `df.query('Age > 25 and City == "Shanghai"')`
- **Power Query M**: `Table.SelectRows(Source, each [Age] > 25 and [City] = "Shanghai")`

### 列筛选

#### 保留列

- **Pandas**: `df.loc[:, ["City", "Amount"]]`
- **Power Query M**: `Table.SelectColumns(Source, {"City", "Amount"})`

#### 删除列

- **Pandas**: `df.drop(columns=["ShipDate", "ShippingLevel"])`
- **Power Query M**: `Table.RemoveColumns(Source, {"ShipDate", "ShippingLevel"})`

## 2. 列运算

### 列拼接

- **Pandas**: `df["门店编号_月份"] = df["门店编号"] + "_" + df["月份"]`
- **Power Query M**: `Table.AddColumn(Source, "门店编号_月份", each [门店编号] & "_" & [月份])`

### 重命名列

- **Pandas**: `df.rename(columns={"门店编号": "门店编号_月份"})`
- **Power Query M**: `Table.RenameColumns(Source, {"门店编号": "门店编号_月份"})`

## 4. 缺失值处理

### 单列填充

- **Pandas**: `df['门店编号'].fillna(0)`
- **Power Query M**: `Table.ReplaceValue(Source, null, 0, {"门店编号"})`

### 多列填充

- **Pandas**: `df.fillna(0)`
- **Power Query M**: `Table.FillMissingValues(Source, {{"门店编号", 0}})`

## 5. 排序

- **Pandas**: `df.sort_values(by=["门店编号", "月份"], ascending=[True, False])`
- **Power Query M**: `Table.Sort(Source, {{"门店编号", Order.Ascending}, {"月份", Order.Descending}})`

## 6. 分组

- **Pandas**: `df.groupby(["门店编号", "月份"]).sum()`
- **Power Query M**: `Table.Group(Source, {"门店编号", "月份"}, {{"营业额", each List.Sum([营业额]), type number}})`

## 7. 合并

### 表连接

- **Pandas**: `pd.merge(df1, df2, on="门店编号", how="left")`
- **Power Query M**: `Table.NestedJoin(Source, {"门店编号"}, Source1, {"门店编号"}, "df1", JoinKind.LeftOuter)`

### 纵向拼接

- **Pandas**: `pd.concat([df1, df2])`
- **Power Query M**: `Table.Combine({Source1, Source2})`

## 8. 透视

- **Pandas**: `df.pivot_table(index="门店编号", columns="月份", values="营业额", aggfunc="sum")`
- **Power Query M**: `Table.Pivot(Source, {"月份"}, "门店编号", "营业额", List.Sum)`

## 9. 转换数据类型

### 更改列的数据类型

- **Pandas**: `df['Age'] = df['Age'].astype(int)`
- **Power Query M**: `Table.TransformColumnTypes(Source, {{"Age", Int64.Type}})`

## 10. 创建新列（基于现有列的计算）

### 基于现有列创建新列

- **Pandas**: `df['NewColumn'] = df['ExistingColumn'] * 2`
- **Power Query M**: `Table.AddColumn(Source, "NewColumn", each [ExistingColumn] * 2)`

## 11. 过滤唯一值

### 获取某一列的唯一值

- **Pandas**: `unique_values = df['City'].unique()`
- **Power Query M**: `Table.Distinct(Table.SelectColumns(Source, {"City"}))`

## 12. 统计汇总

### 计算某一列的总和、平均值等统计量

- Pandas:
  - 总和: `total = df['Amount'].sum()`
  - 平均值: `average = df['Amount'].mean()`
- Power Query M:
  - 总和: `List.Sum(List.Transform(Table.Column(Source, "Amount"), each _))`
  - 平均值: `List.Average(List.Transform(Table.Column(Source, "Amount"), each _))`

## 13. 替换特定值

### 将某一列中的特定值替换为其他值

- **Pandas**: `df['Status'] = df['Status'].replace('Pending', 'Completed')`
- **Power Query M**: `Table.ReplaceValue(Source, "Pending", "Completed", Replacer.ReplaceText, {"Status"})`

## 14. 字符串操作

### 提取子字符串或进行字符串转换

- **Pandas**: `df['ShortName'] = df['FullName'].str[:5]`
- **Power Query M**: `Table.AddColumn(Source, "ShortName", each Text.Start([FullName], 5))`

## 15. 数据排序与排名

### 对数据进行排序并分配排名

- **Pandas**: `df['Rank'] = df['Sales'].rank(method='dense')`
- **Power Query M**: 使用自定义函数或步骤来实现类似功能

## 16. 时间日期处理

### 处理时间日期格式

- **Pandas**: `df['Date'] = pd.to_datetime(df['Date'])`
- **Power Query M**: `Table.TransformColumnTypes(Source, {{"Date", type date}})`

## 17. 条件筛选

### 根据条件筛选数据

- **Pandas**: `filtered_df = df[df['Score'] > 80]`
- **Power Query M**: `Table.SelectRows(Source, each [Score] > 80)`

## 18. 数据去重

### 删除重复行

- **Pandas**: `df.drop_duplicates(inplace=True)`
- **Power Query M**: `Table.Distinct(Source)`

