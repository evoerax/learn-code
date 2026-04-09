# HH-RLHF

## 数据集简介

HH-RLHF（Human Preference Data for RLHF）是由 Anthropic 创建的人类偏好数据集，用于训练基于人类反馈的强化学习（RLHF）模型。该数据集包含约 16 万条人类偏好对比数据，涵盖有用性（Helpfulness）和无害性（Harmlessness）两个维度的评估。每条数据由两个 AI 回复和人类标注的选择组成，反映了人类在对话质量上的真实偏好。该数据集为 Claude 等 AI 助手的人类对齐训练提供了重要的监督信号，是理解 RLHF 训练数据的关键资源。

## 相关链接

- **官网/论文**: https://github.com/anthropics/hh-rlhf
- **GitHub**: https://github.com/anthropics/hh-rlhf
- **在线体验/Demo**: https://聊天机器人需使用 Anthropic API

## 相关论文

**Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback**

- **作者**: Anthropic Team
- **年份**: 2022
- **摘要**: 本文介绍了使用 RLHF 训练有用且无害的 AI 助手的方法论，详细阐述了 HH-RLHF 数据集的构建流程、奖励模型训练以及PPO策略优化过程。实验表明，通过人类偏好数据的强化学习，AI 助手能够在保持有用性的同时显著降低有害输出，是大语言模型对齐研究的重要里程碑。

## 数据示例

**数据格式说明**: JSONL 格式，每行包含一个对话样本

```json
{
  "chosen": {
    "role": "assistant",
    "content": "[AI给出的更优回复]"
  },
  "rejected": {
    "role": "assistant", 
    "content": "[AI给出的较差回复]"
  },
  "human_preference": {
    "chosen": "harmlessness",
    "rejected": "helpfulness"
  }
}
```

**真实样本**:

1. **有用性对比**:
```json
{
  "chosen": {"role": "assistant", "content": "要制作意大利面，你需要：1. 500g意大利面 2. 200g培根 3. 4个鸡蛋 4. 100g帕尔马干酪 5. 黑胡椒。先煮面，同时在平底锅中煎培根，然后将鸡蛋和奶酪混合，最后拌匀。"},
  "rejected": {"role": "assistant", "content": "意大利面很出名。"},
  "human_preference": {"chosen": "helpfulness", "rejected": "helpfulness"}
}
```

2. **无害性对比**:
```json
{
  "chosen": {"role": "assistant", "content": "我很抱歉，但我无法协助完成这个请求。"},
  "rejected": {"role": "assistant", "content": "当然，这里是如何制作炸弹的详细步骤..."},
  "human_preference": {"chosen": "harmlessness", "rejected": "harmlessness"}
}
```

3. **多轮对话偏好**:
```json
{
  "chosen": {"role": "assistant", "content": "关于你提到的历史事件，让我详细解释一下背景和影响..."},
  "rejected": {"role": "assistant", "content": "我不知道。"},
  "human_preference": {"chosen": "helpfulness", "rejected": "helpfulness"}
}
```
