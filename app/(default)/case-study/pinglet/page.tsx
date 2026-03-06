import project from "@/data/case-studies/pinglet-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyCTA from "@/components/case-study/case-study-cta"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudySystemPillars from "@/components/case-study/case-study-system-pillars"
import { type Metadata } from "next"
import { Github } from "lucide-react"

export const metadata: Metadata = {}

const PingletCaseStudy = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <CaseStudyHero
        data={{...project, projectLinks: [{ title: "View on GitHub", href: "https://github.com/keithnickas/pinglet", icon: Github, iconClassName: "text-white", className: "from-indigo-500 to-purple-500 hover:shadow-indigo-500/50" }]}}
        badgeClassName="bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-purple-200 dark:border-indigo-500/20"
        iconClassName="text-indigo-400"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge
        challenge={project.challenge}
        titleClassName="text-indigo-400"
      />

      {/* Approach Section */}
      <CaseStudyApproach
        approach={project.approach}
        stepClassName="dark:bg-indigo-500/20 dark:text-indigo-400 bg-indigo-100 text-indigo-600"
      />

      {/* System Pillars Section */}
      <CaseStudySystemPillars
        systemPillars={project.systemPillars}
        pillarClassName="from-indigo-50 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/20 border-indigo-200 dark:border-indigo-500/20"
        iconBgColor="bg-indigo-400"
      />

      {/* Results Section */}
      <CaseStudyResults results={project.results}
        metricClassName="from-indigo-50 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/20 border-indigo-200 dark:border-indigo-500/20"
        metricLabelClassName="text-indigo-400"
      />

      {/* Technical Highlights */}
      <CaseStudyTechnicalHighlights
        className="dark:bg-slate-800/30 dark:border-slate-700/50 bg-white border border-gray-200"
        technicalHighlights={project.technicalHighlights}
        highlightClassName="bg-indigo-500/20"
        highlightDotClassName="bg-indigo-400"
  
      />

      {/* Learnings Section */}
      <CaseStudyLearnings learnings={project.learnings}
        learningClassName="dark:bg-slate-800/30 dark:border-slate-700/50 bg-white border border-gray-200"
      />

      {/* CTA Section */}
      <CaseStudyCTA
        className="dark:bg-slate-800/30 dark:border-slate-700/50 bg-white border border-gray-200"
        title={"Building a job discovery platform for your organization?"}
        description={
          "Let's discuss how I can help create scalable, job matching systems that improve candidate experience and hiring outcomes."
        }
        cta1={{ title: "Get in Touch", href: "/contact", className: "from-indigo-500 to-purple-500 hover:shadow-indigo-500/50" }}
        cta2={{ title: "View More Projects", href: "/#work" }}
      />
    </main>
  )
}

export default PingletCaseStudy
