# MBPP (Mostly Basic Python Programming)

## 数据集简介

MBPP 是由 Google Research 于 2021 年发布的 Python 编程基准数据集，包含 974 个 Python 编程问题，旨在评估语言模型的基础编程能力。所有问题都经过人工验证，确保存在唯一正确答案。问题涵盖基本数据结构操作、字符串处理、数学计算等基础编程任务，每个问题都包含完整的函数签名、docstring 说明和参考解决方案。数据集被划分为 374 个少样本示例、374 个纯测试示例和 226 个对抗性测试示例，用于全面评估模型的代码生成能力。

## 相关链接

- **官网/论文**: https://github.com/google-research/google-research/tree/master/mbpp
- **GitHub**: https://github.com/google-research/google-research/tree/master/mbpp
- **在线体验**: https://排行榜.linkedorg.com.cn/benchmarks/mbpp

## 相关论文

**Title**: MBPP: A Large-Scale Corpus for Barely-Improving Programming
**Authors**: Austin et al., Google Research
**Year**: 2021

**摘要**: 本文提出了 MBPP 数据集，包含 974 个由众包方式收集的 Python 编程问题。所有问题都经过自动验证确保可执行且输出正确，并经过人工筛选确保问题表述清晰、解决方案简洁。数据集设计为略微超出当前模型能力范围（barely-improve），以推动代码生成领域的进步。实验表明，即使是最先进的语言模型在该数据集上的表现仍有较大提升空间。

## 数据示例

**数据格式**: JSON 格式，每条记录包含 test_list、code 和 test_key

```json
{
  "task_id": 1,
  "prompt": "from typing import List\n\ndef below_threshold(lst: List[int], t: int) -> bool:\n    \"\"\"Return True if all numbers in lst are below threshold t.\n    >>> below_threshold([1, 2, 4, 10], 5)\n    False\n    >>> below_threshold([1, 2, 3, 4], 5)\n    True\n    \"\"\"",
  "code": "def below_threshold(lst: List[int], t: int) -> bool:\n    for num in lst:\n        if num >= t:\n            return False\n    return True",
  "test_list": ["assert below_threshold([1, 2, 4, 10], 5) == False", "assert below_threshold([1, 2, 3, 4], 5) == True"]
}
```

**真实样本**:

1. 列表元素阈值检查：
```python
def below_threshold([1, 2, 4, 10], 5) → False
def below_threshold([1, 2, 3, 4], 5) → True
```

2. 字符串首字符大写：
```python
def capitalize_first([\"hello\", \"world\"]) → ["Hello", "World"]
def capitalize_first([\"a\"]) → ["A"]
```

3. 计数特定元素：
```python
def count_nums([1, 1, 2, 3, 1]) → 3
def count_nums([1, 2, 3]) → 0
```
