import { ProjectsData } from "@/data/projects"
import { ChevronRight } from "lucide-react"

const FeaturedProjects = ({ projects }: { projects: ProjectsData }) => (
  <section id="work" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Signature Projects
      </h2>
      <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
        Case studies showcasing real-world impact
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects?.map((project, _) => (
          <div
            key={project.company}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 bg-white backdrop-blur-sm border dark:border-slate-700 border-gray-200`}
          >
            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />

            <div className="p-6">
              <div
                className={`text-sm font-medium mb-2 dark:text-cyan-400 text-cyan-600`}
              >
                {project.company}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div
                    className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                  >
                    CHALLENGE
                  </div>
                  <div className={`text-sm dark:text-slate-300 text-gray-700`}>
                    {project.challenge}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                  >
                    SOLUTION
                  </div>
                  <div className={`text-sm dark:text-slate-300 text-gray-700`}>
                    {project.solution}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                  >
                    IMPACT
                  </div>
                  <div
                    className={`text-sm font-medium dark:text-cyan-400 text-cyan-600`}
                  >
                    {project.impact}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, _) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium dark:bg-slate-700 dark:text-slate-300 bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                className="flex button items-center gap-2 text-cyan-400 hover:gap-3 transition-all font-medium"
                href={project.href}
              >
                View Deep Dive <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturedProjects
