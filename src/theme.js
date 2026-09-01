/* =========================================================================
   Design tokens + typography. Edit here to restyle; components read these,
   they don't hard-code colours.
   ========================================================================= */

export const themes = {
  light: {
    name: "light",
    paper: "#F0F2EF",
    ink: "#191D1C",
    inkSoft: "#4B5450",
    pine: "#3D6B5C",
    amber: "#B5652F",
    line: "#D8DCD6",
    card: "#FFFFFF",
    cardHead: "#E7EAE6",
    onPine: "#FFFFFF",
    navBg: "rgba(240,242,239,0.82)",
  },
  dark: {
    name: "dark",
    paper: "#12160F",
    ink: "#E9EDE7",
    inkSoft: "#98A49C",
    pine: "#7FB79E",
    amber: "#E0954F",
    line: "#28312C",
    card: "#171D18",
    cardHead: "#1E2620",
    onPine: "#0E1310",
    navBg: "rgba(18,22,15,0.82)",
  },
};

export const mono = "'IBM Plex Mono', monospace";
export const sans = "'IBM Plex Sans', sans-serif";
export const serif = "'Fraunces', serif";

export const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`;
