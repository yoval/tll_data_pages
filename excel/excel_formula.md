# 公式

- `LET`


- `LAMBDA`

- `IMAGE`

引用外部图片

    =IMAGE(url_or_file_path, [mode], [width], [height])
    =IMAGE(链接或文件路径, [模式], [宽], [高])

    mode: 1 默认原尺寸 2 缩放（保持纵横比） 3 裁剪 4 缩放（不保存纵横比） 

- `GROUPBY`

GROUPBY 函数允许你根据指定的行字段对数据进行分组、聚合、排序和筛选。

    =GROUPBY(row_fields,values,function,[field_headers],[total_depth],[sort_order],[filter_array])
    =GROUPBY(分组行,计算列,汇总方式,[标题],[显示总计],[排序],[筛选])

