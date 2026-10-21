"use client";

import { useSyncExternalStore } from "react";

const BUILD_YEAR = new Date().getFullYear();

function subscribe() {
  return () => {};
}

/**
 * The current year. The page is built once and served as-is, so the year written at build time
 * is only a placeholder: the visitor's browser replaces it, and the footer never shows an old year.
 */
export default function CurrentYear() {
  return useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => BUILD_YEAR);
}
