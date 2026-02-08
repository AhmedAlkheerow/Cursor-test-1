import CTAButton from "../shared/CTAButton";
import SectionHeader from "../shared/SectionHeader";

const callItems = [
  "Review your current website and positioning.",
  "Identify the top clarity and conversion gaps.",
  "Outline a focused plan with next steps.",
];

export default function StrategicCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-fog py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeader
          eyebrow="Strategic CTA"
          titleId="contact-title"
          title="Book a 30-minute strategy call."
          subtitle="No pitch. Just clarity on what is holding the website back and what it would take to fix it."
        />
        {/* Layout: 2-column call details + form */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              What happens on the call
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {callItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              If there is not a strong fit, we will say so directly and still
              leave you with clear guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="#contact" variant="primary">
                Start a Project
              </CTAButton>
              <CTAButton href="#services" variant="secondary">
                Review Services
              </CTAButton>
            </div>
          </div>
          <form className="rounded-3xl border border-line bg-white p-8 shadow-crisp">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Project details
            </p>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-full border border-line px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-full border border-line px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="mt-2 w-full rounded-full border border-line px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Project Goals
                </label>
                <textarea
                  rows="4"
                  placeholder="What needs to improve on the website?"
                  className="mt-2 w-full rounded-3xl border border-line px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
