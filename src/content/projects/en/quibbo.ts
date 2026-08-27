import type { ProjectContent } from "../../types";

export default {
  title: "Emergency Route Optimizer",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://ashwinselvaraj-19.github.io/ERO/",
  source: "https://github.com/AshwinSelvaraj-19/ERO",
  heroImage: "/project-images/emergency-route-optimizer.PNG",
  description:
    'An emergency route planning web application designed to calculate efficient routes and adapt to changing traffic conditions.',
  components: [
    {
      type: "text",
      props: {
        title: "Project Overview",
        text: "Emergency Route Optimizer (ERO) is a web application focused on emergency route planning. It tracks accidents, ambulances, and hospitals, calculates efficient emergency routes, dynamically reroutes around traffic conditions, and integrates nearby hospitals into the routing flow.",
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "Core Features",
        items: [
          {
            number: "01",
            title: "Real-Time Location Tracking",
            description: "Monitors accidents, ambulances, and hospitals.",
          },
          {
            number: "02",
            title: "Fastest Route Calculation",
            description: "Calculates optimal routes for emergency vehicles.",
          },
          {
            number: "03",
            title: "Traffic-Aware Rerouting",
            description: "Adjusts routes dynamically to avoid congestion.",
          },
          {
            number: "04",
            title: "Hospital Network",
            description: "Supports rerouting toward nearby healthcare facilities.",
          },
        ],
      },
    },
    {
      type: "featureGrid",
      props: {
        title: "How It Works",
        items: [
          {
            number: "01",
            title: "Track",
            description: "Monitor emergency incidents, ambulances, and hospitals.",
          },
          {
            number: "02",
            title: "Calculate",
            description: "Determine an efficient emergency route.",
          },
          {
            number: "03",
            title: "Reroute",
            description: "Adapt the route when traffic conditions change.",
          },
          {
            number: "04",
            title: "Navigate",
            description: "Guide the emergency response toward the selected destination.",
          },
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Technology",
        items: ["HTML5", "CSS3", "Vanilla JavaScript"],
      },
    },
    {
      type: "list",
      props: {
        title: "Implementation",
        items: [
          "<strong>index.html</strong> — main entry / UI",
          "<strong>mainpage.html</strong> — core dashboard",
          "<strong>results.html</strong> — route results / details",
          "<strong>mainpage.css</strong> — dashboard styling",
          "<strong>start.css</strong> — landing / start styling",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Next Steps",
        text: "Potential future improvements:<br/><br/>• Real-time external map API integration<br/>• Geolocation auto-detection<br/>• Live marker movement<br/>• Mobile-first / PWA support<br/>• Advanced route filters<br/>• Healthcare stakeholder access",
      },
    },
  ],
} as const satisfies ProjectContent;
