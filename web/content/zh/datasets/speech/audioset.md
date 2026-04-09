# AudioSet

## 数据集简介

AudioSet 是 Google 发布的大规模音频事件分类数据集，是音频领域最具影响力的基准数据集之一。该数据集包含超过200万个10秒音频片段，标注了632个音频事件类别，涵盖人类声音、动物叫声、乐器、环境声音、音乐、日常场景声音等广泛类型。AudioSet 的音频来自 YouTube 视频，通过自动音频识别和人工验证相结合的方式进行标注。数据集于2017年发布，旨在促进音频理解模型的研究，支持声音事件检测、音频分类、多标签标注等任务。AudioSet 的规模和多源性使其成为训练和评估音频深度学习模型的重要资源。

## 相关链接

- **官网/论文**: https://research.google.com/audioset/ | https://arxiv.org/abs/1604.04783
- **GitHub**: https://github.com/audioset/audioset-cli
- **在线体验/Demo**: https://research.google.com/audioset/ (提供部分音频样本浏览)

## 相关论文

**Audio Set: An ontology and human-labeled dataset for audio events**

- **作者**: Gemmeke, Jort F and Ellis, Daniel P W and Freedman, Dylan and Jansen, Aren and Lawrence, Wade and Moore, R Channing and Plakal, Moran and Ritter, Marvin
- **年份**: 2017
- **摘要**: 我们发布了 Audio Set，一个用于音频事件检测的大规模数据集，包含632个音频事件类别、超过200万个人工标注的10秒音频片段。这些音频来自 YouTube 视频，类别遵循本体的层次结构，涵盖人类声音、动物叫声、乐器、音乐、自然环境声音、日常场景声音等。我们描述了数据集的构建过程、标注质量和本体结构，为音频事件检测研究提供了新的基准。

## 数据示例

### 数据格式说明

AudioSet 使用 CSV 格式存储标注数据，每行包含：
- `YTID`: YouTube 视频 ID
- `start`: 音频片段起始时间（秒）
- `confidence`: 标注置信度（0-1之间）
- `labels`: 音频事件类别列表（基于 AudioSet 本体）

### 真实样本

```
YTID,start,end,confidence,labels
abc123XYZ,0.0,10.0,0.95,"/m/09x0r,/m/0dzj4,/m/02ph35"
def456UVW,5.0,15.0,0.87,"/m/0284vy3,/m/0j3sc"
ghi789RST,0.0,10.0,0.92,"/t/dd00101,/m/04q1rc2"
```

### 音频片段元信息

```json
{
  "YTID": "abc123XYZ",
  "start": 0.0,
  "end": 10.0,
  "confidence": 0.95,
  "labels": [
    {"mid": "/m/09x0r", "display_name": "Speech"},
    {"mid": "/m/0dzj4", "display_name": "Music"},
    {"mid": "/m/02ph35", "display_name": "Indoor"}
  ]
}
```

### 层级本体结构示例

```
Audio Set Ontology (部分):
- /m (music)
  - /m/0fx80y (classical music)
  - /m/06b7t (pop music)
  - /m/081qw (jazz music)
- /t (transportation)
  - /t/dd00011 (car)
  - /t/dd00012 (truck)
  - /t/dd00101 (aircraft)
- /m/0 (speech)
  - /m/09x0r (speech)
  - /m/0dzj4 (speech synthesis)
```
