# wps python

文档：https://365.kdocs.cn/l/cuUFLE0Ufojw?linkname=QEP23CTgkz

## 函数

- `xl`

  访问工作表里的数据，返回`DataFrame`。`sheet_name` 为`list`（指定sheet）或者`None`时返回的是`list[DataFrame,DataFrame]`

  ```python
  xl(range: str = "",# 选区，默认已使用区域
         headers: bool = False,# 是否将第一行作为标题
         sheet_name: str | list[str] = "", # sheet名称
         book_url: str = "", # 文档地址，默认当前文档
         start_row: int | None = None,# 开始行
         start_column: int | None = None, # 结束行
         end_row: int | None = None, # 开始列
         end_column: int | None = None,# 结束列
         formula: bool = False) # 是否返回公式内容
  ```
- `write_xl()`

写入工作表数据

```python
write_xl(data: object,# 写入的数据，可以是DataFrame，list，tuple，set
         range: str = "",# 写入位置，默认A1单元格
         new_sheet: bool = False,# 新sheet
         sheet_name: str = "", # sheet名称
         overfill: bool = True,# 超出选区
         book_url: str = "",# 文档地址，默认当前文档
         start_row: int | None = None,
         start_column: int | None = None,
         write_df_index: bool = False) # DataFrame的index列
```

- `delete_xl()`

删除工作表数据

```python
delete_xl(range: str = "",
              sheet_name: str | list[str] = '',
              book_url: str | None = '',
              entire_row: bool = False, # 是否删除整行
              entire_column: bool = False,# 是否删除整列
              xl_shift_to_left: bool = False,# 是否左右合并（否则上下合并）
              start_row: int | None = None,
              start_column: int | None = None,
              drop_sheet: bool = False)# 删除整个工作表
```

- `dbt() `

读取数据表中的数据

### 异常订单收集统计
（适用于云文档）
```python
import pandas as pd
import numpy as np

df = xl("$A$1:$R$1000", headers=True, sheet_name="Sheet1")
# 删除那些所有列都为空的行
df = df.dropna(how='all')
# 填充省区经理及订单编号
df['省区经理'] = df['省区经理'].ffill()
df['订单编号'] = df['订单编号'].ffill()
df = df.loc[:,['省区经理','订单编号','是否需要剔除']]
df = df.drop_duplicates(subset=['订单编号'], keep='first')
df['订单数'] = 1
df['已填写数'] = np.where(pd.isna(df['是否需要剔除']), 0, 1)
df['未填写数'] = np.where(pd.isna(df['是否需要剔除']), 1, 0)
mapping = {'是': 1, '否': 0}
df['需要剔除'] = df['是否需要剔除'].map(mapping)
pivot_df = pd.pivot_table(
    df,
    values=['订单数', '已填写数', '未填写数', '需要剔除'],
    index=['省区经理'],
    aggfunc="sum"
).reset_index()
pivot_df = pivot_df.loc[:,['省区经理','订单数','已填写数','未填写数','需要剔除']]



try:
  write_xl(pivot_df, "$A$1", sheet_name="汇总",new_sheet=True)
except:
  write_xl(pivot_df, "$A$1", sheet_name="汇总")
```