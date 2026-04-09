# SNLI (Stanford Natural Language Inference)

## 数据集简介

SNLI 是由斯坦福大学于 2015 年发布的大规模自然语言推理数据集，是 NLU 领域最具影响力的基准之一。该数据集包含约 55 万个句子对，每个句子对标注了蕴含（entailment）、矛盾（contradiction）和中性（neutral）三种逻辑关系。SNLI 的发布推动了 BERT、GPT 等预训练模型在 NLU 任务上的突破，被视为自然语言理解走向成熟的重要里程碑。

## 相关链接

- 官网：https://nlp.stanford.edu/projects/snli/
- 论文：https://arxiv.org/abs/1508.05326
- GitHub：https://github.com/stanfordnlp/snli
- Hugging Face：https://huggingface.co/datasets/snli

## 相关论文

**A large annotated corpus for learning natural language inference**
- 作者：Samuel R. Bowman, Gabor Angeli, Christopher Potts, Christopher D. Manning
- 年份：2015
- 摘要：本文介绍了 SNLI 数据集的构建过程和特点。通过众包方式标注了 55 万个句子对，研究者详细分析了数据分布和人工标注一致性。SNLI 的发布为自然语言推理研究提供了大规模标准训练数据，推动了神经网络方法在该任务上的广泛应用。

## 数据示例

### 数据格式说明

每条数据包含：
- `premise`：前提句子
- `hypothesis`：假设句子
- `label`：关系标签（0=蕴含，1=矛盾，2=中性）
- `annotator_labels`：三个标注者的原始标签

### 真实样本示例

**样本 1 - 蕴含关系**
```json
{
  "premise": "A soccer game with multiple males playing.",
  "hypothesis": "Some men are playing a sport.",
  "label": 0,
  "annotator_labels": ["entailment", "entailment", "entailment"]
}
```

**样本 2 - 矛盾关系**
```json
{
  "premise": "A person on a horse jumps over a broken down airplane.",
  "hypothesis": "A person is outdoors on a horse.",
  "label": 2,
  "annotator_labels": ["neutral", "neutral", "contradiction"]
}
```

**样本 3 - 中性关系**
```json
{
  "premise": "A boy in a blue shirt is jumping on a trampoline.",
  "hypothesis": "The boy is happy.",
  "label": 2,
  "annotator_labels": ["neutral", "neutral", "neutral"]
}
```

### 数据集统计

| 指标 | 数值 |
|------|------|
| 训练集 | 550,152 条 |
| 验证集 | 10,000 条 |
| 测试集 | 10,000 条 |
| 标注一致性 | ~90% |

### 标注说明

SNLI 采用以下三种标签：

1. **Entailment（蕴含）**：如果前提为真，假设必然为真
2. **Contradiction（矛盾）**：如果前提为真，假设必然为假
3. **Neutral（中性）**：如果前提为真，假设可能为真也可能为假

每条数据由三个标注者独立标注，采用多数投票确定最终标签。
