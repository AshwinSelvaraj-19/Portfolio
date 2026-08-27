import type { ProjectContent } from "../../types";

export default {
  title: "Phoenix Threat Detection System",
  theme: "dark",
  tags: ["python", "fastapi", "psutil", "pefile", "hashlib", "requests"],
  videoBorder: false,
  heroImage: "/project-images/sentinel-security.PNG",
  description:
    "A Windows security analysis system for identifying and investigating potentially suspicious processes and executable files.",
  components: [
    {
      type: "text",
      props: {
        title: "Project Overview",
        text: 'Phoenix analyzes running Windows processes and executable files using multiple security signals rather than relying on a single suspicious-process rule.',
      },
    },
    {
      type: "text",
      props: {
        text: '<span style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-weight: 600; color: var(--color-text-400);">Process Collection &nbsp;→&nbsp; Executable Analysis &nbsp;→&nbsp; Signature Verification &nbsp;→&nbsp; SHA-256 Hashing &nbsp;→&nbsp; Reputation Check &nbsp;→&nbsp; Context Analysis &nbsp;→&nbsp; Risk Scoring</span>',
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "What Phoenix Analyzes",
        cards: [
          {
            title: "Process Monitoring",
            items: [
              "Process name",
              "PID",
              "Executable path",
              "CPU usage",
              "Memory usage",
              "Parent process",
            ],
          },
          {
            title: "File Analysis",
            items: [
              "Executable inspection",
              "SHA-256 hashing",
              "File/signature verification",
              "Executable location access",
            ],
          },
          {
            title: "Reputation Analysis",
            items: [
              "VirusTotal lookup",
              "Hash-based reputation checking",
              "External threat intelligence when requested",
            ],
          },
          {
            title: "Risk Analysis",
            items: [
              "Multiple security signals",
              "Parent-process context",
              "Path/context analysis",
              "Local whitelist information",
              "Combined risk scoring",
            ],
          },
        ],
      },
    },
    {
      type: "detectionPipeline",
      props: {
        title: "How the Detection Works",
        steps: [
          {
            number: "01",
            title: "Process Collection",
            description: "Collect running Windows process information.",
          },
          {
            number: "02",
            title: "Context Analysis",
            description: "Inspect executable location and parent-process relationships.",
          },
          {
            number: "03",
            title: "File Identification",
            description: "Locate and analyze the executable associated with the process.",
          },
          {
            number: "04",
            title: "Hash Generation",
            description: "Generate a SHA-256 hash for file identification.",
          },
          {
            number: "05",
            title: "Signature Check",
            description: "Check executable/signature information.",
          },
          {
            number: "06",
            title: "Reputation Check",
            description: "Use VirusTotal analysis when requested/available.",
          },
          {
            number: "07",
            title: "Risk Score",
            description: "Combine available signals into a contextual risk assessment.",
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Context Over Assumptions",
        text: "Phoenix does not treat a single attribute as proof of malicious activity. Process behavior, executable context, parent process relationships, signatures, hashes, whitelist information, and reputation signals are considered together.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Architecture",
        items: [
          "<strong>Frontend</strong> — HTML, CSS, JavaScript, Three.js, Particles.js, Chart.js",
          "<strong>Backend</strong> — Python, FastAPI",
          "<strong>Security / analysis</strong> — psutil, PEfile, hashlib, requests",
          "<strong>Data / persistence</strong> — Supabase",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Project Stats",
        items: [
          "<strong>Process Analysis</strong> — Windows process inspection",
          "<strong>File Identification</strong> — SHA-256 hashing",
          "<strong>Reputation</strong> — VirusTotal integration",
          "<strong>Risk Model</strong> — Multi-signal analysis",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
