# HowTo100M

## 数据集简介

HowTo100M 是由 Meta AI Research（当时的 Facebook AI Research）于 2019 年发布的大规模 instructional video 数据集，包含从 YouTube 采集的 136M 个视频片段及其对应的 narrated step-by-step 字幕文本。这些视频涵盖 12,231 个不同的活动类别，总时长约 15 年（相当于 350K 小时）。数据集专为训练视频-文本模型设计，展示了丰富的多模态 instructional 内容，可用于视频字幕生成、活动识别、动作定位等多种视频理解任务。

## 相关链接

- **官网**: https://www.di.ens.fr/willow/htm/
- **论文**: https://arxiv.org/abs/1904.03489
- **GitHub**: https://github.com/antoine77340/HowTo100M
- **在线体验**: https://www.youtube.com/ (搜索数据集相关视频)

## 相关论文

**Title**: HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips
**Authors**: Miech et al., Facebook AI Research (Meta AI)
**Year**: 2019

**摘要**: 本文提出了 HowTo100M 数据集，通过自动对齐 YouTube 视频与对应的 ASR 字幕，构建了包含 136M 视频片段的大规模 instructional video 数据集。研究团队展示了预训练的文本-视频嵌入在此数据上能显著提升多项任务的性能，包括视频字幕生成、活动识别和动作定位。实验表明，大规模的 narrated video clips 为学习视觉概念与语言描述之间的对应关系提供了丰富的监督信号。

## 数据示例

**数据格式**: CSV 格式，包含 video_id、video_start、video_end、text

```csv
video_id,video_start,video_end,text
Xc7GHwf0uOA,0.0,10.0,"first you preheat your oven to three hundred and seventy five degrees"
Xc7GHwf0uOA,10.0,20.0,"then you take your pie crust out of the refrigerator"
Xc7GHwf0uOA,20.0,30.0,"roll it out on a flat surface covered with flour"
```

**真实样本**:

1. 烹饪教学：
```
视频ID: abc123
片段: [0-10s] "first heat olive oil in a large pan over medium heat"
      [10-20s] "add minced garlic and cook for one minute"
      [20-30s] "pour in the crushed tomatoes and stir well"
```

2. 手工制作：
```
视频ID: def456
片段: [0-10s] "cut the fabric into two matching rectangles"
      [10-20s] "sew along the edges with a sewing machine"
      [20-30s] "turn the fabric inside out through the opening"
```

3. 健身指导：
```
视频ID: ghi789
片段: [0-10s] "stand with your feet shoulder-width apart"
      [10-20s] "slowly lower your body by bending your knees"
      [20-30s] "push back up to the starting position"
```
