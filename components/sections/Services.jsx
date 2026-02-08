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
    <section id="services" className="bg-slate/80 py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="What We Deliver"
          titleId="services-title"
          title="Three services. One outcome: a website that converts."
          subtitle="Each engagement is structured around clarity, conversion, and credibility. No vague deliverables, just outcomes."
        />
        {/* Layout: 3-card grid with outcome-led service blocks. */}
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    What it solves
                  </p>
                  <p className="mt-2">{service.solves}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    What you get
                  </p>
                  <p className="mt-2">{service.gets}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Why it matters
                  </p>
                  <p className="mt-2">{service.matters}</p>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-brand/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
