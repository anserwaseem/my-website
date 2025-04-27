import { Github, Linkedin } from "lucide-react";

import automadeasy from "@/public/projects-imgs/automadeasy.webp";
import easyAccounting from "@/public/projects-imgs/easy-accounting.webp";
import ensembleReact from "@/public/projects-imgs/ensemble-react.webp";
import anserwaseem from "@/public/imgs/anserwaseem.webp";

const data = {
  home: {
    name: "Anser Waseem",
    description: "I Fix, Optimize & Build #Next_js, #React & #Nodejs Apps",
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
      id: 1,
      title: "Easy Accounting",
      description:
        "Offline first accounting system (desktop app), helping SMEs to manage their finances.\n\n Technologies Used: Electron.js, React.js, SQLite, Shadcn UI, Tailwind CSS.",
      image: easyAccounting,
      previewLink: "https://github.com/anserwaseem/easy-accounting/",
    },
    {
      id: 2,
      title: "Automadeasy",
      description:
        "An interactive tool for visual automaton design, analysis, and transformation, built to make learning and teaching Theory of Automata easier. \n\n Technologies Used: React.js, TypeScript, CSS.",
      image: automadeasy,
      previewLink: "https://www.automadeasy.com/",
    },
    {
      id: 3,
      title: "Ensemble React",
      description:
        "Working on Ensemble React for 1.5 years, developing a modular toolkit to integrate low-code, declarative apps into React ecosystems. \n\n Technologies Used: Next.js, React.js, TypeScript, Turborepo, pnpm.",
      image: ensembleReact,
      previewLink: "https://github.com/EnsembleUI/ensemble-react",
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "A reliable and polished website to showcase my skills and impress potential clients or employers. \n\n Technologies Used: Next.js, React.js, Tailwind CSS.",
      image: anserwaseem,
      previewLink: "https://anserwaseem.com",
    },
  ],
  technologies: [
    {
      id: 1,
      name: "html",
      src: "/skills/html.svg",
      link: "https://en.wikipedia.org/wiki/HTML",
    },
    {
      id: 2,
      name: "css",
      src: "/skills/css.svg",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      id: 3,
      name: "javascript",
      src: "/skills/javascript.svg",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      id: 4,
      name: "typescript",
      src: "/skills/typescript.svg",
      link: "https://en.wikipedia.org/wiki/TypeScript",
    },
    {
      id: 5,
      name: "react",
      src: "/skills/react.svg",
      link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
    },
    {
      id: 6,
      name: "tailwind",
      src: "/skills/tailwind.svg",
      link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
    },
    {
      id: 7,
      name: "nextJS",
      src: "/skills/nextJS.svg",
      link: "https://en.wikipedia.org/wiki/Next.js",
    },
    {
      id: 8,
      name: "electronJS",
      src: "/skills/electronJS.svg",
      link: "https://en.wikipedia.org/wiki/Electron_(software_framework)",
    },
    {
      id: 9,
      name: "vitejs",
      src: "/skills/vitejs.svg",
      link: "https://en.wikipedia.org/wiki/Vite_(software)",
    },
    {
      id: 10,
      name: "git",
      src: "/skills/git.svg",
      link: "https://en.wikipedia.org/wiki/Git",
    },
    {
      id: 11,
      name: "postgresql",
      src: "/skills/postgresql.svg",
      link: "https://en.wikipedia.org/wiki/PostgreSQL",
    },
    {
      id: 12,
      name: "nodejs",
      src: "/skills/nodeJS.svg",
      link: "https://en.wikipedia.org/wiki/Node.js",
    },
    {
      id: 13,
      name: "firebase",
      src: "/skills/firebase.svg",
      link: "https://en.wikipedia.org/wiki/Firebase",
    },
    {
      id: 14,
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
