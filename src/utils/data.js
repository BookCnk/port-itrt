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
    title: "Graduation Ceremony Management System",
    desc: "ระบบสำหรับจัดการงานพิธีพระราชทานปริญญาบัตรของนักศึกษา KMUTT ตั้งแต่การลงทะเบียนไปจนถึงข้อมูลสำคัญของการเข้าร่วมพิธี",
    category: "แพลตฟอร์มมหาวิทยาลัย",
    linkgit: "",
    linkdemo: "https://grad.kmutt.ac.th/gradkmutt",
    image: "/kmutt-grad.png",
    stack: ["React", "Tailwind CSS", "User Management"],
    highlights: [
      "รองรับการเข้าสู่ระบบสำหรับนักศึกษาและเจ้าหน้าที่",
      "รวมข้อมูลและขั้นตอนสำคัญของงานพิธีไว้ในระบบเดียว",
      "ออกแบบหน้าจอให้ทันสมัย ใช้งานง่าย และเหมาะกับงานทางการ",
    ],
  },
  {
    id: 2,
    title: "KMUTT Admission Form",
    desc: "พอร์ทัลสำหรับให้นักศึกษายื่นและจัดการใบสมัครเข้าศึกษาต่อของ KMUTT ช่วยให้ขั้นตอนการสมัครเป็นระบบและติดตามได้ง่ายขึ้น",
    category: "แพลตฟอร์มมหาวิทยาลัย",
    linkgit: "",
    linkdemo: "https://admission-form.kmutt.ac.th/login",
    image: "/admission-kmutt.png",
    stack: ["Next.js", "Tailwind CSS", "Google OAuth"],
    highlights: [
      "เชื่อมต่อ Google OAuth เพื่อให้เข้าสู่ระบบได้สะดวกและปลอดภัย",
      "จัดระเบียบขั้นตอนการสมัครเข้าศึกษาต่อให้ชัดเจนขึ้น",
      "รองรับการใช้งานทั้งบนมือถือและเดสก์ท็อป",
    ],
  },
  {
    id: 3,
    title: "TOONKUB",
    desc: "แพลตฟอร์มอ่านการ์ตูนและมังงะออนไลน์ที่ช่วยให้ผู้ใช้ค้นพบเรื่องใหม่ ๆ ตามหมวดหมู่ พร้อมประสบการณ์อ่านที่เป็นมิตรกับผู้ใช้",
    category: "แพลตฟอร์มการ์ตูน",
    linkgit: "",
    linkdemo: "https://toonkub.com/",
    image: "/toonkub.png",
    stack: ["Next.js", "Tailwind CSS", "Content API"],
    highlights: [
      "จัดหมวดหมู่คอนเทนต์ให้ค้นหาเรื่องที่สนใจได้ง่าย",
      "มีอันดับยอดนิยมและเรื่องเด่นประจำสัปดาห์",
      "รองรับฟีเจอร์ด้านโปรไฟล์และประสบการณ์อ่านต่อเนื่อง",
    ],
  },
  {
    id: 4,
    title: "Cannex-G",
    desc: "เว็บไซต์องค์กรสำหรับกลุ่มงานวิจัยและผลิตภัณฑ์ทางการแพทย์ที่เกี่ยวข้องกับกัญชา นำเสนอข้อมูลเชิงวิชาชีพอย่างเป็นระบบ",
    category: "เว็บไซต์องค์กรและสุขภาพ",
    linkgit: "",
    linkdemo: "https://cannex-g.com/en",
    image: "/cannex.png",
    stack: ["Next.js", "Tailwind CSS", "Bilingual Support"],
    highlights: [
      "นำเสนอข้อมูลผลิตภัณฑ์และงานวิจัยอย่างเป็นหมวดหมู่",
      "รองรับเนื้อหาสองภาษา ทั้งภาษาไทยและภาษาอังกฤษ",
      "ออกแบบภาพลักษณ์ให้สะอาด น่าเชื่อถือ และเหมาะกับองค์กร",
    ],
  },
  {
    id: 5,
    title: "Password Generator",
    desc: "เครื่องมือช่วยสร้างรหัสผ่านที่แข็งแรงขึ้น พร้อมตรวจสอบระดับความปลอดภัยและให้คำแนะนำที่เข้าใจง่าย",
    category: "งานพัฒนา Frontend",
    linkgit: "",
    linkdemo: "https://int203-project-password-secure.vercel.app/",
    image: "/proj2.png",
    stack: ["Vue", "Validation", "Security UX"],
    highlights: [
      "สร้างรหัสผ่านตามเงื่อนไขที่ผู้ใช้เลือกได้",
      "ตรวจสอบความแข็งแรงของรหัสผ่านแบบเรียลไทม์",
      "ออกแบบหน้าจอให้โฟกัสกับงานหลักและใช้งานง่าย",
    ],
  },
  {
    id: 6,
    title: "Markdown Parser",
    desc: "เครื่องมือเขียนและจัดการ Markdown สำหรับแก้ไข พรีวิว และดูแลคอนเทนต์ให้เป็นระเบียบใน workflow เดียว",
    category: "งาน Coursework แบบ Full Stack",
    linkgit: "",
    linkdemo: "https://project-2-sec-1-markdown-parser.vercel.app/",
    image: "/proj1.png",
    stack: ["Vue", "JSON Server", "Editor UX"],
    highlights: [
      "รองรับการแก้ไขและพรีวิว Markdown ในหน้าเดียว",
      "ช่วยจัดการเอกสารและคอนเทนต์ให้มองเห็นโครงสร้างชัดเจน",
      "เชื่อมงานด้านคอนเทนต์เข้ากับ backend ขนาดเบา",
    ],
  },
  {
    id: 7,
    title: "Kanban Board",
    desc: "บอร์ดจัดการงานแบบ Kanban สำหรับติดตามสถานะงาน เห็นภาพความคืบหน้า และช่วยให้ทีมทำงานไปในทิศทางเดียวกัน",
    category: "ผลิตภัณฑ์เน้น Backend",
    linkgit: "",
    linkdemo: "http://intproj23.sit.kmutt.ac.th/sy1/login",
    image: "/proj3.png",
    stack: ["Java", "Vue", "JWT", "MySQL", "Docker"],
    highlights: [
      "จัดการ task flow ผ่านรูปแบบบอร์ด Kanban",
      "มีระบบยืนยันตัวตนเพื่อปกป้อง workflow ของทีม",
      "พัฒนาโดยคำนึงถึง backend และการ deploy ใช้งานจริง",
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
