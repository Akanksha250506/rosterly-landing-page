import { useState } from 'react'

const links = [
  ['Features', 'features'],
  ['How it works', 'how'],
  ['Pricing', 'pricing'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight" onClick={closeMenu}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm text-paper">R</span>
          Rosterly
        </a>
        <div className="hidden items-center gap-7 min-[900px]:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink">{label}</a>)}
          <a href="#contact" className="button-primary px-4 py-2.5 text-sm">Get started</a>
        </div>
        <button type="button" className="rounded-lg p-2 min-[900px]:hidden" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="my-1.5 block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-line bg-paper px-5 py-4 min-[900px]:hidden">
          <div className="container-page flex flex-col gap-1">
            {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu} className="rounded-lg px-3 py-3 font-semibold hover:bg-mint">{label}</a>)}
            <a href="#contact" onClick={closeMenu} className="button-primary mt-2">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
