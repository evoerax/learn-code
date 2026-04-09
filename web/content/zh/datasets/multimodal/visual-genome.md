# Visual Genome

## 数据集简介

Visual Genome 是一个大规模视觉问答和场景图谱数据集，包含 108,249 张图像，拥有超过 170 万个视觉关系注释和 390 万个问答对。该数据集由 Stanford AI Lab 和 VM Labs 于 2017 年联合发布，其独特之处在于提供场景图谱（scene graph）表示，将图像中的物体、属性和关系以结构化图谱形式组织。Visual Genome 深度融合了物体识别、属性感知和关系推理，是视觉语言理解和多模态推理研究的重要资源。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网 | https://visualgenome.org/ |
| 论文 | https://arxiv.org/abs/1602.07332 |
| GitHub | https://github.com/VG/specslow/ |

## 相关论文

**CVPR 2017**

**Title:** Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations

**Authors:** Ranjay Krishna, Yuke Zhu, Oliver Groth, Justin Johnson, Kenji Hata, Joshua Kravitz, Stephanie Chen, Yannis Kalantidis, Li-Jia Li, David A. Shamma, Michael S. Bernstein, Fei-Fei Li

**Abstract:** 介绍 Visual Genome 数据集，包含 108K 图像、4.2M 区域描述、3.8M 问答对和 1.7M 关系三元组。通过众包方式标注场景图谱，连接视觉内容和语言描述，为视觉推理提供丰富的结构化数据。

## 数据示例

### 数据格式说明

Visual Genome 数据以 JSON 格式存储，包含图像元数据、对象区域、关系三元组、描述短语和问答对等字段。

### 真实样本

**样本 1 - 场景图谱:**
```json
{
  "image_id": "2539464",
  "width": 1024,
  "height": 768,
  "objects": [
    {"object_id": 1, "name": "man", "x": 120, "y": 80, "w": 60, "h": 150},
    {"object_id": 2, "name": "ski", "x": 130, "y": 220, "w": 80, "h": 20},
    {"object_id": 3, "name": "snow", "x": 0, "y": 400, "w": 1024, "h": 368}
  ],
  "relationships": [
    {"subject_id": 1, "predicate": "on", "object_id": 2},
    {"subject_id": 2, "predicate": "on", "object_id": 3},
    {"subject_id": 1, "predicate": "wearing", "object_id": 4}
  ]
}
```

**样本 2 - 区域描述:**
```json
{
  "image_id": "2539464",
  "region_descriptions": [
    {"region_id": 1, "x": 100, "y": 50, "w": 100, "h": 180, "phrase": "man wearing red jacket"},
    {"region_id": 2, "x": 200, "y": 300, "w": 300, "h": 200, "phrase": "white snowy mountain"},
    {"region_id": 3, "x": 50, "y": 400, "w": 150, "h": 100, "phrase": "wooden fence"}
  ]
}
```

**样本 3 - 问答对:**
```json
{
  "image_id": "2539464",
  "qas": [
    {
      "question_id": 1,
      "question": "What is the man doing?",
      "answer": "skiing",
      "answer_type": "multiple choice"
    },
    {
      "question_id": 2,
      "question": "What color is the jacket?",
      "answer": "red",
      "answer_type": "free form"
    },
    {
      "question_id": 3,
      "question": "Where is the snow located?",
      "answer": "bottom of image",
      "answer_type": "free form"
    }
  ]
}
```

### 统计信息

| 指标 | 数值 |
|------|------|
| 图像数量 | 108,249 |
| 对象类别 | 75,729 |
| 关系类型 | 40,480 |
| 关系三元组 | 1,709,617 |
| 区域描述 | 4,242,015 |
| 问答对 | 3,864,779 |
| 发布机构 | Stanford AI Lab + VM Labs |
| 发布时间 | 2017 |
