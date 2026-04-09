# Nextra 侧栏与补丁：本次踩坑与约定

本文记录本站（Next.js 16 + Nextra 4.6 + `nextra-theme-docs`）在**全站侧栏、分隔条、模块隔离**上的问题根因与修复方式，避免重复踩坑。

---

## 1. `_meta` 报「key 找不到页面」

**现象**：`Validation of "_meta" file has failed. The field key "index" ... refers to a page that cannot be found`。

**常见原因**：

- `_meta.js` 里写了 `index`，但**没有**对应的 `index.mdx`，也**没有**与文件夹同名的**同级** `xxx.mdx` 充当该路径的入口（Nextra 会把 `content/foo/bar.mdx` 与 `content/foo/bar/*` 合并到同一路由下，虚拟出 `name: "index"` 的子项）。
- 例：`content/zh/timeline/ais/_meta.js` 曾声明 `index`，但目录内只有各语言页；正确做法是依赖同级 `timeline/ais.mdx` 作为 `/timeline/ais` 的入口，并从 `_meta` 中**去掉多余的 `index`**，避免与「虚拟 index」对不上。

**处置**：对齐「文件结构 ↔ `_meta` 键」；拿不准时运行 `pnpm run build` 并让报错指向具体 `_meta` 路径。

---

## 2. 分隔条（`type: "separator"`）写了但不显示

**现象**：根目录 `_meta.js` 里配置了「时间线与语言」等分组标题，侧栏里却看不到。

**根因**（Nextra `dist/client/normalize-pages.js`）：

1. `extendMeta` 未带出 `type` 时，默认值会把条目的 `type` 变成 `"doc"`，**覆盖** page map 里已有的 `type: "separator"`。
2. 侧栏收集的是 `item`，但原先只给 `docsItem` 赋了 `isUnderCurrentDocsTree`；分隔条走的是 `docsDirectories.push(item)`，最后又执行 `filter(item => item.isUnderCurrentDocsTree)`，**`item` 未打标则被过滤掉**。

**修复**（已通过 `pnpm patch` 打在 `nextra@4.6.1` 上）：

- `type` 使用：`metaType ?? currentItem.type ?? "doc"`，保留 page map 自带的 `separator`。
- 对当前循环条目统一：`item.isUnderCurrentDocsTree = underCurrentDocsRoot`（与 `docsItem` 一致）。

补丁文件：`web/patches/nextra@4.6.1.patch`（并在 `web/pnpm-workspace.yaml` 的 `patchedDependencies` 中注册）。

---

## 3. 全站导航塞进每个模块 vs 顶栏只剩一个模块

**现象 A**：进入某模块后，侧栏仍出现整站分组与其它模块条目，侧栏像「全局目录」。

**现象 B**：为治 A，若对整个 `normalizePages` 做**递归收窄**（只传入当前模块那一支 `list`），侧栏会变干净，但 **`topLevelNavbarItems` 也只剩当前模块** —— 顶栏无法在不同大模块间切换，体验不对。

**根因**：

- Nextra 默认把各顶级 `page` 的侧栏片段**扁平**拼进 `docsDirectories`，于是侧栏臃肿。
- `topLevelNavbarItems` 与 `docsDirectories` 来自**同一次** `normalizePages` 结果；递归收窄等于让这一次计算只见一棵树，顶栏与侧栏会一起缩进去。

**修复**（`patches/nextra@4.6.1.patch` 当前策略）：

1. **始终跑完整**的 `normalizePages`（不再为侧栏做 early-return 递归），保证 **`topLevelNavbarItems` 恒为全站顶级 `type: 'page'` 列表**，顶栏可任意切换模块。
2. 仅在**最外层**（`docsRoot === ""`）、且当前路由不是 `/` 时，对 **`docsDirectories` 结果**按路径**第一段**再过滤：只保留 `route` / `href` 属于该段的条目；**去掉无路由的根级 `separator`**，避免别的模块分组标题挂在当前模块下。
3. **首页** `/` 不对 `docsDirectories` 做上述过滤，保留整站侧栏。

**约定**：「模块」= URL 第一段，与 `content/{locale}/<segment>/` 顶级文件夹同名。新增顶级模块时保持即可。

---

## 4. Turbopack / 缓存与「stale」报错

**现象**：本地 dev 偶发 `_meta` 与磁盘不一致、或 chunk 哈希与当前内容不符。

**处置**：改完 `content` 或 `_meta` 后执行 `rm -rf web/.next` 再 `pnpm run dev`；仍以 `pnpm run build` 为最终校验。

---

## 5. Node 警告：`--localstorage-file`

**现象**：终端大量 `Warning: '--localstorage-file' was provided without a valid path`。

**说明**：来自 **Node 启动参数**（常为环境里的 `NODE_OPTIONS` 或 IDE 注入），与业务代码、Nextra 无关。可在终端 `echo $NODE_OPTIONS` 排查；一般可忽略，或去掉无效参数以消除噪音。

---

## 6. 维护清单（给后续改文档的人）

| 动作 | 建议 |
|------|------|
| 升级 `nextra` 小版本 | 重新对比 `patches/nextra@4.6.1.patch` 是否仍适用，必要时 `pnpm patch` 重生补丁 |
| 新增顶级内容分区 | 确保 `content/{locale}/<segment>/` 与 URL 第一段一致，侧栏收窄逻辑才能命中 |
| 根 `_meta` 使用 `separator` | 确认补丁仍在；升级 Nextra 后优先跑一遍侧栏与 build |
| 歧义路由（同级 `foo.mdx` + `foo/index.mdx`） | 避免同键抢占 `pages[key]`，只保留一种入口方式 |

---

*最后更新：对齐当前仓库中 `web/patches/nextra@4.6.1.patch` 与 `normalize-pages` 行为。*
