# Common Voice

## 数据集简介

Common Voice 是 Mozilla 维护的大规模多语言语音语料库，旨在为语音识别技术提供开放、免费的训练数据。该数据集的特点是所有音频均来自志愿者捐赠，通过众包方式收集并经过严格的质量筛选流程。截至目前，Common Voice 已涵盖 100+ 种语言，是目前最大的开源多语言语音数据集之一。数据集包含原始音频文件、转录文本、人口统计学元数据（性别、年龄、accent 等），支持语音识别、说话人识别、语言识别等多种语音任务的研究。

## 相关链接

- **官网/论文**: https://commonvoice.mozilla.org/
- **GitHub**: https://github.com/mozilla/common-voice
- **数据集下载**: https://commonvoice.mozilla.org/datasets
- **在线体验**: https://commonvoice.mozilla.org/speak

## 相关论文

**Common Voice: A Massively-Multilingual Speech Corpus**

- **作者**: R. Ardila, M. Branson, K. Davis, M. Henretty, M. Kohler, J. Meyer, R. Morais, L. Saunders, F. M. Tyers, G. Weber
- **年份**: 2020
- **摘要**: Common Voice 是一个大规模多语言语音语料库，由 Mozilla 于 2020 年发布。该语料库包含超过 100 种语言的 30,000+ 小时语音数据，所有数据来自全球志愿者的众包捐赠。论文详细描述了数据收集流程、质量控制机制和元数据结构。该数据集的一个重要特点是其开放性——所有数据采用 CC0 公共领域贡献声明，允许无限制地用于研究和商业应用。

## 数据示例

**音频文件格式**

- 音频格式：MP3 或 OGG（Vorbis 编码）
- 采样率：16kHz
- 单句时长：通常 1-15 秒

**样本数据**

```json
{
  "client_id": "nichewise-flued-roping",
  "path": "common_voice/zh-TW/....mp3",
  "sentence": "机器学习是人工智能的一个分支",
  "upvotes": 3,
  "downvotes": 0,
  "age": "twenties",
  "gender": "male",
  "accent": "taiwanese"
}
```

```json
{
  "client_id": "leapwise-parks-lamped",
  "path": "common_voice/en/....mp3",
  "sentence": "The quick brown fox jumps over the lazy dog",
  "upvotes": 5,
  "downvotes": 0,
  "age": "thirties",
  "gender": "female",
  "accent": "american"
}
```

```json
{
  "client_id": "cappedwise-harmed-leapt",
  "path": "common_voice/de/....ogg",
  "sentence": "Künstliche Intelligenz verändert die Welt",
  "upvotes": 2,
  "downvotes": 0,
  "age": "forties",
  "gender": "male",
  "accent": "german"
}
```
