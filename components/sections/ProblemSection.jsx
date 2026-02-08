import SectionHeader from "../shared/SectionHeader";

const painPoints = [
  "Your positioning is accurate, but the site does not communicate it fast enough.",
  "Qualified traffic lands, scrolls, and leaves without a clear next step.",
  "The homepage explains features, not the business outcome.",
  "Sales and product teams move faster than the website story.",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-paper py-24" aria-labelledby="problem-title">
      {/* UI: editorial layout with thin dividers and bold headings. */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="The Clarity Gap"
          titleId="problem-title"
          title="Strong product. Weak message clarity."
          subtitle="Growth-stage SaaS teams lose qualified pipeline because the website does not explain the value quickly or clearly enough."
        />
        <div className="space-y-6 text-muted">
          <p className="text-base text-muted">
            If any of these feel familiar, clarity is the bottleneck:
          </p>
          <ul className="space-y-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft transition hover:-translate-y-1"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span className="text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
