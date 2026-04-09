# WSC (Winograd Schema Challenge)

## 数据集简介

Winograd Schema Challenge（Winograd模式挑战）是由Levesque等人于2011年提出的一种用于评估机器常识推理能力的基准测试。该数据集包含273个精心设计的问题，每个问题都基于一个包含歧义代词的句子，句子中某个词的指代需要利用世界知识才能正确判断。例如句子"The city council refused the demands because they were afraid"中的"they"指代什么，需要理解城市议会的行为逻辑才能判断。WSC被认为是比图灵测试更纯粹的常识推理测试，因为它不涉及对话或开放式生成，仅需要从两个选项中选择正确答案。该数据集在2017年作为NIPS竞赛的一部分被正式发布。

## 相关链接

- 官网/论文：https://commonsensereasoning.org/2011/wsc.html
- GitHub：https://github.com/commonsense-reasoning-meteor/WinoGrande
- 在线体验：https://leaderboard.allennlp.org/wsc

## 相关论文

**The Winograd Schema Challenge**

- **作者**：Hector J. Levesque, Ernest Davis, Leora Morgenstern
- **年份**：2011
- **摘要**：Winograd Schema Challenge提出了一种评估机器常识推理的新方法。每个问题包含一个句子，句中有一个歧义代词需要消解，答案必须在两个选项中选择。与传统的图灵测试不同，WSC不需要对话或开放式生成，而是通过精确的问答形式评估机器的常识推理能力。该方法的优势在于：问题可以由任何人设计，但正确答案需要真正的理解才能得出，而不仅仅是模式匹配。这使其成为评估人工通用智能（AGI）的重要里程碑。

## 数据示例

### 数据格式说明

WSC数据采用JSON格式存储，每个样本包含：
- `sentence`：包含歧义代词的原始句子
- `target`：包含歧义代词的对象，包含`span1_index`、`span2_index`、`span1_text`、`span2_text`
- `answer`：正确的指代选项（"span1"或"span2"）
- `alternatives`：两个候选指代选项

### 真实样本

**样本1：**
```json
{
  "sentence": "The trophy would not fit in the suitcase because it was too big.",
  "target": {
    "span1_index": 5,
    "span2_index": 10,
    "span1_text": "trophy",
    "span2_text": "suitcase"
  },
  "answer": "span1",
  "alternatives": ["trophy", "suitcase"]
}
```

**样本2：**
```json
{
  "sentence": "The city council refused the demands because they were afraid.",
  "target": {
    "span1_index": 4,
    "span2_index": 10,
    "span1_text": "city council",
    "span2_text": "they"
  },
  "answer": "span1",
  "alternatives": ["city council", "demands"]
}
```

**样本3：**
```json
{
  "sentence": "Sam tried to paint a picture of a sheep but the wool was too hard to draw.",
  "target": {
    "span1_index": 8,
    "span2_index": 16,
    "span1_text": "sheep",
    "span2_text": "wool"
  },
  "answer": "span1",
  "alternatives": ["sheep", "wool"]
}
```
