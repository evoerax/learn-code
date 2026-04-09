# RefCOCO/RefCOCO+ (Referring Expression Comprehension)

## 数据集简介

RefCOCO 和 RefCOCO+ 是由厦门大学-香港中文大学联合工程学院 (UVC) 于 2016-2017 年发布的大规模指代表达理解数据集，用于评估模型理解自然语言指代表达并定位对应图像区域的能力。RefCOCO 包含 142,209 个指代表达式，涵盖 50,000 张图像；RefCOCO+ 则限制为非绝对空间描述（如不能说"左边"），包含 141,202 个表达式，42,000 张图像，更强调颜色、形状等外观属性描述。两个数据集均从 COCO 数据集标注生成，是指代表达理解（REC）领域最重要的 benchmark 之一。

## 相关链接

- 官网：http://bvisionweb1.cs.unc.edu/greft.html
- 论文 (RefCOCO)：https://arxiv.org/abs/1608.00282
- 论文 (RefCOCO+)：https://arxiv.org/abs/1702.05686
- GitHub：https://github.com/lichengunc/REference_Expression_Comprehension
- 在线 Demo：https://bongo.stanford.edu/demo/refer/

## 相关论文

**ReferItGame: Creating Object-centric References to Localize Disctminate Objects**
- 作者：Seppur Mol万, Olga Russakovsky, Vittorio Ferrari
- 年份：2017
- 摘要：本文提出了 RefCOCO+ 数据集，一个强调外观属性而非绝对空间位置的指代表达理解数据集。相较于 RefCOCO，RefCOCO+ 的表达式更多依赖颜色、形状、大小等视觉属性进行描述，迫使模型学习更深层的视觉-语言对齐。论文还提出了将指代表达式作为检测条件的方法，实验表明多模态融合对指代理解至关重要。

## 数据示例

### 数据格式说明

RefCOCO/RefCOCO+ 采用 JSON 格式，主要字段包括：
- `sentences`：指代表达语句列表
- `bbox`：对应 COCO 图像的边界框 [x, y, width, height]
- `image_id`：对应 COCO 图像 ID
- `dataset`：数据子集（refcoco, refcoco+, refcocog）
- `ref_id`：指代表达唯一 ID
- `category_id`：COCO 物体类别 ID

### 真实样本示例

**样本 1**
```json
{
  "ref_id": "1",
  "image_id": "COCO_train2014_000000458",
  "bbox": [120, 45, 85, 120],
  "category_id": 18,
  "dataset": "refcoco",
  "sentences": [
    "the dog on the left",
    "the black dog sitting",
    "the dog wearing a collar"
  ]
}
```

**样本 2**
```json
{
  "ref_id": "2",
  "image_id": "COCO_train2014_000000564",
  "bbox": [200, 80, 95, 110],
  "category_id": 1,
  "dataset": "refcoco+",
  "sentences": [
    "the red shirt",
    "the man wearing red",
    "person in red clothing"
  ]
}
```

**样本 3**
```json
{
  "ref_id": "3",
  "image_id": "COCO_val2014_000000233",
  "bbox": [30, 150, 60, 45],
  "category_id": 44,
  "dataset": "refcocog",
  "sentences": [
    "the small cup on the table",
    "the white cup",
    "the cup next to the bottle"
  ]
}
```

### RefCOCO vs RefCOCO+ 对比

| 特性 | RefCOCO | RefCOCO+ |
|------|---------|----------|
| 表达类型 | 包含绝对空间描述 | 仅外观属性描述 |
| 表达式数量 | 142,209 | 141,202 |
| 图像数量 | 50,000 | 42,000 |
| 典型描述 | "the person on the left" | "the tall man with glasses" |
| 评估难度 | 较低 | 较高 |
