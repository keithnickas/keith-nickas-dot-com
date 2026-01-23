import { CaseStudy } from "../types/case-study-types"

const CaseStudyComponentShowcase = ({ project }: { project: CaseStudy }) => (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Component Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {project.componentShowcase?.map((category, _) => (
              <div
                key={category.category}
                className="p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-lg font-bold mb-2 text-cyan-400">{category.category}</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {category.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>);

export default CaseStudyComponentShowcase;
