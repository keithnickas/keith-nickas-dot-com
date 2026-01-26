import project from "@/data/case-studies/wristband-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyUserFlows from "@/components/case-study/case-study-user-flows"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudyCTA from "@/components/case-study/case-study-cta"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: 'Wristband Authentication UX | Keith Nickas Portfolio',
  description: 'Principal Frontend Engineer building intuitive CIAM dashboards and auth flows. Architected React/Next.js platform with Vue.js SDK, comprehensive testing, and developer-first design.',
  keywords: [
    'Authentication UX',
    'CIAM Platform',
    'React Dashboard',
    'Auth Flows',
    'Vue.js SDK',
    'Identity Management',
    'Frontend Architecture',
    'Developer Tools',
    'User Onboarding',
    'Security UX'
  ],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/projects/wristband-auth',
    title: 'Wristband Authentication UX Case Study',
    description: 'Building developer-friendly authentication experiences and CIAM dashboards.',
    images: [
      {
        url: '/api/og?title=Wristband%20Authentication%20UX&subtitle=Case%20Study%20by%20Keith%20Nickas&techStack=React,Next.js,TypeScript,Figma&theme=purple',
        width: 1200,
        height: 630,
        alt: 'Wristband Authentication Project',
      },
    ],
    publishedTime: '2020-04-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
};

const WristbandProjectCaseStudy = () => {
  return (
    <main className="pt-24">
      <CaseStudyHero
        project={project}
        badgeClassName="bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/20"
        iconClassName="text-purple-400"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge project={project} titleClassName="text-purple-400" />

      {/* Approach Section */}
      <CaseStudyApproach
        project={project}
        stepClassName="dark:bg-purple-500/20 dark:text-purple-400 bg-purple-100 text-purple-600"
      />

      {/* User Flows Section */}
      <CaseStudyUserFlows project={project} flowClassName="from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border-purple-200 dark:border-purple-500/20" />

      {/* Results Section */}
      <CaseStudyResults
        project={project}
        metricClassName="from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400"
        metricLabelClassName="text-purple-400"
      />

      {/* Technical Highlights */}
      <CaseStudyTechnicalHighlights
        project={project}
        highlightClassName="bg-purple-500/20"
        highlightDotClassName="bg-purple-400"
      />

      {/* Learnings Section */}
      <CaseStudyLearnings project={project} learningClassName="bg-purple-500/10 border border-purple-500/20" />

      {/* CTA Section */}
      <CaseStudyCTA
        title={"Need help with auth flows or design systems?"}
        description={
          "Let's discuss how I can help streamline your authentication UX and frontend architecture."
        }
        className="from-purple-500/10 to-pink-500/10 border-purple-500/20"
        cta1={{ title: "Get in Touch", href: "/contact", className: "from-purple-500 to-pink-500 hover:shadow-purple-500/50"}}
        cta2={{ title: "View More Projects", href: "/#work"}}
      />
    </main>
  )
}

export default WristbandProjectCaseStudy
