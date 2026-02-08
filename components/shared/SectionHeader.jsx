export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  titleId,
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={titleId}
        className="text-3xl font-semibold text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
