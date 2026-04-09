# GPQA

## 数据集简介

GPQA（Graduate-Level Google-Proof Question Answering）是纽约大学和 Google Research 于 2023 年发布的高难度问答评估基准，专门用于测试 LLMs 的研究生水平推理能力。该数据集包含 4,480 道多选题，涵盖生物学、化学和物理学等多个学科领域，每道题目都需要专家级知识才能正确解答。GPQA 的核心特点是其"Google 证明"属性——即通过自动化方法确保这些题目不会出现在 LLM 的预训练数据中，从而提供真正无泄漏的评估。此外，题目由领域专家设计并经过验证，确保只有真正理解学科内容的模型才能正确回答。

## 相关链接

- **官网/论文**: https://gpqa-bench.github.io
- **GitHub**: https://github.com/google-deepmind/GPQA
- **数据集**: https://huggingface.co/datasets/Idicion/GPQA
- **论文**: "GPQA: A Graduate-Level Google-Proof Q&A Benchmark" (NYU/Google, 2023)

## 相关论文

**GPQA: A Graduate-Level Google-Proof Q&A Benchmark for Large Language Models**

- **作者**: Rein et al., Google DeepMind and New York University
- **年份**: 2023
- **摘要**: GPQA 是一个研究生水平的多选题问答基准，旨在评估 LLMs 的深度推理能力。数据集包含 4,480 道题目（2,648 道训练集，1,832 道测试集），涵盖生物学、化学和物理学。关键创新在于使用"Google-proof"设计——通过 NLP 技术和人工审核确保题目不出现在网络搜索结果中，避免数据泄露问题。评估结果显示，即使是最先进的 GPT-4 和 PaLM-2 也只能达到约 40-50% 的准确率，远低于人类专家的 65%。

## 数据示例

**数据格式说明**

GPQA 数据采用 JSON 格式，每条包含问题、选项、正确答案和详细解释：

```json
{
  "question_id": "bio_001",
  "question": "Which of the following amino acids has a positively charged side chain at physiological pH?",
  "options": ["A) Alanine", "B) Glutamate", "C) Lysine", "D) Phenylalanine"],
  "answer": "C",
  "explanation": "Lysine has a primary amine group in its side chain that is protonated at physiological pH (7.4), giving it a positive charge."
}
```

**真实样本**

```json
{
  "question_id": "chem_042",
  "question": "In a Michael addition reaction, which of the following compounds acts as the BEST nucleophile?",
  "options": ["A) CH3CHO", "B) CH3COCH3", "C) CH2(CN)2", "D) H2O"],
  "answer": "C",
  "explanation": "The dicyanomethyl group (CH(CN)2) stabilizes the negative charge through electron-withdrawing effects, making the alpha carbon highly nucleophilic in Michael additions."
}

{
  "question_id": "phys_089",
  "question": "A particle moves in a circular path with constant speed. Which of the following statements about its acceleration is TRUE?",
  "options": ["A) The acceleration is zero", "B) The acceleration is tangent to the circle", "C) The acceleration points toward the center of the circle", "D) The acceleration is proportional to the speed squared"],
  "answer": "C",
  "explanation": "Uniform circular motion has centripetal acceleration a = v^2/r, which always points toward the center of the circle, changing the velocity direction but not its magnitude."
}
```
