'use client'

import React, { useState } from 'react'

interface Model {
  name: string
  date: string
  description?: string
}

interface Vendor {
  name: string
  nameZh: string
  color: string
  models: Model[]
}

// 完整的厂商数据
const vendors: Vendor[] = [
  {
    name: 'OpenAI',
    nameZh: 'OpenAI',
    color: '#10a37f',
    models: [
      { name: 'GPT-4', date: '2023-02-14', description: 'Multimodal reasoning breakthrough' },
      { name: 'GPT-4 Turbo', date: '2023-05-13' },
      { name: 'GPT-4o', date: '2023-08-15' },
      { name: 'GPT-4o mini', date: '2023-11-06' },
      { name: 'o1-preview', date: '2024-02-15' },
      { name: 'o1', date: '2024-05-13' },
      { name: 'o1-pro', date: '2024-08-12' },
      { name: 'o3', date: '2024-08-12' },
      { name: 'o3-mini', date: '2024-08-12' },
      { name: 'GPT-4.5', date: '2024-11-07' },
      { name: 'GPT-4.1', date: '2025-02-27' },
      { name: 'o3-pro', date: '2025-02-27' },
      { name: 'o4-mini', date: '2025-02-27' },
      { name: 'GPT-5', date: '2025-08-08' },
    ],
  },
  {
    name: 'Google',
    nameZh: '谷歌',
    color: '#ea4335',
    models: [
      { name: 'Gemini 1.0 Pro', date: '2023-05-10' },
      { name: 'Gemini 1.0 Ultra', date: '2023-08-30' },
      { name: 'Gemini 1.5 Pro', date: '2023-11-02' },
      { name: 'Gemini 1.5 Flash', date: '2024-02-15' },
      { name: 'Gemini 1.5 Ultra', date: '2024-05-25' },
      { name: 'Gemini 2.0 Flash', date: '2024-08-01' },
      { name: 'Gemini 2.0 Pro', date: '2024-08-01' },
      { name: 'Gemini 2.5 Flash', date: '2024-11-05' },
      { name: 'Gemini 2.5 Pro', date: '2024-11-05' },
      { name: 'Gemini 2.5 Flash Lite', date: '2024-11-05' },
    ],
  },
  {
    name: 'Anthropic',
    nameZh: 'Anthropic',
    color: '#d4a574',
    models: [
      { name: 'Claude', date: '2023-02-15' },
      { name: 'Claude Instant', date: '2023-05-15' },
      { name: 'Claude 2', date: '2023-08-15' },
      { name: 'Claude 2.1', date: '2023-11-10' },
      { name: 'Claude Opus 3', date: '2024-02-15' },
      { name: 'Claude Sonnet 3', date: '2024-05-15' },
      { name: 'Claude Haiku 3', date: '2024-05-15' },
      { name: 'Claude 3.5 Sonnet', date: '2024-06-20' },
      { name: 'Claude 4', date: '2024-10-15' },
    ],
  },
  {
    name: 'Meta',
    nameZh: 'Meta',
    color: '#0081fb',
    models: [
      { name: 'LLaMA', date: '2023-02-15' },
      { name: 'LLaMA 2', date: '2023-06-18' },
      { name: 'LLaMA 3', date: '2023-08-15' },
      { name: 'LLaMA 3.1', date: '2023-11-10' },
      { name: 'LLaMA 3.2', date: '2024-02-15' },
      { name: 'LLaMA 3.3', date: '2024-05-15' },
      { name: 'LLaMA 4', date: '2024-08-15' },
    ],
  },
  {
    name: 'Mistral',
    nameZh: 'Mistral AI',
    color: '#9b59b6',
    models: [
      { name: 'Mistral 7B', date: '2023-05-10' },
      { name: 'Mistral Medium', date: '2023-08-15' },
      { name: 'Mistral 8x7B', date: '2023-08-15' },
      { name: 'Mistral Large', date: '2023-11-10' },
      { name: 'Mistral 8x22B', date: '2024-02-15' },
      { name: 'Mistral Large 2', date: '2024-05-15' },
      { name: 'Mistral Small 3', date: '2024-08-15' },
      { name: 'Mistral Small 3.1', date: '2024-08-15' },
      { name: 'Mistral Medium 3', date: '2024-11-10' },
    ],
  },
  {
    name: 'DeepSeek',
    nameZh: '深度求索',
    color: '#ff4444',
    models: [
      { name: 'DeepSeek V2', date: '2023-02-15' },
      { name: 'DeepSeek LLM V1', date: '2023-05-15' },
      { name: 'DeepSeek Coder V1', date: '2023-08-15' },
      { name: 'DeepSeek Coder V2', date: '2023-11-10' },
      { name: 'DeepSeek V2.5', date: '2024-02-15' },
      { name: 'DeepSeek R1', date: '2024-05-15' },
      { name: 'DeepSeek V3', date: '2024-08-15' },
      { name: 'DeepSeek R2', date: '2024-11-10' },
    ],
  },
  {
    name: 'Alibaba',
    nameZh: '阿里',
    color: '#ff6600',
    models: [
      { name: 'Qwen 7B', date: '2023-02-15' },
      { name: 'Qwen 14B', date: '2023-05-15' },
      { name: 'Qwen 1.8B', date: '2023-08-15' },
      { name: 'Qwen 1.5', date: '2023-11-10' },
      { name: 'Qwen 2', date: '2024-02-15' },
      { name: 'Qwen 2.5', date: '2024-05-15' },
      { name: 'Qwen 2.5 turbo', date: '2024-08-15' },
      { name: 'Qwen 2.5 max', date: '2024-11-10' },
      { name: 'Qwen 3', date: '2025-02-15' },
    ],
  },
  {
    name: 'Baidu',
    nameZh: '百度',
    color: '#2932e1',
    models: [
      { name: 'ERNIE 3.5', date: '2023-02-15' },
      { name: 'ERNIE 4', date: '2023-05-15' },
      { name: 'ERNIE 4 Turbo', date: '2023-08-15' },
      { name: 'ERNIE 4.5', date: '2024-02-15' },
      { name: 'ERNIE 4.5 Turbo', date: '2024-05-15' },
      { name: 'ERNIE X1', date: '2024-05-15' },
      { name: 'ERNIE X1 Turbo', date: '2024-05-15' },
      { name: 'ERNIE 5', date: '2024-11-10' },
    ],
  },
  {
    name: 'xAI',
    nameZh: 'xAI',
    color: '#00b4d8',
    models: [
      { name: 'Grok-1', date: '2023-05-15' },
      { name: 'Grok-1.5', date: '2023-08-15' },
      { name: 'Grok-2', date: '2024-02-15' },
      { name: 'Grok-3', date: '2024-05-15' },
      { name: 'Grok-4', date: '2024-11-10' },
    ],
  },
]

// 时间范围：2022年10月 到 2026年6月
const START_DATE = new Date('2022-10-01').getTime()
const END_DATE = new Date('2026-06-30').getTime()

const formatDate = (dateStr: string, locale: string = 'en') => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', { month: 'short', year: 'numeric' })
}

const getPosition = (dateStr: string) => {
  const date = new Date(dateStr).getTime()
  return ((date - START_DATE) / (END_DATE - START_DATE)) * 100
}

const getYearPositions = () => {
  const years = [2023, 2024, 2025]
  return years.map(year => ({
    year,
    position: getPosition(`${year}-06-15`),
  }))
}

const getMonthPositions = () => {
  const months = []
  for (let year = 2023; year <= 2025; year++) {
    for (let month = 1; month <= 12; month++) {
      if (year === 2025 && month > 12) break
      months.push({
        date: `${year}-${String(month).padStart(2, '0')}-15`,
        position: getPosition(`${year}-${String(month).padStart(2, '0')}-15`),
      })
    }
  }
  return months
}

interface TimelineProps {
  locale?: string
}

export default function Timeline({ locale = 'en' }: TimelineProps) {
  const [hoveredModel, setHoveredModel] = useState<{ model: Model; vendor: Vendor; x: number; y: number } | null>(null)
  const yearPositions = getYearPositions()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-[3200px] mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {locale === 'zh' ? 'AI 时间线' : 'AI Timeline'}
          </h1>
          <p className="text-slate-600 text-lg">
            {locale === 'zh' ? '全球主要 AI 厂商模型发布历程 (2023-2025)' : 'Major AI Model Releases by Company (2023-2025)'}
          </p>
        </div>

        {/* 图例 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {vendors.map((vendor) => (
            <div key={vendor.name} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: vendor.color }}
              />
              <span className="text-sm font-medium text-slate-700">
                {locale === 'zh' ? vendor.nameZh : vendor.name}
              </span>
            </div>
          ))}
        </div>

        {/* 时间线容器 */}
        <div className="relative bg-white rounded-2xl shadow-lg p-12 overflow-x-auto">
          {/* 时间轴背景 */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-200 -translate-y-1/2" />

          {/* 顶部时间标签 */}
          <div className="relative h-8 mb-4">
            {yearPositions.map(({ year, position }) => (
              <div
                key={year}
                className="absolute text-sm font-semibold text-slate-500"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              >
                {year}
              </div>
            ))}
          </div>

          {/* 厂商行 */}
          <div className="space-y-12">
            {vendors.map((vendor) => (
              <div key={vendor.name} className="relative">
                {/* 厂商标签 */}
                <div
                  className="absolute left-0 text-sm font-bold whitespace-nowrap"
                  style={{ color: vendor.color }}
                >
                  {locale === 'zh' ? vendor.nameZh : vendor.name}
                </div>

                {/* 模型线区域 */}
                <div className="ml-36 mr-8 relative h-12">
                  {/* 水平连接线 */}
                  <div
                    className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 opacity-30"
                    style={{ backgroundColor: vendor.color }}
                  />

                  {/* 模型节点 */}
                  {vendor.models.map((model, idx) => {
                    const position = getPosition(model.date)
                    const isAbove = idx % 2 === 0
                    return (
                      <div
                        key={idx}
                        className="absolute top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-150 hover:z-50"
                        style={{ left: `${position}%` }}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect()
                          setHoveredModel({
                            model,
                            vendor,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          })
                        }}
                        onMouseLeave={() => setHoveredModel(null)}
                      >
                        {/* 模型名称小字 - 交替上下 */}
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium px-1.5 py-0.5 rounded ${isAbove ? 'bottom-full mb-3' : 'top-full mt-3'} bg-white/90 text-slate-700 shadow-sm`}
                          style={{ color: vendor.color }}
                        >
                          {model.name}
                        </div>

                        {/* 节点圆点 */}
                        <div
                          className="w-3 h-3 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: vendor.color }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* 底部时间刻度 */}
          <div className="relative h-8 mt-4">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => {
              const date = new Date(START_DATE + (END_DATE - START_DATE) * pct / 100)
              const showLabel = date.getMonth() === 0
              return (
                <div
                  key={pct}
                  className="absolute text-xs text-slate-400"
                  style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
                >
                  {showLabel && date.getFullYear()}
                </div>
              )
            })}
          </div>
        </div>

        {/* Hover 卡片 */}
        {hoveredModel && (
          <div
            className="fixed z-50 px-4 py-3 bg-slate-800 text-white rounded-lg shadow-xl pointer-events-none"
            style={{
              left: hoveredModel.x,
              top: hoveredModel.y - 10,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="font-bold text-lg" style={{ color: hoveredModel.vendor.color }}>
              {hoveredModel.model.name}
            </div>
            <div className="text-sm text-slate-300">
              {(locale === 'zh' ? hoveredModel.vendor.nameZh : hoveredModel.vendor.name)} • {formatDate(hoveredModel.model.date, locale)}
            </div>
            {hoveredModel.model.description && (
              <div className="text-xs text-slate-400 mt-1">
                {hoveredModel.model.description}
              </div>
            )}
          </div>
        )}

        {/* 底部说明 */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>{locale === 'zh' ? '悬停节点查看模型详情 • 水平滚动以查看完整时间线' : 'Hover over nodes to see model details • Scroll horizontally to explore the full timeline'}</p>
        </div>
      </div>
    </div>
  )
}
