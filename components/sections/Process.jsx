import SectionHeader from "../shared/SectionHeader";

const steps = [
  {
    title: "Diagnose",
    description:
      "Audit your messaging, UX flow, and conversion path to find clarity gaps.",
    outcome: "You get a prioritized action map with clear wins.",
  },
  {
    title: "Design",
    description:
      "Build a narrative, wireframes, and visual system that sells the outcome.",
    outcome: "You get a conversion-ready design built for B2B trust.",
  },
  {
    title: "Convert",
    description:
      "Ship the new site with performance, accessibility, and CRO baked in.",
    outcome: "You get a live asset that generates qualified demand.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="How It Works"
          titleId="process-title"
          title="A simple, structured process designed to reduce risk."
          subtitle="Three steps, no chaos. We lead the strategy, design, and execution so your team stays focused."
        />
        {/* Layout: 3-step horizontal timeline with clear outcomes. */}
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 text-sm font-semibold text-brand">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{step.description}</p>
              <p className="mt-4 text-sm font-semibold text-white">
                {step.outcome}
              </p>
            </div>
          ))}
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              What you can expect
            </p>
            <p className="mt-4 text-base text-white/70">
              Weekly updates, sharp decision points, and a clear handoff. We work
              like a senior in-house growth team, without adding headcount.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Engagement size
            </p>
            <p className="mt-4 text-base text-white/70">
              Most engagements run 4 to 8 weeks and include strategy, design, and
              production-ready build support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
