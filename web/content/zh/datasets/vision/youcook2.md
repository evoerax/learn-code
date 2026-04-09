# YouCook2

## 数据集简介

YouCook2 是一个大规模的视频片段描述数据集，专注于烹饪教学视频。该数据集包含从 YouTube 收集的 2,000 个未剪辑的视频，每个视频平均时长约 5 分钟，共标注了 14,705 个独立的烹饪步骤描述。YouCook2 由 IBM Research Asia 和 NVIDIA 的研究团队于 2018 年发布，是视频描述和时序定位任务的重要基准，推动了视频语言学习和视觉叙事理解的研究。

## 相关链接

- **官网/论文**: http://youcook2.eecs.umich.edu/
- **GitHub**: https://github.com/LAVITA-TUB/YouCook2-bounding-box
- **在线体验/Demo**: https://paperswithcode.com/dataset/youcook2

## 相关论文

**Title**: YouCook2: An Open-Cooking Guideline Graph Grounding Dataset

**Authors**: De-An Huang, Zhiding Yu, et al. (IBM Research Asia, NVIDIA)

**Year**: 2018

**Abstract**: YouCook2 is the first large-scale dataset for cooking video description with temporal annotations of cooking steps. It contains 2000 long videos from 89 recipes with 14705 annotated segments. Each segment is associated with a sentence description of the ongoing cooking action. This dataset presents unique challenges including diverse cooking actions, complex visual scenes, and varied camera work typical of user-generated cooking videos.

## 数据示例

### 数据格式说明

YouCook2 采用 JSON 格式存储，主要包含：
- `video_id`: YouTube 视频唯一标识符
- `recipe_type`: 菜谱类型（如"炒菜"、"汤类"等）
- `annotations`: 时序标注列表，每条包含：
  - `segment_id`: 片段编号
  - `start`: 开始时间（秒）
  - `end`: 结束时间（秒）
  - `description`: 烹饪步骤的文本描述

### 真实样本

**样本 1 - 炒菜步骤**:
```json
{
  "video_id": "8aq5zK7B1_U",
  "recipe_type": "stir_fry",
  "annotations": [
    {
      "segment_id": 1,
      "start": 0.0,
      "end": 12.5,
      "description": "First, cut the vegetables into bite-sized pieces"
    },
    {
      "segment_id": 2,
      "start": 12.5,
      "end": 28.0,
      "description": "Heat up the wok and add some oil"
    },
    {
      "segment_id": 3,
      "start": 28.0,
      "end": 45.0,
      "description": "Add garlic and ginger, stir-fry until fragrant"
    }
  ]
}
```

**样本 2 - 汤类制作**:
```json
{
  "video_id": "Y3J2K9i7wPQ",
  "recipe_type": "soup",
  "annotations": [
    {
      "segment_id": 1,
      "start": 0.0,
      "end": 18.0,
      "description": "Pour chicken broth into a large pot"
    },
    {
      "segment_id": 2,
      "start": 18.0,
      "end": 35.0,
      "description": "Add sliced mushrooms and bring to a boil"
    },
    {
      "segment_id": 3,
      "start": 35.0,
      "end": 55.0,
      "description": "Season with salt and white pepper to taste"
    }
  ]
}
```

**样本 3 - 烘焙步骤**:
```json
{
  "video_id": "7M2K3iJ8dRQ",
  "recipe_type": "baking",
  "annotations": [
    {
      "segment_id": 1,
      "start": 0.0,
      "end": 20.0,
      "description": "Preheat the oven to 350 degrees Fahrenheit"
    },
    {
      "segment_id": 2,
      "start": 20.0,
      "end": 45.0,
      "description": "Mix flour, sugar, and baking powder in a large bowl"
    },
    {
      "segment_id": 3,
      "start": 45.0,
      "end": 70.0,
      "description": "Gradually add wet ingredients and stir until smooth"
    }
  ]
}
```
