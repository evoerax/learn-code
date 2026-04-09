# ScienceQA

## 数据集简介

ScienceQA 是由 UCLA 和 Allen AI 团队于 2022 年发布的大规模科学问题问答数据集，涵盖 127 个学科领域约 21,000 道多选题，每道题配有详细的解题讲解。该数据集的特点是不仅要求模型给出正确答案，还要求模型能够解释推理过程，这使得它成为评估 LLM 科学推理能力的重要基准。ScienceQA 涵盖自然科学（物理、化学、生物）、地球科学、Computer Science 等多个学科领域，是当前最全面的科学问答评估数据集之一。

## 相关链接

- 官网：https://scienceqa.github.io/
- GitHub：https://github.com/lupantech/ScienceQA
- Hugging Face：https://huggingface.co/datasets/scie判断题/科学问答
- 论文：https://arxiv.org/abs/2209.09536

## 相关论文

**Learn to Explain: Multimodal Reasoning via Thought Chains for Science Question Answering**
- 作者：Pan Lu, et al. (UCLA, AI2)
- 年份：2022
- 摘要：本文提出了 ScienceQA 数据集，包含 127 个学科领域的约 21,000 道科学问答题目。研究发现 GPT-3.5 等大模型在该任务上表现不佳，但通过思维链提示（Chain-of-Thought）可以显著提升性能。论文还提出了科学问答的可解释性挑战，即模型不仅需要给出正确答案，还需要生成合理的推理过程。ScienceQA 为多模态科学推理研究提供了重要基准。

## 数据示例

### 数据格式说明

每条数据包含：
- `question`：科学问题文本
- `choices`：选项列表
- `answer`：正确答案索引
- `hint`：题目提示信息
- `lecture`：相关知识点讲解
- `solution`：详细解题步骤
- `subject/category`：学科分类

### 真实样本示例

**样本 1 - 物理学**
```json
{
  "question": "A car accelerates from rest at a constant rate of 2 m/s². What is the car's velocity after 5 seconds?",
  "choices": ["5 m/s", "10 m/s", "15 m/s", "25 m/s"],
  "answer": 1,
  "hint": "Use the formula v = at for constant acceleration",
  "lecture": "When an object accelerates at constant rate a from rest, its velocity increases linearly with time. The formula is v = at.",
  "solution": "Given: a = 2 m/s², t = 5 s, v₀ = 0. Using v = v₀ + at = 0 + (2)(5) = 10 m/s",
  "subject": "Physics",
  "category": "Mechanics"
}
```

**样本 2 - 化学**
```json
{
  "question": "Which of the following elements has the highest electronegativity?",
  "choices": ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
  "answer": 2,
  "hint": "Electronegativity increases across a period and decreases down a group",
  "lecture": "Electronegativity is the ability of an atom to attract electrons. Fluorine is the most electronegative element on the periodic table.",
  "solution": "Among the options, fluorine (F) has the highest electronegativity value of 4.0 on the Pauling scale.",
  "subject": "Chemistry",
  "category": "Periodic Table"
}
```

**样本 3 - 生物学**
```json
{
  "question": "Which organelle is responsible for producing ATP through cellular respiration?",
  "choices": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  "answer": 1,
  "hint": "Consider the process of cellular respiration and where it occurs",
  "lecture": "Mitochondria are the powerhouse of the cell, producing ATP through the processes of glycolysis, Krebs cycle, and oxidative phosphorylation.",
  "solution": "Mitochondria contain the enzymes necessary for the Krebs cycle and electron transport chain, which produce the majority of ATP in eukaryotic cells.",
  "subject": "Biology",
  "category": "Cell Biology"
}
```
