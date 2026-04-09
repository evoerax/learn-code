# ChartQA 数据集

## 数据集简介

ChartQA 是由 UW Tacoma 和 Allen AI 于 2022 年发布的图表理解问答数据集，是目前最具挑战性的图表推理基准之一。该数据集包含 32,000 多个问题，涵盖来自多个来源的科学图表、日常图表和合成图表。ChartQA 的问题设计强调深度推理，包括比较、计算和文本推理等多种类型，需要模型同时理解图表的视觉结构和数据语义。与传统的 VQA 数据集不同，ChartQA 中的问题不能仅通过 OCR 或简单的模式匹配回答，而是需要模型理解图表中的数值关系、趋势和模式。数据集还提供了人工撰写的图表描述和格式化单元格信息，为多模态图表理解研究提供了丰富的监督信号。

## 相关链接

- **官网/论文**: https://chartqa.org/
- **GitHub**: https://github.com/allenai/ChartQA (官方开源)
- **HuggingFace**: https://huggingface.co/datasets/ChartQA (数据集下载)

## 相关论文

**论文标题**: ChartQA: A Benchmark for Question Answering about Charts with Visual and Semantic Reasoning  
**作者**: Ahmed Masry, Do Xuan Long, Jia Qing Tan, Shafiq Jaitly, Enamul Hoque  
**年份**: 2022  
**摘要**: 本论文提出了 ChartQA 基准，用于评估模型在图表理解和推理方面的能力。研究团队分析了现有图表问答数据集的局限性，发现大多数问题仅需简单的模式匹配即可回答，缺乏对深度推理能力的考察。因此，ChartQA 特别设计了包含比较、计算和逻辑推理的问题，要求模型理解图表中的数值关系和语义信息。实验结果表明，即使是最先进的大型视觉语言模型（如 GPT-3、VQA），在 ChartQA 上的准确率也仅能达到 50-60%，远低于人类 85% 的表现，揭示了当前多模态模型在图表推理方面的显著不足。

## 数据示例

**数据格式说明**: ChartQA 采用 JSON 格式存储，包含图表图像路径、问题、答案和元数据信息。每个样本包含原始图表图像、问题文本、正确答案以及可选的图表描述和表格数据。

**数据格式结构**:
```json
{
  "id": "chartqa_001",
  "image_path": "charts/train/0.png",
  "question": "What is the percentage increase from Q1 to Q4?",
  "answer": "15",
  "reasoning_required": true,
  "chart_type": "line",
  "has_table": true,
  "table_data": {
    "headers": ["Quarter", "Value"],
    "rows": [["Q1", 20], ["Q2", 25], ["Q3", 30], ["Q4", 35]]
  },
  "human_caption": "Line chart showing quarterly performance with values increasing from 20 to 35"
}
```

**真实样本示例**:

```json
// 样本1: 条形图问题
{
  "image": "bar_chart_001.png",
  "question": "Which product had the highest sales in March?",
  "answer": "Product A",
  "chart_type": "bar"
}

// 样本2: 折线图问题
{
  "image": "line_chart_002.png", 
  "question": "What was the average temperature across all months?",
  "answer": "22.5 degrees",
  "chart_type": "line"
}

// 样本3: 饼图问题
{
  "image": "pie_chart_003.png",
  "question": "If the total budget is $100,000, how much was allocated to marketing?",
  "answer": "$25,000",
  "chart_type": "pie"
}
```

**数据集统计**:
```
总问题数: 32,000+
训练集: ~23,000 问题
测试集: ~9,000 问题
图表类型: 折线图、条形图、饼图、散点图、面积图等
问题类型: 比较(35%)、计算(30%)、文本推理(35%)
```
