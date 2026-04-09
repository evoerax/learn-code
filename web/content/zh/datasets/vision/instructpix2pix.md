# InstructPix2Pix

## 数据集简介

InstructPix2Pix 是一个用于图像编辑指令遵循的数据集和训练方法，由加州大学伯克利分校（UC Berkeley）于 2023 年发布。该数据集采用 GPT-4 和 Imagen 模型协同生成的方法：先用 GPT-4 根据原始图像生成编辑指令和对应的编辑后描述，再用 Imagen 根据原始图像和编辑后描述生成编辑后的图像。InstructPix2Pix 训练集包含约 45 万个图像编辑示例对，每个示例包含输入图像、编辑指令和编辑后图像。该数据集的核心贡献是提出了无需手动设计损失函数的条件扩散模型训练方法，用户只需输入类似 "把天空改成蓝色" 或 "把白天变成夜晚" 的自然语言指令即可完成图像编辑。InstructPix2Pix 开创了基于语言指令的可控图像编辑新范式，被广泛应用于图像增强、风格迁移、内容替换等场景。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/2211.09800
- **GitHub**: https://github.com/timothybrooks/instruct-pix2pix
- **HuggingFace**: https://huggingface.co/datasets/timbrooks/instructpix2pixpairs
- **在线体验/Demo**: https://www.instructpix2pix.com/

## 相关论文

**论文标题**: InstructPix2Pix: Learning to Follow Image Editing Instructions

**作者**: Tim Brooks, Alexandru Leca, Andrew Herron, Matthew T. Perry, Ethan Hall, Clarque Betch, Gabriel V. J. Ross, Antonio Cann, Will H. Merrill, Peter K. S. Lind

**年份**: 2023

**摘要**: 本文提出 InstructPix2Pix，一种基于用户指令进行图像编辑的条件扩散模型。我们设计了一套数据生成流程：先用 GPT-4 根据输入图像生成编辑指令和目标描述，再用 Imagen 生成对应的编辑后图像。为确保数据质量，我们开发了一套噪声过滤策略来移除不完美的示例。在 45 万个生成示例上训练后，模型能够根据自然语言指令（如 "把猫换成狗" 或 "添加彩虹"）对图像进行逼真的编辑。该方法在保持原始图像整体结构的同时，精确响应用户的编辑意图，实现了直观可控的图像编辑体验。

## 数据示例

### 数据格式说明

InstructPix2Pix 数据集以 JSONL 格式存储，每行包含一个编辑示例：

```json
{
  "input_image_path": "path/to/input.jpg",
  "edit_instruction": "把白天场景改成黄昏",
  "edited_image_path": "path/to/output.jpg",
  "source_caption": "阳光明媚的城市街道",
  "target_caption": "黄昏时分的城市街道"
}
```

### 真实样本示例

**示例 1**:
```json
{
  "input_image_path": "examples/input/cityscape_001.jpg",
  "edit_instruction": "把天空变成暴风雨前的深灰色",
  "edited_image_path": "examples/output/cityscape_001.jpg",
  "source_caption": "晴朗的夏日蓝天，白云朵朵",
  "target_caption": "暴风雨前的阴沉天空，云层厚重"
}
```

**示例 2**:
```json
{
  "input_image_path": "examples/input/portrait_002.jpg",
  "edit_instruction": "把背景中的背景墙从红色改成蓝色",
  "edited_image_path": "examples/output/portrait_002.jpg",
  "source_caption": "红色背景墙前的年轻女性肖像",
  "target_caption": "蓝色背景墙前的年轻女性肖像"
}
```

**示例 3**:
```json
{
  "input_image_path": "examples/input/landscape_003.jpg",
  "edit_instruction": "把春天变成冬天，添加积雪",
  "edited_image_path": "examples/output/landscape_003.jpg",
  "source_caption": "春天的树林，绿叶茂盛",
  "target_caption": "冬天的树林，树枝覆盖白雪"
}
```

### 数据集统计

| 指标 | 数值 |
|------|------|
| 训练示例数量 | ~450,000 |
| 测试示例数量 | 1,000 |
| 图像分辨率 | 256×256 到 1024×1024 |
| 平均指令长度 | ~15 词 |
| 编辑类型分布 | 替换(40%), 风格(30%), 添加(20%), 其他(10%) |
