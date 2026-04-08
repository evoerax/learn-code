# FTTM 参考：科技巨头（Companies）内容结构

本文档供 **fttm / 自主编码循环** 在扩展或维护「科技巨头」版块时对照。仓库根目录下的 **`web/`** 为 Next.js + Nextra 站点；内容在 **`web/content/{en,zh}/companies/`**。

---

## 1. 层级关系（你要记住的心智模型）

```
companies（版块）
├── overview.mdx          → 全站总览（中英各一）
└── <region>/             → 国家/地区（如 us、china）
    ├── index.mdx         → 该地区索引页
    ├── _meta.js          → 侧栏：该地区下各公司顺序与标题
    ├── company-a.mdx     → 公司 A 独立页面
    ├── company-b.mdx     → 公司 B 独立页面
    └── …
```

- **第一层**：`companies` 在语言包内，与 `overview`、各 `<region>` 并列。
- **第二层**：每个 **`<region>`** 是一个子目录（小写英文 slug），不是单文件。
- **第三层**：该地区下的 **每家公司一篇 MDX**，文件名 = URL slug。

---

## 2. 路径与镜像规则

| 用途 | 英文内容 | 中文内容 |
|------|-----------|-----------|
| 版块侧栏与分区 | `content/en/companies/_meta.js` | `content/zh/companies/_meta.js` |
| 总览 | `content/en/companies/overview.mdx` | `content/zh/companies/overview.mdx` |
| 某国/区 | `content/en/companies/<region>/…` | `content/zh/companies/<region>/…` |

**每一轮迭代若改英文，应同步维护中文对应文件**（或可单独约定只做一种语言；默认 **中英对称**）。

---

## 3. 已固定的地区 slug（勿随意改名）

与 `companies/_meta.js` 保持一致：

`us`、`china`、`japan`、`korea`、`europe`、`india`、`sea`、`israel`、`singapore`、`canada`

新增「国家/地区」时：同时改 **en/zh 的 `companies/_meta.js`**，并新建对应目录与 `index.mdx`、`_meta.js`。

---

## 4. `_meta.js` 约定

### 4.1 版块级 `content/{lang}/companies/_meta.js`

- `overview` 一项对应总览页。
- 使用 `###` 分隔符占位时格式：`{ type: 'separator', title: '…' }`（英文与中文 title 不同，见现网文件）。

### 4.2 地区级 `content/{lang}/companies/<region>/_meta.js`

- 必须包含 **`index`**，指向该地区索引页。
- 其余键为 **不带 `.mdx` 的文件名**（与 MDX 文件名一致）。
- **`meta` 禁止作为键名**（会与 Nextra 的 `metadata` 冲突）。历史用法：Meta 公司页面文件名为 `meta-platform.mdx`，键为 `'meta-platform'`。

### 4.3 顺序

侧栏顺序 = `_meta.js` 中对象键顺序。新增公司时：**同时** 在该地区 `_meta.js` 里加一项。

---

## 5. MDX  frontmatter 与正文

### 5.1 公司页最小模板（占位 → 可逐步写实质内容）

```mdx
---
title: 显示名称
description: "TODO: 国家/地区 — 时间线与要点（若含冒号或特殊字符请用引号包起来）"
---

# 显示名称

> **Placeholder** — 待补充：时间线、产品线、战略节点、引用。

返回 **[地区索引](/en/companies/<region>)** · **[总览](/en/companies/overview)**
```

- 中文页把链接中的 `/en/` 改为 `/zh/`。
- **`description` 若包含 `TODO:` 或与 YAML 冲突的字符，必须用双引号** ，避免构建时报 YAML 解析错误。

### 5.2 地区 `index.mdx`

- 用 `#` 表示地区标题，用 `##` 列出各公司并链到子页面（与 `overview.mdx` 中的写作约定一致）。

---

## 6. 新增一家公司时的检查清单（FTTM 每步可做一件事）

1. 选定 `<region>` 与公司 slug（小写、连字符 `kebab-case`，与现网风格一致）。
2. 新建 `en/.../<region>/<slug>.mdx` 与 `zh/.../<slug>.mdx`（内容语言分别匹配站点语言）。
3. 更新 `en/.../<region>/_meta.js` 与 `zh/.../<region>/_meta.js` 中的键与 `title`。
4. 在两地 `index.mdx` 中增加指向该公司的链接与一句定位（若适用）。
5. 在 **`web/`** 下执行：`pnpm run build`，确保无报错。

---

## 7. 验证命令

```bash
cd web && pnpm run build
```

---

## 8. 给编排器的结束约定（可选）

若外层脚本需要检测「本任务已完成」，可在最后一轮输出单独一行：

`FTTM_COMPLETE`

（与仓库内业务无关，仅作自动化约定时使用。）

---

## 9. 一句话目标（可贴进 fttm 引号里）

> 在 `web/content/en/companies` 与 `web/content/zh/companies` 下，按 **地区目录 → 公司独立 MDX** 的结构维护科技巨头内容；严格遵守 **`_meta.js` 键与文件名一致、禁用 `meta` 键、`description` 必要时加引号**；每轮小步修改并 `cd web && pnpm run build` 通过。
