"use client"
import React, { useEffect, useRef } from "react"

type ImpactDonutProps = {
  label: string
  value: string | number
  size?: number
  strokeWidth?: number
  className?: string
}

export default function ImpactDonut({
  label,
  value,
  size = 72,
  strokeWidth = 8,
  className = "",
}: ImpactDonutProps) {
  const numeric =
    typeof value === "number" || (typeof value === "string" && /\d/.test(value))
  let percent = 0

  if (typeof value === "number") percent = Math.max(0, Math.min(100, value))
  else if (typeof value === "string") {
    const m = value.match(/([0-9]+(?:\.[0-9]+)?)/)
    if (m) percent = Math.max(0, Math.min(100, parseFloat(m[1])))
  }

  const r = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * r
  const dash = (percent / 100) * circumference

  if (!numeric || isNaN(percent)) {
    // fallback: render simple badge for non-percent values
    return (
      <div
        className={`inline-flex items-center gap-3 px-3 py-2 rounded-2xl bg-white border border-gray-200 dark:bg-slate-800/60 dark:border-slate-700 ${className}`}
      >
        <div className="text-sm font-bold text-gray-900 dark:text-white">
          {value}
        </div>
        <div className="text-xs text-gray-600 dark:text-slate-300">{label}</div>
        <span className="sr-only">
          {label}: {value}
        </span>
      </div>
    )
  }

  const valueRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-animated")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (valueRef.current) observer.observe(valueRef.current)

    return () => {
      if (valueRef.current) observer.unobserve(valueRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      role="img"
      aria-label={`${label}: ${percent}%`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="text-cyan-400"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className="opacity-10"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ strokeDasharray: 200, strokeDashoffset: circumference - dash }}
        ><animate attributeName="stroke-dashoffset" from="200" to={circumference - dash} dur="2s" /></circle>

        <foreignObject
          x="12%"
          y="25%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{ fontSize: 12 }}
          height={(size - strokeWidth) / 2}
          width={size - strokeWidth * 2}
        >
          {/* @ts-ignore */}
          <div xmlns="http://www.w3.org/1999/xhtml">
            <span
              ref={valueRef}
              className="metric-value font-bold text-sm fill-current text-gray-900 dark:text-white"
              style={
                { "--target-num": Math.round(percent) } as React.CSSProperties
              }
            ></span>
          </div>
        </foreignObject>
      </svg>
      <div className="text-left">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">
          {label}
        </div>
        <div className="text-xs text-gray-600 dark:text-slate-300">
          {typeof value === "string" && value.includes("%")
            ? value
            : `${Math.round(percent)}%`}
        </div>
      </div>
    </div>
  )
}
