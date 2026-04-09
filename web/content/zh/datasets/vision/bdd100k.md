# BDD100K

## 数据集简介

BDD100K（Berkeley DeepDrive Dataset）是伯克利大学发布的最大规模的自动驾驶开源数据集之一。该数据集包含10万个驾驶视频，总时长超过1000小时，视频来自美国多个城市的 diverse 天气和路况条件。BDD100K 是首个支持多任务的大规模自动驾驶数据集，同时支持目标检测、车道线检测、可行驶区域分割、道路属性识别、语义分割、实例分割和多目标追踪等10项核心任务。数据集由 Berkeley AI Research (BAIR) 实验室于2018年发布，旨在促进自动驾驶感知算法的研究与发展。

## 相关链接

- **官网/论文**: https://bdd-data.berkeley.edu/ | https://arxiv.org/abs/1805.04687
- **GitHub**: https://github.com/bdd100k/bdd100k
- **在线体验/Demo**: https://bdd-data.berkeley.edu/

## 相关论文

**BDD100K: A Large-scale Diverse Driving Video Database**

- **作者**: Yu, Fisher and Chen, Haofeng and Wang, Xin and Xian, Wenqi and Chen, Yingying and Liu, Fangchen and Madhavan, Vashisht and Darrell, Trevor
- **年份**: 2018
- **摘要**: BDD100K是首个也是最大的大规模、多样化的开源驾驶视频数据集，包含10万个视频和10个任务标注。我们构建了这个数据集来支持可控条件下的海量数据训练，并首次在数据集上评估了车道检测和道路可行驶区域分割等任务的深度学习方法。

## 数据示例

### 数据格式说明

BDD100K 使用 JSON 格式存储视频元数据，每个视频包含：
- `name`: 视频文件名
- `attributes`: 驾驶场景属性（天气、时间、地理位置等）
- `labels`: 目标框、车道线、可行驶区域等多任务标注

### 真实样本

```json
{
  "name": "b1a2c3d4e5f6",
  "attributes": {
    "weather": "clear",
    "timeofday": "daytime",
    "location": "new-york"
  },
  "labels": [
    {
      "category": "car",
      "box2d": {"x1": 100, "y1": 200, "x2": 300, "y2": 350},
      "id": "c001"
    },
    {
      "category": "pedestrian",
      "box2d": {"x1": 450, "y1": 300, "x2": 480, "y2": 400},
      "id": "p001"
    }
  ]
}
```

```json
{
  "name": "g7h8i9j0k1l2",
  "attributes": {
    "weather": "rainy",
    "timeofday": "night",
    "location": "san-francisco"
  },
  "labels": [
    {
      "category": "truck",
      "box2d": {"x1": 200, "y1": 180, "x2": 500, "y2": 400},
      "id": "t001"
    }
  ]
}
```

### 车道线标注示例

```json
{
  "name": "m3n4o5p6q7r8",
  "labels": [
    {
      "category": "lane",
      "poly2d": [
        {"x": 640, "y": 360}, {"x": 650, "y": 400}, {"x": 660, "y": 480}
      ],
      "attributes": {"lane_type": "drivable"}
    }
  ]
}
```
