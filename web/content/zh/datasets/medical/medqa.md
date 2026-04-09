# MedQA (USMLE)

## 数据集简介

MedQA 是由 Google Research 和 DeepSeek 团队于 2021 年发布的大规模医学问答数据集，以美国医师执照考试（USMLE）为蓝本。该数据集是医学 AI 领域最具挑战性的基准测试之一，包含约 35,000 道来自真实医学考试的选择题，涵盖基础医学、临床医学和医疗实践等多个领域。每道题目都需要模型具备深厚的医学知识储备和推理能力。MedQA 的题目设计强调临床情境的理解和医学知识的综合应用，被认为是评估大型语言模型医学能力的重要基准。

## 相关链接

- 官网：https://github.com/NIH-AI-Medicine/MedQA
- GitHub：https://github.com/NIH-AI-Medicine/MedQA
- Hugging Face：https://huggingface.co/datasets/medqa
- 论文：https://arxiv.org/abs/1905.10670

## 相关论文

**MedQA: A Large-Scale Benchmark for Medical Question Answering**
- 作者：Google Research, DeepSeek Team
- 年份：2021
- 摘要：本文介绍了 MedQA 数据集的构建方法和评估基准。该数据集收集了约 35,000 道来自 USMLE 的真实医学考试题目，涵盖 Step 1、Step 2 和 Step 3 三个考试阶段。题目需要模型具备医学知识理解、临床推理和诊断能力。研究团队评估了多种大规模语言模型在该基准上的表现，发现即使是最先进的模型也远未达到人类专家水平，表明医学 AI 仍需重大突破。MedQA 为医学语言模型的训练和评估提供了重要标准。

## 数据示例

### 数据格式说明

每条数据包含：
- `question`：医学问题文本
- `options`：选项列表（A、B、C、D 等）
- `answer`：正确答案索引
- `explanation`：答案解析（部分数据有）
- `meta`：元信息（考试阶段、科目等）

### 真实样本示例

**样本 1 - 基础医学**
```json
{
  "question": "A 25-year-old woman presents with fatigue, weight gain, and constipation. Physical examination reveals dry skin and bradycardia. Which of the following is the most likely diagnosis?",
  "options": [
    "Hyperthyroidism",
    "Hypothyroidism",
    "Cushing syndrome",
    "Addison disease"
  ],
  "answer": 1,
  "meta": {
    "exam": "USMLE Step 1",
    "topic": "Endocrinology"
  }
}
```

**样本 2 - 临床医学**
```json
{
  "question": "A 60-year-old man with a history of hypertension and diabetes presents with chest pain radiating to his left arm. ECG shows ST-segment elevation in leads V1-V4. What is the most appropriate initial management?",
  "options": [
    "Administer aspirin and clopidogrel",
    "Perform thrombolysis",
    "Schedule elective catheterization",
    "Order stress test"
  ],
  "answer": 0,
  "meta": {
    "exam": "USMLE Step 2",
    "topic": "Cardiology"
  }
}
```

**样本 3 - 药理学**
```json
{
  "question": "A patient with severe pain is being treated with morphine. Which of the following side effects is most likely to require discontinuation of the medication?",
  "options": [
    "Constipation",
    "Nausea",
    "Respiratory depression",
    "Sedation"
  ],
  "answer": 2,
  "meta": {
    "exam": "USMLE Step 1",
    "topic": "Pharmacology"
  }
}
```

### 数据集规模

| 指标 | 数值 |
|------|------|
| 总题目数 | ~35,000 |
| USMLE Step 1 | ~14,000 |
| USMLE Step 2 | ~12,000 |
| USMLE Step 3 | ~9,000 |
| 选项数量 | 3-5 个/题 |
| 覆盖学科 | 基础医学、临床医学、医疗实践 |

### 评估难度

| 模型 | 准确率 |
|------|--------|
| 人类专家 | ~90% |
| GPT-3.5 | ~50-60% |
| GPT-4 | ~60-70% |
| 专用医学模型 | ~70-80% |

注：MedQA 被认为是目前最具挑战性的医学 QA 数据集之一，反映了 LLM 在专业医学领域仍面临显著挑战。
