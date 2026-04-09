# Kinetics-400

## 数据集简介

Kinetics-400 是 DeepMind 发布的大规模人体动作识别数据集，是视频理解领域最具影响力的基准数据集之一。该数据集从 YouTube 视频中采集，涵盖 400 种人类动作类别，包括日常活动、体育运动、音乐演奏等。每种类别至少包含 400 个视频片段，每个片段时长约 10 秒，并经过人工标注确认。Kinetics-400 于 2017 年发布，总计包含约 30 万个视频片段，是深度学习时代视频分类模型（如 I3D、SlowFast）的核心训练数据。

## 相关链接

- **官网/论文**: https://deepmind.com/research/open-source/kinetics
- **GitHub**: https://github.com/activitynet/ActivityNet
- **数据集下载**: https://console.cloud.google.com/storage/browser/kinetics_download

## 相关论文

**论文标题**: The Kinetics Human Action Video Dataset

**作者**: Will Kay, Joao Carreira, Karen Simonyan, et al.

**年份**: 2017

**摘要**: 本文介绍了 Kinetics 人体动作视频数据集，包含来自 YouTube 的 400 种人类动作类别，共约 30 万个视频片段。每个片段时长约 10 秒，经过人工标注验证。数据集涵盖日常动作（拍手、挥手）、体育运动（篮球、游泳）、乐器演奏等多种类别。该数据集的规模和质量使其成为视频理解模型训练的重要资源，超越了此前所有同类数据集。

## 数据示例

### 数据格式说明

Kinetics-400 数据集目录结构：
```
Kinetics-400/
├── train/          # 训练集，按类别组织
│   ├── abseiling/
│   │   ├── 0kTld30_f CMA.mp4
│   │   ├── 2kxL5tc0UwQ.mp4
│   │   └── ...
│   └── ...
├── val/            # 验证集
└── test/           # 测试集（无标签）
```

### 真实样本

**样本 1 - 视频文件名**:
```
playing piano/0kTld30_f CMA.mp4
```
标签：`playing piano`，YouTube ID：`0kTld30_f CMA`

**样本 2 - 视频元信息**:
```
{
  "youtube_id": "2kxL5tc0UwQ",
  "class": "breaststroke",
  "time_start": 120,
  "duration": 10.0,
  "split": "train"
}
```

**样本 3 - 类别分布**:
```
Classes (400 total): cooking (e.g., making pizza, slicing bread), 
sports (e.g., playing basketball, surfing), 
daily activities (e.g., brushing teeth, walking the dog), 
musical instruments (e.g., playing guitar, playing piano),
etc.
```
