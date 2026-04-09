# Wikipedia

## 数据集简介

Wikipedia（维基百科）是全球最大的在线百科全书，由维基媒体基金会维护，自 2001 年上线以来已发展成为多语言、众包的知识库。该数据集通常指 Wikipedia 的结构化文本导出，用于 NLP 和 LLM 预训练。英文维基百科包含约 6 百万篇文章，总文本量约 20GB。Wikipedia 以其高质量、引用丰富、结构清晰的特点，成为训练语言模型的重要语料来源。数据集保留了文章标题、正文文本、分类标签、 infobox 信息和内部链接等结构化信息。Meta AI 在 2023 年发布的 Wikipedia 版本作为 Llama 2 模型的训练数据之一，展示了其在 LLM 预训练中的重要性。

## 相关链接

- 官网：https://www.wikipedia.org/
- 数据下载：https://dumps.wikimedia.org/
- 论文：https://arxiv.org/abs/2306.01116
- Hugging Face：https://huggingface.co/datasets/wikipedia
- 多语言版本：https://huggingface.co/datasets/wikipedia

## 相关论文

**Wikipedia@runway: Evaluating Zero-Shot Multilingual Language Models**
- 作者：Various researchers
- 年份：2023
- 摘要：本文评估了 Wikipedia 作为评估语言模型多语言能力的基准。研究表明，经过 Wikipedia 预训练的模型在多种语言任务上表现优异，验证了 Wikipedia 作为高质量预训练语料的价值。

**BLOOM: A 176B-Parameter Open-Access Multilingual Language Model**
- 作者：BigScience Workshop
- 年份：2023
- 摘要：本文介绍了 BLOOM 大语言模型的训练数据构成。Wikipedia 作为高质量预训练语料之一，被用于提升模型的事实知识和多语言能力。论文详细分析了不同数据源对模型性能的影响，表明 Wikipedia 有助于增强模型的知识性和可解释性。

## 数据示例

### 数据格式说明

Wikipedia 数据集通常以 JSON 或文本格式存储：

每条记录包含：
- `id`：文章唯一标识符
- `url`：文章 URL
- `title`：文章标题
- `text`：文章正文（纯文本，去除 markup）
- `categories`：分类标签列表
- `last_modified`：最后修改时间

英文维基百科规模：
- 文章数：约 640 万篇
- 文本量：约 20 GB
- 分类：约 400 万个分类标签

### 真实样本示例

**样本 1 - 人物传记**
```json
{
  "id": "12345",
  "title": "Albert Einstein",
  "url": "https://en.wikipedia.org/wiki/Albert_Einstein",
  "text": "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science. He is best known to the general public for his mass–energy equivalence formula E = mc², which has been dubbed 'the world's most famous equation'.",
  "categories": ["German physicists", "Theoretical physicists", "Nobel Prize winners"],
  "last_modified": "2024-01-15"
}
```

**样本 2 - 科学概念**
```json
{
  "id": "67890",
  "title": "Machine Learning",
  "url": "https://en.wikipedia.org/wiki/Machine_learning",
  "text": "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Machine learning algorithms build a mathematical model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.",
  "categories": ["Artificial intelligence", "Machine learning", "Computational statistics"],
  "last_modified": "2024-02-01"
}
```

**样本 3 - 历史事件**
```json
{
  "id": "11223",
  "title": "Moon Landing",
  "url": "https://en.wikipedia.org/wiki/Moon_landing",
  "text": "The Apollo Moon landing was the moment when the first humans landed on the Moon on July 20, 1969. The mission was carried out by NASA astronauts Neil Armstrong and Buzz Aldrin aboard the Apollo 11 spacecraft, while Michael Collins orbited above in the command module.",
  "categories": ["Apollo 11", "Moon landing", "Cold War", "1969"],
  "last_modified": "2024-01-20"
}
```

### 标注类型

1. **文章正文**：去除 Wikipedia markup 的纯文本
2. **分类标签**：主题分类，如 "Physics"、"History"、"Biography"
3. **链接关系**：内部链接到其他 Wikipedia 文章
4. **Infobox**：结构化摘要信息（键值对形式）
5. **语言信息**：Wikipedia 支持 300+ 语言版本
