import { Mail } from "lucide-react"
import { LinkedIn } from "@/components/icons"
import { projects } from "@/data/projects"
import { RandomColorBlobs } from "@/utils/color-blobs"
import FeaturedProjects from "@/components/featured-projects"
import { skillTree } from "@/data/portfolio"
import Testimonials from "@/components/testimonials"
import Pillars from "@/components/pillars"
import SkillTreeBranches from "@/components/skill-tree-branches"

export default function Portfolio() {
  return (
    <main
      className={`min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden`}
    >
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 relative" style={{ contain: "layout paint" }}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated gradient mesh background */}
          <div className="max-w-5xl md:h-[696px] md:w-full mx-auto text-center absolute">
            <RandomColorBlobs />
          </div>
          <div className="inline-block mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200`}
            >
              Senior Frontend Engineer & Technical Lead
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building systems that{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              scale
            </span>
            ,<br />
            teams that{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              ship
            </span>
            ,<br />
            experiences that{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              convert
            </span>
          </h1>

          <p
            className={`text-xl mb-12 max-w-3xl mx-auto dark:text-slate-300 text-gray-600`}
          >
            10+ years architecting scalable React & Next.js applications with a
            focus on design systems, accessibility, and performance
            optimization.
          </p>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Pillars />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects projects={projects} />

      {/* Skills Architecture */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills Architecture
          </h2>
          <p className="text-center mb-16 dark:text-slate-200 text-gray-600">
            How my competencies interconnect
          </p>

          <div className="relative">
            {/* Core trunk */}
            <div className="text-center mb-12">
              <div className="inline-block px-8 py-4 rounded-2xl text-2xl font-bold dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border dark:border-cyan-500/30 bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-300">
                {skillTree.core}
              </div>
            </div>

            {/* Branches */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillTreeBranches />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl mb-12 dark:text-slate-300 text-gray-600">
            Open to senior frontend roles, technical leadership, and consulting
            opportunities
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:iam@keithnickas.com"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/keith-nickas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 dark:bg-slate-800 hover:dark:bg-slate-700 bg-white hover:bg-gray-50 border border-gray-200"
            >
              <LinkedIn size={1} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
