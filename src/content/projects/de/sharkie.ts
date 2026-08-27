import type { ProjectContent } from "../../types";

export default {
  title: "Phoenix Bedrohungserkennungssystem",
  theme: "dark",
  tags: ["python", "fastapi", "psutil", "pefile", "hashlib", "requests"],
  videoBorder: false,
  heroImage: "/project-images/sentinel-security.PNG",
  description:
    "Ein Windows-Sicherheitsanalyse-System zur Identifizierung und Untersuchung potenziell verdächtiger Prozesse und ausführbarer Dateien.",
  components: [
    {
      type: "text",
      props: {
        title: "Projektübersicht",
        text: 'Phoenix analysiert laufende Windows-Prozesse und ausführbare Dateien mithilfe mehrerer Sicherheitssignale und stützt sich nicht auf eine einzelne Verdachtsregel.',
      },
    },
    {
      type: "text",
      props: {
        text: '<span style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-weight: 600; color: var(--color-text-400);">Prozesssammlung &nbsp;→&nbsp; Analyse der ausführbaren Datei &nbsp;→&nbsp; Signaturüberprüfung &nbsp;→&nbsp; SHA-256-Hashing &nbsp;→&nbsp; Reputation Check &nbsp;→&nbsp; Kontextanalyse &nbsp;→&nbsp; Risikobewertung</span>',
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "Was Phoenix analysiert",
        cards: [
          {
            title: "Prozessüberwachung",
            items: [
              "Prozessname",
              "PID",
              "Pfad der ausführbaren Datei",
              "CPU-Auslastung",
              "Speichernutzung",
              "Übergeordneter Prozess",
            ],
          },
          {
            title: "Dateianalyse",
            items: [
              "Inspektion ausführbarer Dateien",
              "SHA-256-Hashing",
              "Datei-/Signaturüberprüfung",
              "Zugriff auf Speicherort der ausführbaren Datei",
            ],
          },
          {
            title: "Reputationsanalyse",
            items: [
              "VirusTotal-Suche",
              "Hash-basierte Reputationprüfung",
              "Externe Bedrohungsintelligenz bei Anfrage",
            ],
          },
          {
            title: "Risikoanalyse",
            items: [
              "Mehrere Sicherheitssignale",
              "Kontext des übergeordneten Prozesses",
              "Pfad-/Kontextanalyse",
              "Lokale Whitelist-Informationen",
              "Kombinierte Risikobewertung",
            ],
          },
        ],
      },
    },
    {
      type: "detectionPipeline",
      props: {
        title: "So funktioniert die Erkennung",
        steps: [
          {
            number: "01",
            title: "Prozesssammlung",
            description: "Laufende Windows-Prozessinformationen erfassen.",
          },
          {
            number: "02",
            title: "Kontextanalyse",
            description: "Speicherort der ausführbaren Datei und übergeordnete Prozessbeziehungen prüfen.",
          },
          {
            number: "03",
            title: "Dateiidentifikation",
            description: "Die mit dem Prozess verbundene ausführbare Datei finden und analysieren.",
          },
          {
            number: "04",
            title: "Hash-Generierung",
            description: "Einen SHA-256-Hash zur Dateiidentifikation erstellen.",
          },
          {
            number: "05",
            title: "Signaturprüfung",
            description: "Ausführbare Datei-/Signaturinformationen überprüfen.",
          },
          {
            number: "06",
            title: "Reputationsprüfung",
            description: "Bei Anfrage/Verfügbarkeit VirusTotal-Analyse verwenden.",
          },
          {
            number: "07",
            title: "Risikobewertung",
            description: "Verfügbare Signale zu einer kontextuellen Risikobewertung kombinieren.",
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kontext statt Annahmen",
        text: "Phoenix betrachtet kein einzelnes Attribut als Beweis für schädliche Aktivitäten. Prozessverhalten, Kontext der ausführbaren Datei, übergeordnete Prozessbeziehungen, Signaturen, Hashes, Whitelist-Informationen und Reputations-signale werden gemeinsam berücksichtigt.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technische Architektur",
        items: [
          "<strong>Frontend</strong> — HTML, CSS, JavaScript, Three.js, Particles.js, Chart.js",
          "<strong>Backend</strong> — Python, FastAPI",
          "<strong>Sicherheit / Analyse</strong> — psutil, PEfile, hashlib, requests",
          "<strong>Daten / Persistenz</strong> — Supabase",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Projekt-Stats",
        items: [
          "<strong>Prozessanalyse</strong> — Windows-Prozessinspektion",
          "<strong>Dateiidentifikation</strong> — SHA-256-Hashing",
          "<strong>Reputation</strong> — VirusTotal-Integration",
          "<strong>Risikomodell</strong> — Multi-Signal-Analyse",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
