import { CaseStudy } from "../types/case-study-types"
import { CheckCircle2 } from "lucide-react"

const CaseStudyUserFlows = ({ project, flowClassName }: { project: CaseStudy, flowClassName?: string }) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Key User Flows</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {project.userFlows?.map((flow, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl bg-gradient-to-br border ${flowClassName ? flowClassName : "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400"}`}
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
              <CheckCircle2 size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{flow.title}</h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              {flow.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudyUserFlows
