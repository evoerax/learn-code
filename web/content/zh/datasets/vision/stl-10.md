# STL-10 数据集

## 数据集简介

STL-10 是斯坦福大学于 2011 年发布的图像分类数据集，主要用于评估无监督特征学习和半监督学习方法。该数据集包含 10 个类别（飞机、鸟类、猫、鹿、狗、马、船、卡车、家用卡车Monkey），每个类别包含 500 张带标签的训练图像和 800 张测试图像。STL-10 的独特之处在于其 100,000 张无监督学习图像集合，这些未标注的图像来自与有标签数据相似但不完全相同的分布，使其成为研究无监督域适应和表示学习的理想基准。图像尺寸为 96×96 像素，比 CIFAR-10 更大但类别更少，提供了更具挑战性的低数据体制实验场景。

## 相关链接

- **官网/论文**: https://cs.stanford.edu/~acoates/stl10/
- **GitHub**: https://github.com/leftthomas/STL10 (非官方实现)
- **数据集下载**: https://cs.stanford.edu/~acoates/stl10/stl10_binary.tar.gz

## 相关论文

**论文标题**: An Analysis of Single-Layer Networks in Unsupervised Feature Learning  
**作者**: Adam Coates, Honglak Lee, Andrew Y. Ng  
**年份**: 2011  
**摘要**: 本论文分析了无监督特征学习中单层网络的表现，研究了无监督预训练在大规模图像分类任务中的作用。研究表明，通过对大规模无标注数据进行无监督特征学习，可以显著提升后续分类器在小规模标注数据上的表现。STL-10 数据集的提出正是基于这一研究动机，旨在为无监督学习算法提供一个标准化的评估平台。实验表明，k-means 聚类等简单方法配合深度特征学习可以取得竞争力的分类性能。

## 数据示例

**数据格式说明**: 数据集以自定义二进制格式存储，使用 MATLAB 的 load 命令读取。每张图像存储为 96×96×3 的 uint8 数组（RGB 彩色图像）。

**文件结构**:
```
stl10_binary/
├── train_X.bin    # 5000张训练图像，3通道96×96
├── train_y.bin    # 训练标签（1-10）
├── test_X.bin     # 8000张测试图像，3通道96×96
├── test_y.bin     # 测试标签（1-10）
├── unlabeled_X.bin # 100000张无标签图像
├── class_names.txt
└── fold_indices.txt
```

**真实样本示例**:

```python
# 标签映射
label_map = {
    1: 'airplane', 2: 'bird', 3: 'car', 4: 'cat', 5: 'deer',
    6: 'dog', 7: 'horse', 8: 'monkey', 9: 'ship', 10: 'truck'
}

# 加载训练样本示例
# 样本1: 类别airplane, 96×96×3 RGB图像，像素值0-255
# 样本2: 类别ship, 96×96×3 RGB图像，像素值0-255
# 样本3: 类别automobile, 96×96×3 RGB图像，像素值0-255
```
