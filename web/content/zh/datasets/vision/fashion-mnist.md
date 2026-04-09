# Fashion-MNIST

## 数据集简介

Fashion-MNIST 是一个用于替代 MNIST 的时尚商品图像分类数据集，由 Zalando Research 于 2017 年发布。该数据集包含 70,000 张 28×28 像素的灰度时尚商品图像，涵盖 10 个类别，包括 T 恤、裤子、套头衫、裙子、外套、凉鞋、衬衫、运动鞋、包和靴子。每个类别 7,000 张图像，其中 60,000 张用于训练，10,000 张用于测试。Fashion-MNIST 的出现是因为 MNIST 过于简单（模型准确率已达 99%+），研究者需要更具挑战性的图像分类基准来评估机器学习算法。数据集保留了 MNIST 的数据格式和复杂度，便于快速迁移和比较。

## 相关链接

- **官网/论文**: https://github.com/zalandoresearch/fashion-mnist
- **GitHub**: https://github.com/zalandoresearch/fashion-mnist
- **在线 Demo**: https://playground.koen.cloud/

## 相关论文

**Fashion-MNIST: a Novel Image Dataset for Benchmarking Machine Learning Algorithms**

- **作者**: Han Xiao, Kashif Rasul, Roland Vollgraf
- **年份**: 2017
- **摘要**: 本文介绍了 Fashion-MNIST 数据集，旨在作为 MNIST 的直接替代品，用于基准测试机器学习算法。该数据集包含 10 个类别的时尚商品图像，具有相似的图像尺寸和数据结构，同时提供了更高的分类难度。论文详细说明了数据集的构建过程、类别定义以及在多个经典机器学习模型上的基准测试结果。

## 数据示例

### 数据格式说明

Fashion-MNIST 使用与原始 MNIST 相同的 IDX 格式存储：
- 图像数据：4D uint8 数组，格式为 (n_samples, 1, 28, 28)
- 标签数据：1D uint8 数组，格式为 (n_samples,)，值为 0-9

每张图像为 28×28 像素，像素值范围 0-255。

### 类别标签对照

| 标签 | 类别名称 | 英文名 |
|------|----------|--------|
| 0 | T 恤/上衣 | T-shirt/top |
| 1 | 裤子 | Trouser |
| 2 | 套头衫 | Pullover |
| 3 | 裙子 | Dress |
| 4 | 外套 | Coat |
| 5 | 凉鞋 | Sandal |
| 6 | 衬衫 | Shirt |
| 7 | 运动鞋 | Sneaker |
| 8 | 包 | Bag |
| 9 | 靴子 | Ankle boot |

### 真实样本

```
样本 1:
标签: 2 (套头衫)
描述: 28×28 灰度图像，显示一件套头衫的轮廓

样本 2:
标签: 9 (靴子)
描述: 28×28 灰度图像，显示一双靴子的轮廓

样本 3:
标签: 6 (衬衫)
描述: 28×28 灰度图像，显示一件衬衫的轮廓
```

### 加载示例 (Python)

```python
import gzip
import numpy as np

def load_fashion_mnist(path, kind='train'):
    labels_path = f'{path}/{kind}-labels-idx1-ubyte.gz'
    images_path = f'{path}/{kind}-images-idx3-ubyte.gz'
    
    with gzip.open(labels_path, 'rb') as lbpath:
        labels = np.frombuffer(lbpath.read(), np.uint8, offset=8)
    
    with gzip.open(images_path, 'rb') as impath:
        images = np.frombuffer(impath.read(), np.uint8, offset=16)
        images = images.reshape(len(labels), 28, 28)
    
    return images, labels
```
