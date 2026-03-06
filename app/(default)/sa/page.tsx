import SolutionsArchitectPortfolio from './portfolio-sa'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keith Nickas | Solutions Architect & Platform Engineer',
  description: '10+ years designing full-stack systems, modular backend services, shared UI platforms, and API contracts at Gap, Wristband, and Deem.',
  keywords: [
    'Solutions Architect',
    'Platform Engineer',
    'Full Stack',
    'React',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'System Design',
    'API Design',
    'Microservices',
  ],
  authors: [{ name: 'Keith Nickas', url: 'https://keithnickas.dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keithnickas.dev/sa',
    title: 'Keith Nickas | Solutions Architect & Platform Engineer',
    description: '10+ years designing full-stack systems at Gap, Wristband, and Deem.',
    siteName: 'Keith Nickas Portfolio',
  },
};

export default function SolutionsArchitectPage() {
  return <SolutionsArchitectPortfolio />
}
