# FLAN

## 数据集简介

FLAN（Finetuned Language Net）是由 Google Research 开发的大规模指令微调数据集集合，用于提升语言模型的零样本和少样本能力。FLAN 汇集了超过 1800 个任务，涵盖对话、推理、代码生成等多个领域，通过指令格式化将各种任务统一为文本到文本的格式。该数据集首次于 2021 年发布，标志着 "指令微调"（Instruction Tuning）范式的兴起，为后续 InstructGPT、ChatGPT 等模型奠定方法论基础。FLAN 的核心思想是通过大规模多任务学习，让语言模型学会遵循多样化指令，从而提升泛化能力。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网/论文 | https://arxiv.org/abs/2109.03612 |
| GitHub | https://github.com/google-research/flan |
| 在线体验 | https://chat.openai.com (ChatGPT基于类似方法) |

## 相关论文

**Title:** Finch: Open-ended Questions about Text with instruction-Following Models  
**Authors:** Google Research  
**Year:** 2021  
**Abstract:** FLAN 提出了指令微调方法，通过对 1800+ 任务进行微调，使语言模型学会遵循多样化指令。实验表明，FLAN-PaLM 540B 在 BIG-Bench 任务上超越 GPT-3 零样本性能，且随着模型规模增大，指令微调效果愈发显著。该工作首次系统性地证明了多任务指令微调可以显著提升模型的零样本泛化能力。

**Title:** InstructGPT: Training language models to follow instructions with human feedback  
**Authors:** OpenAI  
**Year:** 2022  
**Abstract:** InstructGPT 沿用 FLAN 的指令微调思想，结合人类反馈进行强化学习优化（RLHF），显著提升了模型的有用性、诚实性和无害性。尽管 InstructGPT 并未直接开源，但其方法论与 FLAN 一脉相承，代表了 GPT 系列从纯预训练向指令遵循范式的转型。

## 数据示例

FLAN 的数据格式将每个任务统一为指令驱动的文本到文本格式：

**示例 1 - 情感分类任务：**
```
指令: Classify the sentiment of the following text as positive or negative.
输入: The movie was absolutely fantastic! I loved every minute of it.
输出: positive
```

**示例 2 - 翻译任务：**
```
指令: Translate the following English text to French.
输入: Hello, how are you today?
输出: Bonjour, comment allez-vous aujourd'hui?
```

**示例 3 - 推理任务：**
```
指令: If it is raining and you don't have an umbrella, you will get wet. It's raining. Will you get wet if you go outside without an umbrella?
输入: (无额外输入)
输出: Yes, you will get wet because it's raining and you don't have an umbrella.
```

**数据格式说明：**
- 每条数据包含三部分：指令（Instruction）、输入（Input）、输出（Output）
- 指令描述任务要求，输入为任务的具体内容，输出为期望结果
- 1800+ 任务涵盖分类、翻译、问答、摘要、推理等数十种任务类型
