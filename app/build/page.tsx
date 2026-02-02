'use client'

import React, { useState, useRef } from 'react'
import SystemAuditor from '../../components/SystemAuditor'

export default function Build() {
  const auditorRef = useRef<HTMLDivElement>(null)

  const scrollToAuditor = () => {
    auditorRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HERO SECTION */}
      <section className="container-custom py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Build Something Real. Fast. Clean. Connected.
          </h1>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-4">
            We help people build legitimate, organized systems for business and life — websites, infrastructure, AI, and operations — without confusion, dependency, or wasted time.
          </p>
          <p className="text-sm italic opacity-60 mb-10">
            Meet us where you are. Leave with systems you understand and own.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="cta-primary uppercase tracking-widest text-xs font-bold">
              Start a conversation
            </a>
            <button 
              onClick={scrollToAuditor}
              className="cta-secondary uppercase tracking-widest text-xs font-bold"
            >
              Have us review what you already have
            </button>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#f2f1ed] py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="flex flex-col h-full border-l border-gray-300 pl-6">
              <h3 className="text-lg font-serif mb-4 italic">1) If you are starting and want it done right</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-4 flex-grow">
                You may not love the technical side. You may not know where to begin. You just want your website live, your business set up cleanly, and your presence to look legitimate without learning everything the hard way.
              </p>
              <p className="text-xs font-medium mb-4 opacity-80">
                We handle the setup, explain what matters, and make sure you actually own what's built.
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">We meet you here.</span>
            </div>

            <div className="flex flex-col h-full border-l border-gray-300 pl-6">
              <h3 className="text-lg font-serif mb-4 italic">2) If you already have something but it feels messy</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-4 flex-grow">
                Your site exists. Your socials exist. Your Google listing exists. But nothing feels connected, efficient, or clear. You know enough to see the problems, but not enough to fix them quickly.
              </p>
              <p className="text-xs font-medium mb-4 opacity-80">
                We review, clean up, optimize, and connect what's already there — without forcing rebuilds or upsells.
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">We meet you here.</span>
            </div>

            <div className="flex flex-col h-full border-l border-gray-300 pl-6">
              <h3 className="text-lg font-serif mb-4 italic">3) If you want leverage and understanding</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-4 flex-grow">
                You care about systems. You want AI working for you, not confusing you. You want to understand credit, structure, tools, and timing so you can make calm, confident decisions and scale when it actually makes sense.
              </p>
              <p className="text-xs font-medium mb-4 opacity-80">
                We teach, organize, and build alongside you — translating complexity into usable systems.
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">We meet you here.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM AUDITOR SECTION */}
      <section ref={auditorRef} id="review" className="bg-white py-24 border-y border-gray-100">
        <SystemAuditor />
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section className="container-custom py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-serif mb-4">What we actually do.</h2>
          <p className="opacity-60 italic">We don't sell tools. We don't sell hype. We build connected systems that work together and make sense.</p>
        </div>

        <div className="grid gap-12 max-w-4xl">
          <div className="group">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">Build and Connect</h4>
            <p className="text-sm md:text-base opacity-75 leading-relaxed">
              Websites and landing pages. Domains and hosting. Google presence and verification. Social account setup and alignment. Clean structure from day one. If you already have something, we start there.
            </p>
          </div>
          <div className="group">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">Clean and Optimize</h4>
            <p className="text-sm md:text-base opacity-75 leading-relaxed">
              Site reviews and cleanup. SEO foundations and technical hygiene. Review systems and legitimacy signals. Performance and usability checks. Ongoing maintenance and oversight. No forced rebuilds. No unnecessary changes.
            </p>
          </div>
          <div className="group">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">Teach and Organize</h4>
            <p className="text-sm md:text-base opacity-75 leading-relaxed">
              AI literacy that actually saves time. Prompt organization and usage guidance. Chat and project structure. Google Drive organization. Simple workflows that scale with you. You don't need to become technical. You need clarity.
            </p>
          </div>
          <div className="group">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">Legitimize and Prepare</h4>
            <p className="text-sm md:text-base opacity-75 leading-relaxed">
              Entity and structure awareness. Personal and business credit literacy. Banking separation and readiness. Understanding timing, sequencing, and patience. Knowing when not to apply or expand. This is not about rushing. It's about being ready.
            </p>
          </div>
          <div className="group">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-3 border-b border-gray-200 pb-2 w-max pr-8">Advise and Escalate</h4>
            <p className="text-sm md:text-base opacity-75 leading-relaxed">
              Ads judgment (Google, Yelp, when and when not). Directory and backlink strategy. Shopping paid tools intelligently. Delegating work when it actually makes sense. We don't push vendors. We protect your time and money.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THIS WORKS */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12 text-center">How this works.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            {[
              "We start where you are. No assumptions. No judgment. We review what exists before touching anything.",
              "We assess before we change. Many things don't need rebuilding. They need understanding.",
              "We build fast and clean. When something needs to be created, we move quickly and deliberately.",
              "We explain as we go. You're not left guessing. You see what's happening and why.",
              "We don't rush decisions. Credit, ads, expansion — timing matters more than speed.",
              "You leave with ownership. Accounts are yours. Systems are understandable. You're not stuck."
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl font-serif opacity-20 italic shrink-0">{i + 1}</span>
                <p className="text-sm opacity-80 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-16 text-xs uppercase tracking-[0.3em] font-bold opacity-50">This is operator led, not agency managed.</p>
        </div>
      </section>

      {/* INFRASTRUCTURE READINESS */}
      <section className="container-custom py-24 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-serif mb-6 italic">Infrastructure Readiness</h2>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">Most problems don't come from lack of effort. They come from weak foundations.</p>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            We help you prepare your business to grow without breaking: Clean digital legitimacy. Proper account separation. Reporting consistency. Credit awareness and sequencing. Calm decision making instead of reactive moves.
          </p>
          <p className="text-xs italic opacity-50">If this layer matters to you, we already understand it. If it doesn't yet, we don't force it.</p>
        </div>
      </section>

      {/* ONGOING ACCESS AND MAINTENANCE */}
      <section className="py-24">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-serif mb-6 italic">Ongoing Access and Maintenance</h2>
            <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Building something is one moment. Operating it is ongoing.</p>
            <p className="text-sm text-zinc-900 leading-relaxed mb-6">
              We offer website and system reviews. Maintenance and cleanup. Guidance on ads and visibility. Help navigating tools and changes. Long term access to the system.
            </p>
            <p className="text-xs italic opacity-40">Depth, scope, and frequency are always discussed clearly. Nothing is hidden. Nothing is forced.</p>
          </div>
        </div>
      </section>

      {/* CLOSE CTA SECTION */}
      <section id="contact" className="container-custom py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
            If you want to build something clean, legitimate, and understandable — or fix what already exists — start here.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="mailto:hello@dcfbwellness.com" className="cta-primary uppercase tracking-widest text-xs font-bold">Start a conversation</a>
            <button 
              onClick={scrollToAuditor}
              className="cta-secondary uppercase tracking-widest text-xs font-bold"
            >
              Get a Foundational Audit
            </button>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-40 font-bold">No pressure. No rush. Just clarity.</p>
        </div>
      </section>
    </div>
  )
}
