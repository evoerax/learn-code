# AI2-THOR

## 数据集简介

AI2-THOR（The Habitat of Objects）是 Allen Institute for AI（AI2）于 2018 年发布的交互式 3D 室内环境模拟平台，旨在支持具身人工智能（Embodied AI）研究。该平台包含 120 个高质量的 3D 室内场景，涵盖 4 种房间类型（厨房、卧室、浴室、客厅），每个场景都支持物体交互和物理状态变化。AI2-THOR 的核心价值在于它提供了一个可控制的虚拟环境，让智能体可以在其中执行"移动"、"观察"、"交互"等动作，从而学习如何在真实世界中完成导航、操作物体、回答问题等任务。该数据集已被广泛应用于视觉问答、动作规划、导航和常识推理等具身智能研究。

## 相关链接

- **官网**: https://ai2thor.allenai.org/
- **论文**: https://arxiv.org/abs/1712.05474
- **GitHub**: https://github.com/ai2thor/ai2thor
- **文档**: https://ai2thor.allenai.org/documentation/

## 相关论文

**AI2-THOR: An Interactive 3D Environment for Visual AI**

- **作者**: Kolve, Eric and Mottaghi, Roozbeh and Han, Wenhan and Berg-Zemitis, Eli and Parr, Benjamin and Harvard, Steven and Mao, Yi and Chang, Johnny and Hall, Alex and Choset, Howie and others
- **年份**: 2017
- **摘要**: AI2-THOR 是一个交互式 3D 环境平台，包含 120 个室内场景，涵盖厨房、卧室、浴室和客厅四种房间类型。该平台支持智能体执行移动、旋转、观察等基本动作，以及开柜、拿取、放置等物体交互操作。通过提供像素级语义分割、深度图、边界框等丰富的观测输出，AI2-THOR 为具身智能研究提供了标准化测试平台，推动了视觉语言导航、物体操作和常识推理等任务的发展。

## 数据示例

**数据格式说明**

AI2-THOR 的交互数据以 JSON 格式存储，包含场景元数据、物体状态、动作序列和观测结果。每条交互记录包含：
- `scene_id`：场景唯一标识符（如 `FloorPlan201`）
- `object_id`：交互物体 ID（如 `Apple|1`）
- `action`：执行的动作类型（如 `OpenObject`, `PickupObject`, `MoveAhead`）
- `metadata`：包含深度图、分割掩码、边界框等观测信息

**真实样本**

```json
{
  "scene_id": "FloorPlan201",
  "floor": 1,
  "room_type": "kitchen",
  "object_id": "Apple|1",
  "object_class": "Apple",
  "action": "PickupObject",
  "success": true,
  "metadata": {
    "image": "frame_001.png",
    "depth": "depth_001.png",
    "segmentation": "seg_001.png",
    "bounding_box": {"x": 245, "y": 180, "width": 45, "height": 50},
    "position": {"x": 1.2, "y": 0.9, "z": -0.3}
  }
}
```

```json
{
  "scene_id": "FloorPlan310",
  "floor": 2,
  "room_type": "bedroom",
  "object_id": "Book|5",
  "object_class": "Book",
  "action": "OpenObject",
  "action_sequence": ["MoveAhead", "RotateLeft", "PickupObject"],
  "success": true,
  "metadata": {
    "image": "frame_042.png",
    "depth": "depth_042.png",
    "object_state": "opened",
    "position": {"x": -0.5, "y": 1.0, "z": 0.8}
  }
}
```

```json
{
  "scene_id": "FloorPlan418",
  "floor": 1,
  "room_type": "living_room",
  "object_id": "RemoteControl|2",
  "object_class": "RemoteControl",
  "action": "PutObject",
  "target_location": "CoffeeTable|1",
  "success": true,
  "metadata": {
    "image": "frame_089.png",
    "depth": "depth_089.png",
    "object_state": "on_surface",
    "position": {"x": 0.3, "y": 0.4, "z": 0.2}
  }
}
```
