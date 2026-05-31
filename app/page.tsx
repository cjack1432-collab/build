import LightboxImage from '../components/LightboxImage'

export default function Home() {
  const consultationLink = 'mailto:mrnamaslay@gmail.com?subject=Free%20Launch%20Consultation%20%E2%80%93%20Moderate%20Murmurations'
  const walkthroughLink = 'mailto:mrnamaslay@gmail.com?subject=AI%20Guide%20Walkthrough%20%E2%80%93%20Moderate%20Murmurations'
  const aiGuideLink = '/resources/ai-as-modern-cognitive-leverage.pdf'
  const businessReadinessGuideLink = '/resources/dallas-world-cup-business-readiness-field-guide.pdf'

  const services = [
    {
      title: 'Business Launch Architecture',
      copy: 'For new businesses that need structure around their website, offer, domain, online presence, Google visibility, and launch path.',
    },
    {
      title: 'AI Workflow Setup',
      copy: 'For operators who want to use AI to organize ideas, improve communication, create reusable prompts, and reduce repetitive work.',
    },
    {
      title: 'Digital Presence Optimization',
      copy: 'For existing businesses that need clearer messaging, cleaner website structure, stronger resources, and better digital organization.',
    },
  ]

  const processSteps = [
    'Download the free AI guide',
    'Book a complimentary consultation',
    'Review your business, idea, or current digital setup',
    'Identify the highest-friction areas',
    'Leave with clearer next steps',
    'Decide whether a paid implementation path makes sense',
  ]

  const resources = [
    {
      title: 'Dallas World Cup Business Readiness Field Guide',
      description:
        'A business-facing readiness resource built to help Dallas and Arlington visitor-facing businesses prepare for major-event traffic, offers, QR systems, visibility, and local activation opportunities.',
      href: businessReadinessGuideLink,
      label: 'View Business Readiness Guide',
      external: false,
      download: false,
      image: null,
      imageAlt: '',
    },
    {
      title: 'Dallas World Cup Survival Map',
      description:
        'Move Through Dallas Like You\'ve Already Been There. This published resource connects to the broader readiness ecosystem. The Business Readiness Field Guide helps businesses prepare. The Survival Map supports the visitor side of the same Dallas event-readiness ecosystem.',
      href: 'https://a.co/d/0aDUwZl5',
      label: 'View Published Book On Amazon',
      external: true,
      download: false,
      image: null,
      imageAlt: '',
    },
    {
      title: 'FreQuent SEE H2O',
      description:
        'A live launch example showing how a business idea can be shaped into a clean online presence with brand direction, website structure, and digital launch support.',
      href: 'https://frequentseeh20.com',
      label: 'View Live Example',
      external: true,
      download: false,
      image: '/images/frequent-see-h2o-logo.webp',
      imageAlt: 'FreQuent SEE H2O logo used as a live launch example.',
    },
    {
      title: 'DCFB Wellness Ecosystem',
      description:
        'Moderate Murmurations operates inside the broader DCFB Wellness ecosystem, connecting wellness, hospitality, consulting, business readiness, and AI-assisted systems work.',
      href: 'https://dcfbwellness.com',
      label: 'Visit DCFB Wellness',
      external: true,
      download: false,
      image: null,
      imageAlt: '',
    },
  ]

  const workPaths = [
    {
      title: 'Free Consultation',
      copy: 'A complimentary first conversation to review your business, clarify what is needed, and identify practical next steps.',
      price: 'Free',
    },
    {
      title: 'Launch Sprint',
      copy: 'For businesses that need help turning an idea into a clean online presence with website structure, messaging, basic SEO foundations, Google visibility guidance, and launch support.',
      price: 'Custom quote after consultation',
    },
    {
      title: 'Systems Optimization',
      copy: 'For existing businesses that need AI workflows, content systems, operational cleanup, website refinement, digital resources, or better internal organization.',
      price: 'Custom quote after consultation',
    },
  ]

  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO */}
      <section className="container-custom py-24 md:py-40 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl leading-tight">
          Launch Your Business Online In Days, Not Weeks
        </h1>
        <p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed mb-12">
          Moderate Murmurations helps small businesses and operators turn scattered ideas into websites, AI workflows, digital resources, and business infrastructure that actually works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={consultationLink} className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
            Book Free Launch Consultation
          </a>
          <a href={aiGuideLink} download className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
            Download Free AI Guide
          </a>
        </div>
        <p className="text-sm opacity-60 leading-relaxed mt-6 max-w-2xl">
          Start with a free conversation. Leave with clearer next steps.
        </p>
      </section>

      {/* FREE AI GUIDE */}
      <section className="py-32 border-y">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-wide uppercase font-semibold opacity-60 mb-4">
              Start With The Free AI Guide
            </p>
            <h2 className="text-4xl font-serif mb-6">AI as Modern Cognitive Leverage</h2>
            <p className="text-base opacity-75 leading-relaxed mb-6">
              A beginner-friendly orientation for reducing friction, organizing thought, and using AI with better judgment.
            </p>
            <p className="text-base opacity-75 leading-relaxed mb-12">
              Most people do not need more tools first. They need less confusion. This guide explains how AI can help organize ideas, clarify communication, build reusable systems, and turn scattered thoughts into practical next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={aiGuideLink} download className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
                Download The Free Guide
              </a>
              <a href={walkthroughLink} className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
                Schedule A Walkthrough
              </a>
            </div>
          </div>
          <div className="w-full mx-auto" style={{ maxWidth: '460px' }}>
            <div
              className="overflow-hidden"
              style={{
                backgroundColor: '#f8f6f1',
                padding: '0.75rem',
                boxShadow: '0 18px 35px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ aspectRatio: '3 / 2', overflow: 'hidden' }}>
                <LightboxImage
                  src="/images/ai-modern-cognitive-leverage-cover.webp"
                  alt="AI as Modern Cognitive Leverage guide cover by Moderate Murmurations."
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="block w-full h-full"
                  imageClassName="block h-full w-full object-cover cursor-zoom-in"
                  imageStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY BUILD */}
      <section className="bg-white py-32 border-b">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-serif mb-6">What We Actually Build</h2>
            <p className="text-base opacity-75 leading-relaxed">
              Most businesses do not need a random tool stack. They need the pieces around the business to make sense.
            </p>
            <p className="text-base opacity-75 leading-relaxed mt-6">
              Moderate Murmurations helps organize the digital foundation that makes a business easier to launch, explain, find, and operate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                style={{
                  border: '1px solid #e6e9ef',
                  padding: '2rem',
                  backgroundColor: '#faf9f6',
                }}
              >
                <h3 className="text-xl font-serif mb-6">{service.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* START FREE */}
      <section className="py-32">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-serif mb-6">Start Free. Build With Intention.</h2>
            <p className="text-base opacity-75 leading-relaxed mb-6">
              The first conversation is complimentary. We use it to look at your business, your idea, or your current digital setup and identify what is actually creating friction.
            </p>
            <p className="text-base opacity-75 leading-relaxed mb-6">
              The goal is not to sell unnecessary tools. The goal is to understand what needs to be clarified, built, cleaned up, or connected.
            </p>
            <p className="text-base font-semibold mb-12">
              Information first. Trust first. Implementation second.
            </p>
          </div>
          <div
            style={{
              border: '1px solid #e6e9ef',
              backgroundColor: '#ffffff',
              padding: '2rem',
              marginBottom: '2rem',
            }}
          >
            {processSteps.map((step, index) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: index === processSteps.length - 1 ? '0' : '0 0 1rem 0',
                  margin: index === processSteps.length - 1 ? '0' : '0 0 1rem 0',
                  borderBottom: index === processSteps.length - 1 ? 'none' : '1px solid #e6e9ef',
                }}
              >
                <span className="text-sm font-semibold opacity-60" style={{ minWidth: '1.5rem' }}>
                  {index + 1}.
                </span>
                <p className="text-base opacity-75 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={consultationLink} className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
              Book Free Consultation
            </a>
            <a href="/build" className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
              View Build Options
            </a>
          </div>
        </div>
      </section>

      {/* BUILT RESOURCES AND LIVE EXAMPLES */}
      <section className="bg-white py-32 border-y">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-serif mb-6">Built Resources And Live Examples</h2>
            <p className="text-base opacity-75 leading-relaxed">
              A small set of public resources and live examples that show how Moderate Murmurations approaches clarity, launch support, and practical implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <article
                key={resource.title}
                style={{
                  border: '1px solid #e6e9ef',
                  padding: '2rem',
                  backgroundColor: '#faf9f6',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 className="text-xl font-serif" style={{ flex: 1, paddingRight: resource.image ? '1rem' : '0' }}>
                    {resource.title}
                  </h3>
                  {resource.image && (
                    <div style={{ width: '132px', height: '132px', flexShrink: 0, overflow: 'hidden' }}>
                      <LightboxImage
                        src={resource.image}
                        alt={resource.imageAlt || resource.title}
                        width={1254}
                        height={1254}
                        sizes="132px"
                        className="block w-full h-full"
                        imageClassName="block w-full h-full object-cover"
                        imageStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>
                <p className="text-sm opacity-75 leading-relaxed mb-8">{resource.description}</p>
                <a
                  href={resource.href}
                  className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold"
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noopener noreferrer' : undefined}
                  download={resource.download || undefined}
                >
                  {resource.label}
                </a>
              </article>
            ))}
          </div>
          <p className="text-xs opacity-50 leading-relaxed mt-10 max-w-3xl">
            This is an independent business readiness and visitor guidance resource. It is not affiliated with, endorsed by, sponsored by, or officially connected to FIFA, FIFA World Cup 2026, AT&amp;T Stadium, Fair Park, or any official tournament entity. All trademarks belong to their respective owners.
          </p>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section className="py-32">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-serif mb-6">Ways To Work Together</h2>
            <p className="text-base opacity-75 leading-relaxed">
              Moderate Murmurations starts with a free conversation and scopes the work around actual need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workPaths.map((path) => (
              <article
                key={path.title}
                style={{
                  border: '1px solid #e6e9ef',
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                }}
              >
                <p className="text-sm tracking-wide uppercase font-semibold opacity-60 mb-4">{path.price}</p>
                <h3 className="text-xl font-serif mb-6">{path.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{path.copy}</p>
              </article>
            ))}
          </div>
          <p className="text-sm opacity-60 leading-relaxed mt-12 max-w-3xl">
            Scope depends on the business, timeline, and level of implementation required. Flexible arrangements may be discussed when there is strong alignment.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-32 border-y">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <h2 className="text-4xl font-serif mb-6">Ready To Launch Cleaner?</h2>
          <p className="text-base opacity-75 leading-relaxed mb-12">
            Start with the free guide, or book a complimentary consultation and we will identify what your business actually needs before anything gets built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={consultationLink} className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
              Book Free Consultation
            </a>
            <a href={aiGuideLink} download className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
              Download Free AI Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
