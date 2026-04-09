# GSM8K (Grade School Math 8K)

## 数据集简介

GSM8K 是由 OpenAI 于 2021 年发布的小学数学应用题数据集，包含 8,500 道高质量的小学数学文字题。这些题目覆盖加、减、乘、除四则运算，要求多步推理才能得出正确答案，非常适合评估语言模型的数学推理能力。数据集划分为训练集 7,473 道和测试集 1,319 道，题目均为人工编写，难度涵盖从简单心算到复杂多步应用题。该数据集成为评估 LLMs 数学问题解决能力的重要基准。

## 相关链接

- 官网：https://openai.com/index/grade-school-math/
- 论文：https://arxiv.org/abs/2110.14168
- GitHub：https://github.com/openai/grade-school-math
- Hugging Face：https://huggingface.co/datasets/openai/gsm8k

## 相关论文

**Training Verifiers to Solve Math Word Problems**
- 作者：Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Jacob Hilton, et al.
- 年份：2021
- 摘要：本文介绍了 GSM8K 数据集的构建方法。该数据集包含 8,500 道小学数学应用题，要求多步推理才能求解。论文发现即使 GPT-3 175B 模型在该数据集上的准确率也仅约 5%，揭示了语言模型在数学推理方面的重大不足。

## 数据示例

### 数据格式说明

每条数据包含：
- `question`：数学问题描述
- `answer`：包含最终答案和完整推理过程的解答

### 真实样本示例

**样本 1 - 简单加法**
```
问题：Janet had $5. She bought a candy bar for $1. How much money does she have left?
答案：Janet started with $5. She spent $1 on a candy bar. $5 - $1 = $4. She has $4 left.
最终答案：$4
```

**样本 2 - 多步应用题**
```
问题：There are 3 tables in a classroom. Each table has 4 chairs. Each chair seats 2 students. How many students can sit in the classroom?
答案：There are 3 tables × 4 chairs = 12 chairs. Each chair seats 2 students. 12 × 2 = 24 students. So 24 students can sit in the classroom.
最终答案：24
```

**样本 3 - 除法应用**
```
问题：Maria has 24 pencils. She wants to distribute them equally among 6 friends. How many pencils does each friend get?
答案：Maria has 24 pencils and 6 friends. 24 ÷ 6 = 4. Each friend gets 4 pencils.
最终答案：4
```
