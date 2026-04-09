# SWAG (Situations With Adversarial Generations)

## 数据集简介

SWAG 是一个大规模对抗性生成的常识推理数据集，包含 113,000 个多项选择题，评估模型对视频字幕中描述的场景进行常识推理的能力。每个问题提供四个选项，测试模型理解物体交互、事件顺序和日常物理常识的能力。由纽约大学和华盛顿大学于 2018 年发布，是评估语言模型常识推理能力的重要基准。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1808.05326
- **GitHub**: https://github.com/rowanz/swagaf
- **数据集下载**: https://github.com/rowanz/swagaf/tree/master/data

## 相关论文

**SWAG: A Large-Scale Adversarial Dataset for Grounded Commonsense Inference**

- **作者**: Rowanz, et al.
- **年份**: 2018
- **摘要**: SWAG 通过对抗性方式构建，从 ActivityNet 视频字幕中提取句子对，让 GPT-2 生成候选选项再由人类标注者筛选 hardest negatives。这种方法确保负样本选项具有高度似真性，避免简单启发式方法可解的问题。实验表明人类准确率达到 86%，而最佳模型与人类仍有差距。

## 数据示例

### 数据格式

JSON/CSV 格式，每行包含：
- `ind` (int): 示例索引
- `sent1` (str): 上下文句子
- `sent2` (str): 结尾句子（从多个选项中选择）
- `label` (int): 正确答案索引 (0-3)
- `activity_id` (str): 对应视频活动ID

### 真实样本

**示例 1**:
```
{
  "ind": 0,
  "sent1": "A woman sits on top of a metal frame.",
  "sent2": "She lifts her feet off the ground.",
  "label": 1,
  "activity_id": "v_PetGrooming_g08_c17"
}
```

**示例 2**:
```
{
  "ind": 1,
  "sent1": "A man turns on the television.",
  "sent2": "He picks up a remote control.",
  "label": 0,
  "activity_id": "v_TVLayout_g07_c06"
}
```

**示例 3**:
```
{
  "ind": 2,
  "sent1": "The person picks up a guitar.",
  "sent2": "He begins to play a heavy metal song.",
  "label": 2,
  "activity_id": "v_PlayingGuitar_g05_c05"
}
```
