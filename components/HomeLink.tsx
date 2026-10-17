"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

/**
 * Link to the home page. On the home page itself Next.js treats it as "already here" and does
 * not move, so it scrolls back to the top instead (smoothly, unless the visitor asked for less motion).
 */
export default function HomeLink({ children, ...props }: Props) {
  const pathname = usePathname();

  function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // Drop a "#section" left in the address bar by an earlier link.
    if (window.location.hash) history.replaceState(null, "", "/");
  }

  return (
    <Link href="/" onClick={scrollToTop} {...props}>
      {children}
    </Link>
  );
}
