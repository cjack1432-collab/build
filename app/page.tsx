import MurmurDivider from '@/components/MurmurDivider'

export default function Home() {
  const consultationLink = 'mailto:mrnamaslay@gmail.com?subject=Free%20Consultation%20%E2%80%93%20Moderate%20Murmurations'
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
    'Decide whether a paid implementation path makes sense',
  ]

  const resources = [
    {
      title: 'AI as Modern Cognitive Leverage',
      description:
        'A public primer created by Moderate Murmurations to help beginners, business owners, wellness practitioners, hospitality professionals, creators, and operators understand AI as practical cognitive leverage.',
      href: aiGuideLink,
      label: 'Download AI Guide',
      external: false,
      download: true,
      image: null,
      imageAlt: '',
    },
    {
      title: 'Dallas World Cup Business Readiness Field Guide',
      description:
        'A business readiness resource built for Dallas and Arlington visitor-facing businesses preparing for major-event traffic, local visibility, QR systems, offer planning, and activation opportunities. This is an independent resource and is not affiliated with FIFA, the FIFA World Cup 2026, AT&T Stadium, Fair Park, or any official tournament entity.',
      href: businessReadinessGuideLink,
      label: 'View Business Readiness Guide',
      external: false,
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
      image: '/images/frequentsee-h2o-logo.png',
      imageAlt: 'FreQuent SEE H2O logo',
    },
    {
      title: 'Published Resource',
      description:
        'A published resource connected to the broader DCFB Wellness and Moderate Murmurations ecosystem.',
      href: 'https://a.co/d/0aDUwZl5',
      label: 'View Published Book On Amazon',
      external: true,
      download: false,
      image: null,
      imageAlt: '',
    },
    {
      title: 'DCFB Wellness Ecosystem',
      description:
        'Moderate Murmurations operates within the broader DCFB Wellness ecosystem, connecting wellness, hospitality, consulting, business readiness, and AI-assisted systems work.',
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
      <section className="container-custom py-24 md:py-40 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl leading-tight">
          Launch Your Business Online With More Clarity
        </h1>
        <p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed mb-12">
          Moderate Murmurations helps small businesses, founders, and operators turn scattered ideas into websites, AI workflows, digital resources, and practical business infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={aiGuideLink} download className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
            Download Free AI Guide
          </a>
          <a href={consultationLink} className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
            Book Free Consultation
          </a>
        </div>
        <p className="text-sm opacity-60 leading-relaxed mt-6 max-w-2xl">
          Start with the guide. Then book a complimentary consultation to identify what your business actually needs.
        </p>
      </section>

      <MurmurDivider />

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
            <p className="text-base opacity-75 leading-relaxed mb-6">
              This guide is the entry point for people who are curious about AI but do not want more noise, jargon, or tools they do not understand.
            </p>
            <p className="text-base opacity-75 leading-relaxed mb-12">
              Most people do not need more tools first. They need less confusion. This guide explains how AI can help organize ideas, clarify communication, build reusable systems, and turn scattered thoughts into practical next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={aiGuideLink} download className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
                Download The Free Guide
              </a>
              <a href={consultationLink} className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
                Schedule A Free Walkthrough
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/ai-modern-cognitive-leverage-cover.webp"
              alt="AI as Modern Cognitive Leverage guide cover with abstract butterfly and dandelion artwork."
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                border: '1px solid #e6e9ef',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </div>
      </section>

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

      <section className="py-32">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-serif mb-6">Start Free. Build With Intention.</h2>
            <p className="text-base opacity-75 leading-relaxed mb-6">
              The first conversation is complimentary. The goal is not to sell unnecessary tools. The goal is to identify where your business is losing time, clarity, visibility, or momentum.
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
        </div>
      </section>

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
                {resource.image && (
                  <img
                    src={resource.image}
                    alt={resource.imageAlt || resource.title}
                    style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '1rem' }}
                  />
                )}
                <h3 className="text-xl font-serif mb-4">{resource.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed mb-8">{resource.description}</p>
                <a
                  href={resource.href}
                  className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold"
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noreferrer' : undefined}
                  download={resource.download || undefined}
                >
                  {resource.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-serif mb-6">Ways To Work Together</h2>
            <p className="text-base opacity-75 leading-relaxed">
              Moderate Murmurations starts with a free conversation, then scopes the work around the actual need.
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

      <section className="bg-white py-32 border-y">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <h2 className="text-4xl font-serif mb-6">Ready To Reduce The Confusion?</h2>
          <p className="text-base opacity-75 leading-relaxed mb-12">
            Start with the free guide. Then book a complimentary consultation and we will identify what your business actually needs before anything gets built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={aiGuideLink} download className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
              Download Free AI Guide
            </a>
            <a href={consultationLink} className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
