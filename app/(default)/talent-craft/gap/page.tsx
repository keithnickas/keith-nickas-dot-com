import { type Metadata } from "next"
import RecruiterCaseStudyPage from "@/components/talent-craft/talent-craft-case-study"
import gapRecruiterCaseStudy from "@/data/talent-craft/gap-recruiter-case-study"
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Gap Multi-Brand Platform - Leadership Portfolio | Keith Nickas',
  description: 'Led frontend architecture serving millions across Gap and Banana Republic. Reduced development time 40%, mentored cross-functional teams, and established organization-wide standards.',
  keywords: [
    'Technical Leadership',
    'Design Systems',
    'E-commerce',
    'Frontend Architecture',
    'Team Leadership',
    'Cross-Functional Collaboration',
    'Gap Inc',
    'Retail Technology',
    'Engineering Management',
    'Stakeholder Management'
  ],
  openGraph: {
    type: 'article',
    url: 'https://keithnickas.dev/talent-craft/gap',
    title: 'Gap Multi-Brand Platform - Technical Leadership Case Study',
    description: 'Led frontend architecture serving millions. Reduced development time 40% through unified design system.',
    images: [
      {
        url: '/api/og?title=Technical%20Leadership&subtitle=Gap%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan',
        width: 1200,
        height: 630,
        alt: 'Gap Technical Leadership Case Study',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gap Multi-Brand Platform - Technical Leadership | Keith Nickas',
    description: 'Led frontend architecture serving millions. Reduced development time 40% through unified design system.',
    images: ['/api/og?title=Technical%20Leadership&subtitle=Gap%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan'],
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gap Multi-Brand Design System Platform",
  "author": {
    "@type": "Person",
    "name": "Keith Nickas",
    "url": "https://keithnickas.dev",
    "jobTitle": "Senior Software Engineer / Technical Lead",
    "sameAs": [
      "https://linkedin.com/in/keith-nickas",
      "https://github.com/keithnickas"
    ]
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": "2024-01-01T00:00:00Z",
  "publisher": {
    "@type": "Person",
    "name": "Keith Nickas"
  },
  "description": "Led frontend architecture for shared UI platforms serving millions of users across Gap and Banana Republic brands. Reduced development time by 40% through unified design system, enabling faster feature delivery while maintaining distinct brand identities.",
  "articleBody": "Technical leadership case study demonstrating cross-team collaboration, design system architecture, and measurable business impact across Gap Inc brands.",
  "keywords": "Technical Leadership, Design Systems, E-commerce, Frontend Architecture, Team Leadership, Cross-Functional Collaboration",
  "about": {
    "@type": "Project",
    "name": "Gap Multi-Brand Design System",
    "description": "Unified design system serving Gap and Banana Republic",
    "startDate": "2021-03",
    "endDate": "2025-08",
    "url": "https://keithnickas.dev/hiring/gap"
  },
  "mentions": [
    {
      "@type": "Organization",
      "name": "Gap, Inc.",
      "url": "https://www.gapinc.com"
    },
    {
      "@type": "Organization",
      "name": "Banana Republic",
      "url": "https://www.bananarepublic.com"
    }
  ],
  "workExample": {
    "@type": "CreativeWork",
    "name": "Multi-Brand Design System Platform",
    "description": "Reduced development time 40%, achieved 85%+ component reuse, serving millions of users",
    "learningResourceType": "Case Study"
  }
};

export default function GapRecruiterCaseStudy() {
  return (
    <>
      <Script strategy="beforeInteractive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <RecruiterCaseStudyPage data={gapRecruiterCaseStudy} accentColor="cyan" />
    </>
  )
}
