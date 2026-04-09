# DocVQA

## 数据集简介

DocVQA（Document Visual Question Answering）是 Salesforce Research 于 2020 年发布的大规模文档理解问答数据集，旨在评估模型理解和回答关于文档内容问题的能力。与传统 VQA 不同，DocVQA 的问题需要从文档（如发票、表格、表单、报告等）中提取信息并给出答案，文档中包含丰富的文本、表格、图表和布局结构。该数据集包含 50,000 个问题，对应 12,000+ 份文档图像，涵盖财务报告、新闻文章、政府表格等多种文档类型。DocVQA 的挑战在于需要模型同时理解文档的视觉布局和文本语义，是评估文档智能（Document Intelligence）的重要基准，推动了 OCR、文档理解、信息抽取等领域的研究。

## 相关链接

- **官网**: https://docvqa.nlvr.ai/
- **论文**: https://arxiv.org/abs/2006.00626
- **GitHub**: https://github.com/allenai/docvqa
- **挑战赛**: https://rrc.cvc.ai/?ch=5

## 相关论文

**DocVQA: A Dataset for VQA on Document Images**

- **作者**: Mathew, Minesh and Bagal, Viraj and M, Vineeth and Tsatsulis, Angelos and K, Anoop and others
- **年份**: 2020
- **摘要**: DocVQA 是一个用于文档图像问答的大规模数据集，包含 50,000 个问题，涉及 12,000+ 份真实文档图像。文档类型涵盖财务报告、新闻文章、政府表格等，需要模型具备文档布局理解、文本阅读和语义推理能力。该数据集的问答任务要求模型能够从文档中定位答案区域并提取正确信息，是评估文档智能系统性能的重要基准。数据集还提供了边界框标注，用于定位问题和答案在文档中的位置。

## 数据示例

**数据格式说明**

DocVQA 数据以 JSON 格式存储，包含文档元数据、问答对和答案边界框信息：
- `doc_id`：文档唯一标识符
- `questions`：问题列表，每项包含问题文本、答案和答案区域
- `doc_type`：文档类型（如 invoice、form、receipt）
- `answers`：包含问题ID、问题文本、答案文本和答案边界框

**真实样本**

```json
{
  "doc_id": "invoice_001",
  "doc_type": "invoice",
  "url": "https://docvqadataset.com/images/invoice_001.png",
  "questions": [
    {
      "question_id": "q001",
      "question": "What is the total amount due?",
      "answer": "$1,245.00",
      "answer_bbox": {"x": 450, "y": 680, "width": 120, "height": 25},
      "answer_page": 1
    }
  ],
  "document_text": "INVOICE\nInvoice Number: INV-2024-001\nDate: 2024-01-15\nTotal Amount Due: $1,245.00\n"
}
```

```json
{
  "doc_id": "form_042",
  "doc_type": "form",
  "url": "https://docvqaataset.com/images/form_042.png",
  "questions": [
    {
      "question_id": "q087",
      "question": "What is the applicant's date of birth?",
      "answer": "March 15, 1985",
      "answer_bbox": {"x": 200, "y": 320, "width": 150, "height": 20},
      "answer_page": 1
    }
  ],
  "document_text": "APPLICATION FORM\nName: John Smith\nDate of Birth: March 15, 1985\nAddress: 123 Main Street"
}
```

```json
{
  "doc_id": "report_118",
  "doc_type": "financial_report",
  "url": "https://docvqa.dataset.com/images/report_118.png",
  "questions": [
    {
      "question_id": "q203",
      "question": "What was the revenue for Q3 2023?",
      "answer": "$4.2 million",
      "answer_bbox": {"x": 300, "y": 450, "width": 100, "height": 22},
      "answer_page": 2
    }
  ],
  "document_text": "QUARTERLY REPORT\nQ3 2023 Revenue: $4.2 million\nQ3 2023 Net Profit: $890,000"
}
```
