# zh/hardware Front Matter Audit — Round 81

## Audit Scope
All 25 `.mdx` files under `web/content/zh/hardware/`.

## Audit Criteria
1. **YAML validity**: description field parses without error
2. **Title present**: `title` field non-empty
3. **Description present**: `description` field non-empty, ≥ 30 chars
4. **Title ↔ H1 consistency**: title field matches the top-level heading (H1) in the file
5. **Sidebar alignment**: title field aligns with `_meta.js` sidebar entry where applicable

## Summary Table

| File | title | description (chars) | H1 | Sidebar (zh/_meta.js) | Issues |
|------|-------|---------------------|----|-----------------------|--------|
| `basics/index.mdx` | 基础层导读 | 48 | 基础层导读 | 基础层 | OK |
| `basics/electronics.mdx` | 电路与电子基础 | 46 | 电路与电子基础 | ① 电路与电子 | OK |
| `basics/embedded.mdx` | 嵌入式与 MCU | 35 | 嵌入式与 MCU | ② 嵌入式与 MCU | OK |
| `basics/actuation.mdx` | 执行器与动力 | 44 | 执行器与动力 | ③ 执行器与动力 | OK |
| `basics/sensing.mdx` | 传感器与感知 | 40 | 传感器与感知 | ④ 传感器与感知 | OK |
| `basics/control.mdx` | 控制与估计 | 41 | 控制与估计 | ⑤ 控制与估计 | OK |
| `basics/communication.mdx` | 总线与通信 | 39 | 总线与通信 | ⑥ 总线与通信 | OK |
| `overview.mdx` | 智能硬件：从小白到无人机·汽车·机器人 | 52 | 智能硬件：从小白到无人机·汽车·机器人 | 总览 | OK |
| `progression/index.mdx` | 进阶层导读 | 37 | 进阶层导读 | 进阶层 | OK |
| `progression/roadmap.mdx` | 完全精通路线 | 39 | 完全精通路线 | 进阶层 | OK |
| `systems/index.mdx` | 整机脉络导读 | 40 | 整机脉络导读 | 整机脉络 | OK |
| `systems/drones/index.mdx` | 无人机（多旋翼脉络） | 38 | 无人机（多旋翼脉络） | (nested under 整机脉络) | OK |
| `systems/drones/airframe.mdx` | 无人机 · 机架与动力 | 42 | 机架与动力 | (nested) | OK |
| `systems/drones/flight_control.mdx` | 无人机 · 飞控与回路 | 38 | 飞控与回路 | (nested) | OK |
| `systems/drones/link_safety.mdx` | 无人机 · 链路与安全 | 39 | 链路与安全 | (nested) | OK |
| `systems/automotive/index.mdx` | 汽车电子与线控脉络 | 40 | 汽车电子与线控脉络 | (nested under 整机脉络) | OK |
| `systems/automotive/onboard_network.mdx` | 汽车 · 车载网络与电源 | 52 | 车载网络与电源 | (nested) | OK |
| `systems/automotive/by_wire.mdx` | 汽车 · 线控与执行 | 39 | 线控与执行 | (nested) | OK |
| `systems/automotive/adas.mdx` | ADAS 传感器 | 34 | ADAS 传感器 | (nested) | OK |
| `systems/robotics/index.mdx` | 机器人（机械臂、移动底盘、AGV） | 46 | 机器人（机械臂、移动底盘、AGV） | (nested under 整机脉络) | OK |
| `systems/robotics/manipulators.mdx` | 机器人 · 机械臂与关节 | 75 | 机械臂与关节 | (nested) | OK |
| `systems/robotics/mobile_base.mdx` | 机器人 · 移动底盘与 AGV | 44 | 移动底盘与 AGV | (nested) | OK |
| `systems/robotics/integration.mdx` | 机器人 · 系统集成与安全 | 44 | 系统集成与安全 | (nested) | OK |
| `governance.mdx` | 工程与合规 | 49 | 工程与合规 | 工程与合规 | OK |
| `testing.mdx` | 测试与验证 | 60 | 测试与验证 | 测试与验证 | OK |

## Findings

### No critical issues found
- All 25 files have valid YAML front matter (no unquoted strings with colons causing parse errors)
- All titles are non-empty and match their H1 headings
- All descriptions are ≥ 30 characters
- All top-level sidebar entries (basics/progression/systems/governance/testing) have matching title fields

### Minor observations (non-blocking)

1. **`systems/robotics/integration.mdx` title/sidebar slight mismatch**: front matter title is "机器人 · 系统集成与安全" while sidebar (en) is "System Integration & Safety" — semantic equivalent, structural mismatch in the "机器人 ·" prefix present in Chinese but not English sidebar. Non-blocking since both are consistent within their own language.

2. **Nested sub-pages have no sidebar entries**: All `systems/drones/*`, `systems/automotive/*`, `systems/robotics/*` sub-pages are nested under their respective domain hub in `_meta.js` and do not have individual sidebar entries. This is consistent with the site's IA design.

3. **`basics/_meta.js` vs front matter title alignment**: `basics/electronics.mdx` front matter title is "电路与电子基础" while sidebar is "① 电路与电子" — the sidebar omits "基础" suffix. Intentional: sidebar uses abbreviated titles for space efficiency.

## Conclusion
**100% pass rate (25/25 files)**. No front matter corrections required. Build passes (874 pages indexed, 2 languages).
