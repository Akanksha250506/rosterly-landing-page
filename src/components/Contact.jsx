import { useRef, useState } from 'react'

const initialForm = { name: '', email: '', teamSize: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter at least 2 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid work email.'
  if (!form.teamSize) errors.teamSize = 'Please choose your team size.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const firstInvalid = useRef(null)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setSuccess('')
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validateField = (field) => {
    const fieldErrors = validate(form)
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    const invalidField = ['name', 'email', 'teamSize'].find((field) => nextErrors[field])
    if (invalidField) {
      firstInvalid.current?.querySelector(`[name="${invalidField}"]`)?.focus()
      return
    }
    setSuccess(`Thanks, ${form.name.trim().split(/\s+/)[0]}! We'll email you within one working day.`)
    setForm(initialForm)
  }

  return <section id="contact" className="section-pad bg-ink text-paper">
    <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><p className="eyebrow text-paper/60">Let’s make next week easier</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Ready to ditch the rota spreadsheet?</h2><p className="mt-5 max-w-sm leading-7 text-paper/70">Tell us a little about your team and we’ll show you around Rosterly.</p><div className="mt-8 space-y-2 text-sm text-paper/70"><p><span className="mr-3 text-accent">✉</span>hello@rosterly.app</p><p><span className="mr-3 text-accent">◷</span>Mon–Sat, 10 am to 6 pm IST</p><p><span className="mr-3 text-accent">↗</span>Made for teams that do more with less.</p></div></div>
      <form ref={firstInvalid} onSubmit={submit} noValidate className="rounded-2xl bg-paper p-6 text-ink sm:p-8">
        <div className="space-y-5">
          <Field label="Name" name="name" value={form.name} error={errors.name} onChange={(value) => updateField('name', value)} onBlur={() => validateField('name')} />
          <Field label="Work email" name="email" type="email" value={form.email} error={errors.email} onChange={(value) => updateField('email', value)} onBlur={() => validateField('email')} />
          <div><label htmlFor="teamSize" className="mb-2 block text-sm font-bold">Team size</label><select id="teamSize" name="teamSize" value={form.teamSize} onChange={(event) => updateField('teamSize', event.target.value)} onBlur={() => validateField('teamSize')} className={`w-full rounded-xl border bg-paper px-4 py-3 ${errors.teamSize ? 'border-danger' : 'border-line'}`}><option value="">Select a team size</option><option value="1-5">1–5 people</option><option value="6-25">6–25 people</option><option value="26-50">26–50 people</option><option value="51+">51+ people</option></select>{errors.teamSize && <p className="mt-2 text-sm text-danger" role="alert">{errors.teamSize}</p>}</div>
          <button type="submit" className="button-primary w-full">Request your demo <span className="ml-2" aria-hidden="true">→</span></button>
          {success && <p className="rounded-xl bg-mint px-4 py-3 text-sm font-bold text-ink" role="status" aria-live="polite">{success}</p>}
        </div>
      </form>
    </div>
  </section>
}

function Field({ label, name, type = 'text', value, error, onChange, onBlur }) {
  return <div><label htmlFor={name} className="mb-2 block text-sm font-bold">{label}</label><input id={name} name={name} type={type} value={value} onChange={(event) => onChange(event.target.value)} onBlur={onBlur} className={`w-full rounded-xl border bg-paper px-4 py-3 ${error ? 'border-danger' : 'border-line'}`} aria-invalid={Boolean(error)} />{error && <p className="mt-2 text-sm text-danger" role="alert">{error}</p>}</div>
}
