# LVIS 大词汇量实例分割数据集

## 数据集简介

LVIS（Large Vocabulary Instance Segmentation）是由 Facebook AI Research（FAIR）发布的大规模实例分割基准数据集，专门设计用于评估具有大量物体类别的实例分割模型。与传统的实例分割数据集（如 COCO，仅 80 类）不同，LVIS 包含约 1200 个物体类别，涵盖了极其丰富的日常物体类型，从常见的电子产品、家具到特定的植物、动物品种等。数据集包含约 164,000 张图像和约 200 万个高质量实例分割掩码，所有标注均经过专业人员审核，确保了标注质量的一致性。LVIS 的核心挑战在于其长尾分布特性——大多数类别样本稀少，这使得模型需要在少样本条件下学会识别大量类别，对实例分割算法的泛化能力提出了更高要求。

## 相关链接

- **官网/论文链接**: https://www.lvisdataset.org
- **GitHub**: https://github.com/lvis-dataset/lvis-api
- **在线体验/Demo**: https://www.lvisdataset.org/benchmarks

## 相关论文

**论文标题**: LVIS: A Benchmark for Large Vocabulary Instance Segmentation  
**作者**: Agrim Gupta, Piotr Dollar, Ross Girshick  
**年份**: 2019  
**摘要**: LVIS 是一个大规模词汇实例分割基准数据集，包含 1200 多个物体类别的约 20 万张图像和 200 万个实例分割掩码。与现有数据集不同，LVIS 的类别遵循自然的长尾分布，每个类别的实例数量从数个到数千个不等。数据集设计了四种评估协议：全词汇识别、全词汇检测、段级别识别和零样本迁移，旨在全面评估模型在丰富词汇量下的实例分割能力。实验表明，最先进的检测器在 LVIS 上仍面临显著挑战，尤其是对稀有类别的识别。

## 数据示例

**数据格式说明**

LVIS 使用 COCO 格式存储标注数据：
- `images` - 图像元数据（id, file_name, width, height）
- `annotations` - 实例分割标注（id, image_id, category_id, segmentations, area, bbox, iscrowd）
- `categories` - 类别定义（id, name, supercategory）
- 分割使用多边形（polygon）或 RLE 格式编码

**真实样本**

```json
// 图像元数据
{
  "id": 234567,
  "file_name": "train/knit_knit_knit_0042.jpg",
  "width": 640,
  "height": 480,
  "license": 1,
  "coco_url": "http://images.cocodataset.org/train2017/00000234567.jpg"
}
```

```json
// 实例分割标注
{
  "id": 1234567,
  "image_id": 234567,
  "category_id": 1203,
  "segmentation": {
    "size": [480, 640],
    "counts": "...(RLE encoded mask)..."
  },
  "area": 12456.5,
  "bbox": [120, 80, 200, 150],
  "iscrowd": 0
}
```

```json
// 类别定义（部分）
{
  "categories": [
    {"id": 1, "name": "acorn", "supercategory": "food"},
    {"id": 2, "name": "apple", "supercategory": "food"},
    {"id": 3, "name": "backpack", "supercategory": "bag"},
    {"id": 1203, "name": "ruler", "supercategory": "office_supplies"},
    {"id": 1204, "name": "safety_pin", "supercategory": "office_supplies"}
  ]
}
```

```json
// 长尾分布统计
{
  "dataset_split": "train",
  "num_images": 97282,
  "num_categories": 1203,
  "instance_counts": {
    "total": 1960899,
    "per_category": {
      "max": 15470,      // bottle
      "median": 52,      // 中等频率类别
      "min": 4           // 稀有类别
    }
  },
  "frequency_buckets": {
    "frequent (>100)": 115,
    "common (20-100)": 292,
    "uncommon (5-20)": 446,
    "rare (<5)": 350
  }
}
```
