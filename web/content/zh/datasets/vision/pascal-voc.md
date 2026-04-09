# Pascal VOC

## 数据集简介

Pascal VOC (Visual Object Classes) 是一个广泛使用的计算机视觉基准数据集，主要用于目标检测、图像分割和动作识别等任务。该数据集包含 20 个前景物体类别（人、动物、车辆、家具等）和 1 个背景类，共 4 个主要任务：分类、检测、分割和动作识别。Pascal VOC 从 2005 年开始举办年度挑战赛，推动了深度学习在视觉领域的快速发展，是目标检测领域最重要的基准数据集之一。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网 | http://host.robots.ox.ac.uk/pascal/VOC/ |
| 论文 | https://link.springer.com/article/10.1007/s11263-014-0733-5 |
| GitHub | https://github.com/microsoft/VoTT |

## 相关论文

**International Journal of Computer Vision (IJCV) - 2015**

**Title:** The Pascal Visual Object Classes Challenge: A Retrospective

**Authors:** Mark Everingham, S. M. Ali Eslami, Luc Van Gool, Christopher K. I. Williams, John Winn, Andrew Zisserman

**Abstract:** 回顾 Pascal VOC 挑战赛八年（2005-2012）的发展历程，总结目标检测、分类、分割等任务的技术进步。该数据集定义了统一的评估标准，推动了图像识别领域从 SIFT 特征向深度卷积神经网络的转变。

## 数据示例

### 数据格式说明

Pascal VOC 使用 XML 格式存储标注，每个图像对应一个 XML 文件，包含目标边界框、分割掩码和类别标签等信息。

### 真实样本

**样本 1 - 目标检测:**
```
<annotation>
  <filename>2007_000123.jpg</filename>
  <size>
    <width>500</width>
    <height>375</height>
    <depth>3</depth>
  </size>
  <object>
    <name>person</name>
    <bndbox>
      <xmin>150</xmin>
      <ymin>120</ymin>
      <xmax>280</xmax>
      <ymax>350</ymax>
    </bndbox>
  </object>
  <object>
    <name>bicycle</name>
    <bndbox>
      <xmin>200</xmin>
      <ymin>250</ymin>
      <xmax>450</xmax>
      <ymax>370</ymax>
    </bndbox>
  </object>
</annotation>
```

**样本 2 - 图像分割:**
```
<segmentation>
  <filename>2008_002349.png</filename>
  <object>
    <name>car</name>
    <polygon>
      <point x="50" y="100"/>
      <point x="120" y="100"/>
      <point x="120" y="150"/>
      <point x="50" y="150"/>
    </polygon>
    <mask>car_001.png</mask>
  </object>
</segmentation>
```

**样本 3 - 动作识别:**
```
<action>
  <filename>2009_003456.jpg</filename>
  <object>
    <name>person</name>
    <action name="running">
      <bndbox>
        <xmin>100</xmin>
        <ymin>80</ymin>
        <xmax>150</xmax>
        <ymax>200</ymax>
      </bndbox>
    </action>
  </object>
</action>
```

### 统计信息

| 指标 | VOC 2007 | VOC 2012 |
|------|----------|----------|
| 训练/验证图像 | 5,011 | 11,530 |
| 测试图像 | 4,952 | 10,991 |
| 目标类别 | 20 | 20 |
| 任务类型 | 4种 | 4种 |
| 发布机构 | Oxford University | Oxford University |
| 发布时间 | 2007 | 2012 |
