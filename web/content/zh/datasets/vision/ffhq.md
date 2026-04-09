# FFHQ (Flickr-Faces-High-Quality)

## 数据集简介

FFHQ (Flickr-Faces-High-Quality) 是 NVIDIA 于 2019 年发布的高质量人脸图像数据集，专为生成对抗网络（GAN）训练而设计。该数据集从 Flickr 网站采集，包含 70,000 张 1024×1024 分辨率的高质量人脸图像，涵盖不同年龄（从婴儿到老人）、种族、表情、眼镜样式、背景复杂度等多样性因素。FFHQ 的图像经过筛选，确保输出质量高、无水印、适合训练。FFHQ 已成为人脸生成、编辑、属性操控等研究的标准数据集，是 StyleGAN 系列模型的关键训练数据。

## 相关链接

- **官网/论文**: https://github.com/NVlabs/ffhq-dataset
- **GitHub**: https://github.com/NVlabs/ffhq-dataset
- **数据集下载**: https://www.dropbox.com/s/kl5r0cl0qvw02k2/ffhq.zip

## 相关论文

**论文标题**: A Style-Based Generator Architecture for Generative Adversarial Networks

**作者**: Tero Karras, Samuli Laine, Timo Aila

**年份**: 2019

**摘要**: 本文提出了 StyleGAN 架构，采用基于风格的生成器设计，能够控制生成图像的不同层面特征（粗糙到精细）。作者使用 FFHQ 数据集进行实验，证明该架构可以生成高质量、多样性的人脸图像，并支持对生成图像进行风格混合和属性操控。FFHQ 的大规模多样性使得 GAN 训练能够捕捉到丰富的人脸变化特征。

## 数据示例

### 数据格式说明

FFHQ 数据集以 PNG 格式存储，每张图像为 1024×1024 分辨率，文件名格式为 `{:05d}.png`（从 00000.png 到 69999.png）。数据集提供年龄、性别、眼镜、姿态等属性的文本索引文件。

### 真实样本

**样本 1 - 文件名**:
```
00000.png
```
标准命名格式，5位数字索引

**样本 2 - 图像元信息**:
```
{
  "index": 12345,
  "age": "20s",
  "gender": "male",
  "glasses": false,
  "pose": "frontal"
}
```

**样本 3 - 数据集划分**:
```
训练集: 70,000 张图像（全部用于训练）
图像尺寸: 1024 × 1024 pixels
颜色空间: RGB
格式: PNG (lossless)
```

**样本 4 - 多样性属性分布**:
```
年龄: 婴儿、儿童、青少年、20s、30s、40s、50s、60s、老年人
种族: 亚裔、黑人、白人、印度裔、拉美裔等
眼镜: 无眼镜、近视眼镜、太阳镜
表情: 中性、微笑、大笑、皱眉等
背景: 简单背景、复杂背景、室内、室外
```
