import { type Metadata } from "next"
import RecruiterCaseStudyPage from "@/components/talent-craft/talent-craft-case-study"
import deemRecruiterCaseStudy from "@/data/talent-craft/deem-recruiter-case-study"
import Script from "next/dist/client/script"

export const metadata: Metadata = {
  title: "Deem Multi-Brand Platform - Leadership Portfolio | Keith Nickas",
  description:
    "Led frontend architecture serving millions across Deem and Banana Republic. Reduced development time 40%, mentored cross-functional teams, and established organization-wide standards.",
  keywords: [
    "Technical Leadership",
    "Design Systems",
    "E-commerce",
    "Frontend Architecture",
    "Team Leadership",
    "Cross-Functional Collaboration",
    "Gap Inc",
    "Retail Technology",
    "Engineering Management",
    "Stakeholder Management",
  ],
  openGraph: {
    type: "article",
    url: "https://keithnickas.dev/talent-craft/deem",
    title: "Deem Multi-Brand Platform - Technical Leadership Case Study",
    description:
      "Led frontend architecture serving millions. Reduced development time 40% through unified design system.",
    images: [
      {
        url: "/api/og?title=Technical%20Leadership&subtitle=Deem%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan",
        width: 1200,
        height: 630,
        alt: "Deem Technical Leadership Case Study",
      },
    ],
    publishedTime: "2024-01-01T00:00:00Z",
    authors: ["Keith Nickas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deem Multi-Brand Platform - Technical Leadership | Keith Nickas",
    description:
      "Led frontend architecture serving millions. Reduced development time 40% through unified design system.",
    images: [
      "/api/og?title=Technical%20Leadership&subtitle=Deem%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan",
    ],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Deem Travel Platform Legacy Modernization",
  author: {
    "@type": "Person",
    name: "Keith Nickas",
    url: "https://keithnickas.dev",
    jobTitle: "Senior Software Engineer / Technical Lead",
    sameAs: [
      "https://linkedin.com/in/keith-nickas",
      "https://github.com/keithnickas",
    ],
  },
  datePublished: "2014-07-01T00:00:00Z",
  dateModified: "2020-05-01T00:00:00Z",
  publisher: {
    "@type": "Person",
    name: "Keith Nickas",
  },
  description:
    "Led transformation of legacy travel booking platform into modern React SPA, establishing shared component libraries and best practices adopted across global engineering teams. Mentored 15+ developers across three continents while reducing operating costs through strategic refactoring.",
  articleBody:
    "Global team leadership case study demonstrating cross-continental mentorship, legacy modernization, and change management across distributed teams.",
  keywords:
    "Global Team Leadership, Legacy Modernization, Mentorship, Travel Technology, Cross-Cultural Collaboration, Distributed Teams",
  about: {
    "@type": "Project",
    name: "Deem Travel Platform Modernization",
    description:
      "Legacy platform migration to modern React SPA with global team coordination",
    startDate: "2014-07",
    endDate: "2020-05",
    url: "https://keithnickas.dev/hiring/deem",
  },
  mentions: [
    {
      "@type": "Organization",
      name: "Deem, Inc.",
      url: "https://www.deem.com",
    },
  ],
  workExample: {
    "@type": "CreativeWork",
    name: "React SPA for Travel Booking",
    description:
      "Complete platform modernization with 70%+ component reuse, mentored 15+ engineers across 3 continents",
    learningResourceType: "Case Study",
  },
  teaches: [
    {
      "@type": "DefinedTerm",
      name: "Global Team Leadership",
      description:
        "Mentoring and leading distributed engineering teams across multiple continents",
    },
    {
      "@type": "DefinedTerm",
      name: "Legacy Modernization",
      description:
        "Strategic migration from monolithic systems to modern React SPA architecture",
    },
    {
      "@type": "DefinedTerm",
      name: "Test-Driven Development",
      description:
        "Establishing TDD practices and testing infrastructure organization-wide",
    },
  ],
}

export default function DeemRecruiterCaseStudy() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RecruiterCaseStudyPage
        data={deemRecruiterCaseStudy}
        accentColor="orange"
      />
    </>
  )
}
