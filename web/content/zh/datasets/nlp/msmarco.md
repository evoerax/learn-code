# MS MARCO

## 数据集简介

MS MARCO（Microsoft Machine Reading Comprehension）是微软于 2016 年发布的大规模阅读理解数据集，旨在推动基于真实用户查询的机器阅读理解研究。该数据集规模庞大，包含约 100 万个真实查询及其答案，查询来源于必应（Bing）搜索引擎和 Cortana 语音助手的真实用户日志。每个问题由人类人工撰写，并从网页文档中标注出答案片段。MS MARCO 涵盖多种问题类型，包括事实型问答、观点型问答、健康医疗咨询等，是评估阅读理解系统在真实场景下性能的重要基准，对推动 BERT 等预训练模型的阅读理解能力发展起到了关键作用。

## 相关链接

- 官网/论文：https://microsoft.github.io/msmarco/
- GitHub：https://github.com/microsoft/MSMARCO-MRC-Data
- 数据集下载：https://msmarco.blob.core.windows.net/msmarco/
- 在线体验：https://www.bing.com/dev/playground/

## 相关论文

**MS MARCO: A Human Generated MAchine Reading COmprehension Dataset**
- 作者：Tri Nguyen, Mir Rosenberg, Xia Song, Jianfeng Gao, Saurajit R. N. Ghosh, Zaid D. Khanal, Scott C. W. Brown, Lise Getoor, Lawrence R. Gardner
- 年份：2016
- 摘要：MS MARCO 是一个大规模阅读理解数据集，包含约 100 万个查询及其对应的答案和上下文文档。与传统阅读理解数据集不同，MS MARCO 的问题来源于真实用户的搜索查询和语音请求，答案由人类标注者从真实网页文档中选取。数据集涵盖多种类型的问题，包括事实型、观点型和健康咨询等，旨在推动机器阅读理解系统在真实应用场景中的研究。

## 数据示例

**数据格式说明**
MS MARCO 数据集以 JSON 格式存储，每条记录包含：
- query_id：查询唯一标识符
- query：用户查询文本
- passages：相关文档段落列表（包含 url、title、paragraph_text 等字段）
- answers：标注答案列表（可能为空或包含多个候选答案）
- is_selected：标记答案是否来自人工标注

**真实样本**

样本1（事实型查询）：
```json
{
  "query_id": "1000000",
  "query": "what is the capital of france",
  "passages": [
    {
      "url": "https://en.wikipedia.org/wiki/France",
      "title": "France",
      "paragraph_text": "France is a country in Western Europe. Paris is the capital and largest city of France.",
      "is_selected": true
    }
  ],
  "answers": ["Paris"]
}
```

样本2（观点型查询）：
```json
{
  "query_id": "1000001",
  "query": "is it worth buying an electric car",
  "passages": [
    {
      "url": "https://example.com/car-review",
      "title": "Electric Car Review",
      "paragraph_text": "Electric cars are more expensive upfront but cost less to maintain and operate. Whether it's worth it depends on your driving habits and local infrastructure.",
      "is_selected": true
    }
  ],
  "answers": ["Whether it's worth it depends on your driving habits and local infrastructure."]
}
```

样本3（健康医疗查询）：
```json
{
  "query_id": "1000002",
  "query": "symptoms of seasonal allergies",
  "passages": [
    {
      "url": "https://www.mayoclinic.org/diseases-conditions/hay-fever",
      "title": "Hay Fever",
      "paragraph_text": "Common symptoms of seasonal allergies include sneezing, runny or stuffy nose, itchy and watery eyes, and nasal congestion. Some people may also experience fatigue and headache.",
      "is_selected": true
    }
  ],
  "answers": ["Common symptoms include sneezing, runny or stuffy nose, itchy and watery eyes, and nasal congestion."]
}
```
