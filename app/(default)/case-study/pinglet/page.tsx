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
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Pinglet: Explainable Job Matching Platform | Keith Nickas',
  description: 'Built a job discovery service that collects listings from multiple ATS platforms (Greenhouse, Lever, Ashby), scores them with explainable algorithms, and surfaces high-signal opportunities. Features deterministic scoring, LLM enhancement, and audit-first architecture.',
  keywords: [
    'Job Matching Platform',
    'ATS Integration',
    'Explainable AI',
    'FastAPI',
    'Python',
    'SQLite',
    'Data Pipeline',
    'Web Scraping',
    'Job Discovery',
    'Greenhouse API',
    'Lever API',
    'Ashby API',
    'OpenAI Integration',
    'Machine Learning'
  ],
  authors: [{ name: 'Keith Nickas', url: 'https://keithnickas.dev' }],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/case-study/pinglet',
    title: 'Pinglet: Job Search That Actually Works',
    description: 'Multi-source job aggregation with explainable scoring algorithms. Collects from 4+ ATS platforms, provides transparent matching, and surfaces only high-signal opportunities.',
    images: [
      {
        url: 'https://keithnickas.dev/og-images/pinglet.png',
        width: 1200,
        height: 630,
        alt: 'Pinglet Job Matching Platform',
      },
    ],
    publishedTime: '2026-01-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinglet: Explainable Job Matching Platform',
    description: 'Multi-ATS job aggregation with deterministic scoring and optional LLM enhancement. Built with Python, FastAPI, and SQLite.',
    images: ['https://keithnickas.dev/og-images/pinglet.png'],
  },
  alternates: {
    canonical: 'https://keithnickas.dev/case-study/pinglet',
  },
};

// JSON-LD structured data (add to component)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pinglet',
  description: 'Job discovery and matching service with explainable algorithms',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  author: {
    '@type': 'Person',
    name: 'Keith Nickas',
    url: 'https://keithnickas.dev',
    jobTitle: 'Senior Frontend Engineer'
  },
  datePublished: '2026-01-01',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Multi-ATS integration (Greenhouse, Lever, Ashby)',
    'Explainable scoring algorithms',
    'Deterministic matching with optional LLM enhancement',
    'Audit-first architecture with raw payload preservation',
    'FastAPI REST endpoints'
  ],
  programmingLanguage: ['Python', 'SQL'],
  softwareRequirements: 'Python 3.9+, SQLite',
  keywords: 'job matching, ATS integration, explainable AI, Python, FastAPI, SQLite',
  about: {
    '@type': 'Thing',
    name: 'Job Discovery Platform',
    description: 'Aggregates job listings from multiple sources with transparent scoring'
  }
};

const PingletCaseStudy = () => {
  return (
    <main className="pt-24">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
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
