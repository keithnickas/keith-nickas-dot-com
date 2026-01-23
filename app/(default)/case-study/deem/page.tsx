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
import PageLayout from "@/app/legacy/layout"

const DeemProjectCaseStudy = () => {
  return (
      <main className="pt-24">
        {/* Hero Section */}
        <CaseStudyHero
          project={project}
          badgeClassName="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/20"
          iconClassName="text-orange-500"
        />

        {/* Challenge Section */}
        <CaseStudyChallenge
          project={project}
          titleClassName="text-orange-400"
        />

        {/* Approach Section */}
        <CaseStudyApproach
          project={project}
          stepClassName="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400"
        />

        {/* Business Impact Section */}
        <CaseStudyBusinessImpact
          project={project}
          iconBgColor="bg-orange-500"
        />

        {/* Results Section */}
        <CaseStudyResults
          project={project}
          metricClassName="from-orange-500/10 to-red-500/10 border-orange-500/20"
          metricLabelClassName="text-orange-400"
        />

        {/* Key Features Section */}
        <CaseStudyKeyFeatures
          project={project}
          featureClassName="text-orange-400"
        />

        {/* Technical Highlights */}
        <CaseStudyTechnicalHighlights
          project={project}
          highlightClassName="bg-orange-500/20"
          highlightDotClassName="bg-orange-400"
        />

        {/* Learnings Section */}
        <CaseStudyLearnings
          project={project}
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
          cta2={{ title: "View More Projects", href: "/" }}
        />
      </main>
  )
}

export default DeemProjectCaseStudy
