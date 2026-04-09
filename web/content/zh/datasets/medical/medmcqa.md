# MedMCQA

## 数据集简介

MedMCQA 是由印度医学工程学院（IIIT）和斯坦福大学联合发布的大规模医学多选题问答数据集，发布于 2022 年。该数据集收集了约 194,000 道来自印度医学研究生入学考试（NEET PG）和其他来源的多选题，涵盖解剖学、药理学、病理学、内科学、外科学等 30 多个医学子领域。每道题目包含 4 个选项，答案为单选或多选题。MedMCQA 的规模是 MedQA 的 5 倍以上，是医学 QA 领域最大的公开数据集之一，主要用于评估模型在医学考试场景下的知识应用能力。

## 相关链接

- 官网：https://github.com/MedMCQA/MedMCQA
- GitHub：https://github.com/MedMCQA/MedMCQA
- Hugging Face：https://huggingface.co/datasets/medmcqa
- 论文：https://arxiv.org/abs/2201.09440

## 相关论文

**MedMCQA: A Large-Scale Multi-Turn Medical Question Answering Dataset**
- 作者：Ankit Pal, et al. (IIIT Hyderabad, Stanford University)
- 年份：2022
- 摘要：本文发布了 MedMCQA 数据集，包含 194,000+ 道医学多选题，来自印度医学考试。数据集涵盖 30+ 医学子领域，包括单选和多选题两种类型。研究发现现有模型在该数据集上表现欠佳，表明医学知识的复杂性和专业性对模型提出了更高挑战。MedMCQA 为医学 LLM 的训练和评估提供了更全面的基准。

## 数据示例

### 数据格式说明

每条数据包含：
- `question`：医学问题文本
- `choice_a/b/c/d`：四个选项
- `answer`：正确答案
- `subject_name`：科目名称
- `topic_name`：主题名称
- `expired`：是否为过期题目

### 真实样本示例

**样本 1 - 药理学**
```json
{
  "question": "A patient with severe pain is prescribed morphine. Which of the following adverse effects is most likely to require discontinuation of the drug?",
  "choice_a": "Constipation",
  "choice_b": "Respiratory depression",
  "choice_c": "Nausea",
  "choice_d": "Drowsiness",
  "answer": "b",
  "subject_name": "Pharmacology",
  "topic_name": "Opioid Analgesics"
}
```

**样本 2 - 解剖学**
```json
{
  "question": "The lingual artery is a branch of which of the following arteries?",
  "choice_a": "External carotid artery",
  "choice_b": "Internal carotid artery",
  "choice_c": "Maxillary artery",
  "choice_d": "Facial artery",
  "answer": "a",
  "subject_name": "Anatomy",
  "topic_name": "Head and Neck"
}
```

**样本 3 - 病理学**
```json
{
  "question": "Which of the following tumor markers is most specific for hepatocellular carcinoma?",
  "choice_a": "CEA",
  "choice_b": "CA-125",
  "choice_c": "AFP",
  "choice_d": "CA-19-9",
  "answer": "c",
  "subject_name": "Pathology",
  "topic_name": "Tumor Markers"
}
```
