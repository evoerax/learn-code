# KITTI

## 数据集简介

KITTI 是自动驾驶领域最著名的benchmark数据集，由德国卡尔斯鲁厄理工学院和丰田工业大学于 2012 年联合发布。该数据集通过配备多个相机、激光雷达、GPS 和 IMU 的采集车在德国卡尔斯鲁厄市区采集，涵盖 15 个小时的驾驶数据。KITTI 提供目标检测、深度估计、视觉里程计、SLAM 等多任务标注，是自动驾驶感知算法评估的核心基准。其标注包括 3D 边界框、跟踪ID、场景流向量等丰富信息。

## 相关链接

- **官网/论文**: https://www.cvlibs.net/datasets/kitti/
- **GitHub**: https://github.com/intel-iot-devkit/kitti-object-tracking
- **数据集下载**: https://s3.eu-central-1.amazonaws.com/avg-kitti
- **在线体验**: https://annotator.tut.tiargo.de/ (在线标注工具)

## 相关论文

**Are We Ready for Autonomous Driving? The KITTI Vision Benchmark Suite**

- **作者**: Geiger, Andreas et al.
- **年份**: 2012
- **摘要**: 本文介绍了 KITTI 自动驾驶数据集和 vision benchmark 套件。数据集通过装备有多个相机、激光雷达、GPS/IMU 的采集车在卡尔斯鲁厄市区和高速公路采集。论文提出了目标检测、立体匹配、光流、深度估计和视觉里程计等多个任务的 benchmark，填补了自动驾驶领域大规模真实数据评估的空白。KITTI 数据集推动了自动驾驶感知算法从实验室走向实际应用的研究进程。

## 数据示例

### 数据格式说明

KITTI 采用纯文本格式存储标注，每个标注文件 (.txt) 包含 N 行，每行 15 个字段：

```
object_type truncation pixel_occ alpha  bbox_l bbox_t bbox_r bbox_b 3d_h 3d_w 3d_l 3d_x 3d_y 3d_z rotation_y score
```

### 真实样本

**目标检测标注 (000001.txt)**:
```
Car 0.00 0 -1.56 534.24 174.40 604.92 249.60 1.52 1.63 3.68 -1.43 1.92 6.56 -1.56 0.00
Pedestrian 0.00 0 -2.43 578.21 195.26 591.54 255.00 1.78 0.55 0.87 3.22 1.68 8.41 -2.43 0.00
Cyclist 0.00 0 -1.65 532.12 189.34 561.42 244.60 1.72 0.56 1.87 4.12 1.84 7.53 -1.65 0.00
```

**标注字段说明**:
| 字段 | 说明 |
|-----|------|
| object_type | 目标类型: Car, Pedestrian, Cyclist, Van, Truck 等 |
| truncation | 截断比例 (0.0-1.0)，目标被图像边缘截断的程度 |
| occlusion | 遮挡程度: 0=未遮挡, 1=部分遮挡, 2=严重遮挡 |
| alpha | 观察角度 (-π 到 π) |
| bbox | 2D 边界框 (left, top, right, bottom) |
| 3d_h/w/l | 3D 边界框尺寸 (高、宽、长，单位：米) |
| 3d_x/y/z | 3D 边界框中心位置 (相机坐标系下，单位：米) |
| rotation_y | 旋转角 (-π 到 π) |
| score | 检测置信度分数 |

**相机内参矩阵**:
```
fx  0  cx
0  fy  cy
0   0   1
```
常用内参：fx=721.5377, fy=721.5377, cx=609.5593, cy=172.8540
