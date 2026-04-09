# Falcon

## 数据集简介

Falcon 数据集是由阿联酋技术创新研究所（Technology Innovation Institute, TII）发布的大规模高质量网页文本数据集，是训练 Falcon 系列开源大语言模型的核心语料。该数据集的独特之处在于其精细的过滤和去重流程，从原始 Common Crawl 数据中提取了约 5 万亿个 token 的高质量文本。Falcon 采用了多层过滤策略，包括基于规则的清洗、文档级别去重和低质量内容过滤，显著提升了数据质量。该数据集推动了开源 LLM 的发展，Falcon-7B 和 Falcon-40B 在发布时成为了最强大的开源模型之一。

## 相关链接

- **官网/论文**: https://falconllm.tii.ae
- **GitHub**: https://github.com/huggingface/datatrove
- **数据集**: https://huggingface.co/datasets/tiiuae/falcon-refinedweb
- **论文**: "The RefinedWeb Dataset for Falcon LLM" (TII, 2023)

## 相关论文

**The RefinedWeb Dataset for Falcon LLM: Improving Pretraining Data Quality**

- **作者**: Penedo et al., Technology Innovation Institute
- **年份**: 2023
- **摘要**: 本文介绍了 RefinedWeb 数据集，一个经过去重和过滤的高质量网页语料库。研究团队从 Common Crawl 的 96 个快照中提取了约 5 万亿 token，并通过大规模文档级去重、基于 URL 的过滤和内容过滤三个阶段提升数据质量。实验表明，即使使用公开数据，通过精细的数据处理也能训练出与专有数据竞争的强大语言模型。

## 数据示例

**数据格式说明**

RefinedWeb 数据采用 JSON Lines 格式，每行包含一个文档及其元数据：

```json
{"url": "https://en.wikipedia.org/wiki/Artificial_intelligence", "date": "2023-01-15", "text": "Artificial intelligence (AI) is intelligence demonstrated by machines...", "language": "en"}
```

**真实样本**

```json
{"url": "https://example.com/science/quantum", "date": "2023-03-10", "text": "Quantum computing harnesses quantum mechanical phenomena such as superposition and entanglement to perform computation...", "language": "en"}

{"url": "https://blog.example.com/ml-tutorial", "date": "2023-05-20", "text": "Neural networks are computing systems inspired by biological neural networks...", "language": "en"}

{"url": "https://news.example.com/tech-release", "date": "2023-07-08", "text": "The new processor architecture achieves unprecedented performance per watt...", "language": "en"}
```
