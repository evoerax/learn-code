# COYO-700M

## 数据集简介

COYO-700M 是由韩国 Kakao Brain 团队于 2022 年发布的大规模图像-文本对数据集，是当时世界上最大的公开图像-文本数据集之一。该数据集包含约 7.47 亿对图像-文本对，收集自 Common Crawl 网页数据。数据收集过程中采用了严格的多级过滤机制，包括图像质量过滤（分辨率、纵横比、NSFW 检测）、文本质量过滤（长度、语言、名词形式检测）以及图像-文本匹配度过滤（CLIP 相似度）。数据集提供了丰富的元属性，包括 CLIP 相似度、美学评分、水印检测、面部数量等超过 20 个预计算特征，方便研究社区针对不同需求筛选数据子集。

## 相关链接

- 官网：https://github.com/kakaobrain/coyo-dataset
- GitHub：https://github.com/kakaobrain/coyo-dataset
- Hugging Face：https://huggingface.co/datasets/kakaobrain/coyo-700m
- 论文：待发布

## 相关论文

**COYO-700M: Image-Text Pair Dataset**
- 作者：Minwoo Byeon, Beomhee Park, Haecheon Kim, Sungjun Lee, Woonhyuk Baek, Saehoon Kim (Kakao Brain)
- 年份：2022
- 摘要：本文介绍了 COYO-700M 数据集的构建方法和实验验证。研究团队从 Common Crawl 的 100 亿个原始图像-文本候选对中，通过严格的质量过滤最终得到 7.47 亿对高质量数据。过滤策略包括图像级别的分辨率/纵横比/NSFW 检测、文本级别的语言/长度/名词检测，以及 CLIP 相似度过滤。实验表明，使用 COYO-700M 训练的 ALIGN、unCLIP 和 ViT 模型达到了与原始论文报告相当甚至更好的性能，验证了该数据集的高质量。

## 数据示例

### 数据格式说明

每条数据包含：
- `id`：64 位唯一整数 ID
- `url`：图像 URL
- `text`：图像的 alt 文本描述
- `width/height`：图像宽高
- `image_phash`：图像感知哈希
- `clip_similarity_vitb32/vitl14`：CLIP ViT-B/32 和 ViT-L/14 相似度
- `nsfw_score_opennsfw2/gantman`：NSFW 检测分数
- `aesthetic_score_laion_v2`：美学评分

### 真实样本示例

**样本 1**
```json
{
  "id": 4896263451343,
  "url": "https://cdn.shoptify.com/s/files/...",
  "text": "Fishing Fleet (Monterey), California art by Art Riley",
  "width": 600,
  "height": 447,
  "clip_similarity_vitb32": 0.319336,
  "clip_similarity_vitl14": 0.248169,
  "aesthetic_score_laion_v2": 7.04812
}
```

**样本 2**
```json
{
  "id": 1425929344479,
  "url": "https://www.ephotazine.com/...",
  "text": "The Gate by Pete2453",
  "width": 600,
  "height": 347,
  "clip_similarity_vitb32": 0.24939,
  "clip_similarity_vitl14": 0.203735,
  "aesthetic_score_laion_v2": 6.98521
}
```

**样本 3**
```json
{
  "id": 7456063527931,
  "url": "https://www.boredart.com/...",
  "text": "Beautiful Pictures From the Shores of the Mythical Land",
  "width": 600,
  "height": 320,
  "clip_similarity_vitb32": 0.290771,
  "clip_similarity_vitl14": 0.179321,
  "aesthetic_score_laion_v2": 6.94643
}
```

### 数据集统计

| 指标 | 数值 |
|------|------|
| 图像-文本对总数 | 746,972,269 |
| 唯一 URL 数 | 656,114,783 (87.84%) |
| 唯一图像 phash 数 | 579,679,137 (77.60%) |
| 唯一文本数 | 566,253,888 (75.81%) |
| 平均图像宽度 | 621.78 |
| 平均图像高度 | 540.99 |
| 平均文本长度 | 68.53 字符 |

### 质量过滤标准

| 过滤类型 | 标准 |
|---------|------|
| 图像大小 | ≥5KB |
| 纵横比 | ≤3.0 |
| 最小尺寸 | min(width, height) ≥ 200 |
| NSFW | OpenNSFW2/GantMan 分数 < 0.5 |
| 文本长度 | 6-1000 字符 |
| 文本词数 | 3-256 词 |
| 文本重复 | 出现次数 ≤10 |
| 去重 | 基于 (image_phash, text) 组合去重 |
