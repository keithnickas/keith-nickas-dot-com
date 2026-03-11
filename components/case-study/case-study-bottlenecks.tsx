import { CaseStudy } from "../types/case-study-types"

export default function CaseStudyBottlenecks({ bottlenecks }: { bottlenecks: CaseStudy["bottlenecks"] }) {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          The Baseline: Identifying Bottlenecks
        </h2>

        <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
          The first performance trace revealed a Traced running time of{" "}
          <strong>217ms</strong>, with a significant portion (32%) spent in
          DisplayList building.
        </p>

        <div className="space-y-4">
          {bottlenecks?.map((bottleneck, _) => (
            <div
              key={bottleneck.title}
              className="p-6 rounded-xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                    bottleneck.severity === "Critical"
                      ? "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400"
                      : "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {bottleneck.severity}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{bottleneck.title}</h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    {bottleneck.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
