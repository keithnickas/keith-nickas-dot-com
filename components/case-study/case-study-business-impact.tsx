import { CaseStudy } from "../types/case-study-types"

const CaseStudyBusinessImpact = ({ project, iconBgColor }: { project: CaseStudy, iconBgColor?: string }) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {project.impact?.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {project.impact?.areas.map((area, _) => {
          const IconComponent = area.icon
          return (
            <div
              key={area.title}
              className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-200 dark:border-orange-500/20"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBgColor ? iconBgColor : "bg-cyan-500"}`}>
                <IconComponent size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{area.title}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {area.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default CaseStudyBusinessImpact
