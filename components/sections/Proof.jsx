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
      "Greater translated our product into a story buyers instantly understood. The clarity shift changed how every channel performs.",
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
    <section id="proof" className="bg-paper py-24" aria-labelledby="proof-title">
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
              className="rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 text-sm text-muted">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              This is for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Growth-stage B2B SaaS teams with active demand.</li>
              <li>Founders and CMOs ready to align product and marketing.</li>
              <li>Teams that need clarity across homepage, pricing, and demo flow.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              This is not for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
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
              className="rounded-3xl border border-line bg-white p-7 shadow-soft"
            >
              <p className="text-base text-muted">"{testimonial.quote}"</p>
              <div className="mt-5 text-sm text-muted">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-accent/30 bg-white p-7 text-sm text-muted shadow-soft">
          Authority positioning: We focus exclusively on growth-stage SaaS.
          Our playbook is built on real buyer journeys, not generic agency
          templates.
        </div>
      </div>
    </section>
  );
}
