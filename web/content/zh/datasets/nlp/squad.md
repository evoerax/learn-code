# SQuAD (Stanford Question Answering Dataset)

## 数据集简介

SQuAD 是由斯坦福大学于 2016 年发布的大规模阅读理解数据集，旨在评估机器理解自然语言文本并从中提取答案的能力。该数据集基于 Wikipedia 文章构建，包含 10 万多个问答对，每个问题都对应一段上下文文本，答案必须是上下文中的一个连续文本片段。SQuAD 2.0 版本还引入了无法回答的问题，使任务更具挑战性。数据集规模为训练集 87,599 个问答对，验证集 10,570 个问答对。该数据集成为 NLP 领域最具影响力的阅读理解基准之一，被广泛用于评估 BERT 等预训练语言模型的效果。

## 相关链接

- 官网：https://rajpurkar.github.io/SQuAD-explorer/
- 论文：https://arxiv.org/abs/1606.05250
- Hugging Face：https://huggingface.co/datasets/rajpurkar/squad
- 在线体验：https://rajpurkar.github.io/SQuAD-explorer/

## 相关论文

**SQuAD: 100,000+ Questions for Machine Comprehension of Text**
- 作者：Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, Percy Liang
- 年份：2016
- 摘要：本文介绍了 SQuAD 数据集的构建过程和特点。与之前的小规模阅读理解数据集不同，SQuAD 通过众包方式生成了大规模、多样化的问答对，要求答案必须是上下文中的连续文本片段，这更接近真实应用场景。实验表明，最先进的模型在该数据集上已接近人类表现。

**Know What You Don't Know: Unanswerable Questions Reading Comprehension**
- 作者：Pranav Rajpurkar, Robin Jia, Percy Liang
- 年份：2018
- 摘要：本文介绍了 SQuAD 2.0，在原有数据集基础上添加了约 5 万个无法回答的问题。这些问题对应的文本段落中不包含答案信息，需要模型学会判断问题是否可答。这一改进使阅读理解任务更加真实，也推动了模型在不确定性建模方面的发展。

## 数据示例

### 数据格式说明

每条数据包含：
- `id`：唯一标识符
- `title`：Wikipedia 文章标题
- `context`：上下文段落
- `question`：问题
- `answers`：答案列表（含文本和起始位置）

### 真实样本示例

**样本 1**
```json
{
  "id": "5733be284776f41900661182",
  "title": "University of Notre Dame",
  "context": "Architecturally, the school has a Catholic character. Atop the Main Building's gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend \"Venite Ad Me Omnes\". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.",
  "question": "To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?",
  "answers": {
    "text": ["Saint Bernadette Soubirous"],
    "answer_start": [515]
  }
}
```

**样本 2**
```json
{
  "id": "5733be284776f4190066117f",
  "title": "University of Notre Dame",
  "context": "Architecturally, the school has a Catholic character. Atop the Main Building's gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend \"Venite Ad Me Omnes\". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858.",
  "question": "What is in front of the Notre Dame Main Building?",
  "answers": {
    "text": ["a copper statue of Christ"],
    "answer_start": [188]
  }
}
```

**样本 3**
```json
{
  "id": "5733bf84d058e614000b61be",
  "title": "University of Notre Dame",
  "context": "As at most other universities, Notre Dame's students run a number of news media outlets. The nine student-run outlets include three newspapers, both a radio and television station, and several magazines and journals. Begun as a one-page journal in September 1876, the Scholastic magazine is issued twice monthly and claims to be the oldest continuous collegiate publication in the United States.",
  "question": "When did the Scholastic Magazine of Notre Dame begin publishing?",
  "answers": {
    "text": ["September 1876"],
    "answer_start": [248]
  }
}
```
