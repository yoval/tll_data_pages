# wps python

文档：

### 异常订单收集统计
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