import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate/90 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Signalframe
          </p>
          <p className="mt-2 text-sm text-white/60">
            SaaS growth and conversion agency for teams that need clarity and
            pipeline-ready websites.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-white/60">
          <Link href="#problem" className="transition hover:text-white">
            Problems
          </Link>
          <Link href="#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="#process" className="transition hover:text-white">
            Process
          </Link>
          <Link href="#proof" className="transition hover:text-white">
            Proof
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Book a Call
          </Link>
        </nav>
      </div>
    </footer>
  );
}
