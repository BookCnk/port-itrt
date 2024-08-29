export const SOCIAL_ICONS = Object.freeze([
  {
    id: 1,
    icon: "/int.png",
    name: "Instagram",
    link: "https://www.instagram.com/book_cnk_/",
  },
  {
    id: 2,
    icon: "/face.png",
    name: "Facebook",
    link: "https://www.facebook.com/book.chanakarn/",
  },
  {
    id: 3,
    icon: "/githubi.png",
    name: "Github",
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
    name: "About me",
    path: "/aboutme",
  },

  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
]);

export const SERVICES = Object.freeze([
  {
    id: 1,
    name: "UX Design",
    icon: "/design.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur tempore non quod cumque a.",
  },
  {
    id: 2,
    name: "Brand Design",
    icon: "/brand.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore non quod cumque a.",
  },
  {
    id: 3,
    name: "3D Design",
    icon: "/3d.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore non quod cumque a.",
  },
]);

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaSass,
  FaAngular,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";
import { FaJava, FaGolang } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si"; // Import more icons as needed

export const BADEGE = Object.freeze([
  { icon: FaHtml5, name: "HTML 5" },
  { icon: FaCss3Alt, name: "CSS 3" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React JS" },
  { icon: SiNextdotjs, name: "Next JS" },
  { icon: FaNodeJs, name: "Node JS" },
  { icon: SiExpress, name: "Express JS" },
  { icon: SiMongodb, name: "Mongo DB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaJava, name: "Java" },
  { icon: FaGit, name: "Git" },
  { icon: FaVuejs, name: "Vue JS" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaGolang, name: "Golang" },
]);
