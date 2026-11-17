import RosterDemo from './RosterDemo'

export default function Hero() {
  return (
    <section id="top" className="section-pad overflow-hidden">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow">Scheduling, without the scramble</p>
          <h1 className="max-w-xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl">Build the weekly shift schedule before your tea gets cold.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ink/70">Rosterly helps small shops, clinics and cafés keep every shift covered and every teammate in the loop.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-primary">Request a demo <span className="ml-2" aria-hidden="true">→</span></a>
            <a href="#how" className="button-secondary">See how it works</a>
          </div>
          <p className="mt-5 text-sm font-semibold text-ink/60"><span className="mr-2 text-base" aria-hidden="true">✦</span>Free for teams up to 5 people</p>
        </div>
        <RosterDemo />
      </div>
    </section>
  )
}
