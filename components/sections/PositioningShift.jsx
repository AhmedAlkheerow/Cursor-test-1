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
      className="bg-ink py-24"
      aria-labelledby="positioning-title"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Positioning Shift"
          titleId="positioning-title"
          title="Your website is not a design project. It is your most important sales asset."
          subtitle="We help growth-stage SaaS teams reframe the website as a revenue engine, built around buyer psychology and clear decisions."
        />
        {/* Layout: before vs after cards with strong contrast and clear hierarchy. */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Before
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              A site that looks good, but does not convert.
            </h3>
            <ul className="mt-6 space-y-3 text-white/70">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/15 via-white/5 to-transparent p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand/80">
              After
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              A revenue-first website that sells the outcome.
            </h3>
            <ul className="mt-6 space-y-3 text-white/70">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
