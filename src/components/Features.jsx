const features = [
  { title: 'Drag-and-drop weekly roster', text: 'See the whole week at a glance and make changes in a couple of clicks.', icon: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h5" /></> },
  { title: 'Instant shift alerts', text: 'Your team always knows when a shift is added, moved or covered.', icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></> },
  { title: 'Easy shift swaps', text: 'Let teammates trade shifts while you stay in control of approvals.', icon: <><path d="m7 7 3-3 3 3M10 4v11M17 17l-3 3-3-3M14 20V9" /></> },
]

export default function Features() {
  return (
    <section id="features" className="section-pad bg-mint">
      <div className="container-page">
        <p className="eyebrow">Everything in one place</p>
        <h2 className="mb-12 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Everything your team needs to stay on the same page.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => <article key={feature.title} className="border-t border-ink/20 pt-6">
            <svg className="mb-6 h-7 w-7 text-ink" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">{feature.icon}</svg>
            <h2 className="font-display text-2xl font-bold">{feature.title}</h2>
            <p className="mt-3 leading-7 text-ink/70">{feature.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  )
}
