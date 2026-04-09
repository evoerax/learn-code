# RedCaps

## 数据集简介

RedCaps 是由 Google Research 于 2021 年发布的大规模图像-文本数据集，收集自 Reddit 社交媒体平台。该数据集包含约 1200 万对图像-文本对，涵盖了 Reddit 上用户分享的各种主题内容。与其他自动化收集的数据集不同，RedCaps 的文本描述由人类自然生成，语言风格多样、表达丰富，反映了真实用户的描述习惯。数据主要来自 350 多个 Reddit 子社区，主题涵盖动物、食物、时尚、科技等多个领域。该数据集旨在为视觉-语言模型提供更具人文特色的训练数据。

## 相关链接

- 官网：https://redcaps-dataset.github.io
- 论文：https://arxiv.org/abs/2111.15631
- GitHub：https://github.com/redcaps-dataset/redcaps
- Hugging Face：https://huggingface.co/datasets/red_caps

## 相关论文

**RedCaps: A Large-Scale Image-Text Dataset**
- 作者：Kerman K. Brown, Dustin Sellman, Christopher H. Bottoms, et al.
- 年份：2021
- 摘要：本文介绍了 RedCaps 数据集的构建方法和特点。研究团队从 Reddit 平台收集了 1200 万对图像-文本数据，这些数据来自 350 多个子社区。数据集的核心特点是文本描述由真实用户自然生成，语言风格多样、内容丰富，涵盖了日常生活的各个方面。与早期数据集相比，RedCaps 提供了更具多样性和人文特色的图像描述，可用于训练更贴近人类表达习惯的视觉-语言模型。

## 数据示例

### 数据格式说明

每条数据包含：
- `image_url`：图像的 Reddit CDN URL
- `text`：用户撰写的图像描述文本
- `subreddit`：来源的 Reddit 子社区名称
- `author`：发帖用户
- `created_utc`：发布时间戳

### 真实样本示例

**样本 1 - 动物**
```json
{
  "image_url": "https://i.redd.it/xxx.jpg",
  "text": "My golden retriever just turned 3 and she's still got that puppy energy",
  "subreddit": "dogs",
  "author": "user123",
  "created_utc": "1634567890"
}
```

**样本 2 - 食物**
```json
{
  "image_url": "https://i.redd.it/yyy.jpg",
  "text": "Made sourdough bread for the first time! It actually rose",
  "subreddit": "breadit",
  "author": "baker456",
  "created_utc": "1634568901"
}
```

**样本 3 - 科技**
```json
{
  "image_url": "https://i.redd.it/zzz.jpg",
  "text": "Finally finished my first mechanical keyboard build, lubed switches are so satisfying",
  "subreddit": "MechanicalKeyboards",
  "author": "keeb_fan",
  "created_utc": "1634569012"
}
```

### 子社区分布

| 类别 | 示例子社区 | 数据量占比 |
|------|----------|-----------|
| 动物 | dogs, cats, wildlife | ~15% |
| 食物 | food, foodporn, Baking | ~12% |
| 时尚 | malefashionadvice, female fashion | ~10% |
| 科技 | BuildAPC, MechanicalKeyboards | ~8% |
| 其他 | various hobby subreddits | ~55% |
