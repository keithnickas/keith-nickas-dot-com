import { CaseStudy } from "../types/case-study-types"

const CaseStudyApproach = ({ approach, stepClassName }: { approach: CaseStudy["approach"], stepClassName?: string }) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {approach?.title}
      </h2>

      <div className="space-y-6">
        {approach?.steps.map((step, idx) => (
          <div
            key={step.title}
            className={`p-6 rounded-xl dark:bg-slate-800/30 dark:border-slate-700/50 bg-white border border-gray-200 transition-all hover:scale-[1.02]`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${stepClassName ? stepClassName : "dark:bg-cyan-500/20 dark:text-cyan-400 bg-cyan-100 text-cyan-600"}`}
              >
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="dark:text-slate-400 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default CaseStudyApproach
