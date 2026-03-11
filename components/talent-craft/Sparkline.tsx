import React from "react"

type SparklineProps = {
  values: number[]
  width?: number
  height?: number
  stroke?: string
  label?: string
  showDelta?: boolean
}

export default function Sparkline({ values, width = 80, height = 24, stroke = "#06b6d4", label, showDelta = true }: SparklineProps) {
  if (!values || values.length === 0) return null

  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width
      const y = height - ((v - min) / range) * height
      return `${x},${y}`
    })
    .join(" ")

  // Compute simple delta (last vs first)
  const first = values[0]
  const last = values[values.length - 1]
  const delta = last - first
  const deltaPercent = first !== 0 ? (delta / Math.abs(first)) * 100 : 0
  const deltaLabel = `${deltaPercent >= 0 ? "+" : ""}${Math.round(deltaPercent)}%`
  const deltaClass = delta > 0 ? "text-emerald-500" : delta < 0 ? "text-rose-500" : "text-gray-500"

  return (
    <div className="inline-flex items-center gap-2 text-xs">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="inline-block align-middle" aria-hidden="true">
        <polyline fill="none" stroke={stroke} strokeWidth={2} points={points} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="flex flex-col leading-none">
        {showDelta && (
          <div className={`font-medium ${deltaClass}`} aria-hidden="false">{deltaLabel}</div>
        )}
        {label ? (
          <div className="text-xxs text-gray-600 dark:text-slate-300">{label}</div>
        ) : null}
        <span className="sr-only">{label ? `${label} trend ${deltaLabel}` : `Trend ${deltaLabel}`}</span>
      </div>
    </div>
  )
}
