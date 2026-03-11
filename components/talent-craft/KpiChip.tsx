import React from "react"
import type { SVGProps } from "react"

type KpiChipProps = {
  label: string
  value: string | number
  description?: string
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export default function KpiChip({ label, value, description, Icon }: KpiChipProps) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-200 dark:bg-slate-800/60 dark:border-slate-700">
      {Icon ? (
        <span className="text-cyan-400">{
          /* Icon is decorative; size kept small */
        }<Icon width={20} height={20} /></span>
      ) : null}

      <div className="text-left">
        <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="text-sm text-gray-600 dark:text-slate-300">{label}</div>
        {description ? <div className="sr-only">{description}</div> : null}
      </div>
    </div>
  )
}
