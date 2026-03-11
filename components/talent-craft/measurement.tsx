import ImpactDonut from "./ImpactDonut"
import KpiChip from "./KpiChip"

export function Measurement({ data }: { data: any }) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {data.impact?.metrics?.map((metric: any) => {
        const isPercent =
          (typeof metric.value === "string" && metric.value.includes("%")) ||
          typeof metric.value === "number"
        if (isPercent) {
          const parsed =
            typeof metric.value === "number"
              ? metric.value
              : parseFloat((metric.value as string).replace("%", "")) || 0
          const trend = [parsed * 0.6, parsed * 0.75, parsed * 0.85, parsed]

          return (
            <div key={`${metric.label}-${metric.value}`} className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-200 dark:bg-slate-800/60 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <ImpactDonut label={metric.label} value={metric.value} />
                {/* <div className="opacity-80">
                <Sparkline
                  values={trend.map((n) => Math.max(0, Math.min(100, n)))}
                />
              </div> */}
              </div>
            </div>
          )
        }
        return (
          <KpiChip
            key={metric.label}
            label={metric.label}
            value={metric.value}
            description={metric.description}
            Icon={metric.icon}
          />
        )
      })}
    </div>
  )
}
