# SEED-Bench Dataset

## 数据集简介

SEED-Bench 是由上海人工智能实验室（Shanghai AI Lab）于 2023 年发布的多模态大语言模型（MLLM）综合评估基准，旨在系统评估 MLLM 在多种模态和任务类型上的表现。该数据集包含 19,000 多道选择题，涵盖 12 种感知能力和 4 种认知能力，涉及图像和视频两种模态。12 种感知维度包括：场景理解、物体识别、物体计数、文字识别、空间关系、实例识别、纹理理解、深度估计等。4 种认知维度包括：知识推理、动作预测、描述生成、属性推理等。SEED-Bench 采用标准化评测流程，是 MLLM 领域重要的评测标准之一。

## 相关链接

- 官网：https://seed-bench.github.io/
- 论文：https://arxiv.org/abs/2307.16125
- GitHub：https://github.com/AILab-CVC/SEED-Bench
- Hugging Face：https://huggingface.co/datasets/AILab-CVC/SEED-Bench
- 评测工具：https://github.com/AILab-CVC/SEED-Bench/blob/main/evaluation

## 相关论文

**SEED-Bench: Multimodal Large Language Models Benchmark**
- 作者：Yang Li, Jiaxuan Guo, Xingjian Deng, Yanqi Liu, Songang Liu, Peitao Shi, Kexin Kang, Zhepeng He, Bohan Zhuang, Jiayuan Gu, Ziwei Liu
- 年份：2023
- 摘要：本文介绍了 SEED-Bench 评估基准的构建方法。作者定义了 MLLM 能力的 12 个感知维度和 4 个认知维度，通过专家标注生成 19,000+ 道高质量选择题。SEED-Bench 的独特之处在于其系统性和全面性，覆盖了从基础感知到高级认知的多层次能力评估，为 MLLM 的能力诊断和对比提供了标准化依据。

## 数据示例

### 数据格式说明

每条数据包含：
- `question_id`：问题唯一标识
- `question`：问题文本
- `image`：图像 URL 或本地路径
- `options`：4 个候选选项 [A, B, C, D]
- `answer`：正确答案字母
- `dimension`：能力维度分类
- `sub_dimension`：子维度分类

### 真实样本示例

**样本 1（物体识别）**
```json
{
  "question_id": "SEED-001",
  "question": "What specific type of animal is shown in this image?",
  "image": "path/to/image001.jpg",
  "options": ["Golden Retriever", "Labrador Retriever", "German Shepherd", "Poodle"],
  "answer": "A",
  "dimension": "Object Recognition",
  "sub_dimension": "Breed Recognition"
}
```

**样本 2（空间关系）**
```json
{
  "question_id": "SEED-023",
  "question": "Which object is located to the left of the red ball in the image?",
  "image": "path/to/image023.jpg",
  "options": ["A blue cube", "A green cylinder", "A yellow pyramid", "A white sphere"],
  "answer": "C",
  "dimension": "Spatial Reasoning",
  "sub_dimension": "Relative Position"
}
```

**样本 3（属性推理）**
```json
{
  "question_id": "SEED-156",
  "question": "Based on the person's appearance and context, what is the most likely weather condition?",
  "image": "path/to/image156.jpg",
  "options": ["Sunny", "Rainy", "Snowy", "Windy"],
  "answer": "B",
  "dimension": "Attribute Reasoning",
  "sub_dimension": "Environmental Inference"
}
```
