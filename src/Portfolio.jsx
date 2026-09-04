import React, { useState, useEffect } from "react";

import { themes, mono, sans, serif, fontImport } from "./theme";
import { prefersReduced } from "./utils";
import {
  LINKS,
  getLocaleContent,
} from "./content";

import { useScrollSpy } from "./hooks/useScrollSpy";
import { SectionLabel } from "./components/SectionLabel";
import { Reveal } from "./components/Reveal";
import { ThemeToggle } from "./components/ThemeToggle";
import { TerminalCard } from "./components/TerminalCard";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [locale, setLocale] = useState("en");
  const { sections, hero, about, termScript, skillGroups, experience, projects, education, ui } = getLocaleContent(locale);
  const [active, setActive] = useScrollSpy(sections, "about");
  const t = themes[theme];

  // Respect the visitor's OS colour scheme; set the tab title.
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    document.title = ui.title;
    document.documentElement.lang = locale;
  }, [locale, ui.title]);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
    setActive(id);
  };

  const dynamicStyle = `
    ${fontImport}
    @keyframes blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
    @keyframes reveal-up { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
    .term-cursor { animation: blink 1s step-end infinite; }
    .reveal { opacity: 0; will-change: opacity, transform; }
    .reveal.in { animation: reveal-up .6s cubic-bezier(.2,.7,.2,1) forwards; }
    a:focus-visible, button:focus-visible {
      outline: 2px solid ${t.pine}; outline-offset: 3px; border-radius: 4px;
    }
    .skiplink {
      position: absolute; left: 12px; top: -60px; z-index: 50;
      background: ${t.ink}; color: ${t.paper}; padding: 8px 14px; border-radius: 6px;
      font-family: ${mono}; font-size: 13px; transition: top .2s ease;
    }
    .skiplink:focus { top: 12px; }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .001ms !important; animation-iteration-count: 1 !important;
        transition-duration: .001ms !important; scroll-behavior: auto !important;
      }
      .reveal { opacity: 1 !important; }
      .term-cursor { animation: none !important; }
    }
  `;

  const sectionMt = { scrollMarginTop: 72 };

  return (
    <div style={{ backgroundColor: t.paper, color: t.ink, minHeight: "100%", transition: "background-color .3s ease, color .3s ease" }}>
      <style>{dynamicStyle}</style>

      <a href="#about" className="skiplink" onClick={go("about")}>
        {ui.skipToContent}
      </a>

      {/* Nav */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-8 backdrop-blur"
        style={{ borderBottom: `1px solid ${t.line}`, backgroundColor: t.navBg }}
      >
        <a href="#about" onClick={go("about")} className="py-4 pr-6 font-semibold text-sm" style={{ fontFamily: mono, color: t.pine }}>
          SG
        </a>
        <nav aria-label={ui.sections} className="flex flex-1 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={go(s.id)}
              aria-current={active === s.id ? "true" : undefined}
              className="px-4 py-4 text-sm whitespace-nowrap transition-colors"
              style={{
                fontFamily: mono,
                color: active === s.id ? t.ink : t.inkSoft,
                borderBottom: active === s.id ? `2px solid ${t.pine}` : "2px solid transparent",
                backgroundColor: active === s.id ? t.card : "transparent",
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 pl-3">
          <ThemeToggle theme={theme} setTheme={setTheme} t={t} labels={ui} />
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "nl" : "en")}
            aria-label={locale === "en" ? "Schakel naar Nederlands" : "Switch to English"}
            title={locale === "en" ? "Nederlands" : "English"}
            className="text-xs px-3 py-2 rounded-md transition-colors"
            style={{ fontFamily: mono, color: t.inkSoft, border: `1px solid ${t.line}`, backgroundColor: "transparent" }}
          >
            {locale === "en" ? "NL" : "EN"}
          </button>
          <a
            href="#contact"
            onClick={go("contact")}
            className="hidden sm:inline-block text-sm px-4 py-2 rounded-md"
            style={{ fontFamily: mono, backgroundColor: t.ink, color: t.paper }}
          >
            {ui.getInTouch}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-12 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm mb-4 tracking-wide" style={{ fontFamily: mono, color: t.pine }}>
            {hero.eyebrow}
          </p>
          <h1 className="text-5xl sm:text-6xl mb-6 leading-tight" style={{ fontFamily: serif, fontWeight: 600 }}>
            {hero.name}
          </h1>
          <p className="text-lg mb-8 max-w-md" style={{ fontFamily: sans, color: t.inkSoft }}>
            {hero.blurb}
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              onClick={go("projects")}
              className="px-5 py-3 rounded-md text-sm font-medium"
              style={{ fontFamily: sans, backgroundColor: t.pine, color: t.onPine }}
            >
              {ui.viewWork}
            </a>
            <a
              href="#contact"
              onClick={go("contact")}
              className="px-5 py-3 rounded-md text-sm font-medium"
              style={{ fontFamily: sans, border: `1px solid ${t.line}`, color: t.ink }}
            >
              {ui.contact}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex justify-center md:justify-end">
          <TerminalCard t={t} script={termScript} label={ui.terminalLabel} />
        </Reveal>
      </section>

      {/* About */}
      <section className="px-6 sm:px-12 py-14 max-w-3xl mx-auto" id="about" style={sectionMt}>
        <Reveal>
          <SectionLabel t={t}>{ui.sectionHeadings.about}</SectionLabel>
          <p className="text-xl leading-relaxed mb-4" style={{ fontFamily: serif, fontWeight: 400, color: t.ink }}>
            {about.body}
          </p>
          <p className="text-sm" style={{ fontFamily: sans, color: t.inkSoft }}>
            {ui.languages}: {about.languages}
          </p>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="px-6 sm:px-12 py-14 max-w-3xl mx-auto" id="experience" style={sectionMt}>
        <Reveal>
          <SectionLabel t={t}>{ui.sectionHeadings.experience}</SectionLabel>
        </Reveal>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <Reveal key={job.org} delay={idx * 80}>
              <div className="pl-5" style={{ borderLeft: `2px solid ${t.line}` }}>
                <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                  <h3 className="text-lg" style={{ fontFamily: serif, fontWeight: 600, color: t.ink }}>
                    {job.role}
                  </h3>
                  <span className="text-sm" style={{ fontFamily: sans, color: t.pine }}>
                    {job.org}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ fontFamily: mono, color: t.inkSoft }}>
                  {job.period}
                  {job.note ? ` · ${job.note}` : ""}
                </p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm leading-relaxed" style={{ fontFamily: sans, color: t.inkSoft }}>
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 sm:px-12 py-14 max-w-3xl mx-auto" id="stack" style={sectionMt}>
        <Reveal>
          <SectionLabel t={t}>{ui.sectionHeadings.stack}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs mb-3" style={{ fontFamily: mono, color: t.inkSoft }}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-md"
                      style={{ fontFamily: sans, backgroundColor: t.card, border: `1px solid ${t.line}`, color: t.ink }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="px-6 sm:px-12 py-14 max-w-5xl mx-auto" id="projects" style={sectionMt}>
        <Reveal>
          <SectionLabel t={t}>{ui.sectionHeadings.projects}</SectionLabel>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, idx) => (
            <Reveal key={p.tag} delay={idx * 80}>
              <div
                className="rounded-lg p-6 flex flex-col justify-between h-full"
                style={{ border: `1px solid ${t.line}`, backgroundColor: t.card }}
              >
                <div>
                  <p className="text-xs mb-2" style={{ fontFamily: mono, color: t.inkSoft }}>
                    {p.tag}
                  </p>
                  <h3 className="text-lg mb-2" style={{ fontFamily: serif, fontWeight: 600, color: t.ink }}>
                    {p.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ fontFamily: sans, color: t.inkSoft }}>
                    {p.desc}
                  </p>
                </div>
                <p className="text-xs" style={{ fontFamily: mono, color: t.pine }}>
                  {p.stack}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 sm:px-12 py-14 max-w-3xl mx-auto" id="education" style={sectionMt}>
        <Reveal>
          <SectionLabel t={t}>{ui.sectionHeadings.education}</SectionLabel>
        </Reveal>
        <div className="space-y-8">
          {education.map((ed, idx) => (
            <Reveal key={ed.school} delay={idx * 80}>
              <div className="pl-5" style={{ borderLeft: `2px solid ${t.line}` }}>
                <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                  <h3 className="text-lg" style={{ fontFamily: serif, fontWeight: 600, color: t.ink }}>
                    {ed.school}
                  </h3>
                  <span className="text-sm" style={{ fontFamily: sans, color: t.pine }}>
                    {ed.program}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ fontFamily: mono, color: t.inkSoft }}>
                  {ed.period}
                </p>
                <ul className="space-y-1.5">
                  {ed.bullets.map((b, i) => (
                    <li key={i} className="text-sm leading-relaxed" style={{ fontFamily: sans, color: t.inkSoft }}>
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer / contact */}
      <footer
        className="px-6 sm:px-12 py-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: `1px solid ${t.line}` }}
        id="contact"
      >
        <div style={sectionMt}>
          <a href={`mailto:${LINKS.email}`} className="text-sm mb-1 block" style={{ fontFamily: mono, color: t.ink }}>
            {LINKS.email}
          </a>
          <p className="text-sm" style={{ fontFamily: mono, color: t.inkSoft }}>
            {ui.location}
          </p>
        </div>
        <div className="flex gap-5 text-sm" style={{ fontFamily: mono }}>
          <a href={`mailto:${LINKS.email}`} style={{ color: t.pine }}>
            {ui.email}
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" style={{ color: t.pine }}>
            github
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: t.pine }}>
            linkedin
          </a>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" style={{ color: t.amber }}>
            {ui.resume}
          </a>
        </div>
      </footer>
    </div>
  );
}
