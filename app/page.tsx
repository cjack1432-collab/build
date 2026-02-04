import Link from 'next/link'

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="container-custom py-24 md:py-40 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl leading-tight">
          Systems for a <span className="italic">Calm</span> Life.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed mb-12">
          We help individuals and businesses find clarity through organization, 
          wellness, and technical foundations that actually work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:mrnamaslay@gmail.com?subject=Proposal%20Request%20%E2%80%93%20DCFB%20Wellness" className="cta-primary text-center tracking-wide uppercase text-sm font-semibold">
            Request a proposal
          </a>
          <Link href="/build" className="cta-secondary text-center tracking-wide uppercase text-sm font-semibold">
            Open the Website Builder →
          </Link>
        </div>
      </section>

      <section className="bg-white py-32 border-y border-gray-100">
        <div className="container-custom grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-serif mb-6">Foundation</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              We start with the basics. No fluff, just the critical layers required to exist professionally and personally in a digital world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Clarity</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Messy systems lead to a messy mind. We reorganize your digital footprint so you can focus on what matters.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Ownership</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              You should own your tools. We build alongside you, ensuring you understand every piece of the infrastructure we create.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <h4 className="text-lg font-semibold mb-4">Systems That Breathe</h4>
          <p className="text-base opacity-75 leading-relaxed mb-12">
            Real calm doesn't come from buying the right tool. It comes from understanding what you're building and why. A calm system spans front end and back end—the parts people see and the infrastructure they depend on. It means your website doesn't slow you down, your workflows don't pile up, and your AI doesn't become another source of friction. We treat AI as what it is: a tool that amplifies clarity or chaos depending on how you structure it. Our job is to help you build systems where clarity wins.
          </p>

          <h4 className="text-lg font-semibold mt-8 mb-4">The Business Side of Calm</h4>
          <p className="text-base opacity-75 leading-relaxed mb-3">
            Systems that last require more than good intentions. They need structure. That means your business presence is consistent, your digital legitimacy is clear, and your operations have enough separation and organization that you can actually think. It's the difference between having a website and having a system that works for you instead of against you. It's usually invisible work—nobody sees the time you saved because something was organized well. But you do. And that's where calm actually lives.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <h4 className="text-lg font-semibold mb-4">AI Optimization and Execution</h4>
          <p className="text-base opacity-75 leading-relaxed mb-12">
            Whether you are brand new to websites, landing pages, or social media, or you are ready to tighten up your systems at an intermediate or advanced level, DCFB Wellness helps Dallas Fort Worth teams build clean, repeatable workflows that actually get used. We focus on AI optimization and implementation, including how to communicate with ChatGPT with clarity, how to structure prompts, and how to organize your conversations and assets so your results stay consistent over time. The goal is simple: less guesswork, faster execution, and a system you can keep improving.
          </p>

          <h4 className="text-lg font-semibold mt-8 mb-4">Prompt Structure and Workflow Design</h4>
          <p className="text-base opacity-75 leading-relaxed mb-10">
            DCFB Wellness is building a faster and more focused version of this site to support scheduling, services, and education across mobility, meditation, and nervous system regulation. If you want to see the build in progress, visit the Build page for updates, structure tests, and new sections as they are published.
          </p>

          <div className="mt-12">
            <Link href="/build" className="cta-secondary">View the Build</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
