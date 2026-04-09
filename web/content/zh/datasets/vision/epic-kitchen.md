# EpicKitchen

## 数据集简介

EpicKitchen 是由剑桥大学发布的以自我视角（egocentric）视频动作识别数据集，是具身人工智能研究的重要基准。该数据集包含 432 名参与者在厨房环境中录制的第一视角视频，涵盖 125 种动作类别（如拿取、放置、切碎、倒出等）。视频总时长约 55 小时，包含 396,152 个动作片段。EpicKitchen 的独特之处在于其自我视角特性，要求模型理解第一人称视角下的动作意图和物体交互，对视频理解模型提出了更高的挑战。

## 相关链接

- **官网/论文**: https://epic-kitchens.github.io/
- **GitHub**: https://github.com/epic-kitchens/EPIC-KITCHENS
- **在线体验/Demo**: https://huggingface.co/datasets/EPIC-KITCHENS

## 相关论文

**EPIC-KITCHENS: A Large-Scale in-the-Wild Dataset for Understanding Long-structured Everyday Manipulation Actions**
- **作者**: Dima Damen, Hazel Doughty, Giovanni Maria Farinella, Antonino Furnari, Jian Ma, et al. (University of Bristol)
- **年份**: 2018
- **摘要**: EpicKitchen 数据集记录了 432 名参与者在各自家中厨房进行日常烹饪活动时的第一视角视频。数据集包含 125 种动作类别、 395 段视频和 206,226 个动作片段。与传统动作识别数据集不同，该数据集强调第一人称视角下的手部动作和物体交互，要求模型理解动作的意图和因果关系，是具身人工智能研究的重要基准。

## 数据示例

**数据格式说明**
EpicKitchen 提供多种数据格式：
1. **RGB 视频**：原始视频文件，约 55 小时
2. **光流文件**：预计算的光流图像序列
3. **物体边界框**：叙述中提到的物体位置标注
4. **动作边界**：每个动作片段的起始和结束时间戳

**真实样本（部分动作类别）**

| 片段ID | 动作类别 | 动词 | 名词 | 时长(秒) |
|--------|----------|------|------|----------|
| P01_101 | take | take | milk | 2.3 |
| P01_102 | open | open | fridge | 1.8 |
| P01_103 | pour | pour | milk | 3.1 |
| P01_104 | cut | cut | onion | 5.2 |
| P01_105 | put | put | cup | 1.5 |

**动词类别分布（部分）**

| 动词类别 | 示例动作 |
|----------|----------|
| 拿取类 | take, pick_up, grab |
| 放置类 | put, place, leave |
| 操作类 | cut, chop, stir |
| 打开/关闭类 | open, close, turn_on |
| 倒出类 | pour, fill, empty |

**文件组织结构**
```
EPIC-KITCHENS/
├── videos/
│   ├── P01/
│   │   ├── P01_101.mp4
│   │   └── ...
│   └── ...
├── annotations/
│   ├── EPIC100_train.csv
│   ├── EPIC100_validation.csv
│   └── ...
└── object_detections/
    └── ...
```
