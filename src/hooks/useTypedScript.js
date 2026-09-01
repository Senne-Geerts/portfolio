import { useState, useEffect } from "react";
import { prefersReduced } from "../utils";

/* Types out a script of { type: "cmd" | "out", text } lines.
   "cmd" lines are typed character-by-character; "out" lines appear whole.
   Under reduced-motion the whole script is shown instantly. */
export function useTypedScript(script) {
  const animate = !prefersReduced();
  const [lines, setLines] = useState(() =>
    animate ? [] : script.map((l) => ({ ...l, shown: l.text }))
  );
  const [done, setDone] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    let cancelled = false;
    const timers = [];
    let li = 0;
    const push = (updater) => setLines((prev) => updater(prev.slice()));

    const runLine = () => {
      if (cancelled) return;
      if (li >= script.length) {
        setDone(true);
        return;
      }
      const line = script[li];
      push((c) => [...c, { ...line, shown: "" }]);

      if (line.type === "out") {
        push((c) => {
          c[c.length - 1] = { ...line, shown: line.text };
          return c;
        });
        li += 1;
        timers.push(setTimeout(runLine, 240));
        return;
      }

      let ci = 0;
      const typeChar = () => {
        if (cancelled) return;
        ci += 1;
        push((c) => {
          c[c.length - 1] = { ...line, shown: line.text.slice(0, ci) };
          return c;
        });
        if (ci < line.text.length) {
          timers.push(setTimeout(typeChar, 40));
        } else {
          li += 1;
          timers.push(setTimeout(runLine, 320));
        }
      };
      timers.push(setTimeout(typeChar, 40));
    };

    timers.push(setTimeout(runLine, 450));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [animate, script]);

  return { lines, done };
}
