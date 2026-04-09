# Dolly (Databricks Dolly Dataset)

## 数据集简介

Dolly 是由 Databricks 于 2023 年发布的开源指令遵循数据集，旨在训练商用级别的指令遵循语言模型。该数据集包含约 15,000 条由 Databricks 员工编写的指令-响应对，涵盖问答、摘要、内容生成、分类等六种任务类型。与其他使用 GPT 生成的数据集不同，Dolly 的数据完全由人类编写，具有更高的真实性和多样性。该数据集被用于训练 Databricks 的 Dolly 系列模型，证明了仅使用高质量人类数据也能训练出有效的指令遵循模型。

## 相关链接

- 官网：https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm
- 论文：https://arxiv.org/abs/2204.07945
- Hugging Face：https://huggingface.co/datasets/databricks/databricks-dolly-15k
- GitHub：https://github.com/databrickslabs/dolly

## 相关论文

**Dolly: Open commercially-viable instruction following language models**
- 作者：Mike Conover, Matt Hayes, Ankit Mathur, Xiangrui Meng, Jianwei Xie, Jun Wan, Sam Shah, Ali Ghassemi, et al.
- 年份：2023
- 摘要：本文介绍了 Dolly，一个基于 GPT-JT 构建的 60 亿参数指令遵循模型。Dolly 的关键创新在于使用完全由人类编写的高质量指令数据（约 15,000 条）进行微调，而非依赖 GPT-4 等更强大的模型生成数据。实验表明，即使使用较小的模型和较少的数据，Dolly 也能在多个 NLP 基准上展现出优秀的指令遵循能力，证明了数据质量的重要性。

## 数据示例

### 数据格式说明

每条数据包含：
- `instruction`：指令文本
- `context`：可选的上下文信息
- `response`：响应/回答文本
- `category`：任务类别（closed_qa, extraction, generation, classification, brainstorming, summarization）

### 真实样本示例

**样本 1**
```json
{
  "instruction": "Explain the difference between mitosis and meiosis.",
  "context": "",
  "response": "Mitosis and meiosis are both forms of cell division, but they serve different purposes. Mitosis results in two identical daughter cells for growth and repair, while meiosis produces four genetically different gamete cells for sexual reproduction, reducing the chromosome number by half.",
  "category": "closed_qa"
}
```

**样本 2**
```json
{
  "instruction": "Summarize the following article about climate change.",
  "context": "Climate change refers to long-term shifts in global temperatures and weather patterns. While natural factors can cause fluctuations, human activities have been the primary driver since the 1800s. The burning of fossil fuels releases greenhouse gases that trap heat, leading to rising sea levels, extreme weather events, and disruptions to ecosystems.",
  "response": "Climate change is primarily driven by human activities like burning fossil fuels, which release greenhouse gases that trap heat. This causes rising sea levels, extreme weather, and ecosystem disruptions.",
  "category": "summarization"
}
```

**样本 3**
```json
{
  "instruction": "Generate five creative ideas for a team building retreat.",
  "context": "",
  "response": "1. Outdoor adventure day with hiking and survival skills workshops\n2. Cooking competition where teams prepare dishes from different countries\n3. Volunteer day building homes for a local charity\n4. Escape room challenge followed by group reflection discussion\n5. Creative arts workshop culminating in a collaborative mural project",
  "category": "brainstorming"
}
```
