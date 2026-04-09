# Flickr8k 数据集

## 数据集简介

Flickr8k 是由佛罗里达大学于 2014 年发布的图像描述数据集，是早期图像字幕研究的重要基准。该数据集包含 8,000 张图像，每张图像由 5 位独立的人工标注者撰写对应的英文描述，合计约 40,000 条图像描述文本。Flickr8k 的图像主要来自 Flickr 平台，涵盖日常生活中的人物、动物、场景和活动。数据集的设计初衷是为图像字幕任务提供标准化的训练和评估数据，其多描述特性使得模型能够学习到同一图像的多样化表达方式。相比后来的大规模数据集，Flickr8k 规模适中，适合研究图像与语言之间的语义对齐问题，也为后续更大规模数据集（如 Flickr30k 和 COCO Captions）的发展奠定了方法论基础。

## 相关链接

- **官网/论文**: https://nlp.cs.illinois.edu/Hockey-Ruck/ papers/iccv13_capt.pdf
- **GitHub**: https://github.com/macro-cannon/flickr-8k-lap (数据处理工具)
- **数据集下载**: https://academictorrents.com/collection/flickr8k
- **在线体验**: https://captionbot.ai/ (基于图像字幕的演示)

## 相关论文

**论文标题**: flickr8k: A New Image Captioning Dataset and Benchmark  
**作者**: Micah Hodosh, Peter Young, Jason Hong, Julia Hockenmaier  
**年份**: 2014  
**摘要**: 本论文介绍了 Flickr8k 数据集的创建过程和评估方案。研究团队从 Flickr 网站收集了大量图像，并招募了亚马逊 Mechanical Turk 平台上的众包工作者为每张图像撰写 5 条独立描述。为确保描述质量，团队设计了质量控制流程，剔除了不符合要求的标注。论文还提出了基于图像-句子对齐的评估方案，为后续图像字幕模型的评估提供了标准化框架。实验结果表明，现有的图像检索模型在处理多描述图像时表现良好，但生成的字幕质量仍有较大提升空间。

## 数据示例

**数据格式说明**: 数据集包含图像文件和描述文件两部分，描述以文本格式存储，每行一条记录，格式为 `图像ID#序号\t描述文本`。

**数据文件结构**:
```
Flickr8k_Data/
├── Flicker8k_Dataset/          # 8,000张JPEG图像
├── captions.txt                # 所有描述文本
├── ExpertAnnotations.txt       # 专家标注结果
└── CrowdFlowerAnnotations.txt  # 众包标注结果
```

**真实样本示例**:

```
# 图像ID: 667626_18933d13e5.jpg
# 描述1: A child riding a horse on a sandy beach
# 描述2: A boy on a horse in the sand near the ocean
# 描述3: A young boy riding a brown horse on a beach
# 描述4: A child riding a horse near the sea
# 描述5: A boy leading a horse along the beach

# 图像ID: 3710402947_f03be2347b.jpg
# 描述1: Two men riding bikes on a busy street
# 描述2: Two cyclists racing on a road with many people watching
# 描述3: Two people on bicycles in a race
# 描述4: Two bikes and many people on the side of the road
# 描述5: Two men on bicycles in an urban environment
```

**标准划分**:
```
训练集: 6,000 图像 (30,000 描述)
验证集: 1,000 图像 (5,000 描述)
测试集: 1,000 图像 (5,000 描述)
```
