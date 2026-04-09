# Something-Something Version 2 (SS V2)

## 数据集简介

Something-Something V2 是由 TwentyBN 公司发布的大规模视频理解数据集，主要用于评估模型对因果关系和时间推理的理解能力。该数据集包含 220,847 个 2-6 秒的短视频片段，涵盖 174 种日常动作类别（如"把某物放到某物上"、"打开某物"等）。与 Kinetics-400 不同，Something-Something V2 强调的是动作的语义和因果关系，而非场景上下文。每个视频都有文本标签描述发生的动作，是当前视频推理领域最具挑战性的数据集之一。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1710.08016
- **GitHub**: https://github.com/TwentyBN/activitynet-rcnn
- **在线体验/Demo**: https://20bn.com/datasets/something-something

## 相关论文

**SSL: Self-Supervised Learning of Action Recognition**
- **作者**: Olga Khoroshko, Arjun Karpur, et al. (TwentyBN)
- **年份**: 2017
- **摘要**: Something-Something 数据集包含 108,499 个带有明确动作标签的短视频。该数据集的核心设计原则是标签应描述视频中发生的动作，而非场景或物体类别。例如标签"把某物放到某物上"描述的是动作本身，而非具体的物体或场景。这种设计使得数据集特别适合评估模型对因果关系和时间顺序的理解能力，推动了视频理解从场景识别向动作推理的转变。

## 数据示例

**数据格式说明**
数据集采用 JSONL 格式存储，每行包含一个视频的元数据：

```json
{"id": "something-something-v2-train-001", "template": "Putting something on a surface", "placeholders": ["a cup", "a table"], "label": 42}
```

视频文件以 .webm 格式存储，文件名为 `{id}.webm`。

**真实样本**

| ID | 模板 | 占位符 | 标签 |
|----|------|--------|------|
| something-something-v2-train-001 | Putting something on a surface | ["a cup", "a table"] | 42 |
| something-something-v2-train-002 | Lifting something with something | ["a bucket", "a rope"] | 87 |
| something-something-v2-train-003 | Turning something upside down | ["a bottle"] | 156 |

**模板示例（部分）**
- "Putting something on a surface"
- "Lifting something with something"
- "Turning something upside down"
- "Showing something to the camera"
- "Covering something with something"
