# LibriSpeech

## 数据集简介

LibriSpeech 是大规模英语语音识别数据集，来源于 LibriVox 有声书项目。该数据集由 1000 小时以上的英语朗读音频组成，文本来自公共领域书籍，覆盖多种说话风格和口音。数据集由 Ivan Medugno 创建，发布于 2015 年。LibriSpeech 提供了清晰的朗读语音，适合声学模型训练和评估，是语音识别领域最广泛使用的基准数据集之一，推动了端到端语音识别技术的发展。

## 相关链接

- 官网/论文: https://www.openslr.org/12
- 论文: "LibriSpeech: an ASR corpus based on public domain audio books", Panayotov et al., 2015
- GitHub: https://github.com/PyTorchLightning/Deep-Learning-with-PyTorch
- 在线体验: https://huggingface.co/datasets/librispeech_asr

## 相关论文

**标题:** LibriSpeech: an ASR corpus based on public domain audio books

**作者:** Vassil Panayotov, Guoguo Chen, Daniel Povey, Steven Khudanpur

**年份:** 2015

**摘要:** LibriSpeech 是一个大规模英语语音识别语料库，包含约 1000 小时的双声道有声书录音，文本来自 LibriVox 项目。该语料库提供了说话人信息、章节边界和分割时间戳等丰富标注。我们报告了基于深度神经网络的声学模型的初步实验结果，展示了数据集对语音识别研究的价值。

## 数据示例

### 数据格式说明

LibriSpeech 数据集采用以下目录结构组织：
```
LibriSpeech/
├── train-clean-100/
│   ├── 19/
│   │   ├── 198/
│   │   │   ├── 19-198-0000.flac
│   │   │   ├── 19-198-0000.trans.txt
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── dev-clean/  (验证集)
└── test-clean/  (测试集)
```

FLAC 音频文件，trans.txt 包含每条音频的转录文本，格式为：`segment_id transcription`

### 真实样本

1. **样本1**
   - 音频ID: 19-198-0000
   - 文本转录: "he strove both to enlarge his vocabulary and to secure a more definite terminology for philosophical purposes"
   - 时长: 约 8 秒

2. **样本2**
   - 音频ID: 84-121123-0000
   - 文本转录: "and it is not denied that we find in other quarters the same want of moral equilibrium"
   - 时长: 约 6 秒

3. **样本3**
   - 音频ID: 121-126857-0000
   - 文本转录: "the judge seemed to think that some point had been established in the last speech of the attorney for the prisoner"
   - 时长: 约 9 秒
