import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import Footer from "@/components/footer"
import {projects} from "@/data/projects"
import Script from "next/script"
import { Calendly } from "@/components/calendly"

type PageLayoutProps = {
  children: React.ReactNode
  showBackButton?: boolean
}

// Reusable Page Layout Component
export default function DefaultPageLayout({ children }: PageLayoutProps) {

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
        <Calendly useWrapper />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      </div>
  )
}
