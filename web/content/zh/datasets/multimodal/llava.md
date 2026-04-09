# LLaVA

## 数据集简介

LLaVA (Large Language and Vision Assistant) 是由 Microsoft 和 MIT 等机构联合发布的开源大型多模态模型，其训练数据集包含约 150 万个图像-文本对话对。该数据集从 GPT-4 生成的视觉指令数据、COYO-700M 和 LAION-5B 中筛选的高质量图文对，以及自定义场景对话三部分构建而成。LLaVA 首次将指令微调范式成功迁移到多模态领域证明了语言模型可以高效学习视觉理解能力。其训练数据涵盖通用视觉问答、图像描述、科学图像解析等多种任务类型，推动了开源多模态大模型的发展。

## 相关链接

- 官网：https://llava-vl.github.io
- 论文：https://arxiv.org/abs/2304.08485
- GitHub：https://github.com/haotian-liu/LLaVA
- 在线体验：https://llava-vl.github.io

## 相关论文

**论文标题：** Visual Instruction Tuning

**作者：** Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee

**年份：** 2023

**摘要：** LLaVA 论文首次提出视觉指令微调方法，通过将图像转换为视觉 token 序列并与语言 token 对齐，实现端到端的多模态训练。研究团队构建了包含 150 万对话对的大规模数据集，涵盖不同类型的视觉理解和生成任务。实验表明，仅使用约 60K 图像-文本对进行微调，LLaVA-1.5 在多个 VQA 和图像描述基准上取得了与商用模型相当的表现，大幅降低了多模态模型训练的计算成本。

## 数据示例

### 数据格式说明

LLaVA 训练数据采用以下 JSON 格式：

```json
{
  "id": "unique_conversation_id",
  "image": "image_filename.jpg",
  "conversations": [
    {
      "from": "human",
      "value": "<image>\n用户问题文本"
    },
    {
      "from": "gpt",
      "value": "助手回答文本"
    }
  ],
  "data_source": "llava_pretrain|llava_instruct|synthetic"
}
```

### 真实样本

**样例 1 - 通用视觉问答:**

```json
{
  "id": "conv_001",
  "image": "00001.jpg",
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nWhat is shown in this image? Please describe the main objects and scene."
    },
    {
      "from": "gpt",
      "value": "The image shows a modern living room with large windows overlooking a city skyline. In the foreground, there's a gray sofa with colorful throw pillows, a glass coffee table, and a floor lamp. A painting of abstract art hangs on the wall."
    }
  ],
  "data_source": "llava_instruct"
}
```

**样例 2 - 科学图像解析:**

```json
{
  "id": "conv_042",
  "image": "science_diagram.png",
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nExplain the process shown in this diagram."
    },
    {
      "from": "gpt",
      "value": "This diagram illustrates the process of photosynthesis. Light energy (sun icon) is absorbed by chlorophyll in the chloroplast. Water (H2O) is taken up by roots and transported to leaves. Carbon dioxide (CO2) enters through stomata. The light reactions convert these inputs into ATP and NADPH, which then fuel the Calvin cycle to produce glucose (C6H12O6), releasing oxygen (O2) as a byproduct."
    }
  ],
  "data_source": "llava_instruct"
}
```

**样例 3 - 多轮对话:**

```json
{
  "id": "conv_128",
  "image": "00089.jpg",
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nWhat type of vehicle is this?"
    },
    {
      "from": "gpt",
      "value": "This is a red double-decker bus, typical of those found in London, UK."
    },
    {
      "from": "human",
      "value": "What city is this likely taken in?"
    },
    {
      "from": "gpt",
      "value": "Based on the red double-decker bus and the black taxicab visible in the background, this photo was likely taken in London. The architecture of the buildings also suggests a central London location."
    }
  ],
  "data_source": "llava_instruct"
}
```
