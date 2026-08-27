import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Emergency Route Optimizer",
    slug: "quibbo",
    thumbnail: "/project-images/emergency-route-optimizer.PNG",
    description: "Intelligent route optimization for emergency response",
  },
  {
    title: "Phoenix Threat Detection System",
    slug: "sharkie",
    thumbnail: "/project-images/sentinel-security.PNG",
    description: "Security analysis platform for identifying suspicious processes",
  },
  {
    title: "PhoenixMic — Real-Time Audio DSP Engine",
    slug: "cubewar",
    thumbnail: "/project-images/phoenixmic.PNG",
    description: "Real-time microphone processing with configurable DSP pipeline",
  },
  {
    title: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
    slug: "particles",
    thumbnail: "/project-images/security-bot.png",
    description: "Discord security and anti-nuke moderation bot",
  },
] as const satisfies ProjectPreview[];
