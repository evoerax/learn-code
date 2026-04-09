# WebText

## 数据集简介

WebText 是一个大规模、高质量的文本语料库，专门为训练大型语言模型而构建。该数据集通过抓取 Reddit 外链网页获取，所有链接至少获得3个 karma 点赞，表明内容受到用户认可。WebText 被用于训练 GPT-2 模型，是 GPT-2 能够展现强大自然语言生成能力的关键因素之一。OpenAI 最初发布了 WebText 的一个子集 OpenWebText（开源复现版本），包含约800万个文档。原始 WebText 包含约800亿个 token，涵盖新闻、论坛、维基百科等多种来源的网页文本，数据去重和清洗后具有较高的质量和多样性。

## 相关链接

- **官网/论文**: https://openai.com/index/better-language-models/ | https://arxiv.org/abs/2009.01325
- **GitHub**: https://github.com/jcpeterson/openwebtext
- **在线体验/Demo**: 无官方 Demo，但基于 WebText 训练的 GPT-2 模型可通过 Hugging Face 使用

## 相关论文

**Language Models are Unsupervised Multitask Learners**

- **作者**: Radford, Alec and Wu, Jeffrey and Child, Rewon and Luan, David and Amodei, Dario and Sutskever, Ilya
- **年份**: 2019
- **摘要**: GPT-2 是一个大型 transformer 语言模型，包含15亿参数，在800万个网页数据集 WebText 上训练。我们展示了 GPT-2 在零样本设置下可以在多种下游任务上取得竞争力结果，包括问答、翻译、摘要和阅读理解等任务，证明大规模语言模型可以在无监督方式下学习多任务。

## 数据示例

### 数据格式说明

WebText 原始数据为 URL 和对应文本的键值对，经过清洗后的文档包含：
- `url`: 来源网页 URL
- `text`: 清洗后的正文文本
- `date`: 抓取日期

### 真实样本

```json
{
  "url": "https://en.wikipedia.org/wiki/Artificial_intelligence",
  "text": "Artificial intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of 'intelligent agents': any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.",
  "date": "2019-04-01"
}
```

```json
{
  "url": "https://www.reddit.com/r/MachineLearning/comments/abc123/example_post",
  "text": "I've been experimenting with BERT fine-tuning for sentiment analysis tasks. The key insight is that domain-specific pre-training significantly improves performance on specialized datasets. Has anyone else tried this approach on clinical text?",
  "date": "2019-05-15"
}
```

```json
{
  "url": "https://news.example.com/tech/2020/transformer_models",
  "text": "Transformer models have revolutionized natural language processing since their introduction in 2017. The attention mechanism allows models to process sequences in parallel while maintaining long-range dependencies, making them ideal for translation and text generation tasks.",
  "date": "2020-02-20"
}
```
