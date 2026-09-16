import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3">
            <img src="/logo.png" alt="First Outcomes" className="h-8 w-auto" />
          </div>
          <p className="text-[14px] text-[var(--fo-slate)] max-w-sm leading-relaxed">
            The AI workforce for value-based care. Your tools find the work — our AI does the work.
          </p>
          <p className="mt-4 text-[13px] text-[var(--fo-slate)]">
            2108 N St, Suite N, Sacramento, CA 95816
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-[var(--fo-ink)] mb-3">Platform</h3>
          <ul className="space-y-2 text-[14px] text-[var(--fo-slate)]">
            <li><Link to="/how-it-works" className="hover:text-[var(--fo-ink)]">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-[var(--fo-ink)]">Products</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-[var(--fo-ink)] mb-3">Company</h3>
          <ul className="space-y-2 text-[14px] text-[var(--fo-slate)]">
            <li><Link to="/about" className="hover:text-[var(--fo-ink)]">About</Link></li>
            <li><Link to="/about#contact" className="hover:text-[var(--fo-ink)]">Contact</Link></li>
            <li><a href="mailto:info@firstoutcomes.com" className="hover:text-[var(--fo-ink)]">info@firstoutcomes.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--fo-line)]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-[var(--fo-slate)]">
          <span>© {new Date().getFullYear()} First Outcomes. All rights reserved.</span>
          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Website Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
