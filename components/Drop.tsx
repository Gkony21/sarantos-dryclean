/** The water drop from the logo, in the current text colour. */
export default function Drop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 28" className={className} aria-hidden="true">
      <path d="M11 0C15 6 22 12 22 17a11 11 0 0 1-22 0C0 12 7 6 11 0Z" fill="currentColor" />
    </svg>
  );
}
