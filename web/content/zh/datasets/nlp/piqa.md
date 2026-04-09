# PIQA (Physical Interaction Question Answering)

## 数据集简介

PIQA 是一个评估物理常识推理的数据集，包含 16,000+ 个问题，测试模型对日常物理交互的理解。每个问题涉及物体属性（如可燃性、导电性）和操作顺序的常识性判断。由纽约大学和艾伦人工智能研究所于 2019 年发布，旨在弥补现有 NLP 基准在物理常识方面的不足。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1911.11641
- **GitHub**: https://github.com/facebookresearch/PIQA
- **在线体验**: https://leaderboard.allenai.org/piqa

## 相关论文

**PIQA: Reasoning about Physical Commonsense in Natural Language**

- **作者**: Bisk, et al.
- **年份**: 2019
- **摘要**: PIQA 关注日常物理世界的常识知识，如"把鸡蛋放进微波炉会怎样"或"哪种材料适合做雨伞"。数据集通过众包构建，包含 16,000+ QA 对，使用二元选择格式。实验显示，即使是大规模预训练模型，在 PIQA 上的表现也落后于人类约 10%，揭示了物理常识推理仍是 NLP 模型的重大挑战。

## 数据示例

### 数据格式

JSON 格式，包含：
- `goal`: 问题描述
- `sol1`: 第一个解决方案
- `sol2`: 第二个解决方案
- `label`: 正确答案索引 (0 或 1)
- `idx`: 问题索引

### 真实样本

**示例 1**:
```json
{
  "goal": "How do you cool down a hot drink the fastest?",
  "sol1": "Put it in the fridge.",
  "sol2": "Put it in the microwave.",
  "label": 0,
  "idx": 0
}
```

**示例 2**:
```json
{
  "goal": "Which one is a fruit?",
  "sol1": "Apple",
  "sol2": "Carrot",
  "label": 0,
  "idx": 1
}
```

**示例 3**:
```json
{
  "goal": "How to make ice cubes?",
  "sol1": "Put water in the freezer.",
  "sol2": "Put water on the stove.",
  "label": 0,
  "idx": 2
}
```
