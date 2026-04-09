# MathVista

## 数据集简介

MathVista 是一个视觉数学推理基准测试，用于评估多模态大型语言模型在视觉场景中的数学推理能力。该数据集包含 9,480 个数学问题，涵盖 6 个主要任务类型（数学选择题、视觉问题回答、视觉数学推理、几何推理、OCR 数学和视频数学），要求模型同时理解图像中的视觉信息和数学内容。MathVista 由 UCLA、Microsoft 和 NYU 的研究团队于 2023 年发布，是评估视觉数学推理能力的重要基准。

## 相关链接

- **官网/论文**: https://mathvista.github.io/
- **GitHub**: https://github.com/KalkiAI/MathVista
- **在线体验/Demo**: https://huggingface.co/papers/2410.15792

## 相关论文

**Title**: MathVista: Evaluating Mathematical Reasoning in Visual Contexts

**Authors**: Pan Lu, Hritik Bansal, et al. (UCLA, Microsoft, NYU)

**Year**: 2023

**Abstract**: MathVista presents a comprehensive benchmark of 9,480 visual math problems across 6 task types and 31 sub-categories. Unlike existing math benchmarks, it requires joint visual understanding and mathematical reasoning. The benchmark reveals significant gaps in current multimodal LLM capabilities, with the best models still underperforming humans by large margins. This work provides a fine-grained analysis of model strengths and weaknesses across different mathematical and visual task combinations.

## 数据示例

### 数据格式说明

MathVista 采用 JSON 格式存储，每个样本包含：
- `question_id`: 唯一问题标识符
- `question`: 数学问题文本
- `image`: 关联的视觉图像（PNG/JPG格式）
- `answer`: 标准答案
- `task_type`: 任务类型（mathqa/vqa/mmvr/geometry/ocr-math/video-math）
- `grade_level`: 年级水平（K-12, college, competition）

### 真实样本

**样本 1 - 数学选择题**:
```json
{
  "question_id": "mvp_train_001",
  "question": "If the picture shows 3 red balls and 2 blue balls in Box A, and 4 red balls and 3 blue balls in Box B, what is the probability of drawing a red ball from Box A?",
  "image": "problem_001.png",
  "answer": "3/5",
  "task_type": "mathqa",
  "grade_level": "middle_school"
}
```

**样本 2 - 几何推理**:
```json
{
  "question_id": "mvp_test_042",
  "question": "In the right triangle shown, if angle A is 30 degrees and the hypotenuse is 10cm, what is the length of the side opposite to angle A?",
  "image": "geometry_042.png",
  "answer": "5cm",
  "task_type": "geometry",
  "grade_level": "high_school"
}
```

**样本 3 - 视觉问答**:
```json
{
  "question_id": "mvp_val_108",
  "question": "How many more students passed the exam in Class B than in Class A according to the bar chart?",
  "image": "chart_108.png",
  "answer": "7",
  "task_type": "vqa",
  "grade_level": "elementary"
}
```
