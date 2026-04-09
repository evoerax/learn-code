# TyDi QA

## 数据集简介

TyDi QA（Typologically Diverse Question Answering）是由 Google Research 于 2020 年发布的 multilingual 问答数据集，涵盖 11 种不同语言类型的语言，包括阿拉伯语、日语、韩语、俄语、泰语等。该数据集的设计考虑了语言类型学多样性（typological diversity），选择了词序类型、形态复杂度、书写系统各异的语言，旨在评估模型的跨语言迁移能力和对低资源语言的处理能力。TyDi QA 避免了机器翻译偏差，所有问题和答案均由各语言的母语者独立标注，保证了数据的原生性和真实性。

## 相关链接

| 类型 | 链接 |
|------|------|
| 官网/论文 | https://arxiv.org/abs/2003.07332 |
| GitHub | https://github.com/google-research-datasets/tydi-qa |
| 在线体验 | https://ai.google.com/research/tydiqa |

## 相关论文

**Title:** TyDi QA: A Benchmark for Information-Seeking Question Answering in Typologically Diverse Languages  
**Authors:** Jonathan Clark, Egor Cherstvy, Iacer Calixto, Klaus-Rudolf M. Lang, Yingtao Tian, Magnus B. Jorst, Md. Mostafizur Rahman, Sadia Sharmin, Ethan A. Gordon, Quanquan Shugars, Jerry Quinn  
**Year:** 2020  
**Abstract:** TyDi QA 提出了语言类型学多样性的概念，选择了11种语言类型迥异的语言构建问答基准。论文发现，使用机器翻译训练数据的方法存在"翻译偏差"问题，导致模型在目标语言上的表现受限于翻译质量。因此 TyDi QA 坚持使用各语言原生数据，为多语言问答研究提供了更真实的评估场景。实验表明，即使是最先进的模型，在某些语言上的准确率仍低于简单检索基线。

## 数据示例

**示例 1 - 阿拉伯语问答（RTL语言）：**
```
问题: متى تم بناء الأهرامات في مصر؟ (胡夫金字塔何时建成？)
答案: circa 2560 BCE (约公元前2560年)
语言: 阿拉伯语 (Arabic)
```

**示例 2 - 日语问答（黏着语/复杂形态）：**
```
问题: 東京箔の人口はどれくらいですか？ (东京的人口有多少？)
答案: 約1,400万人 (约1400万人)
语言: 日语 (Japanese)
```

**示例 3 - 韩语问答（黏着语）：**
```
问题: 한국의 수도는 어디입니까? (韩国的首都在哪里？)
答案: 서울 (首尔)
语言: 韩语 (Korean)
```

**数据格式说明：**
- 包含两种任务类型： Passage Selection (选择包含答案的段落) 和 Minimal Answer Rate (预测答案是否存在)
- 每种语言 100-200 个问题，由母语者独立标注
- 数据以 JSON 格式存储，包含语言类型、问题、答案跨度、段落等字段
- 覆盖语言：阿拉伯语、孟加拉语、日语、韩语、俄语、泰语、越南语等11种语言
