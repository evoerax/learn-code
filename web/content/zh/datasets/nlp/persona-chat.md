# PersonaChat

## 数据集简介

PersonaChat 是一个个性化对话数据集，旨在训练对话系统能够根据指定的人格画像（persona）进行一致且引人入胜的对话。该数据集包含 10,907 个对话回合，由 1,005 对众包工作者创建，每对参与者被随机分配不同的角色画像（如"我有两个孩子"、"我喜欢跑步"等），然后进行多轮自由形式对话。PersonaChat 由 PolyAI 团队于 2018 年发布，是推进个性化对话系统和人格一致性问题研究的重要资源。

## 相关链接

- **官网/论文**: https://github.com/PolyAI-LDN/persona-consistency
- **GitHub**: https://github.com/PolyAI-LDN/persona-consistency
- **在线体验/Demo**: https://polyai.com/conversational-ai/

## 相关论文

**Title**: Personalizing Dialogue Agents: I have a dog, do you have pets too?

**Authors**: Saizheng Zhang, Emily Dinan, et al. (PolyAI)

**Year**: 2018

**Abstract**: PersonaChat introduces a dataset for training conversational agents that can adopt distinct personalities while maintaining consistency throughout dialogue. The dataset comprises 10,907 conversation turns where each participant receives a randomly assigned persona consisting of 4-5 sentences describing their background. This work addresses the challenge of generating persona-consistent responses and provides both automated and human evaluation metrics for assessing personality alignment in dialogue systems.

## 数据示例

### 数据格式说明

PersonaChat 采用 JSON 格式存储，每个对话包含：
- `persona`: 角色画像列表（4-5个句子描述）
- `dialogue`: 对话历史列表，每条包含 `text`（发言内容）和 `speaker`（speaker 1/speaker 2）
- `completion`: 最后一个发言的回复内容

### 真实样本

**样本 1 - 基础对话**:
```json
{
  "persona": [
    "I have a dog named Luna.",
    "I like playing video games.",
    "I am a software engineer.",
    "I enjoy hiking on weekends."
  ],
  "dialogue": [
    {"text": "Hi! What do you do for work?", "speaker": "speaker 1"},
    {"text": "I work as a software engineer at a tech company. What about you?", "speaker": "speaker 2"},
    {"text": "That's cool! Do you have any pets?", "speaker": "speaker 1"}
  ],
  "completion": "Yes, I have a dog named Luna. She's a golden retriever and I love taking her for walks in the park!"
}
```

**样本 2 - 个性化对话**:
```json
{
  "persona": [
    "I am a professional chef.",
    "I love Italian cuisine.",
    "I have two children.",
    "I collect vintage wines."
  ],
  "dialogue": [
    {"text": "What made you become a chef?", "speaker": "speaker 1"},
    {"text": "I've always been passionate about cooking since I was young. Italian cuisine in particular has been my focus for the past 15 years.", "speaker": "speaker 2"}
  ],
  "completion": "That's impressive! Do you cook Italian food at home for your family too?"
}
```

**样本 3 - 话题转换**:
```json
{
  "persona": [
    "I'm a college student studying biology.",
    "I play tennis competitively.",
    "I'm allergic to cats.",
    "I volunteer at a local animal shelter."
  ],
  "dialogue": [
    {"text": "What are you studying in college?", "speaker": "speaker 1"},
    {"text": "I'm majoring in biology. I'm really interested in genetics and cell biology.", "speaker": "speaker 2"},
    {"text": "That's fascinating! Do you have any pets?", "speaker": "speaker 1"}
  ],
  "completion": "I would love to have a pet, but I'm actually allergic to cats. I volunteer at an animal shelter instead to be around animals!"
}
```
