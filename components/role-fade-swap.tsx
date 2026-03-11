import { EMSections } from "@/app/(default)/em/engineering-manager"
import { FrontendSections } from "@/app/(default)/frontend/frontend"
import { PlatformSections } from "@/app/(default)/platform/platform"
import { SASections } from "@/app/(default)/portfolio/systems-architect"
import { FadeSwap } from "@/components/fade-swap"
import { projects as projectsData } from "@/data/projects"

export default function RoleFadeSwap({ role }: { role: string }) {
  const projects = projectsData
  return (
    <FadeSwap id={`sections-${role}`}>
      <>
        {role === "frontend" && <FrontendSections />}
        {role === "platform" && <PlatformSections />}
        {role === "em" && <EMSections />}
        {role === "sa" && <SASections />}
      </>
    </FadeSwap>
  )
}
