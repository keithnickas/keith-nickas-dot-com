"use client"
import FeaturedProjects from "@/components/featured-projects"
import { skillTree } from "@/data/portfolio"
import { projects } from "@/data/projects"

export function FrontendSections() {
  const skillsCard = skillTree.branches.map((branch) => (
    <div
      key={branch.name}
      className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 dark:border-slate-700 hover:dark:border-cyan-500/50"
    >
      <h3 className="font-bold text-lg mb-4 text-cyan-400">{branch.name}</h3>
      <div className="space-y-2">
        {branch.tools.map((tool) => (
          <div key={tool} className="text-sm dark:text-slate-200 text-gray-600">
            • {tool}
          </div>
        ))}
      </div>
    </div>
  ))

  return (
    <>
      <FeaturedProjects projects={projects} limit={4} />
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills Architecture
          </h2>
          <p className="text-center mb-16 dark:text-slate-200 text-gray-600">
            How my competencies interconnect
          </p>
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 rounded-2xl text-2xl font-bold dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border dark:border-cyan-500/30 bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-300">
              {skillTree.core}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsCard}
          </div>
        </div>
      </section>
    </>
  )
}
