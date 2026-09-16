import { Link } from 'react-router-dom'
import Stat from '../components/Stat.jsx'

const workflows = [
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
    desc: 'Steer referrals toward preferred, cost-effective in-network providers by default.',
  },
  {
    title: 'AI APCM',
    desc: 'Delivers and documents the thirteen monthly APCM service elements automatically, from enrollment through attestation.',
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
      <section className="relative overflow-hidden">
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] w-full text-[var(--fo-primary-light)]"
          viewBox="0 0 1440 560"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 0H1440V300C1440 300 1220 380 960 340C700 300 620 220 380 260C200 290 100 330 0 300V0Z"
          />
          <path
            fill="currentColor"
            opacity="0.55"
            d="M0 40H1440V260C1440 260 1180 200 940 250C700 300 660 360 400 330C220 310 110 250 0 260V40Z"
          />
        </svg>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <span className="inline-block rounded-full bg-[var(--fo-primary-light)] px-3 py-1 text-[13px] font-medium text-[var(--fo-primary-dark)]">
            AI Workforce for Value-Based Care
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-[var(--fo-ink)] leading-[1.08]">
            AI Workforce for
            <br className="hidden md:block" /> Value-Based  Care.
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
              className="inline-flex items-center rounded-md border border-[var(--fo-line)] px-6 py-3 text-[15px] font-medium text-[var(--fo-ink)] hover:bg-white transition-colors"
            >
              See How It Works
            </Link>
          </div>
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
