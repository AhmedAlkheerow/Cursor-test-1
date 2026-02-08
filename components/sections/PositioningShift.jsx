import SectionHeader from "../shared/SectionHeader";

const beforeItems = [
  "Looks modern, but does not sell clearly.",
  "Awards-driven design decisions.",
  "Feature-focused copy and screenshots.",
  "Multiple CTAs competing for attention.",
];

const afterItems = [
  "Clarity-driven messaging in the first scroll.",
  "Conversion-focused layout and hierarchy.",
  "Value-led copy tied to buyer outcomes.",
  "One primary path to qualified demos.",
];

export default function PositioningShift() {
  return (
    <section
      id="positioning"
      className="bg-fog py-24"
      aria-labelledby="positioning-title"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Positioning Shift"
          titleId="positioning-title"
          title="Your website is not a design project. It is a sales asset."
          subtitle="Greater reframes the site as a conversion engine built around buyer psychology, clear outcomes, and decision-making speed."
        />
        {/* Layout: before vs after cards with strong contrast and clear hierarchy. */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Before
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              A site that looks good, but does not convert.
            </h3>
            <ul className="mt-6 space-y-3 text-muted">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-line" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-accent/30 bg-white p-8 shadow-crisp">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              After
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              A revenue-first website that sells the outcome.
            </h3>
            <ul className="mt-6 space-y-3 text-muted">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
