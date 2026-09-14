import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const outcomes = [
  { value: '13/13', label: 'Service elements delivered monthly' },
  { value: 'Continuous', label: 'Outreach against the care plan' },
  { value: 'Audit-ready', label: 'Evidence behind every claim' },
]

const badges = [
  { title: 'Eligibility & Tiering' },
  { title: 'Consent & Enrollment' },
  { title: 'Care Plan Tasks' },
  { title: 'Monthly Attestation' },
]

const steps = [
  {
    n: '01',
    title: 'Identify and Tier',
    subtitle: 'Who qualifies, and at what level',
    bullets: [
      'Reads the panel and flags Medicare eligibility.',
      'Counts chronic conditions and checks QMB status.',
      'Assigns the correct APCM level automatically.',
    ],
  },
  {
    n: '02',
    title: 'Enroll',
    subtitle: 'Consent, then the initiating visit',
    bullets: [
      'Voice-first outreach explains the program to the patient.',
      'Captures consent and documents it.',
      'Books the initiating visit.',
    ],
  },
  {
    n: '03',
    title: 'Decompose the Care Plan',
    subtitle: 'From document to trackable work',
    bullets: [
      'Breaks the Annual Wellness Visit plan into individual actions.',
      'Screenings, labs, referrals, and follow-ups become scheduled tasks.',
      'Nothing sits static in the chart as a PDF.',
    ],
  },
  {
    n: '04',
    title: 'Execute Monthly',
    subtitle: 'What makes the fee earnable',
    bullets: [
      'Runs outreach against every open task, continuously.',
      'Keeps the care plan moving instead of theoretical.',
    ],
  },
  {
    n: '05',
    title: 'Close the Referral Loop',
    subtitle: 'From routed to resolved',
    bullets: [
      'Routes referrals and clears the eRAF.',
      'Tracks through to completed consult and returned report.',
      'Feeds closure back into the care plan.',
    ],
  },
  {
    n: '06',
    title: 'Document and Attest',
    subtitle: 'The evidence CMS requires',
    bullets: [
      'Maintains the living care plan CMS requires.',
      'Produces the monthly evidence behind every claim.',
    ],
  },
]

function StepVisual({ active }) {
  if (active === 0) {
    const rows = [
      { label: 'Medicare eligible', sub: 'Confirmed against panel data', done: true },
      { label: 'Chronic conditions counted', sub: '2+ qualifying conditions found', done: true },
      { label: 'QMB status checked', sub: 'Cost-sharing rules applied', done: true },
      { label: 'Level assigned', sub: 'APCM tier set for billing', done: false },
    ]
    return (
      <div className="space-y-3">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Identify & Tier</div>
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
  if (active === 1) {
    const flow = ['Outreach', 'Consent Captured', 'Visit Booked']
    return (
      <div className="space-y-6">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Enrollment Progress</div>
        <div className="flex items-center justify-between">
          {flow.map((f, i) => (
            <div key={f} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className={`h-3 w-3 rounded-full ${i <= 1 ? 'bg-[var(--fo-primary)]' : 'bg-[var(--fo-line)]'}`}
                />
                <span className="text-[11.5px] text-[var(--fo-slate)] text-center">{f}</span>
              </div>
              {i < flow.length - 1 && (
                <div className={`h-px flex-1 -mt-6 ${i < 1 ? 'bg-[var(--fo-primary)]' : 'bg-[var(--fo-line)]'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-[var(--fo-surface)] p-4">
          <div className="text-[14px] font-medium text-[var(--fo-ink)]">Voice-first outreach call</div>
          <div className="mt-1 text-[12.5px] text-[var(--fo-slate)]">
            Program explained, consent captured, initiating visit booked on the same call.
          </div>
        </div>
      </div>
    )
  }
  if (active === 2) {
    const tasks = [
      { label: 'Diabetic eye screening', tag: 'Screening' },
      { label: 'A1c lab draw', tag: 'Lab' },
      { label: 'Cardiology referral', tag: 'Referral' },
      { label: '90-day follow-up', tag: 'Follow-up' },
    ]
    return (
      <div className="space-y-3">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Care Plan Tasks</div>
        {tasks.map((t) => (
          <div key={t.label} className="flex items-center justify-between rounded-lg bg-[var(--fo-surface)] p-4">
            <span className="text-[14px] font-medium text-[var(--fo-ink)]">{t.label}</span>
            <span className="rounded-full bg-[var(--fo-primary-light)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--fo-primary-dark)]">
              {t.tag}
            </span>
          </div>
        ))}
      </div>
    )
  }
  if (active === 3) {
    return (
      <div className="space-y-4">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Monthly Execution</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[var(--fo-surface)] p-4">
            <div className="text-2xl font-semibold text-[var(--fo-ink)]">13/13</div>
            <div className="text-[12.5px] text-[var(--fo-slate)]">Elements touched this month</div>
          </div>
          <div className="rounded-lg bg-[var(--fo-surface)] p-4">
            <div className="text-2xl font-semibold text-[var(--fo-ink)]">24/7</div>
            <div className="text-[12.5px] text-[var(--fo-slate)]">Outreach coverage</div>
          </div>
        </div>
        <div className="rounded-lg bg-[var(--fo-surface)] p-4">
          <div className="text-[14px] font-medium text-[var(--fo-ink)]">Open tasks worked continuously</div>
          <div className="mt-1 text-[12.5px] text-[var(--fo-slate)]">
            No task waits for a staff member to notice it.
          </div>
        </div>
      </div>
    )
  }
  if (active === 4) {
    const rows = [
      { label: 'Referral routed', sub: 'Sent to in-network specialist', done: true },
      { label: 'eRAF cleared', sub: 'Prior auth resolved', done: true },
      { label: 'Consult completed', sub: 'Report returned to chart', done: false },
    ]
    return (
      <div className="space-y-3">
        <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Referral Loop</div>
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
  return (
    <div className="space-y-4">
      <div className="text-[13px] font-semibold text-[var(--fo-slate)]">Monthly Attestation</div>
      <div className="flex items-center gap-6">
        <div
          className="relative h-28 w-28 rounded-full shrink-0"
          style={{
            background: 'conic-gradient(var(--fo-primary) 0% 100%)',
          }}
        >
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
            <span className="text-lg font-semibold text-[var(--fo-ink)]">13/13</span>
          </div>
        </div>
        <div className="space-y-2 text-[13.5px]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--fo-primary)]" /> Elements documented
          </div>
          <div className="flex items-center gap-2 text-[var(--fo-slate)]">Living care plan current</div>
          <div className="flex items-center gap-2 text-[var(--fo-slate)]">Claim evidence generated</div>
        </div>
      </div>
    </div>
  )
}

export default function APCM() {
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
          Advanced Primary Care Management
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fo-ink)]">
          AI APCM
        </h1>
        <p className="mt-6 text-[17px] text-[var(--fo-slate)] leading-relaxed">
          APCM pays monthly only if thirteen service elements are delivered and documented every
          month, for every enrolled patient. The challenge is throughput and evidence. The module
          handles both.
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

      {/* What the module does */}
      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[var(--fo-primary)]">
            What the module does
          </h2>
          <p className="mt-4 text-[16px] text-[var(--fo-slate)] leading-relaxed">
            APCM pays monthly only if thirteen service elements are delivered and documented every
            month, for every enrolled patient. The challenge is throughput and evidence &mdash; the
            module handles both, from identifying who qualifies through the attestation CMS requires.
          </p>
        </div>
      </section>

      {/* Process — sticky scroll */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
            How AI APCM works
          </h2>
          <p className="mt-4 text-[16px] text-[var(--fo-slate)]">
            One continuous workflow from eligibility to monthly attestation.
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
              A living care plan, worked every month &mdash; not a document sitting in the chart.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 w-full">
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
          See AI APCM in action
        </h2>
        <p className="mt-4 text-[15.5px] text-[var(--fo-slate)] leading-relaxed">
          We&rsquo;ll show you exactly how it plugs into your current APCM workflow.
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
