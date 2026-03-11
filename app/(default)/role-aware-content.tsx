"use client"
import Testimonials from "@/components/testimonials"
import { FadeSwap } from "@/components/fade-swap"
import { PlatformSections } from "./platform/platform"
import { FrontendSections } from "./frontend/frontend"
import { PortfolioHero } from "@/components/portfolio-hero"
import { SASections } from "./portfolio/systems-architect"
import { ContactCTA } from "@/components/portfolio-contact-cta"
import { EMSections } from "./em/engineering-manager"
import { useEffect, useState } from "react"
import { useRole } from "@/context/role-context"

export function RoleAwareContent() {
  const { role } = useRole()
  const [currentRole, setCurrentRole] = useState(role) // capture initial role for consistent rendering during hydration, preventing content mismatch flashes
  const routes: { [key: string]: React.ReactElement } = {
    frontend: <FrontendSections />,
    platform: <PlatformSections />,
    em: <EMSections />,
    sa: <SASections />,
  }

  useEffect(() => {
    if (currentRole !== role) {
      setCurrentRole(role)
    }
  }, [role])
  
  return (
    <main className="min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden">
      <PortfolioHero />
      <FadeSwap id={`sections-${currentRole}`}>
        <>{routes[currentRole]}</>
      </FadeSwap>
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
