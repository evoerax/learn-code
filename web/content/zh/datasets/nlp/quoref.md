# Quoref

## 数据集简介

Quoref 是由 Allen Institute for AI (AI2) 于 2019 年发布的阅读理解数据集，专注于评测模型对文本中代词指代关系（指代消解）的理解能力。该数据集包含约 15,000 个问答对，文本来源为维基百科文章，每个问题都需要识别文本中特定 span 之间的指代关系才能正确回答。与传统阅读理解任务不同，Quoref 要求模型理解代词和其指代对象之间的语义关联，这对于评估模型的细粒度语言理解能力具有重要意义。Quoref 的设计基于这样的观察：现有的阅读理解数据集可以通过简单的词汇匹配或局部上下文获取答案，而指代消解需要更深入的话语层面的理解。

## 相关链接

- 官网：https://quoref.ai/
- 论文：https://arxiv.org/abs/1906.02917
- GitHub：https://github.com/allenai/quoref
- 在线体验：https://quoref.ai/leaderboard

## 相关论文

**Quoref: A Reading Comprehension Dataset with Coherence Required for Implicit Referents**
- 作者：Pradeep Dasigi, Nelson F. Liu, Ana Marasovic, Noah A. Smith, Malihe Alikhani
- 年份：2019
- 摘要：本文介绍了 Quoref 数据集的构建方法和特点。该数据集包含 15K 个需要指代消解的问答对，文本来自维基百科，需要模型理解代词与隐含指代对象之间的关系。论文评估了现有阅读理解模型在该数据集上的表现，发现即使是 BERT 等强模型也难以完全解决指代消解问题。

**Breaking at the Boundary: Fine-grained Evaluation of Span-Referring Expressions**
- 作者：Vivek Srikumar, members of AI2
- 年份：2019
- 摘要：本文深入分析了 Quoref 数据集中指代表达的类型和特点，将其分为显式指代和隐式指代两类。研究发现，隐式指代消解是模型面临的主要挑战，为未来指代消解研究提供了重要的理论框架。

## 数据示例

### 数据格式说明

Quoref 数据采用 JSON 格式存储，主要字段：
- **context**：原始文本段落
- **question**：需要指代消解的问题
- **answers**：答案 span（start/end 位置）
- **id**：唯一标识符
- **url**：文本来源 URL

```json
{
  "id": "0",
  "url": "https://en.wikipedia.org/wiki/Albert_Einstein",
  "context": "Albert Einstein was a German-born theoretical physicist...",
  "question": "Who developed the theory of relativity?",
  "answers": [{"text": "Albert Einstein", "start": 0}]
}
```

### 真实样本示例

**样本 1 - 指代消解**
```json
{
  "id": "train_0",
  "context": "Marie Curie was born in Warsaw. In 1883, she graduated from schools in Warsaw. She moved to Paris in 1891. There she met Pierre Curie, whom she married in 1895.",
  "question": "In what year did she meet Pierre Curie?",
  "answers": [{"text": "1895", "start": 156}]
}
```

**样本 2 - 隐式指代**
```json
{
  "id": "val_23",
  "context": "The Apollo 11 mission landed on the Moon on July 20, 1969. The astronauts spent about two and a half hours outside the spacecraft. They collected samples and took photographs.",
  "question": "How long did they stay outside the spacecraft?",
  "answers": [{"text": "about two and a half hours", "start": 89}]
}
```

**样本 3 - 多重指代**
```json
{
  "id": "train_56",
  "context": "Shakespeare wrote Romeo and Juliet in 1597. It became one of his most famous plays. Many films have been adapted from it over the years.",
  "question": "What has been adapted into many films?",
  "answers": [{"text": "Romeo and Juliet", "start": 17}]
}
```

### 标注类型

1. **指代关系标注**：标注代词与指代对象的关系
2. **span 答案标注**：答案在原文中的起始和结束位置
3. **隐含指代标注**：识别隐式指代关系（如时间、地点省略）
4. **共指链标注**：同一实体的多个提及构成共指链