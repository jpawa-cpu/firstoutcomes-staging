import { Link } from 'react-router-dom'
import Stat from '../components/Stat.jsx'

const workflows = [
  {
    title: 'Attribution & Eligibility',
    desc: 'Roster reconciliation and accurate patient-to-plan assignment, kept current automatically.',
  },
  {
    title: 'Access & Scheduling',
    desc: 'Patient outreach, appointment booking, and no-show recovery run around the clock.',
  },
  {
    title: 'Referral & Network Routing',
    desc: 'Steer referrals toward preferred, cost-effective in-network providers by default.',
  },
  {
    title: 'Quality & Care Gap Closure',
    desc: 'Identify and resolve preventive and chronic care gaps before they become missed measures.',
  },
  {
    title: 'HCC, Risk & Documentation',
    desc: 'Capture risk and complete documentation accurately, at a scale manual review can’t match.',
  },
  {
    title: 'Prior Auth & Admin Follow-Up',
    desc: 'Track authorizations and resolve administrative follow-up without staff chasing status.',
  },
]

const steps = [
  { n: '01', title: 'Discover & Align', desc: 'We align on goals, workflows, and the outcomes that matter most to your team.' },
  { n: '02', title: 'Configure Agents', desc: 'We connect securely to your systems and configure AI agents for your workflows.' },
  { n: '03', title: 'Validate & Launch', desc: 'We test against real cases and launch with confidence, not guesswork.' },
  { n: '04', title: 'Optimize & Scale', desc: 'We continuously improve accuracy and expand coverage as you grow.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <span className="inline-block rounded-full bg-[var(--fo-primary-light)] px-3 py-1 text-[13px] font-medium text-[var(--fo-primary-dark)]">
          AI Workforce for Value-Based Care
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-[var(--fo-ink)] leading-[1.08]">
          Your tools find the work.
          <br className="hidden md:block" /> Our AI does the work.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-[17px] md:text-lg text-[var(--fo-slate)] leading-relaxed">
          First Outcomes turns the manual work queues buried inside value-based care &mdash;
          outreach, documentation, referrals, care gaps &mdash; into completed actions, automatically.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/about#contact"
            className="inline-flex items-center rounded-md bg-[var(--fo-primary)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
          >
            Request an Assessment
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center rounded-md border border-[var(--fo-line)] px-6 py-3 text-[15px] font-medium text-[var(--fo-ink)] hover:bg-[var(--fo-surface)] transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="120K+" label="Actions completed monthly" />
          <Stat value="5x" label="Throughput improvement" />
          <Stat value="3x" label="More accurate documentation" />
          <Stat value="1/3" label="Lower cost per outcome" />
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
          The execution gap is the bottleneck
        </h2>
        <p className="mt-5 text-[16px] text-[var(--fo-slate)] leading-relaxed">
          Value-based care generates enormous work queues &mdash; care gaps, referrals, risk
          documentation, outreach &mdash; faster than teams can manually process them. The result
          is slow, inconsistent execution, missed revenue, and delayed outreach to the members
          who need it most. First Outcomes closes that gap with an AI workforce that completes
          the work itself.
        </p>
      </section>

      {/* Workflows grid */}
      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
              One AI workforce, every VBC workflow
            </h2>
            <p className="mt-4 text-[16px] text-[var(--fo-slate)]">
              A consistent system of agents covering the workflows that determine outcomes and revenue.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {workflows.map((w) => (
              <div key={w.title} className="rounded-xl border border-[var(--fo-line)] bg-white p-6 text-left">
                <h3 className="text-[15.5px] font-semibold text-[var(--fo-ink)]">{w.title}</h3>
                <p className="mt-2 text-[14px] text-[var(--fo-slate)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
            A system of action, not another dashboard
          </h2>
          <p className="mt-4 text-[16px] text-[var(--fo-slate)]">
            We ingest, analyze, execute, and report &mdash; so work gets done, not just surfaced.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="text-[13px] font-semibold text-[var(--fo-primary)]">{s.n}</div>
              <h3 className="mt-2 text-[15.5px] font-semibold text-[var(--fo-ink)]">{s.title}</h3>
              <p className="mt-2 text-[14px] text-[var(--fo-slate)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--fo-primary)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            See the AI workforce in action
          </h2>
          <p className="mt-4 text-[16px] text-white/85 max-w-xl mx-auto">
            Tell us about your organization and we&rsquo;ll walk you through a personalized assessment.
          </p>
          <Link
            to="/about#contact"
            className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-[15px] font-medium text-[var(--fo-primary-dark)] hover:bg-white/90 transition-colors"
          >
            Request an Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}
