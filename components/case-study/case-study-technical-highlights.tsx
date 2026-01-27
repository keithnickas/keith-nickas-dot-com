import { CaseStudy } from "../types/case-study-types";

const CaseStudyTechnicalHighlights = ({ project, highlightClassName, highlightDotClassName }: { project: CaseStudy, highlightClassName?: string, highlightDotClassName?: string }) => (
  <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Technical Highlights
          </h2>

          <div
            className={`p-8 rounded-xl dark:bg-slate-800/50 dark:border-slate-700 bg-white border border-gray-200`}
          >
            <ul className="space-y-4">
              {project.technicalHighlights.map((highlight, _) => (
                <li key={highlight} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${highlightClassName ? highlightClassName : "bg-cyan-500/20"} flex items-center justify-center mt-1`}>
                    <div className={`w-2 h-2 rounded-full ${highlightDotClassName ? highlightDotClassName : "bg-cyan-400"}`} />
                  </div>
                  <span
                    className="dark:text-slate-300 text-gray-700"
                  >
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>);
      
export default CaseStudyTechnicalHighlights;
