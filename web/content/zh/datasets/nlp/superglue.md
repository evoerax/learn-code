# SuperGLUE

## 数据集简介

SuperGLUE 是 GLUE（General Language Understanding Evaluation）基准的升级版本，由纽约大学、华盛顿大学和 DeepMind 于 2019 年联合发布。SuperGLUE 针对 GLUE 基准中模型表现已接近人类水平的问题，精心筛选了 8 个更具挑战性的自然语言理解任务，涵盖蕴含推理、因果推理、问答、句子补全等类型。该基准使用更严格的评估指标和更复杂的多选题设计，旨在推动自然语言理解研究进入新的发展阶段。SuperGLUE 的发布促进了对模型真实语言理解能力的深度探索。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网/论文 | https://arxiv.org/abs/1905.00537 |
| GitHub | https://github.com/facebookresearch/SGG |
| 在线体验 | https://super.gluebenchmark.com |

## 相关论文

**Title:** SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems  
**Authors:** Alex Wang, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, Samuel R. Bowman  
**Year:** 2019  
**Abstract:** SuperGLUE 针对 GLUE 中模型已超越人类的任务，重新设计了 8 个更具挑战性的 NLU 任务，包括 ReCoRD（阅读理解）、WiC（词义消歧）、CB（因果蕴含）等。论文展示了不同模型在 SuperGLUE 上的表现差异，揭示了当前模型在多步推理、长文本理解等方面的局限性，为下一代语言理解系统提供了明确的改进方向。

## 数据示例

**示例 1 - WiC (Word-in-Context) 词义消歧：**
```
任务: 判断粗体词在两个句子中是否含义相同
句子1: The bank by the river was flooded.
句子2: We walked along the river bank.
标签: false (bank在第一句指银行，第二句指河岸)
```

**示例 2 - ReCoRD (Reading Comprehension) 阅读理解：**
```
上下文: According to weather reports, temperatures in the city dropped to 
        32 degrees Fahrenheit. Several schools announced closures, including 
        Central Elementary and Westside Middle School.
问题: Which schools announced closures?
预测: Central Elementary and Westside Middle School
```

**示例 3 - CB (CommitmentBank) 因果蕴含：**
```
前提: If you don't practice, you won't learn.
假设: You will learn.
标签: entailment (蕴含)
```

**数据格式说明：**
- WiC: 词对 + 两个句子，标签为布尔值表示词义是否相同
- ReCoRD: 新闻段落 + 问答对，答案来自段落中的实体
- CB: 前提-假设对，标签为蕴含/矛盾/中性
- 所有任务均为多选题或二元分类题，便于标准化评估
