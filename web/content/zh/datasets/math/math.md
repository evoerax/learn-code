# MATH

## 数据集简介

MATH 是加州大学伯克利分校和芝加哥大学于 2021 年发布的数学竞赛数据集，包含 12,500 道来自 AMC、AIME 等数学竞赛的问题，涵盖初等代数、代数、计数与概率、几何、数论和高等数学等 7 个类别。每个问题都带有完整的逐步求解过程，是评估LLM数学推理能力的重要基准。研究发现即使是GPT-4也仅能达到约 40-50% 准确率，远低于人类数学竞赛金牌选手的 90%+ 水平，揭示了LLM在复杂数学推理方面的重大挑战。

## 相关链接

- 官网/论文: https://github.com/hendrycks/math
- 论文: "Measuring Mathematical Problem Solving With the MATH Dataset", Hendrycks et al., 2021
- GitHub: https://github.com/hendrycks/math
- 在线体验: https://paperswithcode.com/sota/mathematical problem-solving on math

## 相关论文

**标题:** Measuring Mathematical Problem Solving With the MATH Dataset

**作者:** Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, Jacob Steinhardt

**年份:** 2021

**摘要:** 我们介绍 MATH 数据集，包含 12,500 道数学竞赛题目，每个问题都有完整的逐步求解过程。当前最好的深度学习模型在 MATH 上的准确率仅为约 5%，而人类专家可达 90%。通过分析模型错误类型，我们发现模型难以处理需要领域特定知识和多步推理的题目。MATH 为评估和改进数学问题解决能力提供了重要基准。

## 数据示例

### 数据格式说明

MATH 数据集采用 JSON 格式存储，文件结构：
```json
{
  "problem": "题目文本",
  "solution": "完整解答过程",
  "answer": "最终答案",
  "level": "难度级别 (1-5)",
  "type": "题目类型 (如algebra, counting等)",
  "service": "数据来源 (如AMC, AIME等)"
}
```

### 真实样本

1. **样本1 - 数论**
```json
{
  "problem": "What is the smallest positive integer n such that n^2 is divisible by 72?",
  "solution": "72 = 2^3 * 3^2. For n^2 to be divisible by 72, n must be divisible by sqrt(72) = 6√2. So n must contain at least 2^2 * 3^1 = 12. Thus n = 12.",
  "answer": "12",
  "level": "2",
  "type": "number theory"
}
```

2. **样本2 - 几何**
```json
{
  "problem": "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
  "solution": "By the Pythagorean theorem, hypotenuse = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13.",
  "answer": "13",
  "level": "1",
  "type": "geometry"
}
```

3. **样本3 - 计数与概率**
```json
{
  "problem": "How many ways can 5 students be arranged in a line if two particular students must not stand together?",
  "solution": "Total arrangements = 5! = 120. Arrangements with two students together: treat them as a block, 4! * 2! = 48. So arrangements with them apart = 120 - 48 = 72.",
  "answer": "72",
  "level": "3",
  "type": "counting"
}
```
