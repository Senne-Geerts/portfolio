/* =========================================================================
   The only file you edit when your CV changes. No layout or logic here —
   just data. Swap it for JSON, a CMS, or a markdown loader later without
   touching a line of the components.
   ========================================================================= */

/* EDIT ME: github / linkedin / resume are placeholders. */
export const LINKS = {
  email: "senne.geerts2003@gmail.com",
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  resume: "/senne-geerts-cv.pdf", // TODO
};

/* Drives both the nav labels and the scroll-spy. id must match the
   `id={...}` on each <section> in Portfolio.jsx. */
export const sections = [
  { id: "about", label: "about.tsx" },
  { id: "experience", label: "experience.tsx" },
  { id: "stack", label: "stack.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "education", label: "education.tsx" },
  { id: "contact", label: "contact.tsx" },
];

export const hero = {
  eyebrow: "// junior full-stack developer",
  name: "Senne Geerts.",
  blurb:
    "Junior full-stack developer with professional experience in Ruby on Rails and academic experience in " +
    "Java/Spring Boot. I learn fast, work independently or in a team, and have a real interest in identity and " +
    "authentication (JWT), modern web tech, and DevOps.",
};

export const about = {
  body:
    "I'm a junior developer based in Zemst, Belgium, with hands-on experience shipping features in Ruby on Rails " +
    "and a solid academic foundation in Java/Spring Boot. I like taking things apart to see how they work — " +
    "whether that's a codebase, a bike, or a home server — and I'm just as happy debugging a tricky edge case as I " +
    "am shipping something new.",
  languages: "Dutch (C2) · English (B1) · French (A2)",
};

/* Feeds the animated terminal card. type: "cmd" is typed out; "out" appears whole. */
export const termScript = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Senne Geerts — junior full-stack dev" },
  { type: "cmd", text: "cat stack.txt" },
  { type: "out", text: "Ruby on Rails · Java/Spring · React · Node" },
  { type: "cmd", text: "cat location.txt" },
  { type: "out", text: "Zemst, Belgium" },
];

export const skillGroups = [
  { label: "languages & frameworks", items: ["Java", "Spring Boot", "Ruby on Rails", "Node.js/Express", "Python", "React", "C#"] },
  { label: "web", items: ["HTML", "CSS", "JavaScript", "REST/JSON"] },
  { label: "databases", items: ["SQL", "PostgreSQL", "NoSQL"] },
  { label: "identity & auth", items: ["JWT (Spring Boot)", "JWT (Node/Express)"] },
  { label: "os & tools", items: ["Linux", "Docker", "Self-hosting", "AWS", "Azure", "Power BI"] },
];

export const experience = [
  {
    role: "Full-stack Developer",
    org: "Tree Company",
    period: "Feb 2026 — Aug 2026",
    note: "Fixed-term contract",
    bullets: [
      "Maintained and extended Smartvote, an online voting-advice application for the Swiss market (Ruby on Rails).",
      "Built Discuss-it, an internal platform for comment moderation and polling.",
      "Independently shipped features and fixed bugs in existing codebases; worked fluently with git workflows including rebasing and code review.",
      "Contributed to project proposals for the public sector.",
    ],
  },
  {
    role: "Full-stack Developer (Intern)",
    org: "Bpart",
    period: "2025",
    bullets: [
      "Worked on Bpart's online citizen-participation platform.",
      "Developed new features and fixed bugs in Ruby on Rails.",
      "Gained hands-on insight into professional software development and DevOps principles.",
    ],
  },
  {
    role: "Warehouse Assistant (student job)",
    org: "Retail Partners Colruyt Group, Mechelen",
    period: "2021 — 2025",
    bullets: ["Independently and accurately carried out logistics tasks (order picking, packaging)."],
  },
];

export const projects = [
  {
    tag: "project.01",
    title: "Smartvote",
    stack: "Ruby on Rails",
    desc: "Online voting-advice application for the Swiss market. Maintained and extended as part of the Tree Company team.",
  },
  {
    tag: "project.02",
    title: "Discuss-it",
    stack: "Ruby on Rails",
    desc: "Internal platform for comment moderation and polling, built at Tree Company.",
  },
  {
    tag: "project.03",
    title: "Chiro Skippy — website & POS app",
    stack: "Volunteer work",
    desc: "Built and maintain the website for a local youth movement; developed a point-of-sale app used at events.",
  },
  {
    tag: "project.04",
    title: "Home server",
    stack: "Docker · Linux · Self-hosted",
    desc: "Self-hosted home server running NAS, monitoring, media, and automation services — an ongoing playground for DevOps and containers.",
  },
];

export const education = [
  {
    school: "UCLL Leuven",
    program: "Bachelor Applied Computer Science",
    period: "2021 — 2025",
    bullets: [
      "Java/Spring Boot projects: chatbot, blog management system, automatic plant-watering system.",
      "Experience with JWT authentication in both Java/Spring Boot and Node/Express.",
      "Hands-on full-stack development and group projects.",
      "Internship at Bpart focused on web development with Ruby on Rails.",
    ],
  },
  {
    school: "Ursulinen Mechelen",
    program: "Accounting-Informatics",
    period: "2015 — 2021",
    bullets: ["Broad foundation in computer science and economics, which strengthened the transition into Applied Computer Science."],
  },
];
