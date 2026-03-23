import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaGithub,
  FaGolang,
  FaInstagram,
  FaJava,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const SOCIAL_LINKS = Object.freeze([
  {
    id: 1,
    name: "Instagram",
    handle: "@book_cnk_",
    icon: FaInstagram,
    link: "https://www.instagram.com/book_cnk_/",
  },
  {
    id: 2,
    name: "Facebook",
    handle: "book.chanakarn",
    icon: FaFacebookF,
    link: "https://www.facebook.com/book.chanakarn/",
  },
  {
    id: 3,
    name: "GitHub",
    handle: "BookCnk",
    icon: FaGithub,
    link: "https://github.com/BookCnk",
  },
]);

export const ROUTES = Object.freeze([
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/aboutme",
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
  },
]);

export const HERO_METRICS = Object.freeze([
  {
    id: 1,
    value: "3+",
    label: "projects shipped",
  },
  {
    id: 2,
    value: "Backend",
    label: "main development focus",
  },
  {
    id: 3,
    value: "Bangkok",
    label: "based in Thailand",
  },
]);

export const PROJECTS = Object.freeze([
  {
    id: 1,
    title: "Password Generator",
    desc: "A security-focused tool that helps users generate stronger passwords and evaluate their strength through clear, practical feedback.",
    category: "Frontend Build",
    linkgit: "",
    linkdemo: "https://int203-project-password-secure.vercel.app/",
    image: "/proj2.png",
    stack: ["Vue", "Validation", "Security UX"],
    highlights: [
      "Generates passwords from selected rules",
      "Checks password strength in real time",
      "Keeps the interface focused and easy to use",
    ],
  },
  {
    id: 2,
    title: "Markdown Parser",
    desc: "A markdown editor built for writing, editing, and managing structured content with a smoother everyday workflow.",
    category: "Full-Stack Coursework",
    linkgit: "",
    linkdemo: "https://project-2-sec-1-markdown-parser.vercel.app/",
    image: "/proj1.png",
    stack: ["Vue", "JSON Server", "Editor UX"],
    highlights: [
      "Supports editing and previewing markdown content",
      "Designed for document organization and clarity",
      "Combines content tooling with a lightweight backend",
    ],
  },
  {
    id: 3,
    title: "Kanban Board",
    desc: "An agile project board for tracking tasks, visualizing progress, and helping teams stay aligned while work moves forward.",
    category: "Backend Product",
    linkgit: "",
    linkdemo: "http://intproj23.sit.kmutt.ac.th/sy1/login",
    image: "/proj3.png",
    stack: ["Java", "Vue", "JWT", "MySQL", "Docker"],
    highlights: [
      "Handles task flow through a Kanban-style system",
      "Uses authentication to protect team workflows",
      "Built with deployment-minded backend tooling",
    ],
  },
]);

export const EDUCATION = Object.freeze([
  {
    id: 1,
    school: "Debsirin School",
    program: "Secondary Education",
    period: "2016 - 2022",
    description:
      "Built a strong academic foundation and developed the problem-solving mindset that later pulled me toward software development.",
    logo: "/Debsirinlogo.png",
    backdrop: "/schoolbg.jpg",
  },
  {
    id: 2,
    school: "King Mongkut's University of Technology Thonburi",
    program: "University Journey",
    period: "2022 - Present",
    description:
      "Currently sharpening backend, database, and full-stack skills through coursework, product work, and hands-on team projects.",
    logo: "/collegeLogo.png",
    backdrop: "/backgroundImage.jpg",
  },
]);

export const BADEGE = Object.freeze([
  { icon: FaHtml5, name: "HTML 5" },
  { icon: FaCss3Alt, name: "CSS 3" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: FaJava, name: "Java" },
  { icon: FaVuejs, name: "Vue" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaGit, name: "Git" },
  { icon: FaGolang, name: "Golang" },
]);
