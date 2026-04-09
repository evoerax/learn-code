# LAION-5B

## 数据集简介

LAION-5B 是目前规模最大的公开可用图文对数据集之一，由 LAION（Large-scale AI Open Network）机构于 2022 年发布。该数据集包含 58.5 亿个图像-文本对，是训练 CLIP、Stable Diffusion 等多模态模型的关键数据来源。LAION-5B 又分为两个子集：LAION-2B-en（22亿英文图文对）和 LAION-2B-multi（22亿多语言图文对）。数据集通过从 Common Crawl 中提取网页并使用 CLIP 模型过滤得到，具有极高的多样性和规模。该数据集的发布标志着开源社区在多模态大模型训练数据方面的重要突破。

## 相关链接

- 官网：https://laion.ai/blog/laion-5b/
- 论文：https://arxiv.org/abs/2210.08402
- GitHub：https://github.com/LAION-AI/laion-datasets
- Hugging Face：https://huggingface.co/datasets/laion/laion5B
- 在线体验：https://rom1504.github.io/clip-retrieval/

## 相关论文

**LAION-5B: A Large-scale Web Dataset for Research on Multi-Modal Learning**
- 作者：Christoph Schuhmann, Romain Beaumont, Richard Vencu, et al.
- 年份：2022
- 摘要：本文介绍了 LAION-5B 数据集的构建方法和规模。该数据集包含 58.5 亿个图文对，是迄今为止最大的公开多模态数据集。研究者详细描述了数据收集、过滤和去重的方法，并展示了该数据集在训练 CLIP 等模型方面的卓越效果。

**LAION-Aesthetics: Predicting the Aesthetics of Images**
- 作者：Christoph Schuhmann, Richard Vencu, Romain Beaumont, et al.
- 年份：2022
- 摘要：本文介绍了 LAION-Aesthetics 子集，一个包含 1.2 亿张高审美质量图像的图文对数据集。该数据集通过预测模型过滤得到，专门用于训练生成高质量图像的模型，已被用于 Stable Diffusion 的训练。

## 数据示例

### 数据格式说明

每条数据包含：
- `caption`：描述图像的自然语言文本
- `url`：图像 URL
- `width`、`height`：图像尺寸
- `similarity`：CLIP 相似度分数

LAION-5B 存储于 Hugging Face datasets 格式，支持在线访问。

### 真实样本示例

**样本 1**
```json
{
  "caption": "A golden retriever dog running on the beach at sunset",
  "url": "https://example.com/dog1.jpg",
  "width": 1024,
  "height": 768,
  "similarity": 0.32
}
```

**样本 2**
```json
{
  "caption": "A modern living room with large windows and minimalist furniture",
  "url": "https://example.com/room1.jpg",
  "width": 1920,
  "height": 1080,
  "similarity": 0.28
}
```

**样本 3**
```json
{
  "caption": "Close-up of a vintage mechanical keyboard with colorful keycaps",
  "url": "https://example.com/keyboard1.jpg",
  "width": 4032,
  "height": 3024,
  "similarity": 0.35
}
```

### 标注类型

1. **图文对**：58.5 亿条图像-文本关联
2. **CLIP 相似度分数**：每对图文通过 CLIP 模型计算相似度
3. **安全过滤标签**：NSFW 分数用于内容过滤
4. **美学评分**：LAION-Aesthetics 子集包含预测的美学分数