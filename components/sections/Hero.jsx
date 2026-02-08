import CTAButton from "../shared/CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-paper"
      aria-labelledby="hero-title"
    >
      {/* Visual direction: clean editorial layout with red accent and UI collage. */}
      <div className="absolute inset-0 bg-hero-sheen" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
        {/* Layout: 2-column hero with editorial copy + UI collage. */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              <span className="h-px w-10 bg-accent" />
              SaaS Growth & Conversion
            </div>
            <div className="space-y-5">
              <h1
                id="hero-title"
                className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
              >
                We design SaaS websites that sell the outcome.
              </h1>
              <p className="text-balance text-lg text-muted sm:text-xl">
                Greater builds high-clarity positioning, UX, and UI systems that
                turn qualified traffic into pipeline-ready demos.
              </p>
              <p className="text-base text-muted">
                For growth-stage B2B SaaS teams with momentum, but a website
                that still reads like a feature list.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton href="#contact" variant="primary">
                Start a Project
              </CTAButton>
              <CTAButton href="#work" variant="secondary">
                View Work
              </CTAButton>
            </div>
            <div className="grid gap-4 text-sm text-muted sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                Clarity-first narrative that lands in the first 5 seconds.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                Conversion paths aligned to how buyers decide.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                Premium design that signals trust and scale.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                Launch-ready assets for product and growth teams.
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid gap-6">
              <div className="rounded-[32px] border border-line bg-fog p-6 shadow-crisp">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  <span>Greater</span>
                  <span className="text-accent">Launch</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-32 rounded-full bg-line" />
                  <div className="h-3 w-44 rounded-full bg-line" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-white p-4">
                    <div className="h-20 rounded-xl bg-[linear-gradient(135deg,#FCEFEF,transparent)]" />
                    <p className="mt-4 text-sm font-semibold text-ink">
                      Value-led homepage
                    </p>
                    <p className="mt-2 text-xs text-muted">
                      Outcome headline + proof stack.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-white p-4">
                    <div className="h-20 rounded-xl bg-[linear-gradient(135deg,#FFE7E8,transparent)]" />
                    <p className="mt-4 text-sm font-semibold text-ink">
                      Demo intent flow
                    </p>
                    <p className="mt-2 text-xs text-muted">
                      One clear next step.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    Positioning
                  </p>
                  <p className="mt-3 text-base font-semibold text-ink">
                    From features to buyer outcomes.
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Define why you win and why now.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    UX Strategy
                  </p>
                  <p className="mt-3 text-base font-semibold text-ink">
                    Guide decisions with clarity.
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Reduce friction and lift demo quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
