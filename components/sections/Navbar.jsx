import Link from "next/link";
import CTAButton from "../shared/CTAButton";

export default function Navbar() {
  return (
    // UI: slim, premium nav with subtle separator line.
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold uppercase text-white">
            G
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-ink">
              Greater
            </span>
            <span className="block text-xs text-muted">
              SaaS growth & conversion
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="#services" className="transition hover:text-ink">
            Services
          </Link>
          <Link href="#work" className="transition hover:text-ink">
            Work
          </Link>
          <Link href="#process" className="transition hover:text-ink">
            Process
          </Link>
          <Link href="#proof" className="transition hover:text-ink">
            Proof
          </Link>
          <Link href="#contact" className="transition hover:text-ink">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <CTAButton href="#contact" variant="primary">
            Start a Project
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}
