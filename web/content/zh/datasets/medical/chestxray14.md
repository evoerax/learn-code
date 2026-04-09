# ChestX-ray14

## 数据集简介

ChestX-ray14 是美国国立卫生研究院（NIH）发布的大规模胸部 X 光片数据集，是医学影像领域最重要的公开数据集之一。该数据集包含 112,120 张正面胸部 X 光图像，来自 30,805 名独立患者，每张图像标注了 14 种不同肺部疾病的标签（包括肺不张、心脏肥大、胸腔积液、肺炎、气胸、肺结节等）。数据集旨在支持胸肺疾病自动检测和医学影像深度学习研究。由于其大规模标注和公开可用性，ChestX-ray14 成为医学影像 AI 领域最广泛使用的基准数据集之一，推动了多标签医学图像分类技术的发展。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1705.02315
- **数据集下载**: https://www.kaggle.com/datasets/nih-chest-xrays
- **官方主页**: https://nihcc.app.box.com/v/ChestXray-NIHCC

## 相关论文

**ChestX-ray8: Hospital-scale Chest X-ray Database and Benchmarks on Weakly-Supervised Classification and Localization of Common Thorax Diseases**
- **作者**: Huijuan Wang, et al.
- **年份**: 2017
- **摘要**: 本文介绍了 ChestX-ray8 数据集，这是一个医院级规模的胸部 X 光数据库，包含 112,120 张来自 30,805 名患者的正面胸部 X 光图像。我们提出了利用图像级标签进行疾病分类和定位的弱监督学习方法。实验表明，深卷积神经网络能够从 X 光图像中自动学习疾病特征，在 8 种常见胸肺疾病的分类任务上取得了良好效果。该数据集和基准为未来医学影像分析和计算机辅助诊断研究提供了重要基础。（约 100 字）

## 数据示例

**图像格式说明**
- 图像格式: PNG
- 分辨率: 1024 × 1024 像素
- 颜色空间: Grayscale (单通道)
- 每张图像附带 XML 元数据文件

**样本示例**

```json
{
  "image_id": "00000001_000.png",
  "patient_id": "P00001",
  "findings": [
    "no_finding"
  ],
  "view_position": "PA"
}
```

```json
{
  "image_id": "00012345_008.png",
  "patient_id": "P12345",
  "findings": [
    "cardiomegaly",
    "pleural_thickening"
  ],
  "view_position": "AP"
}
```

```json
{
  "image_id": "00024680_015.png",
  "patient_id": "P24680",
  "findings": [
    "pneumonia",
    "effusion"
  ],
  "view_position": "PA"
}
```

**14 种疾病类别**
Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, Pneumothorax, Consolidation, Edema, Emphysema, Fibrosis, Pleural_Thickening, Hernia

**数据划分**
- 训练集: 约 86,524 张图像
- 验证集: 约 10,000 张图像
- 测试集: 约 25,596 张图像
