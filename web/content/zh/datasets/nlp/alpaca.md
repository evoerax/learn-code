# Alpaca Dataset

## 数据集简介

Alpaca 是由斯坦福大学于 2023 年发布的指令跟随（Instruction-Following）数据集，旨在提升大语言模型的指令遵循能力。该数据集包含 52,000 条指令-following 示例，由 GPT-3.5 (text-davinci-003) 根据人类设计的种子任务自动生成。每条数据包含指令（instruction）、输入（input，可选）和期望输出（output）。Alpaca 数据集及其对应的模型（Alpaca 7B）一经发布便引起广泛关注，开源社区在此基础上产生了大量微调变体，成为 LLM instruction tuning 领域的重要基准数据集。

## 相关链接

- 官网：https://crfm.stanford.edu/2023/03/13/alpaca.html
- 论文：https://arxiv.org/abs/2303.16199
- GitHub：https://github.com/tatsu-lab/stanford_alpaca
- Hugging Face：https://huggingface.co/datasetsyahma/alpaca
- 数据获取：https://raw.githubusercontent.com/tatsu-lab/stanford_alpaca/main/alpaca_data.json

## 相关论文

**Alpaca: A Strong, Replicable Instruction-Following Model**
- 作者：Rohan Taori, Ishaan Gulrajani, Tianyi Zhang, Yann Dubois, Xuechen Li, Carlos Guestrin, Percy Liang, Tatsunori Hashimoto
- 年份：2023
- 摘要：本文介绍了 Alpaca 数据集的构建方法。作者使用 SELF-INSTRUCT 框架，以 GPT-3.5 为教师模型生成了 52,000 条指令-following 数据。为保证数据多样性，指令集涵盖多种任务类型。实验表明，仅 7B 参数的 Alpaca 模型在指令遵循任务上表现接近 GPT-3.5，且可通过微调快速适配新任务。

## 数据示例

### 数据格式说明

每条数据包含：
- `instruction`：描述任务的指令（必填）
- `input`：任务的输入内容（可选，部分任务无输入）
- `output`：期望的输出/答案（必填）

### 真实样本示例

**样本 1（有输入）**
```json
{
  "instruction": "Give three tips for staying healthy.",
  "input": "",
  "output": "1. Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.\\n2. Exercise regularly - aim for at least 30 minutes of moderate activity most days.\\n3. Get enough sleep and manage stress through relaxation techniques or meditation."
}
```

**样本 2（有输入）**
```json
{
  "instruction": "What is the capital of France?",
  "input": "",
  "output": "The capital of France is Paris."
}
```

**样本 3（复杂输入）**
```json
{
  "instruction": "Compare the two main characters in the given story.",
  "input": "Story: In a small town, kind-hearted Tom always helped others, while his neighbor Jack was known for being selfish and greedy. When a poor family lost their home, Tom gave them food and shelter, but Jack refused to help.",
  "output": "Tom and Jack represent opposite character archetypes. Tom is depicted as selfless, generous, and compassionate - he immediately offers food and shelter to the displaced family. In contrast, Jack is characterized as selfish and greedy, shown through his refusal to help despite his resources. The story uses their contrasting actions to emphasize themes of kindness versus selfishness."
}
```
