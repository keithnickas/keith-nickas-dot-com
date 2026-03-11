import { ProjectsData } from "@/data/projects"
import { ChevronRight } from "lucide-react"

const projectGradients: { [key: string]: string } = {
  "blue-cyan": "from-blue-500 to-cyan-500",
  "purple-pink": "from-purple-500 to-pink-500",
  "orange-red": "from-orange-500 to-red-500",
  "emerald-teal": "from-emerald-500 to-teal-500",
  "indigo-purple": "from-indigo-500 to-purple-500",
};

const FeaturedProjects = ({
  projects,
  limit,
  title,
  subTitle,
  textColor,
  darkTextColor,
}: {
  projects: ProjectsData
  limit?: number
  title?: string
  subTitle?: string
  textColor?: string
  darkTextColor?: string
}) => (
  <section id="work" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        {limit === undefined ? "All Projects" : title ?? "Signature Projects"}
      </h2>
      <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
        {subTitle ?? "Case studies showcasing real-world impact"}
      </p>

      <div className="grid md:flex md:flex-wrap md:justify-center md:flex-1 gap-8 ">
        {projects?.slice(0, limit).map((project, _) => {
          return (
            <div
              key={`${project.company}-${project.title}`}
              className={`group relative rounded-2xl md:w-[45%] overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 bg-white backdrop-blur-sm border dark:border-slate-700 border-gray-200`}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${projectGradients[project.gradient]}`} />

              <div className="p-6">
                <div
                  className={`text-sm font-medium mb-2 ${ textColor ? `dark:text-${darkTextColor} text-${textColor}` : "dark:text-cyan-400 text-cyan-600"} w-32`}
                  style={
                    typeof project.logo === "object" && project.logo !== null
                      ? {
                          color: project.logo.color,
                        }
                      : undefined
                  }
                >
                  {typeof project.logo === "object" &&
                  "component" in project.logo
                    ? (project.logo?.component ?? project.company)
                    : project.company}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${textColor ? `group-hover:${textColor}` : "group-hover:text-cyan-400"} transition-colors`}>
                  {project.title}
                </h3>

                <div className="space-y-4 mb-6">
                  {typeof project.media === "object" && project.media?.component ? (
                    <div>{project.media.component}</div>
                  ) : null}
                  <div>
                    <div
                      className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                    >
                      CHALLENGE
                    </div>
                    <div
                      className={`text-sm dark:text-slate-300 text-gray-700`}
                    >
                      {project.challenge}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                    >
                      SOLUTION
                    </div>
                    <div
                      className={`text-sm dark:text-slate-300 text-gray-700`}
                    >
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
                      className={`text-sm font-medium ${textColor ? `dark:text-${textColor} text-${textColor}` : "dark:text-cyan-400 text-cyan-600"}`}
                    >
                      {project?.children ? project.children : project.impact}
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
                  className={`flex button items-center gap-2 ${textColor ? `text-${textColor}` : "text-cyan-400"} hover:gap-3 transition-all font-medium`}
                  href={project.href}
                >
                  View Deep Dive <ChevronRight size={16} />
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {limit && projects && projects.length > limit && (
        <div className="mt-12 text-center">
          <a
            href="/case-study"
            className={`inline-flex items-center gap-2 ${textColor ? `text-${textColor}` : "text-cyan-400"} hover:gap-3 transition-all font-medium`}
          >
            View All Projects <ChevronRight size={16} />
          </a>
        </div>
      )}
    </div>
  </section>
)

export default FeaturedProjects
