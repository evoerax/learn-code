# MultiNLI

## 数据集简介

MultiNLI (Multi-Genre Natural Language Inference) 是一个大规模自然语言推理数据集，由纽约大学于 2017 年发布。该数据集包含 433,000 个句子对，要求模型判断两个句子之间的逻辑关系（蕴含、矛盾或中性）。MultiNLI 的独特之处在于它涵盖了多种语体和风格，包括口语转录、小说、政府写作等，比前作 SNLI 更具语言多样性。数据集分为匹配集（与 SNLI 共享某些来源）和不匹配集（来自不同来源），用于评估模型的跨领域泛化能力。该数据集是自然语言推理（NLI）领域最重要的基准之一，也是评估模型语言理解和推理能力的关键指标。

## 相关链接

- **官网/论文**: https:// cref.github.io/multinli/
- **GitHub**: https://github.com/nyu-mll/jiant/tree/master/examples/multinli
- **在线 Demo**: https:// www .huggingface.co/datasets/ulti-nli

## 相关论文

**A Broad-Coverage Challenge Corpus for Sentence Understanding by Inference**

- **作者**: Adina Williams, Nikita Nangia, Samuel Bowman
- **年份**: 2017
- **摘要**: 本文介绍了 MultiNLI 数据集，这是一个用于自然语言推理的大规模语料库，包含来自多种语体（口语、小说、政府写作、杂志、新闻等）的句子对。每个句子对需要标注为蕴含关系（第一个句子支持第二个句子）、矛盾关系（两句话相互矛盾）或中性关系（无法确定）。论文详细说明了数据集的构建过程和标注质量保证机制，并证明 MultiNLI 的不匹配集对当前模型具有挑战性，推动了自然语言理解研究的发展。

## 数据示例

### 数据格式说明

MultiNLI 数据集以 JSON Lines (.jsonl) 格式存储，每行包含一个句子对及其标注：

| 字段 | 说明 |
|------|------|
| premise | 前提句子 |
| hypothesis | 假设句子 |
| label | 关系标签：entailment（蕴含）/ contradiction（矛盾）/ neutral（中性） |
| genre | 语体来源：fiction, government, slate, telephone, travel 等 |
| pairID | 句子对唯一标识符 |

### 标签定义

| 标签 | 含义 | 说明 |
|------|------|------|
| entailment | 蕴含 | 如果前提为真，假设必然为真 |
| contradiction | 矛盾 | 前提和假设不能同时为真 |
| neutral | 中性 | 前提为真时，假设可能为真也可能为假 |

### 真实样本

```
样本 1:
前提: "The older girl was in the kitchen, warming up some soup."
假设: "Two girls were in the kitchen."
标签: entailment (蕴含)
语体: fiction

样本 2:
前提: "The older girl was in the kitchen, warming up some soup."
假设: "The younger girl was outside playing."
标签: contradiction (矛盾)
语体: fiction

样本 3:
前提: "The older girl was in the kitchen, warming up some soup."
假设: "Someone was inside the house."
标签: entailment (蕴含)
语体: fiction

样本 4:
前提: "Person 0 states that you can either go to school or study at home."
假设: "You can go to school and study at home simultaneously."
标签: contradiction (矛盾)
语体: telephone
```

### 语体分布

| 语体 | 描述 | 样本数 |
|------|------|--------|
| fiction | 小说和故事 | ~100K |
| government | 政府文件 | ~100K |
| slate | Slate 杂志文章 | ~100K |
| telephone | 电话对话转录 | ~100K |
| travel | 旅游指南和描述 | ~100K |
| 九种其他语体 | 来自 OpenBookQA 等 | ~33K |

### 数据加载示例 (Python)

```python
import json

def load_multinli(filepath):
    data = []
    with open(filepath, 'r') as f:
        for line in f:
            data.append(json.loads(line))
    return data

# 示例
for item in load_multinli('multinli_1.0_train.jsonl')[:3]:
    print(f"Premise: {item['sentence1']}")
    print(f"Hypothesis: {item['sentence2']}")
    print(f"Label: {item['gold_label']}")
    print(f"Genre: {item['genre']}")
    print("---")
```
