import { type Metadata } from "next"
import project from "@/data/case-studies/deem-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyBusinessImpact from "@/components/case-study/case-study-business-impact"
import CaseStudyKeyFeatures from "@/components/case-study/case-study-key-features"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudyCTA from "@/components/case-study/case-study-cta"

export const metadata: Metadata = {
  title: 'Deem Travel Platform Modernization | Keith Nickas Portfolio',
  description: 'Led transformation from legacy monolith to modern React SPA for travel booking. Architected shared component libraries, mentored global teams, and established TDD practices reducing costs and accelerating delivery.',
  keywords: [
    'Legacy Modernization',
    'React Migration',
    'SPA Architecture',
    'Travel Technology',
    'Component Library',
    'Test-Driven Development',
    'Team Mentorship',
    'Technical Leadership',
    'Code Quality',
    'Accessibility'
  ],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/projects/deem-spa',
    title: 'Deem Travel Platform Modernization Case Study',
    description: 'Transforming legacy travel booking systems into modern React SPAs.',
    images: [
      {
        url: '/api/og?title=Deem%20Travel%20Platform%20Modernization&subtitle=Transforming%20legacy%20travel%20booking%20systems%20into%20modern%20React%20SPAs.&theme=orange',
        width: 1200,
        height: 630,
        alt: 'Deem Platform Modernization Project',
      },
    ],
    publishedTime: '2014-07-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
};

export default function DeemProjectCaseStudy() {
  return (
      <main className="pt-24">
        {/* Hero Section */}
        <CaseStudyHero
          data={project}
          badgeClassName="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/20"
          iconClassName="text-orange-500"
        />

        {/* Challenge Section */}
        <CaseStudyChallenge
          challenge={project.challenge}
          titleClassName="text-orange-400"
        />

        {/* Approach Section */}
        <CaseStudyApproach
          approach={project.approach}
          stepClassName="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400"
        />

        {/* Business Impact Section */}
        <CaseStudyBusinessImpact
          impact={project.impact}
          iconBgColor="bg-orange-500"
        />

        {/* Results Section */}
        <CaseStudyResults
          results={project.results}
          metricClassName="from-orange-500/10 to-red-500/10 border-orange-500/20"
          metricLabelClassName="text-orange-400"
        />

        {/* Key Features Section */}
        <CaseStudyKeyFeatures
          keyFeatures={project.keyFeatures}
          featureClassName="text-orange-400"
        />

        {/* Technical Highlights */}
        <CaseStudyTechnicalHighlights
          technicalHighlights={project.technicalHighlights}
          highlightClassName="bg-orange-500/20"
          highlightDotClassName="bg-orange-400"
        />

        {/* Learnings Section */}
        <CaseStudyLearnings
          learnings={project.learnings}
          learningClassName="bg-orange-500/10 border-orange-500/20"
        />

        {/* CTA Section */}
        <CaseStudyCTA
          className="from-orange-500/10 to-red-500/10 border-orange-500/20"
          title={"Need help modernizing legacy systems?"}
          description={
            "Let's discuss how I can help migrate your application to modern frameworks while maintaining business continuity."
          }
          cta1={{
            title: "Get in Touch",
            href: "/contact",
            className: "from-orange-500 to-red-500 hover:shadow-orange-500/50",
          }}
          cta2={{ title: "View More Projects", href: "/#work" }}
        />
      </main>
  )
}

