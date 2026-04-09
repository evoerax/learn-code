# OLMo

## 数据集简介

OLMo（Open Language Model Observatory）是 AI2（Allen Institute for AI）发布的完全开源的大语言模型训练数据集，旨在推动开源 LLM 发展的透明性和可复现性。该数据集基于 Dolma，包含约 2 万亿 token 的英语文本，来源涵盖网页、学术论文、代码、书籍等多个领域。OLMo 的独特之处在于其完全开放的策略——不仅发布模型权重，还公开了完整的预训练数据、数据处理流程和训练代码，使研究社区能够深入理解 LLM 的训练过程。截至 2024 年，OLMo 系列已发布 1B 和 7B 规模的模型，是目前最透明的开源 LLM 项目之一。

## 相关链接

- **官网/论文**: https://allenai.org/olmo
- **GitHub**: https://github.com/allenai/OLMo
- **HuggingFace**: https://huggingface.co/allenai/OLMo-7B
- **论文**: "OLMo: Accelerating the Science of Language Models" (AI2, 2024)

## 相关论文

**OLMo: Accelerating the Science of Language Models**

- **作者**: The AI2 OLMo Team
- **年份**: 2024
- **摘要**: OLMo 是一款完全开源的大语言模型，旨在推动 LLM 研究的科学透明性。本文发布了 1B 和 7B 规模的模型，并公开了 2T token 的预训练数据、完整的训练代码、数据处理流程和评估代码。与仅发布模型权重的开源模型不同，OLMo 提供了从数据到模型的完整可复现链路，使研究人员能够深入理解模型行为背后的因素。

## 数据示例

**数据格式说明**

OLMo 数据采用 JSON Lines 格式，每行包含一条训练样本：

```json
{"id": "cc0ce130-9c92-43d8-a0d0-9c09c70c91f3", "text": "The history of artificial intelligence began in antiquity, with myths, stories and rumors...", "meta": {"url": "https://en.wikipedia.org/wiki/History_of_artificial_intelligence", "domain": "wikipedia", "source": "dolma"}}
```

**真实样本**

```json
{"id": "sample1", "text": "Machine learning is a subset of artificial intelligence that enables systems to learn from data...", "meta": {"url": "https://example.com/ml-intro", "domain": "example.com", "source": "dolma"}}

{"id": "sample2", "text": "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)", "meta": {"url": "https://github.com/example/sort", "domain": "github.com", "source": "dolma"}}

{"id": "sample3", "text": "Climate change refers to long-term shifts in global temperatures and weather patterns...", "meta": {"url": "https://en.wikipedia.org/wiki/Climate_change", "domain": "wikipedia", "source": "dolma"}}
```
