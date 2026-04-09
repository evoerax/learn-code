# CIFAR-10/100

## 数据集简介

CIFAR-10/100 是由加拿大高等研究院（CIFAR）于 2009 年发布的小型图像分类数据集，专门用于研究目标识别任务。该数据集包含 6 万张 32x32 彩色图像，其中训练集 5 万张，测试集 1 万张。CIFAR-10 分为 10 个类别，每个类别 6 千张图像；CIFAR-100 分为 100 个细粒度类别，每个类别仅 600 张图像。CIFAR 数据集是机器学习领域最经典的基准数据集之一，被广泛用于快速验证新算法和神经网络架构。由于图像尺寸小、类别相对简单，CIFAR 成为深度学习入门和算法对比的标准实验平台。

## 相关链接

- 官网：https://www.cs.toronto.edu/~kriz/cifar.html
- 论文：https://www.cs.toronto.edu/~kriz/learning-features-2009-TR.pdf
- Hugging Face：https://huggingface.co/datasets/cifar10
- GitHub：https://github.com/桃花皮 ner染/CIFAR10-Zoo

## 相关论文

**Learning Multiple Layers of Features from Tiny Images**
- 作者：Alex Krizhevsky, Geoffrey Hinton
- 年份：2009
- 摘要：本文介绍了 CIFAR 数据集的构建方法和使用多层特征学习方法进行目标识别的实验结果。研究表明，即使在如此小的图像上，深度卷积神经网络也能学习到有效的层次化特征表示，为后续深度学习在图像分类领域的突破奠定了基础。

**Wide Residual Networks**
- 作者：Sergey Zagoruyko, Nikos Komodakis
- 年份：2016
- 摘要：本文针对 CIFAR 数据集研究了残差网络的宽度与深度权衡问题。实验表明，增加残差块的宽度比增加网络深度更有效地提升性能，且训练速度更快。该工作展示了在中等规模数据集上，网络架构设计的重要性。

## 数据示例

### 数据格式说明

CIFAR-10 数据结构：
- 图像尺寸：32×32 彩色图像（RGB）
- 训练集：50,000 张
- 测试集：10,000 张
- 10 个类别：airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck

数据以 Python pickle 格式存储，包含以下字段：
- `data`：图像像素值（3072 维向量，RGB 三通道拼接）
- `labels`：类别标签（0-9 整数）

### 真实样本示例

**样本 1 - 类别：automobile**
```
label: 1
类别名称: automobile
图像: 32x32 RGB 像素值 [R...G...B...] 共 3072 维
样本图像内容: 汽车侧视图（车辆、背景）
```

**样本 2 - 类别：frog**
```
label: 6
类别名称: frog
图像: 32x32 RGB 像素值
样本图像内容: 青蛙特写或全身图（前景主体、背景）
```

**样本 3 - 类别：ship**
```
label: 8
类别名称: ship
图像: 32x32 RGB 像素值
样本图像内容: 船只侧视图（海洋背景）
```

### 标注类型

1. **类别标签**：整数 0-9（CIFAR-10）或 0-99（CIFAR-100）
2. **粗粒度标签**：CIFAR-100 提供 20 个超类
3. **细粒度标签**：CIFAR-100 的 100 个细分类别
