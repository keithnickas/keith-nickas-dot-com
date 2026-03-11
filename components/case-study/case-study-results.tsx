import { CaseStudy } from "../types/case-study-types"

const CaseStudyResults = ({
  results,
  metricClassName,
  metricLabelClassName,
  useMetricImprovements = false,
}: {
  results: CaseStudy["results"]
  metricClassName?: string
  metricLabelClassName?: string
  useMetricImprovements?: boolean
}) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{results?.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {results?.metrics.map((metric, _) => {
          const IconComponent = metric?.icon
          return (
            <div
              key={metric.label}
              className={`p-6 rounded-xl bg-gradient-to-br border ${metricClassName ? metricClassName : "dark:from-cyan-500/10 dark:to-purple-500/10 dark:border dark:border-cyan-500/20 bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200"}`}
            >
              {IconComponent && (
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                    <IconComponent className="text-white" />
                  </div>
                  <h3
                    className={`text-lg font-medium mb-2 ${metricLabelClassName ? metricLabelClassName : "text-cyan-400"}`}
                  >
                    {metric.label}
                  </h3>
                </div>
              )}
              {useMetricImprovements ? (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-slate-400">
                      Before:
                    </span>
                    <span className="font-mono text-sm font-semibold text-red-600 dark:text-red-400">
                      {metric?.before}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-slate-400">
                      After:
                    </span>
                    <span className="font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                      {metric?.after}
                    </span>
                  </div>
                  {metric?.improvement !== "—" && (
                    <div className="mt-2 pt-2 border-t border-green-200 dark:border-green-800">
                      <span className="text-xs font-bold text-green-600 dark:text-green-400">
                        ↑ {metric.improvement} improvement
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div
                    className={`text-sm font-medium mb-2 ${metricLabelClassName ? metricLabelClassName : "text-cyan-400"}`}
                  >
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">
                    {metric.value}
                  </div>
                  <div className={`text-sm dark:text-slate-400 text-gray-600`}>
                    {metric.description}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default CaseStudyResults
