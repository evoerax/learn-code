# Criteo (Display Advertising Dataset)

## 数据集简介

Criteo 数据集是全球最大的展示广告平台 Criteo 发布的点击率预测基准数据集。该数据集最初于 2014 年发布用于 Kaggle 竞赛，包含约 4500 万条用户广告交互记录，每条记录包含 13 个整数特征和 26 个类别特征，用于预测用户是否会点击广告。Criteo 数据集是推荐系统和 CTR 预测领域最广泛使用的大规模基准数据集之一，其特点是数据规模大、特征稀疏性强、类别分布不均衡，能够有效评估模型在实际工业场景中的性能。

## 相关链接

- 官网/论文：https://www.kaggle.com/datasets/criteo
- GitHub：https://github.com/AntFrantz/kaggle-criteo
- Kaggle 竞赛：https://www.kaggle.com/competitions/criteo-display-ad-challenge

## 相关论文

**Display Advertising Challenge: A Kaggle Competition**
- 作者：Criteo Research Team
- 年份：2014
- 摘要：本文介绍了 Criteo 展示广告挑战赛，该竞赛提供了一个大规模点击率预测数据集。数据集包含约 4500 万条训练样本，13 个数值特征和 26 个类别特征。参赛者需要构建点击率预测模型，评估指标为 ROC AUC。竞赛吸引了超过 700 支队伍参与，推动了点击率预测算法的研究发展。

## 数据示例

### 数据格式说明

Criteo 数据集使用 TSV 格式存储，包含 40 列（1 列标签 + 39 列特征）。

```bash
# 数据字段说明
label:     1 表示点击，0 表示未点击
int_1-13:  13 个整数特征
cat_1-26:  26 个类别特征（哈希编码）
```

### 真实样本

#### 样本 1（点击）

```
label: 1
int_1: 0    int_2: 48   int_3: 102  int_4: 1
int_5: 0    int_6: 5    int_7: 0    int_8: 35
int_9: 0    int_10: 0   int_11: 0   int_12: 5   int_13: 4
cat_1: 6b4d0f53    cat_2: 05db9254    cat_3: e5b16308    ...
```

#### 样本 2（未点击）

```
label: 0
int_1: 1    int_2: 102  int_3: 0    int_4: 0
int_5: 0    int_6: 12   int_7: 0    int_8: 0
int_9: 0    int_10: 0   int_11: 0   int_12: 2   int_13: 8
cat_1: 68a28bce    cat_2: 31f5ddb5    cat_3: 00b4b0ef    ...
```

#### 特征统计

| 特征类型 | 数量 | 示例值范围 |
|---------|------|-----------|
| 整数特征 | 13 | 0 - 10,000+ |
| 类别特征 | 26 | 哈希编码字符串 |
| 标签 | 1 | 0 或 1 |

---

*文档版本: 1.0 | 最后更新: 2026年4月*
