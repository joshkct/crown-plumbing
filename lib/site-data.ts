import {
  Building2,
  CircleGauge,
  Droplets,
  Flame,
  HousePlug,
  Siren,
  Toilet,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  phoneDisplay: "000 000 0000",
  phoneHref: "tel:0000000000",
  whatsappHref:
    "https://wa.me/0000000000?text=Hello%20Crown%20Plumbing.%20I%20need%20assistance%20with%20a%20plumbing%20requirement.",
  email: "chris@crownplumbing.co.za",
  emailHref: "mailto:chris@crownplumbing.co.za",
};

export const serviceAreas = [
  "Southern Suburbs",
  "Atlantic Seaboard",
  "Hout Bay",
  "Cape Town",
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  detail: string;
  capabilities: string[];
  cta: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "new-developments",
    title: "New buildings and developments",
    shortTitle: "New developments",
    summary: "Complete plumbing installations coordinated from first fix to handover.",
    detail:
      "Crown Plumbing undertakes complete plumbing scopes for new buildings and developments, coordinating with the construction programme through installation, testing, snagging, and final handover.",
    capabilities: [
      "Hot- and cold-water distribution",
      "Below- and above-ground drainage",
      "Soil, waste, and vent systems",
      "First-fix and second-fix plumbing",
      "Sanitaryware and fixture installation",
      "Geyser and hot-water systems",
      "Coordination with builders and trades",
      "Testing, snagging, and handover",
    ],
    cta: "Discuss a new-build scope",
    icon: Building2,
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency plumbing",
    shortTitle: "Emergency plumbing",
    summary: "24/7 support for urgent plumbing failures requiring prompt attention.",
    detail:
      "Active leaks, failed plumbing components, and sudden water-related problems can quickly affect the surrounding property. Contact Crown Plumbing with the issue and location so the appropriate response can be arranged.",
    capabilities: [
      "Active plumbing leaks",
      "Failed fixtures or fittings",
      "Sudden loss of plumbing function",
      "Urgent fault assessment",
    ],
    cta: "Call about an urgent issue",
    icon: Siren,
  },
  {
    slug: "blocked-drains",
    title: "Blocked drains",
    shortTitle: "Blocked drains",
    summary: "Assessment and clearing of blocked or slow-moving drainage systems.",
    detail:
      "A blocked drain may be caused by local build-up, an obstruction, or a wider issue within the drainage system. We assess the affected area, carry out appropriate clearing work, and advise where further investigation is necessary.",
    capabilities: [
      "Blocked sinks and basins",
      "Slow-draining fixtures",
      "Blocked waste lines",
      "Recurring drainage problems",
    ],
    cta: "Discuss a blocked drain",
    icon: Droplets,
  },
  {
    slug: "geyser-services",
    title: "Geyser repair and installation",
    shortTitle: "Geyser services",
    summary: "Fault finding, repair, replacement, and installation of geyser systems.",
    detail:
      "Crown Plumbing assists with geyser-related faults, repairs, replacements, and new installations. The solution is based on the existing system, property requirement, and applicable installation standards.",
    capabilities: [
      "Geyser fault assessment",
      "Leaks and failed components",
      "Geyser replacement",
      "New geyser installation",
    ],
    cta: "Enquire about geyser services",
    icon: Flame,
  },
  {
    slug: "toilet-sewerage",
    title: "Toilet and sewerage services",
    shortTitle: "Toilet & sewerage",
    summary: "Repairs and maintenance for toilets, waste connections, and sewerage plumbing.",
    detail:
      "Toilet and sewerage problems require accurate assessment and careful handling. We assist with faulty fixtures, drainage concerns, leaks, and related sanitary plumbing work.",
    capabilities: [
      "Toilet repairs and replacements",
      "Leaking or running toilets",
      "Waste-pipe concerns",
      "Sewerage-related plumbing faults",
    ],
    cta: "Discuss a sanitary plumbing issue",
    icon: Toilet,
  },
  {
    slug: "burst-pipes-leaks",
    title: "Burst pipes and leaks",
    shortTitle: "Pipes & leaks",
    summary: "Fault assessment and repair of visible or concealed plumbing leaks.",
    detail:
      "Visible and concealed leaks can waste water and damage surrounding finishes or structures. Crown Plumbing assesses the evidence, identifies the likely source, and recommends the appropriate repair approach.",
    capabilities: [
      "Burst or damaged pipes",
      "Visible plumbing leaks",
      "Suspected concealed leaks",
      "Faulty pipe connections",
    ],
    cta: "Get help with a leak",
    icon: Wrench,
  },
  {
    slug: "maintenance",
    title: "Plumbing maintenance",
    shortTitle: "Maintenance",
    summary: "Planned and reactive maintenance for residential and commercial properties.",
    detail:
      "Routine maintenance can identify wear, small leaks, and failing components before they become larger disruptions. We provide practical support tailored to the property and its plumbing requirements.",
    capabilities: [
      "General plumbing inspections",
      "Fixture and fitting maintenance",
      "Preventative repairs",
      "Property maintenance support",
    ],
    cta: "Request maintenance support",
    icon: CircleGauge,
  },
  {
    slug: "heat-pumps-solar-geysers",
    title: "Heat pumps and solar geysers",
    shortTitle: "Heat pumps & solar",
    summary: "Installation and support for energy-conscious hot-water systems.",
    detail:
      "Heat-pump and solar-geyser systems require careful planning, correct integration, and appropriate maintenance. Crown Plumbing assists with installation, repair, and maintenance requirements.",
    capabilities: [
      "Heat-pump plumbing support",
      "Solar-geyser plumbing support",
      "System maintenance",
      "Fault assessment and repair",
    ],
    cta: "Discuss a hot-water system",
    icon: HousePlug,
  },
];

export const credentials = [
  {
    title: "IOPSA member",
    body: "Committed to professional participation and recognised plumbing-industry standards.",
    image: "/images/iopsa-logo.png",
    imageAlt: "Institute of Plumbing South Africa logo",
  },
  {
    title: "PIRB registered",
    body: "Registered within a recognised framework for plumber accountability in South Africa.",
    image: "/images/pirb-logo.webp",
    imageAlt: "Plumbing Industry Registration Board logo",
  },
];
