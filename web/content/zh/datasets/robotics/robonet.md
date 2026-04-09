# RoboNet

## 数据集简介

RoboNet 是伯克利人工智能研究院（BAIR）发布的大规模机器人学习视频数据集，是具身 AI（Embodied AI）领域的重要资源。该数据集包含超过 15,000,000 帧的机器人操作视频，采集自 7 种不同类型的机械臂平台，涵盖 1,200+ 个独立操作任务场景。RoboNet 的独特之处在于其跨机器人、跨任务、跨场景的通用性，支持机器人操作的迁移学习和少样本泛化研究。数据集包含 RGB 摄像头图像、机器人末端执行器姿态、夹爪状态等丰富的观测信息和动作标签，为多任务机器人学习和视觉模仿学习研究提供了重要的数据基础。

## 相关链接

- **官网/论文**: https://arxiv.org/abs/1910.11215
- **GitHub**: https://github.com/aroitd/roboNet
- **项目主页**: https://sites.google.com/view/robo-net

## 相关论文

**RoboNet: A Dataset for Large-Scale Multi-Robot Learning**
- **作者**: S. Dasari, et al.
- **年份**: 2019
- **摘要**: 本文介绍了 RoboNet 数据集，这是一个用于大规模多机器人学习的大规模视频数据集，包含超过 15,000,000 帧来自 7 种不同机械臂平台的机器人操作视频。数据集支持跨机器人平台的迁移学习，使在一个机器人上训练的模型能够泛化到新机器人平台。我们还提供了基于该数据集的基准实验，展示了预训练模型在新任务和新机器人上的少样本适应能力。RoboNet 为推动通用机器人学习算法研究提供了重要数据基础设施。（约 100 字）

## 数据示例

**视频格式说明**
- 帧率: 30 fps
- 图像格式: RGB 视频 (H.264/MP4)
- 分辨率: 640 × 480 像素
- 每帧包含: RGB 图像、机器人状态、动作向量

**样本示例**

```json
{
  "video_id": "sawyer_table_block_slide_variation_2020-02-24_17-10-35",
  "robot": "sawyer",
  "task": "block_slide",
  "num_frames": 300,
  "camera": "front",
  "state_dim": 7,
  "action_dim": 7,
  "start_time": "2020-02-24_17-10-35",
  "object": "block"
}
```

```json
{
  "video_id": "franka_pick_bottle_withycable_2020-03-15_14-22-10",
  "robot": "franka",
  "task": "pick_bottle",
  "num_frames": 450,
  "camera": "wrist",
  "state_dim": 14,
  "action_dim": 7,
  "start_time": "2020-03-15_14-22-10",
  "object": "bottle"
}
```

```json
{
  "video_id": "baxter_place_cup_2020-04-02_09-15-22",
  "robot": "baxter",
  "task": "place_cup",
  "num_frames": 380,
  "camera": "head",
  "state_dim": 20,
  "action_dim": 8,
  "start_time": "2020-04-02_09-15-22",
  "object": "cup"
}
```

**支持的机械臂平台**
- Sawyer (7-DOF)
- Baxter (7-DOF)
- Franka Panda (7-DOF)
- Kuka IIWA (7-DOF)
- Universal Robots UR5 (6-DOF)
- Fetch (7-DOF)
- Jaco (6-DOF)

**任务类型**
Pick and place, Pushing, Sliding, Pouring, Door opening, Object manipulation, Tool use
