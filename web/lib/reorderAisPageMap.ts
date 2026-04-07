/** Nextra merges `_meta.js` with numeric folder keys sorting before `overview` in `Object.keys`. Re-order `ais` sidebar: 总览 first, then years newest-first. */
const AIS_TOP = ['overview'] as const

function reorderAisFolderChildren(children: unknown[]): unknown[] {
    const arr = children as Record<string, unknown>[]
    const head = arr[0]
    if (!head || typeof head !== 'object' || !('data' in head) || 'name' in head) {
        return children
    }
    const rest = arr.slice(1) as { name: string }[]
    const names = new Set(rest.map((i) => i.name))
    if (!names.has('overview')) {
        return children
    }

    const byName = new Map(rest.map((i) => [i.name, i]))
    const ordered: typeof rest = []
    for (const key of AIS_TOP) {
        const item = byName.get(key)
        if (item) ordered.push(item)
    }
    const years = rest
        .filter((i) => /^\d{4}$/.test(String(i.name)))
        .sort((a, b) => Number(b.name) - Number(a.name))
    ordered.push(...years)
    const placed = new Set(ordered.map((i) => i.name))
    for (const item of rest) {
        if (!placed.has(item.name)) ordered.push(item)
    }
    return [head, ...ordered]
}

function walkPageMapItem(item: unknown): unknown {
    if (!item || typeof item !== 'object') return item
    const node = item as Record<string, unknown>
    if ('data' in node && !('name' in node)) {
        return item
    }
    const children = node.children
    if (!Array.isArray(children)) return item

    const nextChildren = children.map(walkPageMapItem)
    const name = node.name
    if (name === 'ais') {
        return { ...node, children: reorderAisFolderChildren(nextChildren as unknown[]) }
    }
    return { ...node, children: nextChildren }
}

export function reorderAisPageMap(pageMap: unknown[]): unknown[] {
    if (!Array.isArray(pageMap) || pageMap.length === 0) return pageMap
    const [meta, ...rest] = pageMap
    const metaObj = meta as Record<string, unknown> | undefined
    if (!metaObj || typeof metaObj !== 'object' || !('data' in metaObj)) {
        return pageMap
    }
    return [meta, ...rest.map((item) => walkPageMapItem(item))]
}
