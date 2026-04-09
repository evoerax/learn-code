# OK-VQA

## 数据集简介

OK-VQA（Outside Knowledge Visual Question Answering）是由纽约大学和 Facebook AI 研究院发布的视觉问答数据集，是 VQAv2 的进阶版本，专门评估模型需要外部知识才能回答的视觉问题。该数据集包含 14,055 个需要图像以外知识的问题，涵盖食物、艺术、地理、科学等 20 多个知识领域。OK-VQA 要求模型不仅理解图像内容，还需要结合常识或特定领域知识（如物体成分、品牌、地理位置等）进行推理回答，是评估视觉语言模型知识推理能力的重要基准。

## 相关链接

- **官网/论文**: https://okvqa.allenai.org/
- **GitHub**: https://github.com/allenai/okvqa
- **在线体验/Demo**: https://huggingface.co/datasets/OK-VQA

## 相关论文

**OK-VQA: A Visual Question Answering Benchmark Requiring External Knowledge**
- **作者**: Kenneth Marino, Mohammad Rastegari, Ali Farhadi, Roozbeh Mottaghi (NYU / Facebook AI Research)
- **年份**: 2019
- **摘要**: OK-VQA 数据集包含 14,055 个视觉问题，这些问题无法仅从图像内容回答，而需要结合外部世界知识。例如询问"这个水果是什么品种？"或"这个建筑是什么风格？"等问题需要模型具备常识推理或领域知识。数据集涵盖食物、艺术、地理、科学、技术等 20 多个知识领域，问题的平均答案长度为 1-2 个词。该基准揭示了当前 VLM 在知识推理方面的不足，为多模态大模型的知识获取研究提供了重要评估标准。

## 数据示例

**数据格式说明**
OK-VQA 数据集采用 JSON 格式存储：
1. **问题文件**：包含问题ID、图像ID、问题文本、答案类型
2. **答案文件**：每个问题对应 10 个独立标注者的答案
3. **图像**：使用 COCO 图像作为背景图像

**真实样本（部分）**

| 问题ID | 图像ID | 问题 | 答案 | 知识领域 |
|--------|--------|------|------|----------|
| 1 | COCO_val_00001 | 这个水果是什么品种？ | 芒果 | 食物 |
| 2 | COCO_val_00002 | 这个建筑是什么风格的？ | 哥特式 | 艺术 |
| 3 | COCO_val_00003 | 这个品牌总部在哪？ | 加州 | 地理 |
| 4 | COCO_val_00004 | 这个电器的功耗是多少？ | 1000瓦 | 科技 |
| 5 | COCO_val_00005 | 这是什么运动？ | 足球 | 体育 |

**知识领域分布**

| 领域 | 问题数量占比 | 示例问题 |
|------|-------------|----------|
| 食物 | ~15% | 这个食材可以做什么菜？ |
| 艺术 | ~10% | 这个艺术品的创作年代？ |
| 地理 | ~12% | 这是哪个国家的地标？ |
| 科学 | ~10% | 这个现象的原理是什么？ |
| 体育 | ~8% | 这是什么运动项目？ |
| 其他 | ~45% | 品牌、天气、颜色等 |

**文件组织结构**
```
OK-VQA/
├── questions/
│   ├── OpenEnded_mscoco_train2014_questions.json
│   ├── OpenEnded_mscoco_val2014_questions.json
│   └── OpenEnded_mscoco_test2015_questions.json
├── answers/
│   ├── mscoco_train2014_annotations.json
│   └── mscoco_val2014_annotations.json
└── images/
    └── ...
```
