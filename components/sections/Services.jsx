import SectionHeader from "../shared/SectionHeader";

const services = [
  {
    title: "SaaS Positioning and Messaging",
    solves: "Unclear differentiation and value story that forces buyers to guess.",
    gets: "A sharp narrative, core messaging framework, and page-level copy direction.",
    matters:
      "Clarity reduces buyer friction and aligns every channel around one message.",
  },
  {
    title: "Conversion-Focused UX Strategy",
    solves: "Pages that look good but do not guide buyers to a decision.",
    gets: "Information architecture, conversion paths, wireframes, and intent mapping.",
    matters:
      "UX strategy turns high-intent traffic into qualified demos and trials.",
  },
  {
    title: "High-Performance UI and Website Build",
    solves: "Visuals that feel generic and fail to signal premium credibility.",
    gets: "A refined UI system, responsive layouts, and production-ready design.",
    matters:
      "A premium interface builds trust fast and accelerates the buying journey.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="What We Deliver"
          titleId="services-title"
          title="Three focused services built for conversion."
          subtitle="We keep the scope tight: positioning, UX strategy, and a high-performance build that ships."
        />
        {/* Layout: 3-card grid with outcome-led service blocks. */}
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm text-muted">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    What it solves
                  </p>
                  <p className="mt-2 text-ink">{service.solves}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    What you get
                  </p>
                  <p className="mt-2 text-ink">{service.gets}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Why it matters
                  </p>
                  <p className="mt-2 text-ink">{service.matters}</p>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-line transition group-hover:bg-accent/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
