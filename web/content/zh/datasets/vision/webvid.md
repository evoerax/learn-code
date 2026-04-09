# WebVid

## 数据集简介

WebVid 是由 Meta AI Research 创建的大规模视频-文本对数据集，用于视频语言学习研究。该数据集从_stock 等素材网站抓取了超过 1000 万个视频片段，每个视频配有详细的文本描述。数据规模达到约 10 万小时视频内容，是目前最大的公开视频-文本数据集之一。WebVid 的文本描述来源于视频的元数据（标题、描述、标签等），涵盖了广泛的日常场景和动作类别，为视频字幕生成、视频检索和视频到文本的生成任务提供了丰富的训练数据。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/2204.14188
- **GitHub**: https://github.com/m-bain/webvid
- **在线体验/Demo**: https://row+ column.github.io/webvid/

## 相关论文

**WebVid: A Large-scale Video-Text Dataset for Language-Driven Video Retrieval**

- **作者**: Bain, M. et al.
- **年份**: 2022
- **摘要**: 本文提出了 WebVid 数据集，一个包含 1000 万视频-文本对的大规模数据集，用于语言驱动的视频检索研究。作者从 stock 素材网站抓取数据并进行了清洗，验证了该数据集在视频字幕生成和视频检索任务上的有效性。实验表明，基于 WebVid 训练的模型在多个基准测试上取得了显著提升，推动了多模态视频理解研究的发展。

## 数据示例

**数据格式说明**: JSON 格式，包含视频元数据和文本描述

```json
{
  "video_id": "unique_video_identifier",
  "video_uri": "https://example.com/video.mp4",
  "text": "A person demonstrating how to make a sandwich in a kitchen",
  "caption_type": "stock_description",
  "duration_sec": 15.5,
  "source": "stock_video_site"
}
```

**真实样本**:

1. **日常动作描述**:
```json
{
  "video_id": "vid_001234",
  "video_uri": "https://example.com/cooking_demo.mp4",
  "text": "Chef chopping vegetables on wooden cutting board in professional kitchen",
  "caption_type": "title",
  "duration_sec": 12.3,
  "source": "cooking_tutorial"
}
```

2. **户外场景描述**:
```json
{
  "video_id": "vid_005678",
  "video_uri": "https://example.com/travel_video.mp4",
  "text": "Aerial view of a bustling city intersection during rush hour with cars and pedestrians",
  "caption_type": "title",
  "duration_sec": 8.7,
  "source": "travel_stock"
}
```

3. **动物行为描述**:
```json
{
  "video_id": "vid_009012",
  "video_uri": "https://example.com/nature_clip.mp4",
  "text": "Close up of a hummingbird feeding on flower nectar in slow motion",
  "caption_type": "description",
  "duration_sec": 6.2,
  "source": "wildlife_stock"
}
```
