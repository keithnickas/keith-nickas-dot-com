import project from "@/data/case-studies/liquid-motion-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyCTA from "@/components/case-study/case-study-cta"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudyBottlenecks from "@/components/case-study/case-study-bottlenecks"
import { type Metadata } from "next"

const LiquidMotionCaseStudy = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <CaseStudyHero
        data={project}
        badgeClassName="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20"
        iconClassName="text-green-700 dark:text-green-400"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge
        challenge={project.challenge}
        titleClassName="text-green-400"
      />

      {/* Bottlenecks Section */}
      <CaseStudyBottlenecks bottlenecks={project.bottlenecks} />

      {/* Approach Section */}
      <CaseStudyApproach
        approach={project.approach}
        stepClassName="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400"
        stepTitleClassName="text-green-400"
      />

      {/* Results Section */}
      <CaseStudyResults
        results={project.results}
        metricClassName="from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-200 dark:border-green-500/20"
        metricLabelClassName="text-green-600"
        useMetricImprovements
      />

      {/* Technical Highlights */}
      <CaseStudyTechnicalHighlights
        technicalHighlights={project.technicalHighlights}
        highlightClassName="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400"
        highlightDotClassName="bg-green-400"
      />

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

export default LiquidMotionCaseStudy
