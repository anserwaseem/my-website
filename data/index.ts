import { Github, Linkedin } from "lucide-react";

import automadeasy from "@/public/projects-imgs/automadeasy.webp";
import easyAccounting from "@/public/projects-imgs/easy-accounting.webp";
import ensembleReact from "@/public/projects-imgs/ensemble-react.webp";
import anserwaseem from "@/public/imgs/anserwaseem.webp";
import princessDragonSlayer from "@/public/projects-imgs/princess-dragon-slayer.webp";
import urlToMetadata from "@/public/projects-imgs/url-to-metadata.webp";

const data = {
  home: {
    name: "Anser Waseem",
    description: "I Fix, Optimize & Build #NextJs, #ReactJs & #NodeJs Apps",
    cvLink: "#contact",
  },
  links: [
    {
      name: "github",
      link: "https://github.com/anserwaseem",
      icon: Github,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/anserwaseem/",
      icon: Linkedin,
    },
  ],
  projects: [
    {
      title: "Easy Accounting",
      description:
        "Offline first accounting system (desktop app), helping SMEs to manage their finances.\n\n Tech: Electron.js, React.js, SQLite, Shadcn UI, Tailwind.",
      image: easyAccounting,
      previewLink: "https://github.com/anserwaseem/easy-accounting/",
    },
    {
      title: "Automadeasy",
      description:
        "An interactive tool for visual automaton design, analysis, and transformation, built to make learning and teaching Theory of Automata easier. \n\n Tech: React.js, TypeScript, CSS.",
      image: automadeasy,
      previewLink: "https://www.automadeasy.com/",
    },
    {
      title: "Princess Dragon Slayer",
      description:
        "2D game (Godot Engine) with character movement, collision, coin collection & scoring. \n\nTech: Godot, GDScript, Brackeys Platformer Bundle.",
      image: princessDragonSlayer,
      previewLink: "https://github.com/anserwaseem/princess-dragon-slayer",
    },
    {
      title: "Ensemble React",
      description:
        "Ensemble React (1.5+ yrs): Modular toolkit for low-code declarative apps in React ecosystems. \n\nTech: React, TS, Jotai, Turbo, Firebase, Tanstack, Antd, Jest.",
      image: ensembleReact,
      previewLink: "https://github.com/EnsembleUI/ensemble-react",
    },
    {
      title: "Metadata from URL API",
      description:
        "High-performant metadata API on the edge. Global, cached, rate-limited. \n\nTech: Bun, Hono, Cloudflare Workers, Cheerio, Upstash Redis.",
      image: urlToMetadata,
      previewLink:
        "https://rapidapi.com/hafizanserwaseem/api/metadata-from-url",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A reliable and polished website to showcase my skills and impress potential clients or employers. \n\n Tech: Next.js, React.js, Tailwind, Shadcn UI, Motion.",
      image: anserwaseem,
      previewLink: "https://anserwaseem.com",
    },
  ],
  technologies: [
    {
      name: "html",
      src: "/skills/html.svg",
      link: "https://en.wikipedia.org/wiki/HTML",
    },
    {
      name: "css",
      src: "/skills/css.svg",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "javascript",
      src: "/skills/javascript.svg",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "typescript",
      src: "/skills/typescript.svg",
      link: "https://en.wikipedia.org/wiki/TypeScript",
    },
    {
      name: "react",
      src: "/skills/react.svg",
      link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
    },
    {
      name: "tailwind",
      src: "/skills/tailwind.svg",
      link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
    },
    {
      name: "nextJS",
      src: "/skills/nextJS.svg",
      link: "https://en.wikipedia.org/wiki/Next.js",
    },
    {
      name: "electronJS",
      src: "/skills/electronJS.svg",
      link: "https://en.wikipedia.org/wiki/Electron_(software_framework)",
    },
    {
      name: "vitejs",
      src: "/skills/vitejs.svg",
      link: "https://en.wikipedia.org/wiki/Vite_(software)",
    },
    {
      name: "git",
      src: "/skills/git.svg",
      link: "https://en.wikipedia.org/wiki/Git",
    },
    {
      name: "postgresql",
      src: "/skills/postgresql.svg",
      link: "https://en.wikipedia.org/wiki/PostgreSQL",
    },
    {
      name: "nodejs",
      src: "/skills/nodeJS.svg",
      link: "https://en.wikipedia.org/wiki/Node.js",
    },
    {
      name: "firebase",
      src: "/skills/firebase.svg",
      link: "https://en.wikipedia.org/wiki/Firebase",
    },
    {
      name: "markdown",
      src: "/skills/markdown.svg",
      link: "https://en.wikipedia.org/wiki/Markdown",
    },
  ],
  contact: {
    email: "hafiz.anser.waseem@gmail.com",
    name: "Anser Waseem",
  },
};

export default data;
