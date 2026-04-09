# UltraChat

## 数据集简介

UltraChat 是一个大规模多轮对话指令数据集，旨在提升大型语言模型的对话能力和指令遵循能力。该数据集由上海人工智能实验室（Shanghai AI Lab）于 2023 年发布，包含超过 150 万轮多轮对话，涵盖广泛的主题和任务类型。UltraChat 的独特之处在于其对话结构设计——每轮对话都包含用户的初始查询、模型的多轮响应以及后续的追问，形成自然的对话流程。数据集通过高质量的人工标注和模型生成相结合的方式构建，确保了数据的多样性和真实性。UltraChat 已被用于训练多种开源对话模型，是推进对话 AI 发展的重要资源之一。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/2305.14233
- **GitHub**: https://github.com/openlm/ultrachat
- **数据集下载**: https://huggingface.co/datasets/stingning/ultrachat

## 相关论文

**论文标题**: UltraChat: Large-scale, Diverse, High-quality Multi-round Multi-modal Data for Advanced LLM

**作者**: Ning Ding, Yulin Chen, Bokai Xu, Yujie Qian, Haoyu Wang, Yukun Ma, Xiangyang Li, Bowen Zhou, Zhiyuan Liu, Maosong Sun

**年份**: 2023

**摘要**: UltraChat 是一个大规模多轮多模态对话数据集，包含超过 150 万轮对话。我们通过设计多轮对话的框架结构，系统性地生成涵盖广泛主题的对话内容。数据集包含丰富的任务类型，包括开放式对话、问答、创意写作、代码生成等。实验表明，使用 UltraChat 训练的模型在多个对话基准上取得了显著的性能提升。

## 数据示例

### 数据格式说明

UltraChat 使用 JSON Lines 格式存储，每行包含一个完整的对话线程：

```json
{
  "id": "ultra_000001",
  "conversations": [
    {"from": "human", "value": "用户输入内容"},
    {"from": "gpt", "value": "模型回复内容"},
    {"from": "human", "value": "追问内容"},
    {"from": "gpt", "value": "模型继续回复"}
  ]
}
```

### 真实样本

**样本 1 - 问答对话**:
```json
{
  "id": "ultra_001023",
  "conversations": [
    {"from": "human", "value": "什么是大语言模型的工作原理？"},
    {"from": "gpt", "value": "大语言模型是基于 Transformer 架构的深度神经网络，通过在大规模文本数据上进行预训练来学习语言规律。模型使用自注意力机制来处理输入文本的上下文关系，预测下一个token来生成连贯的回复。"},
    {"from": "human", "value": "那预训练和微调有什么区别？"},
    {"from": "gpt", "value": "预训练是在大规模通用数据上训练模型学习基础语言能力，而微调是在特定任务或领域的数据上进行进一步训练，使模型适应特定应用场景。预训练通常使用自监督学习，微调则使用监督学习或强化学习技术。"}
  ]
}
```

**样本 2 - 创意写作**:
```json
{
  "id": "ultra_005891",
  "conversations": [
    {"from": "human", "value": "帮我写一个关于时间旅行的短篇故事开头"},
    {"from": "gpt", "value": "2045年，物理学家李明站在粒子对撞机的控制台前，心跳加速。十五年的研究，无数个不眠之夜，都将在今天得到验证。\"启动！\"他按下按钮，一道耀眼的光芒划破了实验室的黑暗。当光芒散去，他发现自己站在一条陌生的街道上，抬头是一块他从未见过的广告牌——上面显示的日期是1923年。"},
    {"from": "human", "value": "继续写下去，描写他穿越后的困惑"},
    {"from": "gpt", "value": "李明踉跄地走在鹅卵石街道上，两旁的维多利亚式建筑让他确信这不是梦。穿着复古的行人投来好奇的目光——他们穿着他只在历史照片中见过的衣服。他下意识地摸向口袋里的智能手机，却发现它成了一块无法点亮的小金属片。空气中弥漫着汽油和煤炭的味道，远处传来马蹄声和马车轮子的吱呀声。"}
  ]
}
```

**样本 3 - 代码生成**:
```json
{
  "id": "ultra_012456",
  "conversations": [
    {"from": "human", "value": "用Python写一个快速排序算法"},
    {"from": "gpt", "value": "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\n# 示例\nprint(quicksort([3,6,8,10,1,2,1]))\n# 输出: [1, 1, 2, 3, 6, 8, 10]"},
    {"from": "human", "value": "解释一下这个算法的时间复杂度"},
    {"from": "gpt", "value": "快速排序的平均时间复杂度是 O(n log n)，最坏情况是 O(n²)。空间复杂度是 O(log n)。当每次选择的中位数接近数组中间值时，划分最均衡，递归深度最小，性能最优。但如果每次都选择到最大或最小值，导致划分极度不均衡，递归深度退化为 n，性能下降。"}
  ]
}
```
