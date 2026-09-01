/* Small helpers shared across components. Neutral home so components
   don't import from each other in a chain. */

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
