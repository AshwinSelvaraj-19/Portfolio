import type { ProjectContent } from "../../types";

export default {
  title: "PhoenixMic",
  theme: "dark",
  tags: ["python", "pyside6", "dsp", "supabase"],
  videoBorder: false,
  heroImage: "/project-images/phoenixmic.PNG",
  description:
    "Real-Time Audio DSP Engine.<br/><br/>A Windows desktop application for real-time microphone audio processing, built around a configurable DSP pipeline with effect presets and a PySide6 interface.",
  components: [
    {
      type: "text",
      props: {
        title: "Project Overview",
        text: "PhoenixMic is a desktop audio processing application designed for real-time microphone voice processing. It provides a configurable DSP pipeline, audio effects, effect presets with serialization, and a PySide6-based user interface for controlling microphone input processing.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Core Capabilities",
        items: [
          {
            number: "01",
            title: "Real-Time Audio Processing",
            description: "Processes microphone input through a configurable DSP pipeline with low-latency audio handling.",
          },
          {
            number: "02",
            title: "DSP Pipeline",
            description: "Modular audio processing chain supporting configurable effect routing and signal flow.",
          },
          {
            number: "03",
            title: "Audio Effects",
            description: "Built-in DSP effects for voice and audio processing with adjustable parameters.",
          },
          {
            number: "04",
            title: "Preset System",
            description: "Effect presets with serialization support for saving and loading processing configurations.",
          },
          {
            number: "05",
            title: "Desktop UI",
            description: "PySide6-based interface for controlling audio processing, effects, and microphone settings.",
          },
          {
            number: "06",
            title: "Microphone Control",
            description: "Direct microphone input management with real-time monitoring and processing feedback.",
          },
        ],
      },
    },
    {
      type: "capabilityGrid",
      props: {
        title: "What PhoenixMic Provides",
        cards: [
          {
            title: "Audio Engine",
            items: [
              "Real-time microphone capture",
              "Configurable DSP pipeline",
              "Low-latency audio processing",
              "Modular signal routing",
            ],
          },
          {
            title: "Voice Processing",
            items: [
              "Microphone input handling",
              "Real-time voice monitoring",
              "Audio level management",
              "Processing feedback",
            ],
          },
          {
            title: "Effects",
            items: [
              "Built-in DSP effects",
              "Adjustable effect parameters",
              "Effect chain configuration",
              "Signal processing modules",
            ],
          },
          {
            title: "Presets & Serialization",
            items: [
              "Effect preset management",
              "Configuration serialization",
              "Save/load processing states",
              "Preset library support",
            ],
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Architecture",
        items: [
          "<strong>Language</strong> — Python",
          "<strong>UI Framework</strong> — PySide6 (Qt for Python)",
          "<strong>Audio Processing</strong> — Custom DSP pipeline with real-time processing",
          "<strong>Data / Licensing</strong> — Supabase integration for license activation",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Project Details",
        items: [
          "<strong>Project</strong> — PhoenixMic",
          "<strong>Type</strong> — Desktop Audio Application",
          "<strong>Platform</strong> — Windows",
          "<strong>UI</strong> — PySide6",
          "<strong>Language</strong> — Python",
          "<strong>Processing</strong> — Real-Time DSP / Audio Processing",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
