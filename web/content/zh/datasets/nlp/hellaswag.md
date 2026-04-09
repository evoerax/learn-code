# HellaSwag

## 数据集简介

HellaSwag 是由纽约大学和华盛顿大学于 2019 年发布 commonsense inference 基准数据集，专门用于评估大语言模型在日常情境下的常识推理能力。该数据集包含约 4 万个多项选择题，每道题提供一个情境描述和四个可能的结局选项，模型需要选择最符合常识的结局。HellaSwag 的题目源自 ActivityNet 视频描述和 WikiHow 文章，涵盖了人们日常活动中可能遇到的各种情境，是评估模型"情商"的重要 benchmark。

## 相关链接

- 官网：https://rowanzellers.com/hellaswag/
- 论文：https://arxiv.org/abs/1905.07830
- GitHub：https://github.com/rowanzellers/hellaswag
- Hugging Face：https://huggingface.co/datasets/hellaswag

## 相关论文

**HellaSwag: Can a Machine Really Finish Your Sentence?**
- 作者：Rowan Zellers, Ari Holtzman, Yonatan Bisk, et al.
- 年份：2019
- 摘要：本文介绍了 HellaSwag 数据集的构建方法。研究者通过众包方式从 ActivityNet 视频和 WikiHow 文章中收集情境描述，并让标注者编写正确和错误的结局选项。实验表明，当时最先进的 GPT-2 等模型在该数据集上仍与人类表现有较大差距，说明 commonsense reasoning 仍是 AI 的重要挑战。

## 数据示例

### 数据格式说明

每条数据包含：
- `ctx`：情境描述上下文
- `activity_label`：活动类别
- `endings`：四个可能的结局选项
- `label`：正确答案索引

### 真实样本示例

**样本 1 - 日常活动**
```json
{
  "ctx": "A woman sits at a piano. She places her fingers on the keys.",
  "activity_label": "playing piano",
  "endings": [
    "She begins to play a beautiful melody.",
    "She turns off the piano and leaves.",
    "She takes a photo of the piano.",
    "She closes the piano lid."
  ],
  "label": 0
}
```

**样本 2 - 户外活动**
```json
{
  "ctx": "A man is fishing from a boat. He casts his line into the water.",
  "activity_label": "fishing",
  "endings": [
    "He waits for a fish to bite the hook.",
    "He immediately reels in a big fish.",
    "He rows the boat back to shore.",
    "He puts on his life jacket."
  ],
  "label": 0
}
```

**样本 3 - 烹饪**
```json
{
  "ctx": "The chef seasons the steak with salt and pepper. He heats a pan on the stove.",
  "activity_label": "cooking",
  "endings": [
    "He places the steak in the hot pan to sear.",
    "He serves the raw steak immediately.",
    "He puts the steak in the refrigerator.",
    "He throws away the steak."
  ],
  "label": 0
}
```

### 数据集特点

HellaSwag 与其他 Commonsense NLI 数据集的主要区别：

1. **对抗性设计**：通过 GPT-2 生成错误选项，再由人工筛选保留最难区分的选项
2. **情境多样性**：涵盖室内外、日常活动、专业场景等多种情境
3. **难度适中**：人类准确率约 95%，但对模型具有足够挑战性
