# IMDb (Internet Movie Database)

## 数据集简介

IMDb 是由斯坦福大学 Andrew Maas 等人于 2011 年发布的大规模电影评论情感分类数据集，专门用于二分类情感分析任务。该数据集包含 50,000 条英文电影评论，其中训练集和测试集各 25,000 条，且正负样本均衡分布（各 12,500 条）。每条评论由评论文本和对应的情感标签（positive/negative）组成，未使用中性评价以确保二分类的清晰性。IMDb 数据集的特点是评论来源于真实的互联网用户，语言表达自然，包含大量俚语、拼写变体和复杂句式，是评估文本分类模型在真实场景下表现的重要基准。

## 相关链接

- 官网/论文: https://ai.stanford.edu/~amaas/data/sentiment/
- GitHub: https://github.com/dennybritz/deeplearning-papernotes/blob/master/papers/sentiment.md
- 在线体验: https://huggingface.co/datasets/imdb

## 相关论文

**Learning Word Vectors for Sentiment Analysis**

- 作者: Andrew L. Maas, Raymond E. Daly, Peter T. Pham, Dan Huang, Andrew Y. Ng, Christopher Potts
- 年份: 2011
- 摘要: 本文提出使用无监督特征学习从 IMDb 文档中学习词向量，并将其应用于情感分类任务。作者展示了学习到的词向量能够捕获情感语义，且使用这些特征的传统线性模型就能取得与复杂深度模型相当的性能。该工作证明了词表示学习对情感分析任务的重要性，为后续情感分析研究提供了重要的数据集和基线模型。

## 数据示例

**数据格式说明**: 文本文件，每行一条评论，标签由文件夹名称决定（train/pos/, train/neg/, test/pos/, test/neg/）

**样本 1**:
```
text: "This is easily the most underrated film in the Coppola catalog. The cinematography is absolutely gorgeous, and the performances are all-around solid. Brando gives a particularly nuanced performance as the dying patriarch. A masterpiece of American cinema."
label: positive
```

**样本 2**:
```
text: "I cannot believe this movie got made. The acting is terrible, the script is nonsensical, and the pacing is completely off. Worst two hours of my life. Complete waste of money and time."
label: negative
```

**样本 3**:
```
text: "While the premise sounded promising, the execution fell flat. The plot had more holes than Swiss cheese, and character motivations were completely unclear. Some scenes seemed to go on forever without purpose."
label: negative
```
