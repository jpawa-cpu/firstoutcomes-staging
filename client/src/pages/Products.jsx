import { Link } from 'react-router-dom'

const products = [
  {
    title: 'AI Call Center Agent',
    desc: 'Handles inbound and outbound patient calls — scheduling, triage, and follow-up — without adding phone staff.',
  },
  {
    title: 'AI Annual Wellness Visit',
    desc: 'Schedules patients for Annual Wellness Visit. Integrates with Population Health and Insurance Eligibility Lists.',
  },
  {
    title: 'AI Advanced Dental Eligibility',
    desc: 'Verifies dental eligibility and benefits in real time, so front-desk and billing teams stop guessing coverage.',
  },
  {
    title: 'AI Outbound Referrals (PCMH)',
    desc: 'Provider steering toward preferred, in-network, cost-effective care by default, at the point of referral.',
    to: '/products/referral-agent',
  },
  {
    title: 'AI APCM',
    desc: 'Delivers and documents the thirteen monthly APCM service elements automatically, from enrollment through attestation.',
    to: '/products/apcm',
  },
]

export default function Products() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fo-ink)]">
          Products
        </h1>
        <p className="mt-6 text-[17px] text-[var(--fo-slate)] leading-relaxed">
          AI-driven workflows that cover the operational surface area of value-based care
          &mdash; each one completing work, not just surfacing it.
        </p>
      </section>

      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-6 md:grid-cols-2">
          {products.map((p) => {
            const Card = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[17px] font-semibold text-[var(--fo-ink)]">{p.title}</h2>
                  {p.to && (
                    <span className="text-[13px] font-medium text-[var(--fo-primary)] shrink-0">
                      Learn more &rarr;
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-[14.5px] text-[var(--fo-slate)] leading-relaxed">{p.desc}</p>
              </>
            )
            return p.to ? (
              <Link
                key={p.title}
                to={p.to}
                className="rounded-xl bg-white border border-[var(--fo-line)] p-7 hover:border-[var(--fo-primary)] transition-colors"
              >
                {Card}
              </Link>
            ) : (
              <div key={p.title} className="rounded-xl bg-white border border-[var(--fo-line)] p-7">
                {Card}
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fo-ink)]">
          Not sure where to start?
        </h2>
        <p className="mt-4 text-[15.5px] text-[var(--fo-slate)] leading-relaxed">
          We&rsquo;ll assess your current workflows and recommend where an AI workforce has the
          fastest, highest-impact path to completed outcomes.
        </p>
        <Link
          to="/about#contact"
          className="mt-8 inline-flex items-center rounded-md bg-[var(--fo-primary)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
        >
          Request an Assessment
        </Link>
      </section>
    </div>
  )
}
