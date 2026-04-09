# BookCorpus

## 数据集简介

BookCorpus 是一个大规模句子级文本数据集，包含约 11,038 部未出版书籍的 74,004,228 个句子。这些书籍来自 Smashwords 等免费在线图书馆，涵盖 romance、Fantasy、学位论文等多种类型。该数据集由多伦多大学和 Stanford 于 2015 年联合发布，主要用于训练 paragraph-level 句子表示模型。BookCorpus 是 BERT 等预训练语言模型的关键训练数据来源之一，其长距离上下文特性使其区别于其他短文本语料库。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网 | https://huggingface.co/datasets/bookcorpus |
| 论文 | https://arxiv.org/abs/1506.06724 |
| GitHub | https://github.com/soskek/bookcorpus |

## 相关论文

**Journal of Machine Learning Research (JMLR) - 2015**

**Title:** Skip-Thought Vectors

**Authors:** Jamie Kiros, Yukun Zhu, Ruslan R. Salakhutdinov, Richard Zemel, Raquel Urtasun, Antonio Torralba, Sanja Fidler

**Abstract:** 提出 Skip-thought 模型，通过预测相邻句子来学习通用句子表示。BookCorpus 作为训练语料库，使得模型能够捕获长距离语义依赖关系。这种句子级别的表示学习方法为后续 BERT 等预训练模型奠定了基础。

## 数据示例

### 数据格式说明

BookCorpus 数据以纯文本形式存储，每本书籍包含多个句子，句子之间以换行符分隔。

### 真实样本

**样本 1 - 浪漫小说片段:**
```
He was tall, with an intimidating height and dark hair that made the women in his village swoon.
She had never seen anyone so handsome, with his strong jawline and piercing blue eyes.
```

**样本 2 - 奇幻小说片段:**
```
The dragon's scales shimmered like emeralds in the morning light.
She raised her sword, knowing this battle would determine the fate of the kingdom.
```

**样本 3 -  Thriller小说片段:**
```
The detective examined the crime scene with meticulous precision.
Every detail mattered in this game of cat and mouse between hunter and prey.
```

### 统计信息

| 指标 | 数值 |
|------|------|
| 书籍数量 | ~11,038 |
| 句子数量 | 74,004,228 |
| 平均句子长度 | ~14 words |
| 数据来源 | Smashwords |
| 发布机构 | Toronto University + Stanford |
| 发布时间 | 2015 |
