# TextVQA

## 数据集简介

TextVQA 是一个需要阅读图像中文本的视觉问答数据集，由 Facebook AI Research (FAIR) 于 2019 年发布。该数据集包含 28,408 张来自自然场景的图像（如海报、书籍封面、产品包装、路标等），以及 45,336 个需要推理图像文本内容的问题。TextVQA 的独特之处在于其问题必须通过读取和理解图像中的文字才能回答，传统的仅依赖视觉内容的 VQA 模型在此数据集上表现不佳。例如问题"这个人的衬衫上写的什么？"需要 OCR 识别后才能回答。数据集涵盖了多种文本来源和语言场景，要求模型具备 OCR、文本理解和视觉推理的联合能力。

## 相关链接

- **官网/论文**: https://textvqa.org/
- **GitHub**: https://github.com/facebookresearch/textvqa
- **在线 Demo**: https://huggingface.co/spaces/ Speech-Research/TEVQA

## 相关论文

**TextVQA: Studying Visually Grounded Conversation Reasoning in Freely-Formatted Text-Based Questions**

- **作者**: Amanpreet Singh, Vedanuj Goswami, Vivek Natarajan, Yu Jiang, Marcus Rohrbach, Dhruv Batra, Devi Parikh, Lu Yuan
- **年份**: 2019
- **摘要**: TextVQA 提出了一个需要读取图像中文字的视觉问答任务和数据集。与传统 VQA 数据集不同，TextVQA 中的问题需要模型首先识别图像中的文本，然后基于识别出的文本来推理答案。论文介绍了数据集的构建过程，包含多种需要文本推理的问题类型，并建立了基于 LoRRA 等模型的基线系统，为多模态文本理解研究提供了新的挑战。

## 数据示例

### 数据格式说明

TextVQA 数据集以 JSON 格式存储，包含以下主要字段：
- `image_id`: 图像唯一标识符
- `image_url`: 图像 URL
- `question`: 问题文本
- `question_id`: 问题唯一标识符
- `answers`: 10 个标注者提供的答案列表（用于投票）
- `objects`: 图像中检测到的对象信息（含边界框和类别）
- `ocr_tokens`: 图像中识别出的文本片段列表

### 问题类型示例

| 问题类型 | 示例问题 |
|----------|----------|
| OCR 基础 | "这张图片中的文字是什么？" |
| 计数 | "盒子上有多少个苹果图标？" |
| 颜色 | "标志牌上的文字是什么颜色？" |
| 顺序 | "产品名称左边的词是什么？" |

### 真实样本

```json
{
  "image_id": "18784970_erasmus_bridge.jpg",
  "question": "The text on the red sign says what?",
  "question_id": "18784970_erasmus_bridge_0",
  "answers": ["鹿特丹", "鹿特丹", "rotterdam", "鹿特丹", "rotterdam", "鹿特丹", "rotterdam", "鹿特丹", "rotterdam", "鹿特丹"],
  "ocr_tokens": ["鹿特丹", "ERASMUS", "BRIDGE"]
}
```

```json
{
  "image_id": "15795_guilty_conscience_cover.jpg",
  "question": "Who is the artist of this album?",
  "question_id": "15795_guilty_conscience_cover_0",
  "answers": ["艾米纳姆", "艾米纳姆", "Eminem", "Eminem", "艾米纳姆", "艾米纳姆", "Eminem", "艾米纳姆", "Eminem", "艾米纳姆"],
  "ocr_tokens": ["GUILTY", "CONSCIENCE", "EMINEM", "PRESENTS", "AN", "ALTER", "EGO"]
}
```

### OCR 标注格式

```json
{
  "image_id": "example_123",
  "ocr_tokens": [
    {"text": "HELLO", "bounding_box": {"top": 10, "left": 20, "width": 50, "height": 20}, "confidence": 0.95},
    {"text": "WORLD", "bounding_box": {"top": 10, "left": 80, "width": 50, "height": 20}, "confidence": 0.92}
  ]
}
```
