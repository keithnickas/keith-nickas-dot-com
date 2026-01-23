import { CaseStudy } from "../types/case-study-types";

const CaseStudyResults = ({ project, metricClassName, metricLabelClassName }: { project: CaseStudy, metricClassName?: string, metricLabelClassName?: string }) => (
<section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {project.results.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.results.metrics.map((metric, _) => (
              <div
                key={metric.label}
                className={`p-6 rounded-xl bg-gradient-to-br border ${metricClassName ? metricClassName : "dark:from-cyan-500/10 dark:to-purple-500/10 dark:border dark:border-cyan-500/20 bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200"}`}
              >
                <div className={`text-sm font-medium mb-2 ${metricLabelClassName ? metricLabelClassName : "text-cyan-400"}`}>
                  {metric.label}
                </div>
                <div className="text-3xl font-bold mb-1 text-white">{metric.value}</div>
                <div
                  className={`text-sm dark:text-slate-400 text-gray-600`}
                >
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>);

export default CaseStudyResults;
