export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "java"
  | "cpp"
  | "supabase"
  | "mysql"
  | "pyside6"
  | "dsp"
  | "ai"
  | "opencv"
  | "discord"
  | "security";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  java: "Java",
  cpp: "C++",
  supabase: "Supabase",
  mysql: "MySQL",
  pyside6: "PySide6",
  dsp: "DSP",
  ai: "AI/ML",
  opencv: "OpenCV",
  discord: "Discord API",
  security: "Security",
} as const satisfies Record<TagVariant, string>;
