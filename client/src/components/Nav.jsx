import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--fo-line)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="First Outcomes" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[14.5px] text-[var(--fo-slate)]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[var(--fo-ink)] ${isActive ? 'text-[var(--fo-ink)] font-medium' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/about#contact"
            className="inline-flex items-center rounded-md bg-[var(--fo-primary)] px-4 py-2 text-[14px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
          >
            Request Assessment
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--fo-line)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--fo-line)] px-6 py-4 flex flex-col gap-4 bg-white text-[15px]">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-[var(--fo-slate)]">
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/about#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-[var(--fo-primary)] px-4 py-2 font-medium text-white"
          >
            Request Assessment
          </Link>
        </div>
      )}
    </header>
  )
}
