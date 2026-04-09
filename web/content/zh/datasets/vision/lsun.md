# LSUN (Large-scale Scene Understanding)

## 数据集简介

LSUN 是一个大规模场景理解数据集，由 Stanford University 于 2015 年发布。该数据集包含 1000 万张图像，涵盖 20 个场景类别（如卧室、客厅、厨房、餐厅等）和 35 个物体类别（如桌子、椅子、狗、猫等）。LSUN 的设计目的是为场景分类、场景解析、物体检测等视觉任务提供大规模训练数据。其图像分辨率较高，场景类别丰富多样，能够支持深度学习模型学习复杂的场景语义特征。该数据集是场景理解领域最具影响力的基准数据集之一，被广泛用于评估模型在真实场景中的泛化能力。

## 相关链接

- 官网/论文：https://www.yf.io/p/lsun
- GitHub：https://github.com/fyu/lsun
- 论文：https://arxiv.org/abs/1506.03365

## 相关论文

**LSUN: Construction of a Large-scale Image Dataset using Deep Learning with Humans in the Loop**
- 作者：Fei-Fei Li, Jia Deng et al.
- 年份：2015
- 摘要：本文提出了 LSUN 数据集，一个大规模场景理解数据集。我们使用深度学习模型辅助数据收集，并通过人类参与验证数据质量。数据集包含 20 个场景类别和 35 个物体类别，共约 1000 万张图像。LSUN 为场景理解和物体识别研究提供了大规模标准化基准。

## 数据示例

### 数据格式说明

LSUN 数据集使用 LMDB 格式存储数据，每个类别对应一个独立的 LMDB 数据库。

```bash
# 数据目录结构
lsun/
├── bedroom_lmdb/
├── kitchen_lmdb/
├── classroom_lmdb/
└── ...
```

### 真实样本

#### 场景分类样本

```
类别: bedroom
图像ID: bedroom_00000000.jpg
分辨率: 256×256
描述: 卧室场景，包含床、枕头、窗户等元素
```

```
类别: restaurant_lmdb  
类别名: restaurant
图像ID: restaurant_00000001.jpg
分辨率: 512×384
描述: 餐厅内部场景，包含餐桌、椅子、吊灯等元素
```

#### 物体检测样本

```
物体类别: chair
边界框: [x: 120, y: 200, width: 80, height: 150]
对应图像: classroom_00000005.jpg
```

---

*文档版本: 1.0 | 最后更新: 2026年4月*
