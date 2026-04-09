/** 智能硬件完全精通路线 — 数据与中文 UI 文案 */
export const HARDWARE_ROADMAP = [
  {
    id: "L0",
    title: "Ⅰ · 数理根基",
    subtitle: "THE MATHEMATICAL BEDROCK",
    color: "#C47A5A",
    accent: "#E8D5C4",
    sections: [
      {
        name: "高等数学 & 线性代数",
        topics: [
          "微积分（含多元/向量）",
          "拉普拉斯 & 傅里叶变换",
          "矩阵分解 · SVD / 特征值",
          "凸优化 & 拉格朗日乘子",
        ],
      },
      {
        name: "概率与随机过程",
        topics: [
          "贝叶斯定理 & 条件概率",
          "马尔可夫链 & 高斯过程",
          "蒙特卡洛方法",
          "随机信号分析",
        ],
      },
      {
        name: "信号与系统",
        topics: [
          "连续/离散时间系统",
          "Z 变换 & 传递函数",
          "采样定理 · Nyquist",
          "滤波器设计（FIR / IIR）",
        ],
      },
      {
        name: "物理基础",
        topics: [
          "经典力学 · 刚体动力学",
          "电磁学 · 麦克斯韦方程",
          "热力学与流体基础",
          "光学与波动原理",
        ],
      },
    ],
  },
  {
    id: "L1",
    title: "Ⅱ · 电路与电子",
    subtitle: "CIRCUITS & ELECTRONICS",
    color: "#5A7A94",
    accent: "#C4D5E8",
    sections: [
      {
        name: "模拟电路",
        topics: [
          "二极管 / 三极管 / MOSFET",
          "运算放大器电路",
          "电源设计（LDO / Buck / Boost）",
          "信号调理 · 滤波 / 放大 / ADC 驱动",
          "振荡器与 PLL 锁相环",
        ],
      },
      {
        name: "数字电路",
        topics: [
          "组合逻辑 & 时序逻辑",
          "状态机设计",
          "FPGA / CPLD 入门",
          "Verilog / VHDL 基础",
          "时序约束 & 亚稳态",
        ],
      },
      {
        name: "PCB 设计",
        topics: [
          "原理图绘制（KiCad / AD）",
          "多层板叠层与阻抗控制",
          "高速布线规则 · 等长 / 差分",
          "EMC/EMI 设计 & 接地策略",
          "DFM/DFT 可制造性",
        ],
      },
      {
        name: "电路仿真与测试",
        topics: [
          "SPICE 仿真 · LTspice",
          "示波器 / 逻辑分析仪使用",
          "频谱分析仪 & 网络分析仪",
          "信号完整性 & 电源完整性",
        ],
      },
    ],
  },
  {
    id: "L2",
    title: "Ⅲ · 嵌入式系统",
    subtitle: "EMBEDDED & FIRMWARE",
    color: "#6B8E6B",
    accent: "#C4E8C4",
    sections: [
      {
        name: "MCU 核心",
        topics: [
          "ARM Cortex-M 架构",
          "GPIO / Timer / PWM / DMA",
          "中断系统 & 优先级",
          "Bootloader 与 OTA 升级",
          "低功耗设计 · 休眠模式",
        ],
      },
      {
        name: "RTOS 实时系统",
        topics: [
          "FreeRTOS / RT-Thread / Zephyr",
          "任务调度 & 优先级反转",
          "信号量 / 互斥锁 / 队列",
          "内存管理 · 静态 vs 动态",
          "看门狗与故障恢复",
        ],
      },
      {
        name: "嵌入式 Linux",
        topics: [
          "交叉编译工具链",
          "Buildroot / Yocto 构建系统",
          "设备树 & 驱动模型",
          "V4L2 / ALSA 多媒体框架",
          "容器化部署 · Docker on ARM",
        ],
      },
      {
        name: "MPU / SoC 平台",
        topics: [
          "树莓派 / Jetson / RK3588",
          "Zynq（FPGA+ARM）异构计算",
          "NPU / DSP 加速器",
          "BSP 移植与适配",
        ],
      },
    ],
  },
  {
    id: "L3",
    title: "Ⅳ · 传感器与感知",
    subtitle: "SENSORS & PERCEPTION",
    color: "#8E6B8E",
    accent: "#E8C4E8",
    sections: [
      {
        name: "惯性与位姿",
        topics: [
          "IMU 六轴 · 加速度计 + 陀螺仪",
          "磁力计 & 气压计",
          "AHRS 姿态解算",
          "GPS / RTK / UWB 定位",
        ],
      },
      {
        name: "视觉传感",
        topics: [
          "单目 / 双目 / 深度相机",
          "鱼眼 / 全景相机标定",
          "结构光 & ToF 原理",
          "事件相机（DVS）",
        ],
      },
      {
        name: "激光雷达与雷达",
        topics: [
          "机械式 / 固态 / Flash LiDAR",
          "点云处理与 SLAM 前端",
          "毫米波雷达（77GHz）",
          "超声波传感器",
        ],
      },
      {
        name: "力觉与特殊传感",
        topics: [
          "力/力矩传感器（六维）",
          "触觉传感器（电容/压阻）",
          "编码器 · 增量 / 绝对值",
          "温湿度 / 气体 / 红外",
        ],
      },
    ],
  },
  {
    id: "L4",
    title: "Ⅴ · 执行器与动力",
    subtitle: "ACTUATORS & POWER",
    color: "#94825A",
    accent: "#E8DCC4",
    sections: [
      {
        name: "电机与驱动",
        topics: [
          "直流有刷 / 无刷电机（BLDC）",
          "步进电机 & 细分驱动",
          "伺服电机 · 交流 / 直流",
          "FOC 矢量控制算法",
          "电机选型 · 力矩/速度/惯量匹配",
        ],
      },
      {
        name: "传动与机构",
        topics: [
          "齿轮 / 行星减速器",
          "谐波减速器 & RV 减速器",
          "丝杠 · 滚珠 / 梯形",
          "同步带 / 链传动",
          "连杆机构 & 凸轮",
        ],
      },
      {
        name: "液压/气动",
        topics: [
          "比例阀 / 伺服阀",
          "气缸 & 液压缸",
          "真空吸盘 & 气爪",
          "微型泵 & 流量控制",
        ],
      },
      {
        name: "新型执行器",
        topics: [
          "直线电机 & 音圈电机",
          "SMA 形状记忆合金",
          "压电陶瓷驱动",
          "软体气动执行器",
          "准直驱 / 关节模组",
        ],
      },
    ],
  },
  {
    id: "L5",
    title: "Ⅵ · 控制与估计",
    subtitle: "CONTROL & ESTIMATION",
    color: "#5A8E8E",
    accent: "#C4E8E8",
    sections: [
      {
        name: "经典控制",
        topics: [
          "PID 调参 · Ziegler-Nichols",
          "根轨迹 & Bode 图",
          "前馈 + 反馈复合控制",
          "串级 / 比值 / Smith 预估",
        ],
      },
      {
        name: "现代控制",
        topics: [
          "状态空间建模",
          "LQR / LQG 最优控制",
          "MPC 模型预测控制",
          "自适应控制 & 鲁棒控制（H∞）",
          "滑模控制",
        ],
      },
      {
        name: "状态估计",
        topics: [
          "卡尔曼滤波 · KF / EKF / UKF",
          "粒子滤波",
          "互补滤波",
          "图优化 SLAM 后端",
        ],
      },
      {
        name: "智能控制",
        topics: [
          "模糊控制",
          "强化学习控制（PPO / SAC）",
          "Sim-to-Real 迁移",
          "神经网络控制策略",
        ],
      },
    ],
  },
  {
    id: "L6",
    title: "Ⅶ · 总线与通信",
    subtitle: "COMMUNICATION & BUS",
    color: "#7A5A5A",
    accent: "#E8C4C4",
    sections: [
      {
        name: "板级总线",
        topics: [
          "UART / SPI / I²C / I²S",
          "CAN / CAN-FD / LIN",
          "RS-485 / Modbus",
          "MIPI CSI / DSI",
          "PCIe / USB（2.0~4.0）",
        ],
      },
      {
        name: "无线通信",
        topics: [
          "Wi-Fi 6 / BLE 5.x",
          "LoRa / NB-IoT / 4G Cat.1",
          "5G NR · eMBB / URLLC",
          "Zigbee / Thread / Matter",
          "UWB 超宽带测距",
        ],
      },
      {
        name: "机器人中间件",
        topics: [
          "ROS 2（DDS 底层）",
          "Topic / Service / Action",
          "tf2 坐标变换",
          "Nav2 导航栈",
          "MoveIt 运动规划",
        ],
      },
      {
        name: "网络与云端",
        topics: [
          "MQTT / AMQP / gRPC",
          "OPC UA 工业物联网",
          "数字孪生接口",
          "边缘计算网关",
          "OTA & 远程运维",
        ],
      },
    ],
  },
  {
    id: "L7",
    title: "Ⅷ · 机械结构",
    subtitle: "MECHANICAL DESIGN",
    color: "#5A6B94",
    accent: "#C4D0E8",
    sections: [
      {
        name: "CAD & 3D 建模",
        topics: [
          "SolidWorks / Fusion 360 / FreeCAD",
          "参数化建模 & 装配约束",
          "GD&T 几何尺寸与公差",
          "逆向工程 · 点云→曲面",
        ],
      },
      {
        name: "仿真分析",
        topics: [
          "FEA 有限元 · 静力/模态",
          "CFD 流体仿真",
          "多体动力学仿真（Adams）",
          "拓扑优化",
        ],
      },
      {
        name: "制造工艺",
        topics: [
          "CNC 加工 & 工艺路线",
          "钣金 & 注塑模具",
          "3D 打印（FDM / SLA / SLS）",
          "碳纤维 & 复合材料",
          "焊接 / 铆接 / 粘接",
        ],
      },
      {
        name: "结构专题",
        topics: [
          "防水密封（IP 等级）",
          "散热设计 · 热管 / 翅片",
          "抗振与减震",
          "线束 & 连接器选型",
        ],
      },
    ],
  },
  {
    id: "L8",
    title: "Ⅸ · 智能算法",
    subtitle: "AI & ALGORITHMS",
    color: "#8E8E5A",
    accent: "#E8E8C4",
    sections: [
      {
        name: "计算机视觉",
        topics: [
          "目标检测 · YOLO / RT-DETR",
          "语义分割 & 实例分割",
          "视觉 SLAM · ORB / VINS",
          "3D 重建 & NeRF / 3D Gaussian Splatting",
          "OCR & 缺陷检测",
        ],
      },
      {
        name: "规划与决策",
        topics: [
          "路径规划 · A* / RRT* / Lattice",
          "运动规划 · 轨迹优化",
          "行为树 & 有限状态机",
          "决策 · POMDP / MCTS",
        ],
      },
      {
        name: "端侧 AI 部署",
        topics: [
          "模型量化 · INT8 / INT4",
          "TensorRT / ONNX Runtime",
          "OpenVINO / TFLite / NCNN",
          "NPU 工具链（瑞芯微/寒武纪）",
          "知识蒸馏 & 剪枝",
        ],
      },
      {
        name: "大模型 + 具身智能",
        topics: [
          "VLM 视觉语言模型",
          "LLM 任务规划 & 代码生成",
          "Sim-to-Real · Isaac Sim / MuJoCo",
          "扩散策略（Diffusion Policy）",
          "世界模型 & 基础模型",
        ],
      },
    ],
  },
  {
    id: "L9",
    title: "Ⅹ · 整机实战",
    subtitle: "SYSTEM INTEGRATION",
    color: "#6B6B8E",
    accent: "#D0D0E8",
    sections: [
      {
        name: "无人机",
        topics: [
          "飞控架构 · PX4 / ArduPilot",
          "动力套选型 · 桨效/推重比",
          "自主避障与航线规划",
          "图传 & 数据链",
          "适航法规 · C-UAS",
        ],
      },
      {
        name: "自动驾驶汽车",
        topics: [
          "线控底盘（转向/制动/驱动）",
          "多传感器融合 · BEV 感知",
          "高精地图 & 定位",
          "功能安全 · ISO 26262 / SOTIF",
          "域控制器 · Orin / TDA4",
        ],
      },
      {
        name: "机器人 · 机械臂",
        topics: [
          "D-H 参数 & 正/逆运动学",
          "动力学 · 牛顿-欧拉/拉格朗日",
          "力控 · 阻抗/导纳控制",
          "抓取规划 & 灵巧手",
          "协作安全 · ISO 10218 / TS 15066",
        ],
      },
      {
        name: "机器人 · 移动/足式",
        topics: [
          "差速/麦克纳姆/阿克曼底盘",
          "SLAM 建图 & 自主导航",
          "足式步态生成 & 地形适应",
          "全身运动控制 · WBC",
          "人形机器人 · 平衡 & 操作",
        ],
      },
      {
        name: "IoT 与消费电子",
        topics: [
          "可穿戴设备设计",
          "智能家居 · Matter / HomeKit",
          "音频产品 · DSP / ANC",
          "产品认证 · CE / FCC / CCC",
          "量产导入 · EVT→DVT→PVT→MP",
        ],
      },
    ],
  },
  {
    id: "L10",
    title: "Ⅺ · 工程素养",
    subtitle: "ENGINEERING PRACTICE",
    color: "#6B8080",
    accent: "#C4DEDE",
    sections: [
      {
        name: "版本与协作",
        topics: [
          "Git 工作流 · 硬件版本管理",
          "代码审查 & CI/CD",
          "BOM 管理 & 供应链",
          "技术文档写作",
        ],
      },
      {
        name: "测试与可靠性",
        topics: [
          "HIL / SIL 在环测试",
          "环境试验 · 高低温/振动/盐雾",
          "MTBF 可靠性分析",
          "FMEA 失效模式分析",
          "EMC 测试 · 辐射/传导",
        ],
      },
      {
        name: "安全与合规",
        topics: [
          "功能安全 · IEC 61508 / ISO 13849",
          "信息安全 · 安全启动 / 加密芯片",
          "GDPR & 数据隐私",
          "CE / UL / FCC 认证流程",
        ],
      },
      {
        name: "项目管理",
        topics: [
          "需求工程 · V 模型",
          "敏捷硬件开发",
          "成本估算 & DFM/DFA",
          "从原型到量产的关键节点",
        ],
      },
    ],
  },
];
