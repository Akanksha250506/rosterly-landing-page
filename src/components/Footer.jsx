const links = [['Features', 'features'], ['How it works', 'how'], ['Pricing', 'pricing'], ['Contact', 'contact']]

export default function Footer() {
  return <footer className="border-t border-line bg-paper py-8"><div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold"><span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-xs text-paper">R</span>Rosterly</a><nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink/60" aria-label="Footer navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="hover:text-ink">{label}</a>)}</nav><p className="text-sm text-ink/50">© 2026 Rosterly</p></div></footer>
}
