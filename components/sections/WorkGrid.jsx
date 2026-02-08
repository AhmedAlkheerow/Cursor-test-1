import SectionHeader from "../shared/SectionHeader";

const projects = [
  {
    name: "Atlas",
    category: "Revenue Operations",
    description: "Homepage, pricing, and demo flow redesign.",
  },
  {
    name: "Nova",
    category: "Data Infrastructure",
    description: "Positioning shift + conversion UX for scale-up.",
  },
  {
    name: "Cobalt",
    category: "Security SaaS",
    description: "Enterprise clarity refresh and proof system.",
  },
  {
    name: "Loft",
    category: "Product Analytics",
    description: "Narrative rebuild for self-serve growth.",
  },
  {
    name: "Ray",
    category: "Fintech SaaS",
    description: "Conversion-first UI and messaging hierarchy.",
  },
  {
    name: "Vantage",
    category: "Developer Tools",
    description: "Focused demo pathway and product education.",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="bg-fog py-24" aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Selected Work"
          titleId="work-title"
          title="Recent SaaS website transformations."
          subtitle="A sample of clarity-first redesigns that shifted positioning and improved conversion paths."
        />
        {/* Layout: grid of project cards with UI placeholders. */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-3xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="rounded-2xl border border-line bg-fog p-4">
                <div className="h-28 rounded-xl bg-[linear-gradient(135deg,#FCEDEE,transparent)]" />
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
