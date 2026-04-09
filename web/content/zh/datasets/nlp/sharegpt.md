# ShareGPT (ShareGPT Conversation Dataset)

## 数据集简介

ShareGPT 是一个收集自 ChatGPT/ GPT-4 用户真实对话的大规模开源数据集，由 anonymous-45472 等研究者于 2023 年初在 GitHub 上发布。该数据集包含超过 90,000 条用户与 AI 之间的多轮对话，涵盖编程助手、创意写作、数学求解、知识问答等广泛的对话场景。ShareGPT 的独特之处在于对话来源于真实用户使用场景，而非人工构造或模板生成，因此语言风格自然、话题多样，是指令微调（instruction tuning）和对话模型训练的重要数据来源。

## 相关链接

- GitHub：https://github.com/nicklcd/ShareGPT
- Hugging Face：https://huggingface.co/datasets/ehartford/ShareGPT_Conv
- 部分数据导出：https://huggingface.co/datasets/RyokoAI/ShareGPT66K

## 相关论文

注：ShareGPT 为社区开源数据集，无正式学术论文。相关技术报告和讨论可见于 GitHub README 和 Hugging Face 数据卡文档。

**数据集构建方法**
- 作者：anonymous-45472 (GitHub anonymous)
- 年份：2023
- 摘要：ShareGPT 通过浏览器扩展程序收集 ChatGPT/ GPT-4 用户自愿分享的对话记录，经清洗后去除个人隐私信息形成开源数据集。数据集保留了原始对话的层次结构，支持多轮上下文理解。由于来源于真实使用场景，数据的多样性和自然度显著高于人工构造数据集，被广泛用于训练 Vicuna、Alpaca 等开源对话模型。

## 数据示例

### 数据格式说明

ShareGPT 对话采用列表格式存储，每条对话包含：
- `conversations`：消息列表，每条消息包含 role（human/assistant/system/gpt）和 content（消息内容）
- `total_pages`、`total_conversations`、`total_messages`：统计信息
- 对话结构支持多轮上下文，role 包括：
  - `human`：用户消息
  - `gpt`：ChatGPT/GPT-4 回复
  - `system`：系统指令（可选）

### 真实样本示例

**样本 1 - 编程助手对话**
```json
{
  "conversations": [
    {
      "role": "human",
      "content": "How do I sort a dictionary by value in Python?"
    },
    {
      "role": "gpt",
      "content": "You can use the `sorted()` function with a lambda expression to sort a dictionary by its values:\n\n```python\nmy_dict = {'a': 3, 'b': 1, 'c': 2}\nsorted_dict = dict(sorted(my_dict.items(), key=lambda item: item[1]))\nprint(sorted_dict)\n# Output: {'b': 1, 'c': 2, 'a': 3}\n```\n\nAlternatively, if you want to sort in descending order:\n```python\nsorted_dict = dict(sorted(my_dict.items(), key=lambda item: item[1], reverse=True))\n```"
    }
  ]
}
```

**样本 2 - 创意写作对话**
```json
{
  "conversations": [
    {
      "role": "human",
      "content": "Write a haiku about artificial intelligence"
    },
    {
      "role": "gpt",
      "content": "Here's a haiku:\n\n*Circuits think in code,*\n*Intelligence awakens—*\n*A flower blooms in silicon.*"
    }
  ]
}
```

**样本 3 - 多轮数学求解**
```json
{
  "conversations": [
    {
      "role": "human",
      "content": "Solve for x: 2x + 5 = 13"
    },
    {
      "role": "gpt",
      "content": "To solve for x:\n\n2x + 5 = 13\n\nSubtract 5 from both sides:\n2x = 8\n\nDivide both sides by 2:\nx = 4"
    },
    {
      "role": "human",
      "content": "Can you verify this solution?"
    },
    {
      "role": "gpt",
      "content": "Let me verify by substituting x = 4 back into the original equation:\n\n2(4) + 5 = 8 + 5 = 13 ✓\n\nThe solution x = 4 is correct!"
    }
  ]
}
```

### 对话主题分布

| 类别 | 示例 | 占比 |
|------|------|------|
| 编程与技术 | 代码生成、调试、技术解释 | ~30% |
| 知识问答 | 科学、历史、文化问题 | ~25% |
| 创意写作 | 故事、诗歌、剧本 | ~15% |
| 数学与逻辑 | 问题求解、证明 | ~10% |
| 教育辅导 | 学科讲解、学习建议 | ~10% |
| 其他 | 日常对话、建议等 | ~10% |
