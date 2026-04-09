# ImageNet

## 数据集简介

ImageNet 是目前规模最大的视觉数据库之一，由斯坦福大学李飞飞团队于 2009 年发起创建。该项目旨在为视觉对象识别软件研究提供大规模、高质量的图像数据。ImageNet 包含超过 14M 张手动标注的图像，其中至少 1M 张图像提供了边界框标注，共涵盖超过 20,000 个类别。ImageNet 基于 WordNet 词库构建层次化的类别结构，每个类别（synset）平均包含数百张图像。自 2010 年起，ImageNet 每年举办一次大规模视觉识别挑战赛（ILSVRC），使用 1,000 个类别的子集进行图像分类和目标检测竞赛，该比赛被视为深度学习革命的重要推动力。

## 相关链接

- 官网：https://image-net.org/
- 论文：https://arxiv.org/abs/1409.0575
- GitHub：https://github.com/ImageNet
- 在线体验：https://image-net.org/explore.php

## 相关论文

**ImageNet: A Large-Scale Hierarchical Image Database**
- 作者：Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, Li Fei-Fei
- 年份：2009
- 摘要：本文介绍了 ImageNet 的构建方法和规模。作为大规模图像数据库的先驱工作，ImageNet 通过众包方式标注了数百万张图像，为计算机视觉社区提供了前所未有的训练和评估资源。该数据库的层次化结构和大规模特性使其成为推动深度学习发展的关键因素。

**ImageNet Large Scale Visual Recognition Challenge (ILSVRC)**
- 作者：Olga Russakovsky, Jia Deng, Hao Su, et al.
- 年份：2015
- 摘要：本文详细介绍了 ImageNet 大规模视觉识别挑战赛的设计、评估协议和竞赛历史。ILSVRC 已成为评估图像分类和目标检测算法的标准基准，推动了卷积神经网络在视觉识别领域的突破性进展。

## 数据示例

### 数据格式说明

ImageNet-1K 数据集结构：
- 训练集：1,281,167 张图像，1,000 个类别
- 验证集：50,000 张图像
- 测试集：100,000 张图像

每张图像标注一个 WordNet ID (wnid)，格式如 `n02084071`（dog）。

### 真实样本示例

**样本 1 - 类别：German shepherd**
```
wnid: n02084071
类别名称: German shepherd, German police dog, Canis familiaris
图像: 224x224 RGB 图像（通常经过预处理）
```

**样本 2 - 类别：golden retriever**
```
wnid: n02099601
类别名称: golden retriever
图像: 224x224 RGB 图像
```

**样本 3 - 类别：airplane**
```
wnid: n02690373
类别名称: airplane, aeroplane, plane
图像: 224x224 RGB 图像
```

### 标注类型

1. **图像级标注**：标注图像中是否存在某个对象类别
2. **边界框标注**：为约 3,000 个热门类别提供对象边界框，每个类别约 150 张图像
3. **属性标注**：为约 400 个类别提供 25 种属性（颜色、形状、纹理等）
