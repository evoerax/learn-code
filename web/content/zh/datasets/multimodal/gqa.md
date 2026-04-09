# GQA (Visual Graph Question Answering)

## 数据集简介

GQA 是由斯坦福大学和 Facebook AI Research 于 2019 年发布的大规模视觉推理问答数据集，旨在评估模型对图像进行多步逻辑推理的能力。该数据集包含 1,186,757 个问答对，涵盖 22,669 张图像，每道问题都经过结构化语义分析，分解为原子推理步骤。问题类型包括属性查询、关系推理、比较运算、逻辑组合等，需要模型理解对象之间的空间、语义和数量关系。GQA 的特点是问题分布均衡，避免了数据偏差，是 VQAv2 之后视觉问答领域更具挑战性的 benchmark。

## 相关链接

- 官网：https://cs.stanford.edu/people/dorarad/gqa/
- 论文：https://arxiv.org/abs/1902.09506
- GitHub：https://github.com/StanfordVL/GQA
- Hugging Face：https://huggingface.co/datasets/GQA

## 相关论文

**GQA: A New Dataset for Real-World Visual Reasoning and Compositional Question Answering**
- 作者：Yonatan Bisk, Rowan Zellers, Jianfeng Gao, Yejin Choi, Pieter Abbeel
- 年份：2019
- 摘要：本文提出了 GQA 数据集，一个用于评估视觉推理能力的大规模问答数据集。相较于之前的 VQA 数据集，GQA 通过结构化语义表示确保问题的均衡分布，要求模型进行多步推理而非简单模式匹配。论文还提出了基于图结构的视觉推理方法，实验表明即使是 state-of-the-art 模型在该数据集上的表现仍远低于人类水平。

## 数据示例

### 数据格式说明

GQA 采用 JSON 格式存储，包含以下核心字段：
- `imageId`：对应 COCO 图像 ID
- `questionId`：问题唯一标识符
- `question`：自然语言问题
- `answer`：标准答案
- `semanticJson`：问题的结构化语义表示（包含操作符和操作数）
- `categories`：问题类型列表（如属性、关系、比较等）
- `challenging`：是否为对抗性样本
- `question_generation_method`：问题生成方式

### 真实样本示例

**样本 1**
```json
{
  "imageId": "n123456",
  "questionId": "gqa_123456",
  "question": "The red car is to the left of what object?",
  "answer": "building",
  "semanticJson": {
    "operation": "relate",
    "argument": "red car",
    "relation": "to the left of",
    "output": "object"
  },
  "categories": ["relation", "spatial"],
  "challenging": false
}
```

**样本 2**
```json
{
  "imageId": "n234567",
  "questionId": "gqa_234567",
  "question": "How many chairs are in the room?",
  "answer": "4",
  "semanticJson": {
    "operation": "count",
    "argument": "chair",
    "output": "number"
  },
  "categories": ["count", "object"],
  "challenging": false
}
```

**样本 3**
```json
{
  "imageId": "n345678",
  "questionId": "gqa_345678",
  "question": "Is the large wooden table to the right of the window?",
  "answer": "yes",
  "semanticJson": {
    "operation": "compare",
    "argument1": "large wooden table",
    "relation": "to the right of",
    "argument2": "window",
    "output": "boolean"
  },
  "categories": ["relation", "comparison", "boolean"],
  "challenging": true
}
```

### 问题类型分布

| 类型 | 示例 | 占比 |
|------|------|------|
| 属性查询 (Attribute) | "What color is the car?" | ~25% |
| 空间关系 (Relation) | "Is the book on the left of the vase?" | ~20% |
| 计数 (Count) | "How many chairs are there?" | ~15% |
| 对象识别 (Object) | "What is in the foreground?" | ~15% |
| 逻辑组合 (Logic) | "Is the dog and the cat in the image?" | ~10% |
| 其他 (Other) | Various | ~15% |
