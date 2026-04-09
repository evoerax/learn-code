# nuImages (Autonomous Driving)

## 数据集简介

nuImages 是 nuScenes 数据集的图像版本，由 Aptiv（前身为 nuTonomy）于 2020 年发布。该数据集包含 934,000 张标注图像，来自 1,000 个驾驶场景，覆盖波士顿、匹兹堡、新加坡等多地城市环境。nuImages 提供丰富的 2D 图像标注，包括物体边界框、语义分割掩码、实例分割掩码、物体表面关键点等。相比 KITTI 和 BDD100K，nuImages 的场景多样性更高，标注类型更全面，是自动驾驶视觉感知研究的重要数据集。

## 相关链接

- 官网/论文：https://www.nuscenes.org/nuimages
- GitHub：https://github.com/nutonomy/nuscenes-devkit
- 在线体验/Demo：https://www.nuscenes.org/nuscenes.html

## 相关论文

**nuScenes: A Multimodal Dataset for Autonomous Driving**
- 作者：Holger Caesar, Varun Bankiti, Alex H. Lang et al.
- 年份：2020
- 摘要：本文提出了 nuScenes 数据集，一个多模态自动驾驶数据集。nuScenes 包含 1000 个场景的完整传感器数据（相机、LiDAR、雷达），以及 2D 和 3D 物体标注。nuImages 作为其图像版本，提供了丰富的 2D 图像标注，支持目标检测、语义分割、实例分割等视觉任务的研究。

## 数据示例

### 数据格式说明

nuImages 使用 COCO 格式进行标注，每个样本包含图像路径和对应的标注信息。

```json
{
  "info": {
    "year": 2020,
    "version": "1.0",
    "date_created": "2020-03-10"
  },
  "images": [{
    "id": 1,
    "file_name": "n015-2018-08-01-15-33-50+0800__CAMERA__0__1540697965812405.jpg",
    "width": 1600,
    "height": 900,
    "sample_token": "..."
  }],
  "annotations": [...]
}
```

### 真实样本

#### 样本元数据

```json
{
  "sample_token": "n015-2018-08-01-15-33-50+0800",
  "camera": "CAMERA_0",
  "filename": "n015-2018-08-01-15-33-50+0800__CAMERA__0__1540697965812405.jpg",
  "width": 1600,
  "height": 900
}
```

#### 物体标注示例

```json
{
  "id": 1001,
  "category_name": "vehicle.car",
  "bbox": [523.12, 401.33, 78.45, 45.21],
  "area": 3548.92,
  "segmentation": [[...]],
  "visible_ratio": 0.95
}
```

---

*文档版本: 1.0 | 最后更新: 2026年4月*
