# BOOLQ (Boolean Questions)

## 数据集简介

BOOLQ 是一个自然语言推理数据集，包含 15,000+ 布尔型问答对（是/否问题），问题来自真实用户查询和 Wikipedia 文章。评估模型对段落进行是非判断推理的能力。由 Google Research 和纽约大学于 2019 年发布，是 SuperGLUE 基准的核心任务之一。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1905.10044
- **GitHub**: https://github.com/google-research-datasets/boolean-questions
- **SuperGLUEE**: https://super.gluebenchmark.com/

## 相关论文

**BOOLQ: Exploring the Surprising Difficulty of Truthful Yes/No Questions**

- **作者**: Clark, et al.
- **年份**: 2019
- **摘要**: BOOLQ 从 Wikipedia 和用户查询中收集 boolean 类型问题，要求模型根据给定段落回答是或否。研究发现，虽然bert等模型在此任务上表现不错，但仍落后于人类约 8%，且对某些语义相似的问题仍存在推理错误。BOOLQ 成为评估模型文本推理能力的重要基准，被纳入 SuperGLUE 综合评估框架。

## 数据示例

### 数据格式

JSON Lines (.jsonl) 格式，每行包含：
- `question` (str): 布尔问题
- `passage` (str): 相关段落
- `answer` (bool): 正确答案 (true/false)
- `idx`: 问题索引

### 真实样本

**示例 1**:
```json
{
  "question": "Is the sky blue?",
  "passage": "The sky appears blue during clear weather due to Rayleigh scattering.",
  "answer": true,
  "idx": 0
}
```

**示例 2**:
```json
{
  "question": "Can fish breathe underwater?",
  "passage": "Fish have gills that allow them to extract oxygen from water.",
  "answer": true,
  "idx": 1
}
```

**示例 3**:
```json
{
  "question": "Is the Sun made of cheese?",
  "passage": "The Sun is a star composed primarily of hydrogen and helium gas.",
  "answer": false,
  "idx": 2
}
```
