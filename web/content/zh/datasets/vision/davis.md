# DAVIS (Densely Annotated Video Object Segmentation)

## 数据集简介

DAVIS 是视频目标分割（Dense Video Object Segmentation）领域最具影响力的基准数据集，由瑞士苏黎世联邦理工学院（ETH Zurich）于 2016 年发布。该数据集专注于半监督视频目标分割任务，即给定视频第一帧的目标掩码，模型需要在后续帧中精确分割出目标物体。DAVIS 2016 包含 50 个高画质视频序列，共标注了 78 个前景目标，总计约 3,455 帧。视频内容涵盖多样化场景，包括人体运动、动物活动、车辆行驶等复杂场景，所有视频均以 480p 分辨率录制，帧率为 24fps 或 30fps。DAVIS 因其精细的像素级标注和严格的评估协议，成为视频目标分割领域论文报道性能的标准基准数据集，推动了该领域从传统方法向深度学习方法的演进。

## 相关链接

- **官网/代码**: https://davischallenge.org/
- **GitHub**: https://github.com/davisvideochallenge/davis2017-evaluation
- **论文链接**: The 2017 DAVIS Challenge on Video Object Segmentation (arXiv:1704.00675)
- **在线体验/Demo**: https://interactive-segmentation.com/

## 相关论文

**论文标题**: A Benchmark Dataset and Evaluation Methodology for Video Object Segmentation

**作者**: Federico Perazzi, Jordi Pont-Tuset, Brian McWilliams, Luc Van Gool, Markus Gross, Alexander Sorkine-Hornung

**年份**: 2016

**摘要**: 本文提出了 DAVIS（密集标注视频目标分割）基准数据集，旨在解决视频目标分割缺乏统一评估标准的问题。数据集包含 50 个高画质视频序列，共 3,455 帧，像素级标注了 78 个前景目标。我们提出了基于区域相似度和像素精度的评估指标，并提供了详细的实验对比分析。该数据集迅速成为视频目标分割领域的标准基准，实验表明基于轮廓和基于区域的分割方法各有优劣，深度学习方法的引入显著提升了分割精度。

## 数据示例

### 数据格式说明

DAVIS 数据集采用以下目录结构：
```
DAVIS/
├── Annotations/
│   └── 480p/
│       ├── bear/
│       │   ├── 00000.png  # 目标掩码（单通道PNG，白色为目标）
│       │   ├── 00001.png
│       │   └── ...
│       └── ...
├── JPEGImages/
│   └── 480p/
│       ├── bear/
│       │   ├── 00000.jpg  # 原始视频帧
│       │   ├── 00001.jpg
│       │   └── ...
│       └── ...
└── ImageSets/
    └── 480p/
        ├── train.txt      # 训练集视频列表
        └── val.txt        # 验证集视频列表
```

### 真实样本示例

**视频序列名称**: bear

**帧索引**: 00000

**原始帧**: JPEGImages/480p/bear/00000.jpg

**目标掩码**: Annotations/480p/bear/00000.png（单通道图像，白色区域为目标物体）

**元信息**:
```json
{
  "video_name": "bear",
  "num_frames": 104,
  "object_id": 0,
  "resolution": "854x480",
  "fps": 30
}
```

**视频序列名称**: dance-jack

**帧索引**: 00000

**原始帧**: JPEGImages/480p/dance-jack/00000.jpg

**目标掩码**: Annotations/480p/dance-jack/00000.png

**元信息**:
```json
{
  "video_name": "dance-jack",
  "num_frames": 45,
  "object_id": 0,
  "resolution": "854x480",
  "fps": 24
}
```
