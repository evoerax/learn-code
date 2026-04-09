# ScanNet

## 数据集简介

ScanNet 是一个室内 3D 场景重建数据集，包含 1,513 个标注完整的 3D 扫描场景，涵盖 21 个类别（如椅子、桌子、墙、地板等）。该数据集由斯坦福大学、普林斯顿大学和慕尼黑工业大学于 2017 年联合发布。ScanNet 通过众包方式收集，参与者使用室内扫描 App 对真实房间进行 3D 重建，并进行语义分割标注。数据集提供了彩色深度图像、相机位姿、3D 网格模型和语义分割标签，是 3D 场景理解研究的核心资源。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1702.04405
- **GitHub**: https://github.com/ScanNet/ScanNet
- **数据集下载**: https://github.com/ScanNet/ScanNet/tree/master/SensFile
- **在线体验**: https://scannet.sf.net/

## 相关论文

**ScanNet: A Richly-Annotated 3D Dataset of Indoor Scenes**

- **作者**: Dai, Angela et al.
- **年份**: 2017
- **摘要**: 本文提出了 ScanNet，一个大规模室内 3D 场景数据集，包含 1,513 个扫描场景，每个场景都经过完整的 3D 重建和语义分割标注。数据集涵盖 21 个常见的室内物体类别，总共包含超过 2.5M 个 3D 物体实例。ScanNet 的场景覆盖了多种类型的室内环境（公寓、办公室、会议室等），为 3D 场景理解、物体检测和室内布局分析等任务提供了重要的研究基础。

## 数据示例

### 数据格式说明

每个场景包含 .sens 文件（含彩色图像和深度图）和 .label 文件（含语义分割标签）：

```
scannet/scene0000_00/
  ├── color/          # 彩色图像 (640x480 JPEG)
  ├── depth/          # 深度图 (640x480 PNG)
  ├── label/          # 语义分割标签
  ├── pose/           # 相机位姿矩阵 (4x4)
  └── scene0000_00.ply # 3D 网格模型
```

### 真实样本

**相机位姿矩阵 (pose.txt)**:
```
0.9999 0.0012 0.0098 1.2345
0.0013 0.9998 0.0187 -0.5678
-0.0098 0.0187 0.9998 2.3456
0 0 0 1
```

**语义分割标签 (标注类别)**:
| ID | 类别名称 |
|----|---------|
| 0 | wall |
| 1 | floor |
| 2 | cabinet |
| 3 | bed |
| 4 | chair |
| 5 | sofa |
| 6 | table |
| 7 | door |
| 8 | window |
| 9 | bookshelf |
| 10 | picture |
| 11 | counter |
| 12 | desk |
| 13 | curtain |
| 14 | refrigerator |
| 15 | shower curtain |
| 16 | toilet |
| 17 | sink |
| 18 | bathtub |
| 19 | otherfurniture |
| 20 | otherprop |

**3D 网格文件 (.ply)**: 包含顶点坐标 (x, y, z)、颜色 (r, g, b) 和顶点所属类别标签
