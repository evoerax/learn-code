# LFW (Labeled Faces in the Wild)

## 数据集简介

LFW 是由美国马萨诸塞大学阿默斯特分校（UMass Amherst）于 2007 年发布的人脸识别基准数据集，是无约束环境下人脸验证（face verification）研究领域最具影响力的数据集之一。该数据集包含 13,233 张来自网络的名人人脸图像，涵盖 5,749 位不同个体，平均每位个体约 2-3 张照片。LFW 的特点是人脸图像在姿态、光照、表情、遮挡等条件上存在极大变化，反映了真实世界的复杂性。数据集采用标准无约束验证协议（unconstrained verification protocol），通过成对匹配测试评估模型性能。LFW 已成为人脸识别算法性能评估的行业标准。

## 相关链接

- 官网：http://vis-www.cs.umass.edu/lfw/
- 论文：http://vis-www.cs.umass.edu/lfw/lfw.pdf
- GitHub：https://github.com/carpedm20/lfw-dataset
- Hugging Face：https://huggingface.co/datasets/lfw

## 相关论文

**Labeled Faces in the Wild: A Database for Studying Face Recognition in Unconstrained Environments**
- 作者：Gary B. Huang, Manu Ramesh, Tamara Berg, Erik Learned-Miller
- 年份：2007
- 摘要：本文介绍了 LFW 数据集的构建过程和评估协议。该数据集包含 13,000+ 张无约束环境下采集的名人人脸图像，用于研究真实世界人脸识别的挑战。论文提出了标准的验证协议和两种测试视图（图像受限/非受限），为后续无约束人脸识别研究提供了统一的评估基准。

## 数据示例

### 数据集结构

- 总图像数：13,233 张
- 个体数量：5,749 人
- 图像格式：JPEG
- 标注方式：姓名文件夹分类

数据集划分为 10 个子集（super partitions），用于交叉验证：
- View 1：用于参数调整的标准训练/测试划分
- View 2：标准评估协议（10 折交叉验证）

### 真实样本示例

**样本 1**
```json
{
  "image_path": "George_W_Bush/George_W_Bush_001.jpg",
  "person_name": "George_W_Bush",
  "dataset_split": "training",
  "face_bbox": [75, 68, 273, 266],
  "landmarks": {
    "left_eye": [127, 135],
    "right_eye": [199, 131],
    "nose": [164, 170],
    "mouth_left": [138, 220],
    "mouth_right": [190, 218]
  }
}
```

**样本 2**
```json
{
  "image_path": "Angela_Merkel/Angela_Merkel_001.jpg",
  "person_name": "Angela_Merkel",
  "dataset_split": "training",
  "face_bbox": [50, 45, 180, 175],
  "landmarks": {
    "left_eye": [82, 95],
    "right_eye": [138, 93],
    "nose": [112, 128],
    "mouth_left": [95, 158],
    "mouth_right": [130, 157]
  }
}
```

**样本 3**
```json
{
  "image_path": "Hugo_Chavez/Hugo_Chavez_001.jpg",
  "person_name": "Hugo_Chavez",
  "dataset_split": "training",
  "face_bbox": [35, 60, 175, 200],
  "landmarks": {
    "left_eye": [78, 108],
    "right_eye": [138, 105],
    "nose": [108, 145],
    "mouth_left": [92, 178],
    "mouth_right": [128, 177]
  }
}
```

### 评估协议

LFW 提供两种评估视图：
- **View 1**：图像受限版本（restricted, external training allowed），允许使用外部数据训练
- **View 2**：图像非受限版本（unrestricted, labeled outside data），可以使用额外的该数据集之外的同一人图像进行训练

评估指标：验证准确率（Verification Accuracy），通过比较 10 折中每折的 300 对正样本和 300 对负样本的匹配分数计算。
