# Places365

## 数据集简介

Places365 是由 MIT CSAIL 实验室于 2016 年发布的大规模场景分类数据集，旨在为视觉场景理解研究提供超越 ImageNet 的数据资源。该数据集基于 Places2 数据库，包含 365 个场景类别（如咖啡馆、森林、海滩、医院等），训练集 180 万张图像，验证集 36,500 张。Places365 的场景类别覆盖了人类日常生活的各种环境，强调场景级别的语义理解而非物体识别，是评估深度网络场景感知能力的重要基准。该数据集对场景分类、场景理解、场景检索以及视觉语言模型预训练等领域具有重要价值。

## 相关链接

- 官网：http://places2.csail.mit.edu/
- 论文：https://arxiv.org/abs/1610.02055
- GitHub：https://github.com/CSAILVision/places365
- 在线体验：http://places2.csail.mit.edu/demo

## 相关论文

**Places: An Image Database for Deep Scene Understanding**
- 作者：Bolei Zhou, Agata Lapedriza, Jianxiong Xiao, Antonio Torralba, Aude Oliva
- 年份：2014
- 摘要：本文介绍了 Places 数据库的构建方法，该数据库收集了超过 700 万张场景图像，涵盖 400 多个场景类别。论文评估了卷积神经网络在场景分类任务上的表现，发现深层网络能够学习到场景的语义特征，为场景理解研究提供了新的方向。

**Places205: A Large-Scale High-Level Semantic Image Database**
- 作者：Fei Wang, Li Jia, Chen An, Aude Oliva, Antonio Torralba
- 年份：2014
- 摘要：本文介绍了 Places205 数据集，该数据集是 Places 的子集，包含 205 个常见场景类别和 250 万张图像。Places205 作为场景分类的标准基准，促进了场景理解算法的发展。

**Places2: A Large-Scale Database for Scene Understanding**
- 作者：Bolei Zhou, Agata Lapedriza, Aditya Khosla, Aude Oliva, Antonio Torralba
- 年份：2017
- 摘要：本文介绍了 Places2（Places365）数据集的完整信息，包括 365 个场景类别和 1085 万张图像。论文还提出了 Places-CNNs 预训练模型，证明其在室内/室外分类、场景属性预测等迁移任务上优于 ImageNet 预训练模型。

## 数据示例

### 数据格式说明

Places365 数据集提供两种分辨率版本：
- **标准版**：256×256 像素 JPEG 格式
- **高分辨率版**：512×512 像素（部分类别）

目录结构：
```
places365/
├── train/
│   ├── kitchen/  (各类别文件夹)
│   ├── living_room/
│   └── ...
├── val/
│   └── *.jpg (验证集图像)
├── val.txt  (验证集标签)
└── categories.txt  (365个类别列表)
```

### 真实样本示例

**样本 1 - 场景类别：coffee shop**
```
文件: train/coffee_shop/places365_001234.jpg
类别ID: 5
场景描述: 室内咖啡馆，包含桌椅、咖啡机、装饰物等
分辨率: 256x256 RGB
```

**样本 2 - 场景类别：forest_path**
```
文件: train/forest_path/places365_005678.jpg
类别ID: 98
场景描述: 森林小路，两侧有树木，光线透过树叶
分辨率: 256x256 RGB
```

**样本 3 - 场景类别：airport_terminal**
```
文件: val/airport_terminal/places365_010000.jpg
类别ID: 156
场景描述: 机场航站楼内部，包含座位区、指示牌、候机乘客
分辨率: 256x256 RGB
```

### 标注类型

1. **场景类别标签**：365 个互斥的场景类别
2. **数据划分**：标准训练/验证/测试划分
3. **类别层次结构**：包含 3 个高层级类别（室内、室外、自然）
4. **评估协议**：提供 top-1/top-5 分类准确率评估标准