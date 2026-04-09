# MMLU (Massive Multitask Language Understanding)

## 数据集简介

MMLU 是由谷歌研究团队于 2020 年发布的大规模多任务语言理解基准，旨在评估模型在57个学科领域的知识和推理能力。该数据集包含约 16,000 个多项选择题，涵盖 STEM、人文、社科等广泛领域，每个问题需要理解复杂语境并从四个选项中选择正确答案。MMLU 被认为是评估大语言模型能力的最重要基准之一，题目设计强调深度学科知识和推理能力，而非简单的语言模式匹配。

## 相关链接

- 官网：https://github.com/hendrycks/test
- 论文：https://arxiv.org/abs/2009.03300
- GitHub：https://github.com/hendrycks/test
- Hugging Face：https://huggingface.co/datasets/cais/mmlu

## 相关论文

**Measuring Massive Multitask Language Understanding**
- 作者：Dan Hendrycks, Collin Burns, Steven Basina, et al.
- 年份：2020
- 摘要：本文介绍了 MMLU 数据集的设计和构建方法。该数据集涵盖 57 个学科领域，从基础数学到高级法律、医学等，要求模型具备广泛的知识和深度推理能力。研究发现，当时最先进的语言模型在多数领域表现接近随机猜测，表明该基准具有足够的挑战性。

## 数据示例

### 数据格式说明

每条数据包含：
- `subject`：学科领域名称
- `question`：问题文本
- `choices`：四个选项列表 [A, B, C, D]
- `answer`：正确答案索引

### 真实样本示例

**样本 1 - 高等教育**
```json
{
  "subject": "college_chemistry",
  "question": "What is the pH of a 0.1 M HCl solution?",
  "choices": ["1", "7", "10", "13"],
  "answer": 0
}
```

**样本 2 - 法律**
```json
{
  "subject": "professional_law",
  "question": "Which of the following best describes the concept of 'due process'?",
  "choices": [
    "The right to a fair trial before being deprived of life, liberty, or property",
    "The requirement that all laws be published",
    "The principle of equal protection under the law",
    "The right to vote in elections"
  ],
  "answer": 0
}
```

**样本 3 - 医学**
```json
{
  "subject": "medical_genetics",
  "question": "If a person is heterozygous for a recessive genetic disorder, what is their phenotype?",
  "choices": [
    "They show symptoms of the disorder",
    "They do not show symptoms but are a carrier",
    "They are immune to the disorder",
    "They have a 50% chance of passing it to offspring"
  ],
  "answer": 1
}
```

### 学科领域

MMLU 涵盖 57 个学科领域，分类如下：

| 类别 | 学科数量 | 示例 |
|------|----------|------|
| STEM | 24 | 数学、物理、化学、计算机科学 |
| 人文 | 14 | 历史、哲学、法学、文学 |
| 社科 | 16 | 经济学、心理学、政治学、社会学 |
| 其他 | 3 | 商学、医学伦理、天文学 |
