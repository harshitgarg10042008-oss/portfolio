export const personalInfo = {
  name: "Harshit Garg",
  title: "Full-Stack Developer",
  description: "Computer Science undergraduate and full-stack developer building production-oriented web applications and AI-assisted systems.",
  longDescription: "Computer Science undergraduate and full-stack developer building production-oriented web applications and AI-assisted systems. Experienced with JavaScript, TypeScript, Python, React, Node.js, Express, REST APIs, PostgreSQL, computer vision, speech analysis, GitHub integrations, and cloud deployment; seeking software engineering internships and entry-level roles.",
  email: "harshitgarg.10042008@gmail.com",
  phone: "8448668035",
  location: "Greater Noida, India",
  github: "https://github.com/harshitgarg10042008-oss",
  stats: [
    { label: "Selected Projects", value: "5" },
    { label: "Expected Graduation", value: "2029" },
    { label: "Major", value: "CSE" }
  ]
};

export const technologies = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django", "Spring Boot", "FastAPI", "REST APIs", "tRPC"]
  },
  {
    category: "Databases / Data",
    items: ["PostgreSQL", "MySQL/TiDB", "SQLite", "Supabase", "MinIO"]
  },
  {
    category: "AI",
    items: ["PyTorch", "OpenAI Whisper", "MediaPipe", "CLIP", "BLIP", "ViT", "Face Recognition", "Speech Analysis"]
  },
  {
    category: "Engineering",
    items: ["Git", "GitHub", "JWT", "bcrypt", "RBAC", "Input Validation", "Rate Limiting", "Helmet", "RabbitMQ", "Redis", "BullMQ", "Docker", "Render", "Vercel", "DSA", "OOP"]
  }
];

export const projects = [
  {
    id: "driftiq",
    name: "DriftIQ",
    category: "Full-Stack Developer • Cloud Storage SaaS",
    link: "https://driftiq-seven.vercel.app",
    description: "Built and deployed a cloud-storage SaaS using Telegram Bot API for file storage and Supabase PostgreSQL for metadata; delivered 30+ REST endpoints across authentication, files, folders, sharing, and administration.",
    tech: ["Telegram Bot API", "Supabase", "PostgreSQL", "REST API", "JWT", "bcrypt"],
  },
  {
    id: "classsight",
    name: "ClassSight",
    category: "Full-Stack / AI • AI-Assisted Attendance",
    link: "https://github.com/harshitgarg10042008-oss/ClassSight",
    description: "Built an auditable workflow for faculty authentication, class selection, image capture, face recognition, confidence signals, human review, and attendance finalization.",
    tech: ["Next.js", "Spring Boot", "FastAPI", "PostgreSQL", "MinIO", "RabbitMQ", "RTSP", "FFmpeg"],
  },
  {
    id: "dbops-ai",
    name: "DBOps-AI",
    category: "Full-Stack / AI • PostgreSQL Operations Control Plane",
    link: "https://github.com/harshitgarg10042008-oss/DBOps-AI",
    description: "Developed a schema-grounded assistant that converts natural-language database questions into structured SQL proposals with deterministic read-only policy validation and EXPLAIN cost review.",
    tech: ["React", "Express", "tRPC", "Drizzle", "PostgreSQL"],
  },
  {
    id: "devflow-ai",
    name: "DevFlow AI",
    category: "Full-Stack / Developer Productivity • GitHub PR Intelligence",
    link: "https://github.com/harshitgarg10042008-oss/DevFlow-AI",
    description: "Built a GitHub-connected platform that synchronizes branches, commits, pull requests, and review history into a workspace dashboard with deterministic pre-checks and optional AI-assisted review.",
    tech: ["React", "Express", "tRPC", "Drizzle", "MySQL/TiDB", "Redis", "BullMQ"],
  },
  {
    id: "persona",
    name: "Persona",
    category: "AI / Full-Stack • AI Interview Assessment Platform",
    link: "https://persona-app-sw4b.onrender.com",
    description: "Developing an AI interview platform that analyzes video, audio, and resumes for structured feedback on posture, gestures, eye contact, attire, speech fluency, and career readiness.",
    tech: ["MediaPipe", "CLIP", "BLIP", "ViT", "Whisper"],
  }
];
