import { Link } from 'react-router-dom'

const products = [
  {
    title: 'Attribution & Eligibility',
    desc: 'Automated roster reconciliation and patient-to-plan assignment so attribution stays accurate as rosters change.',
  },
  {
    title: 'Access & Scheduling',
    desc: 'Patient outreach, appointment booking, and no-show recovery that runs continuously, without added staff.',
  },
  {
    title: 'Referral & Network Routing',
    desc: 'Provider steering toward preferred, in-network, cost-effective care by default, at the point of referral.',
  },
  {
    title: 'Quality & Care Gap Closure',
    desc: 'Preventive and chronic care gaps identified and resolved before they affect quality measures.',
  },
  {
    title: 'HCC, Risk & Documentation',
    desc: 'Risk capture and documentation completed accurately at a scale manual chart review cannot reach.',
  },
  {
    title: 'Prior Auth & Admin Follow-Up',
    desc: 'Authorization tracking and administrative resolution handled end-to-end, with less staff time chasing status.',
  },
  {
    title: 'Episode & Transition Management',
    desc: 'Discharge coordination and post-acute routing that keeps transitions of care from falling through the cracks.',
  },
  {
    title: 'Exceptions & Escalations',
    desc: 'Smart routing of exceptions to staff, with full context attached, so human review time goes where it matters.',
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
          Eight AI-driven workflows that cover the operational surface area of value-based care
          &mdash; each one completing work, not just surfacing it.
        </p>
      </section>

      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.title} className="rounded-xl bg-white border border-[var(--fo-line)] p-7">
              <h2 className="text-[17px] font-semibold text-[var(--fo-ink)]">{p.title}</h2>
              <p className="mt-2.5 text-[14.5px] text-[var(--fo-slate)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
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
