# VQAv2 (Visual Question Answering version 2)

## 数据集简介

VQAv2 是由 Salesforce Research 团队于 2017 年发布的大规模视觉问答数据集，是 VQA 数据集的第二版。该数据集包含超过 100 万个关于 COCO 图像的问答对，每个问题需要根据图像内容进行推理并生成答案。VQAv2 的独特之处在于引入了互补性问题设计，确保每个问题至少有两个不同回答者提供的答案，这有效减少了视觉问答中的语言先验问题（如仅凭"是什么运动"就能猜出答案）。数据集规模为训练集 82783 张图像 443757 个问题，验证集 40504 张图像 214354 个问题。VQAv2 是视觉-语言多模态理解领域最具影响力的基准之一，被广泛用于评估 VLM（视觉语言模型）的能力。

## 相关链接

- 官网：https://visualqa.org/
- 论文：https://arxiv.org/abs/1704.03511
- Hugging Face：https://huggingface.co/datasets/flaviagiammarino/vqa-v2
- GitHub：https://github.com/GT-Vision-Lab/VQA

## 相关论文

**Making the V in VQA Matter: Elevating the Role of Image Understanding in Visual Question Answering**
- 作者：Yash Goyal, Tejas Khot, Douglas Summers, Dhruv Batra, Devi Parikh
- 年份：2017
- 摘要：本文介绍了 VQAv2 数据集的构建方法和核心改进。通过引入互补性问题对，迫模模型必须依赖图像信息而非语言先验来回答问题。实验表明，即使强视觉问答模型也严重依赖语言先验，VQAv2 的设计有效推动了真正基于图像理解的视觉问答研究。

**Bottom-Up and Top-Down Attention for Image Captioning and Visual Question Answering**
- 作者：Peter Anderson, Xiaodong He, Chris Buehler, Damien Teney, Mark Johnson, Stephen Gould, Lei Zhang
- 年份：2018
- 摘要：本文提出了自底向上（Faster R-CNN）和自顶向下相结合的注意力机制，显著提升了图像描述和视觉问答任务的性能。该方法使用目标检测提取图像区域特征，结合任务特定的上下文注意力，为多模态视觉-语言任务提供了有效的特征表示方案。

## 数据示例

### 数据格式说明

VQAv2 数据结构：
- 图像来源：COCO 训练/验证集图像（对应 82783/40504 张图像）
- 每条数据包含：
  - `question_id`：问题唯一标识符
  - `image_id`：COCO 图像 ID
  - `question`：问题文本
  - `answers`：10 个众包回答的列表
  - `question_type`：问题类型
  - `answer_type`：答案类型（yes/no/number/other）
  - `image_url`：图像 URL

### 真实样本示例

**样本 1**
```json
{
  "question_id": 1,
  "image_id": 262145,
  "question": "What is the man riding?",
  "answers": ["surfboard", "surfboard", "board", "surfboard", "longboard", "board", "surfboard", "board", "surffboard", "longboard"],
  "answer_type": "other",
  "question_type": "What is the person riding?",
  "multiple_choice_answer": "surfboard"
}
```

**样本 2**
```json
{
  "question_id": 2,
  "image_id": 262145,
  "question": "Is the man riding a surfboard?",
  "answers": ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
  "answer_type": "yes/no",
  "question_type": "Is the person doing X?",
  "multiple_choice_answer": "yes"
}
```

**样本 3**
```json
{
  "question_id": 3,
  "image_id": 262145,
  "question": "How many people are in the image?",
  "answers": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  "answer_type": "number",
  "question_type": "How many?",
  "multiple_choice_answer": "1"
}
```

### 标注类型

1. **开放式答案**：10 个众包回答的列表，评估时使用投票机制
2. **选择题答案**：从给定选项中选择
3. **答案类型**：yes/no（布尔）、number（数字）、other（其他）
4. **问题类型**：what、who、how many、is the、where 等
5. **问题来源**：图像标题转换、模板生成、众包创新问题
