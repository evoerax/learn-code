# Hateful Memes 数据集

## 数据集简介

Hateful Memes是由Facebook AI Research（Meta）于2020年发布的多模态 meme 仇恨言论检测数据集，旨在研究图像和文本联合理解在仇恨言论检测中的作用。该数据集包含10,000个meme图像-文本配对，其中约5,000个被标注为仇恨内容（hateful），5,000个为无害内容（not_hateful）。与传统的纯文本仇恨言论检测不同，Hateful Memes要求模型同时理解图像中的视觉内容和文本中的语义信息才能做出准确判断。数据集设计了一个独特的"仅文本"（text-only）对照集，用于分析视觉信息对判断的独立影响。该数据集揭示了多模态模型在处理讽刺、反讽和微妙仇恨表达方面的重大挑战。

## 相关链接

- **官网/论文**: https://facebookresearch.github.io/ChangPTLU/
- **GitHub**: https://github.com/facebookresearch/mmf
- **在线体验/Demo**: https://huggingface.co/datasets/ChangPTLU/hateful_memes

## 相关论文

**Hateful Memes: Image-Text Multimodal Content Moderation**  
Kiela D, Firooz H, Mohan M, et al.  
NeurIPS 2020 (Dataset and Benchmarks Track)  

本文介绍了Hateful Memes数据集的构建过程和基线实验。研究者发现，尽管人类在该任务上能达到约84%的准确率，但包括ViLBERT、LXMERT在内的多模态模型表现却不如预期，仅略高于随机猜测水平。论文指出，meme中的微妙表达（如讽刺、反讽）、图像与文本的弱关联性以及视觉伪影（如meme图像中的噪声）是当前模型面临的主要挑战。这一发现推动了多模态仇恨言论检测研究的深入发展。

## 数据示例

**数据格式说明**

Hateful Memes使用JSON格式存储，包含图像路径、文本和标签：
```json
{
  "data": [
    {
      "id": "12345",
      "img": "hateful_memes/img/12345.jpg",
      "text": "Why the long face?",
      "label": 1,
      "harmful": true
    }
  ]
}
```

标签说明：
- `label`: 0 = not_hateful, 1 = hateful
- `harmful`: true = 有害内容, false = 无害内容

**真实样本**

1. 图像描述: 包含文字"YOU ARE NOT ON THE LIST"的派对邀请函图像  
   文本: "YOU ARE NOT ON THE LIST"  
   标签: hateful (1)  
   含义: 暗示某些群体（如特定种族或宗教）被排除在外

2. 图像描述: 包含文字"I don't always shoot zombies but when I do, I aim for the head"  
   文本: "I don't always shoot zombies but when I do, I aim for the head"  
   标签: not_hateful (0)  
   含义: 引用《科恩兄弟》电影台词，属于无害内容

3. 图像描述: 包含文字"10 THINGS I HATE ABOUT YOU"  
   文本: "10 THINGS I HATE ABOUT YOU"  
   标签: hateful (1)  
   含义: 利用电影标题框架传播仇恨言论
