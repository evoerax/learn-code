# CelebA (CelebFaces Attributes Dataset)

## 数据集简介

CelebA 是由香港中文大学（CUHK）多媒体实验室于 2015 年发布的大规模人脸属性数据集，是人脸识别和属性分析领域最具影响力的开源数据集之一。该数据集包含 202,599 张名人人脸图像，每张图像标注了 40 种属性（如发型、面部表情、是否佩戴眼镜等）和 5 个关键点位置。图像均为高质量正面人脸，分辨率高达 178×218 像素。CelebA 的规模、多样性和标注丰富度使其成为人脸属性识别、面部特征提取、生成对抗网络（GAN）等研究的标准训练数据。

## 相关链接

- 官网：http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html
- 论文：https://arxiv.org/abs/1409.1556
- GitHub：https://github.com/tuangauss/Various-projects/tree/master/Python/CelebA
- Hugging Face：https://huggingface.co/datasets/CelebA
- Google Drive：https://drive.google.com/drive/folders/0B7EVK8r0vXpleXRqS1gwY29nQ0k

## 相关论文

**Deep Learning Face Attributes in the Wild**
- 作者：Ziwei Liu, Ping Luo, Xiaogang Wang, Xiaoou Tang
- 年份：2015
- 摘要：本文介绍了 CelebA 数据集的构建过程和特点。该数据集包含超过 20 万张名人人脸图像，每张标注了 40 种属性的二分类标签。论文还提出了一个两-step 框架用于人脸属性识别，首先定位面部区域，然后进行属性分类。实验表明深度卷积神经网络在该任务上表现优异。

## 数据示例

### 数据集结构

- 训练集：162,770 张图像
- 验证集：19,867 张图像
- 测试集：19,962 张图像

标注文件包括：
- `list_attr_celebA.txt`：属性标注（40 种属性）
- `list_landmarks_align_celeba.txt`：5 个关键点坐标
- `identity_CelebA.txt`：人物身份ID
- `list_eval_partition.txt`：数据集划分

### 真实样本示例

**样本 1**
```json
{
  "image_id": "000001.jpg",
  "attributes": {
    "5_o_Clock_Shadow": 0,
    "Arched_Eyebrows": 1,
    "Attractive": 1,
    "Bags_Under_Eyes": 0,
    "Bald": 0,
    "Bangs": 0,
    "Big_Lips": 0,
    "Big_Nose": 0,
    "Black_Hair": 1,
    "Blond_Hair": 0,
    "Blurry": 0,
    "Brown_Hair": 0,
    "Bushy_Eyebrows": 0,
    "Chubby": 0,
    "Double_Chin": 0,
    "Eyeglasses": 0,
    "Goatee": 0,
    "Gray_Hair": 0,
    "Heavy_Makeup": 1,
    "High_Cheekbones": 1,
    "Male": 1,
    "Mouth_Slightly_Open": 1,
    "Mustache": 0,
    "Narrow_Eyes": 0,
    "No_Beard": 1,
    "Oval_Face": 1,
    "Pale_Skin": 0,
    "Pointy_Nose": 1,
    "Receding_Hairline": 0,
    "Rosy_Cheeks": 0,
    "Sideburns": 0,
    "Smiling": 1,
    "Straight_Hair": 0,
    "Wavy_Hair": 1,
    "Wearing_Earrings": 1,
    "Wearing_Hat": 0,
    "Wearing_Lipstick": 1,
    "Wearing_Necklace": 0,
    "Wearing_Necktie": 0,
    "Young": 1
  },
  "landmarks": {
    "left_eye": [68, 95],
    "right_eye": [110, 95],
    "nose": [89, 125],
    "mouth_left": [70, 150],
    "mouth_right": [108, 150]
  },
  "identity": 2000
}
```

**样本 2**
```json
{
  "image_id": "000002.jpg",
  "attributes": {
    "5_o_Clock_Shadow": 1,
    "Arched_Eyebrows": 1,
    "Attractive": 0,
    "Bags_Under_Eyes": 1,
    "Bald": 0,
    "Bangs": 0,
    "Big_Lips": 0,
    "Big_Nose": 1,
    "Black_Hair": 0,
    "Blond_Hair": 0,
    "Blurry": 0,
    "Brown_Hair": 1,
    "Bushy_Eyebrows": 1,
    "Chubby": 0,
    "Double_Chin": 0,
    "Eyeglasses": 1,
    "Goatee": 0,
    "Gray_Hair": 0,
    "Heavy_Makeup": 0,
    "High_Cheekbones": 0,
    "Male": 1,
    "Mouth_Slightly_Open": 0,
    "Mustache": 0,
    "Narrow_Eyes": 0,
    "No_Beard": 0,
    "Oval_Face": 0,
    "Pale_Skin": 0,
    "Pointy_Nose": 0,
    "Receding_Hairline": 0,
    "Rosy_Cheeks": 0,
    "Sideburns": 0,
    "Smiling": 0,
    "Straight_Hair": 1,
    "Wavy_Hair": 0,
    "Wearing_Earrings": 0,
    "Wearing_Hat": 0,
    "Wearing_Lipstick": 0,
    "Wearing_Necklace": 0,
    "Wearing_Necktie": 0,
    "Young": 0
  },
  "landmarks": {
    "left_eye": [65, 92],
    "right_eye": [112, 93],
    "nose": [88, 122],
    "mouth_left": [72, 148],
    "mouth_right": [107, 149],
  },
  "identity": 1875
}
```

### 40 种属性列表

属性分为以下几类：
- **面部特征**：Bald、Bangs、Black_Hair、Blond_Hair、Brown_Hair、Gray_Hair、Receding_Hairline、Straight_Hair、Wavy_Hair
- **面部形状**：Chubby、Double_Chin、Oval_Face、Pointy_Nose、Big_Nose
- **眼睛眉毛**：Arched_Eyebrows、Bag_Under_Eyes、Bushy_Eyebrows、Narrow_Eyes
- **表情状态**：Eyeglasses、Smiling、Mouth_Slightly_Open、No_Beard、Mustache、Goatee、Sideburns
- **其他属性**：Young、Old、Pale_Skin、Rosy_Cheeks、Heavy_Makeup、Wearing_Lipstick、Wearing_Earrings、Wearing_Necklace、Wearing_Necktie、Wearing_Hat、Blurry