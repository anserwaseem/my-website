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
        "Offline first accounting system (desktop app), helping SMEs to manage their finances. Features comprehensive backup system with local file system and cloud storage via Supabase.\n\n Tech: Electron.js, React.js, SQLite, Supabase, Shadcn UI, Tailwind.",
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
  experiences: [
    {
      role: "Software Engineer",
      company: "Ensemble Technologies Inc.",
      companyLink: "https://ensembleui.com",
      duration: "Aug 2023 - Present",
      location: "Remote",
      description:
        "Led cross-platform development initiatives for flagship low-code platform, architecting solutions across Ensemble's YAML EDL, React, and Electron ecosystems. Promoted to lead role managing complex client projects and mentoring development teams.",
      achievements: [
        "Promoted to lead for Atlas Health project, managing 3+ developers and delivering enterprise healthcare solutions serving 10+ health systems.",
        "Built production-ready cross-platform applications: iOS shopping app for Tin using ensemble's EDL in YAML, complex healthcare platform for Atlas using React and ensemble-react, and desktop IDE using Electron.js.",
        "Developed custom Keycloak authentication themes using Keycloakify and Docker, creating branded login/logout/register experiences for Atlas Health's multi-tenant healthcare platform.",
        "Led major codebase refactoring initiative for Atlas project, establishing design system, reusable component library, and maintainable architecture patterns.",
        "Developed comprehensive CI/CD pipeline with automated code signing, notarization for macOS/Windows, and cloud deployment system for seamless application distribution.",
        "Architected and implemented enterprise-grade desktop application with automated update system, IPC channels, and multi-tab browser functionality.",
        "Extended client contracts through exceptional delivery quality - One project scope expanded beyond initial timeline, Atlas workforce scaled up due to project success.",
        "Spearheaded performance optimization initiatives across widget library, improving user experience and application responsiveness in Ensemble React.",
      ],
      technologiesUsed: [
        "Firebase",
        "React.js",
        "TypeScript",
        "Electron.js",
        "Jotai",
        "Turborepo",
        "Vite",
        "Node.js",
        "Express.js",
        "Docker",
        "GitHub Actions",
        "Keycloak",
      ],
    },
    {
      role: "Junior Software Developer",
      company: "Contour Software",
      companyLink: "https://contour-software.com/",
      duration: "Jun 2022 - Aug 2023",
      location: "Lahore, PK",
      description:
        "Architected complete frontend Identity Management System and contributed to backend development, while delivering Azure serverless data processing solutions. Led development initiatives across modern React applications, .NET 6 APIs, and comprehensive testing frameworks for enterprise security systems.",
      achievements: [
        "Led development and implementation of serverless orchestration Azure application for large-scale data processing, significantly improving data warehouse capabilities and analysis performance.",
        "Architected and developed complete frontend of Identity Management System from scratch using React, TypeScript, Material UI, and RTKQ enabling end-users to independently manage users, roles, and permissions - eliminating support ticket dependency and significantly improving operational efficiency.",
        "Developed robust backend API endpoints for Identity Management System using .NET 6 and IdentityServer4, implementing comprehensive unit testing with NUnit to ensure system reliability and security compliance.",
        "Provided critical maintenance and support for in-house data warehouse project, ensuring data integrity, performance optimization, and adherence to enterprise security best practices.",
      ],
      technologiesUsed: [
        "C#",
        ".NET 6",
        "IdentityServer4",
        "React.js",
        "TypeScript",
        "Material UI",
        "Redux Toolkit Query",
        "NUnit",
        "Azure Functions",
        "Azure",
      ],
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
      name: "docker",
      src: "/skills/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "google genai",
      src: "/skills/googleGenAI.webp",
      link: "https://googleapis.github.io/js-genai/release_docs/",
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
      name: "expressjs",
      src: "/skills/express.webp",
      link: "https://expressjs.com/",
    },
    {
      name: "firebase",
      src: "/skills/firebase.svg",
      link: "https://en.wikipedia.org/wiki/Firebase",
    },
    {
      name: "supabase",
      src: "/skills/supabase.svg",
      link: "https://supabase.com/",
    },
    {
      name: "keycloak",
      src: "/skills/keycloak.svg",
      link: "https://www.keycloak.org/",
    },
    {
      name: "identity server 4",
      src: "/skills/is4.webp",
      link: "https://identityserver4.readthedocs.io/en/latest/",
    },
    {
      name: "markdown",
      src: "/skills/markdown.svg",
      link: "https://en.wikipedia.org/wiki/Markdown",
    },
    {
      name: "redux toolkit query",
      src: "/skills/rtkq.svg",
      link: "https://redux-toolkit.js.org/rtk-query/overview",
    },
    {
      name: "material ui",
      src: "/skills/mui.svg",
      link: "https://mui.com/material-ui/",
    },
    {
      name: "ant design",
      src: "/skills/antd.svg",
      link: "https://ant.design/",
    },
    {
      name: "jotai",
      src: "/skills/jotai.webp",
      link: "https://jotai.org/",
    },
    {
      name: "turborepo",
      src: "/skills/turbo.webp",
      link: "https://turborepo.com/",
    },
  ],
  resume: {
    pdfUrl: "/resume/resume.pdf",
    previewImage: "/resume/preview.webp",
  },
  contact: {
    email: "hafiz.anser.waseem@gmail.com",
    name: "Anser Waseem",
  },
};

export default data;
