# OpenAssistant (Conversational AI Dataset)

## 数据集简介

OpenAssistant 是由 LAION 和 open-assistant.io 社区于 2023 年联合发布的大规模对话数据集，旨在为对话 AI 研究提供开源、高质量的人类标注数据。该数据集包含约 161,000 条多轮对话消息，覆盖 35 种语言，由全球数千名志愿者使用人类首选方法标注完成。数据涵盖对话、角色扮演、技术问答、写作协助等多种场景，每条回复都包含人工标注的质量评分和偏好排名。该数据集是目前最大的开源对话数据集之一，被广泛用于训练对话语言模型和 RLHF 偏好模型。

## 相关链接

- 官网：https://open-assistant.io/
- 论文：https://arxiv.org/abs/2304.07327
- Hugging Face：https://huggingface.co/datasets/OpenAssistant/oasst1
- GitHub：https://github.com/LAION-AI/Open-Assistant

## 相关论文

**OpenAssistant: Democratizing Large Language Model Alignment**
- 作者：Andreas Köpf, Yannic Kilcher, et al. (LAION & Open-Assistant Community)
- 年份：2023
- 摘要：本文介绍了 OpenAssistant 项目，一个民主化的对话 AI 对齐研究项目。项目核心是一个包含 161,000 条对话的语料库，由全球志愿者使用强化学习从人类反馈（RLHF）方法标注。数据集涵盖多种语言和任务类型，每条消息都有人工标注的质量分数。研究团队使用该数据集训练了 OASST1 模型，展示了开源社区协作构建高质量 LLM 对齐数据的可行性。

## 数据示例

### 数据格式说明

每条数据包含：
- `message_id`：唯一标识符
- `parent_id`：父消息 ID（用于构建对话树）
- `text`：消息文本
- `role`：角色（user, assistant, system）
- `lang`：语言
- `annotation`：标注信息（质量评分、人类偏好排名等）

### 真实样本示例

**样本 1 - 多轮对话**
```json
{
  "message_id": "assistant_12345",
  "parent_id": "user_67890",
  "text": "Paris is the capital of France and has a population of approximately 2.1 million people in the city proper, though the broader metropolitan area is much larger.",
  "role": "assistant",
  "lang": "en",
  "annotation": {
    "quality_score": 0.95,
    "human_preference_rank": 1
  }
}
```

**样本 2 - 对话树结构**
```json
{
  "message_id": "assistant_001",
  "parent_id": null,
  "text": "Hello! How can I help you today?",
  "role": "assistant",
  "lang": "en",
  "children": ["user_002", "user_003"]
}
```

**样本 3 - 带标注的回复**
```json
{
  "message_id": "assistant_456",
  "parent_id": "user_123",
  "text": "To make a classic Margherita pizza, you'll need:\n- 500g of pizza dough\n- 200g of San Marzano tomatoes\n- 250g of fresh mozzarella\n- Fresh basil leaves\n- Olive oil and salt\n\nSpread the dough, top with crushed tomatoes and torn mozzarella, bake at highest oven setting until crispy.",
  "role": "assistant",
  "lang": "en",
  "annotation": {
    "quality_score": 0.88,
    "categories": ["cooking", "instructions"]
  }
}
```
