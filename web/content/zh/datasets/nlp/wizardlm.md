# WizardLM Dataset

## 数据集简介

WizardLM 是由微软于 2023 年发布的指令跟随数据集，核心特点是使用 Evol-Instruct 方法自动生成复杂多样的指令数据。与普通指令数据集不同，WizardLM 专注于提升模型处理复杂、深度指令的能力，包含多轮对话、编程任务、数学推理等高难度场景。数据集规模约 250K 条指令，涵盖多种任务类型和难度级别。WizardLM-7B 模型在该数据集上微调后，在多项 benchmark 上展现了优秀的复杂指令遵循能力，推动了开源大模型在 instruction tuning 领域的发展。

## 相关链接

- 官网：https://wizardlm.github.io/
- 论文：https://arxiv.org/abs/2304.12244
- GitHub：https://github.com/nlpxucan/WizardLM
- Hugging Face：https://huggingface.co/datasets/WizardLM/WizardLM_evol_instruct_250k
- 模型：https://huggingface.co/WizardLM/WizardLM-7B-V1.1

## 相关论文

**WizardLM: Empowering Large Language Models to Follow Complex Instructions**
- 作者：Can Xu, Qingfeng Sun, Kai Zheng, Xiubo Geng, Puning Zhao, Jade Feng, Tao Kong, Daxin Jiang
- 年份：2023
- 摘要：本文提出 WizardLM 数据集及其构建方法——Evol-Instruct。该方法通过 AI 模型自动进化指令，将简单指令逐步升级为复杂指令，并生成对应的响应。进化过程涵盖深度扩展（增加步骤、推理复杂度）和广度扩展（涉及更多知识领域）两种策略。实验表明，基于该数据集训练的 WizardLM-7B 在复杂指令任务上显著优于基线模型，并展现出强大的泛化能力。

## 数据示例

### 数据格式说明

每条数据包含：
- `instruction`：复杂指令（经过Evol-Instruct进化）
- `input`：输入内容（如有）
- `output`：详细、完整的响应

### 真实样本示例

**样本 1（代码任务）**
```json
{
  "instruction": "Write a Python function to implement a thread-safe singleton pattern with lazy initialization. Include proper locking mechanisms and error handling.",
  "input": "",
  "output": "```python\nimport threading\n\nclass Singleton:\n    _instance = None\n    _lock = threading.Lock()\n    \n    def __new__(cls):\n        if cls._instance is None:\n            with cls._lock:\n                if cls._instance is None:\n                    try:\n                        cls._instance = super().__new__(cls)\n                    except Exception as e:\n                        raise RuntimeError(f\"Failed to create singleton instance: {e}\")\n        return cls._instance\n```"
}
```

**样本 2（多步骤任务）**
```json
{
  "instruction": "Explain how photosynthesis works, then list three ways human activities negatively impact this process, and finally propose a solution for each impact.",
  "input": "",
  "output": "Photosynthesis is the process by which plants convert light energy, water, and carbon dioxide into glucose and oxygen. It occurs in chloroplasts and involves two main stages: the light reactions and the Calvin cycle.\n\nNegative impacts and solutions:\n1. Deforestation reduces plant populations → Solution: Reforestation and afforestation programs\n2. Air pollution creates smog that blocks sunlight → Solution: Transition to clean energy sources\n3. Ocean acidification from CO2 absorption harms marine plants → Solution: Reduce carbon emissions and protect marine ecosystems"
}
```

**样本 3（深度推理）**
```json
{
  "instruction": "If a train travels from City A to City B at 60 mph, and another train travels from City B to City A at 90 mph, how long will it take for them to meet if they start at the same time and the distance between cities is 300 miles? Solve step by step.",
  "input": "",
  "output": "Step 1: Determine the combined speed. Since the trains are moving toward each other, their relative speed is 60 + 90 = 150 mph.\n\nStep 2: Apply the meeting time formula: Time = Distance / Relative Speed\nTime = 300 miles / 150 mph = 2 hours\n\nStep 3: Verify: Train A travels 60 × 2 = 120 miles, Train B travels 90 × 2 = 180 miles. Total = 120 + 180 = 300 miles. ✓\n\nAnswer: The trains will meet after 2 hours."
}
```
