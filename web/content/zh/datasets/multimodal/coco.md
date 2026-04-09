# COCO (Common Objects in Context)

## 数据集简介

COCO 是微软发起创建的大规模目标检测、分割和图像描述数据集，自 2014 年发布以来已成为计算机视觉领域最具影响力的基准之一。该数据集主要包含日常复杂场景中的物体图像，涵盖了 80 个物体类别和超过 33 万张图像。COCO 提供多任务标注，包括目标检测边界框、实例分割、关键点检测、图像描述等复杂标注。COCO 数据集的特点是场景复杂、物体密集、遮挡较多，更贴近真实世界，因而对模型的泛化能力要求更高。该数据集每年举办挑战赛，推动了目标检测和实例分割等技术的快速发展。

## 相关链接

- 官网：https://cocodataset.org/
- 论文：https://arxiv.org/abs/1405.0312
- GitHub：https://github.com/cocodataset/cocoapi
- 在线体验：https://cocodataset.org/#explore

## 相关论文

**Microsoft COCO: Common Objects in Context**
- 作者：Tsung-Yi Lin, Michael Maire, Serge Belongie, Lubomir Bourdev, Ross Girshick, James Hays, Pietro Perona, Deva Ramanan, Andrew Zisserman, Lawrence Zitnick, Pietro Dollár
- 年份：2014（ ECCV）
- 摘要：本文介绍了 COCO 数据集的设计和标注流程。COCO 的创新之处在于场景复杂度高、物体密集、存在遮挡，填补了之前数据集过于简单的空白。数据集支持目标检测、实例分割、关键点检测、图像描述等多任务，是评估视觉理解系统的重要基准。

## 数据示例

### 数据格式说明

COCO 数据集主要标注格式：
- `images`：图像元信息（id, file_name, width, height）
- `annotations`：目标标注（id, image_id, category_id, bbox, segmentation, iscrowd）
- `categories`：类别信息（id, name, supercategory）

### 真实样本示例

**样本 1 - 目标检测与实例分割**
```json
{
  "image_id": 459214,
  "originalImageWidth": 640,
  "originalImageHeight": 428,
  "categories": ["car", "bicycle"],
  "annotations": [
    {
      "id": 1,
      "category_id": 3,  // car
      "bbox": [150, 180, 200, 150],  // [x, y, width, height]
      "segmentation": [[x1,y1,x2,y2,...]],  // 多边形点
      "iscrowd": 0
    },
    {
      "id": 2,
      "category_id": 2,  // bicycle
      "bbox": [200, 200, 100, 80],
      "segmentation": [[x1,y1,x2,y2,...]],
      "iscrowd": 0
    }
  ]
}
```

**样本 2 - 图像描述**
```json
{
  "image_id": 123456,
  "captions": [
    "A person riding a bicycle on a city street.",
    "Someone cycling past a row of parked cars.",
    "A man on a bike passing by buildings."
  ]
}
```

**样本 3 - 关键点检测（人体姿态）**
```json
{
  "image_id": 789012,
  "annotations": [
    {
      "id": 100,
      "category_id": 1,  // person
      "keypoints": [x1,y1,v1, x2,y2,v2, ...],  // 17个关键点
      "num_keypoints": 17,
      "bbox": [50, 100, 180, 400]
    }
  ]
}
```

### COCO 类别列表（部分）

| ID | 类别名称 | ID | 类别名称 |
|----|---------|----|---------|
| 1  | person  | 17 | cat      |
| 2  | bicycle | 18 | dog      |
| 3  | car     | 19 | horse    |
| 4  | motorcycle | 20 | bag    |
| 5  | airplane | 44 | bottle   |
| 16 | zebra   | 47 | cup      |
