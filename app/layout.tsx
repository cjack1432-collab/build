import './globals.css'
import Link from 'next/link'
import Footer from '../components/FooterWrapper'
import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://moderatemurmurations.com'

export const metadata: Metadata = {
  title: 'Launch Your Business Online In Days | Moderate Murmurations',
  description: 'Launch your business online in days, not weeks. Websites, AI workflows, automation, branding, and digital systems built for small businesses and entrepreneurs.',
  keywords: [
    'business launch architecture',
    'AI workflow consulting',
    'small business website launch',
    'digital infrastructure',
    'business systems consulting',
    'Google Business Profile guidance',
    'Dallas business consultant',
    'AI business systems',
    'business readiness guide',
    'small business launch support',
  ],
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Launch Your Business Online In Days | Moderate Murmurations',
    description: 'Launch your business online in days, not weeks. Websites, AI workflows, automation, branding, and digital systems built for small businesses and entrepreneurs.',
    url: baseUrl,
    siteName: 'Moderate Murmurations',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Moderate Murmurations business launch architecture and AI workflow consulting',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launch Your Business Online In Days | Moderate Murmurations',
    description: 'Launch your business online in days, not weeks. Websites, AI workflows, automation, branding, and digital systems built for small businesses and entrepreneurs.',
    images: [`${baseUrl}/og.png`],
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Moderate Murmurations',
    alternateName: 'DCFB Wellness',
    url: baseUrl,
    description: 'Business launch architecture, AI workflow consulting, websites, digital resources, and practical business infrastructure for small businesses, founders, wellness professionals, and local service businesses.',
    sameAs: [
      'https://www.linkedin.com/in/chris-jackson143/',
      'https://mrnamaslay.com',
      'https://www.facebook.com/profile.php?id=61585109068041',
      'https://www.youtube.com/@MrNamaslay1',
      'https://www.instagram.com/mr_namaslay',
      'https://www.tiktok.com/@mrnamaslay',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Moderate Murmurations',
    url: baseUrl,
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* TODO: Add GA4 measurement ID and gtag script before launch analytics tracking. */}
        {/* TODO: Add Google Search Console verification meta tag when ownership token is available. */}
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
                <h2 style={{ margin: 0 }} className="font-serif">
                  Moderate Murmurations
                </h2>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.125rem', fontWeight: 300, fontStyle: 'italic', opacity: 0.6 }} className="font-serif">
                  Business Launch Architecture
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
