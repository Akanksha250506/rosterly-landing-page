const steps = [
  ['01', 'Add your team', 'Invite your people and set their availability once.'],
  ['02', 'Fill the week', 'Place shifts in the right slots without the spreadsheet shuffle.'],
  ['03', 'Publish and relax', 'Send the finished roster and get notified when plans change.'],
]

export default function HowItWorks() {
  return <section id="how" className="section-pad">
    <div className="container-page">
      <div className="max-w-xl"><p className="eyebrow">A calmer Monday morning</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">From blank week to done in three steps.</h2></div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map(([number, title, text]) => <article key={number} className="relative border-l border-line pl-6">
          <span className="font-display text-4xl font-bold text-ink/25">{number}</span><h3 className="mt-5 font-display text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-ink/70">{text}</p>
        </article>)}
      </div>
    </div>
  </section>
}
