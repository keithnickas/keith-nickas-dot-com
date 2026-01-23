import project from "@/data/case-studies/gap-case-study"
import CaseStudyHero from "@/components/case-study/case-study-hero"
import CaseStudyChallenge from "@/components/case-study/case-study-challenge"
import CaseStudyApproach from "@/components/case-study/case-study-approach"
import CaseStudyCTA from "@/components/case-study/case-study-cta"
import CaseStudyResults from "@/components/case-study/case-study-results"
import CaseStudyTechnicalHighlights from "@/components/case-study/case-study-technical-highlights"
import CaseStudyLearnings from "@/components/case-study/case-study-learnings"
import CaseStudySystemPillars from "@/components/case-study/case-study-system-pillars"

const GapProjectCaseStudy = () => {
  return (
      <main className="pt-24">
        {/* Hero Section */}
        <CaseStudyHero project={project} />

        {/* Challenge Section */}
        <CaseStudyChallenge project={project} />

        {/* Approach Section */}
        <CaseStudyApproach project={project} />

        {/* System Pillars Section */}
        <CaseStudySystemPillars project={project} />

        {/* Results Section */}
        <CaseStudyResults project={project} />

        {/* Technical Highlights */}
        <CaseStudyTechnicalHighlights project={project} />

        {/* Learnings Section */}
        <CaseStudyLearnings project={project} />

        {/* CTA Section */}
        <CaseStudyCTA
          title={"Building a design system for your organization?"}
          description={
            "Let's discuss how I can help create scalable, multi-brand design systems that accelerate product development."
          }
          cta1={{ title: "Get in Touch", href: "/contact" }}
          cta2={{ title: "View More Projects", href: "/" }}
        />
      </main>
  )
}

export default GapProjectCaseStudy
