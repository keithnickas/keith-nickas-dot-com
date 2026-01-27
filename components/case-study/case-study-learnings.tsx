import { CaseStudy } from "../types/case-study-types"

const CaseStudyLearnings = ({ project, learningClassName }: { project: CaseStudy, learningClassName?: string }) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Learnings</h2>

      <div className="space-y-4">
        {project.learnings.map((learning, _) => (
          <div
            key={learning}
            className={`p-6 rounded-xl border ${learningClassName ? learningClassName : "dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border-cyan-200"}`}
          >
            <p className="text-lg dark:text-slate-300 text-gray-700">
              {learning}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudyLearnings
