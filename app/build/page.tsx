'use client'

import React, { useRef } from 'react'
import SystemAuditor from '../../components/SystemAuditor'
import LightboxImage from '../../components/LightboxImage'

export default function Build() {
  const auditorRef = useRef<HTMLDivElement>(null)

  const scrollToAuditor = () => {
    auditorRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const consultationLink = 'mailto:mrnamaslay@gmail.com?subject=Free%20Launch%20Consultation%20%E2%80%93%20Moderate%20Murmurations'

  const buildLanes = [
    {
      title: 'Starting From Scratch',
      copy: 'You need a website, business presence, offer structure, and basic digital infrastructure without learning everything the hard way.',
    },
    {
      title: 'Cleaning Up What Exists',
      copy: 'Your site, socials, Google listing, or systems already exist, but they feel disconnected, outdated, unclear, or inefficient.',
    },
    {
      title: 'Building Leverage',
      copy: 'You want AI, workflows, resources, prompts, content systems, and business tools to work together instead of becoming more noise.',
    },
  ]

  const buildCategories = [
    {
      title: 'Build and Connect',
      copy: 'Websites, landing pages, domains, hosting, Google presence, business email, social alignment, and launch structure.',
    },
    {
      title: 'Clean and Optimize',
      copy: 'Site review, technical hygiene, SEO foundations, performance checks, content cleanup, usability improvements, and local visibility basics.',
    },
    {
      title: 'Teach and Organize',
      copy: 'AI literacy, prompt organization, workflow setup, Google Drive structure, reusable templates, and simple systems that can be maintained.',
    },
    {
      title: 'Legitimize and Prepare',
      copy: 'Entity structure awareness, business presence, account separation, readiness sequencing, credit awareness, and basic operational foundation.',
    },
    {
      title: 'Advise and Escalate',
      copy: 'Ads judgment, directory strategy, backlink awareness, vendor selection, delegation decisions, tool selection, and knowing when not to spend.',
    },
  ]

  const pricingOptions = [
    {
      title: 'Free Conversation',
      start: 'Free',
      includes: 'Initial review, business context, friction points, and next-step recommendation.',
    },
    {
      title: 'Foundational Review',
      start: 'Starting at $250',
      includes: 'Review of website, Google presence, business infrastructure, messaging, AI workflow opportunities, and priority fixes.',
    },
    {
      title: 'Launch Sprint',
      start: 'Starting at $1,500',
      includes: 'Website structure, messaging, launch support, basic SEO foundations, digital presence setup guidance, and practical implementation support.',
    },
    {
      title: 'Business Launch Architecture',
      start: 'Starting at $2,500',
      includes: 'A deeper launch build with website, positioning, digital infrastructure, Google visibility guidance, AI workflow setup, resource structure, and implementation support.',
    },
    {
      title: 'Systems Optimization / Ongoing Support',
      start: 'Custom',
      includes: 'Website cleanup, AI workflows, content systems, resource creation, operational organization, visibility improvements, and maintenance support.',
    },
  ]

  const processSteps = [
    'Start where you are',
    'Review what already exists',
    'Identify what actually needs work',
    'Build or clean up the right pieces',
    'Explain what changed and why',
    'Leave you with ownership, access, and next steps',
  ]

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* HERO */}
      <section className="container-custom py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Build Something Real. Fast. Clean. Connected.
            </h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-6">
              For businesses ready to move from scattered ideas into websites, workflows, visibility, and systems they can understand and own.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={consultationLink} className="cta-primary uppercase tracking-widest text-xs font-bold">
                Start A Conversation
              </a>
              <button
                onClick={scrollToAuditor}
                className="cta-secondary uppercase tracking-widest text-xs font-bold"
              >
                Request Foundational Review
              </button>
            </div>
          </div>
          <div className="w-full justify-self-end" style={{ maxWidth: '460px' }}>
            <div
              className="overflow-hidden bg-[#edece7] shadow-[0_16px_34px_rgba(0,0,0,0.14)]"
              style={{ aspectRatio: '3 / 2' }}
            >
              <LightboxImage
                src="/images/build-hero-image-one.webp"
                alt="Black and white dandelion and butterfly artwork representing organized movement and business clarity."
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 768px) 460px, 100vw"
                className="block w-full h-full"
                imageClassName="block h-full w-full object-cover"
                imageStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE MEET YOU */}
      <section className="bg-[#f2f1ed] py-24">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif mb-4">Where We Meet You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {buildLanes.map((lane, i) => (
              <div key={lane.title} className="flex flex-col h-full border-l border-gray-300 pl-6">
                <h3 className="text-lg font-serif mb-4 italic">{i + 1}) {lane.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed flex-grow">{lane.copy}</p>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mt-4">We meet you here.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE BUILD CAN INCLUDE */}
      <section className="container-custom py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-serif mb-4">What The Build Can Include</h2>
          <p className="opacity-60 italic">We do not sell tools. We do not sell hype. We build connected systems that work together and make sense.</p>
        </div>
        <div className="grid gap-12 max-w-4xl">
          {buildCategories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">{cat.title}</h4>
              <p className="text-sm md:text-base opacity-75 leading-relaxed">{cat.copy}</p>
            </div>
          ))}
        </div>
        <p className="text-xs opacity-50 leading-relaxed mt-10 max-w-3xl italic">
          Legitimize and Prepare guidance covers awareness and readiness only. This is not legal, tax, or professional financial advice.
        </p>
      </section>

      {/* STARTING POINTS */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif mb-4">Starting Points</h2>
            <p className="text-base opacity-75 leading-relaxed">
              Every project is scoped after the free conversation. These are starting points, not rigid promises.
            </p>
            <p className="text-sm opacity-60 leading-relaxed mt-2">
              Pricing depends on scope, timeline, assets available, implementation depth, and how much cleanup is required.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingOptions.map((option) => (
              <article
                key={option.title}
                style={{
                  border: '1px solid #e6e9ef',
                  padding: '2rem',
                  backgroundColor: '#faf9f6',
                }}
              >
                <p className="text-xs tracking-wide uppercase font-semibold opacity-50 mb-2">{option.start}</p>
                <h3 className="text-xl font-serif mb-4">{option.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{option.includes}</p>
              </article>
            ))}
          </div>
          <p className="text-sm opacity-60 leading-relaxed mt-10 max-w-3xl">
            Trade, phased builds, and flexible arrangements may be discussed when there is strong alignment.
          </p>
        </div>
      </section>

      {/* HOW THE PROCESS WORKS */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12">How The Process Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl font-serif opacity-20 italic shrink-0">{i + 1}</span>
                <p className="text-sm opacity-80 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '4rem', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', borderLeft: '3px solid #1a1a1a', paddingLeft: '1rem' }}>This is operator led, not agency managed.</p>
        </div>
      </section>

      {/* SYSTEMS THAT BREATHE */}
      <section className="container-custom py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif mb-6">Systems That Breathe</h2>
          <p className="text-base opacity-75 leading-relaxed mb-8">
            A calm system is not just a nice website. It is the visible front end and the invisible back end working together: accounts, links, workflows, files, content, tools, and decisions organized well enough that the business can move without constant friction.
          </p>
          <a href={consultationLink} className="cta-primary uppercase tracking-widest text-xs font-bold">
            Start A Conversation
          </a>
        </div>
      </section>

      {/* FOUNDATIONAL REVIEW FORM */}
      <section ref={auditorRef} id="review" className="bg-white py-24 border-y border-gray-100">
        <SystemAuditor />
      </section>

      {/* CLOSING CTA */}
      <section id="contact" className="container-custom py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
            Ready to build something clean, organized, and yours?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href={consultationLink} className="cta-primary uppercase tracking-widest text-xs font-bold">
              Start A Conversation
            </a>
            <button
              onClick={scrollToAuditor}
              className="cta-secondary uppercase tracking-widest text-xs font-bold"
            >
              Request Foundational Review
            </button>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-40 font-bold">No pressure. No rush. Just clarity.</p>
        </div>
      </section>
    </div>
  )
}
