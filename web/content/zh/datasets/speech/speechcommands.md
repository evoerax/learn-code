# SpeechCommands

## 数据集简介

SpeechCommands 是 Google 发布的语音命令识别数据集，专门用于关键词检测（Keyword Spotting）任务。数据集包含 35 个常用英语语音命令词，如 "yes", "no", "up", "down", "left", "right", "stop", "go" 等，以及静音和未知类别。数据集采集自约 2,600 名说话人，总计约 105,000 条 1 秒长度的音频样本。该数据集是语音控制助手和边缘设备语音识别研究的重要基准，推动了轻量级语音模型的发展。SpeechCommands 数据集采用 16kHz 采样率、单声道、16 位 PCM 编码格式。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1804.03209
- **GitHub**: https://github.com/Google-research/speech_commands
- **数据集下载**: https://www.kaggle.com/datasets/jimjar/SpeechCommands

## 相关论文

**SpeechCommands: A Dataset for Limited-Vocabulary Speech Recognition**
- **作者**: Pete Warden
- **年份**: 2018
- **摘要**: 本文介绍了 SpeechCommands 数据集，专门用于评估有限词汇量的语音识别模型。数据集包含来自约 2,600 名说话人的 105,000 条音频样本，涵盖 35 个命令词、 silence、unknown 共 37 个类别。我们提供了数据集的详细统计信息、基准测试结果，以及基于卷积神经网络的关键词检测模型基线。该数据集的设计目标是支持在资源受限设备上运行的语音识别系统研究，特别是在边缘计算场景下的应用。（约 100 字）

## 数据示例

**音频格式说明**
- 采样率: 16kHz
- 编码: 16 位 PCM，单声道
- 时长: 约 1 秒
- 文件格式: WAV

**样本示例**

```json
{
  "audio": "speech_commands_v0.02/yes/0a7c2a8d_nohash_0.wav",
  "label": "yes",
  "speaker_id": "0a7c2a8d",
  "hash": "0",
  "duration": 0.98
}
```

```json
{
  "audio": "speech_commands_v0.02/up/0a9f9c1e_nohash_1.wav",
  "label": "up",
  "speaker_id": "0a9f9c1e",
  "hash": "1",
  "duration": 1.01
}
```

```json
{
  "audio": "speech_commands_v0.02/stop/0aa3e4ac_nohash_2.wav",
  "label": "stop",
  "speaker_id": "0aa3e4ac",
  "hash": "2",
  "duration": 0.95
}
```

**数据划分**
- 训练集: 约 84,843 条样本
- 验证集: 约 9,981 条样本
- 测试集: 约 11,005 条样本

**命令词列表**
yes, no, up, down, left, right, on, off, stop, go, zero, one, two, three, four, five, six, seven, eight, nine, bed, bird, cat, dog, happy, house, marvin, nine, tree, wow
