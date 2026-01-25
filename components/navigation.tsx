"use client"
import { ArrowLeft, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { type ProjectsData } from "@/data/projects"
import { MobileNavigation } from "./mobile-navigation"
const excludedPaths = ["/case-study/", "/contact"]

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation({
  projects = [],
}: {
  projects: ProjectsData
}) {
  const pathname = usePathname()
  const showBackButton = excludedPaths.some((path) => pathname.includes(path))
  const [menuOpen, setMenuOpen] = useState(false)
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 dark:bg-slate-900/50 backdrop-blur-md bg-white dark:border-slate-800 border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {showBackButton && (
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span className="hidden sm:inline">Back</span>
                </a>
              )}
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                title="Home"
              >
                KN
              </a>
              <div className="text-2xl bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">Keith Nickas – Software Engineer</div>
            </div>
            <div className="flex items-center gap-3 md:hidden z-[200]">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 relative z-[60]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileNavigation
        handleLinkClick={handleLinkClick}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        projects={projects}
      />
    </>
  )
}
