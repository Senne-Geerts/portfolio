# Portfolio — modular source

Split along the axis that earns it: things that change for different reasons
live in different files.

```
src/
  content.js            ← all copy & data. Edit this when your CV changes.
  theme.js              ← colours, fonts, font import. Edit this to restyle.
  utils.js              ← prefersReduced() and other tiny shared helpers.
  hooks/
    useTypedScript.js   ← the terminal typewriter animation.
    useScrollSpy.js     ← highlights the nav item for the current section.
  components/
    TerminalCard.jsx    ← the animated "signature" terminal.
    Reveal.jsx          ← fade/lift-on-scroll wrapper.
    ThemeToggle.jsx     ← light/dark button.
    SectionLabel.jsx    ← the small uppercase eyebrow above each section.
  Portfolio.jsx         ← composition only: imports the above + section markup.
```

## Where to edit

- **New job, project, or skill?** → `src/content.js`, nothing else.
- **Restyle?** → `src/theme.js`. Components read tokens (`t.pine`, `mono`…),
  they don't hard-code colours.
- **Add a section?** Add an entry to `sections` in `content.js` (its `id` must
  match the `id={...}` on the `<section>`), then add the section markup in
  `Portfolio.jsx`. The nav and scroll-spy pick it up automatically.

## Fill these in before deploying

In `src/content.js`, the `LINKS` object has three `// TODO` placeholders:
`github`, `linkedin`, `resume`.

## Persisting the theme

`Portfolio.jsx` reads the visitor's OS colour scheme on first load. To remember
their manual toggle across visits, add `localStorage` in the `useState`
initializer and in the toggle handler — omitted here because browser storage is
blocked in the chat-artifact preview, but it works fine in a real deployment.

## Usage

```jsx
import Portfolio from "./src/Portfolio";
// render <Portfolio /> at your app root
```

Requires React 16.8+ (hooks) and Tailwind's core utility classes for layout.
