# GLUE (General Language Understanding Evaluation)

## 数据集简介

GLUE 是由纽约大学（NYU）于 2018 年发布的大规模自然语言理解基准测试，旨在评估预训练语言模型在不同 NLP 任务上的泛化能力。GLUE 包含 9 个子任务，涵盖文本蕴含、情感分析、语义相似度、问答等多个自然语言理解维度，汇总为一个综合评分。数据集总规模约 40 万条训练数据。该基准测试是 BERT、GPT 等预训练模型公平比较的标准平台，推动了 NLP 领域预训练-微调范式的发展。2019 年后已升级为 SuperGLUE，引入更具挑战性的任务。

## 相关链接

- 官网：https://nyu-mll.github.io/GLUE/
- 论文：https://arxiv.org/abs/1804.07461
- GitHub：https://github.com/nyu-mll/jiant
- Hugging Face：https://huggingface.co/datasets/glue
- 在线体验：https://goo.gl/QQXL8q

## 相关论文

**GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding**
- 作者：Alex Wang, Yada Pruksachatkun, Nikita Nangia, et al.
- 年份：2018
- 摘要：本文介绍了 GLUE 基准测试的设计初衷和构成。GLUE 收集了 9 个公开的 NLP 数据集，涵盖多样化的任务类型和难度，旨在为预训练语言模型提供标准化评估平台。论文还详细分析了当时各模型在 GLUE 上的表现，发现即使最强模型也远未达到人类水平。

**SuperGLUE: A Stickier Benchmark for Pre-trained Language Models**
- 作者：Alex Wang, Yada Pruksachatkun, Nikita Nangia, et al.
- 年份：2019
- 摘要：本文介绍了 SuperGLUE，是 GLUE 的升级版本，引入了两个更具挑战性的理解任务：阅读理解问答（ReCoRD）和自然语言推理（NLI）的更复杂变体。SuperGLUE 专门设计用于在 GPT、BERT 等模型上达到甚至超越人类表现。

## 数据示例

### 数据格式说明

GLUE 包含 9 个子任务，各有不同数据格式：

| 任务 | 任务类型 | 规模 |
|------|----------|------|
| MNLI | 文本蕴含 | 393K 训练对 |
| QQP | 语义等价 | 364K 训练对 |
| QNLI | 问答推理 | 108K 训练对 |
| SST-2 | 情感分析 | 67K 训练句 |
| CoLA | 语法接受 | 8.5K 训练句 |
| STS-B | 语义相似度 | 7K 训练对 |
| MRPC | 语义等价 | 3.7K 训练对 |
| RTE | 文本蕴含 | 2.5K 训练对 |
| WNLI | 代词消解 | 634 训练对 |

### 真实样本示例

**样本 1 - MNLI（文本蕴含）**
```json
{
  "premise": "The dog is barking in the yard.",
  "hypothesis": "There is an animal making noise outside.",
  "label": "entailment"
}
```

**样本 2 - SST-2（情感分析）**
```json
{
  "sentence": "This movie is absolutely terrible and boring.",
  "label": "negative"
}
```

**样本 3 - QQP（问题等价）**
```json
{
  "question1": "How do I lose weight quickly?",
  "question2": "What is the fastest way to lose weight?",
  "label": 1
}
```

### 标注类型

1. **文本蕴含标签**：entailment、neutral、contradiction
2. **二分类标签**：positive/negative、same/not_same
3. **相似度分数**：0-5 的连续分数（STS-B）
4. **语法接受度**：acceptable/unacceptable（CoLA）