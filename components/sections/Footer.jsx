import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Greater
            </p>
            <p className="mt-2 max-w-md text-sm text-white/60">
              A premium SaaS growth and conversion agency focused on clarity,
              credibility, and pipeline-ready websites.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
            <Link href="#proof" className="transition hover:text-white">
              Proof
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
        <div className="border-t border-white/10 pt-12">
          <p className="text-[12vw] font-semibold uppercase tracking-[0.2em] text-white/10">
            Greater
          </p>
        </div>
      </div>
    </footer>
  );
}
