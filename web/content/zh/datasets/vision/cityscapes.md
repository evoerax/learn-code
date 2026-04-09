# Cityscapes

## 数据集简介

Cityscapes 是由戴姆勒研究院和马克斯·普朗克信息学研究所于 2016 年发布的大规模城市街景理解数据集，主要用于自动驾驶场景中的像素级语义分割和实例分割任务。该数据集收录了来自 50 个不同欧洲城市的街景图像，包含 5,000 张带有精细标注的高质量图像（训练集 2,975 张，验证集 500 张，测试集 1,525 张）以及 20,000 张带有粗糙标注的图像。Cityscapes 定义了 30 个语义类别，其中 19 个类别用于官方评估，涵盖道路、建筑、行人、车辆、交通标志等城市交通场景中的关键元素。该数据集推动了自动驾驶感知系统从简单的目标检测向像素级语义理解的发展。

## 相关链接

- 官网/论文: https://www.cityscapes-dataset.com/
- GitHub: https://github.com/mcordts/cityscapesScripts
- 在线体验: https://huggingface.co/datasets/cityscapes

## 相关论文

**The Cityscapes Dataset for Semantic Urban Scene Understanding**

- 作者: Marius Cordts, Mohamed Omran, Sebastian Ramos, Timo Rehfeld, Markus Enzweiler, Rodrigo Benenson, Uwe Franke, Stefan Roth, Bernt Schiele
- 年份: 2016
- 摘要: 本文介绍了 Cityscapes 数据集的创建过程和特点，专门针对城市街景的语义理解任务。该数据集通过在车内固定位置拍摄获取高质量图像，并邀请专业标注人员进行像素级标注。作者还提出了基于该数据集的评估基准和基线方法，展示了深度卷积神经网络在城市语义分割任务上的潜力。Cityscapes 已成为自动驾驶领域最具影响力的数据集之一。

## 数据示例

**数据格式说明**: 图像数据 + JSON 标注文件，标注包含像素级语义标签和实例 ID

**样本 1**:
```json
{
  "image_path": "leftImg8bit/train/zurich/zurich_000001_000019_leftImg8bit.png",
  "annotation_path": "gtFine/train/zurich/zurich_000001_000019_gtFine_labelIds.png",
  "city": "zurich",
  "labels": ["road", "sidewalk", "building", "car", "pedestrian", "traffic sign"]
}
```

**样本 2**:
```json
{
  "image_path": "leftImg8bit/val/lindau/lindau_000000_000019_leftImg8bit.png",
  "annotation_path": "gtFine/val/lindau/lindau_000000_000019_gtFine_labelIds.png",
  "city": "lindau",
  "labels": ["road", "vegetation", "car", "bicycle", "traffic light"]
}
```

**样本 3**:
```json
{
  "image_path": "leftImg8bit/test/munster/munster_000100_000019_leftImg8bit.png",
  "annotation_path": "gtFine/test/munster/munster_000100_000019_gtFine_labelIds.png",
  "city": "munster",
  "labels": ["road", "sidewalk", "building", "pole", "person", "truck", "bus"]
}
```
