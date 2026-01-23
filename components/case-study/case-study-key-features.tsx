import { CaseStudy } from "../types/case-study-types"

const CaseStudyKeyFeatures = ({ project, featureClassName }: { project: CaseStudy, featureClassName?: string }) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Key Features Built
      </h2>

      <div className="space-y-6">
        {project.keyFeatures?.map((feature, _) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700"
          >
            <h3 className={`text-xl font-bold mb-2 ${featureClassName ? featureClassName : "text-cyan-700 dark:text-cyan-400"}`}>
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudyKeyFeatures
