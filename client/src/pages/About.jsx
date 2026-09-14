import { useState } from 'react'

export default function About() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder only — this staging site does not persist submissions yet.
    setSubmitted(true)
  }

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fo-ink)]">
          About First Outcomes
        </h1>
        <p className="mt-6 text-[17px] text-[var(--fo-slate)] leading-relaxed">
          First Outcomes builds the AI workforce for value-based care &mdash; software that
          doesn&rsquo;t just surface insight, but completes the work itself. We help ACOs, FQHCs,
          CINs, and health plans close the gap between what their systems find and what actually
          gets done.
        </p>
      </section>

      <section className="border-t border-[var(--fo-line)] bg-[var(--fo-surface)]">
        <div className="mx-auto max-w-4xl px-6 py-16 grid gap-10 md:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-semibold text-[var(--fo-ink)]">120K+</div>
            <div className="mt-1 text-[13.5px] text-[var(--fo-slate)]">Actions completed monthly</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--fo-ink)]">5x</div>
            <div className="mt-1 text-[13.5px] text-[var(--fo-slate)]">Throughput improvement</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--fo-ink)]">1/3</div>
            <div className="mt-1 text-[13.5px] text-[var(--fo-slate)]">Lower cost per outcome</div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-2xl px-6 py-20 scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[var(--fo-ink)]">
            Request an Assessment
          </h2>
          <p className="mt-4 text-[15.5px] text-[var(--fo-slate)]">
            Tell us a bit about your organization and we&rsquo;ll follow up to schedule a
            conversation.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-[var(--fo-line)] bg-[var(--fo-primary-light)] p-8 text-center">
            <p className="text-[15.5px] font-medium text-[var(--fo-primary-dark)]">
              Thanks &mdash; this is a staging preview, so nothing was actually sent yet.
            </p>
            <p className="mt-2 text-[14px] text-[var(--fo-slate)]">
              In production this form will submit to our team directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-xl border border-[var(--fo-line)] bg-white p-8 space-y-5">
            <div>
              <label className="block text-[13.5px] font-medium text-[var(--fo-ink)] mb-1.5">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-md border border-[var(--fo-line)] px-3.5 py-2.5 text-[15px] outline-none focus:border-[var(--fo-primary)]"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-[13.5px] font-medium text-[var(--fo-ink)] mb-1.5">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-md border border-[var(--fo-line)] px-3.5 py-2.5 text-[15px] outline-none focus:border-[var(--fo-primary)]"
                placeholder="jane@organization.org"
              />
            </div>
            <div>
              <label className="block text-[13.5px] font-medium text-[var(--fo-ink)] mb-1.5">Phone</label>
              <input
                type="tel"
                className="w-full rounded-md border border-[var(--fo-line)] px-3.5 py-2.5 text-[15px] outline-none focus:border-[var(--fo-primary)]"
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label className="block text-[13.5px] font-medium text-[var(--fo-ink)] mb-1.5">
                What would you like to accomplish?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-[var(--fo-line)] px-3.5 py-2.5 text-[15px] outline-none focus:border-[var(--fo-primary)]"
                placeholder="Tell us about your organization and goals"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-[var(--fo-primary)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--fo-primary-dark)] transition-colors"
            >
              Submit Request
            </button>
          </form>
        )}

        <div className="mt-10 text-center text-[14px] text-[var(--fo-slate)] space-y-1">
          <p>2108 N St, Suite N, Sacramento, CA 95816</p>
          <p>
            <a href="mailto:info@firstoutcomes.com" className="hover:text-[var(--fo-ink)] underline">
              info@firstoutcomes.com
            </a>
            {' '}&middot;{' '}
            <a href="tel:8885550134" className="hover:text-[var(--fo-ink)] underline">
              (888) 555-0134
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
