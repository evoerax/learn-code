# Open Images

## 数据集简介

Open Images 是 Google 发布的大规模图像数据集，旨在为物体检测、实例分割、关系检测等任务提供丰富的训练数据。该数据集包含约 190 万张图像，覆盖 600 种物体类别，并提供图像级标签、边界框、分割掩码等多种标注形式。Open Images 于 2016 年首次发布，后续不断更新扩展，是目前公开可用的最大图像数据集之一。其标注数据经过专业审核，质量较高，广泛应用于计算机视觉模型的训练与评估。

## 相关链接

- **官网/论文**: https://storage.googleapis.com/openimages/web/index.html
- **GitHub**: https://github.com/cvdfoundation/open-images-dataset
- **在线Demo**: https://pair-code.github.io/interpretability/image_policy/

## 相关论文

**论文标题**: Open Images Dataset V4: Unified Image Classification, Object Detection and Relationship Detection at Scale

**作者**: Alina Kuznetsova, Hassan Rom, Neil Alldrin, et al.

**年份**: 2020

**摘要**: 本文介绍了 Open Images V4 数据集，包含 190 万张图像、600 类物体、1600 万图像级标签、280 万物体边界框和 190 万实例分割掩码。该数据集的特点是提供了物体关系（person–keyboard, knife–plate 等）的标注，可用于关系检测研究。数据集采用开放许可证，支持大规模视觉模型的训练。

## 数据示例

### 数据格式说明

Open Images 提供多种标注格式，边界框标注以 CSV 格式存储：

```csv
ImageID,Source,LabelName,Confidence,YMin,XMin,YMax,XMax,IsOccluded,IsTruncated,IsGroupOf,IsDepiction,IsInside
```

### 真实样本

**样本 1 - 边界框标注**:
```
f8082764e9a00c3b,activemil,ClassX,0.94,0.12,0.45,0.85,0.92,0,1,0,0,0
```

**样本 2 - 图像级标签**:
```
ImageID,Confidence,LabelName
f8082764e9a00c3b,0.95,/m/0jg57
```

**样本 3 - 关系标注**:
```
ImageID,RelationshipLabel,SourceImageID,Label1Name,Label2Name
f8082764e9a00c3b,wearing,_,/m/0cmf2,/m/04g469
```
