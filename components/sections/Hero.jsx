import CTAButton from "../shared/CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink bg-hero-radial"
      aria-labelledby="hero-title"
    >
      {/* Visual direction: layered product UI cards with soft gradients and subtle glow. */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
        {/* Layout: 2-column hero with copy left, UI visual right. */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Clarity Sprint booking for March
            </div>
            <div className="space-y-5">
              <h1
                id="hero-title"
                className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                We turn SaaS websites into revenue engines.
              </h1>
              <p className="text-balance text-lg text-white/70 sm:text-xl">
                Positioning, UX strategy, and high-performance design that
                clarifies your value in seconds and converts qualified B2B
                buyers.
              </p>
              <p className="text-base text-white/60">
                Built for growth-stage SaaS teams who have traction, but a
                website that still explains features instead of selling the
                outcome.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton href="#contact" variant="primary">
                Book a Strategy Call
              </CTAButton>
              <CTAButton href="#process" variant="secondary">
                See How It Works
              </CTAButton>
            </div>
            {/* CTA strategy: primary CTA repeats in nav, hero, and final section. */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Clearer positioning in weeks, not quarters.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Built to lift demo quality and pipeline trust.
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-glow/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate/70 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Conversion Snapshot
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                    Live clarity score
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm text-white/60">
                      Message clarity across top 3 pages
                    </p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-brand" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      Demo intent alignment
                    </p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Buyer path friction</p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/5 rounded-full bg-glow" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Micro-interaction: cards lift on hover for tactile feedback. */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/30">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Positioning
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    From feature list to business outcome.
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Define who you are for, why you win, and why now.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/30">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    UX Flow
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    Guide buyers to one clear next step.
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Remove confusion and convert intent into action.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Signalframe Lens
                </p>
                <p className="mt-3 text-white">
                  We prioritize clarity, proof, and conversion. Every page earns
                  its place in the buying journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
