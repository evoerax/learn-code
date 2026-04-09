# LAMBADA

## 数据集简介

LAMBADA（LAnguage Modeling Broadened to Account for Discourse Aspects）是一个用于评估语言模型对长文本语境理解能力的数据集。由Paperno等人于2016年发布，包含约10,000个句子对，专门测试模型是否能够利用更广泛的文本语境来预测句子的最后一个词。该数据集的设计理念是：人类能够利用完整的上下文信息来理解句子末尾的词语，但许多语言模型却无法做到这一点，这使其成为评估语言模型长距离依赖理解能力的重要基准。LAMBADA基于BookCorpus构建，所有句子都来自小说文本，确保了语言的流畅性和叙事性。

## 相关链接

- 官网/论文：https://arxiv.org/abs/1606.06031
- GitHub：https://github.com/facebookresearch/LAMBDADataset
- 在线体验：https://paperswithcode.com/sota/language-modelling-on-lambada

## 相关论文

**LAMBADA: A Large Dataset of Discourse-Level Formal Paraphrases and Narrative Text**

- **作者**：Denis Paperno, et al.
- **年份**：2016
- **摘要**：LAMBADA是一个大规模数据集，包含约10,000个句子对，专门用于评估语言模型对叙事文本的理解能力。数据集的特点是：人类能够利用完整的段落上下文来预测目标句子中的最后一个词，但单独的句子本身不足以进行准确预测。这一特性使得LAMBADA成为测试语言模型长距离依赖建模能力的理想基准，揭示了当前语言模型在利用更广泛语境信息方面的局限性。

## 数据示例

### 数据格式说明

LAMBADA数据采用JSON格式存储，每个样本包含：
- `context`：前置段落文本（人类可读的最后一句之前的所有内容）
- `sentence`：目标句子（模型需要预测最后一个词的句子）
- `ending`：真实结尾词
- `source`：来源书籍ID
- `title`：书籍标题

### 真实样本

**样本1：**
```json
{
  "context": "They had been walking for what felt like hours. The forest was dense and dark, and the path was barely visible. They were starting to lose hope when they suddenly saw a light in the distance.",
  "sentence": "They rushed towards it and discovered it was a small cabin with smoke coming out of the chimney.",
  "ending": "It",
  "source": "book1",
  "title": "The Adventure Begins"
}
```

**样本2：**
```json
{
  "context": "Mary walked into the kitchen. She had been cooking all morning for the big dinner party. The table was set with the good china. Everything looked perfect.",
  "sentence": "She tasted the soup and added a pinch of salt.",
  "ending": "It",
  "source": "book2",
  "title": "A Summer Feast"
}
```

**样本3：**
```json
{
  "context": "The old man sat on the bench, looking at the children playing in the park. He remembered his own childhood when he used to run and laugh with his friends. Those days seemed so far away now.",
  "sentence": "He sighed and closed his eyes, thinking about his",
  "ending": "past",
  "source": "book3",
  "title": "Memories of Youth"
}
```
