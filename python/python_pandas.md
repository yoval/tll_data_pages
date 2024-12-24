# PANDAS

```python
import pandas as pd

print("Pandas version:", pd.__version__)
```

> Pandas version: 2.1.4

![](https://images.bizha.top/Snipaste_2024-12-07_16-29-38.png)

## 常用处理函数

例子用这张表

|      | A    | B     | C    | D    |
| ---- | ---- | ----- | ---- | ---- |
| 0    | foo  | one   | 1    | 10   |
| 1    | bar  | one   | 2    | 20   |
| 2    | foo  | two   | 3    | 30   |
| 3    | bar  | three | 4    | 40   |
| 4    | foo  | two   | 5    | 50   |
| 5    | bar  | two   | 6    | 60   |
| 6    | foo  | one   | 7    | 70   |
| 7    | foo  | three | 8    | 80   |

### map、apply、applymap

新版pandas `applymap` 已经有弃用警报，map目前可以对DataFrame进行操作。

- map

`pandas` 中的 `map` 方法主要用于 **Series** 对象，用于将 Series 中的值一对一地映射到新的值。它接受一个参数，这个参数可以是字典、函数或者一个 Series。

**字典映射**

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

# 定义映射关系
Chinese_types = {'one': '一', 'two': '二', 'three': '三'}

# 对 'B' 列应用映射
df['B'] = df['B'].map(Chinese_types)

print(df)
```

**函数映射**

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

# 定义映射关系
def get_Chinese_types(English_types):
    if English_types == 'one':
        return '一'
    elif English_types == 'two':
        return '二'
    elif English_types == 'three':
        return '三'

# 对 'B' 列应用映射
df['B'] = df['B'].map(get_Chinese_types)

print(df)
```

**另一个 Series 进行映射**

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

# 定义映射关系
Chinese_series = pd.Series({'one': '一', 'two': '二', 'three': '三'}, name='type')

# 对 'B' 列应用映射
df['B'] = df['B'].map(Chinese_series)

print(df)
```

### 作用于DataFrame

原`applymap`，仅用于“函数映射”

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

#自定义函数
def apply_map_demo(x):
    if type(x) == str:
        return x+'_new'
    else :
        return x+100

df = df.map(apply_map_demo)
print(df)
```

- apply

`pandas` 中的 `apply` 方法是一个非常强大且灵活的工具，它允许你对 **DataFrame** 或 **Series** 的行或列应用自定义函数。用于应对更加复杂的情况。

**作用于`row`**

`axis=1` 按row进行。

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

#自定义函数
def apply_demo(row):
    if row['C']>3:
        return row['D'] - row['C']
    else :
        return row['D'] + row['C']

df['E'] = df.apply(apply_demo, axis=1)
print(df)
```

**传递参数**

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

#自定义函数
def apply_demo(x,y):
    return x+y

df['E'] = df['D'].apply(apply_demo, args=(3,))
print(df)
```



## groupby聚合操作

`groupby`可根据一个或多个键对数据进行分组，并对每个分组执行聚合、转换或其他操作。

### Groupby的基本原理

例子这张表

|      | A    | B     | C    | D    |
| ---- | ---- | ----- | ---- | ---- |
| 0    | foo  | one   | 1    | 10   |
| 1    | bar  | one   | 2    | 20   |
| 2    | foo  | two   | 3    | 30   |
| 3    | bar  | three | 4    | 40   |
| 4    | foo  | two   | 5    | 50   |
| 5    | bar  | two   | 6    | 60   |
| 6    | foo  | one   | 7    | 70   |
| 7    | foo  | three | 8    | 80   |

```python
import pandas as pd

data = {
    'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'],
    'B': ['one', 'one', 'two', 'three', 'two', 'two', 'one', 'three'],
    'C': [1, 2, 3, 4, 5, 6, 7, 8],
    'D': [10, 20, 30, 40, 50, 60, 70, 80]
}
df = pd.DataFrame(data)

group = df.groupby('A')
print(group)
```

得到的group是个`DataFrameGroupBy`对象，转成list看下

```python
list(group)

[('bar',
       A      B  C   D
  1  bar    one  2  20
  3  bar  three  4  40
  5  bar    two  6  60),
 ('foo',
       A      B  C   D
  0  foo    one  1  10
  2  foo    two  3  30
  4  foo    two  5  50
  6  foo    one  7  70
  7  foo  three  8  80)]
```

可以看出`DataFrameGroupBy`的组成是`[(A列值1,对应值1的DataFrame),(A列值2,对应值2的DataFrame),(A列值3,对应值3的DataFrame),……]`，对`DataFrameGroupBy`的操作均是对子`DataFrame`进行操作。

### 聚合Aggregation

- 统计聚合参数

  - `sum()`求和

  ```python
  group[['C','D']].sum()
  ```

  - `mean()`求平均值
  - `median()`中位数
  - `min()`最小值
  - `max()`最大值
  - `count()`计数

- agg

  - `sum`
  - `mean`
  - `median`

  ```python
  group[['C','D']].agg({'C':'mean','D':'sum'})
  ```

### 转换transform

目前没找到应用场景懒得写

```python
group[['C','D']].transform('mean')
```

### apply

groupby后的apply，以分组后的子DataFrame作为参数传入指定函数的。

### 处理实例

```python
import pandas as pd

data = {
    '门店名称': ['门店1', '门店2', '门店3', '门店1', '门店2', '门店3', '门店4', '门店1'],
    '巡检类型': ['交叉巡查', '自查', '交叉巡查', '自查', '交叉巡查', '自查', '交叉巡查', '交叉巡查'],
    '巡检人': ['张三', '李四', '王五', '张三', '李四', '王五', '张三', '王五']
}
df = pd.DataFrame(data)

# Step 1: 创建 effective_df1
# 对 '门店名称' 和 '巡检类型' 分组，并计算每个分组中 '巡检人' 出现的次数。
grouped = df.groupby(['门店名称', '巡检类型'])

# Step 2: 聚合数据，使用 'count' 方法统计每种 '巡检类型' 在每个 '门店名称' 中出现的次数。
agg_result = grouped.agg(Count=('巡检人', 'count'))

# Step 3: 将 '巡检类型' 转换为列（展开），对于没有记录的组合填充值为0。
unstacked = agg_result.unstack(fill_value=0)

# Step 4: 移除多级索引中的第一层（即 'Count'），只保留 '巡检类型' 作为列名。
single_level_columns = unstacked.droplevel(0, axis=1)

# Step 5: 重置索引，使 '门店名称' 成为一列而非索引。
reset_index_df = single_level_columns.reset_index()

# Step 6: 清理列名，移除 columns name（即移除最顶层的列索引名）
effective_df1 = reset_index_df.copy()
effective_df1.columns.name = None

# Step 7: 创建 effective_df2
# 按照 '门店名称' 分组，并将每个分组中的 '巡检人' 列的值用逗号连接成一个字符串。
grouped_for_concat = df.groupby('门店名称')

# 使用自定义聚合函数将 '巡检人' 的值连接起来。
concatenated_records = grouped_for_concat.agg(
    巡检记录=('巡检人', lambda x: ','.join(x.unique()))  # 确保去除重复的巡检人
)

# Step 8: 重置索引，使 '门店名称' 成为一列而非索引。
effective_df2 = concatenated_records.reset_index()

# Step 9: 合并两个 DataFrame
# 使用左连接（left join）合并 effective_df1 和 effective_df2，基于 '门店名称' 进行匹配。
effective_df = pd.merge(effective_df1, effective_df2, on='门店名称', how='left')

# Step 10: 显示最终结果
print(effective_df)
```

