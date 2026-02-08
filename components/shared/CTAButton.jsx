import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants = {
  primary:
    "bg-accent text-white shadow-crisp hover:-translate-y-0.5 hover:bg-accentDark",
  secondary:
    "border border-ink/20 text-ink hover:border-ink/60 hover:text-ink",
  ghost: "text-muted hover:text-ink",
};

export default function CTAButton({ href, children, variant = "primary" }) {
  return (
    // Micro-interaction: hover lift + glow to signal clickability.
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
