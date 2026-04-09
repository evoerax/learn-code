# PubMedQA

## 数据集简介

PubMedQA是由斯坦福大学于2019年发布的医学领域问答数据集，基于PubMed文献数据库中的科学研究成果。该数据集包含1000余道需要阅读医学文献后回答的判断题（yes/no/maybe），是评估LLM在专业医学领域阅读理解和证据综合能力的重要基准。PubMedQA要求模型不仅理解文献内容，还需根据文献证据作出合理判断，是医学AI领域的核心评测数据集。

## 相关链接

- **官网/论文**: https://pubmedqa.github.io/
- **GitHub**: https://github.com/pubmedqa/pubmedqa
- **在线体验/Demo**: https://huggingface.co/datasets/pubmed_qa

## 相关论文

**论文标题**: PubMedQA: A Dataset for Biomedical Research Question Answering
**作者**: Jin, Qiao et al. (Stanford University)
**年份**: 2019
**摘要**: PubMedQA是一个用于生物医学研究问答的数据集，包含1000余道基于PubMed文献的是非判断问题。数据集要求模型阅读医学文献摘要后，判断提出的研究问题是否能被文献内容所回答（yes/no/maybe），旨在评估模型在专业医学领域的阅读理解和证据综合能力，是医学AI研究的重要评测基准。

## 数据示例

**数据格式说明**: 每条数据包含context（文献摘要）、question（研究问题）、answer（yes/no/maybe）三个字段。

**样例1**:
```json
{
  "id": "PDRC_1",
  "context": "OBJECTIVE: To investigate the efficacy of yoga-based programs on stress and quality of life in patients with chronic non-specific lower back pain.\nMETHODS: 80 patients were randomized to yoga or education control group. RESULTS: Yoga group showed significant improvement in stress scores (p<0.001) and quality of life measures (p<0.01).\nCONCLUSION: Yoga-based programs are effective for improving stress and quality of life in chronic LBP patients.",
  "question": "Is yoga effective for stress reduction in chronic lower back pain patients?",
  "answer": "yes"
}
```

**样例2**:
```json
{
  "id": "PDRC_50",
  "context": "BACKGROUND: The role of vitamin D supplementation in preventing respiratory infections is controversial.\nSTUDY DESIGN: Meta-analysis of 25 randomized controlled trials.\nFINDINGS: 15 trials showed no significant effect, 10 trials showed modest benefit.\nCONCLUSION: Evidence for vitamin D supplementation preventing respiratory infections is insufficient.",
  "question": "Does vitamin D supplementation prevent respiratory infections?",
  "answer": "maybe"
}
```

**样例3**:
```json
{
  "id": "PDRC_100",
  "context": "AIM: To examine the association between coffee consumption and liver cancer risk.\nMETHODS: Cohort study of 500,000 participants over 10 years.\nRESULTS: No significant association found (RR=0.95, 95%CI: 0.82-1.10).\nCONCLUSION: Coffee consumption is not associated with liver cancer risk.",
  "question": "Does coffee consumption increase liver cancer risk?",
  "answer": "no"
}
```
