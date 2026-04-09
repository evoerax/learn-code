# SAM (Segment Anything Model) 分割数据集

## 数据集简介

SA-1B（Segment Anything 1-Billion）是由 Meta AI 研究团队发布的大规模图像分割数据集，旨在为图像分割任务提供前所未有的规模和多样性。该数据集包含约 1100 万张高分辨率图像和超过 10 亿个高质量分割掩码，这些掩码由 SAM 模型自动生成并经过精心设计的数据管道筛选确保质量。SA-1B 的图像来源于多元化来源，涵盖各种场景、物体类型和拍摄条件。数据集的核心创新在于其规模——比任何现有分割数据集大约 400 倍——这使得训练大规模分割模型成为可能。SA-1B 为计算机视觉领域的"分割一切"（Segment Anything）任务奠定了数据基础，推动了开放词汇分割、实例分割和全景分割等任务的发展。

## 相关链接

- **官网/论文链接**: https://ai.meta.com/datasets/segment-anything
- **GitHub**: https://github.com/facebookresearch/segment-anything
- **在线体验/Demo**: https://segment-anything.com

## 相关论文

**论文标题**: Segment Anything  
**作者**: Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alex Berg, Wan-Yen Lo, Piotr Dollar, Ross Girshick  
**年份**: 2023  
**摘要**: 本文提出了 Segment Anything Model (SAM) 和 Segment Anything 1-Billion (SA-1B) 数据集。SAM 是一个基于 Transformer 的图像分割基础模型，能够根据各种用户提示（点、框、文本等）生成分割掩码。SA-1B 数据集包含 1100 万张图像和 10 亿个分割掩码，是迄今为止最大的分割数据集。实验表明，在丰富多样的数据上训练的 SAM 展现出强大的零样本和少样本迁移能力，在 23 个分割数据集上取得了领先成绩。

## 数据示例

**数据格式说明**

SA-1B 使用高效的压缩格式存储分割掩码：
- 图像以 JPEG 格式存储，分辨率较高（通常 3300×2100 或类似）
- 掩码以行程编码（Run-Length Encoding, RLE）格式存储在 COCO RLE 格式中
- 掩码以 640×640 的分辨率预测，然后上采样到原始图像尺寸
- 每张图像平均约 100 个分割掩码

**真实样本**

```json
// 图像和掩码元数据结构
{
  "image_id": "34020066412",
  "width": 3300,
  "height": 2190,
  "file_name": "34020066412.jpeg",
  "annotations": [
    {
      "id": 1,
      "segmentation": {
        "size": [2190, 3300],
        "counts": "...(RLE encoded mask)..."
      },
      "bbox": [821, 412, 1024, 756],
      "category_id": 0
    }
  ]
}
```

```python
# 使用 pycocotools 解码 RLE 掩码
from pycocotools import mask as mask_util

# RLE 格式的掩码
rle = {
    'size': [2190, 3300],
    'counts': '...(压缩的行程编码)...'
}
# 解码为二进制掩码
binary_mask = mask_util.decode(rle)
# shape: (2190, 3300), dtype: uint8
```

```json
// SA-1B 掩码统计信息（每张图像）
{
  "image_id": "12220012345",
  "num_annotations": 87,
  "annotation_types": {
    "things": 45,
    "stuff": 42
  },
  "area_distribution": {
    "small": 23,    // < 32² pixels
    "medium": 41,   // 32² - 96² pixels  
    "large": 23     // > 96² pixels
  }
}
```
