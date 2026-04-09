# DROP (Discrete Reasoning Over Paragraphs)

## 数据集简介

DROP 是由 AI2（Allen Institute for AI）于 2019 年发布的阅读理解数据集，专门用于评估模型的离散推理能力。与传统阅读理解任务不同，DROP 要求模型对段落内容进行加、减、乘、除等数值运算，以及计数、排序等离散操作来回答问题。该数据集包含 96,567 个问题，基于 Wikipedia 和其他来源的段落构建，每道题都需要多步推理而非简单的事实检索。DROP 已成为评估语言模型高级推理能力的重要基准。

## 相关链接

- 官网：https://allenai.org/data/drop
- 论文：https://arxiv.org/abs/1903.00161
- GitHub：https://github.com/allenai/drop
- Hugging Face：https://huggingface.co/datasets/drop

## 相关论文

**DROP: A Reading Comprehension Benchmark Requiring Discrete Reasoning Over Paragraphs**
- 作者：Dheeru Dua, Yizhong Wang, Paul Gastin, Sameer Singh
- 年份：2019
- 摘要：本文介绍了 DROP 数据集的设计原则。该数据集要求模型对段落内容进行离散的数值推理操作（加法、计数、比较等），而非简单的文本匹配或抽取。实验表明，即使 BERT 等预训练模型在该数据集上的表现也远逊于人类，揭示了 NLP 模型在数值推理方面的局限性。

## 数据示例

### 数据格式说明

每条数据包含：
- `id`：唯一标识符
- `passage`：上下文段落
- `question`：需要推理的问题
- `answer`：答案（数字或文本）

### 真实样本示例

**样本 1 - 计数问题**
```json
{
  "passage": "In the 2019 NBA Finals, the Golden State Warriors defeated the Toronto Raptors 4-2. The Warriors had 3 home games and the Raptors had 2 home games in the series.",
  "question": "How many home games were played in total?",
  "answer": "5"
}
```

**样本 2 - 减法/比较问题**
```json
{
  "passage": "Apple released iPhone 11 in 2019 with a 3110 mAh battery. Samsung Galaxy S10 was released in 2019 with a 3400 mAh battery.",
  "question": "How much larger is the Samsung battery compared to the iPhone battery in mAh?",
  "answer": "290"
}
```

**样本 3 - 日期计算问题**
```json
{
  "passage": "The construction of the Empire State Building started on March 17, 1930 and was completed on May 1, 1931. The building has 102 floors.",
  "question": "How many days did it take to build the Empire State Building?",
  "answer": "2765"
}
```
