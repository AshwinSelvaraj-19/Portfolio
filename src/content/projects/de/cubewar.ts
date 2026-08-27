import type { ProjectContent } from "../../types";

export default {
  title: "PhoenixMic",
  theme: "dark",
  tags: ["python", "pyside6", "dsp", "supabase"],
  videoBorder: false,
  heroImage: "/project-images/phoenixmic.PNG",
  description:
    "Echtzeit-Audio-DSP-Engine.<br/><br/>Eine Windows-Desktop-Anwendung zur Echtzeit-Mikrofon-Audioverarbeitung, basierend auf einer konfigurierbaren DSP-Pipeline mit Effekt-Presets und einer PySide6-Oberfläche.",
  components: [
    {
      type: "text",
      props: {
        title: "Projektübersicht",
        text: "PhoenixMic ist eine Desktop-Audioverarbeitungsanwendung für Echtzeit-Mikrofon-Stimmverarbeitung. Sie bietet eine konfigurierbare DSP-Pipeline, Audioeffekte, Effekt-Presets mit Serialisierung und eine PySide6-basierte Benutzeroberfläche zur Steuerung der Mikrofoneingangsverarbeitung.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Kernfunktionen",
        items: [
          {
            number: "01",
            title: "Echtzeit-Audioverarbeitung",
            description: "Verarbeitet Mikrofoneingaben über eine konfigurierbare DSP-Pipeline mit niedriger Latenz.",
          },
          {
            number: "02",
            title: "DSP-Pipeline",
            description: "Modulare Audioprocessing-Kette mit konfigurierbarem Effekt-Routing und Signalfloss.",
          },
          {
            number: "03",
            title: "Audioeffekte",
            description: "Eingebaute DSP-Effekte für Stimm- und Audioverarbeitung mit einstellbaren Parametern.",
          },
          {
            number: "04",
            title: "Preset-System",
            description: "Effekt-Presets mit Serialisierung zum Speichern und Laden von Verarbeitungskonfigurationen.",
          },
          {
            number: "05",
            title: "Desktop-UI",
            description: "PySide6-basierte Oberfläche zur Steuerung von Audioverarbeitung, Effekten und Mikrofoneinstellungen.",
          },
          {
            number: "06",
            title: "Mikrofonsteuerung",
            description: "Direktes Mikrofoneingangsmanagement mit Echtzeit-Monitoring und Verarbeitungsfeedback.",
          },
        ],
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "Was PhoenixMic bietet",
        cards: [
          {
            title: "Audio-Engine",
            items: [
              "Echtzeit-Mikrofonerfassung",
              "Konfigurierbare DSP-Pipeline",
              "Niedriglatente Audioverarbeitung",
              "Modulares Signal-Routing",
            ],
          },
          {
            title: "Stimmverarbeitung",
            items: [
              "Mikrofoneingangsbehandlung",
              "Echtzeit-Stimmmonitoring",
              "Audiopegel-Management",
              "Verarbeitungsfeedback",
            ],
          },
          {
            title: "Effekte",
            items: [
              "Eingebaute DSP-Effekte",
              "Einstellbare Effektparameter",
              "Effektketten-Konfiguration",
              "Signalverarbeitungsmodule",
            ],
          },
          {
            title: "Presets & Serialisierung",
            items: [
              "Effekt-Preset-Verwaltung",
              "Konfigurationsserialisierung",
              "Speichern/Laden von Verarbeitungszuständen",
              "Preset-Bibliothek",
            ],
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Technische Architektur",
        items: [
          "<strong>Sprache</strong> — Python",
          "<strong>UI-Framework</strong> — PySide6 (Qt for Python)",
          "<strong>Audioverarbeitung</strong> — Eigene DSP-Pipeline mit Echtzeitverarbeitung",
          "<strong>Daten / Lizenzierung</strong> — Supabase-Integration zur Lizenzaktivierung",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Projektdetails",
        items: [
          "<strong>Projekt</strong> — PhoenixMic",
          "<strong>Typ</strong> — Desktop-Audioanwendung",
          "<strong>Plattform</strong> — Windows",
          "<strong>UI</strong> — PySide6",
          "<strong>Sprache</strong> — Python",
          "<strong>Verarbeitung</strong> — Echtzeit-DSP / Audioverarbeitung",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
