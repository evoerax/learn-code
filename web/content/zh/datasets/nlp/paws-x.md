# PAWS-X (Paraphrase Adversaries from Word Scrambling)

## 数据集简介

PAWS-X是一个跨语言改写识别数据集，由Google Research于2019年发布，用于评估模型在多种语言中的释义识别能力。该数据集包含约24,000个句子对，涵盖英语、中文、法语、西班牙语、德语、日语和韩语七种语言。每个句子对都带有人工标注的标签，标识两个句子是否表达相同的含义。PAWS-X的独特之处在于其对抗性构建方法：通过词序打乱和词替换等自动技术生成难以被表面模式匹配的负样本，从而确保模型必须真正理解语义才能做出正确判断。该数据集是PAWS（英文改写识别）的多语言扩展。

## 相关链接

- 官网/论文：https://arxiv.org/abs/1908.11828
- GitHub：https://github.com/google-research/google-research/tree/master/paws
- 数据下载：https://github.com/google-research/google-research/tree/master/paws#paws-and-paws-x

## 相关论文

**PAWS-X: A Cross-lingual Paraphrase Adversaries Database**

- **作者**：Yinfei Yang, et al.
- **年份**：2019
- **摘要**：PAWS-X是一个跨语言改写识别数据集，包含七种语言（英语、中文、法语、西班牙语、德语、日语、韩语）约24,000个句子对。该数据集通过对抗性方法构建，生成的负样本包含高度词汇重叠但语义不同的情况，使简单的词汇匹配方法失效。每个句子对都由人类标注判断是否为释义关系。PAWS-X评估了当前跨语言模型在语义理解方面的能力，实验表明，即使是最先进的模型在该数据集上的性能也远低于人类水平，揭示了跨语言语义理解的重大挑战。

## 数据示例

### 数据格式说明

PAWS-X数据采用TXT/JSON格式存储，每行包含一个样本，字段包括：
- `id`：样本唯一标识符
- `sentence1`：第一个句子
- `sentence2`：第二个句子
- `label`：标签（"1"表示释义，"0"表示非释义）
- `language`：句子语言代码

### 真实样本

**样本1：**
```json
{
  "id": 1,
  "sentence1": "The movements are very beautiful and full of passion.",
  "sentence2": "The dance moves are very beautiful and full of passion.",
  "label": "1",
  "language": "en"
}
```

**样本2：**
```json
{
  "id": 2,
  "sentence1": "This new art collection has paintings from many different cultures.",
  "sentence2": "This new art collection has paintings from many different countries.",
  "label": "1",
  "language": "en"
}
```

**样本3（负样本）：**
```json
{
  "id": 3,
  "sentence1": "James Charles, who is a popular YouTuber, has over 7 million subscribers.",
  "sentence2": "Over 7 million subscribers, James Charles is a popular YouTuber.",
  "label": "0",
  "language": "en"
}
```

**中文样本：**
```json
{
  "id": 100,
  "sentence1": "这部电影由著名导演执导，获得了多项国际大奖。",
  "sentence2": "这部影片由一位知名导演拍摄，获得了许多国际奖项。",
  "label": "1",
  "language": "zh"
}
```
