# 智能硬件模块 · 100 轮 FTTM 迭代计划

面向仓库路径：`web/content/{en,zh}/hardware/**`。执行者（FTTM）每轮应：**小步提交、可构建、不扩大范围到非 hardware**，并在本轮末尾自检 `pnpm run build`（在 `web/` 下）。

---

## 总则（每轮通用）

- **语言**：中文正文以 `content/zh/hardware` 为准；英文以 `content/en/hardware` 为准；禁止空壳 Stub 长期留存（可暂时 `Callout` 指向中文，但须在计划前半程淘汰）。
- **验收**：改动的 MDX 通过 front matter；不破坏 `pnpm run build`；不修改与本计划无关的大规模主题/依赖（除非本轮明确写了）。
- **粒度**：单轮尽量 **1～3 个文件** 或 **同一子树内** 的连贯修改，便于回滚与审阅。

---

## 第 1–10 轮：英文基础层去 Stub（Foundations）

**阶段目标**：`en/hardware/basics/*` 六章均有 **独立英文正文**（每篇 ≥ 原文长度的 60%，结构与中文章节对齐），不再仅链到 `/zh/...`。

| 轮次 | 聚焦文件（建议） | 本轮交付 |
|------|------------------|----------|
| 1 | `basics/index.mdx` | 英文导读独立成文；保留与中英站互链 |
| 2 | `basics/electronics.mdx` | 模拟/数字/配电/实践 四段完整英文 |
| 3 | `basics/embedded.mdx` | MCU/RTOS/工具链梗概 + 与整机关系 |
| 4 | `basics/actuation.mdx` | 电机/驱动/选型直觉 英文版 |
| 5 | `basics/sensing.mdx` | IMU/相机/LiDAR 分层说明 英文版 |
| 6 | `basics/control.mdx` | PID/状态估计入门 英文版 |
| 7 | `basics/communication.mdx` | 总线/ROS/MQTT 入门 英文版 |
| 8–9 | 上述 6 章 | 统一术语表（英）、互相「上一章/下一章」链接 |
| 10 | `basics/_meta.js` 与各页 | 校对 title/description；`pnpm run build` |

---

## 第 11–20 轮：英文进阶层 + 总览

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 11–12 | `progression/index.mdx`、`progression/roadmap.mdx` | 英文导读独立；路线图页说明与中站映射一致 |
| 13–14 | `overview.mdx` | 英文总览扩展为与中文同信息量（侧栏结构、阅读顺序可简写） |
| 15–18 | `systems/index.mdx` + `drones/automotive/robotics` 三个 `index.mdx` | 四个「总览」页英文独立正文 |
| 19–20 | 英文 hardware 全局 | 从 overview 到各章互链一圈；build 通过 |

---

## 第 21–30 轮：英文整机 · 三级专题（无人机优先）

**阶段目标**：`en/hardware/systems/drones/*` 四页（overview + airframe + flight_control + link_safety）全覆盖英文正文。

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 21–23 | `drones/airframe.mdx` | 动力/桨/电池/机架 英文深度 |
| 24–26 | `drones/flight_control.mdx` | 控制环、PX4/ArduPilot 粗线条 英文 |
| 27–28 | `drones/link_safety.mdx` | 数传/遥控/法规与安全 英文 |
| 29 | `drones/index.mdx` | 与三级页呼应的修订 |
| 30 | `systems/drones` | 术语与链接一致性；build |

---

## 第 31–40 轮：英文整机 · 汽车 + 机器人

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 31–33 | `automotive/onboard_network.mdx`、`by_wire.mdx` | 车载网络/线控 英文 |
| 34–35 | `automotive/adas.mdx`、`automotive/index.mdx` | ADAS + 总览修订 |
| 36–38 | `robotics/manipulators.mdx`、`mobile_base.mdx` | 臂/底盘 英文 |
| 39–40 | `robotics/integration.mdx`、`robotics/index.mdx` | 集成与安全 + 总览；build |

---

## 第 41–50 轮：中文基础层加厚（深度与可读性）

**阶段目标**：`zh/hardware/basics/*.mdx`（除 `index` 外 6 章）每章新增 **至少一节**「深入/常见坑/mini 案例」或 **推荐进一步阅读**（站外链接 3–5 条需可访问）。

| 轮次 | 聚焦（建议顺序） | 本轮交付 |
|------|-------------------|----------|
| 41 | `electronics.mdx` | 地/电源完整性或测量小节 |
| 42 | `embedded.mdx` | 中断/DMA/调试一则 |
| 43 | `actuation.mdx` | FOC 或选型计算一则 |
| 44 | `sensing.mdx` | 标定或噪声一则 |
| 45 | `control.mdx` | Kalman 直觉或调参一则 |
| 46 | `communication.mdx` | CAN 时钟/终端电阻实践一则 |
| 47–50 | 六章轮流 | 润色标题层级、补 1 张 Mermaid/表（任选其二完成） |

---

## 第 51–60 轮：中文整机链路加厚

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 51–53 | `systems/drones/*` | 每文件 +300～500 字技术细节或清单 |
| 54–56 | `systems/automotive/*` | 同上 |
| 57–59 | `systems/robotics/*` | 同上 |
| 60 | `systems/index.mdx` | 三类整机对比表（可选 Mermaid） |

---

## 第 61–70 轮：进阶层与站内核对照

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 61–62 | `zh/hardware/progression/index.mdx` | 补充与 `software`/`agi`/`datasets`/`timeline` 的明确互链 |
| 63–65 | `zh/hardware/progression/roadmap.mdx` | 对照表增列「推荐站外关键词」每行 1 短语（非长文） |
| 66–68 | `HardwareRoadmap.jsx` / `hardware-roadmap-data.js` | 仅修文案/分组标签：与中文站章节名一致（不改交互逻辑除非 bug） |
| 69–70 | `zh/hardware/overview.mdx` | 与进阶层、基础层、整机同步一版图示或表格 |

---

## 第 71–80 轮：工程 / 合规 / 测试（中文短文）

**阶段目标**：在 `zh/hardware` 下新增 **1～2 篇** 独立 MDX（需同时 `en` 镜像 **梗概级**，且更新 `_meta.js`），或扩写 `overview` 一节而不强制新文件——由执行者二选一，但 71–80 轮结束须有可点击的「工程与安全」入口。

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 71–73 | 方案 A：新建 `governance.mdx`（或同名） | 功能安全/EMC/认证流程 导论 |
| 74–76 | `overview` 或 新页 | 测试：HIL、环境试验、FMEA 引言 |
| 77–78 | `en` 镜像 | 对应英文梗概（≥500 词或等价结构） |
| 79–80 | `_meta.js` 两侧 | 纳入侧栏；build |

*若不愿新增顶层文件，可将内容并入 `overview` 多级标题，但须在 79 轮前在 overview 内设锚点便于搜索。*

---

## 第 81–90 轮：一致性与站内体验

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 81–83 | 全 `zh/hardware` front matter | `title`/`description` 审计清单（表格输出到 commit message 或 `spec/` 笔记） |
| 84–86 | 全 `en/hardware` | 同上 |
| 87–88 | 文内链接 | 相对路径与 `/zh` `/en` 混用统一为一种风格（与项目惯例一致） |
| 89–90 | `pnpm run build` + 抽检 | 移动端目录三级展开可读性（仅靠标题长度调节） |

---

## 第 91–100 轮：收官与维护包

| 轮次 | 聚焦 | 本轮交付 |
|------|------|----------|
| 91–93 | README 或 `spec/nextra-sidebar-lessons.md` | 补一段「hardware 内容维护约定」+ 中英同步节奏 |
| 94–96 | 死链抽查 | 站外链接 HEAD 或手动浏览器验证记录 |
| 97–98 | 路线图数据 | `HARDWARE_ROADMAP` 与站内文标题对齐（仅改 data 文案） |
| 99 | 全文检索 sample | Pagefind 搜「飞控」「ISO」「CAN」命中预期页 |
| 100 | 发布说明 | 本轮仅写 `CHANGELOG` 式摘要（可置于 `spec/`）：100 轮后硬件模块状态 |

---

## FTTM 主指令（复制使用）

将下列整段交给 FTTM（或等价批处理智能体），并把 **`CURRENT_ROUND`** 替换为 1～100 的整数；计划正文路径固定为仓库内 `web/spec/fttm-hardware-100-iterations.md`。

```text
你是 FTTM（Follow-The-Task-Model）执行器。请在仓库 learn-code 的 web/ 子项目中工作。

【权威计划】
打开并严格遵守：web/spec/fttm-hardware-100-iterations.md
其中按「第 1–10 轮」「第 11–20 轮」…划分阶段目标与轮次建议表。

【当前迭代】
CURRENT_ROUND = <在此填写 1 到 100 的整数>

【本轮任务】
1. 根据 CURRENT_ROUND 落到对应区间（例：37 属于第 31–35 轮对应的汽车阶段，优先完成该阶段表格中与 37 最匹配的「聚焦」行；若表中以范围写「34–35」，则第 37 轮顺延到表格下一非空交付或同阶段未完成的下一文件）。
2. 只修改 hardware 相关内容：content/en/hardware/**、content/zh/hardware/**；除非构建失败需要且不扩大范围。
3. 单轮尽量小步：优先完成「本轮交付」中的一条，可附带修复本轮触及文件中的明显错别字。
4. 结束前在 web/ 目录执行：`pnpm run build`，必须成功。
5. 输出简短「本轮摘要」：列出改动文件路径、完成度自评（0–100%）、下一轮建议起始点。

【不要】
- 不要批量重写无关模块（timeline、datasets 等）。
- 不要升级 major 依赖或删除 pnpm patch。
- 不要在一轮内新增超过 5 个新 MDX（除非阶段 71–80 明确要求新建工程/合规页且拆多轮）。

开始执行 CURRENT_ROUND。
```

---

## 轮次与阶段速查表

| 轮次区间 | 主题 |
|----------|------|
| 1–10 | 英文基础层六章 + 导读 |
| 11–20 | 英文进阶层、总览、整机三总览 |
| 21–30 | 英文无人机三级 |
| 31–40 | 英文汽车 + 机器人 |
| 41–50 | 中文基础层加厚 |
| 51–60 | 中文整机加厚 |
| 61–70 | 进阶层对照与路线图文案 |
| 71–80 | 工程/合规/测试入口（中英） |
| 81–90 | meta、链接、一致性 |
| 91–100 | 文档、死链、路线图对齐、验收 |

---

*本计划只约束 hardware 内容迭代；Nextra 补丁与侧栏行为以 `spec/nextra-sidebar-lessons.md` 为准。*
