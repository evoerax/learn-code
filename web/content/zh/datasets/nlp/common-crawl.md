# Common Crawl

## 数据集简介

Common Crawl 是由 Common Crawl 基金会于 2007 年发起的大规模网页语料库项目，旨在为互联网研究提供免费、开放的网页数据。该数据集每两个月左右进行一次网络爬取，至今已积累超过 250 亿个网页快照，数据量达数百 TB 至 PB 级别。Common Crawl 是训练大型语言模型（LLM）的关键数据来源之一，被用于 GPT-2、LLaMA、Falcon 等模型的预训练。数据集包含网页文本内容、元数据（如 URL、页面标题）以及 WARC 格式的完整网页记录。由于数据规模庞大，通常需要经过清洗和过滤才能用于模型训练，常用 CCNet 工具进行预处理。

## 相关链接

- 官网：https://commoncrawl.org/
- 数据下载：https://data.commoncrawl.org/
- 论文：https://arxiv.org/abs/2103.14019
- GitHub：https://github.com/commoncrawl/cc-index
- 副数据集：https://commoncrawl.org/2023/03/

## 相关论文

**CCNet: Extracting High Quality Monolingual Datasets from Web Crawl Data**
- 作者：Guillaume Wenzek, Marie-Anne Lachaux, Albert El Goyanne, et al.
- 年份：2020
- 摘要：本文介绍了 CCNet 如何从 Common Crawl 海量网页数据中提取高质量单语言数据集。论文详细描述了数据清洗流程，包括语言识别、文本提取、去重和质量过滤等步骤。该工作为大规模语言模型预训练数据的获取提供了可复现的技术方案。

**The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data**
- 作者：Elie Sakha, et al.
- 年份：2023
- 摘要：本文展示了使用 Common Crawl 数据训练 Falcon 大语言模型的经验。研究表明，经过严格过滤和去重的高质量网页数据，在规模和质量平衡上可以超越人工策划的数据集如 The Pile。该工作强调了数据质量对 LLM 性能的重要性。

## 数据示例

### 数据格式说明

Common Crawl 数据以 WARC（Web ARChive）格式存储：
- **WAT 文件**：网页元数据（页面标题、headers、内容类型等），JSON 格式
- **WET 文件**：已提取的纯文本内容，方便直接使用
- **CCIndex 文件**：爬取记录的索引数据库

WET 文件每行包含一条记录的 JSON：
```json
{
  "url": "https://example.com/page",
  "date": "2023-01-15T00:00:00Z",
  "content_length": 12345,
  "mime_detected": "text/html",
  "text": "提取的纯文本内容..."
}
```

### 真实样本示例

**样本 1 - 新闻网页**
```json
{
  "url": "https://news.example.com/tech/2023/article",
  "date": "2023-01-15T10:30:00Z",
  "mime_detected": "text/html",
  "text": "Researchers announced a breakthrough in artificial intelligence. The new model demonstrates unprecedented capabilities in natural language understanding and reasoning. Experts believe this could revolutionize multiple industries..."
}
```

**样本 2 - 百科内容**
```json
{
  "url": "https://en.wikipedia.org/wiki/Machine_learning",
  "date": "2023-02-20T08:15:00Z",
  "mime_detected": "text/html",
  "text": "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves..."
}
```

**样本 3 - 技术文档**
```json
{
  "url": "https://docs.example.com/api/reference",
  "date": "2023-03-10T14:45:00Z",
  "mime_detected": "text/html",
  "text": "API Reference Guide\n\nAuthentication\nAll API requests require authentication using an API key. Include your key in the header:\nAuthorization: Bearer YOUR_API_KEY\n\nEndpoints\nGET /users - Returns a list of users\nPOST /users - Creates a new user..."
}
```

### 数据规模

- **总网页数**：250 亿+（持续增长）
- **月度数据量**：约 20-30 TB 压缩数据
- **提取文本量**：每月约 10-15 TB 纯文本
- **覆盖语言**：多语言，以英语为主
