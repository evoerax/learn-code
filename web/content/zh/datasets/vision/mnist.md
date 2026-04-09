# MNIST (Mixed National Institute of Standards and Technology)

## 数据集简介

MNIST 是由美国国家标准与技术研究院（NIST）于 1998 年发布的手写数字识别数据集，被认为是机器学习史上最经典的数据集之一。该数据集包含 7 万张 28x28 灰度手写数字图像，其中训练集 6 万张，测试集 1 万张。数字范围为 0-9，共 10 个类别。MNIST 虽然图像简单、尺寸小，但它在机器学习算法验证和入门教学中具有里程碑式的地位，被视为评估新算法的"Hello World"基准。由于其规模小、任务简单，研究者可以快速在 CPU 上完成实验，极大地推动了机器学习和深度学习技术的早期发展。

## 相关链接

- 官网：http://yann.lecun.com/exdb/mnist/
- 论文：http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf
- Hugging Face：https://huggingface.co/datasets/mnist
- GitHub：https://github.com/cvdfoundation/mnist

## 相关论文

**Gradient-Based Learning Applied to Document Recognition**
- 作者：Yann LeCun, Léon Bottou, Yoshua Bengio, Patrick Haffner
- 年份：1998
- 摘要：本文介绍了 MNIST 数据集的构建方法和基于梯度的卷积神经网络训练方法。论文展示了卷积神经网络在手写数字识别任务上的优越性能，提出了局部感受野、权值共享和子采样等核心概念，为深度学习在图像识别领域的应用奠定了理论基础。

**MNIST for Machine Learning Beginners**
- 作者：Tomoaki Kimura, et al.
- 年份：2018
- 摘要：本文介绍了如何利用 MNIST 数据集入门机器学习和深度学习。实验对比了传统机器学习方法（SVM、KNN）与深度学习方法（CNN）在手写数字识别上的表现，展示了 CNN 在图像特征学习方面的优势。

## 数据示例

### 数据格式说明

MNIST 数据结构：
- 图像尺寸：28×28 灰度图像
- 训练集：60,000 张
- 测试集：10,000 张
- 10 个类别：0-9 数字
- 像素值范围：0-255（灰度值）

数据以 IDX 格式存储（与大端序存储的整数）：
- 图像数据：4 维字节数组 [60000, 28, 28, 1]（训练集）
- 标签数据：1 维字节数组 [60000]（训练集标签）

### 真实样本示例

**样本 1 - 数字：5**
```
label: 5
像素值: 28x28 灰度矩阵，值域 0-255
样本图像内容: 手写数字"5"的灰度图像
```

**样本 2 - 数字：2**
```
label: 2
像素值: 28x28 灰度矩阵
样本图像内容: 手写数字"2"的灰度图像
```

**样本 3 - 数字：9**
```
label: 9
像素值: 28x28 灰度矩阵
样本图像内容: 手写数字"9"的灰度图像
```

### 标注类型

1. **类别标签**：整数 0-9
2. **像素矩阵**：784 维向量（28×28 展开）
3. **附加信息**：部分变体版本包含书写者 ID、书写风格标签等
