import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Build With Moderate Murmurations | Website Launch, AI Workflows, and Digital Infrastructure',
  description: 'Explore launch sprints, foundational reviews, AI workflow setup, digital presence optimization, and business infrastructure support from Moderate Murmurations.',
  openGraph: {
    title: 'Build With Moderate Murmurations | Website Launch, AI Workflows, and Digital Infrastructure',
    description: 'Explore launch sprints, foundational reviews, AI workflow setup, digital presence optimization, and business infrastructure support from Moderate Murmurations.',
    url: `${baseUrl}/build`,
    siteName: 'Moderate Murmurations',
    type: 'website',
  },
}

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="canonical" href={`${baseUrl}/build`} />
      {children}
    </>
  )
}
