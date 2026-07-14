import Template01 from "./Template01Editorial";
import Template02 from "./Template02Swiss";
import Template03 from "./Template03Cinematic";
import Template04 from "./Template04Brutalist";
import Template05 from "./Template05Lifestyle";
import Template06 from "./Template06Bento";
import Template07 from "./Template07Magazine";
import Template08 from "./Template08Filmstrip";
import Template09 from "./Template09Luxury";
import Template10 from "./Template10Playful";

export type TemplateMeta = {
  slug: string;
  name: string;
  tagline: string;
  vibe: string;
  swatch: string[]; // representative colors for the index tile
  component: React.ComponentType;
};

export const templates: TemplateMeta[] = [
  {
    slug: "editorial",
    name: "01 · Editorial Serif",
    tagline: "Warm cream, elegant serif, magazine-cover hero.",
    vibe: "Editorial",
    swatch: ["#f5f0e6", "#e8dcc4", "#2b2b2b", "#8b6f3a"],
    component: Template01,
  },
  {
    slug: "swiss",
    name: "02 · Minimal Swiss",
    tagline: "Grid-first, tiny type, endless whitespace.",
    vibe: "Minimal",
    swatch: ["#ffffff", "#f2f2f2", "#0a0a0a", "#ff3b30"],
    component: Template02,
  },
  {
    slug: "cinematic",
    name: "03 · Dark Cinematic",
    tagline: "Fullscreen imagery on black. Film feel.",
    vibe: "Dark",
    swatch: ["#0a0a0a", "#1a1a1a", "#e6e6e6", "#c9a84c"],
    component: Template03,
  },
  {
    slug: "brutalist",
    name: "04 · Bold Brutalist",
    tagline: "Massive type, hard grids, high contrast.",
    vibe: "Brutalist",
    swatch: ["#ffffff", "#0a0a0a", "#ffeb3b", "#ff3b30"],
    component: Template04,
  },
  {
    slug: "lifestyle",
    name: "05 · Warm Lifestyle",
    tagline: "Blush, sage, script accents — weddings & family.",
    vibe: "Warm",
    swatch: ["#faf3ee", "#e8c5d0", "#a8c0a0", "#7d5a4f"],
    component: Template05,
  },
  {
    slug: "bento",
    name: "06 · Modern Bento",
    tagline: "Dark bento grid, sans-serif, studio-agency energy.",
    vibe: "Modern",
    swatch: ["#0f0f12", "#1c1c22", "#f2f2f2", "#7dd3fc"],
    component: Template06,
  },
  {
    slug: "magazine",
    name: "07 · Magazine",
    tagline: "Multi-column editorial with drop caps.",
    vibe: "Editorial",
    swatch: ["#f8f5ef", "#111111", "#b23a1e", "#5a5a5a"],
    component: Template07,
  },
  {
    slug: "filmstrip",
    name: "08 · Film Strip",
    tagline: "Horizontal scroll, sprocket edges, analog film.",
    vibe: "Analog",
    swatch: ["#111111", "#2b2b2b", "#e8dcc4", "#d84a1a"],
    component: Template08,
  },
  {
    slug: "luxury",
    name: "09 · Luxury Serif",
    tagline: "Deep black, brushed gold, high-end couture.",
    vibe: "Luxury",
    swatch: ["#0d0d0d", "#1a1a1a", "#c9a84c", "#f0d78c"],
    component: Template09,
  },
  {
    slug: "playful",
    name: "10 · Playful Pastel",
    tagline: "Rounded shapes, pastel palette, cheerful.",
    vibe: "Playful",
    swatch: ["#fef0f5", "#c9a0dc", "#7dd3fc", "#fecaca"],
    component: Template10,
  },
];
