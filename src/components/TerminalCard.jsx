import React from "react";
import { mono } from "../theme";
import { useTypedScript } from "../hooks/useTypedScript";

export function TerminalCard({ t, script, label }) {
  const { lines, done } = useTypedScript(script);

  const cursor = (
    <span
      aria-hidden="true"
      className="term-cursor inline-block w-2 h-4 align-middle ml-0.5"
      style={{ backgroundColor: t.pine }}
    />
  );

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg w-full max-w-sm"
      style={{ border: `1px solid ${t.line}`, backgroundColor: t.card }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: `1px solid ${t.line}`, backgroundColor: t.cardHead }}
      >
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#E0605A" }} />
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#E3B23C" }} />
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.pine }} />
        <span className="ml-2 text-xs" style={{ fontFamily: mono, color: t.inkSoft }}>
          senne@portfolio: ~
        </span>
      </div>
      <div
        className="p-4 text-sm leading-relaxed"
        style={{ fontFamily: mono, color: t.ink, minHeight: 168 }}
        aria-label={label || "Terminal introducing Senne Geerts"}
      >
        {lines.map((l, i) =>
          l.type === "cmd" ? (
            <p key={i} className="whitespace-pre-wrap break-words">
              <span style={{ color: t.pine }}>$</span> {l.shown}
              {!done && i === lines.length - 1 ? cursor : null}
            </p>
          ) : (
            <p key={i} className="whitespace-pre-wrap break-words" style={{ color: t.inkSoft }}>
              {l.shown}
            </p>
          )
        )}
        {done ? (
          <p>
            <span style={{ color: t.pine }}>$</span>
            {cursor}
          </p>
        ) : null}
      </div>
    </div>
  );
}
