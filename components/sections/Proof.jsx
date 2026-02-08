import SectionHeader from "../shared/SectionHeader";

const proofPoints = [
  {
    title: "Clarity that buyers feel fast.",
    description:
      "We distill the story to what matters most, so prospects understand value without a sales call.",
  },
  {
    title: "Conversion paths that reduce friction.",
    description:
      "Every page guides a single next step, aligning marketing, product, and sales goals.",
  },
  {
    title: "Premium experience that builds trust.",
    description:
      "High-end UI and careful UX signal credibility to mid-market and enterprise buyers.",
  },
];

const testimonials = [
  {
    quote:
      "Signalframe translated our product into a story buyers instantly understood. The clarity shift changed how every channel performs.",
    name: "Founder",
    role: "B2B SaaS Platform",
  },
  {
    quote:
      "They restructured our website to match our sales process. The result is a calmer, sharper funnel and better demos.",
    name: "VP Marketing",
    role: "Growth-stage SaaS",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="bg-slate/80 py-24" aria-labelledby="proof-title">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Proof and Fit"
          titleId="proof-title"
          title="Built for SaaS teams who take growth seriously."
          subtitle="We are not a high-volume agency. We partner with teams that have traction and want a website that performs like a sales asset."
        />
        {/* Layout: proof statements in a three-column grid. */}
        <div className="grid gap-6 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
            >
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm text-white/70">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              This is for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Growth-stage B2B SaaS teams with active demand.</li>
              <li>Founders and CMOs ready to align product and marketing.</li>
              <li>Teams that need clarity across homepage, pricing, and demo flow.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              This is not for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Pre-product ideas or unvalidated markets.</li>
              <li>Teams looking for rapid, low-cost design churn.</li>
              <li>Brands that want a redesign without strategy.</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-7"
            >
              <p className="text-base text-white/80">"{testimonial.quote}"</p>
              <div className="mt-5 text-sm text-white/60">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-7 text-sm text-white/70">
          Authority positioning: We focus exclusively on SaaS growth-stage teams.
          The playbook is built on real buyer journeys, not generic agency templates.
        </div>
      </div>
    </section>
  );
}
