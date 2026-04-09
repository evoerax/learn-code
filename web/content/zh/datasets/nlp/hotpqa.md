# HOTPOTQA

## 数据集简介

HOTPOTQA 是由 Stanford AI Lab 和 UMass Amherst 于 2018 年联合发布的多跳推理问答数据集，包含 112,779 个问答对。该数据集的核心特点是问题需要模型跨越多个文档进行推理才能找到答案，而非简单地在一个文档中匹配关键词。每个问题都附带支撑文档（supporting facts）标注，标明推理过程中需要引用的具体句子。数据集提供了两种设置：distractor 模式（包含干扰文档）和 fullwiki 模式（需要在整个 Wikipedia 中检索）。问题类型涵盖比较、桥梁构建等多种推理模式。

## 相关链接

- **官网**: https://hotpotqa.github.io/
- **论文**: https://arxiv.org/abs/1809.09600
- **GitHub**: https://github.com/hotpotqa/hotpot
- **在线体验**: https://hotpotqa.github.io/

## 相关论文

**Title**: HotpotQA: A Dataset for Diverse, Explainable Multi-hop Question Answering
**Authors**: Yang et al., Stanford AI Lab / UMass Amherst
**Year**: 2018

**摘要**: 本文提出了 HOTPOTQA 数据集，旨在推动需要多跳推理的问答系统研究。与传统 QA 数据集不同，HOTPOTQA 要求模型显式地在多个文档之间进行推理和整合信息。数据集提供了"支撑事实"标注，允许评估模型的可解释性。研究者在实验中测试了多种流行的 QA 模型，发现它们在需要多跳推理的问题上表现显著下降，表明该任务对当前系统仍具挑战性。

## 数据示例

**数据格式**: JSON 格式，包含 question、answer、context、supporting_facts

```json
{
  "question": "What is the capital of the country where the Great Barrier Reef is located?",
  "answer": "Canberra",
  "context": [
    {
      "sentences": ["The Great Barrier Reef is the world's largest coral reef system."],
      "title": "Great_Barrier_Reef"
    },
    {
      "sentences": ["Canberra is the capital city of Australia.", "Australia is a country."],
      "title": "Australia"
    }
  ],
  "supporting_facts": [
    {"title": "Australia", "sent_id": 1},
    {"title": "Great_Barrier_Reef", "sent_id": 0}
  ],
  "type": "bridge"
}
```

**真实样本**:

1. 桥梁推理问题：
```
问题: What is the occupation of the author of the novel the film "Atonement" is based on?
答案: Novelist / Author
推理: (1) "Atonement" 基于 Ian McEwan 的小说 → (2) Ian McEwan 是一位小说家
```

2. 比较问题：
```
问题: Which magazine was founded earlier, Time or Forbes?
答案: Time
推理: (1) Time 于 1923 年创刊 → (2) Forbes 于 1917 年创刊 → 比较: 1917 < 1923
```

3. 顺序推理问题：
```
问题: In what country is the birthplace of the director of the film "Inception" located?
答案: United States of America
推理: (1) "Inception" 导演是 Christopher Nolan → (2) Christopher Nolan 出生于英国伦敦 → (3) 伦敦位于英国
```
