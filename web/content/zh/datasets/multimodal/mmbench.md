# MMbench

## 数据集简介

MMbench 是由上海人工智能实验室（Shanghai AI Lab）于 2023 年发布的多模态大语言模型（MLLM）评测基准，旨在提供全面的多模态能力评估。MMbench 包含 2,974 个选择题题目，涵盖 20 个能力维度，包括 OCR、知识理解、空间关系、代码生成等。题目形式为图像配文本问题，要求模型同时理解图像和文本信息。该数据集设计精巧，题目按难度分为不同等级，并提供每道题的详细能力分类。MMbench 采用自动化评估流程，支持 8 种主流多模态大语言模型的统一评测。

## 相关链接

- 官网：https://mmbench.opencompass.org.cn/
- 论文：https://arxiv.org/abs/2307.06281
- GitHub：https://github.com/open-compass/MMBench
- Hugging Face：https://huggingface.co/datasets/mmbench

## 相关论文

**MMbench: A Comprehensive Multi-modal Benchmark for Evaluating Large Language Models**
- 作者：Yuan Liu, Haodong Duan, Yuan Liu et al.
- 年份：2023
- 摘要：本文介绍了 MMbench 基准的设计和构建方法。该基准包含近 3,000 道多模态选择题，涵盖 20 个能力维度。论文提出了系统化的能力分类体系，将多模态能力分解为细粒度维度。MMbench 提供标准化评测协议，支持多种 MLLM 的自动化评估，并揭示了当前模型在不同能力维度上的表现差异。

## 数据示例

### 数据集结构

- 总题数：2,974 道
- 能力维度：20 个
- 题目类型：选择题（4 选项）
- 图像来源：公开数据集和网络图像

20 个能力维度分类：
- **感知类**：OCR、文档理解、表情识别、图像质量评价
- **知识类**：百科知识、科学知识、文化常识
- **推理类**：逻辑推理、代码推理、数学推理
- **空间类**：空间关系、物体计数、位置关系
- **跨模态类**：图像描述、图像问答、视觉推理

### 真实样本示例

**样本 1 - OCR**
```json
{
  "question_id": "MMbench_001",
  "image": "path/to/image_001.jpg",
  "question": "图中文字的内容是什么？",
  "options": [
    "北京是中国的首都",
    "上海是中国的金融中心",
    "深圳是中国的科技之城",
    "广州是对外贸易港口"
  ],
  "answer": "A",
  "capability": "OCR",
  "difficulty": "easy"
}
```

**样本 2 - 空间关系**
```json
{
  "question_id": "MMbench_123",
  "image": "path/to/image_123.jpg",
  "question": "图中红色方块位于蓝色圆圈的哪个方向？",
  "options": [
    "左上方",
    "右上方",
    "正下方",
    "正上方"
  ],
  "answer": "B",
  "capability": "Spatial_Relationship",
  "difficulty": "medium"
}
```

**样本 3 - 科学知识**
```json
{
  "question_id": "MMbench_456",
  "image": "path/to/image_456.jpg",
  "question": "图中所示的实验装置用于验证什么科学原理？",
  "options": [
    "牛顿第一定律",
    "欧姆定律",
    "光的折射定律",
    "能量守恒定律"
  ],
  "answer": "C",
  "capability": "Science_Knowledge",
  "difficulty": "hard"
}
```

### 评估方式

MMbench 采用精确匹配（Exact Match）作为主要评估指标：

```python
accuracy = correct_predictions / total_questions
```

每个能力维度的得分单独计算，支持能力雷达图可视化。
