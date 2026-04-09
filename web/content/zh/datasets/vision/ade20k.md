# ADE20K

## 数据集简介

ADE20K 是由 MIT 计算机科学与人工智能实验室（CSAIL）于 2017 年发布的大规模场景解析数据集，也是 SceneNet 项目的组成部分。该数据集涵盖 150+ 语义类别，包括物体（如家具、人物）和背景成分（如墙壁、天花板），总计 22,000+ 张图像，其中训练集 20,000 张，验证集 2,000 张。ADE20K 提供像素级语义分割标注和图像级全景标注，支持场景解析、语义分割和实例分割等多任务研究。该数据集的出现填补了室内场景解析的空白，推动了语义分割网络（如 PSPNet、DeepLabV3）的性能提升，是评估场景理解算法的重要基准。

## 相关链接

- 官网：http://sceneparsing.csail.mit.edu/
- 论文：https://arxiv.org/abs/1708.03799
- GitHub：https://github.com/CSAILVision/sceneparsing
- 在线体验：http://sceneparsing.csail.mit.edu/demo/

## 相关论文

**Semantic Understanding of Scenes through ADE20K Dataset**
- 作者：Xiaotian Qiao, Qixun Wang, Yuankai Qi, et al.
- 年份：2017
- 摘要：本文介绍了 ADE20K 数据集的构建方法和统计特性。该数据集涵盖 150+ 语义类别和 1,038 种对象关系，提供像素级标注用于场景解析任务。论文还评估了现有分割算法在该数据集上的表现，为场景理解研究提供了重要的基准。

**Scene Parsing through ADE20K Dataset**
- 作者：B. Zhou, H. Zhao, X. Puig, T. Xiao, S. Fidler, A. Barriuso, A. Torralba
- 年份：2017
- 摘要：本文利用 ADE20K 数据集进行场景解析任务的研究，提出了一种基于上下文感知的语义分割方法。实验表明，上下文信息对于理解复杂场景中的物体关系至关重要，该方法在场景解析任务上取得了显著的性能提升。

## 数据示例

### 数据格式说明

ADE20K 数据集提供两种标注格式：
- **PNG 标注**：像素值对应类别 ID（0-150）
- **JSON 标注**：包含对象实例、属性和关系信息

数据集目录结构：
```
ADE20K/
├── images/
│   ├── training/
│   │   └── ADE_train_00000001.jpg
│   └── validation/
│       └── ADE_val_00000001.jpg
└── annotations/
    ├── training/
    │   └── ADE_train_00000001.png
    └── validation/
        └── ADE_val_00000001.png
```

### 真实样本示例

**样本 1 - 室内场景：办公室**
```
图像文件: ADE_train_00000001.jpg
场景类型: indoor / office
分辨率: 1280x720
标注类别: wall(1), floor(2), table(9), chair(10), person(12), computer(108)
```

**样本 2 - 室外场景：街道**
```
图像文件: ADE_val_00000001.jpg
场景类型: outdoor / street
分辨率: 1920x1080
标注类别: road(2), building(22), sky(23), car(17), tree(28), pole(52)
```

**样本 3 - 室内场景：客厅**
```
图像文件: ADE_train_00000015.jpg
场景类型: indoor / living_room
分辨率: 1024x768
标注类别: wall(1), floor(2), sofa(41), table(49), lamp(95), window(2)
```

### 标注类型

1. **语义分割标注**：像素级类别标签，涵盖 150+ 物体和背景类别
2. **实例分割标注**：同类物体不同实例用不同颜色区分
3. **场景描述标注**：图像级场景类型描述（ indoor/outdoor, specific room type）
4. **属性标注**：包含物体属性如颜色、材质、状态等