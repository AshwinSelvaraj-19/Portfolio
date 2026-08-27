import type { ProjectContent } from "../../types";

export default {
  title: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
  theme: "dark",
  tags: ["python", "discord", "supabase", "security"],
  videoBorder: false,
  heroImage: "/project-images/security-bot.png",
  description:
    "Discord Security & Anti-Nuke Bot.<br/><br/>Discord server security and moderation bot designed to protect communities against destructive actions, raids, malicious messages, and unauthorized activity.<br/><br/>Provides automated Anti-Nuke protection, raid detection, message security, moderation tools, security event tracking, and a real-time security dashboard.",
  components: [
    {
      type: "text",
      props: {
        title: "Project Overview",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 is a Discord bot built to protect servers from destructive actions, raids, malicious messages, and unauthorized activity. It provides automated Anti-Nuke protection, raid detection, message security analysis, moderation tools, security event tracking, and a real-time security dashboard — all backed by Supabase for persistent data storage.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Core Security Modules",
        items: [
          {
            number: "01",
            title: "Anti-Nuke Protection",
            description: "Monitors dangerous Discord server actions and protects against unauthorized destructive activity including channel creation/deletion/update, role creation/deletion/update, member bans, member kicks, bot additions, webhook creation/update/deletion, and dangerous permission/overwrite changes. Includes trusted-user/owner protection and actor validation.",
          },
          {
            number: "02",
            title: "Raid Protection",
            description: "Detects rapid member joins using a threshold of 10 joins within 10 seconds. Supports automated and manual lockdown behavior with permission restoration after the threat passes.",
          },
          {
            number: "03",
            title: "Message Security",
            description: "Analyzes messages using multiple detectors: spam detection, mention abuse detection, duplicate-message detection, invite detection, and URL/link detection.",
          },
          {
            number: "04",
            title: "Moderation",
            description: "Provides slash commands for server moderation: /warn, /timeout, /kick, /ban, /lockdown, /unlock, /history, and /warnings. All moderation actions and infractions are tracked through the existing system.",
          },
        ],
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "What 𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 Monitors",
        cards: [
          {
            title: "Anti-Nuke Events",
            items: [
              "Channel creation / deletion / update",
              "Role creation / deletion / update",
              "Member bans and kicks",
              "Bot additions",
              "Webhook creation / update / deletion",
              "Dangerous permission changes",
            ],
          },
          {
            title: "Message Security",
            items: [
              "Spam detection",
              "Mention abuse detection",
              "Duplicate-message detection",
              "Invite link detection",
              "URL / link detection",
            ],
          },
          {
            title: "Moderation Tools",
            items: [
              "/warn — Issue a warning",
              "/timeout — Temporarily restrict a user",
              "/kick — Remove a member",
              "/ban — Ban a member",
              "/lockdown — Lock server channels",
              "/unlock — Restore channel access",
            ],
          },
          {
            title: "Security Commands",
            items: [
              "/security status — Current protection status",
              "/security dashboard — Open the dashboard",
              "/security rules — View active security rules",
              "/security events — Recent security events",
            ],
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Moderation Commands",
        items: [
          "<strong>/warn</strong> — Issue a warning to a member",
          "<strong>/timeout</strong> — Temporarily restrict a member",
          "<strong>/kick</strong> — Remove a member from the server",
          "<strong>/ban</strong> — Ban a member from the server",
          "<strong>/lockdown</strong> — Lock server channels",
          "<strong>/unlock</strong> — Restore channel access",
          "<strong>/history</strong> — View moderation history",
          "<strong>/warnings</strong> — View warnings for a member",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Security Commands",
        items: [
          "<strong>/security status</strong> — View current protection status",
          "<strong>/security dashboard</strong> — Open the real-time security dashboard",
          "<strong>/security rules</strong> — View active security rules",
          "<strong>/security events</strong> — View recent security events",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Real-Time Security Dashboard",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 includes a real-time security dashboard that provides live visibility into server protection. The dashboard displays protection status, server security status, active security modules, security metrics, recent security events, and moderation/disciplinary information. It uses a real-time update model with periodic refresh and event-triggered updates to keep administrators informed of current server activity.",
      },
    },
    {
      type: "text",
      props: {
        title: "Data Persistence",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 uses Supabase for persistent data storage. The bot stores infractions, moderation history, warning data, and security/event history, enabling consistent tracking of server security activity across sessions and providing reliable audit trails for moderation decisions.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Architecture",
        items: [
          "<strong>Language</strong> — Python",
          "<strong>Platform</strong> — Discord (Discord.py / Discord API)",
          "<strong>Database</strong> — Supabase",
          "<strong>Security</strong> — Anti-Nuke + Raid Protection + Message Security + Moderation",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Project Details",
        items: [
          "<strong>Project</strong> — 𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
          "<strong>Type</strong> — Discord Security & Moderation Bot",
          "<strong>Platform</strong> — Discord",
          "<strong>Language</strong> — Python",
          "<strong>Database</strong> — Supabase",
          "<strong>Core</strong> — Anti-Nuke + Raid Protection + Message Security + Moderation",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
