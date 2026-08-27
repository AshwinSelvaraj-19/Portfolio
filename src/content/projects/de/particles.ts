import type { ProjectContent } from "../../types";

export default {
  title: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
  theme: "dark",
  tags: ["python", "discord", "supabase", "security"],
  videoBorder: false,
  heroImage: "/project-images/security-bot.png",
  description:
    "Discord Security & Anti-Nuke Bot.<br/><br/>Discord-Server-Sicherheits- und Moderationsbot, der Communities vor destruktiven Aktionen, Raids, bösartigen Nachrichten und unbefugter Aktivität schützt.<br/><br/>Bietet automatisierten Anti-Nuke-Schutz, Raid-Erkennung, Nachrichtensicherheit, Moderationswerkzeuge, Sicherheitsereignis-Tracking und ein Echtzeit-Sicherheitsdashboard.",
  components: [
    {
      type: "text",
      props: {
        title: "Projektübersicht",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 ist ein Discord-Bot, der Server vor destruktiven Aktionen, Raids, bösartigen Nachrichten und unbefugter Aktivität schützt. Er bietet automatisierten Anti-Nuke-Schutz, Raid-Erkennung, Nachrichtensicherheitsanalyse, Moderationswerkzeuge, Sicherheitsereignis-Tracking und ein Echtzeit-Sicherheitsdashboard — alles mit Supabase als persistentem Datenspeicher.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Kern-Sicherheitsmodule",
        items: [
          {
            number: "01",
            title: "Anti-Nuke-Schutz",
            description: "Überwacht gefährliche Discord-Server-Aktionen und schützt vor unbefugter destruktiver Aktivität einschließlich Kanal-Erstellung/Löschung/Aktualisierung, Rollen-Erstellung/Löschung/Aktualisierung, Mitgliederverbote, Mitglieder-Kicks, Bot-Hinzufügungen, Webhook-Erstellung/Aktualisierung/Löschung und gefährliche Berechtigungs-/Überschreibungsänderungen. Enthält vertrauenswürdiger-Benutzer/Owner-Schutz und Actor-Validierung.",
          },
          {
            number: "02",
            title: "Raid-Schutz",
            description: "Erkennt schnelle Mitglieder-Beitritte mit einem Schwellenwert von 10 Beitritten innerhalb von 10 Sekunden. Unterstützt automatisiertes und manuelles Lockdown-Verhalten mit Berechtigungswiederherstellung nach Bedrohungsende.",
          },
          {
            number: "03",
            title: "Nachrichtensicherheit",
            description: "Analysiert Nachrichten mit mehreren Detektoren: Spam-Erkennung, Erwähnungsmissbrauch-Erkennung, Duplikat-Nachrichten-Erkennung, Einladungserkennung und URL/Link-Erkennung.",
          },
          {
            number: "04",
            title: "Moderation",
            description: "Bietet Slash-Befehle für Server-Moderation: /warn, /timeout, /kick, /ban, /lockdown, /unlock, /history und /warnings. Alle Moderationsaktionen und Verstöße werden über das System erfasst.",
          },
        ],
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "Was 𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 überwacht",
        cards: [
          {
            title: "Anti-Nuke-Ereignisse",
            items: [
              "Kanal-Erstellung / Löschung / Aktualisierung",
              "Rollen-Erstellung / Löschung / Aktualisierung",
              "Mitgliederverbote und -kicks",
              "Bot-Hinzufügungen",
              "Webhook-Erstellung / Aktualisierung / Löschung",
              "Gefährliche Berechtigungsänderungen",
            ],
          },
          {
            title: "Nachrichtensicherheit",
            items: [
              "Spam-Erkennung",
              "Erwähnungsmissbrauch-Erkennung",
              "Duplikat-Nachrichten-Erkennung",
              "Einladungslink-Erkennung",
              "URL / Link-Erkennung",
            ],
          },
          {
            title: "Moderationswerkzeuge",
            items: [
              "/warn — Verwarnung ausstellen",
              "/timeout — Benutzer vorübergehend einschränken",
              "/kick — Mitglied entfernen",
              "/ban — Mitglied bannen",
              "/lockdown — Server-Kanäle sperren",
              "/unlock — Kanalzugang wiederherstellen",
            ],
          },
          {
            title: "Sicherheitsbefehle",
            items: [
              "/security status — Aktueller Schutzstatus",
              "/security dashboard — Dashboard öffnen",
              "/security rules — Aktive Sicherheitsregeln",
              "/security events — Letzte Sicherheitsereignisse",
            ],
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Moderationsbefehle",
        items: [
          "<strong>/warn</strong> — Verwarnung an ein Mitglied ausstellen",
          "<strong>/timeout</strong> — Mitglied vorübergehend einschränken",
          "<strong>/kick</strong> — Mitglied vom Server entfernen",
          "<strong>/ban</strong> — Mitglied vom Server bannen",
          "<strong>/lockdown</strong> — Server-Kanäle sperren",
          "<strong>/unlock</strong> — Kanalzugang wiederherstellen",
          "<strong>/history</strong> — Moderationsverlauf anzeigen",
          "<strong>/warnings</strong> — Verwarnungen eines Mitglieds anzeigen",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Sicherheitsbefehle",
        items: [
          "<strong>/security status</strong> — Aktuellen Schutzstatus anzeigen",
          "<strong>/security dashboard</strong> — Echtzeit-Sicherheitsdashboard öffnen",
          "<strong>/security rules</strong> — Aktive Sicherheitsregeln anzeigen",
          "<strong>/security events</strong> — Letzte Sicherheitsereignisse anzeigen",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Echtzeit-Sicherheitsdashboard",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 enthält ein Echtzeit-Sicherheitsdashboard, das Live-Einblick in den Server-Schutz bietet. Das Dashboard zeigt Schutzstatus, Server-Sicherheitsstatus, aktive Sicherheitsmodule, Sicherheitsmetriken, letzte Sicherheitsereignisse und Moderations-/Disziplinarinformationen. Es verwendet ein Echtzeit-Update-Modell mit periodischem Refresh und ereignisgesteuerten Updates, um Administratoren über aktuelle Serveraktivitäten zu informieren.",
      },
    },
    {
      type: "text",
      props: {
        title: "Datenpersistenz",
        text: "𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 verwendet Supabase als persistenten Datenspeicher. Der Bot speichert Verstöße, Moderationsverlauf, Verwarnungsdaten und Sicherheits-/Ereignisverlauf, was ein konsistentes Tracking der Server-Sicherheitsaktivität über Sitzungen hinweg ermöglicht und zuverlässige Audit-Trails für Moderationsentscheidungen bereitstellt.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technische Architektur",
        items: [
          "<strong>Sprache</strong> — Python",
          "<strong>Plattform</strong> — Discord (Discord.py / Discord API)",
          "<strong>Datenbank</strong> — Supabase",
          "<strong>Sicherheit</strong> — Anti-Nuke + Raid-Schutz + Nachrichtensicherheit + Moderation",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Projektdetails",
        items: [
          "<strong>Projekt</strong> — 𝐇𝐄𝐀𝐕𝐄𝐍 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧",
          "<strong>Typ</strong> — Discord-Sicherheits- und Moderationsbot",
          "<strong>Plattform</strong> — Discord",
          "<strong>Sprache</strong> — Python",
          "<strong>Datenbank</strong> — Supabase",
          "<strong>Kern</strong> — Anti-Nuke + Raid-Schutz + Nachrichtensicherheit + Moderation",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
