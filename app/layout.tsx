import './globals.css'
import Link from 'next/link'
import Footer from '../components/FooterWrapper'
import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'DCFB Wellness | Systems for a Calm Life',
  description: 'Build calm systems for your business and life. Website development, AI workflows, and business infrastructure for Dallas Fort Worth.',
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'DCFB Wellness | Systems for a Calm Life',
    description: 'Build calm systems for your business and life. Website development, AI workflows, and business infrastructure for Dallas Fort Worth.',
    url: baseUrl,
    siteName: 'DCFB Wellness',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DCFB Wellness | Systems for a Calm Life',
    description: 'Build calm systems for your business and life. Website development, AI workflows, and business infrastructure for Dallas Fort Worth.',
    images: [`${baseUrl}/og.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DCFB Wellness',
    url: baseUrl,
    sameAs: [
      'https://www.linkedin.com/in/chris-jackson143/',
      'https://mrnamaslay.com',
      'https://www.facebook.com/profile.php?id=61585109068041',
      'https://www.youtube.com/@MrNamaslay1',
      'https://www.instagram.com/mr_namaslay',
      'https://www.tiktok.com/@mrnamaslay',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="canonical" href={baseUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header style={{ borderBottom: '1px solid #e6e9ef' }}>
          <div
            className="container-custom"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 0',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <h1 style={{ margin: 0 }} className="font-serif">
                  DCFB Wellness
                </h1>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', fontWeight: 300, fontStyle: 'italic', opacity: 0.6 }} className="font-serif">
                  Moderate Murmurations
                </p>
              </div>
            </Link>
            <nav aria-label="Primary">
              <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/build">Build</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
