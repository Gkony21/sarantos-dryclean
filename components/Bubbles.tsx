type Bubble = {
  /** Distance from the left edge, e.g. "12%". */
  x: string;
  /** Start height above the bottom edge, in px. */
  bottom: number;
  size: number;
  /** Seconds before the bubble first rises, so they do not all move together. */
  delay: number;
  /** Seconds for one rise (default 9). */
  duration?: number;
};

/** Soap bubbles drifting up behind a dark green tile's content (styles in globals.css). */
export default function Bubbles({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {bubbles.map((bubble) => (
        <span
          key={`${bubble.x}-${bubble.bottom}`}
          className="bubble"
          style={
            {
              left: bubble.x,
              bottom: bubble.bottom,
              width: bubble.size,
              height: bubble.size,
              "--delay": `${bubble.delay}s`,
              "--duration": `${bubble.duration ?? 9}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
