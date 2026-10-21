type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  /** Intro beside the title on wide screens instead of under it. */
  split?: boolean;
  /** Light text, for a heading on dark green. */
  dark?: boolean;
};

/** The small green label, title and intro line every section opens with. */
export default function SectionHeading({ eyebrow, title, children, split = false, dark = false }: Props) {
  return (
    <div className={`reveal ${split ? "flex flex-wrap items-end justify-between gap-x-8 gap-y-3" : ""}`}>
      <div>
        <p className={`text-sm font-bold tracking-[0.08em] uppercase ${dark ? "text-brand-sprout" : "text-brand-pine"}`}>
          {eyebrow}
        </p>
        <h2 className="mt-1.5 text-4xl leading-[1.05] font-extrabold tracking-[-0.02em] sm:text-[52px]">{title}</h2>
      </div>
      {children && (
        <p className={`${split ? "max-w-[36ch]" : "mt-3 max-w-2xl"} ${dark ? "text-white/80" : "text-brand-moss"}`}>
          {children}
        </p>
      )}
    </div>
  );
}
