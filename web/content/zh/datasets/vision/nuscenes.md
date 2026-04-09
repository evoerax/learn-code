# nuScenes 自动驾驶数据集

## 数据集简介

nuScenes 是由 Aptiv（前身为 nuTonomy）发布的大规模自动驾驶数据集，是首个同时配备摄像头、LiDAR、雷达等多种传感器的公开数据集。数据集采集自波士顿和新加坡的复杂城市环境，包含 1000 个驾驶场景，每个场景约 20 秒，总计约 16 小时的驾驶数据。数据集中包含 23 个物体类别的标注，约 140 万个 3D 边界框，为多传感器融合、3D 物体检测、跟踪、轨迹预测等任务提供了全面的评测基准。数据集的核心价值在于其多模态特性和丰富的标注，推动了自动驾驶感知技术的快速发展。

## 相关链接

- **官网/论文链接**: https://www.nuscenes.org/nuscenes
- **GitHub**: https://github.com/nutonomy/nuscenes-devkit
- **在线体验/Demo**: https://www.nuscenes.org/nuscenes#explore

## 相关论文

**论文标题**: nuScenes: A Multimodal Dataset for Autonomous Driving  
**作者**: Holger Caesar, Varun Bankiti, Alex H. Lang, Sourabh Vora, Venice Erin Liong, Qiang Xu, Anush Krishnan, Yu Pan, Giancarlo Baldan, Oscar Beijbom  
**年份**: 2020  
**摘要**: nuScenes 是一个用于自动驾驶的大规模多模态数据集，包含 1000 个场景，每个场景 20 秒，配备相机、LiDAR、雷达等传感器。数据集包含 23 个物体类别的 140 万个标注边界框，以及传感器校准、地图信息等丰富的元数据。该数据集支持 3D 物体检测、跟踪、轨迹预测等多种任务，为自动驾驶研究提供了全面的评测基准。

## 数据示例

**数据格式说明**

nuScenes 使用基于 JSON 的数据格式，主要包括：
- `sample.json` - 关键帧样本，包含时间戳和传感器数据引用
- `sample_data.json` - 传感器数据引用（图像、点云、雷达数据）
- `ego_pose.json` - 自车位置和朝向信息
- ` calibrated_sensor.json` - 传感器校准参数
- `annotation.json` - 3D 边界框标注（类别、位置、尺寸、朝向、置信度）

**真实样本**

```json
// sample 数据结构
{
  "token": "1b8c0a2159b94b4fa1c7b5e9a54e5e5f",
  "timestamp": 1532400527619183,
  "prev": "122f0e02e5e94ee4a18a57c7a6c7ea4c", 
  "next": "4b0a2c045e434d0a9c9a0e8e3e6f2b3d",
  "scene_token": "4c73a3438c054b8a9241545d5e5c7e3f",
  "data": {
    "CAM_FRONT": "4c8e8e9e8e9b4a8a8a8a8a8a8a8a8a8",
    "LIDAR_TOP": "6f8e9e9e9b4a8a8a8a8a8a8a8a8a8a8"
  }
}
```

```json
// 3D 边界框标注
{
  "token": "9c8e9e8e9e4a8a8a8a8a8a8a8a8a8a8",
  "sample_data_token": "4c8e8e9e8e9b4a8a8a8a8a8a8a8a8a8",
  "instance_token": "7f9e8e8e9e4a8a8a8a8a8a8a8a8a8a8",
  "visibility_token": "4",
  "translation": [10.5, 0.3, 1.2],
  "size": [1.8, 0.6, 1.6],
  "rotation": [0.01, 0.0, 0.0, 0.9999],
  "num_lidar_pts": 48
}
```

```json
// 物体类别列表
{
  "name_to_id": {
    "movable_object.barrier": 1,
    "movable_object.bicycle": 2,
    "movable_object.bus": 3,
    "movable_object.car": 4,
    "movable_object.construction_vehicle": 5,
    "movable_object.pedestrian": 6,
    "movable_object.trafficcone": 7,
    "movable_object.trailer": 8,
    "movable_object.truck": 9,
    "static_object.bicycle_rack": 10
  }
}
```
