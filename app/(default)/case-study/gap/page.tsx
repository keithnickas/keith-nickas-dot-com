import project from "@/data/case-studies/gap-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyCTA from "@/components/case-study/case-study-cta"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudySystemPillars from "@/components/case-study/case-study-system-pillars"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gap/BR Multi-Brand Design System | Keith Nickas Portfolio',
  description: 'Led frontend architecture for shared UI platforms serving millions across Gap and Banana Republic. Built scalable design system with 85%+ component reuse, reducing development time by 40%.',
  keywords: [
    'Design System',
    'Multi-brand Architecture',
    'React Components',
    'Gap Inc',
    'Banana Republic',
    'Frontend Architecture',
    'Component Library',
    'Design Tokens',
    'UI Platform',
    'TypeScript'
  ],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/projects/gap-platform',
    title: 'Gap/BR Multi-Brand Design System Case Study',
    description: 'Building scalable design systems serving millions of users across two major retail brands.',
    images: [
      {
        url: '/api/og?title=Multi-Brand Design System&subtitle=Gap%20%26%20Banana%20Republic&techStack=React,TypeScript,Next.js,Storybook,Figma&theme=cyan',
        width: 1200,
        height: 630,
        alt: 'Gap/BR Design System Project',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gap/BR Multi-Brand Design System | Keith Nickas',
    description: 'Building scalable design systems serving millions of users across two major retail brands.',
    images: ['/api/og?title=Multi-Brand Design System&subtitle=Gap%20%26%20Banana%20Republic&techStack=React,TypeScript,Next.js,Storybook,Figma&theme=cyan'],
  },
};

const GapProjectCaseStudy = () => {
  return (
      <main className="pt-24">
        {/* Hero Section */}
        <CaseStudyHero data={project} />

        {/* Challenge Section */}
        <CaseStudyChallenge challenge={project.challenge} />

        {/* Approach Section */}
        <CaseStudyApproach approach={project.approach} />

        {/* System Pillars Section */}
        <CaseStudySystemPillars systemPillars={project.systemPillars} />

        {/* Results Section */}
        <CaseStudyResults results={project.results} />

        {/* Technical Highlights */}
        <CaseStudyTechnicalHighlights technicalHighlights={project.technicalHighlights} />

        {/* Learnings Section */}
        <CaseStudyLearnings learnings={project.learnings} />

        {/* CTA Section */}
        <CaseStudyCTA
          title={"Building a design system for your organization?"}
          description={
            "Let's discuss how I can help create scalable, multi-brand design systems that accelerate product development."
          }
          cta1={{ title: "Get in Touch", href: "/contact" }}
          cta2={{ title: "View More Projects", href: "/#work" }}
        />
      </main>
  )
}

export default GapProjectCaseStudy
