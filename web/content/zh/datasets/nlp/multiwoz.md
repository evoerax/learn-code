# MultiWOZ

## 数据集简介

MultiWOZ 是一个大规模多域对话数据集，包含 10,000+ 个标注完整的对话，涵盖餐厅、酒店、出租车、景点等 8 个领域。该数据集由剑桥大学于 2018 年发布，是多域对话系统研究的核心基准。与单域对话数据集不同，MultiWOZ 要求模型在多个领域之间进行状态跟踪和策略决策，对多域意图理解和跨域信息整合提出了更高要求。每个对话包含用户目标、系统响应、对话行为标注和数据库查询结果。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1810.00278
- **GitHub**: https://github.com/budzianowski/multiwoz
- **数据集下载**: https://github.com/budzianowski/multiwoz/tree/master/data
- **在线体验**: ConvLab-2, ConvLab-3

## 相关论文

**A Large-Scale Multi-Domain Wizard-of-Oz Dataset for Improving End-to-End Dialogue Systems**

- **作者**: Budzianowski, Paweł et al.
- **年份**: 2018
- **摘要**: 本文提出了 MultiWOZ，一个大规模多域对话数据集，包含 10,438 个对话，涵盖 8 个不同领域。与现有单域数据集相比，MultiWOZ 的对话更长、更复杂，涉及多个领域间的切换，更接近真实世界的对话场景。数据集包含详细的对话行为标注、数据库查询结果和用户满意度评分，为端到端对话系统的研究提供了新的挑战。

## 数据示例

### 数据格式说明

JSON 格式，每个对话包含多轮交互：

```json
{
  "dialogue_id": "PMUL1634",
  "turns": [...],
  "services": ["restaurant", "hotel", "taxi"]
}
```

### 真实样本

```json
{
  "turn_id": 0,
  "speaker": "user",
  "text": "I am looking for a cheap restaurant in the centre that serves Chinese food.",
  "dialogue_act": {
    "act_type": "inform",
    "slots": {"food": "Chinese", "pricerange": "cheap", "area": "centre"}
  }
}
```

```json
{
  "turn_id": 1,
  "speaker": "system",
  "text": "There are 5 Chinese restaurants in the centre. Do you have a specific area you prefer?",
  "dialogue_act": {
    "act_type": "recommal",
    "slots": {"area": "centre", "food": "Chinese"}
  }
}
```

```json
{
  "turn_id": 5,
  "speaker": "user",
  "text": "Book me a table for 4 at the restaurant called Shanghai Court for monday 12th.",
  "dialogue_act": {
    "act_type": "booking",
    "slots": {"day": "monday", "people": "4", "restaurant": "Shanghai Court", "time": "12:00"}
  }
}
```
