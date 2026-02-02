 'use client'

type FooterProps = {
  showContact?: boolean
}

export default function Footer({ showContact = true }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '3rem 0' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DCFB Wellness</h2>
          <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.6 }}>© 2026 DCFB Wellness.</p>
        </div>

        {/* Two Column Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '3rem' }}>
          {/* Left Column: Mr. Namaslay */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mr. Namaslay</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.linkedin.com/in/chris-jackson143/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>LinkedIn</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://mrnamaslay.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Website</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://maps.app.goo.gl/sMkBDxNTgLxgMvvq6" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Google</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.yelp.com/biz/dcfb-wellness-rowlett" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Yelp</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.facebook.com/profile.php?id=61585109068041&mibextid=wwXIfr&rdid=pWiiY14KFiuRrLhu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14SkR7G4Nij%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Facebook</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.youtube.com/@MrNamaslay1" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>YouTube</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.instagram.com/mr_namaslay" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Instagram</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.tiktok.com/@mrnamaslay?_r=1&_t=ZT-91TzuTc48ib" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>TikTok</a></li>
            </ul>
          </div>

          {/* Right Column: Limitless Libations */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitless Libations</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://mrnamaslay.com/limitless-libations/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Website</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.yelp.com/biz/limitless-libations-rowlett" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Yelp</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.facebook.com/profile.php?id=61585106365307" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Facebook</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.youtube.com/@Limitless_Libations" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>YouTube</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.instagram.com/limitless_libations_/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Instagram</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://www.tiktok.com/@limitless.libation" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>TikTok</a></li>
              <li style={{ marginBottom: '0.875rem' }}><a href="https://maps.app.goo.gl/8G1k3U1F8N1U3Zij9" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 200ms' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>Google</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section (conditionally shown) */}
        {showContact && (
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h3>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Email: <a href="mailto:mrnamaslay@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>mrnamaslay@gmail.com</a></p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Phone: 661 812 4995</p>
          </div>
        )}
      </div>
    </footer>
  )
}

