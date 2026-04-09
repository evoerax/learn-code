# Hardware 模块 · 100 轮迭代变更日志

> 本文件记录 `web/content/{zh,en}/hardware/**` 在 FTTM 100 轮迭代（Round 1–100）中的完整变更轨迹，定位为发布说明（CHANGELOG），供维护者与审阅者快速了解模块当前状态。

---

## 变更日志

### [1.0.0] 2026-04-09 — 100 轮交付完成

#### 阶段一：英文基础层去 Stub（Rounds 1–10）

- **basics/index.mdx** — 英文导读独立成文，保留与中英站互链
- **basics/electronics.mdx** — 模拟/数字/配电/实践四段完整英文
- **basics/embedded.mdx** — MCU/RTOS/工具链梗概 + 与整机关系
- **basics/actuation.mdx** — 电机/驱动/选型直觉英文版
- **basics/sensing.mdx** — IMU/相机/LiDAR分层说明英文版
- **basics/control.mdx** — PID/状态估计入门英文版
- **basics/communication.mdx** — 总线/ROS/MQTT入门英文版
- **basics/_meta.js** — 统一术语表（英）、title/description 校对；EN sidebar L5 大小写修复（"Control & estimation" → "Control & Estimation"，Round 95）

#### 阶段二：英文进阶层 + 总览（Rounds 11–20）

- **progression/index.mdx** — 英文导读独立
- **progression/roadmap.mdx** — 路线图页说明与中站映射一致
- **overview.mdx** — 英文总览扩展至与中文同信息量
- **systems/index.mdx** + **drones/automotive/robotics 三个 index.mdx** — 四个总览页英文独立正文

#### 阶段三：英文整机 · 无人机（Rounds 21–30）

- **drones/airframe.mdx** — 动力/桨/电池/机架英文深度正文
- **drones/flight_control.mdx** — 控制环、PX4/ArduPilot粗线条英文
- **drones/link_safety.mdx** — 数传/遥控/法规与安全英文
- **drones/index.mdx** — 与三级页呼应的修订
- **systems/drones** — 术语与链接一致性；互链一圈

#### 阶段四：英文整机 · 汽车 + 机器人（Rounds 31–40）

- **automotive/onboard_network.mdx** — 车载网络英文
- **automotive/by_wire.mdx** — 线控英文
- **automotive/adas.mdx** — ADAS英文
- **automotive/index.mdx** — 总览修订
- **robotics/manipulators.mdx** — 机械臂英文
- **robotics/mobile_base.mdx** — 底盘英文
- **robotics/integration.mdx** — 集成与安全英文
- **robotics/index.mdx** — 总览修订

#### 阶段五：中文基础层加厚（Rounds 41–50）

- **zh/hardware/basics/electronics.mdx** — 地/电源完整性或测量小节（≥1节新增）
- **zh/hardware/basics/embedded.mdx** — 中断/DMA/调试一则
- **zh/hardware/basics/actuation.mdx** — FOC 或选型计算一则
- **zh/hardware/basics/sensing.mdx** — 标定或噪声一则
- **zh/hardware/basics/control.mdx** — Kalman 直觉或调参一则
- **zh/hardware/basics/communication.mdx** — CAN 时钟/终端电阻实践一则
- 六章标题层级润色、补 Mermaid/表格（任选其二完成）

#### 阶段六：中文整机链路加厚（Rounds 51–60）

- **systems/drones/\*** — 每文件 +300～500字技术细节或清单
- **systems/automotive/\*** — 同上
- **systems/robotics/\*** — 同上
- **systems/index.mdx** — 三类整机对比表（Mermaid可选）

#### 阶段七：进阶层与站内核对照（Rounds 61–70）

- **progression/index.mdx** — 补充与 software/agi/datasets/timeline 的明确互链
- **progression/roadmap.mdx** — 对照表增列「推荐站外关键词」每行1短语
- **HardwareRoadmap.jsx / hardware-roadmap-data.js** — 文案/分组标签修正（L3/L4 顺序互换，circled numerals L1-L10，层标题中间点移除）
- **overview.mdx** — 与进阶层、基础层、整机同步图示或表格

#### 阶段八：工程 / 合规 / 测试（Rounds 71–80）

- **governance.mdx**（含 en 镜像 governance.mdx）— 功能安全/EMC/认证流程导论
- **test.mdx**（含 en 镜像）— HIL、环境试验、FMEA引言
- **zh/en hardware _meta.js** — 纳入侧栏；build 通过

#### 阶段九：一致性与站内体验（Rounds 81–90）

- **全 zh/hardware front matter** — title/description 审计清单（Round 81）
- **全 en/hardware front matter** — title/description 审计清单（Round 84）
- **文内链接** — 相对路径与 /zh /en 混用统一为一种风格（Round 87）
- **移动端目录** — 三级展开可读性（仅靠标题长度调节，Round 89）
- **spec/zh-hardware-frontmatter-audit-r81.md** — 中文 front matter 审计结果记录
- **spec/en-hardware-frontmatter-audit-r82.md** — 英文 front matter 审计结果记录

#### 阶段十：收官与维护包（Rounds 91–100）

- **spec/nextra-sidebar-lessons.md §7** — 新增「Hardware 模块内容维护约定（91–100 轮沉淀）」，含 MDX 文件规范、混合语言红线规则、中英同步节奏、链接风格、Hub 页结构模板、Build 验证六项子内容
- **overview.mdx**（zh/en）— 末尾新增「维护参考 / Maintainer Reference」节，链接指向 spec/nextra-sidebar-lessons.md §7
- **spec/nextra-sidebar-lessons.md §7.3** — 新增「同步节奏」子节（迭代抽检节奏、问题驱动修复时机、重大结构变更前置确认三条规则）
- **死链抽查** — 全量扫描 zh/hardware 和 en/hardware 全部 MDX，站外 HTTP/HTTPS 链接数：0（Round 94）
- **HARDWARE_ROADMAP 对齐** — L1-L10 层标题与 zh/en sidebar 标签完全对齐（Round 95-96）
- **EN sidebar 大小写修复** — L5 "Control & estimation" → "Control & Estimation"（Round 95）
- **HARDWARE_ROADMAP 格式修复** — 层标题中间点移除（① · 电路与电子 → ① 电路与电子，Round 96）
- **Pagefind 全文检索验证** — 「飞控」「ISO」「CAN」三项搜索均命中预期硬件模块页面（Round 99）

---

## 当前状态（Round 100 截止）

| 指标 | 数值 |
|------|------|
| Build 页数 | 874 页 |
| 索引词数 | 38,912 词 |
| Hardware 模块 MDX 文件（zh） | 约 30 篇（含 basics/systems/progression 各层） |
| Hardware 模块 MDX 文件（en） | 约 30 篇（与 zh 对应的完整英译层） |
| 中英 Stub 空壳残留 | 0（已全部在 Round 1–30 淘汰） |
| 站外 HTTP 链接残留 | 0（经 Round 94 全量扫描确认） |
| HARDWARE_ROADMAP 标题对齐 | 100%（L1-L10 层标题与 sidebar 完全对齐） |
| Front matter 审计完成 | 100%（zh/en hardware 全量，Round 81-84） |
| 维护约定文档 | spec/nextra-sidebar-lessons.md §7（完整） |

---

## 关键设计决策记录

1. **EN sidebar L6 "Buses & links" vs HARDWARE_ROADMAP subtitle "BUS & COMMUNICATION"**：属 intentional semantic localization——EN sidebar 将 RC/遥测链路纳入"通信"范畴（反映 EN 内容结构），HARDWARE_ROADMAP subtitle 采用 literal translation，两者各有其合理性，不强制统一（Round 95 确认）。
2. **HARDWARE_ROADMAP section/topic 名称是中文学习主题标签**，对应文章内 section 段落（非独立 MDX 文章标题），是设计层面的多对多映射，非 bug（Round 98 确认）。
3. **Pagefind 中文分词不支持词干提取**（"Pagefind doesn't support stemming for the language zh"），搜索精确匹配 token，影响搜索相关性排序而非结果完整性（Round 99 确认）。

---

## 后续维护指引

- **中英同步节奏**：每次 zh/hardware 修改后，同语言版本的 en 对应文件须在同轮或下一轮完成同步（spec/nextra-sidebar-lessons.md §7.3）
- **Build 验证**：每次提交前须在 web/ 目录执行 `pnpm run build`，确保 874 页 / 38912 词基线不下降
- **站外链接**：hardware 模块内容中避免新增站外 HTTP/HTTPS 链接；如需引用站外资源（厂商数据手册、标准文档），须记录 URL 以便后续抽检
- **HARDWARE_ROADMAP 修改**：仅修改 data 文案/分组标签，不改交互逻辑；层标题须与 sidebar labels 保持一致
