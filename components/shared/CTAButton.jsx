import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants = {
  primary:
    "bg-brand text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "border border-white/15 text-white/90 hover:border-white/40 hover:text-white",
  ghost:
    "text-white/70 hover:text-white",
};

export default function CTAButton({ href, children, variant = "primary" }) {
  return (
    // Micro-interaction: hover lift + glow to signal clickability.
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
