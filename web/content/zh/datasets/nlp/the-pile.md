# The Pile

## 数据集简介

The Pile 是由 EleutherAI 于 2020 年发布的大规模文本语料库，专为训练大规模语言模型设计。该数据集规模达 825GB，包含 22 个高质量子数据集，涵盖书籍、网站、代码、科学论文等多个领域。The Pile 的独特之处在于其精心设计的数据混合比例（downsampling strategy），确保模型在各个领域都能获得均衡的训练。数据集由多个公开来源构建，包括 Pile-CC（Common Crawl）、PubMed Central、ArXiv、GitHub、FreeLaw 等。The Pile 已成为训练 GPT-2、GPT-Neo 等开源大语言模型的核心数据。

## 相关链接

- 官网：https://pile.eleuther.ai/
- 论文：https://arxiv.org/abs/2201.07311
- GitHub：https://github.com/EleutherAI/The-Pile
- Hugging Face：https://huggingface.co/datasets/EleutherAI/pile

## 相关论文

**The Pile: A 825GB Plain Text Pre-training Dataset for Language Models**
- 作者：Leo Gao, Stella Biderman, Sid Black et al.
- 年份：2021
- 摘要：本文介绍了 The Pile 数据集的构建方法和特点。该数据集包含 825GB 多样化文本，涵盖 22 个子数据集。论文详细说明了数据处理流程、去重策略和混合比例设计，并发布了 Pile-MMMLU 基准用于评估模型的学科知识。研究表明，在 The Pile 上训练的模型在多项任务上优于在 Common Crawl 上训练的模型。

## 数据示例

### 数据集结构

The Pile 由 22 个子数据集构成，核心子数据集包括：

| 子数据集 | 规模 | 来源 |
|----------|------|------|
| Pile-CC | 250GB | Common Crawl |
| PubMed Central | 90GB | 生物医学论文 |
| ArXiv | 90GB | 科学论文 |
| GitHub | 95GB | 开源代码 |
| Books3 | 100GB | 图书 |
| FreeLaw | 34GB | 法律文书 |
| Stack Exchange | 32GB | 问答网站 |
| USPTO | 36GB | 专利数据 |

### 真实样本示例

**样本 1 - 书籍**
```json
{
  "text": "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet at least once, making it useful for testing typefaces and fonts. It has been used since the 19th century by printers and typesetters.",
  "source": "Books3",
  "year": null,
  "author": "Anonymous",
  "id": "train-00001-00000"
}
```

**样本 2 - 代码**
```json
{
  "text": "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)",
  "source": "GitHub",
  "language": "Python",
  "id": "train-00002-00432"
}
```

**样本 3 - 科学论文**
```json
{
  "text": "Transformer networks have revolutionized natural language processing. The self-attention mechanism allows models to weigh the importance of different parts of the input sequence, enabling parallel computation and long-range dependencies.",
  "source": "ArXiv",
  "categories": ["cs.CL", "cs.LG"],
  "id": "train-00003-01234"
}
```

### 数据格式

The Pile 采用 JSONL 格式存储，每行包含一个 JSON 对象：

```json
{"text": "...", "source": "...", "id": "..."}
```

数据集分为训练集（pile-train.jsonl）、验证集（pile-val.jsonl）和测试集（pile-test.jsonl）。
