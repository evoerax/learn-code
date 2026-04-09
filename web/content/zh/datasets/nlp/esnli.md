# e-SNLI

## 数据集简介

e-SNLI（extended Natural Language Inference）是斯坦福大学于 2018 年在 SNLI 数据集基础上扩展而来的自然语言推理数据集，包含约 55 万个句子对。与原版 SNLI 不同，e-SNLI 为每个样本增加了自然语言解释（explanations），说明标注者为何选择该标签（entailment、contradiction、neutral）。这些解释由 Amazon Mechanical Turk 平台上的众包标注者撰写，平均每条解释约 15-20 个单词。e-SNLI 的发布旨在推动可解释的自然语言推理研究，帮助模型不仅预测标签，还能生成人类可理解的推理依据，对于提升 NLU 系统的可解释性和可信度具有重要意义，是研究推理过程建模的重要资源。

## 相关链接

- 官网/论文：https://github.com/OanaGrosel/e-SNLI
- GitHub：https://github.com/OanaGrosel/e-SNLI
- 数据集下载：https://github.com/OanaGrosel/e-SNLI/raw/master/eSNLI_raw.csv
- 论文链接：https://aclanthology.org/D18-1025/

## 相关论文

**e-SNLI: Natural Language Inference with Natural Language Explanations**
- 作者：Oana-Maria Camburu, Tim Rocktäschel, Thomas Lukasiewicz, Phil Blunsom
- 年份：2018
- 摘要：本文介绍了 e-SNLI 数据集，这是一个在 SNLI 基础上扩展的自然语言推理数据集，包含约 55 万个句子对，每个样本都附有自然语言解释。之前的 NLI 数据集仅提供标签，缺少推理过程的说明。e-SNLI 通过众包方式为每个样本标注了详细的解释文本，使得研究人员能够训练和评估能够生成自然语言推理依据的模型。作者展示了 e-SNLI 可用于多种任务，包括标签预测、解释生成和解释蕴含验证等。

## 数据示例

**数据格式说明**
e-SNLI 数据集以 CSV 格式存储，每条记录包含：
- premise：前提句子
- hypothesis：假设句子
- label：标签（0=entailment，1=contradiction，2=neutral）
- explanation1：第一条自然语言解释
- explanation2：第二条自然语言解释
- explanation3：第三条自然语言解释

**真实样本**

样本1（蕴含关系）：
```
premise: "A soccer game with multiple males playing."
hypothesis: "Some men are playing a sport."
label: 0 (entailment)
explanation1: "Males are men and playing a sport is soccer game."
explanation2: "Men are males and they are playing soccer which is a sport."
explanation3: "All males are men and they are playing which is required for a sport."
```

样本2（矛盾关系）：
```
premise: "A person on a horse jumps over a fallen log."
hypothesis: "A person is not moving."
label: 1 (contradiction)
explanation1: "Jumping implies movement so the person cannot be still."
explanation2: "Since the person is jumping, they are definitely moving."
explanation3: "A person cannot be jumping and not moving at the same time."
```

样本3（中性关系）：
```
premise: "A bank teller is handing money to a man."
hypothesis: "The man is wearing a suit."
label: 2 (neutral)
explanation1: "Bank tellers typically hand money to customers who could be wearing various types of clothing."
explanation2: "Nothing is said about what the man is wearing."
explanation3: "The man could be wearing a suit or not, it is not determined by the premise."
```
