# WPS AirScript 

文档：https://airsheet.wps.cn/docs/

AirScript 是金山文档依据 JavaScript  语言编写逻辑代码。

### Application

### 属性

| 属性           | 数据类型 | 简介                 |
| -------------- | -------- | -------------------- |
| ActiveSheet    | Sheet    | 当前的活动工作表     |
| Sheets         | Sheets   | 当前文件的所有工作表 |
| ActiveWorkbook | Workbook | 当前的文档           |
| Selection      | Range    | 当前的选区对象       |
| Cells          | Range    | 当前工作表所有单元格 |
| Columns        | Range    | 当前工作表所有列     |
| Rows           | Range    | 当前工作表所有行     |
| FileInfo       | Object   | 当前文档的信息       |
| UserInfo       | Object   | 当前文档的用户信息   |
| Enum           | Enum     | 所有的枚举类型       |

### 返回Sheet

```javascript
//Application (function)

//workbook（object）
workbook = Application.ActiveWorkbook //工作簿
workbook.Save() //保存工作簿

//所有sheets(function)
const sheets = Application.Sheets //所有sheets,function
const sheet_number = sheets.Count //工作表数量
// 选定sheet （object）
const sheet1 = sheets.Item(1) //按索引选择
const sheet2 = sheets.Item('Sheet2') //按名称选择
const sheet3 = Application.Sheets('Sheet3') //按名称选择
const sheet4 = Application.ActiveSheet //按活动选择

sheet4.Name = 'sheet5' //修改sheet名
sheet1.Activate() //切换活动Sheet
sheet1.Delete() //删除工作表
const used_range = sheet1.UsedRange

```

### 返回Range

```javascript
const selected_range = Application.Selection.Address() //选定区域
const cells_range = sheet1.Cells //所有单元额
const columns_range = sheet1.Columns //所有列
const rows_range = sheet1.Rows //所有行

const A1_range = sheet1.Range('A1') //A1 单元格
const A1_text = A1_range.Text //A1单元格内容

const ah_range = sheet1.Range("A1:H8")
```

### 操作range

```
A1_range.Select
ah_range.Formula = "=Rand()"
```

