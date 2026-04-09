# VoxCeleb

## 数据集简介

VoxCeleb 是一个大规模说话人验证数据集，由牛津大学视觉几何组（VGG）于 2017 年发布，随后在 2019 年扩展为 VoxCeleb2。该数据集包含 1,251 位名人的约 153,000 段语音片段，这些语音来自 YouTube 视频，涵盖了访谈、新闻发布会、红毯活动等多种场景。VoxCeleb 的设计目的是评估说话人验证（speaker verification）——即判断两段语音是否来自同一说话人，而非说话人识别（speaker identification）——即判断语音属于哪位特定说话人。该数据集因其大规模、多样性和真实世界特性，成为说话人验证领域最具影响力的基准数据集，被广泛用于评估深度说话人嵌入（如 TDNN、ECAPA-TDNN）和说话人识别系统。

## 相关链接

- **官网/论文**: https://www.robots.ox.ac.uk/~vgg/data/voxceleb/
- **GitHub**: https://github.com/a-nagrani/VoxCelebVerifier
- **数据集下载**: https://www.kaggle.com/datasets/alfravoicer2/voxceleb
- **原论文**: "VoxCeleb: A Large-Scale Speaker Identification Dataset" (INTERSPEECH 2017)

## 相关论文

**VoxCeleb: A Large-Scale Speaker Identification Dataset**

- **作者**: Arsha Nagrani, Joon Son Chung, Andrew Zisserman
- **年份**: 2017
- **摘要**: 本文提出了 VoxCeleb 数据集，一个用于说话人识别的大规模音视频数据集。该数据集从 YouTube 视频中自动收集，包含 1,251 位名人的约 153,000 段语音片段。我们详细描述了数据集的构建流程，包括人脸检测、说话人同步和身份验证等步骤。VoxCeleb 的特点在于其真实世界特性——语音来自多样化的声学环境，包含背景噪声、 reverb 和多说话人干扰等实际挑战。实验表明，在该数据集上训练的深度模型能够学习到具有判别性的说话人表征，显著提升了实际应用中的说话人识别准确率。

## 数据示例

**数据格式说明**: VoxCeleb 数据集包含音频文件（16kHz WAV 格式）和对应的元数据文件。音频文件按说话人 ID 组织目录结构，元数据包含视频 ID、起始时间、YouTube URL 等信息。

**数据目录结构**:
```bash
voxceleb1/
├── id10001/
│   ├── youtube_id_0001.wav
│   ├── youtube_id_0002.wav
│   └── ...
├── id10002/
│   └── ...
└──vox1_meta.csv
```

**元数据格式** (vox1_meta.csv):
```csv
ID,VideoID,Start,End,SpeakerID,Gender
id00012,3b-MahN__M,15,17,m0000,female
id00012,3b-MahN__M,20,22,m0000,female
```

**真实样本示例**:

```bash
# 音频样本信息
说话人ID: id10281
视频ID: 5e_s9vV2k3s
片段时长: 3.2 秒
采样率: 16000 Hz
声道: 单声道
描述: 名人在新闻采访中发言，背景有轻微混响
```

```bash
# 验证样本对
样本对1:
  - 语音A: id10281/5e_s9vV2k3s.wav (3.2秒)
  - 语音B: id10281/_8kFjuEKoqo.wav (2.8秒)
  - 标签: same_speaker (是同一说话人)

样本对2:
  - 语音A: id10281/5e_s9vV2k3s.wav (3.2秒)
  - 语音B: id10734/vI2oT6Y3kOo.wav (3.5秒)
  - 标签: different_speaker (不同说话人)
```

**数据集统计**:
```
VoxCeleb1: 1,251 位说话人, 153,516 段语音
VoxCeleb2: 6,112 位说话人, 1,128,246 段语音
音频格式: 16kHz, 16-bit, WAV
片段时长: 1-20 秒
场景多样性: 访谈、新闻、红毯、电视节目等
```

---

*文档版本: 1.0 | 最后更新: 2026年4月*
