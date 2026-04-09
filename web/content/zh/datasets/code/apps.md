# APPS (Automated Programming Progress Standard)

## 数据集简介

APPS 是由 OpenAI 于 2021 年发布的大规模代码生成评估基准，旨在衡量语言模型根据自然语言问题描述自动生成 Python 代码的能力。该数据集包含 10,000+ 个编程问题，涵盖从简单入门级算法到高级数据结构与算法的广泛难度范围。每个问题都提供了详细的题目描述、输入输出格式说明、多个测试用例以及参考解决方案。APPS 的独特之处在于其评估方式——不仅检查代码能否通过示例测试，还通过隐藏的测试用例评估代码的正确性和效率，是代码生成领域最具挑战性的基准之一。

## 相关链接

- **官网/论文**: https://openai.com/blog/adversarial-evaluation-of-language-models/
- **GitHub**: https://github.com/openai/apps
- **数据集下载**: https://github.com/openai/apps/tree/main/data
- **在线体验**: https://github.com/openai/apps#leaderboard

## 相关论文

**Measuring Coding Challenge Comprehension With Large Language Models**

- **作者**: B. Hendrycks, S. Basart, S. Kadre, P. Mishkin, J. Bob, M. Norwitz, C. Choi, F. Wilson, J. Gao, D. Song, S. Eyherabide
- **年份**: 2021
- **摘要**: 该论文介绍了 APPS (Automated Programming Progress Standard) 数据集，一个用于评估语言模型代码生成能力的基准。APPS 包含 10,000+ 个编程问题，难度从入门级到高级算法不等。论文使用该基准评估了 GPT-3、GPT-Neo 等模型的代码生成能力，发现即使是当时最大的模型也只能解决约 5% 的问题。研究揭示了当前语言模型在代码生成方面与人类程序员的显著差距，特别是在理解复杂问题描述和生成长代码方面。

## 数据示例

**JSON 格式**

```json
{
  "problem_id": "introductory_001",
  "title": "Two Sum",
  "difficulty": "introductory",
  "callback_options": 4,
  "solutions": [...],
  "test_cases": [
    {"input": "[2, 7, 11, 15]\n9", "output": "[0, 1]"},
    {"input": "[3, 2, 4]\n6", "output": "[1, 2]"}
  ],
  "question": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target...",
  "starter_code": "def two_sum(nums, target):\n    pass"
}
```

```json
{
  "problem_id": "competition_042",
  "title": "Dynamic Range Minimum Queries",
  "difficulty": "competition",
  "callback_options": 10,
  "test_cases": [
    {"input": "5 3\n1 2 3 4 5\n1 3\n2 4\n3 5", "output": "1\n2\n3"}
  ],
  "question": "Given an array of N integers and Q queries, answer the minimum value in the range [l, r] for each query...",
  "starter_code": "import sys\ninput = sys.stdin.readline\n\ndef solve():\n    N, Q = map(int, input().split())\n    arr = list(map(int, input().split()))\n    # TODO: implement segment tree"
}
```

```json
{
  "problem_id": "interview_015",
  "title": "LRU Cache Implementation",
  "difficulty": "interview",
  "test_cases": [
    {"input": '["LRUCache", 2, "put", 1, 1, "get", 1]', "output": "[null, null, 1]"}
  ],
  "question": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache...",
  "starter_code": "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n    \n    def get(self, key: int) -> int:\n        pass\n    \n    def put(self, key: int, value: int) -> None:\n        pass"
}
```
