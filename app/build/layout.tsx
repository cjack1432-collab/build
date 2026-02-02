import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Lab | DCFB Wellness',
  description: 'Build legitimate, organized systems for your business and life. Website development, infrastructure, AI, and operations for Dallas Fort Worth.',
}

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  return children
}
