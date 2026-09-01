import { useState, useEffect } from "react";

/* Returns the id of whichever section is crossing the middle of the
   viewport. Pass the same section list used to render the nav. */
export function useScrollSpy(sections, initial) {
  const [active, setActive] = useState(initial ?? sections[0]?.id);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return [active, setActive];
}
