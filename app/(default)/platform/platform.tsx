import FeaturedProjects from "@/components/featured-projects"
import { projects } from "@/data/projects"
import { saTechStack } from "@/data/role-content"

export function PlatformSections() {
  const saTechStackData = Object.entries(saTechStack)
  const platformTechStack = saTechStackData.map(([cat, items]) => (
    <div
      key={`${cat}-${items.join("-")}`}
      className="p-6 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-4">
        {cat.toLocaleUpperCase()}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="text-sm dark:text-slate-300 text-gray-700 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  ))
  const techStackSection = (
    <section
      id="tech-stack"
      className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Full Stack Depth
        </h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          End-to-end fluency across the solution stack
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {platformTechStack}
        </div>
      </div>
    </section>
  )

  return (
    <>
      <FeaturedProjects
        projects={(projects ?? []).filter(
          (project) => !project.title.includes("Performance Engineering")
        )}
        title="Platform Work"
        subTitle="Modular services, shared platforms, and API design"
        limit={4}
        textColor="violet-400"
        darkTextColor="violet-600"
      />
      {techStackSection}
    </>
  )
}
