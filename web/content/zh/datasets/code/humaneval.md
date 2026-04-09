# HumanEval

## 数据集简介

HumanEval 是 OpenAI 于 2021 年发布的手写代码生成评估数据集，包含 164 个编程问题，每个问题包含函数签名、文档字符串、参考实现和单元测试。这些问题由人类程序员手动编写，涵盖多种编程概念如列表操作、字符串处理、递归函数等。HumanEval 用于评估语言模型从自然语言描述生成正确代码的能力，是评估代码生成模型的重要基准。研究表明 GPT-3 只能解决 0% 的问题，而 GPT-4 可解决约 67%，揭示了代码生成能力的显著进步。

## 相关链接

- 官网/论文: https://github.com/openai/human-eval
- 论文: "Evaluating Large Language Models Trained on Code", Chen et al., 2021
- GitHub: https://github.com/openai/human-eval
- 在线体验: https://openai.com/index/humaneval/

## 相关论文

**标题:** Evaluating Large Language Models Trained on Code

**作者:** Mark Chen, Jerry Tworek, Heewoo Jun, Qiming Yuan, Henrique Ponde de Oliveira Pinto, Jared Kaplan, et al.

**年份:** 2021

**摘要:** 本文介绍了 Codex，这是一种在 GitHub 代码上微调的 GPT-3 模型，能够解决人类程序员难以解决的编程问题。我们创建了 HumanEval 数据集，包含 164 个手写编程挑战，评估模型从文档字符串生成独立可运行代码的能力。实验表明，Codex 可以解决 28.8% 的人类评估问题，而 GPT-3 无法解决任何问题，证明了代码语言模型的巨大潜力。

## 数据示例

### 数据格式说明

HumanEval 数据集采用 JSON 格式存储，每个问题包含：
- `task_id`: 唯一标识符
- `prompt`: 函数签名和文档字符串（作为模型输入）
- `canonical_solution`: 参考实现
- `test_handlers`: 单元测试代码
- `entry_point`: 函数名称

### 真实样本

1. **样本1 - 列表翻转**
```json
{
  "task_id": "test_same_chars",
  "prompt": "def has_match(s: str, targets: str) -> bool:\n    \"\"\"Return True if exactly one char of s matches a char in targets.\n    Rest of chars don't matter.\n    >>> has_match('abcdefg', 'axb') == 1\n    False\n    \"\"\"",
  "canonical_solution": "return sum(1 for c in s if c in targets) == 1",
  "entry_point": "has_match"
}
```

2. **样本2 - 字符串压缩**
```json
{
  "task_id": "compress",
  "prompt": "def compress(s: str) -> str:\n    \"\"\"Perform basic string compression using counts of repeated characters.\n    Return original string if result would not be smaller.\n    >>> compress('cccbcc')\n    'c3b'\n    \"\"\"",
  "entry_point": "compress"
}
```

3. **样本3 - 嵌套列表求平铺**
```json
{
  "task_id": "flatten",
  "prompt": "def flatten(data: list) -> list:\n    \"\"\"Flatten a nested list into a single list.\n    >>> flatten([1, [2], [3, [4]]])\n    [1, 2, 3, 4]\n    \"\"\"",
  "entry_point": "flatten"
}
```
