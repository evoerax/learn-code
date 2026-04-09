# CoNLL-2003

## 数据集简介

CoNLL-2003 是 Named Entity Recognition (NER) 领域最具影响力的基准数据集之一，由 Sang 和 Meulder 于 2003 年在 CoNLL 国际会议上发布。该数据集专注于从英文和德文新闻语料中识别四种类型的命名实体：人员（PER）、组织（ORG）、地点（LOC）和杂项实体（MISC）。英文语料来源于 Reuters RCV1 新闻专线，包含约 22,000 条标注好的句子，145KB 规模。CoNLL-2003 的发布确立了 NER 任务的标准评估框架和 BIO 标注体系，为后续序列标注研究奠定了重要基础，被广泛应用于评估 CRF、RNN、BERT 等各类 NER 模型。

## 相关链接

- 官网/论文：https://aclanthology.org/W03-0419/
- GitHub：https://github.com/das17/files/blob/master/sample_data/conll2003.rar
- 数据集下载：https://data.deepai.org/conll2003.zip
- 在线体验：https://huggingface.co/datasets/conll2003

## 相关论文

**Introduction to the CoNLL-2003 Shared Task: Language-Independent Named Entity Recognition**
- 作者：Erik F. Tjong Sang, Fien De Meulder
- 年份：2003
- 摘要：本文介绍了 CoNLL-2003 命名实体识别共享任务。该任务是第三届计算自然语言学习会议的组成部分，专注于从非结构化文本中识别人员、组织、地点和杂项实体四种命名实体类型。数据集主要来源于 Reuters RCV1 英文新闻语料和德文新闻语料。任务采用标准的 BIO 标注体系，评估了来自 16 个团队的提交系统，结果显示基于机器学习的方法在此任务上表现优异。

## 数据示例

**数据格式说明**
CoNLL-2003 使用空行分隔句子，每行包含四个字段（英文）或五个字段（德文），以制表符分隔：
- 字段1：单词
- 字段2：词性标注（POS）
- 字段3：句法成分标签（Chunk）
- 字段4：命名实体标签（NER）

**真实样本**

样本1（英文句子 "U.N. official Ekeus heads for Baghdad."）：
```
U.N.   NNP  NP  B-ORG
official NN  NP  O
Ekeus  NNP  NP  B-PER
heads  VBZ  VP  O
for    IN   PP  O
Baghdad NNP  NP  B-LOC
.      .    O   O
```

样本2（英文句子 "The European Commission said on Thursday it disagreed with a German court ruling that compels ISP's to disclose the names and addresses of users."）：
```
The     DT   NP  O
European JJ   NP  B-ORG
Commission NN  NP  I-ORG
said    VBD  VP  O
on      IN   PP  O
Thursday NNP  NP  O
it      PRP  NP  O
disagreed VBD VP  O
with    IN   PP  O
a       DT   NP  O
German  JJ   NP  B-MISC
court   NN   NP  O
ruling  NN   NP  O
that    IN   SBAR O
compels  VBZ VP  O
ISP's   NNP NP  B-ORG
to      TO  VP  O
disclose VB  VP  O
the     DT   NP  O
names   NNS  NP  O
and     CC   CC  O
addresses NNS NP  O
of      IN   PP  O
users   NNS  NP  O
.       .    O   O
```

样本3（B-PER / I-PER 表示人员实体的开始和延续，B-LOC / I-LOC 表示地点实体）：
```
John   NNP  NP  B-PER
Smith  NNP  NP  I-PER
works  VBZ  VP  O
at     IN   PP  O
Google NNP  NP  B-ORG
in     IN   PP  O
New    NNP  NP  B-LOC
York   NNP  NP  I-LOC
.      .    O   O
```
