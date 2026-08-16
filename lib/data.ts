import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const projects = [
  {
    title: "DriftIQ — Cloud Storage SaaS",
    description: "Cloud-storage SaaS using Telegram Bot API for file storage and Supabase PostgreSQL for metadata. 30+ REST endpoints across auth, files, folders, sharing, and admin — with JWT/bcrypt auth, row-level security, rate limiting, and expiring password-protected sharing.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "JWT"],
    link: "https://driftiq-seven.vercel.app",
  },
  {
    title: "ClassSight — AI-Assisted Attendance",
    description: "Auditable attendance workflow with faculty authentication, class selection, image capture, face recognition with confidence signals, human review, and attendance finalization.",
    tech: ["Next.js", "Spring Boot", "FastAPI", "PostgreSQL", "RabbitMQ"],
    link: "https://github.com/harshitgarg10042008-oss/ClassSight",
  },
  {
    title: "DBOps-AI — PostgreSQL Ops Control Plane",
    description: "Schema-grounded assistant converting natural-language database questions into structured, read-only-validated SQL proposals with EXPLAIN cost review and append-only audit events.",
    tech: ["React", "Express", "tRPC", "Drizzle", "PostgreSQL"],
    link: "https://github.com/harshitgarg10042008-oss/DBOps-AI",
  },
  {
    title: "DevFlow AI — GitHub PR Intelligence",
    description: "GitHub-connected dashboard syncing branches, commits, PRs, and review history, with deterministic pre-checks, optional AI-assisted review, and risk/severity categorization.",
    tech: ["React", "Express", "tRPC", "MySQL/TiDB", "Redis"],
    link: "https://github.com/harshitgarg10042008-oss/DevFlow-AI",
  },
  {
    title: "Persona — AI Interview Assessment Platform",
    description: "AI interview platform analyzing video, audio, and resumes for structured feedback on posture, gestures, eye contact, attire, and speech fluency, with adaptive interviews and STAR-format feedback.",
    tech: ["MediaPipe", "CLIP/BLIP/ViT", "Whisper", "React"],
    link: "https://persona-app-sw4b.onrender.com",
  },
];

export const tools = [
  { icon: VscVscode, name: "Visual Studio Code", category: "Code Editor" },
  { icon: SiReact, name: "React", category: "Frontend Library" },
  { icon: SiNextdotjs, name: "Next.js", category: "Framework" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
  { icon: SiTypescript, name: "TypeScript", category: "Language" },
  { icon: SiPython, name: "Python", category: "Language" },
  { icon: SiNodedotjs, name: "Node.js", category: "Runtime" },
  { icon: SiExpress, name: "Express.js", category: "Backend Framework" },
  { icon: SiFastapi, name: "FastAPI", category: "Backend Framework" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Database" },
  { icon: SiDocker, name: "Docker", category: "DevOps" },
  { icon: SiGit, name: "Git & GitHub", category: "Version Control" },
];
