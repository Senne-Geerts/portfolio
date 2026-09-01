import React from "react";
import { mono } from "../theme";

export function SectionLabel({ children, t }) {
  return (
    <p className="text-xs mb-6 tracking-widest uppercase" style={{ fontFamily: mono, color: t.pine }}>
      {children}
    </p>
  );
}
