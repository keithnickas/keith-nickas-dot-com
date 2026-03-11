import {EMSections as EngineeringManagerPortfolio} from './engineering-manager'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keith Nickas | Engineering Manager & Technical Lead',
  description: '10+ years as a frontend engineer and technical leader. Led teams at Gap, Wristband, and Deem — mentoring engineers, driving delivery, and aligning technical decisions with business outcomes.',
  keywords: [
    'Engineering Manager',
    'Technical Lead',
    'Frontend Engineer',
    'React',
    'Team Leadership',
    'Mentorship',
    'Agile',
    'Sprint Planning',
    'Design Systems',
    'Next.js',
  ],
  authors: [{ name: 'Keith Nickas', url: 'https://keithnickas.dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keithnickas.dev/em',
    title: 'Keith Nickas | Engineering Manager & Technical Lead',
    description: '10+ years leading frontend teams at Gap, Wristband, and Deem.',
    siteName: 'Keith Nickas Portfolio',
  },
};

export default function EngineeringManagerPage() {
  return <EngineeringManagerPortfolio />
}
