# WMT (Workshop on Machine Translation)

## 数据集简介

WMT 是机器翻译领域最具影响力的国际评测竞赛，自 2006 年起每年举办。WMT 数据集提供多个语言对的双语句子，用于评估机器翻译系统的性能。常用的任务包括 WMT14 英德、英法翻译，以及后续年份的多语言翻译任务。WMT 数据集规模从早期的数万句对发展到近年来的数千万句对，评估指标主要采用 BLEU (Bilingual Evaluation Understudy)。WMT 见证了神经机器翻译 (NMT) 从兴起到主导的整个过程，是机器翻译研究最重要的基准。

## 相关链接

- **官网**: https://www.statmt.org/wmt14/
- **论文**: https://aclanthology.org/W14-3302/ (WMT 2014 任务描述)
- **GitHub**: https://github.com/marian-nMT/marian (NMT 框架)
- **数据集**: https://data.statmt.org/ (历年数据集下载)

## 相关论文

**The WMT14 Machine Translation Competition**

- **作者**: Philipp Koehn, Preslav Nakov, Karin C. H. Seeger, Francisco Casacuberta
- **年份**: 2014
- **摘要**: WMT14 是机器翻译 Workshop 的第九届会议，提供了英德、英法等翻译任务的标准化评估数据。该届比赛见证了神经机器翻译系统的首次参赛并取得显著成果，BLEU 分数大幅提升。论文详细描述了评测任务、数据收集方法、评估流程和参赛系统分析，为后续机器翻译研究提供了重要的标准化基准。

## 数据示例

### 数据格式说明

WMT 数据采用平行语料格式，每行包含源语言句子和目标语言句子，用制表符分隔：

```
source_sentence\ttarget_sentence
```

### 真实样本 (WMT14 英德数据)

```
The best of all, there is no doubt that the problems are essentially the same.	Am besten gesagt, die Probleme sind im Wesentlichen dieselben.
The European Commission proposes a new action plan.	Die Europäische Kommission schlägt einen neuen Aktionsplan vor.
Climate change is one of the biggest challenges of our time.	Der Klimawandel ist eine der größten Herausforderungen unserer Zeit.
```

### 数据统计 (WMT14)

| 指标 | 数值 |
|------|------|
| 英德训练句对 | 4.5M |
| 英法训练句对 | 35M |
| 测试集大小 | 3000 sentences |
| 语言对方向 | Europarl, News Commentary, Common Crawl |
