import { ArrowRight, Mail, X } from "lucide-react";
import { LinkedIn } from "./icons";
import { type ProjectsData } from "@/data/projects";
import { RandomColorBlobs } from "@/utils/color-blobs";

export function MobileNavigation({
  handleLinkClick,
  menuOpen,
  setMenuOpen,
  navLinks,
  projects,
}: {
  handleLinkClick: () => void
  menuOpen: boolean
  navLinks: { label: string; href: string }[]
  projects: ProjectsData
  setMenuOpen: (open: boolean) => void
}) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-white dark:bg-slate-950`}
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation menu"
    >
      <RandomColorBlobs />

      {/* Close button - Fixed position, always visible */}
      <button
        onClick={() => setMenuOpen(false)}
        className="fixed top-6 right-6 z-[60] p-3 rounded-xl transition-all hover:scale-110 bg-white/80 dark:bg-slate-900/80 hover:bg-gray-100 dark:hover:bg-slate-800 backdrop-blur-lg border border-gray-200 dark:border-slate-700 shadow-lg"
        aria-label="Close menu"
      >
        <X size={24} className="text-cyan-400" />
      </button>

      <div className="relative h-full overflow-y-auto pt-24 pb-8 px-6">
        {/* Navigation Links - Staggered animation */}
        <div className="mb-12">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={handleLinkClick}
              className={`block text-4xl font-bold mb-6 hover:text-cyan-400 transition-all duration-300 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen ? `${idx * 100}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(32px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Featured Projects - Bento Grid */}
        <div
          className={`mb-12 transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
        >
          <h3 className="text-sm font-bold mb-4 text-gray-500 dark:text-slate-500">
            FEATURED PROJECTS
          </h3>

          <div className="space-y-4">
            {projects?.map((project, idx) => (
              <a
                key={idx}
                href={project.href}
                onClick={handleLinkClick}
                className="group block relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] bg-gray-100 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800"
                style={{
                  transitionDelay: menuOpen ? `${600 + idx * 100}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-medium mb-1 text-cyan-600 dark:text-cyan-400">
                        {project.company}
                      </div>
                      <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-cyan-400 group-hover:translate-x-1 transition-transform"
                    />
                  </div>

                  <p className="text-sm mb-3 text-gray-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="flex gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "900ms" : "0ms" }}
        >
          <h3 className="text-sm font-bold mb-4 text-gray-500 dark:text-slate-500">
            GET IN TOUCH
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:iam@keithnickas.com"
              className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-black"
            >
              <span className="flex items-center gap-3">
                <Mail size={20} />
                Email Me
              </span>
              <ArrowRight size={20} />
            </a>

            <a
              href="https://linkedin.com/in/keith-nickas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all bg-gray-100 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800"
            >
              <span className="flex items-center gap-3">
                <LinkedIn />
                LinkedIn
              </span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div
          className={`mt-12 text-center transition-all duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "1000ms" : "0ms" }}
        >
          <p className="text-sm text-gray-500 dark:text-slate-500">
            Senior Frontend Engineer & Technical Lead
          </p>
          <p className="text-xs mt-2 text-gray-400 dark:text-slate-600">
            React • Next.js • Design Systems
          </p>
        </div>
      </div>
    </div>
  )
}
