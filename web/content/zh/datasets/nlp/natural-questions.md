# Natural Questions (NQ)

## 数据集简介

Natural Questions 是由 Google Brain 团队于 2019 年发布的大规模真实问答数据集，旨在推动端到端问答系统研究。与传统从维基百科构建的问答数据集不同，Natural Questions 的问题和答案均来源于真实用户查询，数据规模为 30 万个匿名化聚合问题，每个问题附带 5 名众包工人的标注答案。该数据集包含长答案（段落或表格）和短答案（实体或日期）两种类型，并引入了"无法回答"问题，使任务更具挑战性。Natural Questions 推动了闭卷问答和开放域问答技术的发展，是 Google 自然语言处理研究的核心基准之一。

## 相关链接

- 官网：https://ai.google.com/research/NaturalQuestions
- 论文：https://arxiv.org/abs/1911.09208
- Hugging Face：https://huggingface.co/datasets/natural_questions
- GitHub：https://github.com/google-research/google-research/tree/master/natural_questions

## 相关论文

**Natural Questions: A Benchmark for Question Answering Research**
- 作者：Tom Kwiatkowski, Jennimaria Palomaki, Olivia Redfield, Michael Collins, Ankur Parikh, Chris Alberti, Danielle Epstein, Illia Polosukhin, Matthew Kelcey, Jacob Devlin, Kenton Lee, Kristina N. Toutanova, Llion Jones, Ming-Wei Chang, Andrew Dai, Jakob Uszkoreit, Quoc Le, Chris Sutton
- 年份：2019
- 摘要：本文介绍了 Natural Questions 数据集的构建过程和特点。数据集来源于真实用户对 Google 搜索的查询，通过众包方式标注长答案和短答案。该数据集的挑战在于需要模型理解复杂开放式问题，并从长文档中提取精确答案，是评估真实世界问答系统的重要基准。

**Latent Retrieval for Large-Scale Question Answering**
- 作者：Julian Martin Eisenschlos, Syrine Krichene, Thomas Müller, Alexander Matunas
- 年份：2020
- 摘要：本文研究了 Natural Questions 数据集上端到端问答系统的隐式检索方法。论文探索了联合学习检索和阅读理解的可行性，展示了在不依赖预定义 Wikipedia 语料库的情况下，如何通过隐式检索提升开放域问答性能。

## 数据示例

### 数据格式说明

每条数据包含：
- `question`：用户问题（文本）
- `question_tokens`：问题分词结果
- `annotations`：标注信息列表
  - `long_answer`：长答案（段落或表格范围，含起始/结束位置）
  - `short_answers`：短答案列表（实体级别）
  - `yes_no_answer`：是否可回答（YES/NO/NONE）
- `document`：对应的 Wikipedia 页面（含 URL 和 HTML 内容）

### 真实样本示例

**样本 1**
```json
{
  "question": "who built the statue of liberty",
  "annotations": [
    {
      "long_answer": {
        "start_byte": 18230,
        "end_byte": 19380,
        "start_token": 461,
        "end_token": 487,
        "candidate_index": 15,
        "containing_instruction": 0
      },
      "short_answers": [
        {
          "start_token": 463,
          "end_token": 467,
          "text": "Frédéric Auguste Bartholdi"
        }
      ],
      "yes_no_answer": "NONE"
    }
  ],
  "document": {
    "title": "Statue of Liberty",
    "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty"
  }
}
```

**样本 2**
```json
{
  "question": "how many people visit the grand canyon each year",
  "annotations": [
    {
      "long_answer": {...},
      "short_answers": [
        {
          "start_token": 230,
          "end_token": 232,
          "text": "about six million"
        }
      ],
      "yes_no_answer": "NONE"
    }
  ]
}
```

**样本 3 - 无法回答问题**
```json
{
  "question": "what is the opposite of a shark",
  "annotations": [
    {
      "long_answer": {"start_token": -1, "end_token": -1},
      "short_answers": [],
      "yes_no_answer": "NONE"
    }
  ]
}
```

### 标注类型

1. **长答案**：段落、表格或列表形式，需判断是否可回答
2. **短答案**：实体、人名、日期、数量等简短信息
3. **是否可回答**：YES/NO/NONE 三值标签
4. **无答案标注**：long_answer 和 short_answers 均为空表示无法回答
