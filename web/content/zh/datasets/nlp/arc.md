# ARC (AI2 Reasoning Challenge)

## 数据集简介

ARC 是由艾伦人工智能研究所（AI2）于 2018 年发布的大规模科学推理基准数据集，旨在评估机器阅读理解和对齐人类水平科学知识的能力。该数据集包含约 7,787 道多项选择题，题目来自 3-9 年级科学考试，涵盖物理、化学、生物、地球科学等学科领域。所有问题都需要进行多步推理才能得出答案，简单的关键词匹配无法正确解答。ARC Challenge 子集包含 2,590 道较难的问题，被视为比普通科学问答更具挑战性的推理任务。

## 相关链接

- 官网：https://allenai.org/data/arc
- 论文：https://arxiv.org/abs/1803.05457
- Hugging Face：https://huggingface.co/datasets/ai2_arc
- GitHub：https://github.com/allenai/arc-causal-Effect

## 相关论文

**Think you have Solved Question Answering? Try ARC, the AI2 Reasoning Challenge**
- 作者：Peter Clark, Isaac Cowhey, Oren Etzioni, Tushar Khot, Ashish Sabharwal, Carissa Schoenick, Oyvind Tafjord
- 年份：2018
- 摘要：本文介绍了 ARC 数据集，一个包含 7,787 道科学选择题的推理挑战。不同于简单的事实检索任务，ARC 要求模型具备真正的科学理解和多步推理能力。论文分析了现有最佳模型（如 Bert-based）在该数据集上的表现约为 60%，远低于人类 90% 的水平，表明科学推理仍是 AI 的重大挑战。数据集按难度分为 Challenge（较难）和 Easy 两个子集。

## 数据示例

### 数据格式说明

每条数据包含：
- `id`：唯一标识符
- `question`：问题文本
- `choices`：选项列表（含文本和标签）
- `answerKey`：正确答案标签
- `science_constants`：相关科学常数（部分题目有）

### 真实样本示例

**样本 1 - 物理**
```json
{
  "id": "ARC001",
  "question": "A student rolls a ball down a hill. Which statement best explains why the ball accelerates?",
  "choices": [
    {"label": "A", "text": "Gravity exerts a force on the ball"},
    {"label": "B", "text": "The ball has less mass than the hill"},
    {"label": "C", "text": "The hill is steeper than the ball"},
    {"label": "D", "text": "The ball is round"}
  ],
  "answerKey": "A",
  "category": "Physics"
}
```

**样本 2 - 生物**
```json
{
  "id": "ARC042",
  "question": "Which structure in a plant cell converts light energy into chemical energy?",
  "choices": [
    {"label": "A", "text": "Cell wall"},
    {"label": "B", "text": "Chloroplast"},
    {"label": "C", "text": "Nucleus"},
    "label": "D", "text": "Mitochondria"}
  ],
  "answerKey": "B",
  "category": "Biology"
}
```

**样本 3 - 化学**
```json
{
  "id": "ARC115",
  "question": "When vinegar is added to baking soda, a gas is produced. What type of change is this?",
  "choices": [
    {"label": "A", "text": "Physical change"},
    {"label": "B", "text": "Chemical change"},
    {"label": "C", "text": "Nuclear change"},
    {"label": "D", "text": "Phase change"}
  ],
  "answerKey": "B",
  "category": "Chemistry"
}
```
