import en from "./locales/en.json";
import nl from "./locales/nl.json";

/* Keep non-translatable contact links separate from locale content. */
export const LINKS = {
  email: "senne.geerts2003@gmail.com",
  github: "https://github.com/Senne-Geerts",
  linkedin: "https://www.linkedin.com/in/senne-geerts",
  resume: "/CV_Senne_Geerts_EN.pdf",
};

const resources = { en, nl };

export function getLocaleContent(locale) {
  return resources[locale] || resources.en;
}
