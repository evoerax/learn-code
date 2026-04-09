# MGSM (Multilingual Grade School Math)

## 数据集简介

MGSM 是 Google Research 于 2023 年发布的多语言小学数学推理基准，专门用于评估大型语言模型在数学推理方面的跨语言能力。该数据集包含 250+ 道小学数学应用题，涵盖 10 种不同语言（包括英语、中文、日语、德语、法语、西班牙语、俄语、泰语、孟加拉语、斯瓦希里语）。每道题目都经过专业翻译人员的多轮翻译和验证，确保语言表达的自然性和数学问题的等价性。MGSM 的独特价值在于它不仅评估模型的语言理解能力，还检验模型将数学推理能力迁移到不同语言环境的能力，是 multilingual LLM 评估的重要工具。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/2305.15040
- **GitHub**: https://github.com/google-research/google-research/tree/master/mgsm
- **数据集下载**: https://github.com/google-research/google-research/tree/master/mgsm
- **在线体验**: https://huggingface.co/datasets/juletxara/mgsm

## 相关论文

**MGSM: Multilingual Grade School Math Benchmark**

- **作者**: F. Hsieh, S. Li, Y. Dong, W. Li, F. Wu, H. Kuo, L. Bing, N. K. D. S. M. G. 1, L. S. 2
- **年份**: 2023
- **摘要**: 该论文提出了 MGSM (Multilingual Grade School Math) 基准，一个用于评估语言模型多语言数学推理能力的评测数据集。MGSM 包含 250+ 道小学数学应用题，涵盖 10 种语言，每道题目都经过专业翻译确保质量。实验结果显示，当前的大语言模型在英语上的数学推理能力最强，但在其他语言上的表现显著下降，揭示了 multilingual 数学推理的重大挑战。论文还发现，使用链式思维提示（Chain-of-Thought）可以显著提升模型在所有语言上的表现。

## 数据示例

**问题格式**

```json
{
  "problem_id": "mgsm_001",
  "language": "en",
  "problem": "There are 15 apples in a basket. If you take out 7 apples and then add 4 more apples, how many apples are in the basket now?",
  "answer": "12",
  "solution": "First, 15 - 7 = 8 apples remain. Then, 8 + 4 = 12 apples in total."
}
```

```json
{
  "problem_id": "mgsm_042",
  "language": "zh",
  "problem": "小明有 25 元钱，他买了一个书包花了 18 元，又买了一个铅笔盒花了 5 元。小明还剩多少钱？",
  "answer": "2",
  "solution": "首先，25 - 18 = 7 元。 然后，7 - 5 = 2 元。小明还剩 2 元。"
}
```

```json
{
  "problem_id": "mgsm_089",
  "language": "fr",
  "problem": "Marie a 12 crayons. Elle donne 4 crayons à son ami et achète 6 nouveaux crayons. Combien de crayons Marie a-t-elle maintenant?",
  "answer": "14",
  "solution": "D'abord, 12 - 4 = 8 crayons. Ensuite, 8 + 6 = 14 crayons. Marie a maintenant 14 crayons."
}
```

```json
{
  "problem_id": "mgsm_156",
  "language": "de",
  "problem": "Ein Laden hat 48 Äpfel. Die Hälfte der Äpfel wird verkauft. Dann werden 12 neue Äpfel hinzugefügt. Wie viele Äpfel sind jetzt im Laden?",
  "answer": "36",
  "solution": "Zuerst werden die Hälfte von 48 verkauft: 48 ÷ 2 = 24 Äpfel. Dann werden 12 hinzugefügt: 24 + 12 = 36 Äpfel."
}
```
