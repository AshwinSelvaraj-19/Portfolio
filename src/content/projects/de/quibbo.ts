import type { ProjectContent } from "../../types";

export default {
  title: "Notfallrouten-Optimierung",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://ashwinselvaraj-19.github.io/ERO/",
  source: "https://github.com/AshwinSelvaraj-19/ERO",
  heroImage: "/project-images/emergency-route-optimizer.PNG",
  description:
    'Eine Web-Anwendung zur Notfallroutenplanung, die effiziente Routen berechnet und sich an sich ändernde Verkehrsbedingungen anpasst.',
  components: [
    {
      type: "text",
      props: {
        title: "Projektübersicht",
        text: "Emergency Route Optimizer (ERO) ist eine Web-Anwendung für die Notfallroutenplanung. Sie verfolgt Unfälle, Krankenwagen und Krankenhäuser, berechnet effiziente Notfallrouten, leitet bei Verkehrsbedingungen um und integriert nahegelegene Krankenhäuser in den Routing-Ablauf.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Hauptfunktionen",
        items: [
          {
            number: "01",
            title: "Echtzeit-Ortung",
            description: "Überwacht Unfälle, Krankenwagen und Krankenhäuser.",
          },
          {
            number: "02",
            title: "Schnellste Routenberechnung",
            description: "Berechnet optimale Routen für Einsatzfahrzeuge.",
          },
          {
            number: "03",
            title: "Verkehrsbewusste Umleitung",
            description: "Passt Routen dynamisch an, um Staus zu vermeiden.",
          },
          {
            number: "04",
            title: "Krankenhausnetzwerk",
            description: "Unterstützt Umleitungen zu nahegelegenen Gesundheitseinrichtungen.",
          },
        ],
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "So funktioniert es",
        items: [
          {
            number: "01",
            title: "Verfolgen",
            description: "Notfallereignisse, Krankenwagen und Krankenhäuser überwachen.",
          },
          {
            number: "02",
            title: "Berechnen",
            description: "Eine effiziente Notfallroute ermitteln.",
          },
          {
            number: "03",
            title: "Umleiten",
            description: "Die Route anpassen, wenn sich die Verkehrsbedingungen ändern.",
          },
          {
            number: "04",
            title: "Navigieren",
            description: "Die Notfallreaktion zum gewählten Ziel leiten.",
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Technologie",
        items: ["HTML5", "CSS3", "Vanilla JavaScript"],
      },
    },
    {
      type: "list",
      props: {
        title: "Implementierung",
        items: [
          "<strong>index.html</strong> — Haupteinstieg / UI",
          "<strong>mainpage.html</strong> — Kern-Dashboard",
          "<strong>results.html</strong> — Routenergebnisse / Details",
          "<strong>mainpage.css</strong> — Dashboard-Styling",
          "<strong>start.css</strong> — Landing / Start-Styling",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Nächste Schritte",
        text: "Mögliche zukünftige Verbesserungen:<br/><br/>• Integration einer Echtzeit-Karten-API<br/>• Geolocation-Erkennung<br/>• Live-Marker-Bewegung<br/>• Mobile-first / PWA-Unterstützung<br/>• Erweiterte Routenfilter<br/>• Zugang für Gesundheitsakteure",
      },
    },
  ],
} as const satisfies ProjectContent;
