import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import Footer from "@/components/footer"
import {projects} from "@/data/projects"

type PageLayoutProps = {
  children: React.ReactNode
  showBackButton?: boolean
}

// Reusable Page Layout Component
export default function PageLayout({ children }: PageLayoutProps) {

  return (
      <div
        className={`min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900`}
      >
        <ScrollProgress />
        <Navigation projects={projects} />
        {/* Page Content */}
        {children}
        {/* Footer */}
        <Footer />
      </div>
  )
}
