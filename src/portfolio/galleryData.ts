import g01 from "./assets/gallery-01.jpg";
import g02 from "./assets/gallery-02.jpg";
import g03 from "./assets/gallery-03.jpg";
import g04 from "./assets/gallery-04.jpg";
import g05 from "./assets/gallery-05.jpg";
import g06 from "./assets/gallery-06.jpg";
import g07 from "./assets/gallery-07.jpg";
import g08 from "./assets/gallery-08.jpg";

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  width: number;
  height: number;
};

export const categories = [
  "All",
  "Portrait",
  "Landscape",
  "Wedding",
  "Editorial",
  "Street",
  "Lifestyle",
] as const;

export const gallery: GalleryItem[] = [
  { src: g01, title: "Golden Hour", category: "Portrait", width: 800, height: 1100 },
  { src: g02, title: "Above the Fog", category: "Landscape", width: 1100, height: 800 },
  { src: g03, title: "The Vow", category: "Wedding", width: 800, height: 1000 },
  { src: g04, title: "Concrete Light", category: "Editorial", width: 800, height: 800 },
  { src: g05, title: "After the Rain", category: "Street", width: 800, height: 1150 },
  { src: g06, title: "In Motion", category: "Editorial", width: 1100, height: 800 },
  { src: g07, title: "Still Waters", category: "Landscape", width: 800, height: 950 },
  { src: g08, title: "Together", category: "Lifestyle", width: 800, height: 1050 },
  { src: g01, title: "First Light", category: "Portrait", width: 800, height: 1100 },
  { src: g05, title: "Neon Streets", category: "Street", width: 800, height: 1150 },
  { src: g02, title: "Quiet Ridge", category: "Landscape", width: 1100, height: 800 },
  { src: g03, title: "Forever", category: "Wedding", width: 800, height: 1000 },
];
