# Codeforces

## 数据集简介

Codeforces 是一个全球知名的 competitive programming 算法竞赛平台，其数据集收录了数千道来自真实竞赛的编程题目。每道题目包含问题描述、输入输出格式说明、示例测试用例以及完整的题目解决方案。该数据集由 Mike Mirzayanov 团队于2010年创建，已成为评估代码生成和算法推理能力的重要基准。与 HumanEval 和 APPS 不同，Codeforces 的题目来自真实竞赛，难度跨度大，涵盖基础算法到高级数据结构与数学推理，是检验模型处理复杂编程问题能力的权威数据集。

## 相关链接

- 官网：https://codeforces.com
- 论文：暂无可直接引用的论文（Codeforces 作为竞赛平台自行维护题目数据）
- GitHub：部分数据集整理可参考 https://github.com/codeforces
- 在线体验：https://codeforces.com/problemset

## 相关论文

**论文标题：** APPS: Automated Programming Progress Standard

**作者：** Dan Hendrycks, Steven Basart, Frank Zhang, et al.

**年份：** 2021

**摘要：** APPS 数据集将 Codeforces 题目引入代码生成评估，涵盖从入门到竞赛级别的 10,000+ 编程问题。研究发现 GPT-3 在该数据集上仅能解决约 5% 的问题，揭示出现有语言模型在算法推理方面与人类专家存在显著差距。该论文推动了代码生成领域对更复杂推理能力评估的需求。

## 数据示例

### 数据格式说明

题目数据通常包含以下字段：

```
{
  "problem_id": "1572A",
  "title": "Problem Name",
  "contest_id": 1572,
  "index": "A",
  "rating": 800,
  "tags": ["graph", "greedy"],
  "description": "问题描述 (Markdown 格式)",
  "input_spec": "输入格式说明",
  "output_spec": "输出格式说明",
  "examples": [
    {
      "input": "示例输入1",
      "output": "示例输出1"
    }
  ],
  "solutions": {
    "C++": "参考 solution code",
    "Python": "参考 solution code"
  }
}
```

### 真实样本

**样例 1 - 简单题 (Rating 800):**

```json
{
  "problem_id": "281A",
  "title": "Word Capitalization",
  "rating": 800,
  "description": "给定一个单词，将首字母大写后输出。",
  "examples": [
    {
      "input": "word",
      "output": "Word"
    },
    {
      "input": "UNIX",
      "output": "UNIX"
    }
  ]
}
```

**样例 2 - 中等难度 (Rating 1200):**

```json
{
  "problem_id": "1572B",
  "title": "拍字节计数",
  "rating": 1200,
  "tags": ["greedy", "implementation"],
  "description": "给定数组，可将连续相同元素合并为一个，询问最终数组长度。",
  "examples": [
    {
      "input": "4\n1 1 2 2",
      "output": "2"
    }
  ]
}
```

**样例 3 - 竞赛难度 (Rating 2000+):**

```json
{
  "problem_id": "1738C",
  "title": "Even Number Addicts",
  "rating": 2100,
  "tags": ["games", "dp", "math"],
  "description": "Alice 和 Bob 玩纸牌游戏，三堆各有一定数量奇数偶数牌，每轮玩家从某堆取牌，无法操作者输。判断先手获胜策略。",
  "examples": [
    {
      "input": "5\n3\n1 2 3\n3\n2 2 2\n4\n1 1 1 1",
      "output": "Alice\nBob\nAlice"
    }
  ]
}
```
