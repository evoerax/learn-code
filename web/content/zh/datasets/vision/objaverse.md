# Objaverse

## 数据集简介

Objaverse 是由 Google Research 发布的大规模 3D 物体数据集，包含约 800K 个3D 模型，每个模型附带文本描述、材质属性、功能标签等信息。该数据集通过结合来自 Sketchfab、TF3DM 等平台的 3D 资源，并经过严格的质量筛选和标准化处理而构建。Objaverse 的规模是此前类似数据集（如 ShapeNet）的 10 倍以上，类别涵盖家具、动物、工具、车辆等日常生活中的各类物体。其设计重点在于为 3D 视觉理解、神经辐射场（NeRF）训练、3D 生成模型等研究提供丰富的多模态 3D 数据支持。

## 相关链接

- 官网：https://objaverse.allenai.org
- 论文：https://arxiv.org/abs/2212.07130
- GitHub：https://github.com/allenai/objaverse
- 在线体验：https://objaverse.allenai.org/explore

## 相关论文

**论文标题：** Objaverse: A Large Scale Dataset of Objects with Semantic Tags, Surface Properties, and Tool Attachments

**作者：** Matt Deitke, Dustin Schwenk, Jordi Salvador, et al. (Allen Institute for AI)

**年份：** 2022

**摘要：** Objaverse 通过整合多个 3D 平台数据构建了包含 800K+ 模型的超大规模数据集，每模型附带语义标签、表面属性和工具附件信息。论文详细阐述了数据采集、清洗、质量评估流程，并展示了该数据集在 3D 物体分类、表面法线预测、NeRF 训练等任务中的广泛应用潜力，为 3D 深度学习研究提供了重要的数据基础设施。

## 数据示例

### 数据格式说明

Objaverse 数据以 JSON/JSONL 格式存储，每行包含一个 3D 模型的元数据：

```json
{
  "uid": "objaverse_unique_id",
  "name": "wooden_chair",
  "aliases": ["chair", "dining_chair"],
  "tags": ["furniture", "seating", "indoor"],
  "description": "A wooden dining chair with four legs and a backrest",
  "material": "wood",
  "color": ["brown", "tan"],
  "weight_category": "medium",
  "has_texture": true,
  "has_physics": true,
  "vertices_count": 15432,
  "faces_count": 28904,
  "source": "sketchfab",
  "license": "CC-BY",
  "view_href": "https://api.sketchfab.com/models/...",
  "download_url": "https://.objaverse.allenai.org/..."
}
```

### 真实样本

**样例 1 - 家具类:**

```json
{
  "uid": "d6f2b8c3-...",
  "name": "office_chair_black",
  "aliases": ["executive_chair", "desk_chair"],
  "tags": ["furniture", "seating", "office", "ergonomic"],
  "description": "Black leather office chair with adjustable height, armrests, and wheeled base",
  "material": "leather/metal",
  "weight_category": "heavy",
  "vertices_count": 45230,
  "faces_count": 38910
}
```

**样例 2 - 动物类:**

```json
{
  "uid": "a1b2c3d4-...",
  "name": "sitting_cat",
  "aliases": ["house_cat", "felis_catus"],
  "tags": ["animal", "pet", "mammal", "domestic"],
  "description": "3D model of a sitting domestic cat, alert pose",
  "material": "fur/mesh",
  "weight_category": "light",
  "vertices_count": 28450,
  "faces_count": 24680
}
```

**样例 3 - 交通工具类:**

```json
{
  "uid": "x7y8z9w1-...",
  "name": "sport_car_red",
  "aliases": ["sports_car", "convertible"],
  "tags": ["vehicle", "car", "transportation", "sports"],
  "description": "Red sports car model with two doors, aerodynamic design",
  "material": "metal/paint",
  "weight_category": "heavy",
  "vertices_count": 128340,
  "faces_count": 95420
}
```
