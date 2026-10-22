"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

/**
 * The sticky header's wrapper: it slides out of view while the visitor scrolls down to read, and
 * comes back on the slightest scroll up, near the top of the page, or when a link in it gets
 * keyboard focus. Without JavaScript it simply stays put.
 */
export default function HideOnScroll({ className = "", children }: Props) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // Cheap enough to run on every scroll event: React skips the render when nothing changes.
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 120) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6 || y < 120) lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${className} transition-transform duration-300 ease-out motion-reduce:transition-none ${hidden ? "-translate-y-[calc(100%+1rem)]" : ""}`}
      onFocus={() => setHidden(false)}
    >
      {children}
    </header>
  );
}
