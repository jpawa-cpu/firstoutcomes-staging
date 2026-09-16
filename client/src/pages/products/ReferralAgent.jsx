import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const problems = [
  'High referral leakage and lost specialty revenue.',
]

const capabilities = [
  'Finds the right specialist among provider panels or out-of-network specialist networks.',
  'Coordinates patient scheduling and specialist office follow-up.',
  'Supports pre-exit follow-up scheduling before discharge or visit completion.',
]

const highlights = [
  'Completes closed loop referrals.',
  'Meets all federal & state PCMH (Patient Centered Medical Home) requirements.',
  'Automates up to 90% of all work, including prior auth requirements for outgoing referrals from PCPs to specialists.',
]

const outcomes = [
  { value: '90%', label: 'Reduction in staff manual work' },
  { value: '5x', label: 'Faster prior auth' },
  { value: '200%', label: 'Increase in referrals closed' },
]

const badges = [
  { title: 'Specialist Matching' },
  { title: 'TOC Follow-Up' },
  { title: 'Faster Closure' },
]

const steps = [
  {
    n: '01',
    title: 'Find',
    subtitle: 'Before anything is sent',
    bullets: [
      'Pull the referral and clinical documents from the EMR.',
      'Match in-network specialists on plan, distance and wait.',
      'Call the office and confirm they will take the patient.',
    ],
  },
  {
    n: '02',
    title: 'Authorize',
    subtitle: 'eRAF and prior auth',
    bullets: [
      'Submit to the plan or IPA portal with the packet attached.',
      'Recheck and answer follow-ups until the auth posts.',
    ],
  },
  {
    n: '03',
    title: 'Book',
    subtitle: 'Getting the patient there',
    bullets: [
      'Fax the referral and records to the accepting office.',
      'Call the patient with the doctor’s name and address.',
      'Three-way call and schedule the visit on the line.',
    ],
  },
  {
    n: '04',
    title: 'Close',
    subtitle: 'Back into the chart',
    bullets: [
      'Call the office to confirm the visit happened.',
      'Request, retrieve and file the consult note.',
      'Book the PCP follow-up in your EMR.',
    ],
  },
]

function StepVisual({ active }) {
  if (active === 0) {
    const rows = [
      { name: 'OrthoCare Specialists', sub: 'Orthopedics · 2.1 mi · In-Network', tag: 'Best Match' },
      { name: 'Spine & Joint Institute', sub: 'Orthopedics · 4.6 mi · In-Network' },
      { name: 'Metro Orthopedics', sub: 'Orthopedics · 6.2 mi · In-Network' },
    ]
    return (
      <div className="space-y-3">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">In-Network Matching</div>
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between rounded-lg bg-[var(--fo-surface)] p-4">
            <div>
              <div className="text-[14px] font-medium text-[var(--fo-ink)]">{r.name}</div>
              <div className="text-[12.5px] text-[var(--fo-slate)]">{r.sub}</div>
            </div>
            {r.tag && (
              <span className="rounded-full bg-[var(--fo-primary-light)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--fo-primary-dark)]">
                {r.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    )
  }
  if (active === 1) {
    const rows = [
      { label: 'eRAF submitted', sub: 'IPA portal · packet attached', done: true },
      { label: 'Plan review', sub: 'Follow-up sent, awaiting response', done: true },
      { label: 'Authorization posted', sub: 'Confirmed with reference number', done: false },
    ]
    return (
      <div className="space-y-3">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Authorization Status</div>
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 rounded-lg bg-[var(--fo-surface)] p-4">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                r.done ? 'bg-[var(--fo-primary)] text-white' : 'bg-[var(--fo-line)] text-[var(--fo-slate)]'
              }`}
            >
              {r.done ? '✓' : '…'}
            </span>
            <div>
              <div className="text-[14px] font-medium text-[var(--fo-ink)]">{r.label}</div>
              <div className="text-[12.5px] text-[var(--fo-slate)]">{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (active === 2) {
    const flow = ['Referred', 'Faxed', 'Patient Called', 'Scheduled']
    return (
      <div className="space-y-6">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Booking Progress</div>
        <div className="flex items-center justify-between">
          {flow.map((f, i) => (
            <div key={f} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className={`h-3 w-3 rounded-full ${i <= 2 ? 'bg-[var(--fo-primary)]' : 'bg-[var(--fo-line)]'}`}
                />
                <span className="text-[11.5px] text-[var(--fo-slate)]">{f}</span>
              </div>
              {i < flow.length - 1 && (
                <div className={`h-px flex-1 -mt-6 ${i < 2 ? 'bg-[var(--fo-primary)]' : 'bg-[var(--fo-line)]'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="rounded-lg bg-[var(--fo-surface)] p-4">
            <div className="text-lg font-semibold text-[var(--fo-ink)]">186</div>
            <div className="text-[11.5px] text-[var(--fo-slate)]">Referrals This Week</div>
          </div>
          <div className="rounded-lg bg-[var(--fo-surface)] p-4">
            <div className="text-lg font-semibold text-[var(--fo-ink)]">172</div>
            <div className="text-[11.5px] text-[var(--fo-slate)]">Scheduled In-Network</div>
          </div>
          <div className="rounded-lg bg-[var(--fo-surface)] p-4">
            <div className="text-lg font-semibold text-[var(--fo-ink)]">3.2</div>
            <div className="text-[11.5px] text-[var(--fo-slate)]">Avg. Days to Schedule</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <div className="text-[13px] font-semibold text-[var(--fo-slate)]">TOC Follow-Up Status</div>
      <div className="flex items-center gap-6">
        <div
          className="relative h-28 w-28 rounded-full shrink-0"
          style={{
            background: 'conic-gradient(var(--fo-primary) 0% 94%, var(--fo-line) 94% 100%)',
          }}
        >
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
            <span className="text-lg font-semibold text-[var(--fo-ink)]">94%</span>
          </div>
        </div>
        <div className="space-y-2 text-[13.5px]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--fo-primary)]" /> Completed &mdash; 94%
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--fo-ink)]/30" /> Scheduled &mdash; 4%
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--fo-line)]" /> Pending &mdash; 2%
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReferralAgent() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
            {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
        <span className="inline-block rounded-full bg-[var(--fo-primary-light)] px-3 py-1 text-[13px] font-medium text-[var(--fo-primary-dark)]">
          Referrals
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fo-ink)]">
          AI Outbound Referral Agent
        </h1>
        <p className="mt-6 text-[17px] text-[var(--fo-slate)] leading-relaxed">
          FQHC patients need specialty referrals often, but 15–30%+ fall through amid denials, delays, and no-shows. Our AI Agent completes the
          closed loop on every referral and meets all federal and state PCMH (Patient Centered
          Medical Home) requirements, automating up to 98% of the work involved &mdash; including
          prior auth requirements for outgoing referrals from PCPs to specialists.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/about#contact"
            className="inline-flex items-center rounded-md bg-[var(--fo-primary)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
          >
            Request an Assessment
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center rounded-md border border-[var(--fo-line)] px-6 py-3 text-[15px] font-medium text-[var(--fo-ink)] hover:bg-[var(--fo-surface)] transition-colors"
          >
            All Products
          </Link>
        </div>
      </section>

      {/* Problem / capabilities */}
      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div className="rounded-xl bg-white border border-[var(--fo-line)] p-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[var(--fo-primary)]">
              Problem it solves
            </h2>
            <ul className="mt-4 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-[var(--fo-slate)] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fo-primary)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-[var(--fo-line)] p-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[var(--fo-primary)]">
              What the agent does
            </h2>
            <ul className="mt-4 space-y-3">
              {capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] text-[var(--fo-slate)] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fo-primary)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process — sticky scroll */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
            How the referral agent works
          </h2>
          <p className="mt-4 text-[16px] text-[var(--fo-slate)]">
            One continuous workflow from request to completed, in-network care.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="hidden md:block">
            <div className="sticky top-28 rounded-2xl border border-[var(--fo-line)] bg-white p-8 shadow-sm">
              <StepVisual active={active} />
            </div>
          </div>

          <div>
            {steps.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className="min-h-[60vh] md:min-h-[50vh] flex flex-col justify-center border-l-2 pl-8"
                style={{
                  borderColor: active === i ? 'var(--fo-primary)' : 'var(--fo-line)',
                }}
              >
                <div
                  className="text-[13px] font-semibold transition-colors"
                  style={{ color: active === i ? 'var(--fo-primary)' : 'var(--fo-slate)' }}
                >
                  {s.n}
                </div>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--fo-ink)]">{s.title}</h3>
                <p className="mt-1 text-[14px] font-medium text-[var(--fo-slate)]">{s.subtitle}</p>
                <ul className="mt-4 space-y-2.5 max-w-md">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] text-[var(--fo-slate)] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fo-primary)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* mobile fallback visual */}
          <div className="md:hidden -mt-6">
            <div className="rounded-2xl border border-[var(--fo-line)] bg-white p-8 shadow-sm">
              <StepVisual active={active} />
            </div>
          </div>
        </div>
      </section>

      {/* Expected outcomes */}
      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
              Expected outcomes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl bg-white border border-[var(--fo-line)] p-8 text-center">
                <div className="text-2xl font-semibold text-[var(--fo-ink)]">{o.value}</div>
                <div className="mt-1 text-[14px] text-[var(--fo-slate)]">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-[var(--fo-primary)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
            <p className="text-white text-[19px] font-medium leading-snug max-w-xs text-center md:text-left">
              Every incomplete referral is a leakage event. First Outcomes turns referrals into
              completed VBC.
            </p>
            <div className="grid grid-cols-3 gap-8 flex-1 w-full">
              {badges.map((b) => (
                <div key={b.title} className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                  <div className="text-[12.5px] font-medium text-white/90">{b.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fo-ink)]">
          See the #1 Referral Agent AI in action
        </h2>
        <p className="mt-4 text-[15.5px] text-[var(--fo-slate)] leading-relaxed">
          We&rsquo;ll show you exactly how it plugs into your current referral workflow.
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
