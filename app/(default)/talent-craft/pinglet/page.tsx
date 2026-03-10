import { type Metadata } from "next"
import RecruiterCaseStudyPage from "@/components/talent-craft/talent-craft-case-study"
import pingletCaseStudy from "@/data/talent-craft/pinglet-recruiter-case-study";
import Script from "next/dist/client/script";

export const metadata: Metadata = {
  title: 'Pinglet Job Matching Platform - Product Development Portfolio | Keith Nickas',
  description: 'Independently designed and built end-to-end job discovery platform. Demonstrates systems design, autonomous execution, and full-stack capabilities with explainable AI integration.',
  keywords: [
    'Product Development',
    'Systems Design',
    'Data Engineering',
    'Autonomous Execution',
    'API Integration',
    'AI/ML',
    'Python',
    'Full-Stack Development',
    'Technical Architecture',
    'Problem-Solving'
  ],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/hiring/pinglet',
    title: 'Pinglet Job Matching Platform - Product Development Case Study',
    description: 'Independently designed and built explainable job discovery platform demonstrating full-stack capabilities and systems thinking.',
    images: [
      {
        url: '/api/og?title=Product%20Development&subtitle=Job%20Matching%20Platform&techStack=Systems%20Design,Python,AI/ML&theme=indigo',
        width: 1200,
        height: 630,
        alt: 'Pinglet Product Development Case Study',
      },
    ],
    publishedTime: '2025-01-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinglet Job Matching Platform - Product Development | Keith Nickas',
    description: 'Independently designed and built explainable job discovery platform demonstrating full-stack capabilities and systems thinking.',
    images: ['/api/og?title=Product%20Development&subtitle=Job%20Matching%20Platform&techStack=Systems%20Design,Python,AI/ML&theme=indigo'],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pinglet Job Discovery & Matching Platform",
  "author": {
    "@type": "Person",
    "name": "Keith Nickas",
    "url": "https://keithnickas.dev",
    "jobTitle": "Software Engineer / Architect",
    "sameAs": [
      "https://linkedin.com/in/keith-nickas",
      "https://github.com/keithnickas"
    ]
  },
  "datePublished": "2025-01-01T00:00:00Z",
  "dateModified": "2025-02-01T00:00:00Z",
  "publisher": {
    "@type": "Person",
    "name": "Keith Nickas"
  },
  "description": "Independently designed and built an end-to-end job discovery platform demonstrating full-stack capabilities, systems thinking, and product sense. Created explainable matching algorithms that dramatically improve signal-to-noise ratio while maintaining transparency.",
  "articleBody": "Product development case study demonstrating autonomous execution, systems design thinking, data engineering, and practical AI/ML integration.",
  "keywords": "Product Development, Systems Design, Data Engineering, Autonomous Execution, API Integration, AI/ML",
  "about": {
    "@type": "SoftwareApplication",
    "name": "Pinglet",
    "description": "Job discovery and matching platform with explainable scoring",
    "applicationCategory": "Productivity Application",
    "operatingSystem": "Web",
    "url": "https://keithnickas.dev/hiring/pinglet",
    "featureList": [
      "Multi-ATS data collection (Greenhouse, Lever, Ashby, web)",
      "Explainable matching algorithms with transparent scoring",
      "Optional AI enhancement with OpenAI integration",
      "Low-ops SQLite architecture with migration path"
    ]
  },
  "workExample": {
    "@type": "SoftwareSourceCode",
    "name": "Pinglet Job Matching Platform",
    "description": "End-to-end platform demonstrating systems design, data engineering, and AI integration",
    "programmingLanguage": ["Python", "TypeScript"],
    "runtimePlatform": "Python 3.12",
    "codeRepository": "https://github.com/keithnickas/pinglet"
  },
  "teaches": [
    {
      "@type": "DefinedTerm",
      "name": "Systems Design",
      "description": "Architecture decisions balancing simplicity, scalability, and maintainability"
    },
    {
      "@type": "DefinedTerm",
      "name": "Explainable AI",
      "description": "Dual-scoring system with deterministic baseline and optional AI enhancement"
    },
    {
      "@type": "DefinedTerm",
      "name": "Data Engineering",
      "description": "Robust data pipelines handling heterogeneous sources with retry logic"
    }
  ],
  "isAccessibleForFree": true
};

export default function PingletRecruiterCaseStudy() {
  return (
    <>
      <Script strategy="beforeInteractive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <RecruiterCaseStudyPage data={pingletCaseStudy} accentColor="indigo" />
    </>
  )
}
