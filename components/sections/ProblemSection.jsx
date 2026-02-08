import SectionHeader from "../shared/SectionHeader";

const painPoints = [
  "Visitors cannot tell who the product is for within the first 10 seconds.",
  "High-intent traffic lands, scrolls, and leaves without booking a demo.",
  "Your homepage lists features, but buyers need business outcomes.",
  "Product and marketing teams are shipping, yet the website story is still behind.",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-slate/80 py-24" aria-labelledby="problem-title">
      {/* UI: strong contrast with a slightly lighter panel to reset attention. */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="The Problem"
          titleId="problem-title"
          title="Your website is leaking momentum."
          subtitle="You have a strong product and growing demand, but the website still makes buyers work too hard to understand the value."
        />
        <div className="space-y-6 text-white/80">
          <p className="text-base text-white/60">
            If any of these feel familiar, clarity is the bottleneck:
          </p>
          <ul className="space-y-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:-translate-y-1 hover:border-white/30"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
