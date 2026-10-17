type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

/** The small green label, title and intro line every section opens with. */
export default function SectionHeading({ eyebrow, title, children }: Props) {
  return (
    <div className="reveal">
      <p className="text-sm font-bold tracking-wider text-brand-green uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 max-w-2xl text-lg text-brand-ink/80">{children}</p>}
    </div>
  );
}
