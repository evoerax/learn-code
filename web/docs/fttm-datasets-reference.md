# FTTM 参考：AI 数据集（datasets）版块

本文档供 **fttm** 在扩展 `web/content/*/datasets` 时对照。数据源最初来自独立仓库 `learn-ai/datasets`，已同步到本站 **`web/content/zh/datasets`**（全文）；英文 **`web/content/en/datasets`** 目前为 **总览 + 各领域占位 hub**，迭代目标为与中文 **slug 镜像**、内容英文化。

---

## 1. 层级

```
content/{en,zh}/datasets/
├── _meta.js                 → 顶层侧栏：总览 + 10 个领域文件夹
├── overview.mdx (en) / overview.mdx (zh)
├── vision/                  → 计算机视觉
│   ├── _meta.js             → 该领域下各数据集条目顺序与标题
│   └── <slug>.md            → 单数据集正文（中文已为 .md；英文待补 .mdx）
├── nlp/
├── multimodal/
├── speech/
├── recommendation/
├── robotics/
├── medical/
├── code/
├── math/
└── other/
```

英文各领域当前仅有 **`index.mdx` 占位**，尚无逐数据集英文文件。

---

## 2. 领域 slug（勿改）

`vision` · `nlp` · `multimodal` · `speech` · `recommendation` · `robotics` · `medical` · `code` · `math` · `other`

新增领域：同时改 **en/zh 的 `datasets/_meta.js`**，并新建对应子目录。

---

## 3. 中文条目维护

- 单页路径示例：`/zh/datasets/multimodal/coco`
- **`overview.mdx` 内表格链接** 仍可能使用 `./vision/foo.md` 相对路径；若构建报错，改为站点绝对路径 `/zh/datasets/vision/foo`。
- **Frontmatter**：新页可加 `title` / `description`；`description` 含引号或冒号时用 YAML 单引号包住整块字符串。
- **MDX 注意**：正文里避免裸写 `<5`、`<1%` 等（会被当 JSX），写成 `小于 5` 或 `{"<"}5`。
- 更新 **`该领域/_meta.js`**：新增数据集文件时追加键（与文件名无 `.md` 一致），`title` 优先与正文首行 `# 标题` 一致。

---

## 4. 英文迭代约定（FTTM 主战场）

每轮可选：

1. 选一领域，将 **若干** 中文 `.md` 译为/重写为 **`en/datasets/<domain>/<slug>.mdx`**（与中文 **同名 slug**）。
2. 更新 **`en/datasets/<domain>/_meta.js`**，加入新键（与 **zh** 同域 `_meta.js` 键集合 eventual 对齐）。
3. 领域 **`index.mdx`** 可逐步改为「本领域数据集列表 + 链接」，替代纯占位。

验证：**`cd web && pnpm run build`**。

---

## 5. 与站点的关系

- 顶层 **`content/en|zh/_meta.js`** 已注册 **`datasets`**（EN: AI Datasets；ZH: AI 数据集）。
- 可与 **[AI models]**、[AI software] 总览互链。

---

## 6. 可选结束标记

自动化外层可识别单行：**`FTTM_COMPLETE`**

---

## 7. 一句话目标（可贴进 fttm）

> Read `web/docs/fttm-datasets-reference.md`. Extend `web/content/en/datasets` so dataset pages mirror Chinese slugs under `web/content/zh/datasets`; keep `_meta.js` in sync per folder; fix any MDX/YAML issues; run `cd web && pnpm run build` after each batch; print `FTTM_COMPLETE` when done for this run.
