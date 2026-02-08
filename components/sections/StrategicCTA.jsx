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
      className="relative overflow-hidden bg-ink py-24"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden="true" />
      <div className="mx-auto max-w-4xl space-y-10 px-6 text-center">
        <SectionHeader
          eyebrow="Strategic CTA"
          titleId="contact-title"
          title="Book a 30-minute strategy call."
          subtitle="No pitch. Just clarity on what is holding the website back and what it would take to fix it."
          align="center"
        />
        {/* Layout: centered call details + primary CTA */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            What happens on the call
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {callItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/60">
            If there is not a strong fit, we will say so directly and still
            leave you with clear guidance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="#contact" variant="primary">
            Book a Strategy Call
          </CTAButton>
          <CTAButton href="#services" variant="secondary">
            Review Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
