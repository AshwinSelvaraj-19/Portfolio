import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Notfallrouten-Optimierung",
    slug: "quibbo",
    thumbnail: "/project-images/emergency-route-optimizer.PNG",
    description: "Intelligente Routenoptimierung für Notfallreaktion",
  },
  {
    title: "Phoenix Bedrohungserkennungssystem",
    slug: "sharkie",
    thumbnail: "/project-images/sentinel-security.PNG",
    description: "Sicherheitsanalyse-Plattform zur Identifizierung verdächtiger Prozesse",
  },
  {
    title: "PhoenixMic — Echtzeit-Audio-DSP-Engine",
    slug: "cubewar",
    thumbnail: "/project-images/phoenixmic.PNG",
    description: "Echtzeit-Mikrofonverarbeitung mit konfigurierbarer DSP-Pipeline",
  },
  {
    title: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
    slug: "particles",
    thumbnail: "/project-images/security-bot.png",
    description: "Discord-Sicherheits- und Anti-Nuke-Moderationsbot",
  },
] as const satisfies ProjectPreview[];
