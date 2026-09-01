import React, { useState, useEffect, useRef } from "react";
import { prefersReduced } from "../utils";

/* Fades + lifts its children into view on first scroll into the viewport.
   Reduced-motion or no IntersectionObserver → renders visible immediately.
   Relies on the .reveal / .reveal.in keyframes injected in Portfolio.jsx. */
export function Reveal({ children, delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
