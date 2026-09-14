import { Link } from 'react-router-dom'

const steps = [
  {
    n: '01',
    title: 'Ingest',
    desc: 'We securely connect to the systems you already run &mdash; EHRs, claims, care management tools, provider rosters, and quality platforms &mdash; and ingest the signals that matter.',
  },
  {
    n: '02',
    title: 'Analyze',
    desc: 'Our agents analyze incoming signals against your workflows and determine the optimal next action for each case, in real time.',
  },
  {
    n: '03',
    title: 'Execute',
    desc: 'Agents complete the work itself: documentation, outreach, scheduling, referral routing, and administrative follow-up.',
  },
  {
    n: '04',
    title: 'Report',
    desc: 'Outcomes are reported back into your existing systems, so your team always has visibility without adding another dashboard.',
  },
]

const contracts = [
  'Medicare Advantage',
  'MSSP',
  'ACO REACH',
  'Medicaid ACO',
  'Managed Medicaid',
  'Capitated Contracts',
  'ACOs & CINs',
  'FQHCs',
]

export default function HowItWorks() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fo-ink)]">
          How It Works
        </h1>
        <p className="mt-6 text-[17px] text-[var(--fo-slate)] leading-relaxed">
          First Outcomes runs as a system of action underneath the tools you already use &mdash;
          ingesting signals, deciding what to do, doing it, and reporting back.
        </p>
      </section>

      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-20 grid gap-10 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl bg-white border border-[var(--fo-line)] p-8">
              <div className="text-[13px] font-semibold text-[var(--fo-primary)]">{s.n}</div>
              <h2 className="mt-3 text-xl font-semibold text-[var(--fo-ink)]">{s.title}</h2>
              <p className="mt-3 text-[15px] text-[var(--fo-slate)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
            Built for every contract type
          </h2>
          <p className="mt-4 text-[16px] text-[var(--fo-slate)]">
            One system, configured to your risk arrangements and the organizations you serve.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {contracts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[var(--fo-line)] bg-white px-4 py-2 text-[14px] text-[var(--fo-ink)]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fo-ink)]">
            Enterprise-grade security, built in
          </h2>
          <p className="mt-4 text-[15.5px] text-[var(--fo-slate)] leading-relaxed">
            Every integration and workflow is designed around healthcare-grade compliance and
            security requirements from day one, so your team can move fast without cutting corners.
          </p>
          <Link
            to="/about#contact"
            className="mt-8 inline-flex items-center rounded-md bg-[var(--fo-primary)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
