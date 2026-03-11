import { type Metadata } from "next"
import RecruiterCaseStudyPage from "@/components/talent-craft/talent-craft-case-study"
import wristbandRecruiterCaseStudy from "@/data/talent-craft/wristband-recruiter-case-study"
import Script from "next/dist/client/script";

export const metadata: Metadata = {
  title: 'Wristband Multi-Brand Platform - Leadership Portfolio | Keith Nickas',
  description: 'Led frontend architecture serving millions across Wristband and Banana Republic. Reduced development time 40%, mentored cross-functional teams, and established organization-wide standards.',
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
    url: 'https://keithnickas.dev/talent-craft/wristband',
    title: 'Wristband Multi-Brand Platform - Technical Leadership Case Study',
    description: 'Led frontend architecture serving millions. Reduced development time 40% through unified design system.',
    images: [
      {
        url: '/api/og?title=Technical%20Leadership&subtitle=Wristband%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan',
        width: 1200,
        height: 630,
        alt: 'Wristband Technical Leadership Case Study',
      },
    ],
    publishedTime: '2024-01-01T00:00:00Z',
    authors: ['Keith Nickas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wristband Multi-Brand Platform - Technical Leadership | Keith Nickas',
    description: 'Led frontend architecture serving millions. Reduced development time 40% through unified design system.',
    images: ['/api/og?title=Technical%20Leadership&subtitle=Wristband%20Multi-Brand%20Platform&techStack=Team%20Leadership,Design%20Systems,React&theme=cyan'],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wristband Enterprise Authentication Platform",
  "author": {
    "@type": "Person",
    "name": "Keith Nickas",
    "url": "https://keithnickas.dev",
    "jobTitle": "Principal Frontend Engineer",
    "sameAs": [
      "https://linkedin.com/in/keith-nickas",
      "https://github.com/keithnickas"
    ]
  },
  "datePublished": "2020-04-01T00:00:00Z",
  "dateModified": "2025-02-01T00:00:00Z",
  "publisher": {
    "@type": "Person",
    "name": "Keith Nickas"
  },
  "description": "Led frontend architecture and dashboard development for enterprise CIAM platform serving technical and non-technical users. Transformed complex authentication workflows into intuitive interfaces that reduced onboarding time while maintaining enterprise-grade security.",
  "articleBody": "Product development case study demonstrating UX design, developer experience focus, and long-term partnership success over 5+ years.",
  "keywords": "Product Development, UX Design, Developer Experience, Authentication, Enterprise Software, SDK Development",
  "about": {
    "@type": "Project",
    "name": "Wristband CIAM Platform",
    "description": "Enterprise authentication and access management platform",
    "startDate": "2020-04",
    "url": "https://keithnickas.dev/hiring/wristband"
  },
  "mentions": [
    {
      "@type": "Organization",
      "name": "Wristband",
      "url": "https://wristband.dev"
    }
  ],
  "workExample": {
    "@type": "SoftwareApplication",
    "name": "Authentication Dashboard & SDK",
    "description": "Reduced onboarding time, enhanced developer adoption through intuitive UX and easy-to-use SDKs",
    "applicationCategory": "Enterprise Software",
    "operatingSystem": "Web"
  },
  "duration": "P5Y",
  "timeRequired": "PT5Y"
};

export default function WristbandRecruiterCaseStudy() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RecruiterCaseStudyPage data={wristbandRecruiterCaseStudy} accentColor="purple" />
    </>
  )
}
