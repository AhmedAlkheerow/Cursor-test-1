import SectionHeader from "../shared/SectionHeader";

export default function FounderSection() {
  return (
    <section className="bg-paper py-24" aria-labelledby="founder-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
          {/* Visual: portrait placeholder with soft gradient. */}
          <div className="h-72 rounded-3xl bg-[linear-gradient(135deg,#FCEDEE,#F7F7F2)]" />
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Founder-led
            </p>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              Senior talent on every engagement.
            </h3>
            <p className="mt-3 text-sm text-muted">
              You work directly with senior strategy and design, not a rotating
              junior team.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Why Greater"
            titleId="founder-title"
            title="A tight team built for SaaS growth-stage clarity."
            subtitle="We combine positioning, UX strategy, and high-end UI design so every page answers a buying question with precision."
          />
          <div className="grid gap-4">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-ink">
                Operator-led strategy
              </p>
              <p className="mt-2 text-sm text-muted">
                We translate product insights into commercial positioning and
                buyer-facing clarity.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-ink">
                Conversion-level detail
              </p>
              <p className="mt-2 text-sm text-muted">
                Every component is mapped to intent, attention, and next steps.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-ink">
                Design that signals trust
              </p>
              <p className="mt-2 text-sm text-muted">
                A premium interface that aligns with mid-market and enterprise
                buyer expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
