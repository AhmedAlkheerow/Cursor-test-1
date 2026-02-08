import Link from "next/link";
import CTAButton from "../shared/CTAButton";

export default function Navbar() {
  return (
    // UI: sticky glass nav to keep conversion path visible.
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-sm font-semibold text-brand">
            SF
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Signalframe
            </span>
            <span className="block text-xs text-white/50">
              SaaS Growth + Conversion
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="#problem" className="transition hover:text-white">
            Problems
          </Link>
          <Link href="#positioning" className="transition hover:text-white">
            Positioning
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
        </div>
        <div className="flex items-center gap-4">
          <CTAButton href="#contact" variant="primary">
            Book a Strategy Call
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}
