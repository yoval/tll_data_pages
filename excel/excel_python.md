# excel python

excel 中运行的python脚本看起来很酷，但是还没遇到非这样用的场景。读取数据用的是`xl()`函数。

## 核心库

Excel 中的 Python 在 Microsoft Cloud 中运行,无网络访问权限，默认已导入以下库:

- matplotlib

`import matplotlib.pyplot as plt`

matplotlib 可以生成图表、直方图、功率谱、柱状图、误差线图、散点图等。

```python
import numpy as np
import matplotlib.pyplot as plt

# 创建一个新的图形
plt.figure()

# 在0到2*pi之间创建100个均匀分布的数据点
x = np.linspace(0, 2 * np.pi, 100)

# 计算每个x值对应的正弦和余弦值
y_sin = np.sin(x)
y_cos = np.cos(x)

# 绘制两个图表：正弦和余弦
plt.plot(x, y_sin, label='sin(x)', color='blue', linestyle='-')  # 正弦波形
plt.plot(x, y_cos, label='cos(x)', color='red', linestyle='--')  # 余弦波形

# 添加标题和轴标签
plt.title('Sine and Cosine Waves')
plt.xlabel('Angle [radians]')
plt.ylabel('sin(x) and cos(x)')

# 显示图例
plt.legend()

# 显示网格
plt.grid(True)

# 显示图形
plt.show()
```

-  numpy

`import numpy as np`

- pandas

`import pandas as pd`

读取数据可用`df = xl("A1:D12", headers=True)`，可视化`df['e'].plot.pie()`


- seaborn

seaborn 是一个基于 matplotlib 的数据可视化库。

`import seaborn as sns`

- statsmodels

`import statsmodels as sm`



## 非核心库

- qrcode 

`import qrcode`

```python
import qrcode

生成二维码

# 创建QRCode对象
qr = qrcode.QRCode(
    version=1,  # 控制二维码的大小，值越大，二维码图片尺寸越大，默认为None会自动调整
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # 控制二维码的错误纠正级别
    box_size=10,  # 控制二维码中每个小格子的像素数
    border=4,  # 控制边框（二维码与图片边界的距离）宽度，默认为4，也是最小值
)

# 添加数据到QRCode对象
data = str(xl("D2"))
qr.add_data(data)
qr.make(fit=True)

# 创建图像
img = qr.make_image(fill_color="black", back_color="white")

# 显示图像
img.show()
```
文档 `https://support.microsoft.com/zh-cn/office/%E5%BC%80%E6%BA%90%E5%BA%93%E5%92%8C-excel-%E4%B8%AD%E7%9A%84-python-c817c897-41db-40a1-b9f3-d5ffe6d1bf3e`

