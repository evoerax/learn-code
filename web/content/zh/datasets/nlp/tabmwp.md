# TabMWP

## 数据集简介

TabMWP（Tabular Math Word Problems）是由 UCLA 和 Allen AI 于 2022 年创建的大规模表格数学推理数据集，包含约 9.5 万道数学应用题，每道题目都配有相关的表格上下文信息。数据来源于 SAT、SMT 和竞赛数学等多种来源，要求模型不仅能够理解自然语言描述的数学问题，还需要从表格中提取关键数值进行推理计算。TabMWP 涵盖了算术、代数、几何、概率等多种数学领域，是评估大语言模型数值推理能力的重要基准。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/2205.06079
- **GitHub**: https://github.com/nyu-mll/tabmwp
- **在线体验/Demo**: https://tables.mathai.ai/

## 相关论文

**TabMWP: Towards Table-aware Math Reasoning with Hierarchical Decoupling**

- **作者**: Lu, J. et al., UCLA / Allen AI
- **年份**: 2022
- **摘要**: 本文提出了 TabMWP 数据集，用于评估语言模型在表格上下文下的数学推理能力。作者设计了层次化解耦的解题策略，将表格理解与数学推理分离处理。实验结果表明，现有大语言模型在表格数学推理任务上存在显著挑战，平均准确率仅约 50%，揭示了数值推理与结构化信息理解结合的研究方向。

## 数据示例

**数据格式说明**: JSON 格式，包含问题、表格上下文、答案和解析

```json
{
  "problem_id": "tabmwp_001",
  "question": "根据下表计算所有产品的总利润",
  "table": {
    "header": ["产品", "销量", "单价", "成本"],
    "rows": [
      ["产品A", "100", "50", "30"],
      ["产品B", "80", "40", "25"],
      ["产品C", "120", "60", "35"]
    ]
  },
  "answer": "7400",
  "solution": "产品A利润: (50-30)×100=2000; 产品B利润: (40-25)×80=1200; 产品C利润: (60-35)×120=3000; 总利润=2000+1200+3000=6200",
  "answer_type": "numeric",
  "difficulty": "medium",
  "subject": "arithmetic"
}
```

**真实样本**:

1. **算术计算题**:
```json
{
  "problem_id": "tabmwp_002",
  "question": "某公司第一季度销售额如下表所示，求平均月销售额",
  "table": {
    "header": ["月份", "销售额(万元)"],
    "rows": [["1月", "120"], ["2月", "135"], ["3月", "150"]]
  },
  "answer": "135",
  "solution": "平均销售额 = (120+135+150)/3 = 135万元",
  "answer_type": "numeric",
  "difficulty": "easy",
  "subject": "arithmetic"
}
```

2. **百分比应用题**:
```json
{
  "problem_id": "tabmwp_003",
  "question": "根据下表中的数据，计算产品A的利润率",
  "table": {
    "header": ["产品", "售价", "成本"],
    "rows": [["产品A", "200", "150"], ["产品B", "180", "120"]]
  },
  "answer": "33.3%",
  "solution": "利润率 = (200-150)/200 × 100% = 25%",
  "answer_type": "percent",
  "difficulty": "medium",
  "subject": "percentage"
}
```

3. **几何应用题**:
```json
{
  "problem_id": "tabmwp_004",
  "question": "根据下表提供的教室尺寸，计算需要多少块60cm×60cm的地砖",
  "table": {
    "header": ["房间", "长(m)", "宽(m)"],
    "rows": [["教室1", "8", "6"], ["教室2", "10", "7"]]
  },
  "answer": "3112",
  "solution": "教室1面积: 8×6=48㎡=480000c㎡, 需要地砖: 480000/(60×60)≈134块; 教室2面积: 10×7=70㎡=700000c㎡, 需要地砖: 700000/(60×60)≈195块; 总计: 134+195=329块",
  "answer_type": "numeric",
  "difficulty": "hard",
  "subject": "geometry"
}
```
