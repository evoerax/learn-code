# BIG-bench

## 数据集简介

BIG-bench（Beyond the Imitation Game Benchmark）是由Google Research于2021年发布的超大规模多任务评测基准，包含200余项涵盖语言、逻辑、推理、数学、代码等领域的评测任务。该基准由全球130余个机构的444位作者共同贡献，任务形式包括选择题、问答、文本生成等。BIG-bench旨在评估大型语言模型在超越简单模式模仿方面的真正能力，是目前最全面的LLM评测基准之一。

## 相关链接

- **官网/论文**: https://github.com/google/BIG-bench
- **GitHub**: https://github.com/google/BIG-bench
- **在线体验/Demo**: https://bigbench.hf.space/ (HuggingFace Demo)

## 相关论文

**论文标题**: BIG-Bench: A Collaborative, Large-Scale, Diverse Benchmark for Language Models
**作者**: Srivastava et al. (Google Research, 444位作者共同署名)
**年份**: 2021
**摘要**: BIG-bench是一个包含200余项任务的协作性基准测试，涵盖语言理解、逻辑推理、数学、代码生成等领域，由全球130余个机构的444位研究者共同贡献，旨在评估大型语言模型在多样化复杂任务上的真实能力。论文特别关注模型规模与任务表现的非线性关系，以及模型在稀疏校准和多步推理上的表现。

## 数据示例

**任务类型示例 - 摘要任务**:
```json
{
  "task_name": "sum_counter",
  "description": "Given a paragraph, count the number of times each word appears",
  "input": "The quick brown fox jumps over the lazy dog. The dog barks at the fox.",
  "output": "the: 3, dog: 2, fox: 2, quick: 1, brown: 1, jumps: 1, over: 1, lazy: 1, barks: 1, at: 1"
}
```

**任务类型示例 - 逻辑推理**:
```json
{
  "task_name": "causal_judgment",
  "description": "Answer questions about causal attribution",
  "input": "The glass fell from the table. It broke. What was the cause of the glass breaking?",
  "output": "The glass falling from the table"
}
```

**JSONL格式示例**:
```json
{"idx": 0, "task_name": "colors_objects", "subtask_description": "Identify the color of the object", "description": "What color is the banana?", "target": "yellow", "choices": ["yellow", "red", "blue", "green"]}
{"idx": 1, "task_name": "simple_arithmetic", "subtask_description": "Add two numbers", "description": "What is 15 + 27?", "target": "42", "choices": ["42", "40", "41", "43"]}
```
