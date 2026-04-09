# CLIP (Contrastive Language-Image Pre-Training)

## 数据集简介

CLIP 是 OpenAI 于 2021 年发布的大规模图像-文本对比学习数据集，包含 4 亿对从互联网上收集的图像-文本对。这些数据通过简单的文本查询从多个公开数据源获取，涵盖了各种图像类型和描述风格。CLIP 的核心创新在于采用对比学习目标，让模型同时学习图像和文本的表示，使得零样本迁移成为可能。该数据集在发布时是最大的图像-文本对比学习数据集，为多模态模型训练提供了重要基础。

## 相关链接

- **官网/论文**: https://openai.com/blog/clip
- **GitHub**: https://github.com/OpenAI/CLIP
- **在线体验**: https://openai.com/index/clip/ (博客文章)

## 相关论文

**Learning Transferable Visual Models From Natural Language Supervision**

- **作者**: Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever
- **年份**: 2021
- **摘要**: CLIP 采用对比学习框架，从互联网上收集的 4 亿图像-文本对中学习可迁移的视觉模型。论文证明了直接从自然语言监督学习视觉表示的可行性，通过大规模训练，CLIP 在无需直接优化目标任务的情况下即可实现与全监督模型相当的零样本分类性能，在 ImageNet 上达到 76.2% 准确率。

## 数据示例

### 数据格式说明

CLIP 训练数据为图像-文本对，每行包含图像 URL 和对应的文本描述：

```
{"text": "a diagram", "image": "http://example.com/image.jpg"}
```

### 真实样本

```json
{"text": "A golden retriever playing fetch in a park on a sunny day", "image": "https://example.com/dog-fetch.jpg"}
{"text": "Close-up of a red sports car speeding down a highway", "image": "https://example.com/red-car.jpg"}
{"text": "A plate of sushi with chopsticks on a wooden table", "image": "https://example.com/sushi.jpg"}
```

### 数据统计

| 指标 | 数值 |
|------|------|
| 图像-文本对数量 | 4亿 (400M) |
| 数据来源 | 多个公开互联网数据源 |
| 文本类型 | 各种自然语言描述 |
| 图像类型 | 各种物体、场景、活动等 |
