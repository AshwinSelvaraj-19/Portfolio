export const social = [
  { url: "mailto:ashwinselvaraj19@gmail.com", name: "mail" },
  { url: "https://github.com/AshwinSelvaraj-19", name: "github" },
  { url: "https://www.linkedin.com/in/ashwin-selvaraj19/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
