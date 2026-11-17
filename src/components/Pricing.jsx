import { useState } from 'react'

const plans = [
  { name: 'Starter', monthly: '0', yearly: '0', description: 'For tiny teams finding their rhythm.', features: ['Up to 5 people', 'Weekly roster', 'Email support'] },
  { name: 'Team', monthly: '499', yearly: '399', description: 'For growing teams that need less back-and-forth.', features: ['Up to 25 people', 'Shift alerts and swaps', 'Priority support'], popular: true },
  { name: 'Business', monthly: '1,499', yearly: '1,199', description: 'For busy teams with more moving parts.', features: ['Unlimited people', 'Multiple locations', 'Dedicated support'] },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  return <section id="pricing" className="section-pad bg-mint">
    <div className="container-page">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Simple pricing</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">More time for the work.</h2></div>
        <button type="button" role="switch" aria-checked={yearly} onClick={() => setYearly((value) => !value)} className="flex w-fit items-center gap-3 rounded-full border border-ink/20 bg-paper p-1 text-sm font-bold"><span className={`rounded-full px-3 py-2 ${!yearly ? 'bg-ink text-paper' : ''}`}>Monthly</span><span className={`rounded-full px-3 py-2 ${yearly ? 'bg-ink text-paper' : ''}`}>Yearly <em className="not-italic text-xs text-accent">-20%</em></span></button>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => <article key={plan.name} className={`relative rounded-2xl border p-6 ${plan.popular ? 'border-ink bg-ink text-paper' : 'border-line bg-paper'}`}>
          {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">Most popular</span>}
          <h3 className="font-display text-2xl font-bold">{plan.name}</h3><p className={`mt-2 text-sm ${plan.popular ? 'text-paper/70' : 'text-ink/60'}`}>{plan.description}</p>
          <p className="mt-8 font-display text-4xl font-bold">₹{yearly ? plan.yearly : plan.monthly}<span className={`font-body text-sm font-normal ${plan.popular ? 'text-paper/70' : 'text-ink/60'}`}> / month</span></p>
          <ul className={`mt-8 space-y-3 border-t pt-6 text-sm ${plan.popular ? 'border-paper/20' : 'border-line'}`}>{plan.features.map((feature) => <li key={feature}><span className="mr-2" aria-hidden="true">✓</span>{feature}</li>)}</ul>
        </article>)}
      </div>
    </div>
  </section>
}
