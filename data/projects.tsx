import Image from "next/image"
import { Deem, GapInc, Wristband } from "@/components/icons"
import { Measurement } from "@/components/talent-craft/measurement"
import deemCase from "@/data/talent-craft/deem-recruiter-case-study"
import gapCase from "@/data/talent-craft/gap-recruiter-case-study"
import pingletCase from "@/data/talent-craft/pinglet-recruiter-case-study"
import wristbandCase from "@/data/talent-craft/wristband-recruiter-case-study"

type mediaType = {
  component?: React.ReactElement
  color?: string
}

export interface Project {
  children?: React.ReactNode
  title: string
  company: string
  description: string
  challenge: string
  solution: string
  impact: string
  tech: string[]
  gradient: string
  href: string
  logo?: mediaType | string
  media?: mediaType | string
}

export type ProjectsData = Project[] | undefined

export const projects: ProjectsData = [
  {
    title: "Brand Design Platform",
    company: "Gap, Inc.",
    description: "Multi-brand design system",
    challenge: "Fragmented UI across brands causing inconsistent experiences",
    solution:
      "Built unified design system serving Gap and Banana Republic teams",
    impact: "Millions of users, improved consistency, faster feature delivery",
    tech: ["React", "Next.js", "Design System", "TypeScript", "Performance"],
    gradient: "blue-cyan",
    href: "/case-study/gap",
    logo: { component: <GapInc />, color: "#ffffff" },
    media: {
      component: (
        <video controls loop muted>
          <source
            src="videos/gap/gap_in-sort-marketing.webm"
            type="video/webm"
          />
          <source
            src="videos/gap/gap_in-sort-marketing_video.mp4"
            type="video/mp4"
          />
        </video>
      ),
      color: "#000000",
    },
  },
  {
    title: "Auth UX That Just Works",
    company: "Wristband",
    description: "Authentication UX",
    challenge: "Complex authentication flows causing UX friction",
    solution:
      "Redesigned onboarding and auth dashboards with testable patterns",
    impact: "Enhanced UX, improved reliability, reduced support tickets",
    tech: ["React", "Next.js", "Auth", "Testing", "UX Design"],
    gradient: "purple-pink",
    href: "/case-study/wristband",
    logo: { component: <Wristband /> },
    media: {
      component: (<Image
        src="/images/wristband/wristband-dashboard-roles.webp"
        alt="Wristband Authentication Roles Workflow"
        width={2614}
        height={1452}
        style={{ aspectRatio: "1.80:1" }}
      />)
    }
  },
  {
    title: "Monolith to Modern SPA",
    company: "Deem, Inc.",
    description: "Travel booking platform",
    challenge: "Legacy travel booking system limiting innovation",
    solution:
      "Architected first React SPA for flight search and booking workflows",
    impact: "Reduced costs, improved performance, mentored global teams",
    tech: ["React", "SPA", "TDD", "Accessibility", "Mentorship"],
    gradient: "orange-red",
    href: "/talent-craft/deem",
    logo: { component: <Deem />, color: "#ffffff" },
    media: {
      component: (<Image
        src="/images/deem/flight-results.webp"
        alt="Deem Flight Search Interface"
        width={1474}
        height={816}
        style={{ aspectRatio: "1.80:1" }}
      />)
    }
  },
  {
    title: "Performance Engineering",
    company: "Internal",
    description: "Animation optimization",
    challenge: "Heavy animations causing stuttering and high CPU usage",
    solution:
      "Eliminated main-thread work, leveraged GPU compositing, optimized selectors",
    impact: "98% faster traced time, stable 60fps, negligible CPU usage",
    tech: ["Performance", "Web Animation", "GPU", "CSS/JS", "Browser APIs"],
    gradient: "emerald-teal",
    href: "/case-study/liquid-motion",
    media: {
      component: (<Image
        src="/images/internal/performance-color-blobs.webp"
        alt="Browser Animation optimization for animated color blobs"
        width={2347}
        height={1304}
        style={{ aspectRatio: "1.80:1" }}
      />)
    }
  },
  {
    title: "Pinglet - Job Search That Actually Works",
    company: "Internal - Pinglet",
    description: "Job matching service",
    challenge: "Scattered listings, opaque matching, terrible signal-to-noise",
    solution:
      "Built multi-ATS collector with explainable scoring and optional AI enhancement",
    impact:
      "Dramatically improved signal, 100% explainable matching, low-ops architecture",
    tech: ["Python", "FastAPI", "SQLite", "Systems Design", "AI/ML"],
    gradient: "indigo-purple",
    href: "/case-study/pinglet",
    media: {
      component: (<Image
        src="/images/pinglet/pinglet-job-card.webp"
        alt="Pinglet Matching Algorithm Visualization"
        width={400}
        height={400}
      />)
    }
  },
]

export const recruitmentProjects: ProjectsData = [
  {
    ...projects[0],
    href: "/talent-craft/gap",
    children: <Measurement data={gapCase} />,
  },
  {
    ...projects[1],
    href: "/talent-craft/wristband",
    children: <Measurement data={wristbandCase} />,
  },
  {
    ...projects[2],
    href: "/talent-craft/deem",
    children: <Measurement data={deemCase} />,
  },
  {
    ...projects[4],
    href: "/talent-craft/pinglet",
    children: <Measurement data={pingletCase} />,
  },
]
