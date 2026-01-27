import Portfolio from './portfolio'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keith Nickas | Senior Frontend Engineer & Design Systems Expert',
  description: '10+ years building scalable React & Next.js applications with focus on design systems, accessibility, and performance. Experienced technical leader at Gap, Wristband, and Deem.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js Expert',
    'Design Systems',
    'TypeScript',
    'Web Performance',
    'Accessibility',
    'Technical Leadership',
    'UI Architecture',
    'Component Libraries'
  ],
  authors: [{ name: 'Keith Nickas', url: 'https://keithnickas.dev' }],
  creator: 'Keith Nickas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keithnickas.dev',
    title: 'Keith Nickas | Senior Frontend Engineer & Design Systems Expert',
    description: '10+ years building scalable React & Next.js applications with focus on design systems, accessibility, and performance.',
    siteName: 'Keith Nickas Portfolio',
    images: [
      {
        url: `/api/og?title=Keith Nickas&subtitle=Senior Frontend Engineer&techStack=React,Next.js,TypeScript,Figma&theme=cyan`,
        width: 1200,
        height: 630,
        alt: 'Keith Nickas - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith Nickas | Senior Frontend Engineer',
    description: '10+ years building scalable React & Next.js applications with focus on design systems, accessibility, and performance.',
    images: ['/api/og?title=Keith Nickas&subtitle=Senior Frontend Engineer&techStack=React,Next.js,TypeScript,Figma&theme=cyan'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=cjBClk7UT2OOQlzHeIZAxwStM3kZh3VCBrdzgsKPc80',
  },
};

export default function Home() {

  return (
    <>
      <Portfolio />
    </>
  )
}
