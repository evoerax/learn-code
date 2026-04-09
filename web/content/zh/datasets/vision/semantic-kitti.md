# Semantic KITTI

## 数据集简介

Semantic KITTI 是用于自动驾驶场景中点云语义分割的大规模基准数据集，由德国卡尔斯鲁厄理工学院（Karlsruhe Institute of Technology）和丰田研究院（Toyota Research Institute）于 2019 年联合发布。该数据集基于 KITTI 自动驾驶数据集的原始激光雷达扫描数据，为所有点云提供了逐点的语义类别标注。Semantic KITTI 包含 23 个语义类别，涵盖道路（road）、人行道（sidewalk）、建筑（building）、栏杆（fence）、植被（vegetation）、车辆（car/truck/bicycle/motorcycle）、行人（pedestrian）等。训练集包含 23,201 个扫描点云，验证集包含 2,031 个扫描点云，测试集包含 20,352 个扫描点云。该数据集采用连续帧点云序列存储格式，每帧点云包含 X、Y、Z 坐标和反射强度（intensity）共 4 个属性。Semantic KITTI 推动了 3D 点云语义分割研究的发展，成为该领域论文报道性能的标准基准。

## 相关链接

- **官网**: https://www.semantic-kitti.org/
- **GitHub**: https://github.com/AutoVision-github/SemanticKITTI
- **论文链接**: SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences (arXiv:1904.01416)
- **KITTI 原始数据集**: http://www.cvlibs.net/datasets/kitti/

## 相关论文

**论文标题**: SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences

**作者**: Jens Behley, Martin Garbade, Andres Milioto, Jan Quenzel, Jurgen身后, Christian Osmers, Bastian Leibe, Juergen Gall, Cyrill Stachniss

**年份**: 2019

**摘要**: 本文提出 SemanticKITTI，一个基于 KITTI 自动驾驶数据集的大规模点云语义分割基准。我们为 KITTI 数据集中的所有激光雷达扫描点云提供了详细的逐点语义标注，共涵盖 28 个类别（训练中使用 19 个）。与之前仅关注单帧点云的数据集不同，SemanticKITTI 提供了完整的点云序列，允许研究时序建模和场景流估计等任务。数据集包含超过 43,000 个扫描序列，标注点总数超过 10 亿。我们提供了统一的评估协议和在线排行榜，并基于多种现有方法进行了基准测试，实验结果表明点云序列的时序信息有助于提升分割性能。

## 数据示例

### 数据格式说明

Semantic KITTI 采用二进制格式存储点云数据和语义标签：

```
sequences/
├── 00/
│   ├── velodyne/           # 点云数据目录
│   │   ├── 000000.bin      # 二进制点云文件
│   │   ├── 000001.bin
│   │   └── ...             # 每帧一个bin文件
│   ├── labels/             # 语义标签目录（仅训练集）
│   │   ├── 000000.label    # 二进制标签文件
│   │   ├── 000001.label
│   │   └── ...
│   └── poses.txt           # 相机位姿
└── ...
```

每个 .bin 文件包含 N×4 的 float32 数组，每行表示一个点：[x, y, z, intensity]
每个 .label 文件包含 N×1 的 uint32 数组，每行表示一个点的语义标签

### 真实样本示例

**扫描帧**: 000000.bin

**点数量**: 122,940 点

**前 5 个点数据**:
```
[x, y, z, intensity]
[5.412, -1.892, 0.832, 0.045]
[5.361, -1.921, 0.841, 0.032]
[5.409, -1.901, 0.839, 0.051]
[5.423, -1.876, 0.847, 0.038]
[5.412, -1.865, 0.853, 0.042]
```

**标签示例** (000000.label):
```
[1, 1, 1, 40, 40, 2, ...]
```
标签 ID 对照表：
- 0: unlabeled
- 1: outliner (远离道路的点)
- 10: car
- 11: bicycle
- 13: bus
- 14: car
- 15: motorcycle
- 16: on-rails
- 17: truck
- 18: other-vehicle
- 20: person
- 30: bicycle
- 31: motorcycle
- 32: person
- 33: pole
- 40: traffic-sign
- 44: vegetation
- 48: terrain
- 49: trunk
- 50: fence
- 51: garage
- 52: wall
- 53: building
- 60: road
- 70: sidewalk
- 72: parking
- 80: track
- 81: ground

**序列信息**: 00

**帧数**: 4,541 帧

**应用场景**: 城市场景，采集于德国卡尔斯鲁厄

**元信息**:
```json
{
  "sequence_id": "00",
  "num_frames": 4541,
  "total_points": 122940,
  "classes": 19,
  "scene_type": "urban",
  "location": "Karlsruhe, Germany"
}
```
