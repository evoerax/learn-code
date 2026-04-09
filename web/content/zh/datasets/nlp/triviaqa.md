# TriviaQA

## 数据集简介

TriviaQA 是华盛顿大学和 Allen AI 于 2017 年发布的阅读理解数据集，包含约 95K 个 trivia 问题及其答案，每个问题配有从维基百科和网络来源收集的证据文档。与 SQuAD 等纯Wikipedia数据不同，TriviaQA 的问题来自独立撰写的 trivia 问题集，答案更加多样化，证据文档则来自网页和维基百科的混合来源。该数据集需要模型具备从长文档中查找和综合信息的能力，是评估开放域问答系统的重要基准。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1705.03551
- **GitHub**: https://github.com/jonherlocker/triviaqa
- **数据集下载**: http://nlp.cs.washington.edu/triviaqa/

## 相关论文

**TriviaQA: A Large Scale Distantly Supervised Challenge Dataset for Reading Comprehension**

- **作者**: Mandar Joshi, Eunsol Choi, Daniel S. Weld, Luke Zettlemoyer
- **年份**: 2017
- **摘要**: TriviaQA 提出了一种远程监督阅读理解数据集，包含 95K+ question-answer evidence document 三元组。问题来自 trivia 问题网站，答案可从证据文档中提取或推断得到。实验表明，即使使用大规模 LSTM 和注意力机制的最新模型，在该数据集上的表现也明显低于人类基准，揭示了远程监督问答任务的挑战性。

## 数据示例

### 数据格式说明

TriviaQA 数据为 JSON 格式，包含 question、answer 和 evidence（web_docs 或 wikipedia）：

```json
{
  "Question": "问题文本",
  "Answer": {"Aliases": ["答案变体"], "Normalized_Value": "标准答案"},
  "Entity": "实体名称",
  "Source": "web or wikipedia"
}
```

### 真实样本

```json
{
  "Question": "In what year did the Ming Dynasty temporarily move the capital from Nanjing to Beijing?",
  "Answer": {"Aliases": ["1421", "1403"], "Normalized_Value": "1421"},
  "Source": "wikipedia"
}
```

```json
{
  "Question": "Which artist's followers were called 'the School of Fontainebleau'?",
  "Answer": {"Aliases": ["François I", "Francis I"], "Normalized_Value": "François I"},
  "Source": "web"
}
```

### 数据统计

| 指标 | 数值 |
|------|------|
| 问题总数 | 95K+ |
| 维基百科子集 | 78K 问题 |
| 网页子集 | 17K 问题 |
| 平均答案长度 | 2-3 tokens |
| 平均文档长度 | 29 sentences |
