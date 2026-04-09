# Flickr30k

## 数据集简介

Flickr30k是由University of Illinois Urbana-Champaign于2014年发布的图像描述数据集，包含31,000张从Flickr网站采集的图片，每张图片配有5句人工撰写的英文描述句子。该数据集是图像字幕（image captioning）任务的开创性基准之一，直接推动了encoder-decoder架构在多模态任务中的应用，后续扩展出Flickr8k（子集）和Flickr30k Entities（实体链接版本）等变体，在图像理解和文本生成研究中具有重要地位。

## 相关链接

- **官网/论文**: https://shannon.cs.illinois.edu/DenotationGraph/
- **GitHub**: https://github.com/BryanPlummer/flickr30k_entities
- **在线体验/Demo**: https://huggingface.co/datasets/flickr30k

## 相关论文

**论文标题**: From Image Description to Visual Denotations: Towards Theory-Driven Semantic Matching
**作者**: Plummer, Bryan A. et al. (University of Illinois Urbana-Champaign)
**年份**: 2015 (ICCV 2015)
**摘要**: Flickr30k数据集包含31,000张图片，每张图片配有5句共155,000个人工撰写的描述句子，是图像字幕任务的重要基准。论文提出了从图像描述到视觉指示的理论驱动语义匹配框架，建立了图像区域与描述短语的细粒度对应关系，推动了视觉-语言跨模态理解的理论与应用研究。

## 数据示例

**数据格式说明**: 原始数据每行包含图片ID和5个描述句子，以制表符分隔；Entities版本额外标注了每个描述中提到的实体及其在图像中的边界框。

**标准格式样例**:
```
1000092795.jpg#0	A man in an orangish-red shirt and dark shorts is凝视 into the distance.
1000092795.jpg#1	A man with long dreadlocks wearing a red shirt is standing near the ocean.
1000092795.jpg#2	Someone wearing what appears to be a life vest of reddish-orange tones.
1000092795.jpg#3	A man wearing an orange life vest stares out at the rocky shoreline.
1000092795.jpg#4	A man in a bright orange shirt stands on the rocks overlooking the water.
```

**Entities格式样例**:
```json
{
  "image_id": "1000092795.jpg",
  "split": "test",
  "entities": [
    {
      "sentence_id": 0,
      "text": "man",
      "entity_id": 1,
      "bbox": [215, 77, 72, 191]
    },
    {
      "text": "shirt",
      "entity_id": 2,
      "bbox": [237, 140, 39, 47]
    },
    {
      "text": "ocean",
      "entity_id": 3,
      "bbox": [0, 200, 640, 268]
    }
  ]
}
```

**图像描述样例**:
| 图片ID | 描述句子 |
|--------|----------|
| 1000092795.jpg | A man in an orangish-red shirt and dark shorts is looking into the distance. |
| 1000092795.jpg | A man with long dreadlocks wearing a red shirt is standing near the ocean. |
| 1000092795.jpg | Someone wearing what appears to be a life vest of reddish-orange tones. |
| 1000092795.jpg | A man wearing an orange life vest stares out at the rocky shoreline. |
| 1000092795.jpg | A man in a bright orange shirt stands on the rocks overlooking the water. |
