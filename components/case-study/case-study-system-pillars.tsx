import { CaseStudy } from "../types/case-study-types";

const CaseStudySystemPillars = ({ project, pillarClassName, iconBgColor }: { project: CaseStudy, pillarClassName?: string, iconBgColor?: string }) => (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{project.systemPillars?.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.systemPillars?.pillars.map((pillar, _) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-6 rounded-xl bg-gradient-to-br border ${pillarClassName ? pillarClassName : "from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border-cyan-200 dark:border-cyan-500/20"}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${iconBgColor ? iconBgColor : "bg-cyan-500"} flex items-center justify-center mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>);

export default CaseStudySystemPillars;
