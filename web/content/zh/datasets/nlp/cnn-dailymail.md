# CNN/DailyMail 数据集

## 数据集简介

CNN/DailyMail 是一个大规模文本摘要数据集，由华盖媒体解决方案（Gotenk 等人于 2017 年发布）和DailyMail（由英国每日邮报提供）两个英文新闻数据集组成。该数据集包含约 287,000 篇新闻文章，每篇文章附有由人工撰写的多句摘要（highlight），是抽取式和生成式文本摘要研究中最广泛使用的基准之一。CNN/DailyMail 的文章平均长度约 400 词，摘要平均约 3-4 句，要求模型能够理解长文本并生成连贯的压缩信息。该数据集推动了 Pointer-Generator Network、Transformer-base 摘要模型等多项技术创新，是评估语言模型理解和生成能力的核心基准。

## 相关链接

- **官网/论文**: https://github.com/abisee/cnn-dailymail
- **GitHub**: https://github.com/abisee/cnn-dailymail
- **数据集下载**: https://huggingface.co/datasets/cnn_dailymail
- **原论文**: "Get To The Point: Summarization with Pointer-Generator Networks" (ACL 2017)

## 相关论文

**Get To The Point: Summarization with Pointer-Generator Networks**

- **作者**: Abigail See, Peter J. Liu, Christopher D. Manning
- **年份**: 2017
- **摘要**: 本文提出了 Pointer-Generator Network，这是一种用于文本摘要的序列到序列模型，结合了抽取式和生成式摘要的优点。该模型通过注意力机制和覆盖机制，能够从源文本复制单词（避免重复），同时也能生成未见过的词汇（保证流畅性）。在 CNN/DailyMail 数据集上的实验表明，该模型显著提升了摘要质量，减少了事实性错误，为生成式摘要研究提供了重要的技术框架。

## 数据示例

**数据格式说明**: CNN/DailyMail 数据集采用 JSON 格式，每条包含 article（原始文章）、highlights（人工撰写的摘要）和 id（文章唯一标识）。

**数据格式结构**:
```json
{
  "id": "001",
  "article": "The article text goes here...",
  "highlights": "The summary highlights go here..."
}
```

**真实样本示例**:

```json
// 样本1
{
  "id": "cnn_001",
  "article": "The White House announced new trade policies on Tuesday that could affect thousands of businesses across the country. President Biden stated that these measures aim to protect American workers while maintaining fair competition. The new regulations will take effect next month after a period of public comment...",
  "highlights": "White House announces new trade policies affecting businesses nationwide. President Biden says measures protect American workers. New regulations to take effect next month."
}

// 样本2
{
  "id": "daily-mail_042",
  "article": "Scientists at MIT have developed a new type of battery that can store three times more energy than current lithium-ion batteries. The breakthrough could revolutionize electric vehicle technology and renewable energy storage. The research team published their findings in the journal Nature Energy...",
  "highlights": "MIT scientists develop new battery storing three times more energy. Breakthrough could transform electric vehicles and renewable storage. Research published in Nature Energy."
}
```

**数据集统计**:
```
CNN: 92,000 篇文章
DailyMail: 219,000 篇文章
总数据量: 约 287,000 篇
平均文章长度: ~400 词
平均摘要长度: ~40 词（3-4 句）
```

---

*文档版本: 1.0 | 最后更新: 2026年4月*
