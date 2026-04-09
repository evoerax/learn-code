# Food-101 数据集

## 数据集简介

Food-101是由苏黎世联邦理工学院于2014年发布的大规模食品图像分类数据集，旨在推动细粒度视觉分类研究。该数据集包含101,000张图像，涵盖101种不同食品类别（如寿司、牛排、披萨等），每类约1000张图像，其中750张用于训练，250张用于测试。数据集从Foodspotting网站收集，图像具有较高的类内差异和类间相似性（如不同类型的沙拉）。作为细粒度分类基准，Food-101比通用图像分类更具挑战性，因为食品类别的区分往往依赖于细微的纹理、形状和颜色差异。该数据集已成为评估深度学习模型在细粒度分类任务上的标准基准之一。

## 相关链接

- **官网/论文**: https://data.caltech.edu/records/m4t4c-ctg82
- **GitHub**: https://github.com/anishLearning/Food-101
- **在线体验/Demo**: https://huggingface.co/spaces/akhaliq/food101

## 相关论文

**Food-101 -- Mining Discriminative Components with Random Forests**  
Lukas Bossard, Matthieu Guillaumin, Luc Van Gool  
ECCV 2014  

本文提出了Food-101数据集，并使用随机森林结合颜色直方图、兴趣点描述符等传统特征进行食品分类。研究发现，即使使用深度学习方法，Food-101仍具挑战性，因为食品图像的类内变异大、类间相似度高。该论文为细粒度图像分类研究提供了重要基准，推动了后续基于CNN的食品识别研究发展。

## 数据示例

**数据格式说明**

Food-101使用JPEG格式图像，文件结构如下：
```
food-101/
  images/
    apple_pie/
      1005649.jpg
      1014118.jpg
      ...
    sushi/
      1002676.jpg
      ...
  meta/
    classes.txt      # 101个类别名称列表
    train.txt         # 训练集图像路径列表
    test.txt          # 测试集图像路径列表
```

**真实样本**

1. 图像路径: `food-101/images/pizza/1001117.jpg`  
   类别标签: `pizza`  
   描述: 意大利披萨，顶部有番茄酱、莫扎里拉奶酪和意大利香肠

2. 图像路径: `food-101/images/sushi/1002676.jpg`  
   类别标签: `sushi`  
   描述: 日式寿司拼盘，包含三文鱼、金枪鱼和黄瓜卷

3. 图像路径: `food-101/images/hamburger/1003217.jpg`  
   类别标签: `hamburger`  
   描述: 美式汉堡，包含牛肉饼、生菜、番茄和酱料
